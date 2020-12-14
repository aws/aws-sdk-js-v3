import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { FileSystemPolicyDescription, PutFileSystemPolicyRequest } from "../models/models_0";
import {
  deserializeAws_restJson1PutFileSystemPolicyCommand,
  serializeAws_restJson1PutFileSystemPolicyCommand,
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

export type PutFileSystemPolicyCommandInput = PutFileSystemPolicyRequest;
export type PutFileSystemPolicyCommandOutput = FileSystemPolicyDescription & __MetadataBearer;

/**
 * <p>Applies an Amazon EFS <code>FileSystemPolicy</code> to an Amazon EFS file system.
 *       A file system policy is an IAM resource-based policy and can contain multiple policy statements.
 *       A file system always has exactly one file system policy, which can be the default policy or
 *       an explicit policy set or updated using this API operation.
 *       When an explicit policy is set, it overrides the default policy. For more information about the default file system policy, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html#default-filesystempolicy">Default EFS File System Policy</a>.
 *     </p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutFileSystemPolicy</code> action.</p>
 */
export class PutFileSystemPolicyCommand extends $Command<
  PutFileSystemPolicyCommandInput,
  PutFileSystemPolicyCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutFileSystemPolicyCommandInput) {
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
  ): Handler<PutFileSystemPolicyCommandInput, PutFileSystemPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "PutFileSystemPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutFileSystemPolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: FileSystemPolicyDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutFileSystemPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PutFileSystemPolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutFileSystemPolicyCommandOutput> {
    return deserializeAws_restJson1PutFileSystemPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
