// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UndeprecateDomainInput } from "../models/models_0";
import { UndeprecateDomain } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Undeprecates a previously deprecated domain. After a domain has been undeprecated it can be used
 *       to create new workflow executions or register new types.</p>
 *          <note>
 *             <p>This operation is eventually consistent. The results are best effort and may not
 *         exactly reflect recent updates and changes.</p>
 *          </note>
 *          <p>
 *             <b>Access Control</b>
 *          </p>
 *          <p>You can use IAM policies to control this action's access to Amazon SWF resources as
 *       follows:</p>
 *          <ul>
 *             <li>
 *                <p>Use a <code>Resource</code> element with the domain name to limit the action to
 *           only specified domains.</p>
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
 *  <p>Returned if the domain already exists. You may get this fault if you are registering a domain that is either already registered or deprecated, or if you undeprecate a domain that is currently registered.</p>
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link UnknownResourceFault} (client fault)
 *  <p>Returned when the named resource cannot be found with in the scope of this operation (region or domain). This could happen if the named resource was never created or is no longer available for this operation.</p>
 *
 * @throws {@link SWFServiceException}
 * <p>Base exception class for all service exceptions from SWF service.</p>
 *
 *
 * @public
 */
export class UndeprecateDomainCommand extends $Command
  .classBuilder<
    UndeprecateDomainCommandInput,
    UndeprecateDomainCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "UndeprecateDomain", {})
  .n("SWFClient", "UndeprecateDomainCommand")
  .sc(UndeprecateDomain)
  .build() {
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
