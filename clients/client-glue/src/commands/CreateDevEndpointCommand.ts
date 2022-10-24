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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  CreateDevEndpointRequest,
  CreateDevEndpointRequestFilterSensitiveLog,
  CreateDevEndpointResponse,
  CreateDevEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDevEndpointCommand,
  serializeAws_json1_1CreateDevEndpointCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDevEndpointCommandInput extends CreateDevEndpointRequest {}
export interface CreateDevEndpointCommandOutput extends CreateDevEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a new development endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateDevEndpointCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateDevEndpointCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateDevEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDevEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDevEndpointCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class CreateDevEndpointCommand extends $Command<
  CreateDevEndpointCommandInput,
  CreateDevEndpointCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: CreateDevEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDevEndpointCommandInput, CreateDevEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDevEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateDevEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDevEndpointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDevEndpointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDevEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDevEndpointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDevEndpointCommandOutput> {
    return deserializeAws_json1_1CreateDevEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
