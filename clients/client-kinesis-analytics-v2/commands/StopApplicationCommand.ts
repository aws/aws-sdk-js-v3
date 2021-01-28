import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { StopApplicationRequest, StopApplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopApplicationCommand,
  serializeAws_json1_1StopApplicationCommand,
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

export type StopApplicationCommandInput = StopApplicationRequest;
export type StopApplicationCommandOutput = StopApplicationResponse & __MetadataBearer;

/**
 * <p>Stops the application from processing data. You can stop
 *       an application only if it is in the running status, unless you set the <code>Force</code>
 *         parameter to <code>true</code>.</p>
 *          <p>You can use the <a>DescribeApplication</a> operation to find the application status.
 *        </p>
 *          <p>Kinesis Data Analytics takes a snapshot when the application is stopped, unless <code>Force</code> is set
 *           to <code>true</code>.</p>
 */
export class StopApplicationCommand extends $Command<
  StopApplicationCommandInput,
  StopApplicationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopApplicationCommandInput, StopApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "StopApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopApplicationResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopApplicationCommandOutput> {
    return deserializeAws_json1_1StopApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
