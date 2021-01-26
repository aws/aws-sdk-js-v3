import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DescribeBackupsRequest, DescribeBackupsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeBackupsCommand,
  serializeAws_json1_1DescribeBackupsCommand,
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

export type DescribeBackupsCommandInput = DescribeBackupsRequest;
export type DescribeBackupsCommandOutput = DescribeBackupsResponse & __MetadataBearer;

/**
 * <p>
 *       Describes backups. The results are ordered by time, with newest backups first.
 *       If you do not specify a BackupId or ServerName, the command returns all backups.
 *     </p>
 *          <p>
 *       This operation is synchronous.
 *     </p>
 *          <p>
 *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
 *       A <code>ValidationException</code> is raised when parameters of the request are not valid.
 *     </p>
 */
export class DescribeBackupsCommand extends $Command<
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBackupsCommandInput) {
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
  ): Handler<DescribeBackupsCommandInput, DescribeBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DescribeBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBackupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeBackupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBackupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeBackupsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupsCommandOutput> {
    return deserializeAws_json1_1DescribeBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
