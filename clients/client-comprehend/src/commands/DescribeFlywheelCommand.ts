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
import { DescribeFlywheelRequest, DescribeFlywheelResponse } from "../models/models_0";
import { de_DescribeFlywheelCommand, se_DescribeFlywheelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlywheelCommand}.
 */
export interface DescribeFlywheelCommandInput extends DescribeFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlywheelCommand}.
 */
export interface DescribeFlywheelCommandOutput extends DescribeFlywheelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides configuration information about the flywheel. For more information about flywheels, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/flywheels-about.html">
 *       Flywheel overview</a> in the <i>Amazon Comprehend Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, DescribeFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, DescribeFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // DescribeFlywheelRequest
 *   FlywheelArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlywheelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlywheelResponse
 * //   FlywheelProperties: { // FlywheelProperties
 * //     FlywheelArn: "STRING_VALUE",
 * //     ActiveModelArn: "STRING_VALUE",
 * //     DataAccessRoleArn: "STRING_VALUE",
 * //     TaskConfig: { // TaskConfig
 * //       LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
 * //       DocumentClassificationConfig: { // DocumentClassificationConfig
 * //         Mode: "MULTI_CLASS" || "MULTI_LABEL", // required
 * //         Labels: [ // LabelsList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       EntityRecognitionConfig: { // EntityRecognitionConfig
 * //         EntityTypes: [ // EntityTypesList // required
 * //           { // EntityTypesListItem
 * //             Type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     DataLakeS3Uri: "STRING_VALUE",
 * //     DataSecurityConfig: { // DataSecurityConfig
 * //       ModelKmsKeyId: "STRING_VALUE",
 * //       VolumeKmsKeyId: "STRING_VALUE",
 * //       DataLakeKmsKeyId: "STRING_VALUE",
 * //       VpcConfig: { // VpcConfig
 * //         SecurityGroupIds: [ // SecurityGroupIds // required
 * //           "STRING_VALUE",
 * //         ],
 * //         Subnets: [ // Subnets // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     Status: "CREATING" || "ACTIVE" || "UPDATING" || "DELETING" || "FAILED",
 * //     ModelType: "DOCUMENT_CLASSIFIER" || "ENTITY_RECOGNIZER",
 * //     Message: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LatestFlywheelIteration: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlywheelCommandInput - {@link DescribeFlywheelCommandInput}
 * @returns {@link DescribeFlywheelCommandOutput}
 * @see {@link DescribeFlywheelCommandInput} for command's `input` shape.
 * @see {@link DescribeFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ComprehendServiceException}
 * <p>Base exception class for all service exceptions from Comprehend service.</p>
 *
 */
export class DescribeFlywheelCommand extends $Command<
  DescribeFlywheelCommandInput,
  DescribeFlywheelCommandOutput,
  ComprehendClientResolvedConfig
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
  constructor(readonly input: DescribeFlywheelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ComprehendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlywheelCommandInput, DescribeFlywheelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlywheelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "DescribeFlywheelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "DescribeFlywheel",
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
  private serialize(input: DescribeFlywheelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFlywheelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFlywheelCommandOutput> {
    return de_DescribeFlywheelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
