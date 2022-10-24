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
  DescribeReplicationInstanceTaskLogsMessage,
  DescribeReplicationInstanceTaskLogsMessageFilterSensitiveLog,
  DescribeReplicationInstanceTaskLogsResponse,
  DescribeReplicationInstanceTaskLogsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand,
  serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeReplicationInstanceTaskLogsCommandInput extends DescribeReplicationInstanceTaskLogsMessage {}
export interface DescribeReplicationInstanceTaskLogsCommandOutput
  extends DescribeReplicationInstanceTaskLogsResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the task logs for the specified task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstanceTaskLogsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeReplicationInstanceTaskLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReplicationInstanceTaskLogsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstanceTaskLogsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeReplicationInstanceTaskLogsCommand extends $Command<
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
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

  constructor(readonly input: DescribeReplicationInstanceTaskLogsCommandInput) {
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
  ): Handler<DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeReplicationInstanceTaskLogsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationInstanceTaskLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationInstanceTaskLogsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationInstanceTaskLogsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationInstanceTaskLogsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
