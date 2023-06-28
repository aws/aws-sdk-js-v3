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

import { ListEdgePackagingJobsRequest, ListEdgePackagingJobsResponse } from "../models/models_3";
import { de_ListEdgePackagingJobsCommand, se_ListEdgePackagingJobsCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListEdgePackagingJobsCommand}.
 */
export interface ListEdgePackagingJobsCommandInput extends ListEdgePackagingJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListEdgePackagingJobsCommand}.
 */
export interface ListEdgePackagingJobsCommandOutput extends ListEdgePackagingJobsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEdgePackagingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEdgePackagingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListEdgePackagingJobsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 *   LastModifiedTimeAfter: new Date("TIMESTAMP"),
 *   LastModifiedTimeBefore: new Date("TIMESTAMP"),
 *   NameContains: "STRING_VALUE",
 *   ModelNameContains: "STRING_VALUE",
 *   StatusEquals: "STARTING" || "INPROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED",
 *   SortBy: "NAME" || "MODEL_NAME" || "CREATION_TIME" || "LAST_MODIFIED_TIME" || "STATUS",
 *   SortOrder: "Ascending" || "Descending",
 * };
 * const command = new ListEdgePackagingJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListEdgePackagingJobsResponse
 * //   EdgePackagingJobSummaries: [ // EdgePackagingJobSummaries // required
 * //     { // EdgePackagingJobSummary
 * //       EdgePackagingJobArn: "STRING_VALUE", // required
 * //       EdgePackagingJobName: "STRING_VALUE", // required
 * //       EdgePackagingJobStatus: "STARTING" || "INPROGRESS" || "COMPLETED" || "FAILED" || "STOPPING" || "STOPPED", // required
 * //       CompilationJobName: "STRING_VALUE",
 * //       ModelName: "STRING_VALUE",
 * //       ModelVersion: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEdgePackagingJobsCommandInput - {@link ListEdgePackagingJobsCommandInput}
 * @returns {@link ListEdgePackagingJobsCommandOutput}
 * @see {@link ListEdgePackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListEdgePackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListEdgePackagingJobsCommand extends $Command<
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListEdgePackagingJobsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEdgePackagingJobsCommandInput, ListEdgePackagingJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEdgePackagingJobsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListEdgePackagingJobsCommand";
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
  private serialize(input: ListEdgePackagingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListEdgePackagingJobsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEdgePackagingJobsCommandOutput> {
    return de_ListEdgePackagingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
