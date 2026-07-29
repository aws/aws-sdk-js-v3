// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyMigrationProjectMessage, ModifyMigrationProjectResponse } from "../models/models_0";
import { ModifyMigrationProject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyMigrationProjectCommand}.
 */
export interface ModifyMigrationProjectCommandInput extends ModifyMigrationProjectMessage {}
/**
 * @public
 *
 * The output of {@link ModifyMigrationProjectCommand}.
 */
export interface ModifyMigrationProjectCommandOutput extends ModifyMigrationProjectResponse, __MetadataBearer {}

/**
 * <p>Modifies the specified migration project using the provided parameters.</p>
 *          <p>
 *             <b>Required permissions:</b>
 *             <code>dms:UpdateMigrationProject</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsdatabasemigrationservice.html">Actions, resources, and condition keys for Database Migration Service</a>.</p>
 *          <note>
 *             <p>The migration project must be closed before you can modify it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyMigrationProjectCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyMigrationProjectCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyMigrationProjectMessage
 *   MigrationProjectIdentifier: "STRING_VALUE", // required
 *   MigrationProjectName: "STRING_VALUE",
 *   SourceDataProviderDescriptors: [ // DataProviderDescriptorDefinitionList
 *     { // DataProviderDescriptorDefinition
 *       DataProviderIdentifier: "STRING_VALUE", // required
 *       SecretsManagerSecretId: "STRING_VALUE",
 *       SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     },
 *   ],
 *   TargetDataProviderDescriptors: [
 *     {
 *       DataProviderIdentifier: "STRING_VALUE", // required
 *       SecretsManagerSecretId: "STRING_VALUE",
 *       SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     },
 *   ],
 *   InstanceProfileIdentifier: "STRING_VALUE",
 *   TransformationRules: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   SchemaConversionApplicationAttributes: { // SCApplicationAttributes
 *     S3BucketPath: "STRING_VALUE",
 *     S3BucketRoleArn: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyMigrationProjectCommand(input);
 * const response = await client.send(command);
 * // { // ModifyMigrationProjectResponse
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
 * @param ModifyMigrationProjectCommandInput - {@link ModifyMigrationProjectCommandInput}
 * @returns {@link ModifyMigrationProjectCommandOutput}
 * @see {@link ModifyMigrationProjectCommandInput} for command's `input` shape.
 * @see {@link ModifyMigrationProjectCommandOutput} for command's `response` shape.
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
 * @example Modify a migration project
 * ```javascript
 * // The following example updates the source data provider and description of a migration project.
 * const input = {
 *   Description: "Updated migration project description",
 *   MigrationProjectIdentifier: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *   SourceDataProviderDescriptors: [
 *     {
 *       DataProviderIdentifier: "arn:aws:dms:us-east-1:111122223333:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRS"
 *     }
 *   ]
 * };
 * const command = new ModifyMigrationProjectCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   MigrationProject: {
 *     Description: "Updated migration project description",
 *     InstanceProfileArn: "arn:aws:dms:us-east-1:111122223333:instance-profile:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *     InstanceProfileName: "example-instance-profile",
 *     MigrationProjectArn: "arn:aws:dms:us-east-1:111122223333:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *     MigrationProjectCreationTime: "2026-01-09T12:30:00.000000Z",
 *     MigrationProjectName: "example-migration-project",
 *     SchemaConversionApplicationAttributes: {
 *       S3BucketPath: "s3://amzn-s3-demo-bucket",
 *       S3BucketRoleArn: "arn:aws:iam::111122223333:role/example-s3-access-role"
 *     },
 *     SourceDataProviderDescriptors: [
 *       {
 *         DataProviderArn: "arn:aws:dms:us-east-1:111122223333:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *         DataProviderName: "example-data-provider",
 *         SecretsManagerAccessRoleArn: "arn:aws:iam::111122223333:role/example-secrets-manager-role",
 *         SecretsManagerSecretId: "arn:aws:secretsmanager:us-east-1:111122223333:secret:example-source-secret-A1B2C3"
 *       }
 *     ],
 *     TargetDataProviderDescriptors: [
 *       {
 *         DataProviderArn: "arn:aws:dms:us-east-1:111122223333:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRS",
 *         DataProviderName: "example-data-provider",
 *         SecretsManagerAccessRoleArn: "arn:aws:iam::111122223333:role/example-secrets-manager-role",
 *         SecretsManagerSecretId: "arn:aws:secretsmanager:us-east-1:111122223333:secret:example-target-secret-A1B2C3"
 *       }
 *     ],
 *     TransformationRules: `{"rules":[{"rule-type":"transformation","rule-id":"1","rule-name":"1","rule-target":"schema","rule-action":"rename","object-locator":{"schema-name":"ExampleSchema"},"value":"TargetSchema"}]}`
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyMigrationProjectCommand extends command<ModifyMigrationProjectCommandInput, ModifyMigrationProjectCommandOutput>(
  _ep0,
  _mw0,
  "ModifyMigrationProject",
  ModifyMigrationProject$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyMigrationProjectMessage;
      output: ModifyMigrationProjectResponse;
    };
    sdk: {
      input: ModifyMigrationProjectCommandInput;
      output: ModifyMigrationProjectCommandOutput;
    };
  };
}
