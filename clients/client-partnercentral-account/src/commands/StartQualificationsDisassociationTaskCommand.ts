// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartQualificationsDisassociationTaskRequest,
  StartQualificationsDisassociationTaskResponse,
} from "../models/models_0";
import { StartQualificationsDisassociationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQualificationsDisassociationTaskCommand}.
 */
export interface StartQualificationsDisassociationTaskCommandInput extends StartQualificationsDisassociationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartQualificationsDisassociationTaskCommand}.
 */
export interface StartQualificationsDisassociationTaskCommandOutput extends StartQualificationsDisassociationTaskResponse, __MetadataBearer {}

/**
 * Initiates an asynchronous task to disassociate your partner qualifications from a primary account. You must currently be associated and cannot disassociate if you are the primary partner. Use `GetQualificationsDisassociationTask` to monitor task progress.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, StartQualificationsDisassociationTaskCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, StartQualificationsDisassociationTaskCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // StartQualificationsDisassociationTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   AssociatedPartner: { // QualificationsAssociationPartner
 *     ProfileId: "STRING_VALUE",
 *     AccountId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartQualificationsDisassociationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartQualificationsDisassociationTaskResponse
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
 * // };
 *
 * ```
 *
 * @param StartQualificationsDisassociationTaskCommandInput - {@link StartQualificationsDisassociationTaskCommandInput}
 * @returns {@link StartQualificationsDisassociationTaskCommandOutput}
 * @see {@link StartQualificationsDisassociationTaskCommandInput} for command's `input` shape.
 * @see {@link StartQualificationsDisassociationTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.
 *
 * @throws {@link PartnerCentralAccountServiceException}
 *
 * Base exception class for all service exceptions from PartnerCentralAccount service.
 *
 * @public
 */
export class StartQualificationsDisassociationTaskCommand extends command<StartQualificationsDisassociationTaskCommandInput, StartQualificationsDisassociationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartQualificationsDisassociationTask",
  StartQualificationsDisassociationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQualificationsDisassociationTaskRequest;
      output: StartQualificationsDisassociationTaskResponse;
    };
    sdk: {
      input: StartQualificationsDisassociationTaskCommandInput;
      output: StartQualificationsDisassociationTaskCommandOutput;
    };
  };
}
