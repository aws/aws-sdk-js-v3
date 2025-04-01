// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceProfilesMessage, DescribeInstanceProfilesResponse } from "../models/models_0";
import { de_DescribeInstanceProfilesCommand, se_DescribeInstanceProfilesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeInstanceProfilesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 * @example Describe Instance Profiles
 * ```javascript
 * // Returns a paginated list of instance profiles for your account in the current region.
 * const input = {
 *   Filters: [
 *     {
 *       Name: "instance-profile-identifier",
 *       Values: [
 *         "arn:aws:dms:us-east-1:012345678901:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 *       ]
 *     }
 *   ],
 *   Marker: "0123456789abcdefghijklmnopqrs",
 *   MaxRecords: 20
 * };
 * const command = new DescribeInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceProfiles: [
 *     {
 *       InstanceProfileArn: "arn:aws:dms:us-east-1:012345678901:instance-profile:my-instance-profile",
 *       InstanceProfileCreationTime: "2022-12-16T09:44:43.543246Z",
 *       InstanceProfileName: "my-instance-profile",
 *       KmsKeyArn: "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *       PubliclyAccessible: true,
 *       SubnetGroupIdentifier: "public-subnets",
 *       VpcIdentifier: "vpc-0a1b2c3d4e5f6g7h8"
 *     }
 *   ],
 *   Marker: "0123456789abcdefghijklmnopqrs"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeInstanceProfilesCommand extends $Command
  .classBuilder<
    DescribeInstanceProfilesCommandInput,
    DescribeInstanceProfilesCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeInstanceProfiles", {})
  .n("DatabaseMigrationServiceClient", "DescribeInstanceProfilesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceProfilesCommand)
  .de(de_DescribeInstanceProfilesCommand)
  .build() {
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
