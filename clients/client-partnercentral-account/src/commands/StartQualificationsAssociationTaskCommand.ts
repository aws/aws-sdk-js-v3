// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartQualificationsAssociationTaskRequest,
  StartQualificationsAssociationTaskResponse,
} from "../models/models_0";
import { StartQualificationsAssociationTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartQualificationsAssociationTaskCommand}.
 */
export interface StartQualificationsAssociationTaskCommandInput extends StartQualificationsAssociationTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartQualificationsAssociationTaskCommand}.
 */
export interface StartQualificationsAssociationTaskCommandOutput extends StartQualificationsAssociationTaskResponse, __MetadataBearer {}

/**
 * <p>Initiates an asynchronous task to associate your partner qualifications with a primary account. You must be a subsidiary of the primary account with an active subsidiary connection. Use <code>GetQualificationsAssociationTask</code> to monitor task progress.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, StartQualificationsAssociationTaskCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, StartQualificationsAssociationTaskCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // StartQualificationsAssociationTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   PrimaryPartner: { // QualificationsAssociationPartner
 *     ProfileId: "STRING_VALUE",
 *     AccountId: "STRING_VALUE",
 *   },
 * };
 * const command = new StartQualificationsAssociationTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartQualificationsAssociationTaskResponse
 * //   Catalog: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Id: "STRING_VALUE", // required
 * //   TaskId: "STRING_VALUE", // required
 * //   Status: "IN_PROGRESS" || "SUCCEEDED", // required
 * //   PrimaryPartner: { // QualificationsAssociationPartner
 * //     ProfileId: "STRING_VALUE",
 * //     AccountId: "STRING_VALUE",
 * //   },
 * //   StartedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param StartQualificationsAssociationTaskCommandInput - {@link StartQualificationsAssociationTaskCommandInput}
 * @returns {@link StartQualificationsAssociationTaskCommandOutput}
 * @see {@link StartQualificationsAssociationTaskCommandInput} for command's `input` shape.
 * @see {@link StartQualificationsAssociationTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.</p>
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
export class StartQualificationsAssociationTaskCommand extends command<StartQualificationsAssociationTaskCommandInput, StartQualificationsAssociationTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartQualificationsAssociationTask",
  StartQualificationsAssociationTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQualificationsAssociationTaskRequest;
      output: StartQualificationsAssociationTaskResponse;
    };
    sdk: {
      input: StartQualificationsAssociationTaskCommandInput;
      output: StartQualificationsAssociationTaskCommandOutput;
    };
  };
}
