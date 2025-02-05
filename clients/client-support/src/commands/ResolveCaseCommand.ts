// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ResolveCaseRequest, ResolveCaseResponse } from "../models/models_0";
import { de_ResolveCaseCommand, se_ResolveCaseCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SupportClientResolvedConfig } from "../SupportClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResolveCaseCommand}.
 */
export interface ResolveCaseCommandInput extends ResolveCaseRequest {}
/**
 * @public
 *
 * The output of {@link ResolveCaseCommand}.
 */
export interface ResolveCaseCommandOutput extends ResolveCaseResponse, __MetadataBearer {}

/**
 * <p>Resolves a support case. This operation takes a <code>caseId</code> and returns the
 *             initial and final state of the case.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>You must have a Business, Enterprise On-Ramp, or Enterprise Support plan to use the Amazon Web Services Support
 *                         API. </p>
 *                </li>
 *                <li>
 *                   <p>If you call the Amazon Web Services Support API from an account that doesn't have a
 *                         Business, Enterprise On-Ramp, or Enterprise Support plan, the
 *                             <code>SubscriptionRequiredException</code> error message appears. For
 *                         information about changing your support plan, see <a href="http://aws.amazon.com/premiumsupport/">Amazon Web Services Support</a>.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportClient, ResolveCaseCommand } from "@aws-sdk/client-support"; // ES Modules import
 * // const { SupportClient, ResolveCaseCommand } = require("@aws-sdk/client-support"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SupportClient(config);
 * const input = { // ResolveCaseRequest
 *   caseId: "STRING_VALUE",
 * };
 * const command = new ResolveCaseCommand(input);
 * const response = await client.send(command);
 * // { // ResolveCaseResponse
 * //   initialCaseStatus: "STRING_VALUE",
 * //   finalCaseStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResolveCaseCommandInput - {@link ResolveCaseCommandInput}
 * @returns {@link ResolveCaseCommandOutput}
 * @see {@link ResolveCaseCommandInput} for command's `input` shape.
 * @see {@link ResolveCaseCommandOutput} for command's `response` shape.
 * @see {@link SupportClientResolvedConfig | config} for SupportClient's `config` shape.
 *
 * @throws {@link CaseIdNotFound} (client fault)
 *  <p>The requested <code>caseId</code> couldn't be located.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error occurred.</p>
 *
 * @throws {@link SupportServiceException}
 * <p>Base exception class for all service exceptions from Support service.</p>
 *
 * @public
 */
export class ResolveCaseCommand extends $Command
  .classBuilder<
    ResolveCaseCommandInput,
    ResolveCaseCommandOutput,
    SupportClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSupport_20130415", "ResolveCase", {})
  .n("SupportClient", "ResolveCaseCommand")
  .f(void 0, void 0)
  .ser(se_ResolveCaseCommand)
  .de(de_ResolveCaseCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResolveCaseRequest;
      output: ResolveCaseResponse;
    };
    sdk: {
      input: ResolveCaseCommandInput;
      output: ResolveCaseCommandOutput;
    };
  };
}
