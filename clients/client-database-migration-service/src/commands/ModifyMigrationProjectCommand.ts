// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { ModifyMigrationProjectMessage, ModifyMigrationProjectResponse } from "../models/models_1";
import { de_ModifyMigrationProjectCommand, se_ModifyMigrationProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Modifies the specified migration project using the provided parameters.</p>
 *          <note>
 *             <p>The migration project must be closed before you can modify it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyMigrationProjectCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyMigrationProjectCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 * @example Modify Migration Project
 * ```javascript
 * // Modifies the specified migration project using the provided parameters.
 * const input = {
 *   "Description": "description",
 *   "InstanceProfileIdentifier": "my-instance-profile",
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *   "MigrationProjectName": "new-name",
 *   "SchemaConversionApplicationAttributes": {
 *     "S3BucketPath": "arn:aws:s3:::myuser-bucket",
 *     "S3BucketRoleArn": "arn:aws:iam::012345678901:role/Admin"
 *   },
 *   "SourceDataProviderDescriptors": [
 *     {
 *       "DataProviderIdentifier": "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *       "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/myuser-admin-access",
 *       "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myorg/myuser/ALL.SOURCE.ORACLE_12-A1B2C3"
 *     }
 *   ],
 *   "TargetDataProviderDescriptors": [
 *     {
 *       "DataProviderIdentifier": "arn:aws:dms:us-east-1:012345678901:data-provider:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345",
 *       "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/myuser-admin-access",
 *       "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myorg/myuser/TARGET.postgresql-A1B2C3"
 *     }
 *   ]
 * };
 * const command = new ModifyMigrationProjectCommand(input);
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
 *         "DataProviderName": "all-source-oracle-12",
 *         "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/my-access-role",
 *         "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:mygroup/myalias/ALL.SOURCE.ORACLE_12-TP5rA9"
 *       }
 *     ],
 *     "TargetDataProviderDescriptors": [
 *       {
 *         "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *         "DataProviderName": "my-dataprovider",
 *         "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/my-access-role",
 *         "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:mygroup/myalias/TARGET.postgresql-mysecret"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: modify-migration-project-1689721117475
 * ```
 *
 */
export class ModifyMigrationProjectCommand extends $Command<
  ModifyMigrationProjectCommandInput,
  ModifyMigrationProjectCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ModifyMigrationProjectCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyMigrationProjectCommandInput, ModifyMigrationProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyMigrationProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "ModifyMigrationProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "ModifyMigrationProject",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ModifyMigrationProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyMigrationProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyMigrationProjectCommandOutput> {
    return de_ModifyMigrationProjectCommand(output, context);
  }
}
