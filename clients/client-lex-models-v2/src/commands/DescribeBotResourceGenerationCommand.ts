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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeBotResourceGenerationRequest, DescribeBotResourceGenerationResponse } from "../models/models_0";
import {
  de_DescribeBotResourceGenerationCommand,
  se_DescribeBotResourceGenerationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBotResourceGenerationCommand}.
 */
export interface DescribeBotResourceGenerationCommandInput extends DescribeBotResourceGenerationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBotResourceGenerationCommand}.
 */
export interface DescribeBotResourceGenerationCommandOutput
  extends DescribeBotResourceGenerationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns information about a request to generate a bot through natural language description, made through
 *       the <code>StartBotResource</code> API. Use the <code>generatedBotLocaleUrl</code>
 *       to retrieve the Amazon S3 object containing the bot locale configuration. You can
 *       then modify and import this configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeBotResourceGenerationCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeBotResourceGenerationCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeBotResourceGenerationRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   generationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBotResourceGenerationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBotResourceGenerationResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   generationId: "STRING_VALUE",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * //   generationStatus: "Failed" || "Complete" || "InProgress",
 * //   generationInputPrompt: "STRING_VALUE",
 * //   generatedBotLocaleUrl: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   modelArn: "STRING_VALUE",
 * //   lastUpdatedDateTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeBotResourceGenerationCommandInput - {@link DescribeBotResourceGenerationCommandInput}
 * @returns {@link DescribeBotResourceGenerationCommandOutput}
 * @see {@link DescribeBotResourceGenerationCommandInput} for command's `input` shape.
 * @see {@link DescribeBotResourceGenerationCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 */
export class DescribeBotResourceGenerationCommand extends $Command<
  DescribeBotResourceGenerationCommandInput,
  DescribeBotResourceGenerationCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: DescribeBotResourceGenerationCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBotResourceGenerationCommandInput, DescribeBotResourceGenerationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBotResourceGenerationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DescribeBotResourceGenerationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "DescribeBotResourceGeneration",
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
  private serialize(input: DescribeBotResourceGenerationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBotResourceGenerationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeBotResourceGenerationCommandOutput> {
    return de_DescribeBotResourceGenerationCommand(output, context);
  }
}
