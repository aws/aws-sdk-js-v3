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
  PutCodeBindingRequest,
  PutCodeBindingRequestFilterSensitiveLog,
  PutCodeBindingResponse,
  PutCodeBindingResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1PutCodeBindingCommand,
  serializeAws_restJson1PutCodeBindingCommand,
} from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

export interface PutCodeBindingCommandInput extends PutCodeBindingRequest {}
export interface PutCodeBindingCommandOutput extends PutCodeBindingResponse, __MetadataBearer {}

/**
 * <p>Put code binding URI</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, PutCodeBindingCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, PutCodeBindingCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const command = new PutCodeBindingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCodeBindingCommandInput} for command's `input` shape.
 * @see {@link PutCodeBindingCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 */
export class PutCodeBindingCommand extends $Command<
  PutCodeBindingCommandInput,
  PutCodeBindingCommandOutput,
  SchemasClientResolvedConfig
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

  constructor(readonly input: PutCodeBindingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutCodeBindingCommandInput, PutCodeBindingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutCodeBindingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "PutCodeBindingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutCodeBindingRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutCodeBindingResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutCodeBindingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutCodeBindingCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutCodeBindingCommandOutput> {
    return deserializeAws_restJson1PutCodeBindingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
