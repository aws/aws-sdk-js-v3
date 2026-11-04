// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAutoManagementRequest, StartAutoManagementResponse } from "../models/models_0";
import { StartAutoManagement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAutoManagementCommand}.
 */
export interface StartAutoManagementCommandInput extends StartAutoManagementRequest {}
/**
 * @public
 *
 * The output of {@link StartAutoManagementCommand}.
 */
export interface StartAutoManagementCommandOutput extends StartAutoManagementResponse, __MetadataBearer {}

/**
 * Starts [Service Quotas Automatic Management](https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html) for an Amazon Web Services account, including notification preferences and excluded quotas configurations. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, StartAutoManagementCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, StartAutoManagementCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // StartAutoManagementRequest
 *   OptInLevel: "ACCOUNT", // required
 *   OptInType: "NotifyOnly" || "NotifyAndAdjust", // required
 *   NotificationArn: "STRING_VALUE",
 *   ExclusionList: { // ExclusionList
 *     "<keys>": [ // ExcludedQuotaList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new StartAutoManagementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAutoManagementCommandInput - {@link StartAutoManagementCommandInput}
 * @returns {@link StartAutoManagementCommandOutput}
 * @see {@link StartAutoManagementCommandInput} for command's `input` shape.
 * @see {@link StartAutoManagementCommandOutput} for command's `response` shape.
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
export class StartAutoManagementCommand extends command<StartAutoManagementCommandInput, StartAutoManagementCommandOutput>(
  _ep0,
  _mw0,
  "StartAutoManagement",
  StartAutoManagement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAutoManagementRequest;
      output: {};
    };
    sdk: {
      input: StartAutoManagementCommandInput;
      output: StartAutoManagementCommandOutput;
    };
  };
}
