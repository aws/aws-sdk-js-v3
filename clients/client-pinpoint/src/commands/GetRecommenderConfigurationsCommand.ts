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

import { GetRecommenderConfigurationsRequest, GetRecommenderConfigurationsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_GetRecommenderConfigurationsCommand,
  se_GetRecommenderConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetRecommenderConfigurationsCommand}.
 */
export interface GetRecommenderConfigurationsCommandInput extends GetRecommenderConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetRecommenderConfigurationsCommand}.
 */
export interface GetRecommenderConfigurationsCommandOutput
  extends GetRecommenderConfigurationsResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about all the recommender model configurations that are associated with your Amazon Pinpoint account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetRecommenderConfigurationsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetRecommenderConfigurationsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetRecommenderConfigurationsRequest
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetRecommenderConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetRecommenderConfigurationsResponse
 * //   ListRecommenderConfigurationsResponse: { // ListRecommenderConfigurationsResponse
 * //     Item: [ // ListOfRecommenderConfigurationResponse // required
 * //       { // RecommenderConfigurationResponse
 * //         Attributes: { // MapOf__string
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         CreationDate: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE",
 * //         Id: "STRING_VALUE", // required
 * //         LastModifiedDate: "STRING_VALUE", // required
 * //         Name: "STRING_VALUE",
 * //         RecommendationProviderIdType: "STRING_VALUE",
 * //         RecommendationProviderRoleArn: "STRING_VALUE", // required
 * //         RecommendationProviderUri: "STRING_VALUE", // required
 * //         RecommendationTransformerUri: "STRING_VALUE",
 * //         RecommendationsDisplayName: "STRING_VALUE",
 * //         RecommendationsPerMessage: Number("int"),
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRecommenderConfigurationsCommandInput - {@link GetRecommenderConfigurationsCommandInput}
 * @returns {@link GetRecommenderConfigurationsCommandOutput}
 * @see {@link GetRecommenderConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommenderConfigurationsCommandOutput} for command's `response` shape.
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
export class GetRecommenderConfigurationsCommand extends $Command<
  GetRecommenderConfigurationsCommandInput,
  GetRecommenderConfigurationsCommandOutput,
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
  constructor(readonly input: GetRecommenderConfigurationsCommandInput) {
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
  ): Handler<GetRecommenderConfigurationsCommandInput, GetRecommenderConfigurationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRecommenderConfigurationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetRecommenderConfigurationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Pinpoint",
        operation: "GetRecommenderConfigurations",
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
  private serialize(input: GetRecommenderConfigurationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRecommenderConfigurationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetRecommenderConfigurationsCommandOutput> {
    return de_GetRecommenderConfigurationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
