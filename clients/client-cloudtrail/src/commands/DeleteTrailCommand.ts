// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteTrailRequest, DeleteTrailResponse } from "../models/models_0";
import { DeleteTrail$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTrailCommand}.
 */
export interface DeleteTrailCommandInput extends DeleteTrailRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTrailCommand}.
 */
export interface DeleteTrailCommandOutput extends DeleteTrailResponse, __MetadataBearer {}

/**
 * Deletes a trail. This operation must be called from the Region in which the trail was created. `DeleteTrail` cannot be called on the shadow trails (replicated trails in other Regions) of a trail that is enabled in all Regions.
 *
 * > **Important:**
 * >
 * > While deleting a CloudTrail trail is an irreversible action, CloudTrail does not delete log files in the Amazon S3 bucket for that trail, the Amazon S3 bucket itself, or the CloudWatchlog group to which the trail delivers events. Deleting a multi-Region trail will stop logging of events in all Amazon Web Services Regions enabled in your Amazon Web Services account. Deleting a single-Region trail will stop logging of events in that Region only. It will not stop logging of events in other Regions even if the trails in those other Regions have identical names to the deleted trail.
 * >
 * > For information about account closure and deletion of CloudTrail trails, see [https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-account-closure.html](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-account-closure.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, DeleteTrailCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, DeleteTrailCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // DeleteTrailRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteTrailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTrailCommandInput - {@link DeleteTrailCommandInput}
 * @returns {@link DeleteTrailCommandOutput}
 * @see {@link DeleteTrailCommandInput} for command's `input` shape.
 * @see {@link DeleteTrailCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link CloudTrailARNInvalidException} (client fault)
 *
 * This exception is thrown when an operation is called with an ARN that is not valid.
 *
 * The following is the format of a trail ARN: `arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail`
 *
 * The following is the format of an event data store ARN: `arn:aws:cloudtrail:us-east-2:123456789012:eventdatastore/EXAMPLE-f852-4e8f-8bd1-bcf6cEXAMPLE`
 *
 * The following is the format of a dashboard ARN: `arn:aws:cloudtrail:us-east-1:123456789012:dashboard/exampleDash`
 *
 * The following is the format of a channel ARN: `arn:aws:cloudtrail:us-east-2:123456789012:channel/01234567890`
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This exception is thrown when the specified resource is not ready for an operation. This can occur when you try to run an operation on a resource before CloudTrail has time to fully load the resource, or because another operation is modifying the resource. If this exception occurs, wait a few minutes, and then try the operation again.
 *
 * @throws {@link InsufficientDependencyServiceAccessPermissionException} (client fault)
 *
 * This exception is thrown when the IAM identity that is used to create the organization resource lacks one or more required permissions for creating an organization resource in a required service.
 *
 * @throws {@link InvalidHomeRegionException} (client fault)
 *
 * This exception is thrown when an operation is called on a trail from a Region other than the Region in which the trail was created.
 *
 * @throws {@link InvalidTrailNameException} (client fault)
 *
 * This exception is thrown when the provided trail name is not valid. Trail names must meet the following requirements:
 *
 * - Contain only ASCII letters (a-z, A-Z), numbers (0-9), periods (.), underscores (_), or dashes (-)
 * - Start with a letter or number, and end with a letter or number
 * - Be between 3 and 128 characters
 * - Have no adjacent periods, underscores or dashes. Names like `my-_namespace` and `my--namespace` are not valid.
 * - Not be in IP address format (for example, 192.168.5.4)
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *
 * This exception is thrown when the management account does not have a service-linked role.
 *
 * @throws {@link NotOrganizationMasterAccountException} (client fault)
 *
 * This exception is thrown when the Amazon Web Services account making the request to create or update an organization trail or event data store is not the management account for an organization in Organizations. For more information, see [Prepare For Creating a Trail For Your Organization](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/creating-an-organizational-trail-prepare.html) or [Organization event data stores](https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-lake-organizations.html).
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *
 * This exception is thrown when the requested operation is not permitted.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * This exception is thrown when the request rate exceeds the limit.
 *
 * @throws {@link TrailNotFoundException} (client fault)
 *
 * This exception is thrown when the trail with the given name is not found.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * This exception is thrown when the requested operation is not supported.
 *
 * @throws {@link CloudTrailServiceException}
 *
 * Base exception class for all service exceptions from CloudTrail service.
 *
 * @public
 */
export class DeleteTrailCommand extends command<DeleteTrailCommandInput, DeleteTrailCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTrail",
  DeleteTrail$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTrailRequest;
      output: {};
    };
    sdk: {
      input: DeleteTrailCommandInput;
      output: DeleteTrailCommandOutput;
    };
  };
}
