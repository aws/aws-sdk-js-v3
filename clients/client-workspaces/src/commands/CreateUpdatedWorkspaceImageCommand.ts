// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateUpdatedWorkspaceImageRequest, CreateUpdatedWorkspaceImageResult } from "../models/models_0";
import { de_CreateUpdatedWorkspaceImageCommand, se_CreateUpdatedWorkspaceImageCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateUpdatedWorkspaceImageCommand}.
 */
export interface CreateUpdatedWorkspaceImageCommandInput extends CreateUpdatedWorkspaceImageRequest {}
/**
 * @public
 *
 * The output of {@link CreateUpdatedWorkspaceImageCommand}.
 */
export interface CreateUpdatedWorkspaceImageCommandOutput extends CreateUpdatedWorkspaceImageResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new updated WorkSpace image based on the specified source image. The new
 *          updated WorkSpace image has the latest drivers and other updates required by the
 *          Amazon WorkSpaces components.</p>
 *          <p>To determine which WorkSpace images need to be updated with the latest Amazon WorkSpaces
 *          requirements, use <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_DescribeWorkspaceImages.html">
 *             DescribeWorkspaceImages</a>.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>Only Windows 10, Windows Server 2016, and Windows Server 2019 WorkSpace images
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
 * const input = { // CreateUpdatedWorkspaceImageRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   SourceImageId: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateUpdatedWorkspaceImageCommand(input);
 * const response = await client.send(command);
 * // { // CreateUpdatedWorkspaceImageResult
 * //   ImageId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateUpdatedWorkspaceImageCommandInput - {@link CreateUpdatedWorkspaceImageCommandInput}
 * @returns {@link CreateUpdatedWorkspaceImageCommandOutput}
 * @see {@link CreateUpdatedWorkspaceImageCommandInput} for command's `input` shape.
 * @see {@link CreateUpdatedWorkspaceImageCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link InvalidResourceStateException} (client fault)
 *  <p>The state of the resource is not valid for this operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>Your resource limits have been exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "CreateUpdatedWorkspaceImage",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateUpdatedWorkspaceImageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateUpdatedWorkspaceImageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateUpdatedWorkspaceImageCommandOutput> {
    return de_CreateUpdatedWorkspaceImageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
