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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeSpotInstanceRequestsRequest,
  DescribeSpotInstanceRequestsRequestFilterSensitiveLog,
  DescribeSpotInstanceRequestsResult,
  DescribeSpotInstanceRequestsResultFilterSensitiveLog,
} from "../models/models_4";
import {
  deserializeAws_ec2DescribeSpotInstanceRequestsCommand,
  serializeAws_ec2DescribeSpotInstanceRequestsCommand,
} from "../protocols/Aws_ec2";

export interface DescribeSpotInstanceRequestsCommandInput extends DescribeSpotInstanceRequestsRequest {}
export interface DescribeSpotInstanceRequestsCommandOutput
  extends DescribeSpotInstanceRequestsResult,
    __MetadataBearer {}

/**
 * <p>Describes the specified Spot Instance requests.</p>
 *          <p>You can use <code>DescribeSpotInstanceRequests</code> to find a running Spot Instance by
 *             examining the response. If the status of the Spot Instance is <code>fulfilled</code>, the
 *             instance ID appears in the response and contains the identifier of the instance.
 *             Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a>
 *             with a filter to look for instances where the instance lifecycle is
 *             <code>spot</code>.</p>
 *          <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to
 *             limit the number of results returned. This paginates the output, which makes the list
 *             more manageable and returns the results faster. If the list of results exceeds your
 *                 <code>MaxResults</code> value, then that number of results is returned along with a
 *                 <code>NextToken</code> value that can be passed to a subsequent
 *                 <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining
 *             results.</p>
 *          <p>Spot Instance requests are deleted four hours after they are canceled and their instances are
 *             terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DescribeSpotInstanceRequestsCommand extends $Command<
  DescribeSpotInstanceRequestsCommandInput,
  DescribeSpotInstanceRequestsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DescribeSpotInstanceRequestsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeSpotInstanceRequestsCommandInput, DescribeSpotInstanceRequestsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeSpotInstanceRequestsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeSpotInstanceRequestsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeSpotInstanceRequestsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeSpotInstanceRequestsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeSpotInstanceRequestsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DescribeSpotInstanceRequestsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeSpotInstanceRequestsCommandOutput> {
    return deserializeAws_ec2DescribeSpotInstanceRequestsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
