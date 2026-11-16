// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  SendAgentOrganizationalReportDataToS3Request,
  SendAgentOrganizationalReportDataToS3Response,
} from "../models/models_0";
import { SendAgentOrganizationalReportDataToS3$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendAgentOrganizationalReportDataToS3Command}.
 */
export interface SendAgentOrganizationalReportDataToS3CommandInput extends SendAgentOrganizationalReportDataToS3Request {}
/**
 * @public
 *
 * The output of {@link SendAgentOrganizationalReportDataToS3Command}.
 */
export interface SendAgentOrganizationalReportDataToS3CommandOutput extends SendAgentOrganizationalReportDataToS3Response, __MetadataBearer {}

/**
 * <p>Writes the data artifact for a completed Organizational Report directly into a caller-owned S3 bucket. The artifact is written in the requested format to the supplied bucketArn and objectKey, and the resulting S3 location is returned in deliveredTo. This operation creates an S3 object and should not be retried indiscriminately. To download the artifact through a short-lived presigned URL instead, use GetAgentOrganizationalReportData.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, SendAgentOrganizationalReportDataToS3Command } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, SendAgentOrganizationalReportDataToS3Command } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // SendAgentOrganizationalReportDataToS3Request
 *   reportId: "STRING_VALUE", // required
 *   format: "CSV" || "JSON" || "PARQUET", // required
 *   bucketArn: "STRING_VALUE", // required
 *   objectKey: "STRING_VALUE", // required
 * };
 * const command = new SendAgentOrganizationalReportDataToS3Command(input);
 * const response = await client.send(command);
 * // { // SendAgentOrganizationalReportDataToS3Response
 * //   deliveredTo: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param SendAgentOrganizationalReportDataToS3CommandInput - {@link SendAgentOrganizationalReportDataToS3CommandInput}
 * @returns {@link SendAgentOrganizationalReportDataToS3CommandOutput}
 * @see {@link SendAgentOrganizationalReportDataToS3CommandInput} for command's `input` shape.
 * @see {@link SendAgentOrganizationalReportDataToS3CommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class SendAgentOrganizationalReportDataToS3Command extends command<SendAgentOrganizationalReportDataToS3CommandInput, SendAgentOrganizationalReportDataToS3CommandOutput>(
  _ep1,
  _mw0,
  "SendAgentOrganizationalReportDataToS3",
  SendAgentOrganizationalReportDataToS3$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendAgentOrganizationalReportDataToS3Request;
      output: SendAgentOrganizationalReportDataToS3Response;
    };
    sdk: {
      input: SendAgentOrganizationalReportDataToS3CommandInput;
      output: SendAgentOrganizationalReportDataToS3CommandOutput;
    };
  };
}
