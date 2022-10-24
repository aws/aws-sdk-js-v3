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

import { AutoScalingPlansClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingPlansClient";
import {
  DescribeScalingPlanResourcesRequest,
  DescribeScalingPlanResourcesRequestFilterSensitiveLog,
  DescribeScalingPlanResourcesResponse,
  DescribeScalingPlanResourcesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingPlanResourcesCommand,
  serializeAws_json1_1DescribeScalingPlanResourcesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeScalingPlanResourcesCommandInput extends DescribeScalingPlanResourcesRequest {}
export interface DescribeScalingPlanResourcesCommandOutput
  extends DescribeScalingPlanResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Describes the scalable resources in the specified scaling plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new DescribeScalingPlanResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPlanResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPlanResourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for AutoScalingPlansClient's `config` shape.
 *
 */
export class DescribeScalingPlanResourcesCommand extends $Command<
  DescribeScalingPlanResourcesCommandInput,
  DescribeScalingPlanResourcesCommandOutput,
  AutoScalingPlansClientResolvedConfig
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

  constructor(readonly input: DescribeScalingPlanResourcesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingPlansClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeScalingPlanResourcesCommandInput, DescribeScalingPlanResourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeScalingPlanResourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingPlansClient";
    const commandName = "DescribeScalingPlanResourcesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeScalingPlanResourcesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingPlanResourcesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeScalingPlanResourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeScalingPlanResourcesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeScalingPlanResourcesCommandOutput> {
    return deserializeAws_json1_1DescribeScalingPlanResourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
