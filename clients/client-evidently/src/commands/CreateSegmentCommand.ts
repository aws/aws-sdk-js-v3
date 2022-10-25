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

import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import {
  CreateSegmentRequest,
  CreateSegmentRequestFilterSensitiveLog,
  CreateSegmentResponse,
  CreateSegmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSegmentCommand,
  serializeAws_restJson1CreateSegmentCommand,
} from "../protocols/Aws_restJson1";

export interface CreateSegmentCommandInput extends CreateSegmentRequest {}
export interface CreateSegmentCommandOutput extends CreateSegmentResponse, __MetadataBearer {}

/**
 * <p>Use this operation to define a <i>segment</i> of your audience. A segment
 *       is a portion of your audience that share one or more characteristics. Examples could be Chrome browser users,
 *       users in Europe, or Firefox browser users in Europe who also fit other criteria that your application collects,
 *       such as age.</p>
 *          <p>Using a segment in an experiment limits that experiment to evaluate only the users who match the segment
 *       criteria. Using one or more segments in a launch allows you to define different traffic splits for the different
 *       audience segments.</p>
 *
 *          <p>For more information about segment pattern syntax, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Evidently-segments.html#CloudWatch-Evidently-segments-syntax.html">
 *         Segment rule pattern syntax</a>.</p>
 *
 *          <p>The pattern that you define for a segment is matched against the value of <code>evaluationContext</code>, which
 *       is passed into Evidently in the <a href="https://docs.aws.amazon.com/cloudwatchevidently/latest/APIReference/API_EvaluateFeature.html">EvaluateFeature</a> operation,
 *       when Evidently assigns a feature variation to a user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, CreateSegmentCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, CreateSegmentCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * const client = new EvidentlyClient(config);
 * const command = new CreateSegmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSegmentCommandInput} for command's `input` shape.
 * @see {@link CreateSegmentCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 */
export class CreateSegmentCommand extends $Command<
  CreateSegmentCommandInput,
  CreateSegmentCommandOutput,
  EvidentlyClientResolvedConfig
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

  constructor(readonly input: CreateSegmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EvidentlyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSegmentCommandInput, CreateSegmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateSegmentCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EvidentlyClient";
    const commandName = "CreateSegmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSegmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSegmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSegmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSegmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSegmentCommandOutput> {
    return deserializeAws_restJson1CreateSegmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
