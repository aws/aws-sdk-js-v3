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
import { DeleteMigrationProjectMessage, DeleteMigrationProjectResponse } from "../models/models_0";
import { de_DeleteMigrationProjectCommand, se_DeleteMigrationProjectCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Deletes the specified migration project.</p>
 *          <note>
 *             <p>The migration project must be closed before you can delete it.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteMigrationProjectCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteMigrationProjectCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
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
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Delete Migration Project
 * ```javascript
 * // Deletes the specified migration project.
 * const input = {
 *   "MigrationProjectIdentifier": "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ012345"
 * };
 * const command = new DeleteMigrationProjectCommand(input);
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
 *         "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myuser/ALL.SOURCE.ORACLE_12-0123456"
 *       }
 *     ],
 *     "TargetDataProviderDescriptors": [
 *       {
 *         "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *         "DataProviderName": "sde-obilyns-dataprovider-3",
 *         "SecretsManagerAccessRoleArn": "arn:aws:iam::437223687239:role/dmytbon-admin-access",
 *         "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:myuser/TARGET.postgresql-0123456"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: delete-migration-project-1689717217454
 * ```
 *
 */
export class DeleteMigrationProjectCommand extends $Command<
  DeleteMigrationProjectCommandInput,
  DeleteMigrationProjectCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: DeleteMigrationProjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteMigrationProjectCommandInput, DeleteMigrationProjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteMigrationProjectCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DeleteMigrationProjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DeleteMigrationProject",
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
  private serialize(input: DeleteMigrationProjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteMigrationProjectCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteMigrationProjectCommandOutput> {
    return de_DeleteMigrationProjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
