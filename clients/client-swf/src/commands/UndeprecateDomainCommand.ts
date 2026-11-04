// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UndeprecateDomainInput } from "../models/models_0";
import { UndeprecateDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UndeprecateDomainCommand}.
 */
export interface UndeprecateDomainCommandInput extends UndeprecateDomainInput {}
/**
 * @public
 *
 * The output of {@link UndeprecateDomainCommand}.
 */
export interface UndeprecateDomainCommandOutput extends __MetadataBearer {}

/**
 * Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used to create new workflow executions or register new types.
 *
 * > **Note:** This operation is eventually consistent. The results are best effort and may not exactly reflect recent updates and changes.
 *
 * **Access Control**
 *
 * You can use IAM policies to control this action's access to Amazon SWF resources as follows:
 *
 * - Use a `Resource` element with the domain name to limit the action to only specified domains.
 * - Use an `Action` element to allow or deny permission to call this action.
 * - You cannot use an IAM policy to constrain this action's parameters.
 *
 * If the caller doesn't have sufficient permissions to invoke the action, or the parameter values fall outside the specified constraints, the action fails. The associated event attribute's `cause` parameter is set to `OPERATION_NOT_PERMITTED`. For details and example IAM policies, see [Using IAM to Manage Access to Amazon SWF Workflows](https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html) in the *Amazon SWF Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SWFClient, UndeprecateDomainCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, UndeprecateDomainCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // UndeprecateDomainInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new UndeprecateDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UndeprecateDomainCommandInput - {@link UndeprecateDomainCommandInput}
 * @returns {@link UndeprecateDomainCommandOutput}
 * @see {@link UndeprecateDomainCommandInput} for command's `input` shape.
 * @see {@link UndeprecateDomainCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link DomainAlreadyExistsFault} (client fault)
 *
 * Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *
 * Returned when the caller doesn't have sufficient permissions to invoke the action.
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
export class UndeprecateDomainCommand extends command<UndeprecateDomainCommandInput, UndeprecateDomainCommandOutput>(
  _ep0,
  _mw0,
  "UndeprecateDomain",
  UndeprecateDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UndeprecateDomainInput;
      output: {};
    };
    sdk: {
      input: UndeprecateDomainCommandInput;
      output: UndeprecateDomainCommandOutput;
    };
  };
}
