import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateDataRepositoryTaskRequest, CreateDataRepositoryTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataRepositoryTaskCommand,
  serializeAws_json1_1CreateDataRepositoryTaskCommand,
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

export type CreateDataRepositoryTaskCommandInput = CreateDataRepositoryTaskRequest;
export type CreateDataRepositoryTaskCommandOutput = CreateDataRepositoryTaskResponse & __MetadataBearer;

/**
 * <p>Creates an Amazon FSx for Lustre data repository task. You use data repository tasks
 *             to perform bulk operations between your Amazon FSx file system and its linked data
 *             repository. An example of a data repository task is
 *             exporting any data and metadata changes, including POSIX metadata, to files, directories, and symbolic links (symlinks) from your FSx file system to its linked data repository. A
 *                 <code>CreateDataRepositoryTask</code> operation will fail if a data repository is not
 *             linked to the FSx file system. To learn more about data repository tasks, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>.
 *             To learn more about linking a data repository to your file system, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-fs-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
 */
export class CreateDataRepositoryTaskCommand extends $Command<
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDataRepositoryTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FSxClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDataRepositoryTaskCommandInput, CreateDataRepositoryTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateDataRepositoryTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataRepositoryTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDataRepositoryTaskResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDataRepositoryTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDataRepositoryTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataRepositoryTaskCommandOutput> {
    return deserializeAws_json1_1CreateDataRepositoryTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
