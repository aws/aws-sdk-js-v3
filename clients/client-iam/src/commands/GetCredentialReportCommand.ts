// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCredentialReportResponse } from "../models/models_0";
import { GetCredentialReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves a credential report for the Amazon Web Services account. For more information about the credential report, see [Getting credential reports](https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html) in the *IAM User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetCredentialReportCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetCredentialReportCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
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
 *
 * The request was rejected because the most recent credential report has expired. To generate a new credential report, use [GenerateCredentialReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html). For more information about credential report expiration, see [Getting credential reports](https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html) in the *IAM User Guide*.
 *
 * @throws {@link CredentialReportNotPresentException} (client fault)
 *
 * The request was rejected because the credential report does not exist. To generate a credential report, use [GenerateCredentialReport](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GenerateCredentialReport.html).
 *
 * @throws {@link CredentialReportNotReadyException} (client fault)
 *
 * The request was rejected because the credential report is still being generated.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class GetCredentialReportCommand extends command<GetCredentialReportCommandInput, GetCredentialReportCommandOutput>(
  _ep0,
  _mw0,
  "GetCredentialReport",
  GetCredentialReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetCredentialReportResponse;
    };
    sdk: {
      input: GetCredentialReportCommandInput;
      output: GetCredentialReportCommandOutput;
    };
  };
}
