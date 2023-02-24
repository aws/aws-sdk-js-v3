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

import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import {
  StartBgpFailoverTestRequest,
  StartBgpFailoverTestRequestFilterSensitiveLog,
  StartBgpFailoverTestResponse,
  StartBgpFailoverTestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartBgpFailoverTestCommand,
  serializeAws_json1_1StartBgpFailoverTestCommand,
} from "../protocols/Aws_json1_1";

export interface StartBgpFailoverTestCommandInput extends StartBgpFailoverTestRequest {}
export interface StartBgpFailoverTestCommandOutput extends StartBgpFailoverTestResponse, __MetadataBearer {}

/**
 * <p>Starts the virtual interface failover test that verifies your configuration meets your resiliency requirements by placing the BGP peering session in the DOWN state. You can then send traffic to verify that there are no outages.</p>
 *          <p>You can run the test on public, private, transit, and hosted virtual interfaces.</p>
 *          <p>You can use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_ListVirtualInterfaceTestHistory.html">ListVirtualInterfaceTestHistory</a> to view the virtual interface test history.</p>
 *          <p>If you need to stop the test before the test interval completes, use <a href="https://docs.aws.amazon.com/directconnect/latest/APIReference/API_StopBgpFailoverTest.html">StopBgpFailoverTest</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StartBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StartBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new StartBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StartBgpFailoverTestCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class StartBgpFailoverTestCommand extends $Command<
  StartBgpFailoverTestCommandInput,
  StartBgpFailoverTestCommandOutput,
  DirectConnectClientResolvedConfig
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

  constructor(readonly input: StartBgpFailoverTestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartBgpFailoverTestCommandInput, StartBgpFailoverTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartBgpFailoverTestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "StartBgpFailoverTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartBgpFailoverTestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartBgpFailoverTestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartBgpFailoverTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartBgpFailoverTestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartBgpFailoverTestCommandOutput> {
    return deserializeAws_json1_1StartBgpFailoverTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
