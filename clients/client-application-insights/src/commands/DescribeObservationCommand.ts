import {
  ApplicationInsightsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationInsightsClient";
import { DescribeObservationRequest, DescribeObservationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeObservationCommand,
  serializeAws_json1_1DescribeObservationCommand,
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

export interface DescribeObservationCommandInput extends DescribeObservationRequest {}
export interface DescribeObservationCommandOutput extends DescribeObservationResponse, __MetadataBearer {}

/**
 * <p>Describes an anomaly or error with the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeObservationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeObservationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeObservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeObservationCommandInput} for command's `input` shape.
 * @see {@link DescribeObservationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DescribeObservationCommand extends $Command<
  DescribeObservationCommandInput,
  DescribeObservationCommandOutput,
  ApplicationInsightsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeObservationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationInsightsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeObservationCommandInput, DescribeObservationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationInsightsClient";
    const commandName = "DescribeObservationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeObservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeObservationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeObservationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeObservationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeObservationCommandOutput> {
    return deserializeAws_json1_1DescribeObservationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
