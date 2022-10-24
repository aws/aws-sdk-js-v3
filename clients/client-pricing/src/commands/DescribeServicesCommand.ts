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
  DescribeServicesRequest,
  DescribeServicesRequestFilterSensitiveLog,
  DescribeServicesResponse,
  DescribeServicesResponseFilterSensitiveLog,
} from "../models/models_0";
import { PricingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PricingClient";
import {
  deserializeAws_json1_1DescribeServicesCommand,
  serializeAws_json1_1DescribeServicesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeServicesCommandInput extends DescribeServicesRequest {}
export interface DescribeServicesCommandOutput extends DescribeServicesResponse, __MetadataBearer {}

/**
 * <p>Returns the metadata for one service or a list of the metadata for all services. Use
 *          this without a service code to get the service codes for all services.
 *          Use it with a service code, such as <code>AmazonEC2</code>, to get information specific to
 *          that service, such as the attribute
 *          names available for that service. For example, some of the attribute names available for EC2 are
 *          <code>volumeType</code>, <code>maxIopsVolume</code>, <code>operation</code>,
 *          <code>locationType</code>, and <code>instanceCapacity10xlarge</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PricingClient, DescribeServicesCommand } from "@aws-sdk/client-pricing"; // ES Modules import
 * // const { PricingClient, DescribeServicesCommand } = require("@aws-sdk/client-pricing"); // CommonJS import
 * const client = new PricingClient(config);
 * const command = new DescribeServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServicesCommandInput} for command's `input` shape.
 * @see {@link DescribeServicesCommandOutput} for command's `response` shape.
 * @see {@link PricingClientResolvedConfig | config} for PricingClient's `config` shape.
 *
 */
export class DescribeServicesCommand extends $Command<
  DescribeServicesCommandInput,
  DescribeServicesCommandOutput,
  PricingClientResolvedConfig
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

  constructor(readonly input: DescribeServicesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PricingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeServicesCommandInput, DescribeServicesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeServicesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PricingClient";
    const commandName = "DescribeServicesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServicesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeServicesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeServicesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServicesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeServicesCommandOutput> {
    return deserializeAws_json1_1DescribeServicesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
