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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateClassifierRequest, CreateClassifierResponse } from "../models/models_0";
import { de_CreateClassifierCommand, se_CreateClassifierCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateClassifierCommand}.
 */
export interface CreateClassifierCommandInput extends CreateClassifierRequest {}
/**
 * @public
 *
 * The output of {@link CreateClassifierCommand}.
 */
export interface CreateClassifierCommandOutput extends CreateClassifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an
 *         <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>,
 *       depending on which field of the request is present.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateClassifierCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateClassifierCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateClassifierRequest
 *   GrokClassifier: { // CreateGrokClassifierRequest
 *     Classification: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     GrokPattern: "STRING_VALUE", // required
 *     CustomPatterns: "STRING_VALUE",
 *   },
 *   XMLClassifier: { // CreateXMLClassifierRequest
 *     Classification: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     RowTag: "STRING_VALUE",
 *   },
 *   JsonClassifier: { // CreateJsonClassifierRequest
 *     Name: "STRING_VALUE", // required
 *     JsonPath: "STRING_VALUE", // required
 *   },
 *   CsvClassifier: { // CreateCsvClassifierRequest
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
 *   },
 * };
 * const command = new CreateClassifierCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateClassifierCommandInput - {@link CreateClassifierCommandInput}
 * @returns {@link CreateClassifierCommandOutput}
 * @see {@link CreateClassifierCommandInput} for command's `input` shape.
 * @see {@link CreateClassifierCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateClassifierCommand extends $Command<
  CreateClassifierCommandInput,
  CreateClassifierCommandOutput,
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
  constructor(readonly input: CreateClassifierCommandInput) {
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
  ): Handler<CreateClassifierCommandInput, CreateClassifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateClassifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateClassifierCommand";
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
  private serialize(input: CreateClassifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateClassifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateClassifierCommandOutput> {
    return de_CreateClassifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
