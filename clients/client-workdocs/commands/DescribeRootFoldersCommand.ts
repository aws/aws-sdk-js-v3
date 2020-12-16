import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeRootFoldersRequest, DescribeRootFoldersResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DescribeRootFoldersCommand,
  serializeAws_restJson1DescribeRootFoldersCommand,
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

export type DescribeRootFoldersCommandInput = DescribeRootFoldersRequest;
export type DescribeRootFoldersCommandOutput = DescribeRootFoldersResponse & __MetadataBearer;

/**
 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the
 *                 <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and
 *             folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid
 *             action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *             WorkDocs Developer Guide</i>.</p>
 */
export class DescribeRootFoldersCommand extends $Command<
  DescribeRootFoldersCommandInput,
  DescribeRootFoldersCommandOutput,
  WorkDocsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeRootFoldersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkDocsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeRootFoldersCommandInput, DescribeRootFoldersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkDocsClient";
    const commandName = "DescribeRootFoldersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeRootFoldersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeRootFoldersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeRootFoldersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DescribeRootFoldersCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeRootFoldersCommandOutput> {
    return deserializeAws_restJson1DescribeRootFoldersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
