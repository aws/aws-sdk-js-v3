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

import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { BatchGetPreparedStatementInput, BatchGetPreparedStatementOutput } from "../models/models_0";
import { de_BatchGetPreparedStatementCommand, se_BatchGetPreparedStatementCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetPreparedStatementCommand}.
 */
export interface BatchGetPreparedStatementCommandInput extends BatchGetPreparedStatementInput {}
/**
 * @public
 *
 * The output of {@link BatchGetPreparedStatementCommand}.
 */
export interface BatchGetPreparedStatementCommandOutput extends BatchGetPreparedStatementOutput, __MetadataBearer {}

/**
 * @public
 * <p>Returns the details of a single prepared statement or a list of up to 256 prepared
 *             statements for the array of prepared statement names that you provide. Requires you to
 *             have access to the workgroup to which the prepared statements belong. If a prepared
 *             statement cannot be retrieved for the name specified, the statement is listed in
 *                 <code>UnprocessedPreparedStatementNames</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AthenaClient, BatchGetPreparedStatementCommand } from "@aws-sdk/client-athena"; // ES Modules import
 * // const { AthenaClient, BatchGetPreparedStatementCommand } = require("@aws-sdk/client-athena"); // CommonJS import
 * const client = new AthenaClient(config);
 * const input = { // BatchGetPreparedStatementInput
 *   PreparedStatementNames: [ // PreparedStatementNameList // required
 *     "STRING_VALUE",
 *   ],
 *   WorkGroup: "STRING_VALUE", // required
 * };
 * const command = new BatchGetPreparedStatementCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetPreparedStatementOutput
 * //   PreparedStatements: [ // PreparedStatementDetailsList
 * //     { // PreparedStatement
 * //       StatementName: "STRING_VALUE",
 * //       QueryStatement: "STRING_VALUE",
 * //       WorkGroupName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   UnprocessedPreparedStatementNames: [ // UnprocessedPreparedStatementNameList
 * //     { // UnprocessedPreparedStatementName
 * //       StatementName: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetPreparedStatementCommandInput - {@link BatchGetPreparedStatementCommandInput}
 * @returns {@link BatchGetPreparedStatementCommandOutput}
 * @see {@link BatchGetPreparedStatementCommandInput} for command's `input` shape.
 * @see {@link BatchGetPreparedStatementCommandOutput} for command's `response` shape.
 * @see {@link AthenaClientResolvedConfig | config} for AthenaClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates a platform issue, which may be due to a transient condition or
 *             outage.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *             required parameter may be missing or out of range.</p>
 *
 * @throws {@link AthenaServiceException}
 * <p>Base exception class for all service exceptions from Athena service.</p>
 *
 */
export class BatchGetPreparedStatementCommand extends $Command<
  BatchGetPreparedStatementCommandInput,
  BatchGetPreparedStatementCommandOutput,
  AthenaClientResolvedConfig
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
  constructor(readonly input: BatchGetPreparedStatementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AthenaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetPreparedStatementCommandInput, BatchGetPreparedStatementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetPreparedStatementCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AthenaClient";
    const commandName = "BatchGetPreparedStatementCommand";
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
  private serialize(input: BatchGetPreparedStatementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetPreparedStatementCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetPreparedStatementCommandOutput> {
    return de_BatchGetPreparedStatementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
