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
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetMLTransformsRequest, GetMLTransformsResponse } from "../models/models_1";
import { de_GetMLTransformsCommand, se_GetMLTransformsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMLTransformsCommand}.
 */
export interface GetMLTransformsCommandInput extends GetMLTransformsRequest {}
/**
 * @public
 *
 * The output of {@link GetMLTransformsCommand}.
 */
export interface GetMLTransformsCommandOutput extends GetMLTransformsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets a sortable, filterable list of existing Glue machine learning transforms. Machine
 *       learning transforms are a special type of transform that use machine learning to learn the
 *       details of the transformation to be performed by learning from examples provided by humans.
 *       These transformations are then saved by Glue, and you can retrieve their metadata by
 *       calling <code>GetMLTransforms</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetMLTransformsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // TransformFilterCriteria
 *     Name: "STRING_VALUE",
 *     TransformType: "FIND_MATCHES",
 *     Status: "NOT_READY" || "READY" || "DELETING",
 *     GlueVersion: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     LastModifiedBefore: new Date("TIMESTAMP"),
 *     LastModifiedAfter: new Date("TIMESTAMP"),
 *     Schema: [ // TransformSchema
 *       { // SchemaColumn
 *         Name: "STRING_VALUE",
 *         DataType: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Sort: { // TransformSortCriteria
 *     Column: "NAME" || "TRANSFORM_TYPE" || "STATUS" || "CREATED" || "LAST_MODIFIED", // required
 *     SortDirection: "DESCENDING" || "ASCENDING", // required
 *   },
 * };
 * const command = new GetMLTransformsCommand(input);
 * const response = await client.send(command);
 * // { // GetMLTransformsResponse
 * //   Transforms: [ // TransformList // required
 * //     { // MLTransform
 * //       TransformId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Status: "NOT_READY" || "READY" || "DELETING",
 * //       CreatedOn: new Date("TIMESTAMP"),
 * //       LastModifiedOn: new Date("TIMESTAMP"),
 * //       InputRecordTables: [ // GlueTables
 * //         { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Parameters: { // TransformParameters
 * //         TransformType: "FIND_MATCHES", // required
 * //         FindMatchesParameters: { // FindMatchesParameters
 * //           PrimaryKeyColumnName: "STRING_VALUE",
 * //           PrecisionRecallTradeoff: Number("double"),
 * //           AccuracyCostTradeoff: Number("double"),
 * //           EnforceProvidedLabels: true || false,
 * //         },
 * //       },
 * //       EvaluationMetrics: { // EvaluationMetrics
 * //         TransformType: "FIND_MATCHES", // required
 * //         FindMatchesMetrics: { // FindMatchesMetrics
 * //           AreaUnderPRCurve: Number("double"),
 * //           Precision: Number("double"),
 * //           Recall: Number("double"),
 * //           F1: Number("double"),
 * //           ConfusionMatrix: { // ConfusionMatrix
 * //             NumTruePositives: Number("long"),
 * //             NumFalsePositives: Number("long"),
 * //             NumTrueNegatives: Number("long"),
 * //             NumFalseNegatives: Number("long"),
 * //           },
 * //           ColumnImportances: [ // ColumnImportanceList
 * //             { // ColumnImportance
 * //               ColumnName: "STRING_VALUE",
 * //               Importance: Number("double"),
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       LabelCount: Number("int"),
 * //       Schema: [ // TransformSchema
 * //         { // SchemaColumn
 * //           Name: "STRING_VALUE",
 * //           DataType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Role: "STRING_VALUE",
 * //       GlueVersion: "STRING_VALUE",
 * //       MaxCapacity: Number("double"),
 * //       WorkerType: "Standard" || "G.1X" || "G.2X" || "G.025X" || "G.4X" || "G.8X" || "Z.2X",
 * //       NumberOfWorkers: Number("int"),
 * //       Timeout: Number("int"),
 * //       MaxRetries: Number("int"),
 * //       TransformEncryption: { // TransformEncryption
 * //         MlUserDataEncryption: { // MLUserDataEncryption
 * //           MlUserDataEncryptionMode: "DISABLED" || "SSE-KMS", // required
 * //           KmsKeyId: "STRING_VALUE",
 * //         },
 * //         TaskRunSecurityConfigurationName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMLTransformsCommandInput - {@link GetMLTransformsCommandInput}
 * @returns {@link GetMLTransformsCommandOutput}
 * @see {@link GetMLTransformsCommandInput} for command's `input` shape.
 * @see {@link GetMLTransformsCommandOutput} for command's `response` shape.
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
export class GetMLTransformsCommand extends $Command<
  GetMLTransformsCommandInput,
  GetMLTransformsCommandOutput,
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
  constructor(readonly input: GetMLTransformsCommandInput) {
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
  ): Handler<GetMLTransformsCommandInput, GetMLTransformsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMLTransformsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetMLTransformsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetMLTransformsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMLTransformsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMLTransformsCommandOutput> {
    return de_GetMLTransformsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
