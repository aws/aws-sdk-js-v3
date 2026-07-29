// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeInstanceProfilesMessage, DescribeInstanceProfilesResponse } from "../models/models_0";
import { DescribeInstanceProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeInstanceProfilesCommand}.
 */
export interface DescribeInstanceProfilesCommandInput extends DescribeInstanceProfilesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceProfilesCommand}.
 */
export interface DescribeInstanceProfilesCommandOutput extends DescribeInstanceProfilesResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated list of instance profiles for your account in the current
 *          region.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:ListInstanceProfiles</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeInstanceProfilesMessage
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceProfilesResponse
 * //   Marker: "STRING_VALUE",
 * //   InstanceProfiles: [ // InstanceProfileList
 * //     { // InstanceProfile
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       KmsKeyArn: "STRING_VALUE",
 * //       PubliclyAccessible: true || false,
 * //       NetworkType: "STRING_VALUE",
 * //       InstanceProfileName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       InstanceProfileCreationTime: new Date("TIMESTAMP"),
 * //       SubnetGroupIdentifier: "STRING_VALUE",
 * //       VpcSecurityGroups: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeInstanceProfilesCommandInput - {@link DescribeInstanceProfilesCommandInput}
 * @returns {@link DescribeInstanceProfilesCommandOutput}
 * @see {@link DescribeInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Describe instance profiles with a filter
 * ```javascript
 * // The following example retrieves the details of an instance profile identified by its ARN.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "instance-profile-identifier",
 *       Values: [
 *         "arn:aws:dms:us-east-1:111122223333:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRS"
 *       ]
 *     }
 *   ]
 * };
 * const command = new DescribeInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceProfiles: [
 *     {
 *       Description: "Example instance profile for documentation",
 *       InstanceProfileArn: "arn:aws:dms:us-east-1:111122223333:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *       InstanceProfileCreationTime: "2026-01-09T12:30:00.000000Z",
 *       InstanceProfileName: "example-instance-profile",
 *       KmsKeyArn: "arn:aws:kms:us-east-1:111122223333:key/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       NetworkType: "IPV4",
 *       PubliclyAccessible: false,
 *       SubnetGroupIdentifier: "example-replication-subnet-group",
 *       VpcSecurityGroups: [
 *         "sg-0123456789abcdef0"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeInstanceProfilesCommand extends command<DescribeInstanceProfilesCommandInput, DescribeInstanceProfilesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeInstanceProfiles",
  DescribeInstanceProfiles$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceProfilesMessage;
      output: DescribeInstanceProfilesResponse;
    };
    sdk: {
      input: DescribeInstanceProfilesCommandInput;
      output: DescribeInstanceProfilesCommandOutput;
    };
  };
}
