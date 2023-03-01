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
  DescribeGatewayInformationInput,
  DescribeGatewayInformationInputFilterSensitiveLog,
  DescribeGatewayInformationOutput,
  DescribeGatewayInformationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeGatewayInformationCommand,
  serializeAws_json1_1DescribeGatewayInformationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * The input for {@link DescribeGatewayInformationCommand}.
 */
export interface DescribeGatewayInformationCommandInput extends DescribeGatewayInformationInput {}
/**
 * The output of {@link DescribeGatewayInformationCommand}.
 */
export interface DescribeGatewayInformationCommandOutput extends DescribeGatewayInformationOutput, __MetadataBearer {}

/**
 * <p>Returns metadata about a gateway such as its name, network interfaces, configured time
 *          zone, and the state (whether the gateway is running or not). To specify which gateway to
 *          describe, use the Amazon Resource Name (ARN) of the gateway in your request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeGatewayInformationCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeGatewayInformationCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGatewayInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeGatewayInformationCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 *
 * @example To describe metadata about the gateway
 * ```javascript
 * // Returns metadata about a gateway such as its name, network interfaces, configured time zone, and the state (whether the gateway is running or not).
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new DescribeGatewayInformationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B",
 *   "GatewayId": "sgw-AABB1122",
 *   "GatewayName": "My_Gateway",
 *   "GatewayNetworkInterfaces": [
 *     {
 *       "Ipv4Address": "10.35.69.216"
 *     }
 *   ],
 *   "GatewayState": "STATE_RUNNING",
 *   "GatewayTimezone": "GMT-8:00",
 *   "GatewayType": "STORED",
 *   "LastSoftwareUpdate": "2016-01-02T16:00:00",
 *   "NextUpdateAvailabilityDate": "2017-01-02T16:00:00"
 * }
 * *\/
 * ```
 *
 */
export class DescribeGatewayInformationCommand extends $Command<
  DescribeGatewayInformationCommandInput,
  DescribeGatewayInformationCommandOutput,
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

  constructor(readonly input: DescribeGatewayInformationCommandInput) {
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
  ): Handler<DescribeGatewayInformationCommandInput, DescribeGatewayInformationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeGatewayInformationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeGatewayInformationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeGatewayInformationInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeGatewayInformationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeGatewayInformationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeGatewayInformationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeGatewayInformationCommandOutput> {
    return deserializeAws_json1_1DescribeGatewayInformationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
