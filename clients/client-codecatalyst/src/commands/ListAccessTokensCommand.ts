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
  ListAccessTokensRequest,
  ListAccessTokensRequestFilterSensitiveLog,
  ListAccessTokensResponse,
  ListAccessTokensResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListAccessTokensCommand,
  serializeAws_restJson1ListAccessTokensCommand,
} from "../protocols/Aws_restJson1";

export interface ListAccessTokensCommandInput extends ListAccessTokensRequest {}
export interface ListAccessTokensCommandOutput extends ListAccessTokensResponse, __MetadataBearer {}

/**
 * <p>Lists all personal access tokens (PATs) associated with the user who calls the API. You can only list PATs associated with your user account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCatalystClient, ListAccessTokensCommand } from "@aws-sdk/client-codecatalyst"; // ES Modules import
 * // const { CodeCatalystClient, ListAccessTokensCommand } = require("@aws-sdk/client-codecatalyst"); // CommonJS import
 * const client = new CodeCatalystClient(config);
 * const command = new ListAccessTokensCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAccessTokensCommandInput} for command's `input` shape.
 * @see {@link ListAccessTokensCommandOutput} for command's `response` shape.
 * @see {@link CodeCatalystClientResolvedConfig | config} for CodeCatalystClient's `config` shape.
 *
 */
export class ListAccessTokensCommand extends $Command<
  ListAccessTokensCommandInput,
  ListAccessTokensCommandOutput,
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

  constructor(readonly input: ListAccessTokensCommandInput) {
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
  ): Handler<ListAccessTokensCommandInput, ListAccessTokensCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListAccessTokensCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCatalystClient";
    const commandName = "ListAccessTokensCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccessTokensRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListAccessTokensResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccessTokensCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAccessTokensCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessTokensCommandOutput> {
    return deserializeAws_restJson1ListAccessTokensCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
