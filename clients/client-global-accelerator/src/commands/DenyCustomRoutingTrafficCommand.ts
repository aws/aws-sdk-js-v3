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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DenyCustomRoutingTrafficRequest, DenyCustomRoutingTrafficRequestFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_json1_1DenyCustomRoutingTrafficCommand,
  serializeAws_json1_1DenyCustomRoutingTrafficCommand,
} from "../protocols/Aws_json1_1";

export interface DenyCustomRoutingTrafficCommandInput extends DenyCustomRoutingTrafficRequest {}
export interface DenyCustomRoutingTrafficCommandOutput extends __MetadataBearer {}

/**
 * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
 * 			for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
 * 			specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
 * 			or ports outside of the range that you configured for the endpoint group.</p>
 * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
 * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DenyCustomRoutingTrafficCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DenyCustomRoutingTrafficCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DenyCustomRoutingTrafficCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DenyCustomRoutingTrafficCommandInput} for command's `input` shape.
 * @see {@link DenyCustomRoutingTrafficCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class DenyCustomRoutingTrafficCommand extends $Command<
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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

  constructor(readonly input: DenyCustomRoutingTrafficCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DenyCustomRoutingTrafficCommandInput, DenyCustomRoutingTrafficCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DenyCustomRoutingTrafficCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DenyCustomRoutingTrafficCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DenyCustomRoutingTrafficRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DenyCustomRoutingTrafficCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DenyCustomRoutingTrafficCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DenyCustomRoutingTrafficCommandOutput> {
    return deserializeAws_json1_1DenyCustomRoutingTrafficCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
