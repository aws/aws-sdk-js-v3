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
  ListCustomRoutingPortMappingsRequest,
  ListCustomRoutingPortMappingsRequestFilterSensitiveLog,
  ListCustomRoutingPortMappingsResponse,
  ListCustomRoutingPortMappingsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomRoutingPortMappingsCommand,
  serializeAws_json1_1ListCustomRoutingPortMappingsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCustomRoutingPortMappingsCommandInput extends ListCustomRoutingPortMappingsRequest {}
export interface ListCustomRoutingPortMappingsCommandOutput
  extends ListCustomRoutingPortMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
 * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
 * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
 * 	    mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
 *          <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
 *         your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
 *         in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
 * 	        <p>The mappings also include a flag for each destination denoting which destination IP addresses and
 * 		ports are allowed or denied traffic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingPortMappingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingPortMappingsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class ListCustomRoutingPortMappingsCommand extends $Command<
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
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

  constructor(readonly input: ListCustomRoutingPortMappingsCommandInput) {
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
  ): Handler<ListCustomRoutingPortMappingsCommandInput, ListCustomRoutingPortMappingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCustomRoutingPortMappingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingPortMappingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingPortMappingsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingPortMappingsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCustomRoutingPortMappingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingPortMappingsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingPortMappingsCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingPortMappingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
