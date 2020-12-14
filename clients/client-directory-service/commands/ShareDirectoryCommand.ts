import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { ShareDirectoryRequest, ShareDirectoryResult } from "../models/models_0";
import {
  deserializeAws_json1_1ShareDirectoryCommand,
  serializeAws_json1_1ShareDirectoryCommand,
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

export type ShareDirectoryCommandInput = ShareDirectoryRequest;
export type ShareDirectoryCommandOutput = ShareDirectoryResult & __MetadataBearer;

/**
 * <p>Shares a specified directory (<code>DirectoryId</code>) in your AWS account (directory
 *       owner) with another AWS account (directory consumer). With this operation you can use your
 *       directory from any AWS account and from any Amazon VPC within an AWS Region.</p>
 *          <p>When you share your AWS Managed Microsoft AD directory, AWS Directory Service creates a
 *       shared directory in the directory consumer account. This shared directory contains the
 *       metadata to provide access to the directory within the directory owner account. The shared
 *       directory is visible in all VPCs in the directory consumer account.</p>
 *          <p>The <code>ShareMethod</code> parameter determines whether the specified directory can be
 *       shared between AWS accounts inside the same AWS organization (<code>ORGANIZATIONS</code>). It
 *       also determines whether you can share the directory with any other AWS account either inside
 *       or outside of the organization (<code>HANDSHAKE</code>).</p>
 *          <p>The <code>ShareNotes</code> parameter is only used when <code>HANDSHAKE</code> is called,
 *       which sends a directory sharing request to the directory consumer. </p>
 */
export class ShareDirectoryCommand extends $Command<
  ShareDirectoryCommandInput,
  ShareDirectoryCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ShareDirectoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ShareDirectoryCommandInput, ShareDirectoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "ShareDirectoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ShareDirectoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ShareDirectoryResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ShareDirectoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ShareDirectoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ShareDirectoryCommandOutput> {
    return deserializeAws_json1_1ShareDirectoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
