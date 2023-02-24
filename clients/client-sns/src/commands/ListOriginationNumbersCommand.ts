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
  ListOriginationNumbersRequest,
  ListOriginationNumbersRequestFilterSensitiveLog,
  ListOriginationNumbersResult,
  ListOriginationNumbersResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryListOriginationNumbersCommand,
  serializeAws_queryListOriginationNumbersCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface ListOriginationNumbersCommandInput extends ListOriginationNumbersRequest {}
export interface ListOriginationNumbersCommandOutput extends ListOriginationNumbersResult, __MetadataBearer {}

/**
 * <p>Lists the calling Amazon Web Services account's dedicated origination numbers and their metadata.
 *             For more information about origination numbers, see <a href="https://docs.aws.amazon.com/sns/latest/dg/channels-sms-originating-identities-origination-numbers.html">Origination numbers</a> in the <i>Amazon SNS Developer
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListOriginationNumbersCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListOriginationNumbersCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListOriginationNumbersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginationNumbersCommandInput} for command's `input` shape.
 * @see {@link ListOriginationNumbersCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class ListOriginationNumbersCommand extends $Command<
  ListOriginationNumbersCommandInput,
  ListOriginationNumbersCommandOutput,
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

  constructor(readonly input: ListOriginationNumbersCommandInput) {
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
  ): Handler<ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListOriginationNumbersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListOriginationNumbersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListOriginationNumbersRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListOriginationNumbersResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListOriginationNumbersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListOriginationNumbersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListOriginationNumbersCommandOutput> {
    return deserializeAws_queryListOriginationNumbersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
