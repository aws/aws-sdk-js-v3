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

import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteCustomVocabularyRequest, DeleteCustomVocabularyResponse } from "../models/models_0";
import { de_DeleteCustomVocabularyCommand, se_DeleteCustomVocabularyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomVocabularyCommand}.
 */
export interface DeleteCustomVocabularyCommandInput extends DeleteCustomVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomVocabularyCommand}.
 */
export interface DeleteCustomVocabularyCommandOutput extends DeleteCustomVocabularyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes a custom vocabulary from the specified locale
 *       in the specified bot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteCustomVocabularyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteCustomVocabularyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteCustomVocabularyRequest
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomVocabularyCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCustomVocabularyResponse
 * //   botId: "STRING_VALUE",
 * //   botVersion: "STRING_VALUE",
 * //   localeId: "STRING_VALUE",
 * //   customVocabularyStatus: "Ready" || "Deleting" || "Exporting" || "Importing" || "Creating",
 * // };
 *
 * ```
 *
 * @param DeleteCustomVocabularyCommandInput - {@link DeleteCustomVocabularyCommandInput}
 * @returns {@link DeleteCustomVocabularyCommandOutput}
 * @see {@link DeleteCustomVocabularyCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomVocabularyCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
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
export class DeleteCustomVocabularyCommand extends $Command<
  DeleteCustomVocabularyCommandInput,
  DeleteCustomVocabularyCommandOutput,
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
  constructor(readonly input: DeleteCustomVocabularyCommandInput) {
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
  ): Handler<DeleteCustomVocabularyCommandInput, DeleteCustomVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteCustomVocabularyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LexModelsV2Client";
    const commandName = "DeleteCustomVocabularyCommand";
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
  private serialize(input: DeleteCustomVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteCustomVocabularyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteCustomVocabularyCommandOutput> {
    return de_DeleteCustomVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
