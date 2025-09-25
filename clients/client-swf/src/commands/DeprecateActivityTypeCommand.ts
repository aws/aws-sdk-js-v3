// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeprecateActivityTypeInput } from "../models/models_0";
import { DeprecateActivityType } from "../schemas/schemas_5_Activity";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeprecateActivityTypeCommand}.
 */
export interface DeprecateActivityTypeCommandInput extends DeprecateActivityTypeInput {}
/**
 * @public
 *
 * The output of {@link DeprecateActivityTypeCommand}.
 */
export interface DeprecateActivityTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deprecates the specified <i>activity type</i>. After an activity type has
 *       been deprecated, you cannot create new tasks of that activity type. Tasks of this type that
 *       were scheduled before the type was deprecated continue to run.</p>
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
 *                <p>Constrain the following parameters by using a <code>Condition</code> element with
 *           the appropriate keys.</p>
 *                <ul>
 *                   <li>
 *                      <p>
 *                         <code>activityType.name</code>: String constraint. The key is
 *                 <code>swf:activityType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>activityType.version</code>: String constraint. The key is
 *                 <code>swf:activityType.version</code>.</p>
 *                   </li>
 *                </ul>
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
 * import { SWFClient, DeprecateActivityTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DeprecateActivityTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DeprecateActivityTypeInput
 *   domain: "STRING_VALUE", // required
 *   activityType: { // ActivityType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DeprecateActivityTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeprecateActivityTypeCommandInput - {@link DeprecateActivityTypeCommandInput}
 * @returns {@link DeprecateActivityTypeCommandOutput}
 * @see {@link DeprecateActivityTypeCommandInput} for command's `input` shape.
 * @see {@link DeprecateActivityTypeCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
 *
 * @throws {@link OperationNotPermittedFault} (client fault)
 *  <p>Returned when the caller doesn't have sufficient permissions to invoke the action.</p>
 *
 * @throws {@link TypeDeprecatedFault} (client fault)
 *  <p>Returned when the specified activity or workflow type was already deprecated.</p>
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
export class DeprecateActivityTypeCommand extends $Command
  .classBuilder<
    DeprecateActivityTypeCommandInput,
    DeprecateActivityTypeCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "DeprecateActivityType", {})
  .n("SWFClient", "DeprecateActivityTypeCommand")
  .sc(DeprecateActivityType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeprecateActivityTypeInput;
      output: {};
    };
    sdk: {
      input: DeprecateActivityTypeCommandInput;
      output: DeprecateActivityTypeCommandOutput;
    };
  };
}
