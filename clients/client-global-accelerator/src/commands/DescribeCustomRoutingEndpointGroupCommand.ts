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
  DescribeCustomRoutingEndpointGroupRequest,
  DescribeCustomRoutingEndpointGroupRequestFilterSensitiveLog,
  DescribeCustomRoutingEndpointGroupResponse,
  DescribeCustomRoutingEndpointGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand,
  serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeCustomRoutingEndpointGroupCommandInput extends DescribeCustomRoutingEndpointGroupRequest {}
export interface DescribeCustomRoutingEndpointGroupCommandOutput
  extends DescribeCustomRoutingEndpointGroupResponse,
    __MetadataBearer {}

/**
 * <p>Describe an endpoint group for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class DescribeCustomRoutingEndpointGroupCommand extends $Command<
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
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

  constructor(readonly input: DescribeCustomRoutingEndpointGroupCommandInput) {
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
  ): Handler<DescribeCustomRoutingEndpointGroupCommandInput, DescribeCustomRoutingEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeCustomRoutingEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomRoutingEndpointGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomRoutingEndpointGroupResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCustomRoutingEndpointGroupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> {
    return deserializeAws_json1_1DescribeCustomRoutingEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
