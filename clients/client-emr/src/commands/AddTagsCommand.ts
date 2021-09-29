import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddTagsInput, AddTagsOutput } from "../models/models_0";
import { deserializeAws_json1_1AddTagsCommand, serializeAws_json1_1AddTagsCommand } from "../protocols/Aws_json1_1";
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

export interface AddTagsCommandInput extends AddTagsInput {}
export interface AddTagsCommandOutput extends AddTagsOutput, __MetadataBearer {}

/**
 * <p>Adds tags to an Amazon EMR resource, such as a cluster or an Amazon EMR Studio. Tags make it easier to associate resources in
 *          various ways, such as grouping clusters to track your Amazon EMR resource allocation costs.
 *          For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, AddTagsCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, AddTagsCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * const client = new EMRClient(config);
 * const command = new AddTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsCommandInput} for command's `input` shape.
 * @see {@link AddTagsCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AddTagsCommand extends $Command<AddTagsCommandInput, AddTagsCommandOutput, EMRClientResolvedConfig> {
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
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AddTagsCommandInput, AddTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "AddTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AddTagsInput.filterSensitiveLog,
      outputFilterSensitiveLog: AddTagsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AddTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AddTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddTagsCommandOutput> {
    return deserializeAws_json1_1AddTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
