import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTaskRunsRequest, GetMLTaskRunsResponse } from "../models/models_1";
import {
  deserializeAws_json1_1GetMLTaskRunsCommand,
  serializeAws_json1_1GetMLTaskRunsCommand,
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

export type GetMLTaskRunsCommandInput = GetMLTaskRunsRequest;
export type GetMLTaskRunsCommandOutput = GetMLTaskRunsResponse & __MetadataBearer;

/**
 * <p>Gets a list of runs for a machine learning transform. Machine learning task runs are
 *       asynchronous tasks that AWS Glue runs on your behalf as part of various machine learning
 *       workflows. You can get a sortable, filterable list of machine learning task runs by calling
 *         <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other
 *       optional parameters as documented in this section.</p>
 *
 * 	        <p>This operation returns a list of historic runs and must be paginated.</p>
 */
export class GetMLTaskRunsCommand extends $Command<
  GetMLTaskRunsCommandInput,
  GetMLTaskRunsCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetMLTaskRunsCommandInput) {
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
  ): Handler<GetMLTaskRunsCommandInput, GetMLTaskRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTaskRunsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetMLTaskRunsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetMLTaskRunsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetMLTaskRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetMLTaskRunsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTaskRunsCommandOutput> {
    return deserializeAws_json1_1GetMLTaskRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
