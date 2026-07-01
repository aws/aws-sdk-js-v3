// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetProspectingFromEngagementTaskRequest,
  GetProspectingFromEngagementTaskResponse,
} from "../models/models_0";
import { GetProspectingFromEngagementTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetProspectingFromEngagementTaskCommand}.
 */
export interface GetProspectingFromEngagementTaskCommandInput extends GetProspectingFromEngagementTaskRequest {}
/**
 * @public
 *
 * The output of {@link GetProspectingFromEngagementTaskCommand}.
 */
export interface GetProspectingFromEngagementTaskCommandOutput extends GetProspectingFromEngagementTaskResponse, __MetadataBearer {}

/**
 * <p>Retrieves the details and current status of a prospecting task previously started with <code>StartProspectingFromEngagementTask</code> to enable polling for completion and access to per-engagement processing results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralSellingClient, GetProspectingFromEngagementTaskCommand } from "@aws-sdk/client-partnercentral-selling"; // ES Modules import
 * // const { PartnerCentralSellingClient, GetProspectingFromEngagementTaskCommand } = require("@aws-sdk/client-partnercentral-selling"); // CommonJS import
 * // import type { PartnerCentralSellingClientConfig } from "@aws-sdk/client-partnercentral-selling";
 * const config = {}; // type is PartnerCentralSellingClientConfig
 * const client = new PartnerCentralSellingClient(config);
 * const input = { // GetProspectingFromEngagementTaskRequest
 *   Catalog: "STRING_VALUE", // required
 *   TaskIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetProspectingFromEngagementTaskCommand(input);
 * const response = await client.send(command);
 * // { // GetProspectingFromEngagementTaskResponse
 * //   TaskId: "STRING_VALUE", // required
 * //   TaskArn: "STRING_VALUE", // required
 * //   TaskName: "STRING_VALUE", // required
 * //   StartTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"),
 * //   Engagements: [ // EngagementProspectingResultList // required
 * //     { // EngagementProspectingResult
 * //       EngagementIdentifier: "STRING_VALUE", // required
 * //       EngagementContextId: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "COMPLETED" || "FAILED", // required
 * //       ReasonCode: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetProspectingFromEngagementTaskCommandInput - {@link GetProspectingFromEngagementTaskCommandInput}
 * @returns {@link GetProspectingFromEngagementTaskCommandOutput}
 * @see {@link GetProspectingFromEngagementTaskCommandInput} for command's `input` shape.
 * @see {@link GetProspectingFromEngagementTaskCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralSellingClientResolvedConfig | config} for PartnerCentralSellingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This error occurs when you don't have permission to perform the requested action.</p> <p>You don’t have access to this action or resource. Review IAM policies or contact your AWS administrator for assistance.</p>
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
export class GetProspectingFromEngagementTaskCommand extends command<GetProspectingFromEngagementTaskCommandInput, GetProspectingFromEngagementTaskCommandOutput>(
  _ep0,
  _mw0,
  "GetProspectingFromEngagementTask",
  GetProspectingFromEngagementTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProspectingFromEngagementTaskRequest;
      output: GetProspectingFromEngagementTaskResponse;
    };
    sdk: {
      input: GetProspectingFromEngagementTaskCommandInput;
      output: GetProspectingFromEngagementTaskCommandOutput;
    };
  };
}
