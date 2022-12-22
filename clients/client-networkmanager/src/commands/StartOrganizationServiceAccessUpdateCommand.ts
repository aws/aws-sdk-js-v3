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
  StartOrganizationServiceAccessUpdateRequest,
  StartOrganizationServiceAccessUpdateRequestFilterSensitiveLog,
  StartOrganizationServiceAccessUpdateResponse,
  StartOrganizationServiceAccessUpdateResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand,
  serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand,
} from "../protocols/Aws_restJson1";

export interface StartOrganizationServiceAccessUpdateCommandInput extends StartOrganizationServiceAccessUpdateRequest {}
export interface StartOrganizationServiceAccessUpdateCommandOutput
  extends StartOrganizationServiceAccessUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Enables the Network Manager service for an Amazon Web Services Organization. This can only be called by a management account within the organization. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, StartOrganizationServiceAccessUpdateCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new StartOrganizationServiceAccessUpdateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOrganizationServiceAccessUpdateCommandInput} for command's `input` shape.
 * @see {@link StartOrganizationServiceAccessUpdateCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class StartOrganizationServiceAccessUpdateCommand extends $Command<
  StartOrganizationServiceAccessUpdateCommandInput,
  StartOrganizationServiceAccessUpdateCommandOutput,
  NetworkManagerClientResolvedConfig
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

  constructor(readonly input: StartOrganizationServiceAccessUpdateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NetworkManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartOrganizationServiceAccessUpdateCommandInput, StartOrganizationServiceAccessUpdateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartOrganizationServiceAccessUpdateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "StartOrganizationServiceAccessUpdateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartOrganizationServiceAccessUpdateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartOrganizationServiceAccessUpdateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartOrganizationServiceAccessUpdateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartOrganizationServiceAccessUpdateCommandOutput> {
    return deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
