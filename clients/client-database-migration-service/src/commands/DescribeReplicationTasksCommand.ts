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
import { DescribeReplicationTasksMessage, DescribeReplicationTasksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplicationTasksCommand,
  serializeAws_json1_1DescribeReplicationTasksCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link DescribeReplicationTasksCommand}.
 */
export interface DescribeReplicationTasksCommandInput extends DescribeReplicationTasksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTasksCommand}.
 */
export interface DescribeReplicationTasksCommandOutput extends DescribeReplicationTasksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about replication tasks for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTasksMessage
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
 *   WithoutSettings: true || false,
 * };
 * const command = new DescribeReplicationTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeReplicationTasksCommandInput - {@link DescribeReplicationTasksCommandInput}
 * @returns {@link DescribeReplicationTasksCommandOutput}
 * @see {@link DescribeReplicationTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTasksCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 *
 * @example Describe replication tasks
 * ```javascript
 * // Returns information about replication tasks for your account in the current region.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "string",
 *       "Values": [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeReplicationTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationTasks": []
 * }
 * *\/
 * // example id: describe-replication-tasks-1481755777563
 * ```
 *
 */
export class DescribeReplicationTasksCommand extends $Command<
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
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
  constructor(readonly input: DescribeReplicationTasksCommandInput) {
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
  ): Handler<DescribeReplicationTasksCommandInput, DescribeReplicationTasksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationTasksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationTasksCommand";
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
  private serialize(input: DescribeReplicationTasksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationTasksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeReplicationTasksCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationTasksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
