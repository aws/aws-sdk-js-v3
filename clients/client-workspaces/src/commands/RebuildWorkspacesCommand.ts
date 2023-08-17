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
} from "@smithy/types";

import { RebuildWorkspacesRequest, RebuildWorkspacesResult } from "../models/models_0";
import { de_RebuildWorkspacesCommand, se_RebuildWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RebuildWorkspacesCommand}.
 */
export interface RebuildWorkspacesCommandInput extends RebuildWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link RebuildWorkspacesCommand}.
 */
export interface RebuildWorkspacesCommandOutput extends RebuildWorkspacesResult, __MetadataBearer {}

/**
 * @public
 * <p>Rebuilds the specified WorkSpace.</p>
 *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
 *             <code>ERROR</code>, <code>UNHEALTHY</code>, <code>STOPPED</code>, or
 *             <code>REBOOTING</code>.</p>
 *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
 *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
 *          WorkSpace</a>.</p>
 *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
 *          rebuilt.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, RebuildWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, RebuildWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // RebuildWorkspacesRequest
 *   RebuildWorkspaceRequests: [ // RebuildWorkspaceRequests // required
 *     { // RebuildRequest
 *       WorkspaceId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new RebuildWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // RebuildWorkspacesResult
 * //   FailedRequests: [ // FailedRebuildWorkspaceRequests
 * //     { // FailedWorkspaceChangeRequest
 * //       WorkspaceId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param RebuildWorkspacesCommandInput - {@link RebuildWorkspacesCommandInput}
 * @returns {@link RebuildWorkspacesCommandOutput}
 * @see {@link RebuildWorkspacesCommandInput} for command's `input` shape.
 * @see {@link RebuildWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>This operation is not supported.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class RebuildWorkspacesCommand extends $Command<
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput,
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
  constructor(readonly input: RebuildWorkspacesCommandInput) {
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
  ): Handler<RebuildWorkspacesCommandInput, RebuildWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RebuildWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "RebuildWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: RebuildWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RebuildWorkspacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RebuildWorkspacesCommandOutput> {
    return de_RebuildWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
