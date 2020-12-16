import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { BackupPolicyDescription, DescribeBackupPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeBackupPolicyCommand,
  serializeAws_restJson1DescribeBackupPolicyCommand,
} from "../protocols/Aws_restJson1";
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

export type DescribeBackupPolicyCommandInput = DescribeBackupPolicyRequest;
export type DescribeBackupPolicyCommandOutput = BackupPolicyDescription & __MetadataBearer;

/**
 * <p>Returns the backup policy for the specified EFS file system.</p>
 */
export class DescribeBackupPolicyCommand extends $Command<
  DescribeBackupPolicyCommandInput,
  DescribeBackupPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeBackupPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EFSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBackupPolicyCommandInput, DescribeBackupPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "DescribeBackupPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeBackupPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BackupPolicyDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeBackupPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeBackupPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBackupPolicyCommandOutput> {
    return deserializeAws_restJson1DescribeBackupPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
