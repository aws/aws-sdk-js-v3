// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAutoManagementRequest, UpdateAutoManagementResponse } from "../models/models_0";
import { UpdateAutoManagement$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAutoManagementCommand}.
 */
export interface UpdateAutoManagementCommandInput extends UpdateAutoManagementRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAutoManagementCommand}.
 */
export interface UpdateAutoManagementCommandOutput extends UpdateAutoManagementResponse, __MetadataBearer {}

/**
 * <p>Updates your <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html">Service Quotas Automatic Management</a> configuration, including notification preferences and
 *             excluded quotas. Automatic Management monitors your Service Quotas utilization and notifies you before you
 *             run out of your allocated quotas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, UpdateAutoManagementCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, UpdateAutoManagementCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // UpdateAutoManagementRequest
 *   OptInType: "NotifyOnly" || "NotifyAndAdjust",
 *   NotificationArn: "STRING_VALUE",
 *   ExclusionList: { // ExclusionList
 *     "<keys>": [ // ExcludedQuotaList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateAutoManagementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAutoManagementCommandInput - {@link UpdateAutoManagementCommandInput}
 * @returns {@link UpdateAutoManagementCommandOutput}
 * @see {@link UpdateAutoManagementCommandInput} for command's `input` shape.
 * @see {@link UpdateAutoManagementCommandOutput} for command's `response` shape.
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
export class UpdateAutoManagementCommand extends $Command
  .classBuilder<
    UpdateAutoManagementCommandInput,
    UpdateAutoManagementCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "UpdateAutoManagement", {})
  .n("ServiceQuotasClient", "UpdateAutoManagementCommand")
  .sc(UpdateAutoManagement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAutoManagementRequest;
      output: {};
    };
    sdk: {
      input: UpdateAutoManagementCommandInput;
      output: UpdateAutoManagementCommandOutput;
    };
  };
}
