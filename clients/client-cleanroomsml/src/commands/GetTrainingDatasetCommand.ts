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

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { GetTrainingDatasetRequest, GetTrainingDatasetResponse } from "../models/models_0";
import { de_GetTrainingDatasetCommand, se_GetTrainingDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetTrainingDatasetCommand}.
 */
export interface GetTrainingDatasetCommandInput extends GetTrainingDatasetRequest {}
/**
 * @public
 *
 * The output of {@link GetTrainingDatasetCommand}.
 */
export interface GetTrainingDatasetCommandOutput extends GetTrainingDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a training dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetTrainingDatasetCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetTrainingDatasetCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetTrainingDatasetRequest
 *   trainingDatasetArn: "STRING_VALUE", // required
 * };
 * const command = new GetTrainingDatasetCommand(input);
 * const response = await client.send(command);
 * // { // GetTrainingDatasetResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   trainingDatasetArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   trainingData: [ // DatasetList // required
 * //     { // Dataset
 * //       type: "INTERACTIONS", // required
 * //       inputConfig: { // DatasetInputConfig
 * //         schema: [ // DatasetSchemaList // required
 * //           { // ColumnSchema
 * //             columnName: "STRING_VALUE", // required
 * //             columnTypes: [ // ColumnTypeList // required
 * //               "USER_ID" || "ITEM_ID" || "TIMESTAMP" || "CATEGORICAL_FEATURE" || "NUMERICAL_FEATURE",
 * //             ],
 * //           },
 * //         ],
 * //         dataSource: { // DataSource
 * //           glueDataSource: { // GlueDataSource
 * //             tableName: "STRING_VALUE", // required
 * //             databaseName: "STRING_VALUE", // required
 * //             catalogId: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   status: "ACTIVE", // required
 * //   roleArn: "STRING_VALUE", // required
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrainingDatasetCommandInput - {@link GetTrainingDatasetCommandInput}
 * @returns {@link GetTrainingDatasetCommandOutput}
 * @see {@link GetTrainingDatasetCommandInput} for command's `input` shape.
 * @see {@link GetTrainingDatasetCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 */
export class GetTrainingDatasetCommand extends $Command<
  GetTrainingDatasetCommandInput,
  GetTrainingDatasetCommandOutput,
  CleanRoomsMLClientResolvedConfig
> {
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
  constructor(readonly input: GetTrainingDatasetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetTrainingDatasetCommandInput, GetTrainingDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetTrainingDatasetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "GetTrainingDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "GetTrainingDataset",
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
  private serialize(input: GetTrainingDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetTrainingDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetTrainingDatasetCommandOutput> {
    return de_GetTrainingDatasetCommand(output, context);
  }
}
