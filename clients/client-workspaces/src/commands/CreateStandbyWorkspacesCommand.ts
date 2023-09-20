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

import { CreateStandbyWorkspacesRequest, CreateStandbyWorkspacesResult } from "../models/models_0";
import { de_CreateStandbyWorkspacesCommand, se_CreateStandbyWorkspacesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateStandbyWorkspacesCommand}.
 */
export interface CreateStandbyWorkspacesCommandInput extends CreateStandbyWorkspacesRequest {}
/**
 * @public
 *
 * The output of {@link CreateStandbyWorkspacesCommand}.
 */
export interface CreateStandbyWorkspacesCommandOutput extends CreateStandbyWorkspacesResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a standby WorkSpace in a secondary Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, CreateStandbyWorkspacesCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, CreateStandbyWorkspacesCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * const client = new WorkSpacesClient(config);
 * const input = { // CreateStandbyWorkspacesRequest
 *   PrimaryRegion: "STRING_VALUE", // required
 *   StandbyWorkspaces: [ // StandbyWorkspacesList // required
 *     { // StandbyWorkspace
 *       PrimaryWorkspaceId: "STRING_VALUE", // required
 *       VolumeEncryptionKey: "STRING_VALUE",
 *       DirectoryId: "STRING_VALUE", // required
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE", // required
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateStandbyWorkspacesCommand(input);
 * const response = await client.send(command);
 * // { // CreateStandbyWorkspacesResult
 * //   FailedStandbyRequests: [ // FailedCreateStandbyWorkspacesRequestList
 * //     { // FailedCreateStandbyWorkspacesRequest
 * //       StandbyWorkspaceRequest: { // StandbyWorkspace
 * //         PrimaryWorkspaceId: "STRING_VALUE", // required
 * //         VolumeEncryptionKey: "STRING_VALUE",
 * //         DirectoryId: "STRING_VALUE", // required
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PendingStandbyRequests: [ // PendingCreateStandbyWorkspacesRequestList
 * //     { // PendingCreateStandbyWorkspacesRequest
 * //       UserName: "STRING_VALUE",
 * //       DirectoryId: "STRING_VALUE",
 * //       State: "PENDING" || "AVAILABLE" || "IMPAIRED" || "UNHEALTHY" || "REBOOTING" || "STARTING" || "REBUILDING" || "RESTORING" || "MAINTENANCE" || "ADMIN_MAINTENANCE" || "TERMINATING" || "TERMINATED" || "SUSPENDED" || "UPDATING" || "STOPPING" || "STOPPED" || "ERROR",
 * //       WorkspaceId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateStandbyWorkspacesCommandInput - {@link CreateStandbyWorkspacesCommandInput}
 * @returns {@link CreateStandbyWorkspacesCommandOutput}
 * @see {@link CreateStandbyWorkspacesCommandInput} for command's `input` shape.
 * @see {@link CreateStandbyWorkspacesCommandOutput} for command's `response` shape.
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
export class CreateStandbyWorkspacesCommand extends $Command<
  CreateStandbyWorkspacesCommandInput,
  CreateStandbyWorkspacesCommandOutput,
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
  constructor(readonly input: CreateStandbyWorkspacesCommandInput) {
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
  ): Handler<CreateStandbyWorkspacesCommandInput, CreateStandbyWorkspacesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStandbyWorkspacesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesClient";
    const commandName = "CreateStandbyWorkspacesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WorkspacesService",
        operation: "CreateStandbyWorkspaces",
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
  private serialize(input: CreateStandbyWorkspacesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateStandbyWorkspacesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStandbyWorkspacesCommandOutput> {
    return de_CreateStandbyWorkspacesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
