import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { ListAssociatedAssetsRequest, ListAssociatedAssetsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListAssociatedAssetsCommand,
  serializeAws_restJson1ListAssociatedAssetsCommand,
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

export type ListAssociatedAssetsCommandInput = ListAssociatedAssetsRequest;
export type ListAssociatedAssetsCommandOutput = ListAssociatedAssetsResponse & __MetadataBearer;

/**
 * <p>Retrieves a paginated list of associated assets.</p>
 *          <p>You can use this operation to do the following:</p>
 *          <ul>
 *             <li>
 *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
 *             </li>
 *             <li>
 *                <p>List an asset's parent asset.</p>
 *             </li>
 *          </ul>
 */
export class ListAssociatedAssetsCommand extends $Command<
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedAssetsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSiteWiseClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAssociatedAssetsCommandInput, ListAssociatedAssetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "ListAssociatedAssetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedAssetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedAssetsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAssociatedAssetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListAssociatedAssetsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAssociatedAssetsCommandOutput> {
    return deserializeAws_restJson1ListAssociatedAssetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
