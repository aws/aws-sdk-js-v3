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

import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import {
  GetAutomatedDiscoveryConfigurationRequest,
  GetAutomatedDiscoveryConfigurationRequestFilterSensitiveLog,
  GetAutomatedDiscoveryConfigurationResponse,
  GetAutomatedDiscoveryConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand,
  serializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand,
} from "../protocols/Aws_restJson1";

export interface GetAutomatedDiscoveryConfigurationCommandInput extends GetAutomatedDiscoveryConfigurationRequest {}
export interface GetAutomatedDiscoveryConfigurationCommandOutput
  extends GetAutomatedDiscoveryConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the configuration settings and status of automated sensitive data discovery for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetAutomatedDiscoveryConfigurationCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetAutomatedDiscoveryConfigurationCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetAutomatedDiscoveryConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAutomatedDiscoveryConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetAutomatedDiscoveryConfigurationCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 */
export class GetAutomatedDiscoveryConfigurationCommand extends $Command<
  GetAutomatedDiscoveryConfigurationCommandInput,
  GetAutomatedDiscoveryConfigurationCommandOutput,
  Macie2ClientResolvedConfig
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

  constructor(readonly input: GetAutomatedDiscoveryConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Macie2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAutomatedDiscoveryConfigurationCommandInput, GetAutomatedDiscoveryConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAutomatedDiscoveryConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Macie2Client";
    const commandName = "GetAutomatedDiscoveryConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAutomatedDiscoveryConfigurationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetAutomatedDiscoveryConfigurationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetAutomatedDiscoveryConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetAutomatedDiscoveryConfigurationCommandOutput> {
    return deserializeAws_restJson1GetAutomatedDiscoveryConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
