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
  CreateUpdatedWorkspaceImageRequest,
  CreateUpdatedWorkspaceImageRequestFilterSensitiveLog,
  CreateUpdatedWorkspaceImageResult,
  CreateUpdatedWorkspaceImageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateUpdatedWorkspaceImageCommand,
  serializeAws_json1_1CreateUpdatedWorkspaceImageCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

export interface CreateUpdatedWorkspaceImageCommandInput extends CreateUpdatedWorkspaceImageRequest {}
export interface CreateUpdatedWorkspaceImageCommandOutput extends CreateUpdatedWorkspaceImageResult, __MetadataBearer {}

/**
 * <p>Creates a new updated WorkSpace image based on the specified source image. The new
 *          updated WorkSpace image has the latest drivers and other updates required by the Amazon
 *          WorkSpaces components.</p>
 *          <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces
 *          requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">
 *             DescribeWorkspaceImages</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Only Windows 10, Windows Sever 2016, and Windows Server 2019 WorkSpace images
 *                   can be programmatically updated at this time.</p>
 *                </li>
 *                <li>
 *                   <p>Microsoft Windows updates and other application updates are not included in the
 *                   update process.</p>
 *                </li>
 *                <li>
 *                   <p>The source WorkSpace image is not deleted. You can delete the source image
 *                   after you've verified your new updated image and created a new bundle. </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateUpdatedWorkspaceImageCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateUpdatedWorkspaceImageCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const command = new CreateUpdatedWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateUpdatedWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 */
export class CreateUpdatedWorkspaceImageCommand extends $Command<
  CreateUpdatedWorkspaceImageCommandInput,
  CreateUpdatedWorkspaceImageCommandOutput,
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

  constructor(readonly input: CreateUpdatedWorkspaceImageCommandInput) {
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
  ): Handler<CreateUpdatedWorkspaceImageCommandInput, CreateUpdatedWorkspaceImageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateUpdatedWorkspaceImageCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateUpdatedWorkspaceImageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUpdatedWorkspaceImageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateUpdatedWorkspaceImageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUpdatedWorkspaceImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUpdatedWorkspaceImageCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUpdatedWorkspaceImageCommandOutput> {
    return deserializeAws_json1_1CreateUpdatedWorkspaceImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
