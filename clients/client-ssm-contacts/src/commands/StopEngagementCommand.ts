import { SSMContactsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMContactsClient";
import { StopEngagementRequest, StopEngagementResult } from "../models/models_0";
import {
  deserializeAws_json1_1StopEngagementCommand,
  serializeAws_json1_1StopEngagementCommand,
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

export interface StopEngagementCommandInput extends StopEngagementRequest {}
export interface StopEngagementCommandOutput extends StopEngagementResult, __MetadataBearer {}

/**
 * <p>Stops an engagement before it finishes the final stage of the escalation plan or
 *          engagement plan. Further contacts aren't engaged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, StopEngagementCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, StopEngagementCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new StopEngagementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopEngagementCommandInput} for command's `input` shape.
 * @see {@link StopEngagementCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class StopEngagementCommand extends $Command<
  StopEngagementCommandInput,
  StopEngagementCommandOutput,
  SSMContactsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopEngagementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopEngagementCommandInput, StopEngagementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "StopEngagementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopEngagementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopEngagementResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopEngagementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopEngagementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopEngagementCommandOutput> {
    return deserializeAws_json1_1StopEngagementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
