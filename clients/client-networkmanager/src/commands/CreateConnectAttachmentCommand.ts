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
  CreateConnectAttachmentRequest,
  CreateConnectAttachmentRequestFilterSensitiveLog,
  CreateConnectAttachmentResponse,
  CreateConnectAttachmentResponseFilterSensitiveLog,
} from "../models/models_0";
import { NetworkManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkManagerClient";
import {
  deserializeAws_restJson1CreateConnectAttachmentCommand,
  serializeAws_restJson1CreateConnectAttachmentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateConnectAttachmentCommandInput extends CreateConnectAttachmentRequest {}
export interface CreateConnectAttachmentCommandOutput extends CreateConnectAttachmentResponse, __MetadataBearer {}

/**
 * <p>Creates a core network Connect attachment from a specified core network attachment. </p>
 *          <p>A core network Connect attachment is a GRE-based tunnel attachment that you can use to
 *          establish a connection between a core network and an appliance. A core network Connect
 *          attachment uses an existing VPC attachment as the underlying transport mechanism.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, CreateConnectAttachmentCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, CreateConnectAttachmentCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new CreateConnectAttachmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectAttachmentCommandInput} for command's `input` shape.
 * @see {@link CreateConnectAttachmentCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for NetworkManagerClient's `config` shape.
 *
 */
export class CreateConnectAttachmentCommand extends $Command<
  CreateConnectAttachmentCommandInput,
  CreateConnectAttachmentCommandOutput,
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

  constructor(readonly input: CreateConnectAttachmentCommandInput) {
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
  ): Handler<CreateConnectAttachmentCommandInput, CreateConnectAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateConnectAttachmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NetworkManagerClient";
    const commandName = "CreateConnectAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateConnectAttachmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectAttachmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateConnectAttachmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateConnectAttachmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateConnectAttachmentCommandOutput> {
    return deserializeAws_restJson1CreateConnectAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
