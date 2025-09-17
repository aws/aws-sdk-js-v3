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
import { DeleteMigrationProjectMessage, DeleteMigrationProjectResponse } from "../models/models_0";
import { de_DeleteMigrationProjectCommand, se_DeleteMigrationProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMigrationProjectCommand}.
 */
export interface DeleteMigrationProjectCommandInput extends DeleteMigrationProjectMessage {}
/**
 * @public
 *
 * The output of {@link DeleteMigrationProjectCommand}.
 */
export interface DeleteMigrationProjectCommandOutput extends DeleteMigrationProjectResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified migration project.</p>
 *          <note>
 *             <p>The migration project must be closed before you can delete it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteMigrationProjectCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteMigrationProjectCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteMigrationProjectMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMigrationProjectCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMigrationProjectResponse
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
 * @param DeleteMigrationProjectCommandInput - {@link DeleteMigrationProjectCommandInput}
 * @returns {@link DeleteMigrationProjectCommandOutput}
 * @see {@link DeleteMigrationProjectCommandInput} for command's `input` shape.
 * @see {@link DeleteMigrationProjectCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Delete Migration Project
 * ```javascript
 * // Deletes the specified migration project.
 * const input = {
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DeleteMigrationProjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MigrationProject: {
 *     InstanceProfileArn: "arn:aws:dms:us-east-1:012345678901:instance-profile:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *     InstanceProfileName: "my-instance-profile",
 *     MigrationProjectArn: "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *     MigrationProjectCreationTime: "2023-04-19T11:45:15.805253Z",
 *     MigrationProjectName: "my-migration-project",
 *     SchemaConversionApplicationAttributes: {
 *       S3BucketPath: "my-s3-bucket/my_folder",
 *       S3BucketRoleArn: "arn:aws:iam::012345678901:role/my-s3role"
 *     },
 *     SourceDataProviderDescriptors: [
 *       {
 *         DataProviderArn: "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *         DataProviderName: "all-source-oracle-12",
 *         SecretsManagerAccessRoleArn: "arn:aws:iam::012345678901:role/my-access-role",
 *         SecretsManagerSecretId: "arn:aws:secretsmanager:us-east-1:012345678901:secret:myuser/ALL.SOURCE.ORACLE_12-0123456"
 *       }
 *     ],
 *     TargetDataProviderDescriptors: [
 *       {
 *         DataProviderArn: "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *         DataProviderName: "sde-obilyns-dataprovider-3",
 *         SecretsManagerAccessRoleArn: "arn:aws:iam::437223687239:role/dmytbon-admin-access",
 *         SecretsManagerSecretId: "arn:aws:secretsmanager:us-east-1:012345678901:secret:myuser/TARGET.postgresql-0123456"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteMigrationProjectCommand extends $Command
  .classBuilder<
    DeleteMigrationProjectCommandInput,
    DeleteMigrationProjectCommandOutput,
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
  .s("AmazonDMSv20160101", "DeleteMigrationProject", {})
  .n("DatabaseMigrationServiceClient", "DeleteMigrationProjectCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMigrationProjectCommand)
  .de(de_DeleteMigrationProjectCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMigrationProjectMessage;
      output: DeleteMigrationProjectResponse;
    };
    sdk: {
      input: DeleteMigrationProjectCommandInput;
      output: DeleteMigrationProjectCommandOutput;
    };
  };
}
