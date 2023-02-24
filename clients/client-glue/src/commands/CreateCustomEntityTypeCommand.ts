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
  CreateCustomEntityTypeRequest,
  CreateCustomEntityTypeRequestFilterSensitiveLog,
  CreateCustomEntityTypeResponse,
  CreateCustomEntityTypeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomEntityTypeCommand,
  serializeAws_json1_1CreateCustomEntityTypeCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCustomEntityTypeCommandInput extends CreateCustomEntityTypeRequest {}
export interface CreateCustomEntityTypeCommandOutput extends CreateCustomEntityTypeResponse, __MetadataBearer {}

/**
 * <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p>
 *          <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class CreateCustomEntityTypeCommand extends $Command<
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
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

  constructor(readonly input: CreateCustomEntityTypeCommandInput) {
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
  ): Handler<CreateCustomEntityTypeCommandInput, CreateCustomEntityTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomEntityTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateCustomEntityTypeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomEntityTypeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomEntityTypeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCustomEntityTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomEntityTypeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomEntityTypeCommandOutput> {
    return deserializeAws_json1_1CreateCustomEntityTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
