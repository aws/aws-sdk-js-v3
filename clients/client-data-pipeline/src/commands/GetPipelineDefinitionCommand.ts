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
import { GetPipelineDefinitionInput, GetPipelineDefinitionOutput } from "../models/models_0";
import { de_GetPipelineDefinitionCommand, se_GetPipelineDefinitionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPipelineDefinitionCommand}.
 */
export interface GetPipelineDefinitionCommandInput extends GetPipelineDefinitionInput {}
/**
 * @public
 *
 * The output of {@link GetPipelineDefinitionCommand}.
 */
export interface GetPipelineDefinitionCommandOutput extends GetPipelineDefinitionOutput, __MetadataBearer {}

/**
 * @public
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
 * \{"pipelineId": "df-06372391ZG65EXAMPLE"\}
 *
 *             </request>
 *             <response>
 *
 * x-amzn-RequestId: e28309e5-0776-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 890
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"pipelineObjects":
 *   [
 *     \{"fields":
 *       [
 *         \{"key": "workerGroup",
 *          "stringValue": "workerGroup"\}
 *       ],
 *      "id": "Default",
 *      "name": "Default"\},
 *     \{"fields":
 *       [
 *         \{"key": "startDateTime",
 *          "stringValue": "2012-09-25T17:00:00"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-09-25T18:00:00"\}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"\},
 *     \{"fields":
 *       [
 *         \{"key": "schedule",
 *          "refValue": "Schedule"\},
 *         \{"key": "command",
 *          "stringValue": "echo hello"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "type",
 *          "stringValue": "ShellCommandActivity"\}
 *       ],
 *      "id": "SayHello",
 *      "name": "SayHello"\}
 *   ]
 * \}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, GetPipelineDefinitionCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, GetPipelineDefinitionCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const input = { // GetPipelineDefinitionInput
 *   pipelineId: "STRING_VALUE", // required
 *   version: "STRING_VALUE",
 * };
 * const command = new GetPipelineDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetPipelineDefinitionOutput
 * //   pipelineObjects: [ // PipelineObjectList
 * //     { // PipelineObject
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fields: [ // fieldList // required
 * //         { // Field
 * //           key: "STRING_VALUE", // required
 * //           stringValue: "STRING_VALUE",
 * //           refValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   parameterObjects: [ // ParameterObjectList
 * //     { // ParameterObject
 * //       id: "STRING_VALUE", // required
 * //       attributes: [ // ParameterAttributeList // required
 * //         { // ParameterAttribute
 * //           key: "STRING_VALUE", // required
 * //           stringValue: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   parameterValues: [ // ParameterValueList
 * //     { // ParameterValue
 * //       id: "STRING_VALUE", // required
 * //       stringValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPipelineDefinitionCommandInput - {@link GetPipelineDefinitionCommandInput}
 * @returns {@link GetPipelineDefinitionCommandOutput}
 * @see {@link GetPipelineDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetPipelineDefinitionCommandOutput} for command's `response` shape.
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataPipeline",
        operation: "GetPipelineDefinition",
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
  private serialize(input: GetPipelineDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPipelineDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineDefinitionCommandOutput> {
    return de_GetPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
