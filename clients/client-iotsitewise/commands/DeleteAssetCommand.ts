import { IoTSiteWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTSiteWiseClient";
import { DeleteAssetRequest, DeleteAssetResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAssetCommand,
  serializeAws_restJson1DeleteAssetCommand,
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

export type DeleteAssetCommandInput = DeleteAssetRequest;
export type DeleteAssetCommandOutput = DeleteAssetResponse & __MetadataBearer;

/**
 * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and
 *         models</a> in the <i>AWS IoT SiteWise User Guide</i>.
 *       </p>
 *          <note>
 *             <p>You can't delete an asset that's associated to another asset. For more information, see
 *           <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p>
 *          </note>
 */
export class DeleteAssetCommand extends $Command<
  DeleteAssetCommandInput,
  DeleteAssetCommandOutput,
  IoTSiteWiseClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAssetCommandInput) {
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
  ): Handler<DeleteAssetCommandInput, DeleteAssetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSiteWiseClient";
    const commandName = "DeleteAssetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAssetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAssetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteAssetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteAssetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAssetCommandOutput> {
    return deserializeAws_restJson1DeleteAssetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
