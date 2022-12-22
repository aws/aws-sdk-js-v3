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

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  DescribeTrafficSourcesRequest,
  DescribeTrafficSourcesRequestFilterSensitiveLog,
  DescribeTrafficSourcesResponse,
  DescribeTrafficSourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeTrafficSourcesCommand,
  serializeAws_queryDescribeTrafficSourcesCommand,
} from "../protocols/Aws_query";

export interface DescribeTrafficSourcesCommandInput extends DescribeTrafficSourcesRequest {}
export interface DescribeTrafficSourcesCommandOutput extends DescribeTrafficSourcesResponse, __MetadataBearer {}

/**
 * <p>
 *             <b>Reserved for use with Amazon VPC Lattice, which is in preview and subject to change.
 *             Do not use this API for production workloads. This API is also subject to change.</b>
 *          </p>
 *          <p>Gets information about the traffic sources for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeTrafficSourcesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeTrafficSourcesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeTrafficSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTrafficSourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeTrafficSourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeTrafficSourcesCommand extends $Command<
  DescribeTrafficSourcesCommandInput,
  DescribeTrafficSourcesCommandOutput,
  AutoScalingClientResolvedConfig
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

  constructor(readonly input: DescribeTrafficSourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTrafficSourcesCommandInput, DescribeTrafficSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTrafficSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeTrafficSourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTrafficSourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTrafficSourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeTrafficSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeTrafficSourcesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTrafficSourcesCommandOutput> {
    return deserializeAws_queryDescribeTrafficSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
