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
  UpdateGatewaySoftwareNowInput,
  UpdateGatewaySoftwareNowInputFilterSensitiveLog,
  UpdateGatewaySoftwareNowOutput,
  UpdateGatewaySoftwareNowOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_0UpdateGatewaySoftwareNowCommand,
  serializeAws_json1_0UpdateGatewaySoftwareNowCommand,
} from "../protocols/Aws_json1_0";

export interface UpdateGatewaySoftwareNowCommandInput extends UpdateGatewaySoftwareNowInput {}
export interface UpdateGatewaySoftwareNowCommandOutput extends UpdateGatewaySoftwareNowOutput, __MetadataBearer {}

/**
 * <p>Updates the gateway virtual machine (VM) software.
 *       The request immediately triggers the software update.</p>
 *          <note>
 *             <p>When you make this request, you get a <code>200 OK</code>
 *         success response immediately. However, it might take some
 *         time for the update to complete.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupGatewayClient, UpdateGatewaySoftwareNowCommand } from "@aws-sdk/client-backup-gateway"; // ES Modules import
 * // const { BackupGatewayClient, UpdateGatewaySoftwareNowCommand } = require("@aws-sdk/client-backup-gateway"); // CommonJS import
 * const client = new BackupGatewayClient(config);
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
 * @see {@link BackupGatewayClientResolvedConfig | config} for BackupGatewayClient's `config` shape.
 *
 */
export class UpdateGatewaySoftwareNowCommand extends $Command<
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
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

  constructor(readonly input: UpdateGatewaySoftwareNowCommandInput) {
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
  ): Handler<UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGatewaySoftwareNowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupGatewayClient";
    const commandName = "UpdateGatewaySoftwareNowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGatewaySoftwareNowInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewaySoftwareNowOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGatewaySoftwareNowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0UpdateGatewaySoftwareNowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewaySoftwareNowCommandOutput> {
    return deserializeAws_json1_0UpdateGatewaySoftwareNowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
