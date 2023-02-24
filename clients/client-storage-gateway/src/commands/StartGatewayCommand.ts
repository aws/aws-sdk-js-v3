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
  StartGatewayInput,
  StartGatewayInputFilterSensitiveLog,
  StartGatewayOutput,
  StartGatewayOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartGatewayCommand,
  serializeAws_json1_1StartGatewayCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface StartGatewayCommandInput extends StartGatewayInput {}
export interface StartGatewayCommandOutput extends StartGatewayOutput, __MetadataBearer {}

/**
 * <p>Starts a gateway that you previously shut down (see <a>ShutdownGateway</a>).
 *          After the gateway starts, you can then make other API calls, your applications can read
 *          from or write to the gateway's storage volumes and you will be able to take snapshot
 *          backups.</p>
 *
 *          <note>
 *             <p>When you make a request, you will get a 200 OK success response immediately. However,
 *             it might take some time for the gateway to be ready. You should call <a>DescribeGatewayInformation</a> and check the status before making any
 *             additional API calls. For more information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *
 *          <p>To specify which gateway to start, use the Amazon Resource Name (ARN) of the gateway in
 *          your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new StartGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartGatewayCommandInput} for command's `input` shape.
 * @see {@link StartGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class StartGatewayCommand extends $Command<
  StartGatewayCommandInput,
  StartGatewayCommandOutput,
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

  constructor(readonly input: StartGatewayCommandInput) {
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
  ): Handler<StartGatewayCommandInput, StartGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartGatewayCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "StartGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartGatewayInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartGatewayOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartGatewayCommandOutput> {
    return deserializeAws_json1_1StartGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
