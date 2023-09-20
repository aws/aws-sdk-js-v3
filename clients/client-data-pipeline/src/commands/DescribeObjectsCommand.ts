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
import { DescribeObjectsInput, DescribeObjectsOutput } from "../models/models_0";
import { de_DescribeObjectsCommand, se_DescribeObjectsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeObjectsCommand}.
 */
export interface DescribeObjectsCommandInput extends DescribeObjectsInput {}
/**
 * @public
 *
 * The output of {@link DescribeObjectsCommand}.
 */
export interface DescribeObjectsCommandOutput extends DescribeObjectsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the object definitions for a set of objects associated with the pipeline. Object definitions are composed of
 *             a set of fields that define the properties of the object.</p>
 *
 *         <examples>
 *             <request>
 *
 * POST / HTTP/1.1
 * Content-Type: application/x-amz-json-1.1
 * X-Amz-Target: DataPipeline.DescribeObjects
 * Content-Length: 98
 * Host: datapipeline.us-east-1.amazonaws.com
 * X-Amz-Date: Mon, 12 Nov 2012 17:49:52 GMT
 * Authorization: AuthParams
 *
 * \{"pipelineId": "df-06372391ZG65EXAMPLE",
 *  "objectIds":
 *   ["Schedule"],
 *  "evaluateExpressions": true\}
 *
 *             </request>
 *
 *             <response>
 *
 * x-amzn-RequestId: 4c18ea5d-0777-11e2-8a14-21bb8a1f50ef
 * Content-Type: application/x-amz-json-1.1
 * Content-Length: 1488
 * Date: Mon, 12 Nov 2012 17:50:53 GMT
 *
 * \{"hasMoreResults": false,
 *  "pipelineObjects":
 *   [
 *     \{"fields":
 *       [
 *         \{"key": "startDateTime",
 *          "stringValue": "2012-12-12T00:00:00"\},
 *         \{"key": "parent",
 *          "refValue": "Default"\},
 *         \{"key": "@sphere",
 *          "stringValue": "COMPONENT"\},
 *         \{"key": "type",
 *          "stringValue": "Schedule"\},
 *         \{"key": "period",
 *          "stringValue": "1 hour"\},
 *         \{"key": "endDateTime",
 *          "stringValue": "2012-12-21T18:00:00"\},
 *         \{"key": "@version",
 *          "stringValue": "1"\},
 *         \{"key": "@status",
 *          "stringValue": "PENDING"\},
 *         \{"key": "@pipelineId",
 *          "stringValue": "df-06372391ZG65EXAMPLE"\}
 *       ],
 *      "id": "Schedule",
 *      "name": "Schedule"\}
 *   ]
 * \}
 *
 *             </response>
 *         </examples>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataPipelineClient, DescribeObjectsCommand } from "@aws-sdk/client-data-pipeline"; // ES Modules import
 * // const { DataPipelineClient, DescribeObjectsCommand } = require("@aws-sdk/client-data-pipeline"); // CommonJS import
 * const client = new DataPipelineClient(config);
 * const input = { // DescribeObjectsInput
 *   pipelineId: "STRING_VALUE", // required
 *   objectIds: [ // idList // required
 *     "STRING_VALUE",
 *   ],
 *   evaluateExpressions: true || false,
 *   marker: "STRING_VALUE",
 * };
 * const command = new DescribeObjectsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeObjectsOutput
 * //   pipelineObjects: [ // PipelineObjectList // required
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
 * //   marker: "STRING_VALUE",
 * //   hasMoreResults: true || false,
 * // };
 *
 * ```
 *
 * @param DescribeObjectsCommandInput - {@link DescribeObjectsCommandInput}
 * @returns {@link DescribeObjectsCommandOutput}
 * @see {@link DescribeObjectsCommandInput} for command's `input` shape.
 * @see {@link DescribeObjectsCommandOutput} for command's `response` shape.
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
export class DescribeObjectsCommand extends $Command<
  DescribeObjectsCommandInput,
  DescribeObjectsCommandOutput,
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
  constructor(readonly input: DescribeObjectsCommandInput) {
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
  ): Handler<DescribeObjectsCommandInput, DescribeObjectsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeObjectsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "DescribeObjectsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataPipeline",
        operation: "DescribeObjects",
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
  private serialize(input: DescribeObjectsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeObjectsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeObjectsCommandOutput> {
    return de_DescribeObjectsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
