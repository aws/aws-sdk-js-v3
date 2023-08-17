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
} from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { DescribeReplicationConfigsMessage, DescribeReplicationConfigsResponse } from "../models/models_0";
import { de_DescribeReplicationConfigsCommand, se_DescribeReplicationConfigsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationConfigsCommand}.
 */
export interface DescribeReplicationConfigsCommandInput extends DescribeReplicationConfigsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationConfigsCommand}.
 */
export interface DescribeReplicationConfigsCommandOutput extends DescribeReplicationConfigsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns one or more existing DMS Serverless replication configurations as a list of structures.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationConfigsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationConfigsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationConfigsMessage
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
 * const command = new DescribeReplicationConfigsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationConfigsResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationConfigs: [ // ReplicationConfigList
 * //     { // ReplicationConfig
 * //       ReplicationConfigIdentifier: "STRING_VALUE",
 * //       ReplicationConfigArn: "STRING_VALUE",
 * //       SourceEndpointArn: "STRING_VALUE",
 * //       TargetEndpointArn: "STRING_VALUE",
 * //       ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //       ComputeConfig: { // ComputeConfig
 * //         AvailabilityZone: "STRING_VALUE",
 * //         DnsNameServers: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //         MaxCapacityUnits: Number("int"),
 * //         MinCapacityUnits: Number("int"),
 * //         MultiAZ: true || false,
 * //         PreferredMaintenanceWindow: "STRING_VALUE",
 * //         ReplicationSubnetGroupId: "STRING_VALUE",
 * //         VpcSecurityGroupIds: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReplicationSettings: "STRING_VALUE",
 * //       SupplementalSettings: "STRING_VALUE",
 * //       TableMappings: "STRING_VALUE",
 * //       ReplicationConfigCreateTime: new Date("TIMESTAMP"),
 * //       ReplicationConfigUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationConfigsCommandInput - {@link DescribeReplicationConfigsCommandInput}
 * @returns {@link DescribeReplicationConfigsCommandOutput}
 * @see {@link DescribeReplicationConfigsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 */
export class DescribeReplicationConfigsCommand extends $Command<
  DescribeReplicationConfigsCommandInput,
  DescribeReplicationConfigsCommandOutput,
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
  constructor(readonly input: DescribeReplicationConfigsCommandInput) {
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
  ): Handler<DescribeReplicationConfigsCommandInput, DescribeReplicationConfigsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationConfigsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationConfigsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeReplicationConfigsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeReplicationConfigsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationConfigsCommandOutput> {
    return de_DescribeReplicationConfigsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
