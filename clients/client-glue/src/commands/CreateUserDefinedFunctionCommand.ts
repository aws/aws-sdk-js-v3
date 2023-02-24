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
  CreateUserDefinedFunctionRequest,
  CreateUserDefinedFunctionRequestFilterSensitiveLog,
  CreateUserDefinedFunctionResponse,
  CreateUserDefinedFunctionResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1CreateUserDefinedFunctionCommand,
  serializeAws_json1_1CreateUserDefinedFunctionCommand,
} from "../protocols/Aws_json1_1";

export interface CreateUserDefinedFunctionCommandInput extends CreateUserDefinedFunctionRequest {}
export interface CreateUserDefinedFunctionCommandOutput extends CreateUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * <p>Creates a new function definition in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new CreateUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link CreateUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class CreateUserDefinedFunctionCommand extends $Command<
  CreateUserDefinedFunctionCommandInput,
  CreateUserDefinedFunctionCommandOutput,
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

  constructor(readonly input: CreateUserDefinedFunctionCommandInput) {
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
  ): Handler<CreateUserDefinedFunctionCommandInput, CreateUserDefinedFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateUserDefinedFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateUserDefinedFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserDefinedFunctionRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateUserDefinedFunctionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserDefinedFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUserDefinedFunctionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUserDefinedFunctionCommandOutput> {
    return deserializeAws_json1_1CreateUserDefinedFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
