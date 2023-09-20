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

import { DownloadDBLogFilePortionDetails, DownloadDBLogFilePortionMessage } from "../models/models_1";
import { de_DownloadDBLogFilePortionCommand, se_DownloadDBLogFilePortionCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DownloadDBLogFilePortionCommand}.
 */
export interface DownloadDBLogFilePortionCommandInput extends DownloadDBLogFilePortionMessage {}
/**
 * @public
 *
 * The output of {@link DownloadDBLogFilePortionCommand}.
 */
export interface DownloadDBLogFilePortionCommandOutput extends DownloadDBLogFilePortionDetails, __MetadataBearer {}

/**
 * @public
 * <p>Downloads all or a portion of the specified log file, up to 1 MB in size.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DownloadDBLogFilePortionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DownloadDBLogFilePortionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DownloadDBLogFilePortionMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   LogFileName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   NumberOfLines: Number("int"),
 * };
 * const command = new DownloadDBLogFilePortionCommand(input);
 * const response = await client.send(command);
 * // { // DownloadDBLogFilePortionDetails
 * //   LogFileData: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   AdditionalDataPending: true || false,
 * // };
 *
 * ```
 *
 * @param DownloadDBLogFilePortionCommandInput - {@link DownloadDBLogFilePortionCommandInput}
 * @returns {@link DownloadDBLogFilePortionCommandOutput}
 * @see {@link DownloadDBLogFilePortionCommandInput} for command's `input` shape.
 * @see {@link DownloadDBLogFilePortionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link DBLogFileNotFoundFault} (client fault)
 *  <p>
 *             <code>LogFileName</code> doesn't refer to an existing DB log file.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To download a DB log file
 * ```javascript
 * // The following example downloads only the latest part of your log file.
 * const input = {
 *   "DBInstanceIdentifier": "test-instance",
 *   "LogFileName": "log.txt"
 * };
 * const command = new DownloadDBLogFilePortionCommand(input);
 * await client.send(command);
 * // example id: to-download-a-db-log-file-1680284895898
 * ```
 *
 */
export class DownloadDBLogFilePortionCommand extends $Command<
  DownloadDBLogFilePortionCommandInput,
  DownloadDBLogFilePortionCommandOutput,
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
  constructor(readonly input: DownloadDBLogFilePortionCommandInput) {
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
  ): Handler<DownloadDBLogFilePortionCommandInput, DownloadDBLogFilePortionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DownloadDBLogFilePortionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DownloadDBLogFilePortionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonRDSv19",
        operation: "DownloadDBLogFilePortion",
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
  private serialize(input: DownloadDBLogFilePortionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DownloadDBLogFilePortionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DownloadDBLogFilePortionCommandOutput> {
    return de_DownloadDBLogFilePortionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
