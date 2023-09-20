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
import { UpdateFlywheelRequest, UpdateFlywheelResponse } from "../models/models_1";
import { de_UpdateFlywheelCommand, se_UpdateFlywheelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlywheelCommand}.
 */
export interface UpdateFlywheelCommandInput extends UpdateFlywheelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlywheelCommand}.
 */
export interface UpdateFlywheelCommandOutput extends UpdateFlywheelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Update the configuration information for an existing flywheel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, UpdateFlywheelCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, UpdateFlywheelCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const input = { // UpdateFlywheelRequest
 *   FlywheelArn: "STRING_VALUE", // required
 *   ActiveModelArn: "STRING_VALUE",
 *   DataAccessRoleArn: "STRING_VALUE",
 *   DataSecurityConfig: { // UpdateDataSecurityConfig
 *     ModelKmsKeyId: "STRING_VALUE",
 *     VolumeKmsKeyId: "STRING_VALUE",
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // SecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateFlywheelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlywheelResponse
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
 * @param UpdateFlywheelCommandInput - {@link UpdateFlywheelCommandInput}
 * @returns {@link UpdateFlywheelCommandOutput}
 * @see {@link UpdateFlywheelCommandInput} for command's `input` shape.
 * @see {@link UpdateFlywheelCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for ComprehendClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is invalid.</p>
 *
 * @throws {@link KmsKeyValidationException} (client fault)
 *  <p>The KMS customer managed key (CMK) entered cannot be validated. Verify the key and
 *       re-enter it.</p>
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
export class UpdateFlywheelCommand extends $Command<
  UpdateFlywheelCommandInput,
  UpdateFlywheelCommandOutput,
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
  constructor(readonly input: UpdateFlywheelCommandInput) {
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
  ): Handler<UpdateFlywheelCommandInput, UpdateFlywheelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFlywheelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ComprehendClient";
    const commandName = "UpdateFlywheelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Comprehend_20171127",
        operation: "UpdateFlywheel",
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
  private serialize(input: UpdateFlywheelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFlywheelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlywheelCommandOutput> {
    return de_UpdateFlywheelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
