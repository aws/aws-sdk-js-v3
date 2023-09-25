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
import { DescribeMigrationProjectsMessage, DescribeMigrationProjectsResponse } from "../models/models_0";
import { de_DescribeMigrationProjectsCommand, se_DescribeMigrationProjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMigrationProjectsCommand}.
 */
export interface DescribeMigrationProjectsCommandInput extends DescribeMigrationProjectsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeMigrationProjectsCommand}.
 */
export interface DescribeMigrationProjectsCommandOutput extends DescribeMigrationProjectsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of migration projects for your account in the current region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeMigrationProjectsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeMigrationProjectsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeMigrationProjectsMessage
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
 * const command = new DescribeMigrationProjectsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMigrationProjectsResponse
 * //   Marker: "STRING_VALUE",
 * //   MigrationProjects: [ // MigrationProjectList
 * //     { // MigrationProject
 * //       MigrationProjectName: "STRING_VALUE",
 * //       MigrationProjectArn: "STRING_VALUE",
 * //       MigrationProjectCreationTime: new Date("TIMESTAMP"),
 * //       SourceDataProviderDescriptors: [ // DataProviderDescriptorList
 * //         { // DataProviderDescriptor
 * //           SecretsManagerSecretId: "STRING_VALUE",
 * //           SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //           DataProviderName: "STRING_VALUE",
 * //           DataProviderArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       TargetDataProviderDescriptors: [
 * //         {
 * //           SecretsManagerSecretId: "STRING_VALUE",
 * //           SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //           DataProviderName: "STRING_VALUE",
 * //           DataProviderArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       InstanceProfileArn: "STRING_VALUE",
 * //       InstanceProfileName: "STRING_VALUE",
 * //       TransformationRules: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       SchemaConversionApplicationAttributes: { // SCApplicationAttributes
 * //         S3BucketPath: "STRING_VALUE",
 * //         S3BucketRoleArn: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMigrationProjectsCommandInput - {@link DescribeMigrationProjectsCommandInput}
 * @returns {@link DescribeMigrationProjectsCommandOutput}
 * @see {@link DescribeMigrationProjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeMigrationProjectsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Describe Migration Projects
 * ```javascript
 * // Returns a paginated list of migration projects for your account in the current region.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "migration-project-identifier",
 *       "Values": [
 *         "arn:aws:dms:us-east-1:012345678901:migration-project:EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ12345678901"
 *       ]
 *     }
 *   ],
 *   "Marker": "EXAMPLEABCDEFGHIJKLMNOPQRSTUVWXYZ123456",
 *   "MaxRecords": 20
 * };
 * const command = new DescribeMigrationProjectsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "0123456789abcdefghijklmnopqrs",
 *   "MigrationProjects": [
 *     {
 *       "InstanceProfileArn": "arn:aws:dms:us-east-1:012345678901:instance-profile:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *       "InstanceProfileName": "my-instance-profile",
 *       "MigrationProjectArn": "arn:aws:dms:us-east-1:012345678901:migration-project:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *       "MigrationProjectCreationTime": "2023-04-19T11:45:15.805253Z",
 *       "MigrationProjectName": "my-migration-project",
 *       "SchemaConversionApplicationAttributes": {
 *         "S3BucketPath": "my-s3-bucket/my_folder",
 *         "S3BucketRoleArn": "arn:aws:iam::012345678901:role/my-s3role"
 *       },
 *       "SourceDataProviderDescriptors": [
 *         {
 *           "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *           "DataProviderName": "all-source-oracle-12",
 *           "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/my-access-role",
 *           "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:mygroup/myalias/ALL.SOURCE.ORACLE_12-012345"
 *         }
 *       ],
 *       "TargetDataProviderDescriptors": [
 *         {
 *           "DataProviderArn": "arn:aws:dms:us-east-1:012345678901:data-provider:0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ012",
 *           "DataProviderName": "my-data-provider",
 *           "SecretsManagerAccessRoleArn": "arn:aws:iam::012345678901:role/dmytbon-admin-access",
 *           "SecretsManagerSecretId": "arn:aws:secretsmanager:us-east-1:012345678901:secret:mygroup/myalias/TARGET.postgresql-012345"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: describe-migration-projects-1689719912075
 * ```
 *
 */
export class DescribeMigrationProjectsCommand extends $Command<
  DescribeMigrationProjectsCommandInput,
  DescribeMigrationProjectsCommandOutput,
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
  constructor(readonly input: DescribeMigrationProjectsCommandInput) {
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
  ): Handler<DescribeMigrationProjectsCommandInput, DescribeMigrationProjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMigrationProjectsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeMigrationProjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "DescribeMigrationProjects",
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
  private serialize(input: DescribeMigrationProjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMigrationProjectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMigrationProjectsCommandOutput> {
    return de_DescribeMigrationProjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
