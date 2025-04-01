// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLogPatternRequest, CreateLogPatternResponse } from "../models/models_0";
import { de_CreateLogPatternCommand, se_CreateLogPatternCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLogPatternCommand}.
 */
export interface CreateLogPatternCommandInput extends CreateLogPatternRequest {}
/**
 * @public
 *
 * The output of {@link CreateLogPatternCommand}.
 */
export interface CreateLogPatternCommandOutput extends CreateLogPatternResponse, __MetadataBearer {}

/**
 * <p>Adds an log pattern to a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, CreateLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, CreateLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // CreateLogPatternRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE", // required
 *   PatternName: "STRING_VALUE", // required
 *   Pattern: "STRING_VALUE", // required
 *   Rank: Number("int"), // required
 * };
 * const command = new CreateLogPatternCommand(input);
 * const response = await client.send(command);
 * // { // CreateLogPatternResponse
 * //   LogPattern: { // LogPattern
 * //     PatternSetName: "STRING_VALUE",
 * //     PatternName: "STRING_VALUE",
 * //     Pattern: "STRING_VALUE",
 * //     Rank: Number("int"),
 * //   },
 * //   ResourceGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLogPatternCommandInput - {@link CreateLogPatternCommandInput}
 * @returns {@link CreateLogPatternCommandOutput}
 * @see {@link CreateLogPatternCommandInput} for command's `input` shape.
 * @see {@link CreateLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource is already created or in use.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource does not exist in the customer account.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The parameter is not valid.</p>
 *
 * @throws {@link ApplicationInsightsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationInsights service.</p>
 *
 *
 * @public
 */
export class CreateLogPatternCommand extends $Command
  .classBuilder<
    CreateLogPatternCommandInput,
    CreateLogPatternCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "CreateLogPattern", {})
  .n("ApplicationInsightsClient", "CreateLogPatternCommand")
  .f(void 0, void 0)
  .ser(se_CreateLogPatternCommand)
  .de(de_CreateLogPatternCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLogPatternRequest;
      output: CreateLogPatternResponse;
    };
    sdk: {
      input: CreateLogPatternCommandInput;
      output: CreateLogPatternCommandOutput;
    };
  };
}
