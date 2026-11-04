// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeReportCreationInput, DescribeReportCreationOutput } from "../models/models_0";
import { DescribeReportCreation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describes the status of the `StartReportCreation` operation.
 *
 * You can call this operation only from the organization's management account and from the us-east-1 Region.
 *
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
export class DescribeReportCreationCommand extends command<DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeReportCreation",
  DescribeReportCreation$
) {
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
