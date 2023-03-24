// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { SearchVocabulariesRequest, SearchVocabulariesResponse } from "../models/models_1";
import {
  deserializeAws_restJson1SearchVocabulariesCommand,
  serializeAws_restJson1SearchVocabulariesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link SearchVocabulariesCommand}.
 */
export interface SearchVocabulariesCommandInput extends SearchVocabulariesRequest {}
/**
 * @public
 *
 * The output of {@link SearchVocabulariesCommand}.
 */
export interface SearchVocabulariesCommandOutput extends SearchVocabulariesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Searches for vocabularies within a specific Amazon Connect instance using
 *     <code>State</code>, <code>NameStartsWith</code>, and <code>LanguageCode</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchVocabulariesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchVocabulariesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = {
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   State: "CREATION_IN_PROGRESS" || "ACTIVE" || "CREATION_FAILED" || "DELETE_IN_PROGRESS",
 *   NameStartsWith: "STRING_VALUE",
 *   LanguageCode: "ar-AE" || "de-CH" || "de-DE" || "en-AB" || "en-AU" || "en-GB" || "en-IE" || "en-IN" || "en-US" || "en-WL" || "es-ES" || "es-US" || "fr-CA" || "fr-FR" || "hi-IN" || "it-IT" || "ja-JP" || "ko-KR" || "pt-BR" || "pt-PT" || "zh-CN" || "en-NZ" || "en-ZA",
 * };
 * const command = new SearchVocabulariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param SearchVocabulariesCommandInput - {@link SearchVocabulariesCommandInput}
 * @returns {@link SearchVocabulariesCommandOutput}
 * @see {@link SearchVocabulariesCommandInput} for command's `input` shape.
 * @see {@link SearchVocabulariesCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 *
 */
export class SearchVocabulariesCommand extends $Command<
  SearchVocabulariesCommandInput,
  SearchVocabulariesCommandOutput,
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
  constructor(readonly input: SearchVocabulariesCommandInput) {
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
  ): Handler<SearchVocabulariesCommandInput, SearchVocabulariesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchVocabulariesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectClient";
    const commandName = "SearchVocabulariesCommand";
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
  private serialize(input: SearchVocabulariesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SearchVocabulariesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchVocabulariesCommandOutput> {
    return deserializeAws_restJson1SearchVocabulariesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
