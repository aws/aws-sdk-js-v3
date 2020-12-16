import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListMLTransformsRequest, ListMLTransformsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ListMLTransformsCommand,
  serializeAws_json1_1ListMLTransformsCommand,
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

export type ListMLTransformsCommandInput = ListMLTransformsRequest;
export type ListMLTransformsCommandOutput = ListMLTransformsResponse & __MetadataBearer;

/**
 * <p> Retrieves a sortable, filterable list of existing AWS Glue machine learning transforms in this AWS account,
 *        or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as
 *        a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag
 *        filtering, only resources with the tags are retrieved.
 *      </p>
 */
export class ListMLTransformsCommand extends $Command<
  ListMLTransformsCommandInput,
  ListMLTransformsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMLTransformsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListMLTransformsCommandInput, ListMLTransformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListMLTransformsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMLTransformsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMLTransformsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMLTransformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListMLTransformsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMLTransformsCommandOutput> {
    return deserializeAws_json1_1ListMLTransformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
