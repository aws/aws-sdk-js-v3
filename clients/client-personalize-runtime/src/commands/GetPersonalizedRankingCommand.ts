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

import {
  GetPersonalizedRankingRequest,
  GetPersonalizedRankingRequestFilterSensitiveLog,
  GetPersonalizedRankingResponse,
} from "../models/models_0";
import {
  PersonalizeRuntimeClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PersonalizeRuntimeClient";
import { de_GetPersonalizedRankingCommand, se_GetPersonalizedRankingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPersonalizedRankingCommand}.
 */
export interface GetPersonalizedRankingCommandInput extends GetPersonalizedRankingRequest {}
/**
 * @public
 *
 * The output of {@link GetPersonalizedRankingCommand}.
 */
export interface GetPersonalizedRankingCommandOutput extends GetPersonalizedRankingResponse, __MetadataBearer {}

/**
 * @public
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const input = { // GetPersonalizedRankingRequest
 *   campaignArn: "STRING_VALUE", // required
 *   inputList: [ // InputList // required
 *     "STRING_VALUE",
 *   ],
 *   userId: "STRING_VALUE", // required
 *   context: { // Context
 *     "<keys>": "STRING_VALUE",
 *   },
 *   filterArn: "STRING_VALUE",
 *   filterValues: { // FilterValues
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetPersonalizedRankingCommand(input);
 * const response = await client.send(command);
 * // { // GetPersonalizedRankingResponse
 * //   personalizedRanking: [ // ItemList
 * //     { // PredictedItem
 * //       itemId: "STRING_VALUE",
 * //       score: Number("double"),
 * //       promotionName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   recommendationId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetPersonalizedRankingCommandInput - {@link GetPersonalizedRankingCommandInput}
 * @returns {@link GetPersonalizedRankingCommandOutput}
 * @see {@link GetPersonalizedRankingCommandInput} for command's `input` shape.
 * @see {@link GetPersonalizedRankingCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for PersonalizeRuntimeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link PersonalizeRuntimeServiceException}
 * <p>Base exception class for all service exceptions from PersonalizeRuntime service.</p>
 *
 */
export class GetPersonalizedRankingCommand extends $Command<
  GetPersonalizedRankingCommandInput,
  GetPersonalizedRankingCommandOutput,
  PersonalizeRuntimeClientResolvedConfig
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
  constructor(readonly input: GetPersonalizedRankingCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PersonalizeRuntimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPersonalizedRankingCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PersonalizeRuntimeClient";
    const commandName = "GetPersonalizedRankingCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPersonalizedRankingRequestFilterSensitiveLog,
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
  private serialize(input: GetPersonalizedRankingCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPersonalizedRankingCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPersonalizedRankingCommandOutput> {
    return de_GetPersonalizedRankingCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
