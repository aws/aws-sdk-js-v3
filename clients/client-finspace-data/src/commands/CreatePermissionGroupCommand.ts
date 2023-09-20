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
  CreatePermissionGroupRequest,
  CreatePermissionGroupRequestFilterSensitiveLog,
  CreatePermissionGroupResponse,
} from "../models/models_0";
import { de_CreatePermissionGroupCommand, se_CreatePermissionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreatePermissionGroupCommand}.
 */
export interface CreatePermissionGroupCommandInput extends CreatePermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreatePermissionGroupCommand}.
 */
export interface CreatePermissionGroupCommandOutput extends CreatePermissionGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a group of permissions for various actions that a user can perform in FinSpace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, CreatePermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, CreatePermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // CreatePermissionGroupRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   applicationPermissions: [ // ApplicationPermissionList // required
 *     "CreateDataset" || "ManageClusters" || "ManageUsersAndGroups" || "ManageAttributeSets" || "ViewAuditData" || "AccessNotebooks" || "GetTemporaryCredentials",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreatePermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreatePermissionGroupResponse
 * //   permissionGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePermissionGroupCommandInput - {@link CreatePermissionGroupCommandInput}
 * @returns {@link CreatePermissionGroupCommandOutput}
 * @see {@link CreatePermissionGroupCommandInput} for command's `input` shape.
 * @see {@link CreatePermissionGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit has exceeded.</p>
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
export class CreatePermissionGroupCommand extends $Command<
  CreatePermissionGroupCommandInput,
  CreatePermissionGroupCommandOutput,
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
  constructor(readonly input: CreatePermissionGroupCommandInput) {
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
  ): Handler<CreatePermissionGroupCommandInput, CreatePermissionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePermissionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "CreatePermissionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePermissionGroupRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "CreatePermissionGroup",
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
  private serialize(input: CreatePermissionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreatePermissionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePermissionGroupCommandOutput> {
    return de_CreatePermissionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
