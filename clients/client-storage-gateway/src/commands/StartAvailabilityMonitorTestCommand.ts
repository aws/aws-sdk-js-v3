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
  StartAvailabilityMonitorTestInput,
  StartAvailabilityMonitorTestInputFilterSensitiveLog,
  StartAvailabilityMonitorTestOutput,
  StartAvailabilityMonitorTestOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartAvailabilityMonitorTestCommand,
  serializeAws_json1_1StartAvailabilityMonitorTestCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface StartAvailabilityMonitorTestCommandInput extends StartAvailabilityMonitorTestInput {}
export interface StartAvailabilityMonitorTestCommandOutput
  extends StartAvailabilityMonitorTestOutput,
    __MetadataBearer {}

/**
 * <p>Start a test that verifies that the specified gateway is configured for High
 *          Availability monitoring in your host environment. This request only initiates the test and
 *          that a successful response only indicates that the test was started. It doesn't
 *          indicate that the test passed. For the status of the test, invoke the
 *             <code>DescribeAvailabilityMonitorTest</code> API.</p>
 *          <note>
 *             <p>Starting this test will cause your gateway to go offline for a brief period.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, StartAvailabilityMonitorTestCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, StartAvailabilityMonitorTestCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new StartAvailabilityMonitorTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAvailabilityMonitorTestCommandInput} for command's `input` shape.
 * @see {@link StartAvailabilityMonitorTestCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class StartAvailabilityMonitorTestCommand extends $Command<
  StartAvailabilityMonitorTestCommandInput,
  StartAvailabilityMonitorTestCommandOutput,
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

  constructor(readonly input: StartAvailabilityMonitorTestCommandInput) {
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
  ): Handler<StartAvailabilityMonitorTestCommandInput, StartAvailabilityMonitorTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartAvailabilityMonitorTestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "StartAvailabilityMonitorTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartAvailabilityMonitorTestInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartAvailabilityMonitorTestOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartAvailabilityMonitorTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartAvailabilityMonitorTestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartAvailabilityMonitorTestCommandOutput> {
    return deserializeAws_json1_1StartAvailabilityMonitorTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
