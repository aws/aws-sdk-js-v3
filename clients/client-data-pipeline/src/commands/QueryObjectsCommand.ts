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
  QueryObjectsInput,
  QueryObjectsInputFilterSensitiveLog,
  QueryObjectsOutput,
  QueryObjectsOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1QueryObjectsCommand,
  serializeAws_json1_1QueryObjectsCommand,
} from "../protocols/Aws_json1_1";

export interface QueryObjectsCommandInput extends QueryObjectsInput {}
export interface QueryObjectsCommandOutput extends QueryObjectsOutput, __MetadataBearer {}

/**
 * <p>Queries the specified pipeline for the names of objects that match the specified set of conditions.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.QueryObjects
 * Content-Length: 123
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "query":
 *   {"selectors":
 *     [
 *     ]
 *   },
 *  "sphere": "INSTANCE",
 *  "marker": "",
 *  "limit": 10}
 *
 *             </request>
 *
 *
 *             <response>
 *
 * x-amzn-RequestId: 14d704c1-0775-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 72
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"hasMoreResults": false,
 *  "ids":
 *   ["@SayHello_1_2012-09-25T17:00:00"]
 * }
 *          </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, QueryObjectsCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, QueryObjectsCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new QueryObjectsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link QueryObjectsCommandInput} for command's `input` shape.
 * @see {@link QueryObjectsCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class QueryObjectsCommand extends $Command<
  QueryObjectsCommandInput,
  QueryObjectsCommandOutput,
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

  constructor(readonly input: QueryObjectsCommandInput) {
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
  ): Handler<QueryObjectsCommandInput, QueryObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, QueryObjectsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "QueryObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: QueryObjectsInputFilterSensitiveLog,
      outputFilterSensitiveLog: QueryObjectsOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: QueryObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1QueryObjectsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<QueryObjectsCommandOutput> {
    return deserializeAws_json1_1QueryObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
