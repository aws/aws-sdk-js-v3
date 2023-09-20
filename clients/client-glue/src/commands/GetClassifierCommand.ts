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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetClassifierRequest, GetClassifierResponse } from "../models/models_1";
import { de_GetClassifierCommand, se_GetClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetClassifierCommand}.
 */
export interface GetClassifierCommandInput extends GetClassifierRequest {}
/**
 * @public
 *
 * The output of {@link GetClassifierCommand}.
 */
export interface GetClassifierCommandOutput extends GetClassifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieve a classifier by name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetClassifierRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetClassifierCommand(input);
 * const response = await client.send(command);
 * // { // GetClassifierResponse
 * //   Classifier: { // Classifier
 * //     GrokClassifier: { // GrokClassifier
 * //       Name: "STRING_VALUE", // required
 * //       Classification: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       GrokPattern: "STRING_VALUE", // required
 * //       CustomPatterns: "STRING_VALUE",
 * //     },
 * //     XMLClassifier: { // XMLClassifier
 * //       Name: "STRING_VALUE", // required
 * //       Classification: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       RowTag: "STRING_VALUE",
 * //     },
 * //     JsonClassifier: { // JsonClassifier
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       JsonPath: "STRING_VALUE", // required
 * //     },
 * //     CsvClassifier: { // CsvClassifier
 * //       Name: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       LastUpdated: new Date("TIMESTAMP"),
 * //       Version: Number("long"),
 * //       Delimiter: "STRING_VALUE",
 * //       QuoteSymbol: "STRING_VALUE",
 * //       ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 * //       Header: [ // CsvHeader
 * //         "STRING_VALUE",
 * //       ],
 * //       DisableValueTrimming: true || false,
 * //       AllowSingleColumn: true || false,
 * //       CustomDatatypeConfigured: true || false,
 * //       CustomDatatypes: [ // CustomDatatypes
 * //         "STRING_VALUE",
 * //       ],
 * //       Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetClassifierCommandInput - {@link GetClassifierCommandInput}
 * @returns {@link GetClassifierCommandOutput}
 * @see {@link GetClassifierCommandInput} for command's `input` shape.
 * @see {@link GetClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetClassifierCommand extends $Command<
  GetClassifierCommandInput,
  GetClassifierCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetClassifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClassifierCommandInput, GetClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetClassifierCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetClassifier",
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
  private serialize(input: GetClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClassifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClassifierCommandOutput> {
    return de_GetClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
