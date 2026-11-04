// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StopAutoManagementRequest, StopAutoManagementResponse } from "../models/models_0";
import { StopAutoManagement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StopAutoManagementCommand}.
 */
export interface StopAutoManagementCommandInput extends StopAutoManagementRequest {}
/**
 * @public
 *
 * The output of {@link StopAutoManagementCommand}.
 */
export interface StopAutoManagementCommandOutput extends StopAutoManagementResponse, __MetadataBearer {}

/**
 * Stops [Service Quotas Automatic Management](https://docs.aws.amazon.com/servicequotas/latest/userguide/automatic-management.html) for an Amazon Web Services account and removes all associated configurations. Automatic Management monitors your Service Quotas utilization and notifies you before you run out of your allocated quotas.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, StopAutoManagementCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, StopAutoManagementCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = {};
 * const command = new StopAutoManagementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopAutoManagementCommandInput - {@link StopAutoManagementCommandInput}
 * @returns {@link StopAutoManagementCommandOutput}
 * @see {@link StopAutoManagementCommandInput} for command's `input` shape.
 * @see {@link StopAutoManagementCommandOutput} for command's `response` shape.
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
export class StopAutoManagementCommand extends command<StopAutoManagementCommandInput, StopAutoManagementCommandOutput>(
  _ep0,
  _mw0,
  "StopAutoManagement",
  StopAutoManagement$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: StopAutoManagementCommandInput;
      output: StopAutoManagementCommandOutput;
    };
  };
}
