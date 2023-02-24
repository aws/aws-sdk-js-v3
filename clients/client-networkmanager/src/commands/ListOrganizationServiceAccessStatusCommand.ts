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
  ListOrganizationServiceAccessStatusRequest,
  ListOrganizationServiceAccessStatusRequestFilterSensitiveLog,
  ListOrganizationServiceAccessStatusResponse,
  ListOrganizationServiceAccessStatusResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1ListOrganizationServiceAccessStatusCommand,
  serializeAws_restJson1ListOrganizationServiceAccessStatusCommand,
} from "../protocols/Aws_restJson1";

export interface ListOrganizationServiceAccessStatusCommandInput extends ListOrganizationServiceAccessStatusRequest {}
export interface ListOrganizationServiceAccessStatusCommandOutput
  extends ListOrganizationServiceAccessStatusResponse,
    __MetadataBearer {}

/**
 * <p>Gets the status of the Service Linked Role (SLR) deployment for the accounts in a given Amazon Web Services Organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, ListOrganizationServiceAccessStatusCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, ListOrganizationServiceAccessStatusCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new ListOrganizationServiceAccessStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOrganizationServiceAccessStatusCommandInput} for command's `input` shape.
 * @see {@link ListOrganizationServiceAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class ListOrganizationServiceAccessStatusCommand extends $Command<
  ListOrganizationServiceAccessStatusCommandInput,
  ListOrganizationServiceAccessStatusCommandOutput,
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

  constructor(readonly input: ListOrganizationServiceAccessStatusCommandInput) {
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
  ): Handler<ListOrganizationServiceAccessStatusCommandInput, ListOrganizationServiceAccessStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOrganizationServiceAccessStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "ListOrganizationServiceAccessStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOrganizationServiceAccessStatusRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOrganizationServiceAccessStatusResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListOrganizationServiceAccessStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListOrganizationServiceAccessStatusCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListOrganizationServiceAccessStatusCommandOutput> {
    return deserializeAws_restJson1ListOrganizationServiceAccessStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
