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
import { GetAudienceGenerationJobRequest, GetAudienceGenerationJobResponse } from "../models/models_0";
import { de_GetAudienceGenerationJobCommand, se_GetAudienceGenerationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetAudienceGenerationJobCommand}.
 */
export interface GetAudienceGenerationJobCommandInput extends GetAudienceGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetAudienceGenerationJobCommand}.
 */
export interface GetAudienceGenerationJobCommandOutput extends GetAudienceGenerationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an audience generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetAudienceGenerationJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetAudienceGenerationJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetAudienceGenerationJobRequest
 *   audienceGenerationJobArn: "STRING_VALUE", // required
 * };
 * const command = new GetAudienceGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetAudienceGenerationJobResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   audienceGenerationJobArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * //   seedAudience: { // AudienceGenerationJobDataSource
 * //     dataSource: { // S3ConfigMap
 * //       s3Uri: "STRING_VALUE", // required
 * //     },
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   includeSeedInOutput: true || false,
 * //   collaborationId: "STRING_VALUE",
 * //   metrics: { // AudienceQualityMetrics
 * //     relevanceMetrics: [ // RelevanceMetrics // required
 * //       { // RelevanceMetric
 * //         audienceSize: { // AudienceSize
 * //           type: "ABSOLUTE" || "PERCENTAGE", // required
 * //           value: Number("int"), // required
 * //         },
 * //         score: Number("double"),
 * //       },
 * //     ],
 * //   },
 * //   startedBy: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAudienceGenerationJobCommandInput - {@link GetAudienceGenerationJobCommandInput}
 * @returns {@link GetAudienceGenerationJobCommandOutput}
 * @see {@link GetAudienceGenerationJobCommandInput} for command's `input` shape.
 * @see {@link GetAudienceGenerationJobCommandOutput} for command's `response` shape.
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
export class GetAudienceGenerationJobCommand extends $Command<
  GetAudienceGenerationJobCommandInput,
  GetAudienceGenerationJobCommandOutput,
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
  constructor(readonly input: GetAudienceGenerationJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsMLClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetAudienceGenerationJobCommandInput, GetAudienceGenerationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetAudienceGenerationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsMLClient";
    const commandName = "GetAudienceGenerationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSStarkControlService",
        operation: "GetAudienceGenerationJob",
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
  private serialize(input: GetAudienceGenerationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetAudienceGenerationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAudienceGenerationJobCommandOutput> {
    return de_GetAudienceGenerationJobCommand(output, context);
  }
}
