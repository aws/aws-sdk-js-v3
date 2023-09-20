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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformRequest, GetMLTransformResponse } from "../models/models_1";
import { de_GetMLTransformCommand, se_GetMLTransformCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMLTransformCommand}.
 */
export interface GetMLTransformCommandInput extends GetMLTransformRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTransformCommand}.
 */
export interface GetMLTransformCommandOutput extends GetMLTransformResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an Glue machine learning transform artifact and all its corresponding metadata.
 *       Machine learning transforms are a special type of transform that use machine learning to learn
 *       the details of the transformation to be performed by learning from examples provided by
 *       humans. These transformations are then saved by Glue. You can retrieve their metadata by
 *       calling <code>GetMLTransform</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetMLTransformRequest
 *   TransformId: "STRING_VALUE", // required
 * };
 * const command = new GetMLTransformCommand(input);
 * const response = await client.send(command);
 * // { // GetMLTransformResponse
 * //   TransformId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Status: "NOT_READY" || "READY" || "DELETING",
 * //   CreatedOn: new Date("TIMESTAMP"),
 * //   LastModifiedOn: new Date("TIMESTAMP"),
 * //   InputRecordTables: [ // GlueTables
 * //     { // GlueTable
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       CatalogId: "STRING_VALUE",
 * //       ConnectionName: "STRING_VALUE",
 * //       AdditionalOptions: { // GlueTableAdditionalOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Parameters: { // TransformParameters
 * //     TransformType: "FIND_MATCHES", // required
 * //     FindMatchesParameters: { // FindMatchesParameters
 * //       PrimaryKeyColumnName: "STRING_VALUE",
 * //       PrecisionRecallTradeoff: Number("double"),
 * //       AccuracyCostTradeoff: Number("double"),
 * //       EnforceProvidedLabels: true || false,
 * //     },
 * //   },
 * //   EvaluationMetrics: { // EvaluationMetrics
 * //     TransformType: "FIND_MATCHES", // required
 * //     FindMatchesMetrics: { // FindMatchesMetrics
 * //       AreaUnderPRCurve: Number("double"),
 * //       Precision: Number("double"),
 * //       Recall: Number("double"),
 * //       F1: Number("double"),
 * //       ConfusionMatrix: { // ConfusionMatrix
 * //         NumTruePositives: Number("long"),
 * //         NumFalsePositives: Number("long"),
 * //         NumTrueNegatives: Number("long"),
 * //         NumFalseNegatives: Number("long"),
 * //       },
 * //       ColumnImportances: [ // ColumnImportanceList
 * //         { // ColumnImportance
 * //           ColumnName: "STRING_VALUE",
 * //           Importance: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   LabelCount: Number("int"),
 * //   Schema: [ // TransformSchema
 * //     { // SchemaColumn
 * //       Name: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Role: "STRING_VALUE",
 * //   GlueVersion: "STRING_VALUE",
 * //   MaxCapacity: Number("double"),
 * //   WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //   NumberOfWorkers: Number("int"),
 * //   Timeout: Number("int"),
 * //   MaxRetries: Number("int"),
 * //   TransformEncryption: { // TransformEncryption
 * //     MlUserDataEncryption: { // MLUserDataEncryption
 * //       MlUserDataEncryptionMode: "DISABLED" || "SSE-KMS", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     TaskRunSecurityConfigurationName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMLTransformCommandInput - {@link GetMLTransformCommandInput}
 * @returns {@link GetMLTransformCommandOutput}
 * @see {@link GetMLTransformCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetMLTransformCommand extends $Command<
  GetMLTransformCommandInput,
  GetMLTransformCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetMLTransformCommandInput) {
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
  ): Handler<GetMLTransformCommandInput, GetMLTransformCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMLTransformCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTransformCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetMLTransform",
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
  private serialize(input: GetMLTransformCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMLTransformCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTransformCommandOutput> {
    return de_GetMLTransformCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
