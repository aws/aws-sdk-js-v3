import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { GetFolderPathRequest, GetFolderPathResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetFolderPathCommand,
  serializeAws_restJson1GetFolderPathCommand,
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

export type GetFolderPathCommandInput = GetFolderPathRequest;
export type GetFolderPathCommandOutput = GetFolderPathResponse & __MetadataBearer;

/**
 * <p>Retrieves the path information (the hierarchy from the root folder) for the
 *             specified folder.</p>
 *         <p>By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the
 *             requested folder and only includes the IDs of the parent folders in the path. You can
 *             limit the maximum number of levels. You can also request the parent folder
 *             names.</p>
 */
export class GetFolderPathCommand extends $Command<
  GetFolderPathCommandInput,
  GetFolderPathCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetFolderPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFolderPathCommandInput, GetFolderPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "GetFolderPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetFolderPathRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetFolderPathResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetFolderPathCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetFolderPathCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFolderPathCommandOutput> {
    return deserializeAws_restJson1GetFolderPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
