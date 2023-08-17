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

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { AssociateDefaultVocabularyRequest, AssociateDefaultVocabularyResponse } from "../models/models_0";
import { de_AssociateDefaultVocabularyCommand, se_AssociateDefaultVocabularyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateDefaultVocabularyCommand}.
 */
export interface AssociateDefaultVocabularyCommandInput extends AssociateDefaultVocabularyRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDefaultVocabularyCommand}.
 */
export interface AssociateDefaultVocabularyCommandOutput extends AssociateDefaultVocabularyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Associates an existing vocabulary as the default. Contact Lens for Amazon Connect uses the vocabulary in post-call
 *    and real-time analysis sessions for the given language.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateDefaultVocabularyCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateDefaultVocabularyCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // AssociateDefaultVocabularyRequest
 *   InstanceId: "STRING_VALUE", // required
 *   LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA", // required
 *   VocabularyId: "STRING_VALUE",
 * };
 * const command = new AssociateDefaultVocabularyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDefaultVocabularyCommandInput - {@link AssociateDefaultVocabularyCommandInput}
 * @returns {@link AssociateDefaultVocabularyCommandOutput}
 * @see {@link AssociateDefaultVocabularyCommandInput} for command's `input` shape.
 * @see {@link AssociateDefaultVocabularyCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 */
export class AssociateDefaultVocabularyCommand extends $Command<
  AssociateDefaultVocabularyCommandInput,
  AssociateDefaultVocabularyCommandOutput,
  ConnectClientResolvedConfig
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
  constructor(readonly input: AssociateDefaultVocabularyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateDefaultVocabularyCommandInput, AssociateDefaultVocabularyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDefaultVocabularyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "AssociateDefaultVocabularyCommand";
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
  private serialize(input: AssociateDefaultVocabularyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AssociateDefaultVocabularyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateDefaultVocabularyCommandOutput> {
    return de_AssociateDefaultVocabularyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
