// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
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
  CopyWorkspaceImageRequest,
  CopyWorkspaceImageRequestFilterSensitiveLog,
  CopyWorkspaceImageResult,
  CopyWorkspaceImageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CopyWorkspaceImageCommand,
  serializeAws_json1_1CopyWorkspaceImageCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface CopyWorkspaceImageCommandInput extends CopyWorkspaceImageRequest {}
export interface CopyWorkspaceImageCommandOutput extends CopyWorkspaceImageResult, __MetadataBearer {}

/**
 * <p>Copies the specified image from the specified Region to the current Region. For more
 *          information about copying images, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/copy-custom-image.html"> Copy a Custom WorkSpaces
 *             Image</a>.</p>
 *          <p>In the China (Ningxia) Region, you can copy images only within the same Region.</p>
 *          <p>In Amazon Web Services GovCloud (US), to copy images to and from other Regions, contact Amazon Web Services Support.</p>
 *          <important>
 *             <p>Before copying a shared image, be sure to verify that it has been shared from the
 *             correct Amazon Web Services account. To determine if an image has been shared and to see
 *             the ID of the Amazon Web Services account that owns an image, use the <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">DescribeWorkSpaceImages</a> and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImagePermissions.html">DescribeWorkspaceImagePermissions</a> API operations. </p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CopyWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CopyWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CopyWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CopyWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class CopyWorkspaceImageCommand extends $Command<
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput,
  WorkSpacesClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyWorkspaceImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CopyWorkspaceImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CopyWorkspaceImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CopyWorkspaceImageResultFilterSensitiveLog,
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
