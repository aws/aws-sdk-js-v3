// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { StartReportCreationInput, StartReportCreationOutput } from "../models/models_0";
import type {
  ResourceGroupsTaggingAPIClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ResourceGroupsTaggingAPIClient";
import { StartReportCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReportCreationCommand}.
 */
export interface StartReportCreationCommandInput extends StartReportCreationInput {}
/**
 * @public
 *
 * The output of {@link StartReportCreationCommand}.
 */
export interface StartReportCreationCommandOutput extends StartReportCreationOutput, __MetadataBearer {}

/**
 * <p>Generates a report that lists all tagged resources in the accounts across your
 *             organization and tells whether each resource is compliant with the effective tag policy.
 *             Compliance data is refreshed daily. The report is generated asynchronously.</p>
 *          <p>The generated report is saved to the following location:</p>
 *          <p>
 *             <code>s3://amzn-s3-demo-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv</code>
 *          </p>
 *          <p>For more information about evaluating resource compliance with tag policies, including
 *             the required permissions, review <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-permissions-org">Permissions for evaluating organization-wide compliance</a> in the
 *                 <i>Tagging Amazon Web Services Resources and Tag Editor</i> user guide. </p>
 *          <p>You can call this operation only from the organization's
 *     management account and from the us-east-1 Region.</p>
 *          <p>If the account associated with the identity used to call
 *                 <code>StartReportCreation</code> is different from the account that owns the Amazon S3
 *             bucket, there must be a bucket policy attached to the bucket to provide access. For more
 *             information, review <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy">Amazon S3 bucket
 *                 policy for report storage</a> in the <i>Tagging Amazon Web Services Resources and Tag
 *                 Editor</i> user guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } from "@aws-sdk/client-resource-groups-tagging-api"; // ES Modules import
 * // const { ResourceGroupsTaggingAPIClient, StartReportCreationCommand } = require("@aws-sdk/client-resource-groups-tagging-api"); // CommonJS import
 * // import type { ResourceGroupsTaggingAPIClientConfig } from "@aws-sdk/client-resource-groups-tagging-api";
 * const config = {}; // type is ResourceGroupsTaggingAPIClientConfig
 * const client = new ResourceGroupsTaggingAPIClient(config);
 * const input = { // StartReportCreationInput
 *   S3Bucket: "STRING_VALUE", // required
 * };
 * const command = new StartReportCreationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartReportCreationCommandInput - {@link StartReportCreationCommandInput}
 * @returns {@link StartReportCreationCommandOutput}
 * @see {@link StartReportCreationCommandInput} for command's `input` shape.
 * @see {@link StartReportCreationCommandOutput} for command's `response` shape.
 * @see {@link ResourceGroupsTaggingAPIClientResolvedConfig | config} for ResourceGroupsTaggingAPIClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request failed because the target of the operation is currently being modified by
 *             a different request. Try again later.</p>
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
export class StartReportCreationCommand extends $Command
  .classBuilder<
    StartReportCreationCommandInput,
    StartReportCreationCommandOutput,
    ResourceGroupsTaggingAPIClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResourceGroupsTaggingAPIClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ResourceGroupsTaggingAPI_20170126", "StartReportCreation", {})
  .n("ResourceGroupsTaggingAPIClient", "StartReportCreationCommand")
  .sc(StartReportCreation$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReportCreationInput;
      output: {};
    };
    sdk: {
      input: StartReportCreationCommandInput;
      output: StartReportCreationCommandOutput;
    };
  };
}
