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

import { DescribeDBLogFilesMessage, DescribeDBLogFilesResponse } from "../models/models_1";
import { de_DescribeDBLogFilesCommand, se_DescribeDBLogFilesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBLogFilesCommand}.
 */
export interface DescribeDBLogFilesCommandInput extends DescribeDBLogFilesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBLogFilesCommand}.
 */
export interface DescribeDBLogFilesCommandOutput extends DescribeDBLogFilesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of DB log files for the DB instance.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBLogFilesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBLogFilesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBLogFilesMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   FilenameContains: "STRING_VALUE",
 *   FileLastWritten: Number("long"),
 *   FileSize: Number("long"),
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBLogFilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDBLogFilesResponse
 * //   DescribeDBLogFiles: [ // DescribeDBLogFilesList
 * //     { // DescribeDBLogFilesDetails
 * //       LogFileName: "STRING_VALUE",
 * //       LastWritten: Number("long"),
 * //       Size: Number("long"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBLogFilesCommandInput - {@link DescribeDBLogFilesCommandInput}
 * @returns {@link DescribeDBLogFilesCommandOutput}
 * @see {@link DescribeDBLogFilesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBLogFilesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To describe the log files for a DB instance
 * ```javascript
 * // The following example retrieves details about the log files for the specified DB instance.
 * const input = {
 *   "DBInstanceIdentifier": "test-instance"
 * };
 * const command = new DescribeDBLogFilesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DescribeDBLogFiles": [
 *     {
 *       "LastWritten": 1533060000000,
 *       "LogFileName": "error/mysql-error-running.log",
 *       "Size": 0
 *     },
 *     {
 *       "LastWritten": 1532994300000,
 *       "LogFileName": "error/mysql-error-running.log.0",
 *       "Size": 2683
 *     },
 *     {
 *       "LastWritten": 1533057300000,
 *       "LogFileName": "error/mysql-error-running.log.18",
 *       "Size": 107
 *     },
 *     {
 *       "LastWritten": 1532991000000,
 *       "LogFileName": "error/mysql-error-running.log.23",
 *       "Size": 13105
 *     },
 *     {
 *       "LastWritten": 1533061200000,
 *       "LogFileName": "error/mysql-error.log",
 *       "Size": 0
 *     },
 *     {
 *       "LastWritten": 1532989252000,
 *       "LogFileName": "mysqlUpgrade",
 *       "Size": 3519
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-log-files-for-a-db-instance-1680217710149
 * ```
 *
 */
export class DescribeDBLogFilesCommand extends $Command<
  DescribeDBLogFilesCommandInput,
  DescribeDBLogFilesCommandOutput,
  RDSClientResolvedConfig
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
  constructor(readonly input: DescribeDBLogFilesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBLogFilesCommandInput, DescribeDBLogFilesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBLogFilesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBLogFilesCommand";
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
  private serialize(input: DescribeDBLogFilesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBLogFilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBLogFilesCommandOutput> {
    return de_DescribeDBLogFilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
