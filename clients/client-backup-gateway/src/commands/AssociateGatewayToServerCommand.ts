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

import { BackupGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupGatewayClient";
import {
  AssociateGatewayToServerInput,
  AssociateGatewayToServerInputFilterSensitiveLog,
  AssociateGatewayToServerOutput,
  AssociateGatewayToServerOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0AssociateGatewayToServerCommand,
  serializeAws_json1_0AssociateGatewayToServerCommand,
} from "../protocols/Aws_json1_0";

export interface AssociateGatewayToServerCommandInput extends AssociateGatewayToServerInput {}
export interface AssociateGatewayToServerCommandOutput extends AssociateGatewayToServerOutput, __MetadataBearer {}

/**
 * <p>Associates a backup gateway with your server. After you complete the association process,
 *       you can back up and restore your VMs through the gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, AssociateGatewayToServerCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, AssociateGatewayToServerCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new AssociateGatewayToServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateGatewayToServerCommandInput} for command's `input` shape.
 * @see {@link AssociateGatewayToServerCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class AssociateGatewayToServerCommand extends $Command<
  AssociateGatewayToServerCommandInput,
  AssociateGatewayToServerCommandOutput,
  BackupGatewayClientResolvedConfig
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

  constructor(readonly input: AssociateGatewayToServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateGatewayToServerCommandInput, AssociateGatewayToServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateGatewayToServerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "AssociateGatewayToServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateGatewayToServerInputFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateGatewayToServerOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateGatewayToServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0AssociateGatewayToServerCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateGatewayToServerCommandOutput> {
    return deserializeAws_json1_0AssociateGatewayToServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
