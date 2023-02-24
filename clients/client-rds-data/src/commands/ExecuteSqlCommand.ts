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
  ExecuteSqlRequest,
  ExecuteSqlRequestFilterSensitiveLog,
  ExecuteSqlResponse,
  ExecuteSqlResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ExecuteSqlCommand,
  serializeAws_restJson1ExecuteSqlCommand,
} from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

export interface ExecuteSqlCommandInput extends ExecuteSqlRequest {}
export interface ExecuteSqlCommandOutput extends ExecuteSqlResponse, __MetadataBearer {}

/**
 * @deprecated
 *
 * <p>Runs one or more SQL statements.</p>
 *         <note>
 *             <p>This operation is deprecated. Use the <code>BatchExecuteStatement</code> or
 *                     <code>ExecuteStatement</code> operation.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, ExecuteSqlCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, ExecuteSqlCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new ExecuteSqlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExecuteSqlCommandInput} for command's `input` shape.
 * @see {@link ExecuteSqlCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 */
export class ExecuteSqlCommand extends $Command<
  ExecuteSqlCommandInput,
  ExecuteSqlCommandOutput,
  RDSDataClientResolvedConfig
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

  constructor(readonly input: ExecuteSqlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExecuteSqlCommandInput, ExecuteSqlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ExecuteSqlCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "ExecuteSqlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ExecuteSqlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ExecuteSqlResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ExecuteSqlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ExecuteSqlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ExecuteSqlCommandOutput> {
    return deserializeAws_restJson1ExecuteSqlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
