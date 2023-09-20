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

import { DescribeStatementRequest, DescribeStatementResponse } from "../models/models_0";
import { de_DescribeStatementCommand, se_DescribeStatementCommand } from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeStatementCommand}.
 */
export interface DescribeStatementCommandInput extends DescribeStatementRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStatementCommand}.
 */
export interface DescribeStatementCommandOutput extends DescribeStatementResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information
 *       includes when the query started, when it finished, the query status, the number of rows returned, and the SQL
 *       statement. </p>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, DescribeStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, DescribeStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const input = { // DescribeStatementRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribeStatementCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStatementResponse
 * //   Id: "STRING_VALUE", // required
 * //   SecretArn: "STRING_VALUE",
 * //   DbUser: "STRING_VALUE",
 * //   Database: "STRING_VALUE",
 * //   ClusterIdentifier: "STRING_VALUE",
 * //   Duration: Number("long"),
 * //   Error: "STRING_VALUE",
 * //   Status: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   UpdatedAt: new Date("TIMESTAMP"),
 * //   RedshiftPid: Number("long"),
 * //   HasResultSet: true || false,
 * //   QueryString: "STRING_VALUE",
 * //   ResultRows: Number("long"),
 * //   ResultSize: Number("long"),
 * //   RedshiftQueryId: Number("long"),
 * //   QueryParameters: [ // SqlParametersList
 * //     { // SqlParameter
 * //       name: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   SubStatements: [ // SubStatementList
 * //     { // SubStatementData
 * //       Id: "STRING_VALUE", // required
 * //       Duration: Number("long"),
 * //       Error: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"),
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       QueryString: "STRING_VALUE",
 * //       ResultRows: Number("long"),
 * //       ResultSize: Number("long"),
 * //       RedshiftQueryId: Number("long"),
 * //       HasResultSet: true || false,
 * //     },
 * //   ],
 * //   WorkgroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeStatementCommandInput - {@link DescribeStatementCommandInput}
 * @returns {@link DescribeStatementCommandOutput}
 * @see {@link DescribeStatementCommandInput} for command's `input` shape.
 * @see {@link DescribeStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 */
export class DescribeStatementCommand extends $Command<
  DescribeStatementCommandInput,
  DescribeStatementCommandOutput,
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
  constructor(readonly input: DescribeStatementCommandInput) {
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
  ): Handler<DescribeStatementCommandInput, DescribeStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "DescribeStatementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RedshiftData",
        operation: "DescribeStatement",
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
  private serialize(input: DescribeStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeStatementCommandOutput> {
    return de_DescribeStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
