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
import { DescribePipelinesInput, DescribePipelinesOutput } from "../models/models_0";
import { de_DescribePipelinesCommand, se_DescribePipelinesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribePipelinesCommand}.
 */
export interface DescribePipelinesCommandInput extends DescribePipelinesInput {}
/**
 * @public
 *
 * The output of {@link DescribePipelinesCommand}.
 */
export interface DescribePipelinesCommandOutput extends DescribePipelinesOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves metadata about one or more pipelines. The information retrieved includes the name of the pipeline, the pipeline identifier,
 *             its current state, and the user account that owns the pipeline. Using account credentials, you can retrieve metadata about pipelines
 *             that you or your IAM users have created. If you are using an IAM user account, you can retrieve metadata about only those pipelines
 *             for which you have read permissions.</p>
 *         <p>To retrieve the full pipeline definition instead of metadata about the pipeline, call <a>GetPipelineDefinition</a>.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribePipelines
 * Content-Length: 70
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineIds":
 *   ["df-08785951KAKJEXAMPLE"]
 * \}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 02870eb7-0736-11e2-af6f-6bc7a6be60d9
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 767
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"pipelineDescriptionList":
 *   [
 *     \{"description": "This is my first pipeline",
 *      "fields":
 *       [
 *         \{"key": "@pipelineState",
 *          "stringValue": "SCHEDULED"\},
 *         \{"key": "description",
 *          "stringValue": "This is my first pipeline"\},
 *         \{"key": "name",
 *          "stringValue": "myPipeline"\},
 *         \{"key": "@creationTime",
 *          "stringValue": "2012-12-13T01:24:06"\},
 *         \{"key": "@id",
 *          "stringValue": "df-0937003356ZJEXAMPLE"\},
 *         \{"key": "@sphere",
 *          "stringValue": "PIPELINE"\},
 *         \{"key": "@version",
 *          "stringValue": "1"\},
 *         \{"key": "@userId",
 *          "stringValue": "924374875933"\},
 *         \{"key": "@accountId",
 *          "stringValue": "924374875933"\},
 *         \{"key": "uniqueId",
 *          "stringValue": "1234567890"\}
 *       ],
 *      "name": "myPipeline",
 *      "pipelineId": "df-0937003356ZJEXAMPLE"\}
 *   ]
 * \}
 * </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DescribePipelinesCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DescribePipelinesCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const input = { // DescribePipelinesInput
 *   pipelineIds: [ // idList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribePipelinesCommand(input);
 * const response = await client.send(command);
 * // { // DescribePipelinesOutput
 * //   pipelineDescriptionList: [ // PipelineDescriptionList // required
 * //     { // PipelineDescription
 * //       pipelineId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fields: [ // fieldList // required
 * //         { // Field
 * //           key: "STRING_VALUE", // required
 * //           stringValue: "STRING_VALUE",
 * //           refValue: "STRING_VALUE",
 * //         },
 * //       ],
 * //       description: "STRING_VALUE",
 * //       tags: [ // tagList
 * //         { // Tag
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePipelinesCommandInput - {@link DescribePipelinesCommandInput}
 * @returns {@link DescribePipelinesCommandOutput}
 * @see {@link DescribePipelinesCommandInput} for command's `input` shape.
 * @see {@link DescribePipelinesCommandOutput} for command's `response` shape.
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
export class DescribePipelinesCommand extends $Command<
  DescribePipelinesCommandInput,
  DescribePipelinesCommandOutput,
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
  constructor(readonly input: DescribePipelinesCommandInput) {
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
  ): Handler<DescribePipelinesCommandInput, DescribePipelinesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribePipelinesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "DescribePipelinesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataPipeline",
        operation: "DescribePipelines",
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
  private serialize(input: DescribePipelinesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribePipelinesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePipelinesCommandOutput> {
    return de_DescribePipelinesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
