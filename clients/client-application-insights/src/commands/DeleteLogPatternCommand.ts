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
import { DeleteLogPatternRequest, DeleteLogPatternResponse } from "../models/models_0";
import { de_DeleteLogPatternCommand, se_DeleteLogPatternCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLogPatternCommand}.
 */
export interface DeleteLogPatternCommandInput extends DeleteLogPatternRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLogPatternCommand}.
 */
export interface DeleteLogPatternCommandOutput extends DeleteLogPatternResponse, __MetadataBearer {}

/**
 * <p>Removes the specified log pattern from a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DeleteLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DeleteLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const input = { // DeleteLogPatternRequest
 *   ResourceGroupName: "STRING_VALUE", // required
 *   PatternSetName: "STRING_VALUE", // required
 *   PatternName: "STRING_VALUE", // required
 * };
 * const command = new DeleteLogPatternCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLogPatternCommandInput - {@link DeleteLogPatternCommandInput}
 * @returns {@link DeleteLogPatternCommandOutput}
 * @see {@link DeleteLogPatternCommandInput} for command's `input` shape.
 * @see {@link DeleteLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for ApplicationInsightsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not understood by the server.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
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
export class DeleteLogPatternCommand extends $Command
  .classBuilder<
    DeleteLogPatternCommandInput,
    DeleteLogPatternCommandOutput,
    ApplicationInsightsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationInsightsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("EC2WindowsBarleyService", "DeleteLogPattern", {})
  .n("ApplicationInsightsClient", "DeleteLogPatternCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLogPatternCommand)
  .de(de_DeleteLogPatternCommand)
  .build() {}
