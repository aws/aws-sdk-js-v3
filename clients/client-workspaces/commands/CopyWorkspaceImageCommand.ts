import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { CopyWorkspaceImageRequest, CopyWorkspaceImageResult } from "../models/models_0";
import {
  deserializeAws_json1_1CopyWorkspaceImageCommand,
  serializeAws_json1_1CopyWorkspaceImageCommand,
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

export type CopyWorkspaceImageCommandInput = CopyWorkspaceImageRequest;
export type CopyWorkspaceImageCommandOutput = CopyWorkspaceImageResult & __MetadataBearer;

/**
 * <p>Copies the specified image from the specified Region to the current Region.
 *          For more information about copying images, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html">
 *             Copy a Custom WorkSpaces Image</a>.</p>
 *
 *          <note>
 *             <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *
 *             <p>In the AWS GovCloud (US-West) Region, to copy images to and from other AWS Regions,
 *             contact AWS Support.</p>
 *          </note>
 *
 *          <important>
 *             <p>Before copying a shared image, be sure to verify that it has been shared from the
 *             correct AWS account. To determine if an image has been shared and to see the AWS
 *             account ID that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p>
 *          </important>
 */
export class CopyWorkspaceImageCommand extends $Command<
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput,
  WorkSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CopyWorkspaceImageCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CopyWorkspaceImageCommandInput, CopyWorkspaceImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CopyWorkspaceImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyWorkspaceImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyWorkspaceImageResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CopyWorkspaceImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CopyWorkspaceImageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyWorkspaceImageCommandOutput> {
    return deserializeAws_json1_1CopyWorkspaceImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
