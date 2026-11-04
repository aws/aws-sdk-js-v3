// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterDomainInput } from "../models/models_0";
import { RegisterDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterDomainCommand}.
 */
export interface RegisterDomainCommandInput extends RegisterDomainInput {}
/**
 * @public
 *
 * The output of {@link RegisterDomainCommand}.
 */
export interface RegisterDomainCommandOutput extends __MetadataBearer {}

/**
 * Registers a new domain.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - You cannot use an IAM policy to control domain access for this action. The name of the domain being registered is available as the resource of this action.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, RegisterDomainCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, RegisterDomainCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // RegisterDomainInput
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   workflowExecutionRetentionPeriodInDays: "STRING_VALUE", // required
 *   tags: [ // ResourceTagList
 *     { // ResourceTag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new RegisterDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterDomainCommandInput - {@link RegisterDomainCommandInput}
 * @returns {@link RegisterDomainCommandOutput}
 * @see {@link RegisterDomainCommandInput} for command's `input` shape.
 * @see {@link RegisterDomainCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link DomainAlreadyExistsFault} (client fault)
 *
 * Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.
 *
 * @throws {@link LimitExceededFault} (client fault)
 *
 * Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
 *
 * @throws {@link TooManyTagsFault} (client fault)
 *
 * You've exceeded the number of tags allowed for a domain.
 *
 * @throws {@link SWFServiceException}
 *
 * Base exception class for all service exceptions from SWF service.
 *
 * @public
 */
export class RegisterDomainCommand extends command<RegisterDomainCommandInput, RegisterDomainCommandOutput>(
  _ep0,
  _mw0,
  "RegisterDomain",
  RegisterDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterDomainInput;
      output: {};
    };
    sdk: {
      input: RegisterDomainCommandInput;
      output: RegisterDomainCommandOutput;
    };
  };
}
