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

import { ListTerminologiesRequest, ListTerminologiesResponse } from "../models/models_0";
import { de_ListTerminologiesCommand, se_ListTerminologiesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListTerminologiesCommand}.
 */
export interface ListTerminologiesCommandInput extends ListTerminologiesRequest {}
/**
 * @public
 *
 * The output of {@link ListTerminologiesCommand}.
 */
export interface ListTerminologiesCommandOutput extends ListTerminologiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides a list of custom terminologies associated with your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TranslateClient, ListTerminologiesCommand } from "@aws-sdk/client-translate"; // ES Modules import
 * // const { TranslateClient, ListTerminologiesCommand } = require("@aws-sdk/client-translate"); // CommonJS import
 * const client = new TranslateClient(config);
 * const input = { // ListTerminologiesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListTerminologiesCommand(input);
 * const response = await client.send(command);
 * // { // ListTerminologiesResponse
 * //   TerminologyPropertiesList: [ // TerminologyPropertiesList
 * //     { // TerminologyProperties
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       SourceLanguageCode: "STRING_VALUE",
 * //       TargetLanguageCodes: [ // LanguageCodeStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       EncryptionKey: { // EncryptionKey
 * //         Type: "KMS", // required
 * //         Id: "STRING_VALUE", // required
 * //       },
 * //       SizeBytes: Number("int"),
 * //       TermCount: Number("int"),
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       LastUpdatedAt: new Date("TIMESTAMP"),
 * //       Directionality: "UNI" || "MULTI",
 * //       Message: "STRING_VALUE",
 * //       SkippedTermCount: Number("int"),
 * //       Format: "CSV" || "TMX" || "TSV",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTerminologiesCommandInput - {@link ListTerminologiesCommandInput}
 * @returns {@link ListTerminologiesCommandOutput}
 * @see {@link ListTerminologiesCommandInput} for command's `input` shape.
 * @see {@link ListTerminologiesCommandOutput} for command's `response` shape.
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
 * @throws {@link TranslateServiceException}
 * <p>Base exception class for all service exceptions from Translate service.</p>
 *
 */
export class ListTerminologiesCommand extends $Command<
  ListTerminologiesCommandInput,
  ListTerminologiesCommandOutput,
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
  constructor(readonly input: ListTerminologiesCommandInput) {
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
  ): Handler<ListTerminologiesCommandInput, ListTerminologiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListTerminologiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TranslateClient";
    const commandName = "ListTerminologiesCommand";
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
  private serialize(input: ListTerminologiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListTerminologiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListTerminologiesCommandOutput> {
    return de_ListTerminologiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
