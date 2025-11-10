// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RegisterDomainInput } from "../models/models_0";
import { RegisterDomain } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Registers a new domain.</p>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>You cannot use an IAM policy to control domain access for this action. The name of
 *           the domain being registered is available as the resource of this action.</p>
 *             </li>
 *             <li>
 *                <p>Use an <code>Action</code> element to allow or deny permission to call this
 *           action.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use an IAM policy to constrain this action's parameters.</p>
 *             </li>
 *          </ul>
 *          <p>If the caller doesn't have sufficient permissions to invoke the action, or the
 *       parameter values fall outside the specified constraints, the action fails. The associated
 *       event attribute's <code>cause</code> parameter is set to <code>OPERATION_NOT_PERMITTED</code>.
 *       For details and example IAM policies, see <a href="https://docs.aws.amazon.com/amazonswf/latest/developerguide/swf-dev-iam.html">Using IAM to Manage Access to Amazon SWF
 *         Workflows</a> in the <i>Amazon SWF Developer Guide</i>.</p>
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
 *  <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
 *
 * @throws {@link LimitExceededFault} (client fault)
 *  <p>Returned by any operation if a system imposed limitation has been reached. To address this fault you should either clean up unused resources or increase the limit by contacting AWS.</p>
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link TooManyTagsFault} (client fault)
 *  <p>You've exceeded the number of tags allowed for a domain.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 *
 * @public
 */
export class RegisterDomainCommand extends $Command
  .classBuilder<
    RegisterDomainCommandInput,
    RegisterDomainCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "RegisterDomain", {})
  .n("SWFClient", "RegisterDomainCommand")
  .sc(RegisterDomain)
  .build() {
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
