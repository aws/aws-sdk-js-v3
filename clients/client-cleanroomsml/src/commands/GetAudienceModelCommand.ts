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
import { GetAudienceModelRequest, GetAudienceModelResponse } from "../models/models_0";
import { de_GetAudienceModelCommand, se_GetAudienceModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAudienceModelCommand}.
 */
export interface GetAudienceModelCommandInput extends GetAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link GetAudienceModelCommand}.
 */
export interface GetAudienceModelCommandOutput extends GetAudienceModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an audience model</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetAudienceModelRequest
 *   audienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new GetAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // GetAudienceModelResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   trainingDataStartTime: new Date("TIMESTAMP"),
 * //   trainingDataEndTime: new Date("TIMESTAMP"),
 * //   audienceModelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   trainingDatasetArn: "STRING_VALUE", // required
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   metrics: [ // AudienceModelMetrics
 * //     { // AudienceModelMetric
 * //       type: "NORMALIZED_DISCOUNTED_CUMULATIVE_GAIN" || "MEAN_RECIPROCAL_RANK" || "PRECISION" || "RECALL", // required
 * //       forTopKItemPredictions: Number("int"), // required
 * //       value: Number("double"), // required
 * //     },
 * //   ],
 * //   kmsKeyArn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAudienceModelCommandInput - {@link GetAudienceModelCommandInput}
 * @returns {@link GetAudienceModelCommandOutput}
 * @see {@link GetAudienceModelCommandInput} for command's `input` shape.
 * @see {@link GetAudienceModelCommandOutput} for command's `response` shape.
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
export class GetAudienceModelCommand extends $Command<
  GetAudienceModelCommandInput,
  GetAudienceModelCommandOutput,
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
  constructor(readonly input: GetAudienceModelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAudienceModelCommandInput, GetAudienceModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAudienceModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "GetAudienceModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "GetAudienceModel",
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
  private serialize(input: GetAudienceModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAudienceModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAudienceModelCommandOutput> {
    return de_GetAudienceModelCommand(output, context);
  }
}
