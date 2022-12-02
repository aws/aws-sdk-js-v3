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

import { CodeCatalystClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCatalystClient";
import {
  DeleteAccessTokenRequest,
  DeleteAccessTokenRequestFilterSensitiveLog,
  DeleteAccessTokenResponse,
  DeleteAccessTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAccessTokenCommand,
  serializeAws_restJson1DeleteAccessTokenCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteAccessTokenCommandInput extends DeleteAccessTokenRequest {}
export interface DeleteAccessTokenCommandOutput extends DeleteAccessTokenResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified personal access token (PAT). A personal access token can only be deleted by the user who created it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, DeleteAccessTokenCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, DeleteAccessTokenCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new DeleteAccessTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAccessTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteAccessTokenCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class DeleteAccessTokenCommand extends $Command<
  DeleteAccessTokenCommandInput,
  DeleteAccessTokenCommandOutput,
  CodeCatalystClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  constructor(readonly input: DeleteAccessTokenCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCatalystClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAccessTokenCommandInput, DeleteAccessTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAccessTokenCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "DeleteAccessTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAccessTokenRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteAccessTokenResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAccessTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAccessTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAccessTokenCommandOutput> {
    return deserializeAws_restJson1DeleteAccessTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
