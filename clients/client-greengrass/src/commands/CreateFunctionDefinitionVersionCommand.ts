import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateFunctionDefinitionVersionRequest, CreateFunctionDefinitionVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateFunctionDefinitionVersionCommand,
  serializeAws_restJson1CreateFunctionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface CreateFunctionDefinitionVersionCommandInput extends CreateFunctionDefinitionVersionRequest {}
export interface CreateFunctionDefinitionVersionCommandOutput
  extends CreateFunctionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a Lambda function definition that has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateFunctionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateFunctionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new CreateFunctionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFunctionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateFunctionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateFunctionDefinitionVersionCommand extends $Command<
  CreateFunctionDefinitionVersionCommandInput,
  CreateFunctionDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateFunctionDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateFunctionDefinitionVersionCommandInput, CreateFunctionDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateFunctionDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateFunctionDefinitionVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateFunctionDefinitionVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateFunctionDefinitionVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateFunctionDefinitionVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateFunctionDefinitionVersionCommandOutput> {
    return deserializeAws_restJson1CreateFunctionDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
