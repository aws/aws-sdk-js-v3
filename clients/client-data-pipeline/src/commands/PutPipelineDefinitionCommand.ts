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
  PutPipelineDefinitionInput,
  PutPipelineDefinitionInputFilterSensitiveLog,
  PutPipelineDefinitionOutput,
  PutPipelineDefinitionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1PutPipelineDefinitionCommand,
  serializeAws_json1_1PutPipelineDefinitionCommand,
} from "../protocols/Aws_json1_1";

export interface PutPipelineDefinitionCommandInput extends PutPipelineDefinitionInput {}
export interface PutPipelineDefinitionCommandOutput extends PutPipelineDefinitionOutput, __MetadataBearer {}

/**
 * <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p>
 *         <p>
 *             <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one
 *             of the following three validation errors exists in the pipeline.
 *         </p>
 *         <ol>
 *             <li>An object is missing a name or identifier field.</li>
 *             <li>A string or reference field is empty.</li>
 *             <li>The number of objects in the pipeline exceeds the maximum allowed objects.</li>
 *             <li>The pipeline is in a FINISHED state.</li>
 *         </ol>
 *         <p>
 *             Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action.
 *         </p>
 *         <examples>
 *             <example>
 *                 <name>Example 1</name>
 *                 <description>
 *                     This example sets an valid pipeline configuration and returns success.
 *                 </description>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.PutPipelineDefinition
 * Content-Length: 914
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-0937003356ZJEXAMPLE",
 *  "pipelineObjects":
 *   [
 *    {"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         {"key": "workerGroup",
 *          "stringValue": "workerGroup"}
 *       ]
 *     },
 *     {"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        {"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"}
 *       ]
 *     },
 *     {"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         {"key": "type",
 *          "stringValue": "ShellCommandActivity"},
 *         {"key": "command",
 *          "stringValue": "echo hello"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "schedule",
 *          "refValue": "Schedule"}
 *       ]
 *     }
 *   ]
 * }
 *
 *             </request>
 *             <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: f74afc14-0754-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 18
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"errored": false}
 *
 *
 *             </response>
 *             </example>
 *             <example>
 *                 <name>Example 2</name>
 *                 <description>
 *                     This example sets an invalid pipeline configuration (the value for <code>workerGroup</code> is an empty string) and returns an error message.
 *                 </description>
 *                 <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.PutPipelineDefinition
 * Content-Length: 903
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "pipelineObjects":
 *   [
 *     {"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         {"key": "workerGroup",
 *          "stringValue": ""}
 *       ]
 *     },
 *     {"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        {"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"}
 *       ]
 *     },
 *     {"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         {"key": "type",
 *          "stringValue": "ShellCommandActivity"},
 *         {"key": "command",
 *          "stringValue": "echo hello"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "schedule",
 *          "refValue": "Schedule"}
 *
 *       ]
 *     }
 *   ]
 * }
 *
 *                 </request>
 *                 <response>
 *
 * HTTP/1.1 200
 * x-amzn-RequestId: f74afc14-0754-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 18
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"__type": "com.amazon.setl.webservice#InvalidRequestException",
 *  "message": "Pipeline definition has errors: Could not save the pipeline definition due to FATAL errors: [com.amazon.setl.webservice.ValidationError@108d7ea9] Please call Validate to validate your pipeline"}
 *
 *
 *                 </response>
 *             </example>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, PutPipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, PutPipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new PutPipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutPipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class PutPipelineDefinitionCommand extends $Command<
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput,
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

  constructor(readonly input: PutPipelineDefinitionCommandInput) {
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
  ): Handler<PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutPipelineDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "PutPipelineDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPipelineDefinitionInputFilterSensitiveLog,
      outputFilterSensitiveLog: PutPipelineDefinitionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPipelineDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPipelineDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPipelineDefinitionCommandOutput> {
    return deserializeAws_json1_1PutPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
