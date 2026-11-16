// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep1, _mw0, command } from "../commandBuilder";
import type {
  GetAgentOrganizationalReportDataRequest,
  GetAgentOrganizationalReportDataResponse,
} from "../models/models_0";
import { GetAgentOrganizationalReportData$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgentOrganizationalReportDataCommand}.
 */
export interface GetAgentOrganizationalReportDataCommandInput extends GetAgentOrganizationalReportDataRequest {}
/**
 * @public
 *
 * The output of {@link GetAgentOrganizationalReportDataCommand}.
 */
export interface GetAgentOrganizationalReportDataCommandOutput extends GetAgentOrganizationalReportDataResponse, __MetadataBearer {}

/**
 * <p>Retrieves the data artifact for a completed Organizational Report as a short-lived presigned S3 URL. The response contains the URL in downloadUrl and its expiration in expiresAt. To have the service write the artifact directly into a caller-owned bucket instead, use SendAgentOrganizationalReportDataToS3.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAgentOrganizationalReportDataCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAgentOrganizationalReportDataCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAgentOrganizationalReportDataRequest
 *   reportId: "STRING_VALUE", // required
 *   format: "CSV" || "JSON" || "PARQUET", // required
 * };
 * const command = new GetAgentOrganizationalReportDataCommand(input);
 * const response = await client.send(command);
 * // { // GetAgentOrganizationalReportDataResponse
 * //   downloadUrl: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetAgentOrganizationalReportDataCommandInput - {@link GetAgentOrganizationalReportDataCommandInput}
 * @returns {@link GetAgentOrganizationalReportDataCommandOutput}
 * @see {@link GetAgentOrganizationalReportDataCommandInput} for command's `input` shape.
 * @see {@link GetAgentOrganizationalReportDataCommandOutput} for command's `response` shape.
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
export class GetAgentOrganizationalReportDataCommand extends command<GetAgentOrganizationalReportDataCommandInput, GetAgentOrganizationalReportDataCommandOutput>(
  _ep1,
  _mw0,
  "GetAgentOrganizationalReportData",
  GetAgentOrganizationalReportData$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgentOrganizationalReportDataRequest;
      output: GetAgentOrganizationalReportDataResponse;
    };
    sdk: {
      input: GetAgentOrganizationalReportDataCommandInput;
      output: GetAgentOrganizationalReportDataCommandOutput;
    };
  };
}
