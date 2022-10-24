// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import {
  CreateDataRepositoryTaskRequest,
  CreateDataRepositoryTaskRequestFilterSensitiveLog,
  CreateDataRepositoryTaskResponse,
  CreateDataRepositoryTaskResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateDataRepositoryTaskCommand,
  serializeAws_json1_1CreateDataRepositoryTaskCommand,
} from "../protocols/Aws_json1_1";

export interface CreateDataRepositoryTaskCommandInput extends CreateDataRepositoryTaskRequest {}
export interface CreateDataRepositoryTaskCommandOutput extends CreateDataRepositoryTaskResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon FSx for Lustre data repository task. You use data repository tasks
 *             to perform bulk operations between your Amazon FSx file system and its linked data
 *             repositories. An example of a data repository task is exporting any data and metadata
 *             changes, including POSIX metadata, to files, directories, and symbolic links (symlinks)
 *             from your FSx file system to a linked data repository. A <code>CreateDataRepositoryTask</code>
 *             operation will fail if a data repository is not linked to the FSx file system. To learn
 *             more about data repository tasks, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/data-repository-tasks.html">Data Repository Tasks</a>.
 *             To learn more about linking a data repository to your file system, see
 *             <a href="https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html">Linking your file system to an S3 bucket</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, CreateDataRepositoryTaskCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, CreateDataRepositoryTaskCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new CreateDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 */
export class CreateDataRepositoryTaskCommand extends $Command<
  CreateDataRepositoryTaskCommandInput,
  CreateDataRepositoryTaskCommandOutput,
  FSxClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataRepositoryTaskCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FSxClient";
    const commandName = "CreateDataRepositoryTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDataRepositoryTaskRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDataRepositoryTaskResponseFilterSensitiveLog,
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
