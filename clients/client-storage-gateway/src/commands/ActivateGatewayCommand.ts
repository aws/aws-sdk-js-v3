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
  ActivateGatewayInput,
  ActivateGatewayInputFilterSensitiveLog,
  ActivateGatewayOutput,
  ActivateGatewayOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ActivateGatewayCommand,
  serializeAws_json1_1ActivateGatewayCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ActivateGatewayCommandInput extends ActivateGatewayInput {}
export interface ActivateGatewayCommandOutput extends ActivateGatewayOutput, __MetadataBearer {}

/**
 * <p>Activates the gateway you previously deployed on your host. In the activation process,
 *          you specify information such as the Amazon Web Services Region that you want to use for
 *          storing snapshots or tapes, the time zone for scheduled snapshots the gateway snapshot
 *          schedule window, an activation key, and a name for your gateway. The activation process
 *          also associates your gateway with your account. For more information, see <a>UpdateGatewayInformation</a>.</p>
 *          <note>
 *             <p>You must turn on the gateway VM before you can activate your gateway.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ActivateGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ActivateGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ActivateGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ActivateGatewayCommandInput} for command's `input` shape.
 * @see {@link ActivateGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ActivateGatewayCommand extends $Command<
  ActivateGatewayCommandInput,
  ActivateGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
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

  constructor(readonly input: ActivateGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateGatewayCommandInput, ActivateGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ActivateGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ActivateGatewayInputFilterSensitiveLog,
      outputFilterSensitiveLog: ActivateGatewayOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ActivateGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ActivateGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateGatewayCommandOutput> {
    return deserializeAws_json1_1ActivateGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
