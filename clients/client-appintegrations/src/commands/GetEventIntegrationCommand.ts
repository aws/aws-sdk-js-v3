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
  GetEventIntegrationRequest,
  GetEventIntegrationRequestFilterSensitiveLog,
  GetEventIntegrationResponse,
  GetEventIntegrationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetEventIntegrationCommand,
  serializeAws_restJson1GetEventIntegrationCommand,
} from "../protocols/Aws_restJson1";

export interface GetEventIntegrationCommandInput extends GetEventIntegrationRequest {}
export interface GetEventIntegrationCommandOutput extends GetEventIntegrationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the event integration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, GetEventIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, GetEventIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const command = new GetEventIntegrationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEventIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetEventIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 */
export class GetEventIntegrationCommand extends $Command<
  GetEventIntegrationCommandInput,
  GetEventIntegrationCommandOutput,
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

  constructor(readonly input: GetEventIntegrationCommandInput) {
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
  ): Handler<GetEventIntegrationCommandInput, GetEventIntegrationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEventIntegrationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppIntegrationsClient";
    const commandName = "GetEventIntegrationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEventIntegrationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEventIntegrationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetEventIntegrationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEventIntegrationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetEventIntegrationCommandOutput> {
    return deserializeAws_restJson1GetEventIntegrationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
