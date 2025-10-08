// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAutoManagementConfigurationRequest, GetAutoManagementConfigurationResponse } from "../models/models_0";
import {
  de_GetAutoManagementConfigurationCommand,
  se_GetAutoManagementConfigurationCommand,
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
 * The input for {@link GetAutoManagementConfigurationCommand}.
 */
export interface GetAutoManagementConfigurationCommandInput extends GetAutoManagementConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetAutoManagementConfigurationCommand}.
 */
export interface GetAutoManagementConfigurationCommandOutput
  extends GetAutoManagementConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about your <a href="https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html">Service Quotas Automatic Management</a> configuration. Automatic Management monitors your Service Quotas utilization and notifies you before you
 *             run out of your allocated quotas.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAutoManagementConfigurationCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAutoManagementConfigurationCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = {};
 * const command = new GetAutoManagementConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetAutoManagementConfigurationResponse
 * //   OptInLevel: "ACCOUNT",
 * //   OptInType: "NotifyOnly" || "NotifyAndAdjust",
 * //   NotificationArn: "STRING_VALUE",
 * //   OptInStatus: "ENABLED" || "DISABLED",
 * //   ExclusionList: { // ExclusionQuotaList
 * //     "<keys>": [ // QuotaInfoList
 * //       { // QuotaInfo
 * //         QuotaCode: "STRING_VALUE",
 * //         QuotaName: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAutoManagementConfigurationCommandInput - {@link GetAutoManagementConfigurationCommandInput}
 * @returns {@link GetAutoManagementConfigurationCommandOutput}
 * @see {@link GetAutoManagementConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAutoManagementConfigurationCommandOutput} for command's `response` shape.
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
export class GetAutoManagementConfigurationCommand extends $Command
  .classBuilder<
    GetAutoManagementConfigurationCommandInput,
    GetAutoManagementConfigurationCommandOutput,
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
  .s("ServiceQuotasV20190624", "GetAutoManagementConfiguration", {})
  .n("ServiceQuotasClient", "GetAutoManagementConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetAutoManagementConfigurationCommand)
  .de(de_GetAutoManagementConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAutoManagementConfigurationResponse;
    };
    sdk: {
      input: GetAutoManagementConfigurationCommandInput;
      output: GetAutoManagementConfigurationCommandOutput;
    };
  };
}
