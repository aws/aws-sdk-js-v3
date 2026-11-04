// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeprecateDomainInput } from "../models/models_0";
import { DeprecateDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeprecateDomainCommand}.
 */
export interface DeprecateDomainCommandInput extends DeprecateDomainInput {}
/**
 * @public
 *
 * The output of {@link DeprecateDomainCommand}.
 */
export interface DeprecateDomainCommandOutput extends __MetadataBearer {}

/**
 * Deprecates the specified domain. After a domain has been deprecated it cannot be used to create new workflow executions or register new types. However, you can still use visibility actions on this domain. Deprecating a domain also deprecates all activity and workflow types registered in the domain. Executions that were started before the domain was deprecated continues to run.
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
 * import { SWFClient, DeprecateDomainCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeprecateDomainCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DeprecateDomainInput
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeprecateDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateDomainCommandInput - {@link DeprecateDomainCommandInput}
 * @returns {@link DeprecateDomainCommandOutput}
 * @see {@link DeprecateDomainCommandInput} for command's `input` shape.
 * @see {@link DeprecateDomainCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link DomainDeprecatedFault} (client fault)
 *
 * Returned when the specified domain has been deprecated.
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
export class DeprecateDomainCommand extends command<DeprecateDomainCommandInput, DeprecateDomainCommandOutput>(
  _ep0,
  _mw0,
  "DeprecateDomain",
  DeprecateDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateDomainInput;
      output: {};
    };
    sdk: {
      input: DeprecateDomainCommandInput;
      output: DeprecateDomainCommandOutput;
    };
  };
}
