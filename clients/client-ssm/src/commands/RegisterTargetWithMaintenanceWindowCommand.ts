// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RegisterTargetWithMaintenanceWindowRequest,
  RegisterTargetWithMaintenanceWindowResult,
} from "../models/models_1";
import { RegisterTargetWithMaintenanceWindow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterTargetWithMaintenanceWindowCommand}.
 */
export interface RegisterTargetWithMaintenanceWindowCommandInput extends RegisterTargetWithMaintenanceWindowRequest {}
/**
 * @public
 *
 * The output of {@link RegisterTargetWithMaintenanceWindowCommand}.
 */
export interface RegisterTargetWithMaintenanceWindowCommandOutput extends RegisterTargetWithMaintenanceWindowResult, __MetadataBearer {}

/**
 * Registers a target with a maintenance window.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, RegisterTargetWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, RegisterTargetWithMaintenanceWindowCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // RegisterTargetWithMaintenanceWindowRequest
 *   WindowId: "STRING_VALUE", // required
 *   ResourceType: "INSTANCE" || "RESOURCE_GROUP", // required
 *   Targets: [ // Targets // required
 *     { // Target
 *       Key: "STRING_VALUE",
 *       Values: [ // TargetValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   OwnerInformation: "STRING_VALUE",
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new RegisterTargetWithMaintenanceWindowCommand(input);
 * const response = await client.send(command);
 * // { // RegisterTargetWithMaintenanceWindowResult
 * //   WindowTargetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RegisterTargetWithMaintenanceWindowCommandInput - {@link RegisterTargetWithMaintenanceWindowCommandInput}
 * @returns {@link RegisterTargetWithMaintenanceWindowCommandOutput}
 * @see {@link RegisterTargetWithMaintenanceWindowCommandInput} for command's `input` shape.
 * @see {@link RegisterTargetWithMaintenanceWindowCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link DoesNotExistException} (client fault)
 *
 * Error returned when the ID specified for a resource, such as a maintenance window or patch baseline, doesn't exist.
 *
 * For information about resource quotas in Amazon Web Services Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link IdempotentParameterMismatch} (client fault)
 *
 * Error returned when an idempotent operation is retried and the parameters don't match the original call to the API with the same idempotency token.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * Error returned when the caller has exceeded the default resource quotas. For example, too many maintenance windows or patch baselines have been created.
 *
 * For information about resource quotas in Systems Manager, see [Systems Manager service quotas](https://docs.aws.amazon.com/general/latest/gr/ssm.html#limits_ssm) in the *Amazon Web Services General Reference*.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class RegisterTargetWithMaintenanceWindowCommand extends command<RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput>(
  _ep0,
  _mw0,
  "RegisterTargetWithMaintenanceWindow",
  RegisterTargetWithMaintenanceWindow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterTargetWithMaintenanceWindowRequest;
      output: RegisterTargetWithMaintenanceWindowResult;
    };
    sdk: {
      input: RegisterTargetWithMaintenanceWindowCommandInput;
      output: RegisterTargetWithMaintenanceWindowCommandOutput;
    };
  };
}
