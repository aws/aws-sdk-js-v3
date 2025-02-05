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
import { UpdateLogPatternRequest, UpdateLogPatternResponse } from "../models/models_0";
import { de_UpdateLogPatternCommand, se_UpdateLogPatternCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLogPatternCommand}.
 */
export interface UpdateLogPatternCommandInput extends UpdateLogPatternRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLogPatternCommand}.
 */
export interface UpdateLogPatternCommandOutput extends UpdateLogPatternResponse, __MetadataBearer {}

/**
 * <p>Adds a log pattern to a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationInsightsClient(config);
 * const input = { // UpdateLogPatternRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE", // required
 *   PatternName: "STRING_VALUE", // required
 *   Pattern: "STRING_VALUE",
 *   Rank: Number("int"),
 * };
 * const command = new UpdateLogPatternCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLogPatternResponse
 * //   ResourceGroupName: "STRING_VALUE",
 * //   LogPattern: { // LogPattern
 * //     PatternSetName: "STRING_VALUE",
 * //     PatternName: "STRING_VALUE",
 * //     Pattern: "STRING_VALUE",
 * //     Rank: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLogPatternCommandInput - {@link UpdateLogPatternCommandInput}
 * @returns {@link UpdateLogPatternCommandOutput}
 * @see {@link UpdateLogPatternCommandInput} for command's `input` shape.
 * @see {@link UpdateLogPatternCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateLogPatternCommand extends $Command
  .classBuilder<
    UpdateLogPatternCommandInput,
    UpdateLogPatternCommandOutput,
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
  .s("EC2WindowsBarleyService", "UpdateLogPattern", {})
  .n("ApplicationInsightsClient", "UpdateLogPatternCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLogPatternCommand)
  .de(de_UpdateLogPatternCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLogPatternRequest;
      output: UpdateLogPatternResponse;
    };
    sdk: {
      input: UpdateLogPatternCommandInput;
      output: UpdateLogPatternCommandOutput;
    };
  };
}
