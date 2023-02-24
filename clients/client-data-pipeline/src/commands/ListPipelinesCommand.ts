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

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import {
  ListPipelinesInput,
  ListPipelinesInputFilterSensitiveLog,
  ListPipelinesOutput,
  ListPipelinesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListPipelinesCommand,
  serializeAws_json1_1ListPipelinesCommand,
} from "../protocols/Aws_json1_1";

export interface ListPipelinesCommandInput extends ListPipelinesInput {}
export interface ListPipelinesCommandOutput extends ListPipelinesOutput, __MetadataBearer {}

/**
 * <p>Lists the pipeline identifiers for all active pipelines that you have permission to access.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.ListPipelines
 * Content-Length: 14
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {}</request>
 *
 *             <response>
 *
 * Status:
 * x-amzn-RequestId: b3104dc5-0734-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 39
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"PipelineIdList":
 *   [
 *     {"id": "df-08785951KAKJEXAMPLE",
 *      "name": "MyPipeline"},
 *     {"id": "df-08662578ISYEXAMPLE",
 *      "name": "MySecondPipeline"}
 *   ]
 * }</response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, ListPipelinesCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, ListPipelinesCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new ListPipelinesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelinesCommandInput} for command's `input` shape.
 * @see {@link ListPipelinesCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class ListPipelinesCommand extends $Command<
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
  DataPipelineClientResolvedConfig
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

  constructor(readonly input: ListPipelinesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPipelinesCommandInput, ListPipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListPipelinesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "ListPipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListPipelinesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListPipelinesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListPipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPipelinesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPipelinesCommandOutput> {
    return deserializeAws_json1_1ListPipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
