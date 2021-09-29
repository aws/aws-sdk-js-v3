import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { AddTagsRequest } from "../models/models_0";
import {
  deserializeAws_restJson1AddTagsCommand,
  serializeAws_restJson1AddTagsCommand,
} from "../protocols/Aws_restJson1";
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

export interface AddTagsCommandInput extends AddTagsRequest {}
export interface AddTagsCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches tags to an existing domain. Tags are a set of case-sensitive key value pairs. An
 *       domain can have up to 10 tags. See
 *       <a href="http://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains.html#managedomains-awsresorcetagging" target="_blank">
 *         Tagging Amazon OpenSearch Service domains</a> for more information.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, AddTagsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, AddTagsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddTagsCommand extends $Command<
  AddTagsCommandInput,
  AddTagsCommandOutput,
  OpenSearchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AddTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsCommandInput, AddTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "AddTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsCommandOutput> {
    return deserializeAws_restJson1AddTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
