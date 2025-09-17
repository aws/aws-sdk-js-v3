// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeWorkflowTypeInput, WorkflowTypeDetail } from "../models/models_0";
import { de_DescribeWorkflowTypeCommand, se_DescribeWorkflowTypeCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SWFClientResolvedConfig } from "../SWFClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkflowTypeCommand}.
 */
export interface DescribeWorkflowTypeCommandInput extends DescribeWorkflowTypeInput {}
/**
 * @public
 *
 * The output of {@link DescribeWorkflowTypeCommand}.
 */
export interface DescribeWorkflowTypeCommandOutput extends WorkflowTypeDetail, __MetadataBearer {}

/**
 * <p>Returns information about the specified <i>workflow type</i>. This
 *       includes configuration settings specified when the type was registered and other information
 *       such as creation date, current status, etc.</p>
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
 *                         <code>workflowType.name</code>: String constraint. The key is
 *                 <code>swf:workflowType.name</code>.</p>
 *                   </li>
 *                   <li>
 *                      <p>
 *                         <code>workflowType.version</code>: String constraint. The key is
 *                 <code>swf:workflowType.version</code>.</p>
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
 * import { SWFClient, DescribeWorkflowTypeCommand } from "@aws-sdk/client-swf"; // ES Modules import
 * // const { SWFClient, DescribeWorkflowTypeCommand } = require("@aws-sdk/client-swf"); // CommonJS import
 * // import type { SWFClientConfig } from "@aws-sdk/client-swf";
 * const config = {}; // type is SWFClientConfig
 * const client = new SWFClient(config);
 * const input = { // DescribeWorkflowTypeInput
 *   domain: "STRING_VALUE", // required
 *   workflowType: { // WorkflowType
 *     name: "STRING_VALUE", // required
 *     version: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeWorkflowTypeCommand(input);
 * const response = await client.send(command);
 * // { // WorkflowTypeDetail
 * //   typeInfo: { // WorkflowTypeInfo
 * //     workflowType: { // WorkflowType
 * //       name: "STRING_VALUE", // required
 * //       version: "STRING_VALUE", // required
 * //     },
 * //     status: "REGISTERED" || "DEPRECATED", // required
 * //     description: "STRING_VALUE",
 * //     creationDate: new Date("TIMESTAMP"), // required
 * //     deprecationDate: new Date("TIMESTAMP"),
 * //   },
 * //   configuration: { // WorkflowTypeConfiguration
 * //     defaultTaskStartToCloseTimeout: "STRING_VALUE",
 * //     defaultExecutionStartToCloseTimeout: "STRING_VALUE",
 * //     defaultTaskList: { // TaskList
 * //       name: "STRING_VALUE", // required
 * //     },
 * //     defaultTaskPriority: "STRING_VALUE",
 * //     defaultChildPolicy: "TERMINATE" || "REQUEST_CANCEL" || "ABANDON",
 * //     defaultLambdaRole: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkflowTypeCommandInput - {@link DescribeWorkflowTypeCommandInput}
 * @returns {@link DescribeWorkflowTypeCommandOutput}
 * @see {@link DescribeWorkflowTypeCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkflowTypeCommandOutput} for command's `response` shape.
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
export class DescribeWorkflowTypeCommand extends $Command
  .classBuilder<
    DescribeWorkflowTypeCommandInput,
    DescribeWorkflowTypeCommandOutput,
    SWFClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SWFClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleWorkflowService", "DescribeWorkflowType", {})
  .n("SWFClient", "DescribeWorkflowTypeCommand")
  .f(void 0, void 0)
  .ser(se_DescribeWorkflowTypeCommand)
  .de(de_DescribeWorkflowTypeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkflowTypeInput;
      output: WorkflowTypeDetail;
    };
    sdk: {
      input: DescribeWorkflowTypeCommandInput;
      output: DescribeWorkflowTypeCommandOutput;
    };
  };
}
