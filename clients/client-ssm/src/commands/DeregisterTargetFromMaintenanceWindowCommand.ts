// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeregisterTargetFromMaintenanceWindowRequest,
  DeregisterTargetFromMaintenanceWindowResult,
} from "../models/models_0";
import { DeregisterTargetFromMaintenanceWindow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeregisterTargetFromMaintenanceWindowCommand}.
 */
export interface DeregisterTargetFromMaintenanceWindowCommandInput extends DeregisterTargetFromMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link DeregisterTargetFromMaintenanceWindowCommand}.
 */
export interface DeregisterTargetFromMaintenanceWindowCommandOutput extends DeregisterTargetFromMaintenanceWindowResult, __MetadataBearer {}

/**
 * Removes a target from a maintenance window.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeregisterTargetFromMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeregisterTargetFromMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   WindowTargetId: "STRING_VALUE", // required
 *   Safe: true || false,
 * };
 * const command = new DeregisterTargetFromMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // DeregisterTargetFromMaintenanceWindowResult
 * //   WindowId: "STRING_VALUE",
 * //   WindowTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeregisterTargetFromMaintenanceWindowCommandInput - {@link DeregisterTargetFromMaintenanceWindowCommandInput}
 * @returns {@link DeregisterTargetFromMaintenanceWindowCommandOutput}
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link DeregisterTargetFromMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link TargetInUseException} (client fault)
 *
 * You specified the `Safe` option for the DeregisterTargetFromMaintenanceWindow operation, but the target is still referenced in a task.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DeregisterTargetFromMaintenanceWindowCommand extends command<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput>(
  _ep0,
  _mw0,
  "DeregisterTargetFromMaintenanceWindow",
  DeregisterTargetFromMaintenanceWindow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeregisterTargetFromMaintenanceWindowRequest;
      output: DeregisterTargetFromMaintenanceWindowResult;
    };
    sdk: {
      input: DeregisterTargetFromMaintenanceWindowCommandInput;
      output: DeregisterTargetFromMaintenanceWindowCommandOutput;
    };
  };
}
