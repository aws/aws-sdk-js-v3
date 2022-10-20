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
  DescribeCustomRoutingAcceleratorAttributesRequest,
  DescribeCustomRoutingAcceleratorAttributesRequestFilterSensitiveLog,
  DescribeCustomRoutingAcceleratorAttributesResponse,
  DescribeCustomRoutingAcceleratorAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand,
  serializeAws_json1_1DescribeCustomRoutingAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";

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
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 */
export class DescribeCustomRoutingAcceleratorAttributesCommand extends $Command<
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeCustomRoutingAcceleratorAttributesCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeCustomRoutingAcceleratorAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCustomRoutingAcceleratorAttributesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeCustomRoutingAcceleratorAttributesResponseFilterSensitiveLog,
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
