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

import {
  CreateTopicInput,
  CreateTopicInputFilterSensitiveLog,
  CreateTopicResponse,
  CreateTopicResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryCreateTopicCommand, serializeAws_queryCreateTopicCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface CreateTopicCommandInput extends CreateTopicInput {}
export interface CreateTopicCommandOutput extends CreateTopicResponse, __MetadataBearer {}

/**
 * <p>Creates a topic to which notifications can be published. Users can create at most
 *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/sns-create-topic.html">Creating an Amazon SNS
 *                 topic</a> in the <i>Amazon SNS Developer Guide</i>. This action is
 *             idempotent, so if the requester already owns a topic with the specified name, that
 *             topic's ARN is returned without creating a new topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class CreateTopicCommand extends $Command<
  CreateTopicCommandInput,
  CreateTopicCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: CreateTopicCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTopicCommandInput, CreateTopicCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateTopicCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "CreateTopicCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTopicInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateTopicResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTopicCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateTopicCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTopicCommandOutput> {
    return deserializeAws_queryCreateTopicCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
