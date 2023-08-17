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
import { ListDataQualityResultsRequest, ListDataQualityResultsResponse } from "../models/models_2";
import { de_ListDataQualityResultsCommand, se_ListDataQualityResultsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataQualityResultsCommand}.
 */
export interface ListDataQualityResultsCommandInput extends ListDataQualityResultsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataQualityResultsCommand}.
 */
export interface ListDataQualityResultsCommandOutput extends ListDataQualityResultsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns all data quality execution results for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListDataQualityResultsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListDataQualityResultsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // ListDataQualityResultsRequest
 *   Filter: { // DataQualityResultFilterCriteria
 *     DataSource: { // DataSource
 *       GlueTable: { // GlueTable
 *         DatabaseName: "STRING_VALUE", // required
 *         TableName: "STRING_VALUE", // required
 *         CatalogId: "STRING_VALUE",
 *         ConnectionName: "STRING_VALUE",
 *         AdditionalOptions: { // GlueTableAdditionalOptions
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *     JobName: "STRING_VALUE",
 *     JobRunId: "STRING_VALUE",
 *     StartedAfter: new Date("TIMESTAMP"),
 *     StartedBefore: new Date("TIMESTAMP"),
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataQualityResultsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataQualityResultsResponse
 * //   Results: [ // DataQualityResultDescriptionList // required
 * //     { // DataQualityResultDescription
 * //       ResultId: "STRING_VALUE",
 * //       DataSource: { // DataSource
 * //         GlueTable: { // GlueTable
 * //           DatabaseName: "STRING_VALUE", // required
 * //           TableName: "STRING_VALUE", // required
 * //           CatalogId: "STRING_VALUE",
 * //           ConnectionName: "STRING_VALUE",
 * //           AdditionalOptions: { // GlueTableAdditionalOptions
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //       JobName: "STRING_VALUE",
 * //       JobRunId: "STRING_VALUE",
 * //       StartedOn: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataQualityResultsCommandInput - {@link ListDataQualityResultsCommandInput}
 * @returns {@link ListDataQualityResultsCommandOutput}
 * @see {@link ListDataQualityResultsCommandInput} for command's `input` shape.
 * @see {@link ListDataQualityResultsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
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
export class ListDataQualityResultsCommand extends $Command<
  ListDataQualityResultsCommandInput,
  ListDataQualityResultsCommandOutput,
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
  constructor(readonly input: ListDataQualityResultsCommandInput) {
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
  ): Handler<ListDataQualityResultsCommandInput, ListDataQualityResultsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataQualityResultsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ListDataQualityResultsCommand";
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
  private serialize(input: ListDataQualityResultsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataQualityResultsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataQualityResultsCommandOutput> {
    return de_ListDataQualityResultsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
