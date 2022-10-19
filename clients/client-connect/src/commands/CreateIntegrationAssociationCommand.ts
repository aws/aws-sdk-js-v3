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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import {
  CreateIntegrationAssociationRequest,
  CreateIntegrationAssociationRequestFilterSensitiveLog,
  CreateIntegrationAssociationResponse,
  CreateIntegrationAssociationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateIntegrationAssociationCommand,
  serializeAws_restJson1CreateIntegrationAssociationCommand,
} from "../protocols/Aws_restJson1";

export interface CreateIntegrationAssociationCommandInput extends CreateIntegrationAssociationRequest {}
export interface CreateIntegrationAssociationCommandOutput
  extends CreateIntegrationAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Creates an Amazon Web Services resource association with an Amazon Connect
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateIntegrationAssociationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateIntegrationAssociationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new CreateIntegrationAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateIntegrationAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateIntegrationAssociationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 */
export class CreateIntegrationAssociationCommand extends $Command<
  CreateIntegrationAssociationCommandInput,
  CreateIntegrationAssociationCommandOutput,
  ConnectClientResolvedConfig
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

  constructor(readonly input: CreateIntegrationAssociationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateIntegrationAssociationCommandInput, CreateIntegrationAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateIntegrationAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "CreateIntegrationAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateIntegrationAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateIntegrationAssociationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateIntegrationAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateIntegrationAssociationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateIntegrationAssociationCommandOutput> {
    return deserializeAws_restJson1CreateIntegrationAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
