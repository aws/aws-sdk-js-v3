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

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import {
  DeleteEventIntegrationRequest,
  DeleteEventIntegrationRequestFilterSensitiveLog,
  DeleteEventIntegrationResponse,
  DeleteEventIntegrationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteEventIntegrationCommand,
  serializeAws_restJson1DeleteEventIntegrationCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteEventIntegrationCommandInput extends DeleteEventIntegrationRequest {}
export interface DeleteEventIntegrationCommandOutput extends DeleteEventIntegrationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified existing event integration. If the event integration is associated
 *       with clients, the request is rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, DeleteEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, DeleteEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new DeleteEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link DeleteEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 */
export class DeleteEventIntegrationCommand extends $Command<
  DeleteEventIntegrationCommandInput,
  DeleteEventIntegrationCommandOutput,
  AppIntegrationsClientResolvedConfig
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

  constructor(readonly input: DeleteEventIntegrationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppIntegrationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteEventIntegrationCommandInput, DeleteEventIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteEventIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "DeleteEventIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteEventIntegrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteEventIntegrationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteEventIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteEventIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteEventIntegrationCommandOutput> {
    return deserializeAws_restJson1DeleteEventIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
