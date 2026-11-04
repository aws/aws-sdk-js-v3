// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartReportCreationInput, StartReportCreationOutput } from "../models/models_0";
import { StartReportCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Generates a report that lists all tagged resources in the accounts across your organization and tells whether each resource is compliant with the effective tag policy. Compliance data is refreshed daily. The report is generated asynchronously.
 *
 * The generated report is saved to the following location:
 *
 * `s3://amzn-s3-demo-bucket/AwsTagPolicies/o-exampleorgid/YYYY-MM-ddTHH:mm:ssZ/report.csv`
 *
 * For more information about evaluating resource compliance with tag policies, including the required permissions, review [Permissions for evaluating organization-wide compliance](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-permissions-org) in the *Tagging Amazon Web Services Resources and Tag Editor* user guide.
 *
 * You can call this operation only from the organization's management account and from the us-east-1 Region.
 *
 * If the account associated with the identity used to call `StartReportCreation` is different from the account that owns the Amazon S3 bucket, there must be a bucket policy attached to the bucket to provide access. For more information, review [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services Resources and Tag Editor* user guide.
 *
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
 *
 * The request failed because the target of the operation is currently being modified by a different request. Try again later.
 *
 * @throws {@link ConstraintViolationException} (client fault)
 *
 * The request failed because performing the operation would violate a constraint.
 *
 * Some of the reasons in the following list might not apply to this specific operation.
 *
 * - You must meet the prerequisites for using tag policies. For information, see [Prerequisites and permissions](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#tag-policies-prereqs) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - You must enable the tag policies service principal (`tagpolicies.tag.amazonaws.com`) to integrate with Organizations For information, see [EnableAWSServiceAccess](https://docs.aws.amazon.com/organizations/latest/APIReference/API_EnableAWSServiceAccess.html).
 * - You must have a tag policy attached to the organization root, an OU, or an account.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * The request processing failed because of an unknown error, exception, or failure. You can retry the request.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * The request failed because of one of the following reasons:
 *
 * - A required parameter is missing.
 * - A provided string parameter is malformed.
 * - An provided parameter value is out of range.
 * - The target ID is invalid, unsupported, or doesn't exist.
 * - You can't access the Amazon S3 bucket for report storage. For more information, see [Amazon S3 bucket policy for report storage](https://docs.aws.amazon.com/tag-editor/latest/userguide/tag-policies-orgs.html#bucket-policy) in the *Tagging Amazon Web Services resources and Tag Editor* user guide.
 * - The partition specified in an ARN parameter in the request doesn't match the partition where you invoked the operation. The partition is specified by the second field of the ARN.
 *
 * @throws {@link ThrottledException} (client fault)
 *
 * The request failed because it exceeded the allowed frequency of submitted requests.
 *
 * @throws {@link ResourceGroupsTaggingAPIServiceException}
 *
 * Base exception class for all service exceptions from ResourceGroupsTaggingAPI service.
 *
 * @public
 */
export class StartReportCreationCommand extends command<StartReportCreationCommandInput, StartReportCreationCommandOutput>(
  _ep0,
  _mw0,
  "StartReportCreation",
  StartReportCreation$
) {
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
