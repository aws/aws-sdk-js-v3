import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { AccessPointDescription, CreateAccessPointRequest } from "../models/models_0";
import {
  deserializeAws_restJson1CreateAccessPointCommand,
  serializeAws_restJson1CreateAccessPointCommand,
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

export type CreateAccessPointCommandInput = CreateAccessPointRequest;
export type CreateAccessPointCommandOutput = AccessPointDescription & __MetadataBearer;

/**
 * <p>Creates an EFS access point. An access point is an application-specific view into an EFS file system that applies an operating system user and
 *       group, and a file system path, to any file system request made through the access point. The operating system
 *       user and group override any identity information provided by the NFS client. The file system path is exposed as
 *       the access point's root directory. Applications using the access point can only access data in its own directory and below. To learn more, see
 *       <a href="https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html">Mounting a File System Using EFS Access Points</a>.</p>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:CreateAccessPoint</code> action.</p>
 */
export class CreateAccessPointCommand extends $Command<
  CreateAccessPointCommandInput,
  CreateAccessPointCommandOutput,
  EFSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAccessPointCommandInput) {
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
  ): Handler<CreateAccessPointCommandInput, CreateAccessPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EFSClient";
    const commandName = "CreateAccessPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAccessPointRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AccessPointDescription.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccessPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAccessPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccessPointCommandOutput> {
    return deserializeAws_restJson1CreateAccessPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
