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
  DescribeAvailabilityMonitorTestInput,
  DescribeAvailabilityMonitorTestInputFilterSensitiveLog,
  DescribeAvailabilityMonitorTestOutput,
  DescribeAvailabilityMonitorTestOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand,
  serializeAws_json1_1DescribeAvailabilityMonitorTestCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface DescribeAvailabilityMonitorTestCommandInput extends DescribeAvailabilityMonitorTestInput {}
export interface DescribeAvailabilityMonitorTestCommandOutput
  extends DescribeAvailabilityMonitorTestOutput,
    __MetadataBearer {}

/**
 * <p>Returns information about the most recent high availability monitoring test that was
 *          performed on the host in a cluster. If a test isn't performed, the status and start
 *          time in the response would be null.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new DescribeAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link DescribeAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class DescribeAvailabilityMonitorTestCommand extends $Command<
  DescribeAvailabilityMonitorTestCommandInput,
  DescribeAvailabilityMonitorTestCommandOutput,
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

  constructor(readonly input: DescribeAvailabilityMonitorTestCommandInput) {
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
  ): Handler<DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAvailabilityMonitorTestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "DescribeAvailabilityMonitorTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAvailabilityMonitorTestInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAvailabilityMonitorTestOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeAvailabilityMonitorTestCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAvailabilityMonitorTestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAvailabilityMonitorTestCommandOutput> {
    return deserializeAws_json1_1DescribeAvailabilityMonitorTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
