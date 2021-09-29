import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { RecordHandlerProgressInput, RecordHandlerProgressOutput } from "../models/models_0";
import {
  deserializeAws_queryRecordHandlerProgressCommand,
  serializeAws_queryRecordHandlerProgressCommand,
} from "../protocols/Aws_query";
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

export interface RecordHandlerProgressCommandInput extends RecordHandlerProgressInput {}
export interface RecordHandlerProgressCommandOutput extends RecordHandlerProgressOutput, __MetadataBearer {}

/**
 * <p>Reports progress of a resource handler to CloudFormation.</p>
 *          <p>Reserved for use by the <a href="https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html">CloudFormation CLI</a>. Do not use this API in your code.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, RecordHandlerProgressCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, RecordHandlerProgressCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new RecordHandlerProgressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RecordHandlerProgressCommandInput} for command's `input` shape.
 * @see {@link RecordHandlerProgressCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RecordHandlerProgressCommand extends $Command<
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RecordHandlerProgressCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RecordHandlerProgressCommandInput, RecordHandlerProgressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "RecordHandlerProgressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RecordHandlerProgressInput.filterSensitiveLog,
      outputFilterSensitiveLog: RecordHandlerProgressOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RecordHandlerProgressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRecordHandlerProgressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RecordHandlerProgressCommandOutput> {
    return deserializeAws_queryRecordHandlerProgressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
