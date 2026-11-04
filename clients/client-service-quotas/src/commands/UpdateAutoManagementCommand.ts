// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAutoManagementRequest, UpdateAutoManagementResponse } from "../models/models_0";
import { UpdateAutoManagement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates your [Service Quotas Automatic Management](https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html) configuration, including notification preferences and excluded quotas. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.
 *
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
export class UpdateAutoManagementCommand extends command<UpdateAutoManagementCommandInput, UpdateAutoManagementCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAutoManagement",
  UpdateAutoManagement$
) {
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
