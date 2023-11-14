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

import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import {
  DescribeTargetedSentimentDetectionJobRequest,
  DescribeTargetedSentimentDetectionJobResponse,
} from "../models/models_0";
import {
  de_DescribeTargetedSentimentDetectionJobCommand,
  se_DescribeTargetedSentimentDetectionJobCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTargetedSentimentDetectionJobCommand}.
 */
export interface DescribeTargetedSentimentDetectionJobCommandInput
  extends DescribeTargetedSentimentDetectionJobRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTargetedSentimentDetectionJobCommand}.
 */
export interface DescribeTargetedSentimentDetectionJobCommandOutput
  extends DescribeTargetedSentimentDetectionJobResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the properties associated with a targeted sentiment detection job. Use this operation
 *       to get the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeTargetedSentimentDetectionJobCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeTargetedSentimentDetectionJobCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeTargetedSentimentDetectionJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTargetedSentimentDetectionJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTargetedSentimentDetectionJobResponse
 * //   TargetedSentimentDetectionJobProperties: { // TargetedSentimentDetectionJobProperties
 * //     JobId: "STRING_VALUE",
 * //     JobArn: "STRING_VALUE",
 * //     JobName: "STRING_VALUE",
 * //     JobStatus: "SUBMITTED" || "IN_PROGRESS" || "COMPLETED" || "FAILED" || "STOP_REQUESTED" || "STOPPED",
 * //     Message: "STRING_VALUE",
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     EndTime: new Date("TIMESTAMP"),
 * //     InputDataConfig: { // InputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       InputFormat: "ONE_DOC_PER_FILE" || "ONE_DOC_PER_LINE",
 * //       DocumentReaderConfig: { // DocumentReaderConfig
 * //         DocumentReadAction: "TEXTRACT_DETECT_DOCUMENT_TEXT" || "TEXTRACT_ANALYZE_DOCUMENT", // required
 * //         DocumentReadMode: "SERVICE_DEFAULT" || "FORCE_DOCUMENT_READ_ACTION",
 * //         FeatureTypes: [ // ListOfDocumentReadFeatureTypes
 * //           "TABLES" || "FORMS",
 * //         ],
 * //       },
 * //     },
 * //     OutputDataConfig: { // OutputDataConfig
 * //       S3Uri: "STRING_VALUE", // required
 * //       KmsKeyId: "STRING_VALUE",
 * //     },
 * //     LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // SecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTargetedSentimentDetectionJobCommandInput - {@link DescribeTargetedSentimentDetectionJobCommandInput}
 * @returns {@link DescribeTargetedSentimentDetectionJobCommandOutput}
 * @see {@link DescribeTargetedSentimentDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribeTargetedSentimentDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link JobNotFoundException} (client fault)
 *  <p>The specified job was not found. Check the job ID and try again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DescribeTargetedSentimentDetectionJobCommand extends $Command<
  DescribeTargetedSentimentDetectionJobCommandInput,
  DescribeTargetedSentimentDetectionJobCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DescribeTargetedSentimentDetectionJobCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTargetedSentimentDetectionJobCommandInput, DescribeTargetedSentimentDetectionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTargetedSentimentDetectionJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeTargetedSentimentDetectionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DescribeTargetedSentimentDetectionJob",
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
  private serialize(
    input: DescribeTargetedSentimentDetectionJobCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeTargetedSentimentDetectionJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeTargetedSentimentDetectionJobCommandOutput> {
    return de_DescribeTargetedSentimentDetectionJobCommand(output, context);
  }
}
