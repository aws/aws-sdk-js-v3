import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { SearchTablesByLFTagsRequest, SearchTablesByLFTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchTablesByLFTagsCommand,
  serializeAws_json1_1SearchTablesByLFTagsCommand,
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

export interface SearchTablesByLFTagsCommandInput extends SearchTablesByLFTagsRequest {}
export interface SearchTablesByLFTagsCommandOutput extends SearchTablesByLFTagsResponse, __MetadataBearer {}

/**
 * <p>This operation allows a search on <code>TABLE</code> resources by <code>LFTag</code>s. This will be used by admins who want to grant user permissions on certain LFTags. Before making a grant, the admin can use <code>SearchTablesByLFTags</code> to find all resources where the given <code>LFTag</code>s are valid to verify whether the returned resources can be shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, SearchTablesByLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, SearchTablesByLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new SearchTablesByLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchTablesByLFTagsCommandInput} for command's `input` shape.
 * @see {@link SearchTablesByLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SearchTablesByLFTagsCommand extends $Command<
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchTablesByLFTagsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SearchTablesByLFTagsCommandInput, SearchTablesByLFTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "SearchTablesByLFTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchTablesByLFTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchTablesByLFTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchTablesByLFTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchTablesByLFTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchTablesByLFTagsCommandOutput> {
    return deserializeAws_json1_1SearchTablesByLFTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
