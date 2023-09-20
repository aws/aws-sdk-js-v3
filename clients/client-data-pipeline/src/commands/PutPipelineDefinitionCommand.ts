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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { PutPipelineDefinitionInput, PutPipelineDefinitionOutput } from "../models/models_0";
import { de_PutPipelineDefinitionCommand, se_PutPipelineDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutPipelineDefinitionCommand}.
 */
export interface PutPipelineDefinitionCommandInput extends PutPipelineDefinitionInput {}
/**
 * @public
 *
 * The output of {@link PutPipelineDefinitionCommand}.
 */
export interface PutPipelineDefinitionCommandOutput extends PutPipelineDefinitionOutput, __MetadataBearer {}

/**
 * @public
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
 * \{"pipelineId": "df-0937003356ZJEXAMPLE",
 *  "pipelineObjects":
 *   [
 *    \{"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         \{"key": "workerGroup",
 *          "stringValue": "workerGroup"\}
 *       ]
 *     \},
 *     \{"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        \{"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"\}
 *       ]
 *     \},
 *     \{"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         \{"key": "type",
 *          "stringValue": "ShellCommandActivity"\},
 *         \{"key": "command",
 *          "stringValue": "echo hello"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "schedule",
 *          "refValue": "Schedule"\}
 *       ]
 *     \}
 *   ]
 * \}
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
 * \{"errored": false\}
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
 * \{"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "pipelineObjects":
 *   [
 *     \{"id": "Default",
 *      "name": "Default",
 *      "fields":
 *       [
 *         \{"key": "workerGroup",
 *          "stringValue": ""\}
 *       ]
 *     \},
 *     \{"id": "Schedule",
 *      "name": "Schedule",
 *      "fields":
 *       [
 *        \{"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"\}
 *       ]
 *     \},
 *     \{"id": "SayHello",
 *      "name": "SayHello",
 *      "fields":
 *       [
 *         \{"key": "type",
 *          "stringValue": "ShellCommandActivity"\},
 *         \{"key": "command",
 *          "stringValue": "echo hello"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "schedule",
 *          "refValue": "Schedule"\}
 *
 *       ]
 *     \}
 *   ]
 * \}
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
 * \{"__type": "com.amazon.setl.webservice#InvalidRequestException",
 *  "message": "Pipeline definition has errors: Could not save the pipeline definition due to FATAL errors: [com.amazon.setl.webservice.ValidationError@108d7ea9] Please call Validate to validate your pipeline"\}
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
 * const input = { // PutPipelineDefinitionInput
 *   pipelineId: "STRING_VALUE", // required
 *   pipelineObjects: [ // PipelineObjectList // required
 *     { // PipelineObject
 *       id: "STRING_VALUE", // required
 *       name: "STRING_VALUE", // required
 *       fields: [ // fieldList // required
 *         { // Field
 *           key: "STRING_VALUE", // required
 *           stringValue: "STRING_VALUE",
 *           refValue: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   parameterObjects: [ // ParameterObjectList
 *     { // ParameterObject
 *       id: "STRING_VALUE", // required
 *       attributes: [ // ParameterAttributeList // required
 *         { // ParameterAttribute
 *           key: "STRING_VALUE", // required
 *           stringValue: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   parameterValues: [ // ParameterValueList
 *     { // ParameterValue
 *       id: "STRING_VALUE", // required
 *       stringValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutPipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // PutPipelineDefinitionOutput
 * //   validationErrors: [ // ValidationErrors
 * //     { // ValidationError
 * //       id: "STRING_VALUE",
 * //       errors: [ // validationMessages
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   validationWarnings: [ // ValidationWarnings
 * //     { // ValidationWarning
 * //       id: "STRING_VALUE",
 * //       warnings: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   errored: true || false, // required
 * // };
 *
 * ```
 *
 * @param PutPipelineDefinitionCommandInput - {@link PutPipelineDefinitionCommandInput}
 * @returns {@link PutPipelineDefinitionCommandOutput}
 * @see {@link PutPipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link PutPipelineDefinitionCommandOutput} for command's `response` shape.
 * @see {@link DataPipelineClientResolvedConfig | config} for DataPipelineClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request was not valid. Verify that your request was properly formatted, that the signature was generated with the correct credentials, and that you haven't exceeded any of the service limits for your account.</p>
 *
 * @throws {@link PipelineDeletedException} (client fault)
 *  <p>The specified pipeline has been deleted.</p>
 *
 * @throws {@link PipelineNotFoundException} (client fault)
 *  <p>The specified pipeline was not found. Verify that you used the correct user and account identifiers.</p>
 *
 * @throws {@link DataPipelineServiceException}
 * <p>Base exception class for all service exceptions from DataPipeline service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataPipeline",
        operation: "PutPipelineDefinition",
      },
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
  private serialize(input: PutPipelineDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutPipelineDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPipelineDefinitionCommandOutput> {
    return de_PutPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
