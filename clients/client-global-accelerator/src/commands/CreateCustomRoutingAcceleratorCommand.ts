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
import {
  CreateCustomRoutingAcceleratorRequest,
  CreateCustomRoutingAcceleratorRequestFilterSensitiveLog,
  CreateCustomRoutingAcceleratorResponse,
  CreateCustomRoutingAcceleratorResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand,
  serializeAws_json1_1CreateCustomRoutingAcceleratorCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCustomRoutingAcceleratorCommandInput extends CreateCustomRoutingAcceleratorRequest {}
export interface CreateCustomRoutingAcceleratorCommandOutput
  extends CreateCustomRoutingAcceleratorResponse,
    __MetadataBearer {}

/**
 * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
 * 	    of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p>
 * 	        <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
 * 			traffic. To enable all destinations to receive traffic, or to specify individual port
 * 			mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
 * 				AllowCustomRoutingTraffic</a> operation.</p>
 * 	        <important>
 * 		          <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 			US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 			on AWS CLI commands.</p>
 * 	        </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingAcceleratorCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingAcceleratorCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingAcceleratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingAcceleratorCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingAcceleratorCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class CreateCustomRoutingAcceleratorCommand extends $Command<
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
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

  constructor(readonly input: CreateCustomRoutingAcceleratorCommandInput) {
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
  ): Handler<CreateCustomRoutingAcceleratorCommandInput, CreateCustomRoutingAcceleratorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomRoutingAcceleratorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateCustomRoutingAcceleratorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomRoutingAcceleratorRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomRoutingAcceleratorResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCustomRoutingAcceleratorCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomRoutingAcceleratorCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomRoutingAcceleratorCommandOutput> {
    return deserializeAws_json1_1CreateCustomRoutingAcceleratorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
