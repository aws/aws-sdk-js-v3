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

import { AmplifyUIBuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyUIBuilderClient";
import { DeleteThemeRequest, DeleteThemeRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteThemeCommand,
  serializeAws_restJson1DeleteThemeCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteThemeCommandInput extends DeleteThemeRequest {}
export interface DeleteThemeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a theme from an Amplify app.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyUIBuilderClient, DeleteThemeCommand } from "@aws-sdk/client-amplifyuibuilder"; // ES Modules import
 * // const { AmplifyUIBuilderClient, DeleteThemeCommand } = require("@aws-sdk/client-amplifyuibuilder"); // CommonJS import
 * const client = new AmplifyUIBuilderClient(config);
 * const command = new DeleteThemeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteThemeCommandInput} for command's `input` shape.
 * @see {@link DeleteThemeCommandOutput} for command's `response` shape.
 * @see {@link AmplifyUIBuilderClientResolvedConfig | config} for AmplifyUIBuilderClient's `config` shape.
 *
 */
export class DeleteThemeCommand extends $Command<
  DeleteThemeCommandInput,
  DeleteThemeCommandOutput,
  AmplifyUIBuilderClientResolvedConfig
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

  constructor(readonly input: DeleteThemeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyUIBuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteThemeCommandInput, DeleteThemeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteThemeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyUIBuilderClient";
    const commandName = "DeleteThemeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteThemeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteThemeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteThemeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteThemeCommandOutput> {
    return deserializeAws_restJson1DeleteThemeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
