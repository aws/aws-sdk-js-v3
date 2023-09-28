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

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import {
  GetModelInvocationLoggingConfigurationRequest,
  GetModelInvocationLoggingConfigurationResponse,
} from "../models/models_0";
import {
  de_GetModelInvocationLoggingConfigurationCommand,
  se_GetModelInvocationLoggingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetModelInvocationLoggingConfigurationCommand}.
 */
export interface GetModelInvocationLoggingConfigurationCommandInput
  extends GetModelInvocationLoggingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetModelInvocationLoggingConfigurationCommand}.
 */
export interface GetModelInvocationLoggingConfigurationCommandOutput
  extends GetModelInvocationLoggingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Get the current configuration values for model invocation logging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetModelInvocationLoggingConfigurationCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetModelInvocationLoggingConfigurationCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = {};
 * const command = new GetModelInvocationLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetModelInvocationLoggingConfigurationResponse
 * //   loggingConfig: { // LoggingConfig
 * //     cloudWatchConfig: { // CloudWatchConfig
 * //       logGroupName: "STRING_VALUE", // required
 * //       roleArn: "STRING_VALUE", // required
 * //       largeDataDeliveryS3Config: { // S3Config
 * //         bucketName: "STRING_VALUE", // required
 * //         keyPrefix: "STRING_VALUE",
 * //       },
 * //     },
 * //     s3Config: {
 * //       bucketName: "STRING_VALUE", // required
 * //       keyPrefix: "STRING_VALUE",
 * //     },
 * //     textDataDeliveryEnabled: true || false,
 * //     imageDataDeliveryEnabled: true || false,
 * //     embeddingDataDeliveryEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetModelInvocationLoggingConfigurationCommandInput - {@link GetModelInvocationLoggingConfigurationCommandInput}
 * @returns {@link GetModelInvocationLoggingConfigurationCommandOutput}
 * @see {@link GetModelInvocationLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetModelInvocationLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class GetModelInvocationLoggingConfigurationCommand extends $Command<
  GetModelInvocationLoggingConfigurationCommandInput,
  GetModelInvocationLoggingConfigurationCommandOutput,
  BedrockClientResolvedConfig
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
  constructor(readonly input: GetModelInvocationLoggingConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetModelInvocationLoggingConfigurationCommandInput, GetModelInvocationLoggingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetModelInvocationLoggingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "GetModelInvocationLoggingConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "GetModelInvocationLoggingConfiguration",
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
    input: GetModelInvocationLoggingConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetModelInvocationLoggingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetModelInvocationLoggingConfigurationCommandOutput> {
    return de_GetModelInvocationLoggingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
