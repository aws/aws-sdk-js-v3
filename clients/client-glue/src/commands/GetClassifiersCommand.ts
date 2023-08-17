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
import { GetClassifiersRequest, GetClassifiersResponse } from "../models/models_1";
import { de_GetClassifiersCommand, se_GetClassifiersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetClassifiersCommand}.
 */
export interface GetClassifiersCommandInput extends GetClassifiersRequest {}
/**
 * @public
 *
 * The output of {@link GetClassifiersCommand}.
 */
export interface GetClassifiersCommandOutput extends GetClassifiersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all classifier objects in the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetClassifiersCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetClassifiersCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetClassifiersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetClassifiersCommand(input);
 * const response = await client.send(command);
 * // { // GetClassifiersResponse
 * //   Classifiers: [ // ClassifierList
 * //     { // Classifier
 * //       GrokClassifier: { // GrokClassifier
 * //         Name: "STRING_VALUE", // required
 * //         Classification: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         GrokPattern: "STRING_VALUE", // required
 * //         CustomPatterns: "STRING_VALUE",
 * //       },
 * //       XMLClassifier: { // XMLClassifier
 * //         Name: "STRING_VALUE", // required
 * //         Classification: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         RowTag: "STRING_VALUE",
 * //       },
 * //       JsonClassifier: { // JsonClassifier
 * //         Name: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         JsonPath: "STRING_VALUE", // required
 * //       },
 * //       CsvClassifier: { // CsvClassifier
 * //         Name: "STRING_VALUE", // required
 * //         CreationTime: new Date("TIMESTAMP"),
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //         Version: Number("long"),
 * //         Delimiter: "STRING_VALUE",
 * //         QuoteSymbol: "STRING_VALUE",
 * //         ContainsHeader: "UNKNOWN" || "PRESENT" || "ABSENT",
 * //         Header: [ // CsvHeader
 * //           "STRING_VALUE",
 * //         ],
 * //         DisableValueTrimming: true || false,
 * //         AllowSingleColumn: true || false,
 * //         CustomDatatypeConfigured: true || false,
 * //         CustomDatatypes: [ // CustomDatatypes
 * //           "STRING_VALUE",
 * //         ],
 * //         Serde: "OpenCSVSerDe" || "LazySimpleSerDe" || "None",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetClassifiersCommandInput - {@link GetClassifiersCommandInput}
 * @returns {@link GetClassifiersCommandOutput}
 * @see {@link GetClassifiersCommandInput} for command's `input` shape.
 * @see {@link GetClassifiersCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetClassifiersCommand extends $Command<
  GetClassifiersCommandInput,
  GetClassifiersCommandOutput,
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
  constructor(readonly input: GetClassifiersCommandInput) {
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
  ): Handler<GetClassifiersCommandInput, GetClassifiersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClassifiersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetClassifiersCommand";
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
  private serialize(input: GetClassifiersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClassifiersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClassifiersCommandOutput> {
    return de_GetClassifiersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
