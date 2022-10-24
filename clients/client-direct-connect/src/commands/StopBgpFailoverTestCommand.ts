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
  StopBgpFailoverTestRequest,
  StopBgpFailoverTestRequestFilterSensitiveLog,
  StopBgpFailoverTestResponse,
  StopBgpFailoverTestResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StopBgpFailoverTestCommand,
  serializeAws_json1_1StopBgpFailoverTestCommand,
} from "../protocols/Aws_json1_1";

export interface StopBgpFailoverTestCommandInput extends StopBgpFailoverTestRequest {}
export interface StopBgpFailoverTestCommandOutput extends StopBgpFailoverTestResponse, __MetadataBearer {}

/**
 * <p>Stops the virtual interface failover test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectConnectClient, StopBgpFailoverTestCommand } from "@aws-sdk/client-direct-connect"; // ES Modules import
 * // const { DirectConnectClient, StopBgpFailoverTestCommand } = require("@aws-sdk/client-direct-connect"); // CommonJS import
 * const client = new DirectConnectClient(config);
 * const command = new StopBgpFailoverTestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopBgpFailoverTestCommandInput} for command's `input` shape.
 * @see {@link StopBgpFailoverTestCommandOutput} for command's `response` shape.
 * @see {@link DirectConnectClientResolvedConfig | config} for DirectConnectClient's `config` shape.
 *
 */
export class StopBgpFailoverTestCommand extends $Command<
  StopBgpFailoverTestCommandInput,
  StopBgpFailoverTestCommandOutput,
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

  constructor(readonly input: StopBgpFailoverTestCommandInput) {
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
  ): Handler<StopBgpFailoverTestCommandInput, StopBgpFailoverTestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopBgpFailoverTestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectConnectClient";
    const commandName = "StopBgpFailoverTestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopBgpFailoverTestRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StopBgpFailoverTestResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopBgpFailoverTestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopBgpFailoverTestCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopBgpFailoverTestCommandOutput> {
    return deserializeAws_json1_1StopBgpFailoverTestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
