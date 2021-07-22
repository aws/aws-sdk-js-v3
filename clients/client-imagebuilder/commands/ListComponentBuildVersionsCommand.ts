import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListComponentBuildVersionsRequest, ListComponentBuildVersionsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListComponentBuildVersionsCommand,
  serializeAws_restJson1ListComponentBuildVersionsCommand,
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

export interface ListComponentBuildVersionsCommandInput extends ListComponentBuildVersionsRequest {}
export interface ListComponentBuildVersionsCommandOutput extends ListComponentBuildVersionsResponse, __MetadataBearer {}

/**
 * <p> Returns the list of component build versions for the specified semantic version.</p>
 * 		       <note>
 * 			         <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
 * 	You can assign values for the first three, and can filter on all of them.</p>
 * 			         <p>
 *                <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use
 * 	wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the
 * 	first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list
 * 	results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder
 * 	automatically uses a wildcard for that, if applicable.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListComponentBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const command = new ListComponentBuildVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentBuildVersionsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListComponentBuildVersionsCommand extends $Command<
  ListComponentBuildVersionsCommandInput,
  ListComponentBuildVersionsCommandOutput,
  ImagebuilderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListComponentBuildVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListComponentBuildVersionsCommandInput, ListComponentBuildVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListComponentBuildVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListComponentBuildVersionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListComponentBuildVersionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListComponentBuildVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListComponentBuildVersionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListComponentBuildVersionsCommandOutput> {
    return deserializeAws_restJson1ListComponentBuildVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
