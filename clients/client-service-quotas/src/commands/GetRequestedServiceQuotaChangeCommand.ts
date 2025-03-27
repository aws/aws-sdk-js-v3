// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRequestedServiceQuotaChangeRequest, GetRequestedServiceQuotaChangeResponse } from "../models/models_0";
import {
  de_GetRequestedServiceQuotaChangeCommand,
  se_GetRequestedServiceQuotaChangeCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRequestedServiceQuotaChangeCommand}.
 */
export interface GetRequestedServiceQuotaChangeCommandInput extends GetRequestedServiceQuotaChangeRequest {}
/**
 * @public
 *
 * The output of {@link GetRequestedServiceQuotaChangeCommand}.
 */
export interface GetRequestedServiceQuotaChangeCommandOutput
  extends GetRequestedServiceQuotaChangeResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the specified quota increase request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetRequestedServiceQuotaChangeCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetRequestedServiceQuotaChangeCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // GetRequestedServiceQuotaChangeRequest
 *   RequestId: "STRING_VALUE", // required
 * };
 * const command = new GetRequestedServiceQuotaChangeCommand(input);
 * const response = await client.send(command);
 * // { // GetRequestedServiceQuotaChangeResponse
 * //   RequestedQuota: { // RequestedServiceQuotaChange
 * //     Id: "STRING_VALUE",
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
 * @param GetRequestedServiceQuotaChangeCommandInput - {@link GetRequestedServiceQuotaChangeCommandInput}
 * @returns {@link GetRequestedServiceQuotaChangeCommandOutput}
 * @see {@link GetRequestedServiceQuotaChangeCommandInput} for command's `input` shape.
 * @see {@link GetRequestedServiceQuotaChangeCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link IllegalArgumentException} (client fault)
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
export class GetRequestedServiceQuotaChangeCommand extends $Command
  .classBuilder<
    GetRequestedServiceQuotaChangeCommandInput,
    GetRequestedServiceQuotaChangeCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServiceQuotasV20190624", "GetRequestedServiceQuotaChange", {})
  .n("ServiceQuotasClient", "GetRequestedServiceQuotaChangeCommand")
  .f(void 0, void 0)
  .ser(se_GetRequestedServiceQuotaChangeCommand)
  .de(de_GetRequestedServiceQuotaChangeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRequestedServiceQuotaChangeRequest;
      output: GetRequestedServiceQuotaChangeResponse;
    };
    sdk: {
      input: GetRequestedServiceQuotaChangeCommandInput;
      output: GetRequestedServiceQuotaChangeCommandOutput;
    };
  };
}
