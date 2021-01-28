import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ImportWorkspaceImageRequest, ImportWorkspaceImageResult } from "../models/models_0";
import {
  deserializeAws_json1_1ImportWorkspaceImageCommand,
  serializeAws_json1_1ImportWorkspaceImageCommand,
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

export type ImportWorkspaceImageCommandInput = ImportWorkspaceImageRequest;
export type ImportWorkspaceImageCommandOutput = ImportWorkspaceImageResult & __MetadataBearer;

/**
 * <p>Imports the specified Windows 10 Bring Your Own License (BYOL) image into Amazon
 *          WorkSpaces. The image must be an already licensed Amazon EC2 image that is in your AWS
 *          account, and you must own the image. For more information about creating BYOL images, see
 *             <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/byol-windows-images.html">
 *             Bring Your Own Windows Desktop Licenses</a>.</p>
 */
export class ImportWorkspaceImageCommand extends $Command<
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ImportWorkspaceImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ImportWorkspaceImageCommandInput, ImportWorkspaceImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "ImportWorkspaceImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ImportWorkspaceImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportWorkspaceImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ImportWorkspaceImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ImportWorkspaceImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ImportWorkspaceImageCommandOutput> {
    return deserializeAws_json1_1ImportWorkspaceImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
