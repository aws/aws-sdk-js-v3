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
import { CreateMigrationProjectMessage, CreateMigrationProjectResponse } from "../models/models_0";
import { de_CreateMigrationProjectCommand, se_CreateMigrationProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMigrationProjectCommand}.
 */
export interface CreateMigrationProjectCommandInput extends CreateMigrationProjectMessage {}
/**
 * @public
 *
 * The output of {@link CreateMigrationProjectCommand}.
 */
export interface CreateMigrationProjectCommandOutput extends CreateMigrationProjectResponse, __MetadataBearer {}

/**
 * <p>Creates the migration project using the specified parameters.</p>
 *          <p>You can run this action only after you create an instance profile and data providers
 *          using <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateInstanceProfile.html">CreateInstanceProfile</a> and <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_CreateDataProvider.html">CreateDataProvider</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateMigrationProjectCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateMigrationProjectCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateMigrationProjectMessage
 *   MigrationProjectName: "STRING_VALUE",
 *   SourceDataProviderDescriptors: [ // DataProviderDescriptorDefinitionList // required
 *     { // DataProviderDescriptorDefinition
 *       DataProviderIdentifier: "STRING_VALUE", // required
 *       SecretsManagerSecretId: "STRING_VALUE",
 *       SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     },
 *   ],
 *   TargetDataProviderDescriptors: [ // required
 *     {
 *       DataProviderIdentifier: "STRING_VALUE", // required
 *       SecretsManagerSecretId: "STRING_VALUE",
 *       SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     },
 *   ],
 *   InstanceProfileIdentifier: "STRING_VALUE", // required
 *   TransformationRules: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   SchemaConversionApplicationAttributes: { // SCApplicationAttributes
 *     S3BucketPath: "STRING_VALUE",
 *     S3BucketRoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMigrationProjectCommand(input);
 * const response = await client.send(command);
 * // { // CreateMigrationProjectResponse
 * //   MigrationProject: { // MigrationProject
 * //     MigrationProjectName: "STRING_VALUE",
 * //     MigrationProjectArn: "STRING_VALUE",
 * //     MigrationProjectCreationTime: new Date("TIMESTAMP"),
 * //     SourceDataProviderDescriptors: [ // DataProviderDescriptorList
 * //       { // DataProviderDescriptor
 * //         SecretsManagerSecretId: "STRING_VALUE",
 * //         SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //         DataProviderName: "STRING_VALUE",
 * //         DataProviderArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     TargetDataProviderDescriptors: [
 * //       {
 * //         SecretsManagerSecretId: "STRING_VALUE",
 * //         SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //         DataProviderName: "STRING_VALUE",
 * //         DataProviderArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     InstanceProfileArn: "STRING_VALUE",
 * //     InstanceProfileName: "STRING_VALUE",
 * //     TransformationRules: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     SchemaConversionApplicationAttributes: { // SCApplicationAttributes
 * //       S3BucketPath: "STRING_VALUE",
 * //       S3BucketRoleArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMigrationProjectCommandInput - {@link CreateMigrationProjectCommandInput}
 * @returns {@link CreateMigrationProjectCommandOutput}
 * @see {@link CreateMigrationProjectCommandInput} for command's `input` shape.
 * @see {@link CreateMigrationProjectCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
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
 * @public
 * @example Create Migration Project
 * ```javascript
 * // Creates the migration project with the specified parameters.
 * const input = {
 *   "Description": "description",
 *   "InstanceProfileIdentifier": "ip-au-17",
 *   "MigrationProjectName": "my-migration-project",
 *   "SchemaConversionApplicationAttributes": {
 *     "S3BucketPath": "arn:aws:s3:::mylogin-bucket",
 *     "S3BucketRoleArn": "arn:aws:iam::012345678901:role/Admin"
 *   },
 *   "SourceDataProviderDescriptors": [
 *     {
 *       "DataProviderIdentifier": "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *       "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/myuser-admin-access",
 *       "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myorg/example1/ALL.SOURCE.ORACLE_12-A1B2C3"
 *     }
 *   ],
 *   "Tags": [
 *     {
 *       "Key": "access",
 *       "Value": "authorizedusers"
 *     }
 *   ],
 *   "TargetDataProviderDescriptors": [
 *     {
 *       "DataProviderIdentifier": "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *       "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/myuser-admin-access",
 *       "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myorg/example1/TARGET.postgresql-A1B2C3"
 *     }
 *   ],
 *   "TransformationRules": "{\"key0\":\"value0\",\"key1\":\"value1\",\"key2\":\"value2\"}"
 * };
 * const command = new CreateMigrationProjectCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "MigrationProject": {
 *     "InstanceProfileArn": "arn:aws:dms:us-east-1:012345678901:instance-profile:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *     "InstanceProfileName": "my-instance-profile",
 *     "MigrationProjectArn": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *     "MigrationProjectCreationTime": "2023-04-19T11:45:15.805253Z",
 *     "MigrationProjectName": "my-migration-project",
 *     "SchemaConversionApplicationAttributes": {
 *       "S3BucketPath": "my-s3-bucket/my_folder",
 *       "S3BucketRoleArn": "arn:aws:iam::012345678901:role/my-s3role"
 *     },
 *     "SourceDataProviderDescriptors": [
 *       {
 *         "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *         "DataProviderName": "source-oracle-12",
 *         "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/my-access-role",
 *         "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myuser/ALL.SOURCE.ORACLE_12-0123456"
 *       }
 *     ],
 *     "TargetDataProviderDescriptors": [
 *       {
 *         "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *         "DataProviderName": "target-dataprovider-3",
 *         "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/dmytbon-admin-access",
 *         "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myuser/TARGET.postgresql-0123456"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: create-migration-project-1689716672685
 * ```
 *
 */
export class CreateMigrationProjectCommand extends $Command
  .classBuilder<
    CreateMigrationProjectCommandInput,
    CreateMigrationProjectCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "CreateMigrationProject", {})
  .n("DatabaseMigrationServiceClient", "CreateMigrationProjectCommand")
  .f(void 0, void 0)
  .ser(se_CreateMigrationProjectCommand)
  .de(de_CreateMigrationProjectCommand)
  .build() {}
