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
import { UpdateClassifierRequest, UpdateClassifierResponse } from "../models/models_2";
import { de_UpdateClassifierCommand, se_UpdateClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateClassifierCommand}.
 */
export interface UpdateClassifierCommandInput extends UpdateClassifierRequest {}
/**
 * @public
 *
 * The output of {@link UpdateClassifierCommand}.
 */
export interface UpdateClassifierCommandOutput extends UpdateClassifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies an existing classifier (a <code>GrokClassifier</code>,
 *       an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on
 *       which field is present).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // UpdateClassifierRequest
 *   GrokClassifier: { // UpdateGrokClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Classification: "STRING_VALUE",
 *     GrokPattern: "STRING_VALUE",
 *     CustomPatterns: "STRING_VALUE",
 *   },
 *   XMLClassifier: { // UpdateXMLClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Classification: "STRING_VALUE",
 *     RowTag: "STRING_VALUE",
 *   },
 *   JsonClassifier: { // UpdateJsonClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     JsonPath: "STRING_VALUE",
 *   },
 *   CsvClassifier: { // UpdateCsvClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     Delimiter: "STRING_VALUE",
 *     QuoteSymbol: "STRING_VALUE",
 *     ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 *     Header: [ // CsvHeader
 *       "STRING_VALUE",
 *     ],
 *     DisableValueTrimming: true || false,
 *     AllowSingleColumn: true || false,
 *     CustomDatatypeConfigured: true || false,
 *     CustomDatatypes: [ // CustomDatatypes
 *       "STRING_VALUE",
 *     ],
 *     Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 *   },
 * };
 * const command = new UpdateClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateClassifierCommandInput - {@link UpdateClassifierCommandInput}
 * @returns {@link UpdateClassifierCommandOutput}
 * @see {@link UpdateClassifierCommandInput} for command's `input` shape.
 * @see {@link UpdateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link VersionMismatchException} (client fault)
 *  <p>There was a version conflict.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class UpdateClassifierCommand extends $Command<
  UpdateClassifierCommandInput,
  UpdateClassifierCommandOutput,
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
  constructor(readonly input: UpdateClassifierCommandInput) {
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
  ): Handler<UpdateClassifierCommandInput, UpdateClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateClassifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "UpdateClassifier",
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
  private serialize(input: UpdateClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateClassifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateClassifierCommandOutput> {
    return de_UpdateClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
