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
  StopDBInstanceAutomatedBackupsReplicationMessage,
  StopDBInstanceAutomatedBackupsReplicationMessageFilterSensitiveLog,
  StopDBInstanceAutomatedBackupsReplicationResult,
  StopDBInstanceAutomatedBackupsReplicationResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand,
  serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface StopDBInstanceAutomatedBackupsReplicationCommandInput
  extends StopDBInstanceAutomatedBackupsReplicationMessage {}
export interface StopDBInstanceAutomatedBackupsReplicationCommandOutput
  extends StopDBInstanceAutomatedBackupsReplicationResult,
    __MetadataBearer {}

/**
 * <p>Stops automated backup replication for a DB instance.</p>
 *          <p>This command doesn't apply to RDS Custom, Aurora MySQL, and Aurora PostgreSQL.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StopDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StopDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StopDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class StopDBInstanceAutomatedBackupsReplicationCommand extends $Command<
  StopDBInstanceAutomatedBackupsReplicationCommandInput,
  StopDBInstanceAutomatedBackupsReplicationCommandOutput,
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

  constructor(readonly input: StopDBInstanceAutomatedBackupsReplicationCommandInput) {
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
  ): Handler<
    StopDBInstanceAutomatedBackupsReplicationCommandInput,
    StopDBInstanceAutomatedBackupsReplicationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StopDBInstanceAutomatedBackupsReplicationCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StopDBInstanceAutomatedBackupsReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopDBInstanceAutomatedBackupsReplicationMessageFilterSensitiveLog,
      outputFilterSensitiveLog: StopDBInstanceAutomatedBackupsReplicationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StopDBInstanceAutomatedBackupsReplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StopDBInstanceAutomatedBackupsReplicationCommandOutput> {
    return deserializeAws_queryStopDBInstanceAutomatedBackupsReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
