import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListEdgePackagingJobsRequest, ListEdgePackagingJobsResponse } from "../models/models_2";
import {
  deserializeAws_json1_1ListEdgePackagingJobsCommand,
  serializeAws_json1_1ListEdgePackagingJobsCommand,
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

export interface ListEdgePackagingJobsCommandInput extends ListEdgePackagingJobsRequest {}
export interface ListEdgePackagingJobsCommandOutput extends ListEdgePackagingJobsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListEdgePackagingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListEdgePackagingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListEdgePackagingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEdgePackagingJobsCommandInput} for command's `input` shape.
 * @see {@link ListEdgePackagingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class ListEdgePackagingJobsCommand extends $Command<
  ListEdgePackagingJobsCommandInput,
  ListEdgePackagingJobsCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListEdgePackagingJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEdgePackagingJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListEdgePackagingJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEdgePackagingJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListEdgePackagingJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEdgePackagingJobsCommandOutput> {
    return deserializeAws_json1_1ListEdgePackagingJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
