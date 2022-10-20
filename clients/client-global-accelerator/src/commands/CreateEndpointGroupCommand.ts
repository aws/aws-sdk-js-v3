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
  CreateEndpointGroupRequest,
  CreateEndpointGroupRequestFilterSensitiveLog,
  CreateEndpointGroupResponse,
  CreateEndpointGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEndpointGroupCommand,
  serializeAws_json1_1CreateEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

export interface CreateEndpointGroupCommandInput extends CreateEndpointGroupRequest {}
export interface CreateEndpointGroupCommandOutput extends CreateEndpointGroupResponse, __MetadataBearer {}

/**
 * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services
 * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, CreateEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, CreateEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new CreateEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class CreateEndpointGroupCommand extends $Command<
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
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

  constructor(readonly input: CreateEndpointGroupCommandInput) {
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
  ): Handler<CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "CreateEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEndpointGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEndpointGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointGroupCommandOutput> {
    return deserializeAws_json1_1CreateEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
