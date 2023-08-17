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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import {
  UpdatePermissionGroupRequest,
  UpdatePermissionGroupRequestFilterSensitiveLog,
  UpdatePermissionGroupResponse,
} from "../models/models_0";
import { de_UpdatePermissionGroupCommand, se_UpdatePermissionGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePermissionGroupCommand}.
 */
export interface UpdatePermissionGroupCommandInput extends UpdatePermissionGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePermissionGroupCommand}.
 */
export interface UpdatePermissionGroupCommandOutput extends UpdatePermissionGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Modifies the details of a permission group. You cannot modify a <code>permissionGroupID</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, UpdatePermissionGroupCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, UpdatePermissionGroupCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // UpdatePermissionGroupRequest
 *   permissionGroupId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   applicationPermissions: [ // ApplicationPermissionList
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePermissionGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePermissionGroupResponse
 * //   permissionGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePermissionGroupCommandInput - {@link UpdatePermissionGroupCommandInput}
 * @returns {@link UpdatePermissionGroupCommandOutput}
 * @see {@link UpdatePermissionGroupCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionGroupCommandOutput} for command's `response` shape.
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
export class UpdatePermissionGroupCommand extends $Command<
  UpdatePermissionGroupCommandInput,
  UpdatePermissionGroupCommandOutput,
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
  constructor(readonly input: UpdatePermissionGroupCommandInput) {
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
  ): Handler<UpdatePermissionGroupCommandInput, UpdatePermissionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePermissionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "UpdatePermissionGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePermissionGroupRequestFilterSensitiveLog,
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
  private serialize(input: UpdatePermissionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePermissionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePermissionGroupCommandOutput> {
    return de_UpdatePermissionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
