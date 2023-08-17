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

import { StopWorkspacesRequest, StopWorkspacesResult } from "../models/models_0";
import { de_StopWorkspacesCommand, se_StopWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StopWorkspacesCommand}.
 */
export interface StopWorkspacesCommandInput extends StopWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link StopWorkspacesCommand}.
 */
export interface StopWorkspacesCommandOutput extends StopWorkspacesResult, __MetadataBearer {}

/**
 * @public
 * <p> Stops the specified WorkSpaces.</p>
 *          <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
 *          state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or
 *             <code>ERROR</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, StopWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, StopWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // StopWorkspacesRequest
 *   StopWorkspaceRequests: [ // StopWorkspaceRequests // required
 *     { // StopRequest
 *       WorkspaceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StopWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // StopWorkspacesResult
 * //   FailedRequests: [ // FailedStopWorkspaceRequests
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
 * @param StopWorkspacesCommandInput - {@link StopWorkspacesCommandInput}
 * @returns {@link StopWorkspacesCommandOutput}
 * @see {@link StopWorkspacesCommandInput} for command's `input` shape.
 * @see {@link StopWorkspacesCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 */
export class StopWorkspacesCommand extends $Command<
  StopWorkspacesCommandInput,
  StopWorkspacesCommandOutput,
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
  constructor(readonly input: StopWorkspacesCommandInput) {
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
  ): Handler<StopWorkspacesCommandInput, StopWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StopWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "StopWorkspacesCommand";
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
  private serialize(input: StopWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StopWorkspacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopWorkspacesCommandOutput> {
    return de_StopWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
