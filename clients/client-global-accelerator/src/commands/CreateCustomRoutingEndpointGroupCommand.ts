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
  CreateCustomRoutingEndpointGroupRequest,
  CreateCustomRoutingEndpointGroupRequestFilterSensitiveLog,
  CreateCustomRoutingEndpointGroupResponse,
  CreateCustomRoutingEndpointGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand,
  serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateCustomRoutingEndpointGroupCommandInput extends CreateCustomRoutingEndpointGroupRequest {}
export interface CreateCustomRoutingEndpointGroupCommandOutput
  extends CreateCustomRoutingEndpointGroupResponse,
    __MetadataBearer {}

/**
 * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
 * 	    An endpoint group is a collection of endpoints in one Amazon Web Services
 * 		Region. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class CreateCustomRoutingEndpointGroupCommand extends $Command<
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
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

  constructor(readonly input: CreateCustomRoutingEndpointGroupCommandInput) {
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
  ): Handler<CreateCustomRoutingEndpointGroupCommandInput, CreateCustomRoutingEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomRoutingEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateCustomRoutingEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCustomRoutingEndpointGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateCustomRoutingEndpointGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateCustomRoutingEndpointGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateCustomRoutingEndpointGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateCustomRoutingEndpointGroupCommandOutput> {
    return deserializeAws_json1_1CreateCustomRoutingEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
