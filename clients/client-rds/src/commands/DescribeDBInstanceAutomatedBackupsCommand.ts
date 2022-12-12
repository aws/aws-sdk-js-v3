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

import {
  DBInstanceAutomatedBackupMessage,
  DBInstanceAutomatedBackupMessageFilterSensitiveLog,
  DescribeDBInstanceAutomatedBackupsMessage,
  DescribeDBInstanceAutomatedBackupsMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand,
  serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface DescribeDBInstanceAutomatedBackupsCommandInput extends DescribeDBInstanceAutomatedBackupsMessage {}
export interface DescribeDBInstanceAutomatedBackupsCommandOutput
  extends DBInstanceAutomatedBackupMessage,
    __MetadataBearer {}

/**
 * <p>Displays backups for both current and deleted
 *             instances. For example, use this operation to
 *             find details about automated backups for previously deleted instances. Current instances
 *             with retention periods greater than zero (0) are returned for both the
 *             <code>DescribeDBInstanceAutomatedBackups</code> and
 *             <code>DescribeDBInstances</code> operations.</p>
 *          <p>All parameters are optional.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBInstanceAutomatedBackupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeDBInstanceAutomatedBackupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstanceAutomatedBackupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class DescribeDBInstanceAutomatedBackupsCommand extends $Command<
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
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

  constructor(readonly input: DescribeDBInstanceAutomatedBackupsCommandInput) {
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
  ): Handler<DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBInstanceAutomatedBackupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBInstanceAutomatedBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBInstanceAutomatedBackupsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DBInstanceAutomatedBackupMessageFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDBInstanceAutomatedBackupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> {
    return deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
