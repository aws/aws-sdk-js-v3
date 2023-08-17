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

import { UpdateRecommenderConfigurationRequest, UpdateRecommenderConfigurationResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_UpdateRecommenderConfigurationCommand,
  se_UpdateRecommenderConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateRecommenderConfigurationCommand}.
 */
export interface UpdateRecommenderConfigurationCommandInput extends UpdateRecommenderConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRecommenderConfigurationCommand}.
 */
export interface UpdateRecommenderConfigurationCommandOutput
  extends UpdateRecommenderConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Updates an Amazon Pinpoint configuration for a recommender model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, UpdateRecommenderConfigurationCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, UpdateRecommenderConfigurationCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // UpdateRecommenderConfigurationRequest
 *   RecommenderId: "STRING_VALUE", // required
 *   UpdateRecommenderConfiguration: { // UpdateRecommenderConfigurationShape
 *     Attributes: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     Description: "STRING_VALUE",
 *     Name: "STRING_VALUE",
 *     RecommendationProviderIdType: "STRING_VALUE",
 *     RecommendationProviderRoleArn: "STRING_VALUE", // required
 *     RecommendationProviderUri: "STRING_VALUE", // required
 *     RecommendationTransformerUri: "STRING_VALUE",
 *     RecommendationsDisplayName: "STRING_VALUE",
 *     RecommendationsPerMessage: Number("int"),
 *   },
 * };
 * const command = new UpdateRecommenderConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRecommenderConfigurationResponse
 * //   RecommenderConfigurationResponse: { // RecommenderConfigurationResponse
 * //     Attributes: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     CreationDate: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE",
 * //     RecommendationProviderIdType: "STRING_VALUE",
 * //     RecommendationProviderRoleArn: "STRING_VALUE", // required
 * //     RecommendationProviderUri: "STRING_VALUE", // required
 * //     RecommendationTransformerUri: "STRING_VALUE",
 * //     RecommendationsDisplayName: "STRING_VALUE",
 * //     RecommendationsPerMessage: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRecommenderConfigurationCommandInput - {@link UpdateRecommenderConfigurationCommandInput}
 * @returns {@link UpdateRecommenderConfigurationCommandOutput}
 * @see {@link UpdateRecommenderConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateRecommenderConfigurationCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 */
export class UpdateRecommenderConfigurationCommand extends $Command<
  UpdateRecommenderConfigurationCommandInput,
  UpdateRecommenderConfigurationCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: UpdateRecommenderConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateRecommenderConfigurationCommandInput, UpdateRecommenderConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateRecommenderConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "UpdateRecommenderConfigurationCommand";
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
  private serialize(
    input: UpdateRecommenderConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateRecommenderConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateRecommenderConfigurationCommandOutput> {
    return de_UpdateRecommenderConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
