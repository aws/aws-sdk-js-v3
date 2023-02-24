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
  ListCustomRoutingPortMappingsByDestinationRequest,
  ListCustomRoutingPortMappingsByDestinationRequestFilterSensitiveLog,
  ListCustomRoutingPortMappingsByDestinationResponse,
  ListCustomRoutingPortMappingsByDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand,
  serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand,
} from "../protocols/Aws_json1_1";

export interface ListCustomRoutingPortMappingsByDestinationCommandInput
  extends ListCustomRoutingPortMappingsByDestinationRequest {}
export interface ListCustomRoutingPortMappingsByDestinationCommandOutput
  extends ListCustomRoutingPortMappingsByDestinationResponse,
    __MetadataBearer {}

/**
 * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
 * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
 * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
 * 			list the port mappings for a specific destination instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingPortMappingsByDestinationCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingPortMappingsByDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingPortMappingsByDestinationCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class ListCustomRoutingPortMappingsByDestinationCommand extends $Command<
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
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

  constructor(readonly input: ListCustomRoutingPortMappingsByDestinationCommandInput) {
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
  ): Handler<
    ListCustomRoutingPortMappingsByDestinationCommandInput,
    ListCustomRoutingPortMappingsByDestinationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        ListCustomRoutingPortMappingsByDestinationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "ListCustomRoutingPortMappingsByDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCustomRoutingPortMappingsByDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCustomRoutingPortMappingsByDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListCustomRoutingPortMappingsByDestinationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> {
    return deserializeAws_json1_1ListCustomRoutingPortMappingsByDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
