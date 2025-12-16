// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RequestServiceQuotaIncreaseRequest, RequestServiceQuotaIncreaseResponse } from "../models/models_0";
import { RequestServiceQuotaIncrease } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface RequestServiceQuotaIncreaseCommandOutput
  extends RequestServiceQuotaIncreaseResponse,
    __MetadataBearer {}

/**
 * <p>Submits a quota increase request for the specified quota at the account or resource
 *             level.</p>
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
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *  <p>You can't perform this action because a dependency does not have access.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The resource is in an invalid state.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link QuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota. To perform the requested action, remove some of
 *             the relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
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
export class RequestServiceQuotaIncreaseCommand extends $Command
  .classBuilder<
    RequestServiceQuotaIncreaseCommandInput,
    RequestServiceQuotaIncreaseCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "RequestServiceQuotaIncrease", {})
  .n("ServiceQuotasClient", "RequestServiceQuotaIncreaseCommand")
  .sc(RequestServiceQuotaIncrease)
  .build() {
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
