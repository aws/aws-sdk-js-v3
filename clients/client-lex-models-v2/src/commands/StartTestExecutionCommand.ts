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
import { StartTestExecutionRequest, StartTestExecutionResponse } from "../models/models_1";
import { de_StartTestExecutionCommand, se_StartTestExecutionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartTestExecutionCommand}.
 */
export interface StartTestExecutionCommandInput extends StartTestExecutionRequest {}
/**
 * @public
 *
 * The output of {@link StartTestExecutionCommand}.
 */
export interface StartTestExecutionCommandOutput extends StartTestExecutionResponse, __MetadataBearer {}

/**
 * @public
 * <p>The action to start test set execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, StartTestExecutionCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, StartTestExecutionCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // StartTestExecutionRequest
 *   testSetId: "STRING_VALUE", // required
 *   target: { // TestExecutionTarget
 *     botAliasTarget: { // BotAliasTestExecutionTarget
 *       botId: "STRING_VALUE", // required
 *       botAliasId: "STRING_VALUE", // required
 *       localeId: "STRING_VALUE", // required
 *     },
 *   },
 *   apiMode: "Streaming" || "NonStreaming", // required
 *   testExecutionModality: "Text" || "Audio",
 * };
 * const command = new StartTestExecutionCommand(input);
 * const response = await client.send(command);
 * // { // StartTestExecutionResponse
 * //   testExecutionId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   testSetId: "STRING_VALUE",
 * //   target: { // TestExecutionTarget
 * //     botAliasTarget: { // BotAliasTestExecutionTarget
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   apiMode: "Streaming" || "NonStreaming",
 * //   testExecutionModality: "Text" || "Audio",
 * // };
 *
 * ```
 *
 * @param StartTestExecutionCommandInput - {@link StartTestExecutionCommandInput}
 * @returns {@link StartTestExecutionCommandOutput}
 * @see {@link StartTestExecutionCommandInput} for command's `input` shape.
 * @see {@link StartTestExecutionCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
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
export class StartTestExecutionCommand extends $Command<
  StartTestExecutionCommandInput,
  StartTestExecutionCommandOutput,
  LexModelsV2ClientResolvedConfig
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
  constructor(readonly input: StartTestExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LexModelsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartTestExecutionCommandInput, StartTestExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartTestExecutionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "StartTestExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LexModelBuildingServiceV2",
        operation: "StartTestExecution",
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
  private serialize(input: StartTestExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartTestExecutionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartTestExecutionCommandOutput> {
    return de_StartTestExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
