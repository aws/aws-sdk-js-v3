// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  StartProspectingFromEngagementTaskRequest,
  StartProspectingFromEngagementTaskResponse,
} from "../models/models_0";
import { StartProspectingFromEngagementTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartProspectingFromEngagementTaskCommand}.
 */
export interface StartProspectingFromEngagementTaskCommandInput extends StartProspectingFromEngagementTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartProspectingFromEngagementTaskCommand}.
 */
export interface StartProspectingFromEngagementTaskCommandOutput extends StartProspectingFromEngagementTaskResponse, __MetadataBearer {}

/**
 * <p>Starts a task to convert one or more engagement contexts into new prospecting leads. The task runs asynchronously. To poll for status, use <code>GetProspectingFromEngagementTask</code>, or use <code>ListProspectingFromEngagementTasks</code> to monitor multiple tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, StartProspectingFromEngagementTaskCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, StartProspectingFromEngagementTaskCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // StartProspectingFromEngagementTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifiers: [ // EngagementIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 *   TaskName: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE", // required
 * };
 * const command = new StartProspectingFromEngagementTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartProspectingFromEngagementTaskResponse
 * //   Identifiers: [ // EngagementIdentifierList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   TaskName: "STRING_VALUE", // required
 * //   Message: "STRING_VALUE",
 * //   ReasonCode: "STRING_VALUE",
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   TaskId: "STRING_VALUE",
 * //   TaskArn: "STRING_VALUE",
 * //   TaskStatus: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * // };
 *
 * ```
 *
 * @param StartProspectingFromEngagementTaskCommandInput - {@link StartProspectingFromEngagementTaskCommandInput}
 * @returns {@link StartProspectingFromEngagementTaskCommandOutput}
 * @see {@link StartProspectingFromEngagementTaskCommandInput} for command's `input` shape.
 * @see {@link StartProspectingFromEngagementTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This error occurs when the request can’t be processed due to a conflict with the target resource's current state, which could result from updating or deleting the resource.</p> <p>Suggested action: Fetch the latest state of the resource, verify the state, and retry the request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This error occurs when the specified resource can’t be found or doesn't exist. Resource ID and type might be incorrect.</p> <p>Suggested action: This is usually a transient error. Retry after the provided retry delay or a short interval. If the problem persists, contact AWS support.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This error occurs when the specified resource can't be found. The resource might not exist, or isn't visible with the current credentials.</p> <p>Suggested action: Verify that the resource ID is correct and the resource is in the expected AWS region. Check IAM permissions for accessing the resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This error occurs when there are too many requests sent. Review the provided quotas and adapt your usage to avoid throttling.</p> <p>This error occurs when there are too many requests sent. Review the provided <a href="https://docs.aws.amazon.com/partner-central/latest/selling-api/quotas.html">Quotas</a> and retry after the provided delay.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service or business validation rules.</p> <p>Suggested action: Review the error message, including the failed fields and reasons, to correct the request payload.</p>
 *
 * @throws {@link PartnerCentralSellingServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralSelling service.</p>
 *
 *
 * @public
 */
export class StartProspectingFromEngagementTaskCommand extends command<StartProspectingFromEngagementTaskCommandInput, StartProspectingFromEngagementTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartProspectingFromEngagementTask",
  StartProspectingFromEngagementTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartProspectingFromEngagementTaskRequest;
      output: StartProspectingFromEngagementTaskResponse;
    };
    sdk: {
      input: StartProspectingFromEngagementTaskCommandInput;
      output: StartProspectingFromEngagementTaskCommandOutput;
    };
  };
}
