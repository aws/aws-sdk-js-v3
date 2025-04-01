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
import { CreateInstanceProfileMessage, CreateInstanceProfileResponse } from "../models/models_0";
import { de_CreateInstanceProfileCommand, se_CreateInstanceProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileMessage {}
/**
 * @public
 *
 * The output of {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResponse, __MetadataBearer {}

/**
 * <p>Creates the instance profile using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateInstanceProfileCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateInstanceProfileMessage
 *   AvailabilityZone: "STRING_VALUE",
 *   KmsKeyArn: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   NetworkType: "STRING_VALUE",
 *   InstanceProfileName: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SubnetGroupIdentifier: "STRING_VALUE",
 *   VpcSecurityGroups: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceProfileResponse
 * //   InstanceProfile: { // InstanceProfile
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     AvailabilityZone: "STRING_VALUE",
 * //     KmsKeyArn: "STRING_VALUE",
 * //     PubliclyAccessible: true || false,
 * //     NetworkType: "STRING_VALUE",
 * //     InstanceProfileName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     InstanceProfileCreationTime: new Date("TIMESTAMP"),
 * //     SubnetGroupIdentifier: "STRING_VALUE",
 * //     VpcSecurityGroups: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateInstanceProfileCommandInput - {@link CreateInstanceProfileCommandInput}
 * @returns {@link CreateInstanceProfileCommandOutput}
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link FailedDependencyFault} (client fault)
 *  <p>A dependency threw an exception.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link S3ResourceNotFoundFault} (client fault)
 *  <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Create Instance Profile
 * ```javascript
 * // Creates the instance profile using the specified parameters.
 * const input = {
 *   Description: "Description",
 *   InstanceProfileName: "my-instance-profile",
 *   KmsKeyArn: "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *   NetworkType: "DUAL",
 *   PubliclyAccessible: true,
 *   SubnetGroupIdentifier: "my-subnet-group",
 *   Tags: [
 *     {
 *       Key: "access",
 *       Value: "authorizedusers"
 *     }
 *   ]
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceProfile: {
 *     InstanceProfileArn: "arn:aws:dms:us-east-1:012345678901:instance-profile:my-instance-profile",
 *     InstanceProfileCreationTime: "2022-12-16T09:44:43.543246Z",
 *     InstanceProfileName: "my-instance-profile",
 *     KmsKeyArn: "arn:aws:kms:us-east-1:012345678901:key/01234567-89ab-cdef-0123-456789abcdef",
 *     PubliclyAccessible: true,
 *     SubnetGroupIdentifier: "public-subnets",
 *     VpcIdentifier: "vpc-0a1b2c3d4e5f6g7h8",
 *     VpcSecurityGroups: [
 *       "sg-0123456"
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateInstanceProfileCommand extends $Command
  .classBuilder<
    CreateInstanceProfileCommandInput,
    CreateInstanceProfileCommandOutput,
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
  .s("AmazonDMSv20160101", "CreateInstanceProfile", {})
  .n("DatabaseMigrationServiceClient", "CreateInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateInstanceProfileCommand)
  .de(de_CreateInstanceProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstanceProfileMessage;
      output: CreateInstanceProfileResponse;
    };
    sdk: {
      input: CreateInstanceProfileCommandInput;
      output: CreateInstanceProfileCommandOutput;
    };
  };
}
