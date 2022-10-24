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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DescribeTargetedSentimentDetectionJobRequest,
  DescribeTargetedSentimentDetectionJobRequestFilterSensitiveLog,
  DescribeTargetedSentimentDetectionJobResponse,
  DescribeTargetedSentimentDetectionJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand,
  serializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeTargetedSentimentDetectionJobCommandInput
  extends DescribeTargetedSentimentDetectionJobRequest {}
export interface DescribeTargetedSentimentDetectionJobCommandOutput
  extends DescribeTargetedSentimentDetectionJobResponse,
    __MetadataBearer {}

/**
 * <p>Gets the properties associated with a targeted sentiment detection job. Use this operation
 *       to get the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeTargetedSentimentDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeTargetedSentimentDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new DescribeTargetedSentimentDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTargetedSentimentDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetedSentimentDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 */
export class DescribeTargetedSentimentDetectionJobCommand extends $Command<
  DescribeTargetedSentimentDetectionJobCommandInput,
  DescribeTargetedSentimentDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
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

  constructor(readonly input: DescribeTargetedSentimentDetectionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTargetedSentimentDetectionJobCommandInput, DescribeTargetedSentimentDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTargetedSentimentDetectionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeTargetedSentimentDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeTargetedSentimentDetectionJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeTargetedSentimentDetectionJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeTargetedSentimentDetectionJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTargetedSentimentDetectionJobCommandOutput> {
    return deserializeAws_json1_1DescribeTargetedSentimentDetectionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
