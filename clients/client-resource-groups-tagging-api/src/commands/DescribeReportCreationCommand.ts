// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeReportCreationInput, DescribeReportCreationOutput } from "../models/models_0";
import type {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { DescribeReportCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReportCreationCommand}.
 */
export interface DescribeReportCreationCommandInput extends DescribeReportCreationInput {}
/**
 * @public
 *
 * The output of {@link DescribeReportCreationCommand}.
 */
export interface DescribeReportCreationCommandOutput extends DescribeReportCreationOutput, __MetadataBearer {}

/**
 * <p>Describes the status of the <code>StartReportCreation</code> operation. </p>
 *          <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, DescribeReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, DescribeReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = {};
 * const command = new DescribeReportCreationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReportCreationOutput
 * //   Status: "STRING_VALUE",
 * //   S3Location: "STRING_VALUE",
 * //   StartDate: "STRING_VALUE",
 * //   ErrorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReportCreationCommandInput - {@link DescribeReportCreationCommandInput}
 * @returns {@link DescribeReportCreationCommandOutput}
 * @see {@link DescribeReportCreationCommandInput} for command's `input` shape.
 * @see {@link DescribeReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *  <p>The request failed because performing the operation would violate a constraint.</p>
 *          <p>Some of the reasons in the following list might not apply to this specific
 *             operation.</p>
 *          <ul>
 *             <li>
 *                <p>You must meet the prerequisites for using tag policies. For information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-prereqs">Prerequisites and permissions</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>You must enable the tag policies service principal
 *                         (<code>tagpolicies.tag.amazonaws.com</code>) to integrate with Organizations For
 *                     information, see <a href="https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html">EnableAWSServiceAccess</a>.</p>
 *             </li>
 *             <li>
 *                <p>You must have a tag policy attached to the organization root, an OU, or an
 *                     account.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. You
 *             can retry the request.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request failed because of one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>A required parameter is missing.</p>
 *             </li>
 *             <li>
 *                <p>A provided string parameter is malformed.</p>
 *             </li>
 *             <li>
 *                <p>An provided parameter value is out of range.</p>
 *             </li>
 *             <li>
 *                <p>The target ID is invalid, unsupported, or doesn't exist.</p>
 *             </li>
 *             <li>
 *                <p>You can't access the Amazon S3 bucket for report storage. For more information, see
 *                         <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy">Amazon S3 bucket policy for report storage</a> in the <i>Tagging Amazon Web Services resources and Tag Editor</i> user guide. </p>
 *             </li>
 *             <li>
 *                <p>The partition specified in an ARN parameter in the request doesn't match the
 *                     partition where you invoked the operation. The partition is specified by the
 *                     second field of the ARN.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request failed because it exceeded the allowed frequency of submitted
 *             requests.</p>
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 * <p>Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.</p>
 *
 *
 * @public
 */
export class DescribeReportCreationCommand extends $Command
  .classBuilder<
    DescribeReportCreationCommandInput,
    DescribeReportCreationCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "DescribeReportCreation", {})
  .n("ResourceGroupsTaggingAPIClient", "DescribeReportCreationCommand")
  .sc(DescribeReportCreation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeReportCreationOutput;
    };
    sdk: {
      input: DescribeReportCreationCommandInput;
      output: DescribeReportCreationCommandOutput;
    };
  };
}
