// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GenerateCredentialReportResponse } from "../models/models_0";
import { de_GenerateCredentialReportCommand, se_GenerateCredentialReportCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GenerateCredentialReportCommand}.
 */
export interface GenerateCredentialReportCommandInput {}
/**
 * @public
 *
 * The output of {@link GenerateCredentialReportCommand}.
 */
export interface GenerateCredentialReportCommandOutput extends GenerateCredentialReportResponse, __MetadataBearer {}

/**
 * <p> Generates a credential report for the Amazon Web Services account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GenerateCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GenerateCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GenerateCredentialReportCommand(input);
 * const response = await client.send(command);
 * // { // GenerateCredentialReportResponse
 * //   State: "STARTED" || "INPROGRESS" || "COMPLETE",
 * //   Description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GenerateCredentialReportCommandInput - {@link GenerateCredentialReportCommandInput}
 * @returns {@link GenerateCredentialReportCommandOutput}
 * @see {@link GenerateCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GenerateCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class GenerateCredentialReportCommand extends $Command
  .classBuilder<
    GenerateCredentialReportCommandInput,
    GenerateCredentialReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "GenerateCredentialReport", {})
  .n("IAMClient", "GenerateCredentialReportCommand")
  .f(void 0, void 0)
  .ser(se_GenerateCredentialReportCommand)
  .de(de_GenerateCredentialReportCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GenerateCredentialReportResponse;
    };
    sdk: {
      input: GenerateCredentialReportCommandInput;
      output: GenerateCredentialReportCommandOutput;
    };
  };
}
