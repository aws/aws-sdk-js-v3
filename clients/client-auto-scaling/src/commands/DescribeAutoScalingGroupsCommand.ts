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
  AutoScalingGroupNamesType,
  AutoScalingGroupNamesTypeFilterSensitiveLog,
  AutoScalingGroupsType,
  AutoScalingGroupsTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingGroupsCommand,
  serializeAws_queryDescribeAutoScalingGroupsCommand,
} from "../protocols/Aws_query";

export interface DescribeAutoScalingGroupsCommandInput extends AutoScalingGroupNamesType {}
export interface DescribeAutoScalingGroupsCommandOutput extends AutoScalingGroupsType, __MetadataBearer {}

/**
 * <p>Gets information about the Auto Scaling groups in the account and Region.</p>
 *          <p>If you specify Auto Scaling group names, the output includes information for only the
 *             specified Auto Scaling groups. If you specify filters, the output includes information for only
 *             those Auto Scaling groups that meet the filter criteria. If you do not specify group names or
 *             filters, the output includes information for all Auto Scaling groups. </p>
 *          <p>This operation also returns information about instances in Auto Scaling groups. To retrieve
 *             information about the instances in a warm pool, you must call the <a>DescribeWarmPool</a> API. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingGroupsCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingGroupsCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAutoScalingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAutoScalingGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingGroupsCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class DescribeAutoScalingGroupsCommand extends $Command<
  DescribeAutoScalingGroupsCommandInput,
  DescribeAutoScalingGroupsCommandOutput,
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

  constructor(readonly input: DescribeAutoScalingGroupsCommandInput) {
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
  ): Handler<DescribeAutoScalingGroupsCommandInput, DescribeAutoScalingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoScalingGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAutoScalingGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AutoScalingGroupNamesTypeFilterSensitiveLog,
      outputFilterSensitiveLog: AutoScalingGroupsTypeFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAutoScalingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAutoScalingGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingGroupsCommandOutput> {
    return deserializeAws_queryDescribeAutoScalingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
