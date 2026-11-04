// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAutoManagementConfigurationRequest, GetAutoManagementConfigurationResponse } from "../models/models_0";
import { GetAutoManagementConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface GetAutoManagementConfigurationCommandOutput extends GetAutoManagementConfigurationResponse, __MetadataBearer {}

/**
 * Retrieves information about your [Service Quotas Automatic Management](https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html) configuration. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.
 *
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
 *
 * You do not have sufficient permission to perform this action.
 *
 * @throws {@link IllegalArgumentException} (client fault)
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
export class GetAutoManagementConfigurationCommand extends command<GetAutoManagementConfigurationCommandInput, GetAutoManagementConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetAutoManagementConfiguration",
  GetAutoManagementConfiguration$
) {
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
