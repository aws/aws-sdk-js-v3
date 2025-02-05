// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { StopCisSessionRequest, StopCisSessionResponse } from "../models/models_1";
import { de_StopCisSessionCommand, se_StopCisSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopCisSessionCommand}.
 */
export interface StopCisSessionCommandInput extends StopCisSessionRequest {}
/**
 * @public
 *
 * The output of {@link StopCisSessionCommand}.
 */
export interface StopCisSessionCommandOutput extends StopCisSessionResponse, __MetadataBearer {}

/**
 * <p>
 *          Stops a CIS session.
 *          This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service.
 *          The Amazon Inspector SSM plugin calls this API to stop a CIS scan session for the scan ID supplied by the service.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, StopCisSessionCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, StopCisSessionCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new Inspector2Client(config);
 * const input = { // StopCisSessionRequest
 *   scanJobId: "STRING_VALUE", // required
 *   sessionToken: "STRING_VALUE", // required
 *   message: { // StopCisSessionMessage
 *     status: "SUCCESS" || "FAILED" || "INTERRUPTED" || "UNSUPPORTED_OS", // required
 *     reason: "STRING_VALUE",
 *     progress: { // StopCisMessageProgress
 *       totalChecks: Number("int"),
 *       successfulChecks: Number("int"),
 *       failedChecks: Number("int"),
 *       notEvaluatedChecks: Number("int"),
 *       unknownChecks: Number("int"),
 *       notApplicableChecks: Number("int"),
 *       informationalChecks: Number("int"),
 *       errorChecks: Number("int"),
 *     },
 *     computePlatform: { // ComputePlatform
 *       vendor: "STRING_VALUE",
 *       product: "STRING_VALUE",
 *       version: "STRING_VALUE",
 *     },
 *     benchmarkVersion: "STRING_VALUE",
 *     benchmarkProfile: "STRING_VALUE",
 *   },
 * };
 * const command = new StopCisSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopCisSessionCommandInput - {@link StopCisSessionCommandInput}
 * @returns {@link StopCisSessionCommandOutput}
 * @see {@link StopCisSessionCommandInput} for command's `input` shape.
 * @see {@link StopCisSessionCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class StopCisSessionCommand extends $Command
  .classBuilder<
    StopCisSessionCommandInput,
    StopCisSessionCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "StopCisSession", {})
  .n("Inspector2Client", "StopCisSessionCommand")
  .f(void 0, void 0)
  .ser(se_StopCisSessionCommand)
  .de(de_StopCisSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopCisSessionRequest;
      output: {};
    };
    sdk: {
      input: StopCisSessionCommandInput;
      output: StopCisSessionCommandOutput;
    };
  };
}
