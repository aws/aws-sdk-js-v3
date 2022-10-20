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
  DeleteCustomRoutingEndpointGroupRequest,
  DeleteCustomRoutingEndpointGroupRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand,
  serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

export interface DeleteCustomRoutingEndpointGroupCommandInput extends DeleteCustomRoutingEndpointGroupRequest {}
export interface DeleteCustomRoutingEndpointGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Delete an endpoint group from a listener for a custom routing accelerator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DeleteCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DeleteCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DeleteCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class DeleteCustomRoutingEndpointGroupCommand extends $Command<
  DeleteCustomRoutingEndpointGroupCommandInput,
  DeleteCustomRoutingEndpointGroupCommandOutput,
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

  constructor(readonly input: DeleteCustomRoutingEndpointGroupCommandInput) {
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
  ): Handler<DeleteCustomRoutingEndpointGroupCommandInput, DeleteCustomRoutingEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomRoutingEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DeleteCustomRoutingEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCustomRoutingEndpointGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteCustomRoutingEndpointGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCustomRoutingEndpointGroupCommandOutput> {
    return deserializeAws_json1_1DeleteCustomRoutingEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
