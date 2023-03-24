// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DescribeDBLogFilesMessage, DescribeDBLogFilesResponse } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBLogFilesCommand,
  serializeAws_queryDescribeDBLogFilesCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * const input = {
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   FilenameContains: "STRING_VALUE",
 *   FileLastWritten: Number("long"),
 *   FileSize: Number("long"),
 *   Filters: [
 *     {
 *       Name: "STRING_VALUE", // required
 *       Values: [ // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBLogFilesCommand(input);
 * const response = await client.send(command);
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
 *
 * @example To list DB log file names
 * ```javascript
 * // This example lists matching log file names for the specified DB instance, file name pattern, last write date in POSIX time with milleseconds, and minimum file size.
 * const input = {
 *   "DBInstanceIdentifier": "mymysqlinstance",
 *   "FileLastWritten": 1470873600000,
 *   "FileSize": 0,
 *   "FilenameContains": "error"
 * };
 * const command = new DescribeDBLogFilesCommand(input);
 * await client.send(command);
 * // example id: describe-db-log-files-5f002d8d-5c1d-44c2-b5f4-bd284c0f1285
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
    return serializeAws_queryDescribeDBLogFilesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBLogFilesCommandOutput> {
    return deserializeAws_queryDescribeDBLogFilesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
