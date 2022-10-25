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
  BeginTransactionRequest,
  BeginTransactionRequestFilterSensitiveLog,
  BeginTransactionResponse,
  BeginTransactionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1BeginTransactionCommand,
  serializeAws_restJson1BeginTransactionCommand,
} from "../protocols/Aws_restJson1";
import { RDSDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSDataClient";

export interface BeginTransactionCommandInput extends BeginTransactionRequest {}
export interface BeginTransactionCommandOutput extends BeginTransactionResponse, __MetadataBearer {}

/**
 * <p>Starts a SQL transaction.</p>
 *         <note>
 *             <p>A transaction can run for a maximum of 24 hours. A transaction is terminated and rolled back automatically after 24
 *                 hours.</p>
 *             <p>A transaction times out if no calls use its transaction ID in three minutes. If a transaction times out before it's
 *                 committed, it's rolled back automatically.</p>
 *             <p>DDL statements inside a transaction cause an implicit commit. We recommend that you run each DDL statement in a separate
 *                     <code>ExecuteStatement</code> call with <code>continueAfterTimeout</code> enabled.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSDataClient, BeginTransactionCommand } from "@aws-sdk/client-rds-data"; // ES Modules import
 * // const { RDSDataClient, BeginTransactionCommand } = require("@aws-sdk/client-rds-data"); // CommonJS import
 * const client = new RDSDataClient(config);
 * const command = new BeginTransactionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BeginTransactionCommandInput} for command's `input` shape.
 * @see {@link BeginTransactionCommandOutput} for command's `response` shape.
 * @see {@link RDSDataClientResolvedConfig | config} for RDSDataClient's `config` shape.
 *
 */
export class BeginTransactionCommand extends $Command<
  BeginTransactionCommandInput,
  BeginTransactionCommandOutput,
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

  constructor(readonly input: BeginTransactionCommandInput) {
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
  ): Handler<BeginTransactionCommandInput, BeginTransactionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BeginTransactionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSDataClient";
    const commandName = "BeginTransactionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BeginTransactionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: BeginTransactionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BeginTransactionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1BeginTransactionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BeginTransactionCommandOutput> {
    return deserializeAws_restJson1BeginTransactionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
