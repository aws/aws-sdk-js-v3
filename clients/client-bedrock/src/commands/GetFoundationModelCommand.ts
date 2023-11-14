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
import { GetFoundationModelRequest, GetFoundationModelResponse } from "../models/models_0";
import { de_GetFoundationModelCommand, se_GetFoundationModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFoundationModelCommand}.
 */
export interface GetFoundationModelCommandInput extends GetFoundationModelRequest {}
/**
 * @public
 *
 * The output of {@link GetFoundationModelCommand}.
 */
export interface GetFoundationModelCommandOutput extends GetFoundationModelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get details about a Bedrock foundation model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, GetFoundationModelCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, GetFoundationModelCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // GetFoundationModelRequest
 *   modelIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetFoundationModelCommand(input);
 * const response = await client.send(command);
 * // { // GetFoundationModelResponse
 * //   modelDetails: { // FoundationModelDetails
 * //     modelArn: "STRING_VALUE", // required
 * //     modelId: "STRING_VALUE", // required
 * //     modelName: "STRING_VALUE",
 * //     providerName: "STRING_VALUE",
 * //     inputModalities: [ // ModelModalityList
 * //       "TEXT" || "IMAGE" || "EMBEDDING",
 * //     ],
 * //     outputModalities: [
 * //       "TEXT" || "IMAGE" || "EMBEDDING",
 * //     ],
 * //     responseStreamingSupported: true || false,
 * //     customizationsSupported: [ // ModelCustomizationList
 * //       "FINE_TUNING",
 * //     ],
 * //     inferenceTypesSupported: [ // InferenceTypeList
 * //       "ON_DEMAND" || "PROVISIONED",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFoundationModelCommandInput - {@link GetFoundationModelCommandInput}
 * @returns {@link GetFoundationModelCommandOutput}
 * @see {@link GetFoundationModelCommandInput} for command's `input` shape.
 * @see {@link GetFoundationModelCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class GetFoundationModelCommand extends $Command<
  GetFoundationModelCommandInput,
  GetFoundationModelCommandOutput,
  BedrockClientResolvedConfig
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
  constructor(readonly input: GetFoundationModelCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetFoundationModelCommandInput, GetFoundationModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFoundationModelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "GetFoundationModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "GetFoundationModel",
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
  private serialize(input: GetFoundationModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFoundationModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFoundationModelCommandOutput> {
    return de_GetFoundationModelCommand(output, context);
  }
}
