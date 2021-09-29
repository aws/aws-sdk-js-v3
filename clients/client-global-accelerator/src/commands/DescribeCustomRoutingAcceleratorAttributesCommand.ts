import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  DescribeCustomRoutingAcceleratorAttributesRequest,
  DescribeCustomRoutingAcceleratorAttributesResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand,
  serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DescribeCustomRoutingAcceleratorAttributesCommandInput
  extends DescribeCustomRoutingAcceleratorAttributesRequest {}
export interface DescribeCustomRoutingAcceleratorAttributesCommandOutput
  extends DescribeCustomRoutingAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Describe the attributes of a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new DescribeCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeCustomRoutingAcceleratorAttributesCommand extends $Command<
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
  GlobalAcceleratorClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCustomRoutingAcceleratorAttributesCommandInput) {
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
    DescribeCustomRoutingAcceleratorAttributesCommandInput,
    DescribeCustomRoutingAcceleratorAttributesCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingAcceleratorAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomRoutingAcceleratorAttributesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomRoutingAcceleratorAttributesResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
