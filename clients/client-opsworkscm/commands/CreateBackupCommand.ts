import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { CreateBackupRequest, CreateBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateBackupCommand,
  serializeAws_json1_1CreateBackupCommand,
} from "../protocols/Aws_json1_1";
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

export type CreateBackupCommandInput = CreateBackupRequest;
export type CreateBackupCommandOutput = CreateBackupResponse & __MetadataBearer;

/**
 * <p>
 *       Creates an application-level backup of a server. While the
 *       server is in the <code>BACKING_UP</code> state, the server cannot be
 *       changed, and no additional backup can be created.
 *     </p>
 *          <p>
 *       Backups can be created for servers in <code>RUNNING</code>, <code>HEALTHY</code>, and <code>UNHEALTHY</code> states. By default, you can create a maximum of 50
 *       manual backups.
 *     </p>
 *          <p>
 *       This operation is asynchronous.
 *     </p>
 *          <p>
 *       A <code>LimitExceededException</code> is thrown when the maximum number of manual backups is reached.
 *       An <code>InvalidStateException</code> is thrown when the server is not in any of the following states: RUNNING, HEALTHY, or UNHEALTHY.
 *       A <code>ResourceNotFoundException</code> is thrown when the server is not found.
 *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
 *     </p>
 */
export class CreateBackupCommand extends $Command<
  CreateBackupCommandInput,
  CreateBackupCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBackupCommandInput, CreateBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "CreateBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBackupCommandOutput> {
    return deserializeAws_json1_1CreateBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
