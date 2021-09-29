import { MediaPackageVodClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageVodClient";
import { ListPackagingGroupsRequest, ListPackagingGroupsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListPackagingGroupsCommand,
  serializeAws_restJson1ListPackagingGroupsCommand,
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

export interface ListPackagingGroupsCommandInput extends ListPackagingGroupsRequest {}
export interface ListPackagingGroupsCommandOutput extends ListPackagingGroupsResponse, __MetadataBearer {}

/**
 * Returns a collection of MediaPackage VOD PackagingGroup resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListPackagingGroupsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListPackagingGroupsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * const client = new MediaPackageVodClient(config);
 * const command = new ListPackagingGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagingGroupsCommandInput} for command's `input` shape.
 * @see {@link ListPackagingGroupsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListPackagingGroupsCommand extends $Command<
  ListPackagingGroupsCommandInput,
  ListPackagingGroupsCommandOutput,
  MediaPackageVodClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListPackagingGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaPackageVodClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPackagingGroupsCommandInput, ListPackagingGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaPackageVodClient";
    const commandName = "ListPackagingGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPackagingGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListPackagingGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPackagingGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListPackagingGroupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPackagingGroupsCommandOutput> {
    return deserializeAws_restJson1ListPackagingGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
