// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetCredentialReportResponse } from "../models/models_0";
import { de_GetCredentialReportCommand, se_GetCredentialReportCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCredentialReportCommand}.
 */
export interface GetCredentialReportCommandInput {}
/**
 * @public
 *
 * The output of {@link GetCredentialReportCommand}.
 */
export interface GetCredentialReportCommandOutput extends GetCredentialReportResponse, __MetadataBearer {}

/**
 * <p> Retrieves a credential report for the Amazon Web Services account. For more information about the
 *             credential report, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in
 *             the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = {};
 * const command = new GetCredentialReportCommand(input);
 * const response = await client.send(command);
 * // { // GetCredentialReportResponse
 * //   Content: new Uint8Array(),
 * //   ReportFormat: "text/csv",
 * //   GeneratedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetCredentialReportCommandInput - {@link GetCredentialReportCommandInput}
 * @returns {@link GetCredentialReportCommandOutput}
 * @see {@link GetCredentialReportCommandInput} for command's `input` shape.
 * @see {@link GetCredentialReportCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link CredentialReportExpiredException} (client fault)
 *  <p>The request was rejected because the most recent credential report has expired. To
 *       generate a new credential report, use <a>GenerateCredentialReport</a>. For more
 *       information about credential report expiration, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting credential reports</a> in the
 *         <i>IAM User Guide</i>.</p>
 *
 * @throws {@link CredentialReportNotPresentException} (client fault)
 *  <p>The request was rejected because the credential report does not exist. To generate a
 *       credential report, use <a>GenerateCredentialReport</a>.</p>
 *
 * @throws {@link CredentialReportNotReadyException} (client fault)
 *  <p>The request was rejected because the credential report is still being generated.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 */
export class GetCredentialReportCommand extends $Command
  .classBuilder<
    GetCredentialReportCommandInput,
    GetCredentialReportCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "GetCredentialReport", {})
  .n("IAMClient", "GetCredentialReportCommand")
  .f(void 0, void 0)
  .ser(se_GetCredentialReportCommand)
  .de(de_GetCredentialReportCommand)
  .build() {}
