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
  DescribeOrderableReplicationInstancesMessage,
  DescribeOrderableReplicationInstancesMessageFilterSensitiveLog,
  DescribeOrderableReplicationInstancesResponse,
  DescribeOrderableReplicationInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand,
  serializeAws_json1_1DescribeOrderableReplicationInstancesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeOrderableReplicationInstancesCommandInput
  extends DescribeOrderableReplicationInstancesMessage {}
export interface DescribeOrderableReplicationInstancesCommandOutput
  extends DescribeOrderableReplicationInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the replication instance types that can be created in the
 *          specified region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeOrderableReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeOrderableReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeOrderableReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeOrderableReplicationInstancesCommand extends $Command<
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
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

  constructor(readonly input: DescribeOrderableReplicationInstancesCommandInput) {
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
  ): Handler<DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeOrderableReplicationInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeOrderableReplicationInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeOrderableReplicationInstancesMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeOrderableReplicationInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeOrderableReplicationInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeOrderableReplicationInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeOrderableReplicationInstancesCommandOutput> {
    return deserializeAws_json1_1DescribeOrderableReplicationInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
