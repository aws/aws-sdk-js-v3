// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListWorkflowTypesInput, WorkflowTypeInfos } from "../models/models_0";
import { ListWorkflowTypes$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkflowTypesCommand}.
 */
export interface ListWorkflowTypesCommandInput extends ListWorkflowTypesInput {}
/**
 * @public
 *
 * The output of {@link ListWorkflowTypesCommand}.
 */
export interface ListWorkflowTypesCommandOutput extends WorkflowTypeInfos, __MetadataBearer {}

/**
 * <p>Returns information about workflow types in the specified domain. The results may be
 *       split into multiple pages that can be retrieved by making the call repeatedly.</p>
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
 * import { SWFClient, ListWorkflowTypesCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, ListWorkflowTypesCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // ListWorkflowTypesInput
 *   domain: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   registrationStatus: "REGISTERED" || "DEPRECATED", // required
 *   nextPageToken: "STRING_VALUE",
 *   maximumPageSize: Number("int"),
 *   reverseOrder: true || false,
 * };
 * const command = new ListWorkflowTypesCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowTypeInfos
 * //   typeInfos: [ // WorkflowTypeInfoList // required
 * //     { // WorkflowTypeInfo
 * //       workflowType: { // WorkflowType
 * //         name: "STRING_VALUE", // required
 * //         version: "STRING_VALUE", // required
 * //       },
 * //       status: "REGISTERED" || "DEPRECATED", // required
 * //       description: "STRING_VALUE",
 * //       creationDate: new Date("TIMESTAMP"), // required
 * //       deprecationDate: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkflowTypesCommandInput - {@link ListWorkflowTypesCommandInput}
 * @returns {@link ListWorkflowTypesCommandOutput}
 * @see {@link ListWorkflowTypesCommandInput} for command's `input` shape.
 * @see {@link ListWorkflowTypesCommandOutput} for command's `response` shape.
 * @see {@link SWFClientResolvedConfig | config} for SWFClient's `config` shape.
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
export class ListWorkflowTypesCommand extends $Command
  .classBuilder<
    ListWorkflowTypesCommandInput,
    ListWorkflowTypesCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleWorkflowService", "ListWorkflowTypes", {})
  .n("SWFClient", "ListWorkflowTypesCommand")
  .sc(ListWorkflowTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkflowTypesInput;
      output: WorkflowTypeInfos;
    };
    sdk: {
      input: ListWorkflowTypesCommandInput;
      output: ListWorkflowTypesCommandOutput;
    };
  };
}
