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
  GetPipelineDefinitionInput,
  GetPipelineDefinitionInputFilterSensitiveLog,
  GetPipelineDefinitionOutput,
  GetPipelineDefinitionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1GetPipelineDefinitionCommand,
  serializeAws_json1_1GetPipelineDefinitionCommand,
} from "../protocols/Aws_json1_1";

export interface GetPipelineDefinitionCommandInput extends GetPipelineDefinitionInput {}
export interface GetPipelineDefinitionCommandOutput extends GetPipelineDefinitionOutput, __MetadataBearer {}

/**
 * <p>Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve
 *             the pipeline definition that you provided using <a>PutPipelineDefinition</a>.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.GetPipelineDefinition
 * Content-Length: 40
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 *
 * {"pipelineId": "df-06372391ZG65EXAMPLE"}
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: e28309e5-0776-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 890
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * {"pipelineObjects":
 *   [
 *     {"fields":
 *       [
 *         {"key": "workerGroup",
 *          "stringValue": "workerGroup"}
 *       ],
 *      "id": "Default",
 *      "name": "Default"},
 *     {"fields":
 *       [
 *         {"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"},
 *         {"key": "type",
 *          "stringValue": "Schedule"},
 *         {"key": "period",
 *          "stringValue": "1 hour"},
 *         {"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"},
 *     {"fields":
 *       [
 *         {"key": "schedule",
 *          "refValue": "Schedule"},
 *         {"key": "command",
 *          "stringValue": "echo hello"},
 *         {"key": "parent",
 *          "refValue": "Default"},
 *         {"key": "type",
 *          "stringValue": "ShellCommandActivity"}
 *       ],
 *      "id": "SayHello",
 *      "name": "SayHello"}
 *   ]
 * }
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, GetPipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, GetPipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const command = new GetPipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetPipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 */
export class GetPipelineDefinitionCommand extends $Command<
  GetPipelineDefinitionCommandInput,
  GetPipelineDefinitionCommandOutput,
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

  constructor(readonly input: GetPipelineDefinitionCommandInput) {
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
  ): Handler<GetPipelineDefinitionCommandInput, GetPipelineDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPipelineDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "GetPipelineDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPipelineDefinitionInputFilterSensitiveLog,
      outputFilterSensitiveLog: GetPipelineDefinitionOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPipelineDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPipelineDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineDefinitionCommandOutput> {
    return deserializeAws_json1_1GetPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
