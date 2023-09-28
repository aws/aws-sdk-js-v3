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
import { ListFoundationModelsRequest, ListFoundationModelsResponse } from "../models/models_0";
import { de_ListFoundationModelsCommand, se_ListFoundationModelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFoundationModelsCommand}.
 */
export interface ListFoundationModelsCommandInput extends ListFoundationModelsRequest {}
/**
 * @public
 *
 * The output of {@link ListFoundationModelsCommand}.
 */
export interface ListFoundationModelsCommandOutput extends ListFoundationModelsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List of Bedrock foundation models that you can use. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/foundation-models.html">Foundation models</a> in the Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, ListFoundationModelsCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, ListFoundationModelsCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // ListFoundationModelsRequest
 *   byProvider: "STRING_VALUE",
 *   byCustomizationType: "FINE_TUNING",
 *   byOutputModality: "TEXT" || "IMAGE" || "EMBEDDING",
 *   byInferenceType: "ON_DEMAND" || "PROVISIONED",
 * };
 * const command = new ListFoundationModelsCommand(input);
 * const response = await client.send(command);
 * // { // ListFoundationModelsResponse
 * //   modelSummaries: [ // FoundationModelSummaryList
 * //     { // FoundationModelSummary
 * //       modelArn: "STRING_VALUE", // required
 * //       modelId: "STRING_VALUE", // required
 * //       modelName: "STRING_VALUE",
 * //       providerName: "STRING_VALUE",
 * //       inputModalities: [ // ModelModalityList
 * //         "TEXT" || "IMAGE" || "EMBEDDING",
 * //       ],
 * //       outputModalities: [
 * //         "TEXT" || "IMAGE" || "EMBEDDING",
 * //       ],
 * //       responseStreamingSupported: true || false,
 * //       customizationsSupported: [ // ModelCustomizationList
 * //         "FINE_TUNING",
 * //       ],
 * //       inferenceTypesSupported: [ // InferenceTypeList
 * //         "ON_DEMAND" || "PROVISIONED",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFoundationModelsCommandInput - {@link ListFoundationModelsCommandInput}
 * @returns {@link ListFoundationModelsCommandOutput}
 * @see {@link ListFoundationModelsCommandInput} for command's `input` shape.
 * @see {@link ListFoundationModelsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class ListFoundationModelsCommand extends $Command<
  ListFoundationModelsCommandInput,
  ListFoundationModelsCommandOutput,
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
  constructor(readonly input: ListFoundationModelsCommandInput) {
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
  ): Handler<ListFoundationModelsCommandInput, ListFoundationModelsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFoundationModelsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "ListFoundationModelsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "ListFoundationModels",
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
  private serialize(input: ListFoundationModelsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFoundationModelsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFoundationModelsCommandOutput> {
    return de_ListFoundationModelsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
