// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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
  StartDBInstanceAutomatedBackupsReplicationMessage,
  StartDBInstanceAutomatedBackupsReplicationMessageFilterSensitiveLog,
  StartDBInstanceAutomatedBackupsReplicationResult,
  StartDBInstanceAutomatedBackupsReplicationResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand,
  serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface StartDBInstanceAutomatedBackupsReplicationCommandInput
  extends StartDBInstanceAutomatedBackupsReplicationMessage {}
export interface StartDBInstanceAutomatedBackupsReplicationCommandOutput
  extends StartDBInstanceAutomatedBackupsReplicationResult,
    __MetadataBearer {}

/**
 * <p>Enables replication of automated backups to a different Amazon Web Services Region.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html">
 *             Replicating Automated Backups to Another Amazon Web Services Region</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartDBInstanceAutomatedBackupsReplicationCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartDBInstanceAutomatedBackupsReplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandInput} for command's `input` shape.
 * @see {@link StartDBInstanceAutomatedBackupsReplicationCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class StartDBInstanceAutomatedBackupsReplicationCommand extends $Command<
  StartDBInstanceAutomatedBackupsReplicationCommandInput,
  StartDBInstanceAutomatedBackupsReplicationCommandOutput,
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

  constructor(readonly input: StartDBInstanceAutomatedBackupsReplicationCommandInput) {
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
    StartDBInstanceAutomatedBackupsReplicationCommandInput,
    StartDBInstanceAutomatedBackupsReplicationCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        StartDBInstanceAutomatedBackupsReplicationCommand.getEndpointParameterInstructions()
      )
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartDBInstanceAutomatedBackupsReplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDBInstanceAutomatedBackupsReplicationMessageFilterSensitiveLog,
      outputFilterSensitiveLog: StartDBInstanceAutomatedBackupsReplicationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: StartDBInstanceAutomatedBackupsReplicationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<StartDBInstanceAutomatedBackupsReplicationCommandOutput> {
    return deserializeAws_queryStartDBInstanceAutomatedBackupsReplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
