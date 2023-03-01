// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  CreateReplicationInstanceMessage,
  CreateReplicationInstanceMessageFilterSensitiveLog,
  CreateReplicationInstanceResponse,
  CreateReplicationInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateReplicationInstanceCommand,
  serializeAws_json1_1CreateReplicationInstanceCommand,
} from "../protocols/Aws_json1_1";

/**
 * The input for {@link CreateReplicationInstanceCommand}.
 */
export interface CreateReplicationInstanceCommandInput extends CreateReplicationInstanceMessage {}
/**
 * The output of {@link CreateReplicationInstanceCommand}.
 */
export interface CreateReplicationInstanceCommandOutput extends CreateReplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates the replication instance using the specified parameters.</p>
 *          <p>DMS requires that your account have certain roles with appropriate permissions
 *          before you can create a replication instance. For information on the required roles, see
 *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For
 *          information on the required permissions, see
 *       <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new CreateReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 *
 * @example Create replication instance
 * ```javascript
 * // Creates the replication instance using the specified parameters.
 * const input = {
 *   "AllocatedStorage": 123,
 *   "AutoMinorVersionUpgrade": true,
 *   "AvailabilityZone": "",
 *   "EngineVersion": "",
 *   "KmsKeyId": "",
 *   "MultiAZ": true,
 *   "PreferredMaintenanceWindow": "",
 *   "PubliclyAccessible": true,
 *   "ReplicationInstanceClass": "",
 *   "ReplicationInstanceIdentifier": "",
 *   "ReplicationSubnetGroupIdentifier": "",
 *   "Tags": [
 *     {
 *       "Key": "string",
 *       "Value": "string"
 *     }
 *   ],
 *   "VpcSecurityGroupIds": []
 * };
 * const command = new CreateReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationInstance": {
 *     "AllocatedStorage": 5,
 *     "AutoMinorVersionUpgrade": true,
 *     "EngineVersion": "1.5.0",
 *     "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
 *     "PendingModifiedValues": {},
 *     "PreferredMaintenanceWindow": "sun:06:00-sun:14:00",
 *     "PubliclyAccessible": true,
 *     "ReplicationInstanceArn": "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *     "ReplicationInstanceClass": "dms.t2.micro",
 *     "ReplicationInstanceIdentifier": "test-rep-1",
 *     "ReplicationInstanceStatus": "creating",
 *     "ReplicationSubnetGroup": {
 *       "ReplicationSubnetGroupDescription": "default",
 *       "ReplicationSubnetGroupIdentifier": "default",
 *       "SubnetGroupStatus": "Complete",
 *       "Subnets": [
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1d"
 *           },
 *           "SubnetIdentifier": "subnet-f6dd91af",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1b"
 *           },
 *           "SubnetIdentifier": "subnet-3605751d",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1c"
 *           },
 *           "SubnetIdentifier": "subnet-c2daefb5",
 *           "SubnetStatus": "Active"
 *         },
 *         {
 *           "SubnetAvailabilityZone": {
 *             "Name": "us-east-1e"
 *           },
 *           "SubnetIdentifier": "subnet-85e90cb8",
 *           "SubnetStatus": "Active"
 *         }
 *       ],
 *       "VpcId": "vpc-6741a603"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 */
export class CreateReplicationInstanceCommand extends $Command<
  CreateReplicationInstanceCommandInput,
  CreateReplicationInstanceCommandOutput,
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

  constructor(readonly input: CreateReplicationInstanceCommandInput) {
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
  ): Handler<CreateReplicationInstanceCommandInput, CreateReplicationInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateReplicationInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationInstanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationInstanceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReplicationInstanceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateReplicationInstanceCommandOutput> {
    return deserializeAws_json1_1CreateReplicationInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
