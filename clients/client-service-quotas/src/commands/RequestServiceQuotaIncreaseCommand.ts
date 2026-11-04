// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RequestServiceQuotaIncreaseRequest, RequestServiceQuotaIncreaseResponse } from "../models/models_0";
import { RequestServiceQuotaIncrease$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RequestServiceQuotaIncreaseCommand}.
 */
export interface RequestServiceQuotaIncreaseCommandInput extends RequestServiceQuotaIncreaseRequest {}
/**
 * @public
 *
 * The output of {@link RequestServiceQuotaIncreaseCommand}.
 */
export interface RequestServiceQuotaIncreaseCommandOutput extends RequestServiceQuotaIncreaseResponse, __MetadataBearer {}

/**
 * Submits a quota increase request for the specified quota at the account or resource level.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, RequestServiceQuotaIncreaseCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // RequestServiceQuotaIncreaseRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 *   DesiredValue: Number("double"), // required
 *   ContextId: "STRING_VALUE",
 *   SupportCaseAllowed: true || false,
 * };
 * const command = new RequestServiceQuotaIncreaseCommand(input);
 * const response = await client.send(command);
 * // { // RequestServiceQuotaIncreaseResponse
 * //   RequestedQuota: { // RequestedServiceQuotaChange
 * //     Id: "STRING_VALUE",
 * //     RequestType: "AutomaticManagement",
 * //     CaseId: "STRING_VALUE",
 * //     ServiceCode: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     QuotaCode: "STRING_VALUE",
 * //     QuotaName: "STRING_VALUE",
 * //     DesiredValue: Number("double"),
 * //     Status: "PENDING" || "CASE_OPENED" || "APPROVED" || "DENIED" || "CASE_CLOSED" || "NOT_APPROVED" || "INVALID_REQUEST",
 * //     Created: new Date("TIMESTAMP"),
 * //     LastUpdated: new Date("TIMESTAMP"),
 * //     Requester: "STRING_VALUE",
 * //     QuotaArn: "STRING_VALUE",
 * //     GlobalQuota: true || false,
 * //     Unit: "STRING_VALUE",
 * //     QuotaRequestedAtLevel: "ACCOUNT" || "RESOURCE" || "ALL",
 * //     QuotaContext: { // QuotaContextInfo
 * //       ContextScope: "RESOURCE" || "ACCOUNT",
 * //       ContextScopeType: "STRING_VALUE",
 * //       ContextId: "STRING_VALUE",
 * //       AdjustableAtLevel: "ACCOUNT" || "PER_RESOURCE" || "ALL",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param RequestServiceQuotaIncreaseCommandInput - {@link RequestServiceQuotaIncreaseCommandInput}
 * @returns {@link RequestServiceQuotaIncreaseCommandOutput}
 * @see {@link RequestServiceQuotaIncreaseCommandInput} for command's `input` shape.
 * @see {@link RequestServiceQuotaIncreaseCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permission to perform this action.
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *
 * You can't perform this action because a dependency does not have access.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Invalid input was provided.
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *
 * The resource is in an invalid state.
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link QuotaExceededException} (client fault)
 *
 * You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
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
export class RequestServiceQuotaIncreaseCommand extends command<RequestServiceQuotaIncreaseCommandInput, RequestServiceQuotaIncreaseCommandOutput>(
  _ep0,
  _mw0,
  "RequestServiceQuotaIncrease",
  RequestServiceQuotaIncrease$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RequestServiceQuotaIncreaseRequest;
      output: RequestServiceQuotaIncreaseResponse;
    };
    sdk: {
      input: RequestServiceQuotaIncreaseCommandInput;
      output: RequestServiceQuotaIncreaseCommandOutput;
    };
  };
}
