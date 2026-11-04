// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterActivityTypeInput } from "../models/models_0";
import { RegisterActivityType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterActivityTypeCommand}.
 */
export interface RegisterActivityTypeCommandInput extends RegisterActivityTypeInput {}
/**
 * @public
 *
 * The output of {@link RegisterActivityTypeCommand}.
 */
export interface RegisterActivityTypeCommandOutput extends __MetadataBearer {}

/**
 * Registers a new *activity type* along with its configuration settings in the specified domain.
 *
 * > **Important:** A `TypeAlreadyExists` fault is returned if the type already exists in the domain. You cannot change any configuration settings of the type after its registration, and it must be registered as a new version.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `defaultTaskList.name`: String constraint. The key is `swf:defaultTaskList.name`.
 *   - `name`: String constraint. The key is `swf:name`.
 *   - `version`: String constraint. The key is `swf:version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RegisterActivityTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RegisterActivityTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RegisterActivityTypeInput
 *   domain: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   defaultTaskStartToCloseTimeout: "STRING_VALUE",
 *   defaultTaskHeartbeatTimeout: "STRING_VALUE",
 *   defaultTaskList: { // TaskList
 *     name: "STRING_VALUE", // required
 *   },
 *   defaultTaskPriority: "STRING_VALUE",
 *   defaultTaskScheduleToStartTimeout: "STRING_VALUE",
 *   defaultTaskScheduleToCloseTimeout: "STRING_VALUE",
 * };
 * const command = new RegisterActivityTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterActivityTypeCommandInput - {@link RegisterActivityTypeCommandInput}
 * @returns {@link RegisterActivityTypeCommandOutput}
 * @see {@link RegisterActivityTypeCommandInput} for command's `input` shape.
 * @see {@link RegisterActivityTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link TypeAlreadyExistsFault} (client fault)
 *
 * Returned if the type already exists in the specified domain. You may get this fault if you are registering a type that is either already registered or deprecated, or if you undeprecate a type that is currently registered.
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *
 * Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class RegisterActivityTypeCommand extends command<RegisterActivityTypeCommandInput, RegisterActivityTypeCommandOutput>(
  _ep0,
  _mw0,
  "RegisterActivityType",
  RegisterActivityType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterActivityTypeInput;
      output: {};
    };
    sdk: {
      input: RegisterActivityTypeCommandInput;
      output: RegisterActivityTypeCommandOutput;
    };
  };
}
