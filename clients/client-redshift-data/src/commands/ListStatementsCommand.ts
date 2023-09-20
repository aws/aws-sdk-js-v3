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

import { ListStatementsRequest, ListStatementsResponse } from "../models/models_0";
import { de_ListStatementsCommand, se_ListStatementsCommand } from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListStatementsCommand}.
 */
export interface ListStatementsCommandInput extends ListStatementsRequest {}
/**
 * @public
 *
 * The output of {@link ListStatementsCommand}.
 */
export interface ListStatementsCommandOutput extends ListStatementsResponse, __MetadataBearer {}

/**
 * @public
 * <p>List of SQL statements. By default, only finished statements are shown.
 *         A token is returned to page through the statement list. </p>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListStatementsCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListStatementsCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const input = { // ListStatementsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   StatementName: "STRING_VALUE",
 *   Status: "STRING_VALUE",
 *   RoleLevel: true || false,
 * };
 * const command = new ListStatementsCommand(input);
 * const response = await client.send(command);
 * // { // ListStatementsResponse
 * //   Statements: [ // StatementList // required
 * //     { // StatementData
 * //       Id: "STRING_VALUE", // required
 * //       QueryString: "STRING_VALUE",
 * //       QueryStrings: [ // StatementStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SecretArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       StatementName: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       QueryParameters: [ // SqlParametersList
 * //         { // SqlParameter
 * //           name: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       IsBatchStatement: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStatementsCommandInput - {@link ListStatementsCommandInput}
 * @returns {@link ListStatementsCommandOutput}
 * @see {@link ListStatementsCommandInput} for command's `input` shape.
 * @see {@link ListStatementsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 */
export class ListStatementsCommand extends $Command<
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
  RedshiftDataClientResolvedConfig
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
  constructor(readonly input: ListStatementsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStatementsCommandInput, ListStatementsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListStatementsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "ListStatementsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftData",
        operation: "ListStatements",
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
  private serialize(input: ListStatementsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListStatementsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStatementsCommandOutput> {
    return de_ListStatementsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
