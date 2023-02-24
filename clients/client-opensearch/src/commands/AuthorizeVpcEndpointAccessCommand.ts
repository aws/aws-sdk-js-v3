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
  AuthorizeVpcEndpointAccessRequest,
  AuthorizeVpcEndpointAccessRequestFilterSensitiveLog,
  AuthorizeVpcEndpointAccessResponse,
  AuthorizeVpcEndpointAccessResponseFilterSensitiveLog,
} from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import {
  deserializeAws_restJson1AuthorizeVpcEndpointAccessCommand,
  serializeAws_restJson1AuthorizeVpcEndpointAccessCommand,
} from "../protocols/Aws_restJson1";

export interface AuthorizeVpcEndpointAccessCommandInput extends AuthorizeVpcEndpointAccessRequest {}
export interface AuthorizeVpcEndpointAccessCommandOutput extends AuthorizeVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * <p>Provides access to an Amazon OpenSearch Service domain through the use of an interface VPC
 *    endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AuthorizeVpcEndpointAccessCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AuthorizeVpcEndpointAccessCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new AuthorizeVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AuthorizeVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link AuthorizeVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 */
export class AuthorizeVpcEndpointAccessCommand extends $Command<
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
  OpenSearchClientResolvedConfig
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

  constructor(readonly input: AuthorizeVpcEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AuthorizeVpcEndpointAccessCommandInput, AuthorizeVpcEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AuthorizeVpcEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "AuthorizeVpcEndpointAccessCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AuthorizeVpcEndpointAccessRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AuthorizeVpcEndpointAccessResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AuthorizeVpcEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AuthorizeVpcEndpointAccessCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AuthorizeVpcEndpointAccessCommandOutput> {
    return deserializeAws_restJson1AuthorizeVpcEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
