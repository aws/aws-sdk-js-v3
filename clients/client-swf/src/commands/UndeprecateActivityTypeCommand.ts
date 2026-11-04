// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UndeprecateActivityTypeInput } from "../models/models_0";
import { UndeprecateActivityType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UndeprecateActivityTypeCommand}.
 */
export interface UndeprecateActivityTypeCommandInput extends UndeprecateActivityTypeInput {}
/**
 * @public
 *
 * The output of {@link UndeprecateActivityTypeCommand}.
 */
export interface UndeprecateActivityTypeCommandOutput extends __MetadataBearer {}

/**
 * Undeprecates a previously deprecated *activity type*. After an activity type has been undeprecated, you can create new tasks of that activity type.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - Constrain the following parameters by using a `Condition` element with the appropriate keys.
 *
 *   - `activityType.name`: String constraint. The key is `swf:activityType.name`.
 *   - `activityType.version`: String constraint. The key is `swf:activityType.version`.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, UndeprecateActivityTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, UndeprecateActivityTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // UndeprecateActivityTypeInput
 *   domain: "STRING_VALUE", // required
 *   activityType: { // ActivityType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new UndeprecateActivityTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UndeprecateActivityTypeCommandInput - {@link UndeprecateActivityTypeCommandInput}
 * @returns {@link UndeprecateActivityTypeCommandOutput}
 * @see {@link UndeprecateActivityTypeCommandInput} for command's `input` shape.
 * @see {@link UndeprecateActivityTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
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
export class UndeprecateActivityTypeCommand extends command<UndeprecateActivityTypeCommandInput, UndeprecateActivityTypeCommandOutput>(
  _ep0,
  _mw0,
  "UndeprecateActivityType",
  UndeprecateActivityType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UndeprecateActivityTypeInput;
      output: {};
    };
    sdk: {
      input: UndeprecateActivityTypeCommandInput;
      output: UndeprecateActivityTypeCommandOutput;
    };
  };
}
