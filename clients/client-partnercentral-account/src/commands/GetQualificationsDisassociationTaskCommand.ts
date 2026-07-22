// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetQualificationsDisassociationTaskRequest,
  GetQualificationsDisassociationTaskResponse,
} from "../models/models_0";
import { GetQualificationsDisassociationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQualificationsDisassociationTaskCommand}.
 */
export interface GetQualificationsDisassociationTaskCommandInput extends GetQualificationsDisassociationTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetQualificationsDisassociationTaskCommand}.
 */
export interface GetQualificationsDisassociationTaskCommandOutput extends GetQualificationsDisassociationTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves the status and details of the most recent qualifications disassociation task for your partner account. Use this operation to poll the progress of a disassociation task initiated by <code>StartQualificationsDisassociationTask</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, GetQualificationsDisassociationTaskCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, GetQualificationsDisassociationTaskCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // GetQualificationsDisassociationTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetQualificationsDisassociationTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetQualificationsDisassociationTaskResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   TaskId: "STRING_VALUE", // required
 * //   Status: "IN_PROGRESS" || "SUCCEEDED", // required
 * //   AssociatedPartner: { // QualificationsAssociationPartner
 * //     ProfileId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * //   EndedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetQualificationsDisassociationTaskCommandInput - {@link GetQualificationsDisassociationTaskCommandInput}
 * @returns {@link GetQualificationsDisassociationTaskCommandOutput}
 * @see {@link GetQualificationsDisassociationTaskCommandInput} for command's `input` shape.
 * @see {@link GetQualificationsDisassociationTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class GetQualificationsDisassociationTaskCommand extends command<GetQualificationsDisassociationTaskCommandInput, GetQualificationsDisassociationTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetQualificationsDisassociationTask",
  GetQualificationsDisassociationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQualificationsDisassociationTaskRequest;
      output: GetQualificationsDisassociationTaskResponse;
    };
    sdk: {
      input: GetQualificationsDisassociationTaskCommandInput;
      output: GetQualificationsDisassociationTaskCommandOutput;
    };
  };
}
