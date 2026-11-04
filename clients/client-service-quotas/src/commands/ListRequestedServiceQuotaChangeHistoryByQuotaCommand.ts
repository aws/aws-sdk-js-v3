// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRequestedServiceQuotaChangeHistoryByQuotaRequest,
  ListRequestedServiceQuotaChangeHistoryByQuotaResponse,
} from "../models/models_0";
import { ListRequestedServiceQuotaChangeHistoryByQuota$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommand}.
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput extends ListRequestedServiceQuotaChangeHistoryByQuotaRequest {}
/**
 * @public
 *
 * The output of {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommand}.
 */
export interface ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput extends ListRequestedServiceQuotaChangeHistoryByQuotaResponse, __MetadataBearer {}

/**
 * Retrieves the quota increase requests for the specified quota. Filter responses to return quota requests at either the account level, resource level, or all levels.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryByQuotaCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListRequestedServiceQuotaChangeHistoryByQuotaRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 *   Status: "PENDING" || "CASE_OPENED" || "APPROVED" || "DENIED" || "CASE_CLOSED" || "NOT_APPROVED" || "INVALID_REQUEST",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuotaRequestedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * };
 * const command = new ListRequestedServiceQuotaChangeHistoryByQuotaCommand(input);
 * const response = await client.send(command);
 * // { // ListRequestedServiceQuotaChangeHistoryByQuotaResponse
 * //   NextToken: "STRING_VALUE",
 * //   RequestedQuotas: [ // RequestedServiceQuotaChangeHistoryListDefinition
 * //     { // RequestedServiceQuotaChange
 * //       Id: "STRING_VALUE",
 * //       RequestType: "AutomaticManagement",
 * //       CaseId: "STRING_VALUE",
 * //       ServiceCode: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       QuotaCode: "STRING_VALUE",
 * //       QuotaName: "STRING_VALUE",
 * //       DesiredValue: Number("double"),
 * //       Status: "PENDING" || "CASE_OPENED" || "APPROVED" || "DENIED" || "CASE_CLOSED" || "NOT_APPROVED" || "INVALID_REQUEST",
 * //       Created: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Requester: "STRING_VALUE",
 * //       QuotaArn: "STRING_VALUE",
 * //       GlobalQuota: true || false,
 * //       Unit: "STRING_VALUE",
 * //       QuotaRequestedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //       QuotaContext: { // QuotaContextInfo
 * //         ContextScope: "RESOURCE" || "ACCOUNT",
 * //         ContextScopeType: "STRING_VALUE",
 * //         ContextId: "STRING_VALUE",
 * //         AdjustableAtLevel: "ACCOUNT" || "PER_RESOURCE" || "ALL",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput - {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput}
 * @returns {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput}
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput} for command's `input` shape.
 * @see {@link ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permission to perform this action.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Invalid input was provided.
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *
 * Invalid input was provided.
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * Something went wrong.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota.
 *
 * @throws {@link ServiceQuotasServiceException}
 *
 * Base exception class for all service exceptions from ServiceQuotas service.
 *
 * @public
 */
export class ListRequestedServiceQuotaChangeHistoryByQuotaCommand extends command<ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput, ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput>(
  _ep0,
  _mw0,
  "ListRequestedServiceQuotaChangeHistoryByQuota",
  ListRequestedServiceQuotaChangeHistoryByQuota$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
      output: ListRequestedServiceQuotaChangeHistoryByQuotaResponse;
    };
    sdk: {
      input: ListRequestedServiceQuotaChangeHistoryByQuotaCommandInput;
      output: ListRequestedServiceQuotaChangeHistoryByQuotaCommandOutput;
    };
  };
}
