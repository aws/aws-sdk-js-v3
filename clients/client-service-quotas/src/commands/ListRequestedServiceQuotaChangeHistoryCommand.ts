// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListRequestedServiceQuotaChangeHistoryRequest,
  ListRequestedServiceQuotaChangeHistoryResponse,
} from "../models/models_0";
import { ListRequestedServiceQuotaChangeHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRequestedServiceQuotaChangeHistoryCommand}.
 */
export interface ListRequestedServiceQuotaChangeHistoryCommandInput extends ListRequestedServiceQuotaChangeHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListRequestedServiceQuotaChangeHistoryCommand}.
 */
export interface ListRequestedServiceQuotaChangeHistoryCommandOutput extends ListRequestedServiceQuotaChangeHistoryResponse, __MetadataBearer {}

/**
 * <p>Retrieves the quota increase requests for the specified Amazon Web Services service. Filter
 *             responses to return quota requests at either the account level, resource level, or all
 *             levels. Responses include any open or closed requests within 90 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListRequestedServiceQuotaChangeHistoryCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListRequestedServiceQuotaChangeHistoryRequest
 *   ServiceCode: "STRING_VALUE",
 *   Status: "PENDING" || "CASE_OPENED" || "APPROVED" || "DENIED" || "CASE_CLOSED" || "NOT_APPROVED" || "INVALID_REQUEST",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuotaRequestedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * };
 * const command = new ListRequestedServiceQuotaChangeHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListRequestedServiceQuotaChangeHistoryResponse
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
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRequestedServiceQuotaChangeHistoryCommandInput - {@link ListRequestedServiceQuotaChangeHistoryCommandInput}
 * @returns {@link ListRequestedServiceQuotaChangeHistoryCommandOutput}
 * @see {@link ListRequestedServiceQuotaChangeHistoryCommandInput} for command's `input` shape.
 * @see {@link ListRequestedServiceQuotaChangeHistoryCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 *
 * @public
 */
export class ListRequestedServiceQuotaChangeHistoryCommand extends command<ListRequestedServiceQuotaChangeHistoryCommandInput, ListRequestedServiceQuotaChangeHistoryCommandOutput>(
  _ep0,
  _mw0,
  "ListRequestedServiceQuotaChangeHistory",
  ListRequestedServiceQuotaChangeHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequestedServiceQuotaChangeHistoryRequest;
      output: ListRequestedServiceQuotaChangeHistoryResponse;
    };
    sdk: {
      input: ListRequestedServiceQuotaChangeHistoryCommandInput;
      output: ListRequestedServiceQuotaChangeHistoryCommandOutput;
    };
  };
}
