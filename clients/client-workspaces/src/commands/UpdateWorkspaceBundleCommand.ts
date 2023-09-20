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

import { UpdateWorkspaceBundleRequest, UpdateWorkspaceBundleResult } from "../models/models_0";
import { de_UpdateWorkspaceBundleCommand, se_UpdateWorkspaceBundleCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkspaceBundleCommand}.
 */
export interface UpdateWorkspaceBundleCommandInput extends UpdateWorkspaceBundleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkspaceBundleCommand}.
 */
export interface UpdateWorkspaceBundleCommandOutput extends UpdateWorkspaceBundleResult, __MetadataBearer {}

/**
 * @public
 * <p>Updates a WorkSpace bundle with a new image. For more information about updating WorkSpace bundles, see
 *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-custom-bundle.html">
 *             Update a Custom WorkSpaces Bundle</a>.</p>
 *          <important>
 *             <p>Existing WorkSpaces aren't automatically updated when you update the bundle that they're
 *             based on. To update existing WorkSpaces that are based on a bundle that you've updated, you
 *             must either rebuild the WorkSpaces or delete and recreate them.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, UpdateWorkspaceBundleCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, UpdateWorkspaceBundleCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // UpdateWorkspaceBundleRequest
 *   BundleId: "STRING_VALUE",
 *   ImageId: "STRING_VALUE",
 * };
 * const command = new UpdateWorkspaceBundleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkspaceBundleCommandInput - {@link UpdateWorkspaceBundleCommandInput}
 * @returns {@link UpdateWorkspaceBundleCommandOutput}
 * @see {@link UpdateWorkspaceBundleCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceBundleCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link InvalidParameterValuesException} (client fault)
 *  <p>One or more parameter values are not valid.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *  <p>The specified resource is not available.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class UpdateWorkspaceBundleCommand extends $Command<
  UpdateWorkspaceBundleCommandInput,
  UpdateWorkspaceBundleCommandOutput,
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
  constructor(readonly input: UpdateWorkspaceBundleCommandInput) {
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
  ): Handler<UpdateWorkspaceBundleCommandInput, UpdateWorkspaceBundleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkspaceBundleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "UpdateWorkspaceBundleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "UpdateWorkspaceBundle",
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
  private serialize(input: UpdateWorkspaceBundleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkspaceBundleCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkspaceBundleCommandOutput> {
    return de_UpdateWorkspaceBundleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
