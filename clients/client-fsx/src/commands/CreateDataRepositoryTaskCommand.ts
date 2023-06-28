// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { CreateDataRepositoryTaskRequest, CreateDataRepositoryTaskResponse } from "../models/models_0";
import { de_CreateDataRepositoryTaskCommand, se_CreateDataRepositoryTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataRepositoryTaskCommand}.
 */
export interface CreateDataRepositoryTaskCommandInput extends CreateDataRepositoryTaskRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataRepositoryTaskCommand}.
 */
export interface CreateDataRepositoryTaskCommandOutput extends CreateDataRepositoryTaskResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = { // CreateDataRepositoryTaskRequest
 *   Type: "EXPORT_TO_REPOSITORY" || "IMPORT_METADATA_FROM_REPOSITORY" || "RELEASE_DATA_FROM_FILESYSTEM" || "AUTO_RELEASE_DATA", // required
 *   Paths: [ // DataRepositoryTaskPaths
 *     "STRING_VALUE",
 *   ],
 *   FileSystemId: "STRING_VALUE", // required
 *   Report: { // CompletionReport
 *     Enabled: true || false, // required
 *     Path: "STRING_VALUE",
 *     Format: "REPORT_CSV_20191124",
 *     Scope: "FAILED_FILES_ONLY",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // Tags
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   CapacityToRelease: Number("long"),
 * };
 * const command = new CreateDataRepositoryTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataRepositoryTaskResponse
 * //   DataRepositoryTask: { // DataRepositoryTask
 * //     TaskId: "STRING_VALUE", // required
 * //     Lifecycle: "PENDING" || "EXECUTING" || "FAILED" || "SUCCEEDED" || "CANCELED" || "CANCELING", // required
 * //     Type: "EXPORT_TO_REPOSITORY" || "IMPORT_METADATA_FROM_REPOSITORY" || "RELEASE_DATA_FROM_FILESYSTEM" || "AUTO_RELEASE_DATA", // required
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     StartTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     ResourceARN: "STRING_VALUE",
 * //     Tags: [ // Tags
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     FileSystemId: "STRING_VALUE",
 * //     Paths: [ // DataRepositoryTaskPaths
 * //       "STRING_VALUE",
 * //     ],
 * //     FailureDetails: { // DataRepositoryTaskFailureDetails
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Status: { // DataRepositoryTaskStatus
 * //       TotalCount: Number("long"),
 * //       SucceededCount: Number("long"),
 * //       FailedCount: Number("long"),
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       ReleasedCapacity: Number("long"),
 * //     },
 * //     Report: { // CompletionReport
 * //       Enabled: true || false, // required
 * //       Path: "STRING_VALUE",
 * //       Format: "REPORT_CSV_20191124",
 * //       Scope: "FAILED_FILES_ONLY",
 * //     },
 * //     CapacityToRelease: Number("long"),
 * //     FileCacheId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDataRepositoryTaskCommandInput - {@link CreateDataRepositoryTaskCommandInput}
 * @returns {@link CreateDataRepositoryTaskCommandOutput}
 * @see {@link CreateDataRepositoryTaskCommandInput} for command's `input` shape.
 * @see {@link CreateDataRepositoryTaskCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryTaskExecuting} (client fault)
 *  <p>An existing data repository task is currently executing on the file system.
 *         Wait until the existing task has completed, then create the new task.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>No Amazon FSx file systems were found based upon supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web Services Support.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>The requested operation is not supported for this resource or API.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateDataRepositoryTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataRepositoryTaskCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataRepositoryTaskCommandOutput> {
    return de_CreateDataRepositoryTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
