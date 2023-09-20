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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  GetPermissionGroupRequest,
  GetPermissionGroupResponse,
  GetPermissionGroupResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPermissionGroupCommand, se_GetPermissionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPermissionGroupCommand}.
 */
export interface GetPermissionGroupCommandInput extends GetPermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetPermissionGroupCommand}.
 */
export interface GetPermissionGroupCommandOutput extends GetPermissionGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details of a specific permission group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, GetPermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, GetPermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // GetPermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetPermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetPermissionGroupResponse
 * //   permissionGroup: { // PermissionGroup
 * //     permissionGroupId: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     applicationPermissions: [ // ApplicationPermissionList
 * //       "CreateDataset" || "ManageClusters" || "ManageUsersAndGroups" || "ManageAttributeSets" || "ViewAuditData" || "AccessNotebooks" || "GetTemporaryCredentials",
 * //     ],
 * //     createTime: Number("long"),
 * //     lastModifiedTime: Number("long"),
 * //     membershipStatus: "ADDITION_IN_PROGRESS" || "ADDITION_SUCCESS" || "REMOVAL_IN_PROGRESS",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPermissionGroupCommandInput - {@link GetPermissionGroupCommandInput}
 * @returns {@link GetPermissionGroupCommandOutput}
 * @see {@link GetPermissionGroupCommandInput} for command's `input` shape.
 * @see {@link GetPermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class GetPermissionGroupCommand extends $Command<
  GetPermissionGroupCommandInput,
  GetPermissionGroupCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: GetPermissionGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetPermissionGroupCommandInput, GetPermissionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPermissionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "GetPermissionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPermissionGroupResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "GetPermissionGroup",
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
  private serialize(input: GetPermissionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPermissionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPermissionGroupCommandOutput> {
    return de_GetPermissionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
