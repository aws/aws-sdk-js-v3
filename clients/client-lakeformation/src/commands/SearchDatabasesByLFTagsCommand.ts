import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { SearchDatabasesByLFTagsRequest, SearchDatabasesByLFTagsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1SearchDatabasesByLFTagsCommand,
  serializeAws_json1_1SearchDatabasesByLFTagsCommand,
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

export interface SearchDatabasesByLFTagsCommandInput extends SearchDatabasesByLFTagsRequest {}
export interface SearchDatabasesByLFTagsCommandOutput extends SearchDatabasesByLFTagsResponse, __MetadataBearer {}

/**
 * <p>This operation allows a search on <code>DATABASE</code> resources by <code>TagCondition</code>. This operation is used by admins who want to grant user permissions on certain <code>TagConditions</code>. Before making a grant, the admin can use <code>SearchDatabasesByTags</code> to find all resources where the given <code>TagConditions</code> are valid to verify whether the returned resources can be shared.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, SearchDatabasesByLFTagsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, SearchDatabasesByLFTagsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new SearchDatabasesByLFTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchDatabasesByLFTagsCommandInput} for command's `input` shape.
 * @see {@link SearchDatabasesByLFTagsCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SearchDatabasesByLFTagsCommand extends $Command<
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
  LakeFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SearchDatabasesByLFTagsCommandInput) {
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
  ): Handler<SearchDatabasesByLFTagsCommandInput, SearchDatabasesByLFTagsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "SearchDatabasesByLFTagsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchDatabasesByLFTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SearchDatabasesByLFTagsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SearchDatabasesByLFTagsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1SearchDatabasesByLFTagsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchDatabasesByLFTagsCommandOutput> {
    return deserializeAws_json1_1SearchDatabasesByLFTagsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
