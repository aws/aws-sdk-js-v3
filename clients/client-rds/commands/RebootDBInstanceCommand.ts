import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RebootDBInstanceMessage, RebootDBInstanceResult } from "../models/models_1";
import {
  deserializeAws_queryRebootDBInstanceCommand,
  serializeAws_queryRebootDBInstanceCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type RebootDBInstanceCommandInput = RebootDBInstanceMessage;
export type RebootDBInstanceCommandOutput = RebootDBInstanceResult & __MetadataBearer;

/**
 * <p>You might need to reboot your DB instance, usually for maintenance reasons.
 *         For example, if you make certain modifications,
 *         or if you change the DB parameter group associated with the DB instance,
 *         you must reboot the instance for the changes to take effect.
 *     </p>
 *
 *          <p>Rebooting a DB instance restarts the database engine service.
 *         Rebooting a DB instance results in a momentary outage, during which the DB instance status is set to rebooting.
 *     </p>
 *
 *          <p>For more information about rebooting, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RebootInstance.html">Rebooting a DB Instance</a> in the <i>Amazon RDS User Guide.</i>
 *          </p>
 */
export class RebootDBInstanceCommand extends $Command<
  RebootDBInstanceCommandInput,
  RebootDBInstanceCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RebootDBInstanceCommandInput) {
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
  ): Handler<RebootDBInstanceCommandInput, RebootDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RebootDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RebootDBInstanceMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RebootDBInstanceResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RebootDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRebootDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebootDBInstanceCommandOutput> {
    return deserializeAws_queryRebootDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
