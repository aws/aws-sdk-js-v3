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

import { ListLanguagesRequest, ListLanguagesResponse } from "../models/models_0";
import { de_ListLanguagesCommand, se_ListLanguagesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListLanguagesCommand}.
 */
export interface ListLanguagesCommandInput extends ListLanguagesRequest {}
/**
 * @public
 *
 * The output of {@link ListLanguagesCommand}.
 */
export interface ListLanguagesCommandOutput extends ListLanguagesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of languages (RFC-5646 codes and names) that Amazon Translate supports.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListLanguagesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListLanguagesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // ListLanguagesRequest
 *   DisplayLanguageCode: "de" || "en" || "es" || "fr" || "it" || "ja" || "ko" || "pt" || "zh" || "zh-TW",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLanguagesCommand(input);
 * const response = await client.send(command);
 * // { // ListLanguagesResponse
 * //   Languages: [ // LanguagesList
 * //     { // Language
 * //       LanguageName: "STRING_VALUE", // required
 * //       LanguageCode: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   DisplayLanguageCode: "de" || "en" || "es" || "fr" || "it" || "ja" || "ko" || "pt" || "zh" || "zh-TW",
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLanguagesCommandInput - {@link ListLanguagesCommandInput}
 * @returns {@link ListLanguagesCommandOutput}
 * @see {@link ListLanguagesCommandInput} for command's `input` shape.
 * @see {@link ListLanguagesCommandOutput} for command's `response` shape.
 * @see {@link TranslateClientResolvedConfig | config} for TranslateClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of the parameter is not valid. Review the value of the parameter you are using
 *       to correct it, and then retry your operation.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p> You have made too many requests within a short period of time. Wait for a short time and
 *       then try your request again.</p>
 *
 * @throws {@link UnsupportedDisplayLanguageCodeException} (client fault)
 *  <p>Requested display language code is not supported.</p>
 *
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class ListLanguagesCommand extends $Command<
  ListLanguagesCommandInput,
  ListLanguagesCommandOutput,
  TranslateClientResolvedConfig
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
  constructor(readonly input: ListLanguagesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TranslateClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLanguagesCommandInput, ListLanguagesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListLanguagesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListLanguagesCommand";
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
  private serialize(input: ListLanguagesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListLanguagesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListLanguagesCommandOutput> {
    return de_ListLanguagesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
