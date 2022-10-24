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
  DisableGatewayInput,
  DisableGatewayInputFilterSensitiveLog,
  DisableGatewayOutput,
  DisableGatewayOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DisableGatewayCommand,
  serializeAws_json1_1DisableGatewayCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface DisableGatewayCommandInput extends DisableGatewayInput {}
export interface DisableGatewayCommandOutput extends DisableGatewayOutput, __MetadataBearer {}

/**
 * <p>Disables a tape gateway when the gateway is no longer functioning. For example, if your
 *          gateway VM is damaged, you can disable the gateway so you can recover virtual tapes.</p>
 *
 *          <p>Use this operation for a tape gateway that is not reachable or not functioning. This
 *          operation is only supported in the tape gateway type.</p>
 *
 *          <important>
 *             <p>After a gateway is disabled, it cannot be enabled.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DisableGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DisableGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DisableGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableGatewayCommandInput} for command's `input` shape.
 * @see {@link DisableGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class DisableGatewayCommand extends $Command<
  DisableGatewayCommandInput,
  DisableGatewayCommandOutput,
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

  constructor(readonly input: DisableGatewayCommandInput) {
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
  ): Handler<DisableGatewayCommandInput, DisableGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DisableGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DisableGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisableGatewayInputFilterSensitiveLog,
      outputFilterSensitiveLog: DisableGatewayOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisableGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DisableGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisableGatewayCommandOutput> {
    return deserializeAws_json1_1DisableGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
