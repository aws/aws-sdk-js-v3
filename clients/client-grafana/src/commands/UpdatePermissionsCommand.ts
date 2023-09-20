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

import { GrafanaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GrafanaClient";
import { UpdatePermissionsRequest, UpdatePermissionsResponse } from "../models/models_0";
import { de_UpdatePermissionsCommand, se_UpdatePermissionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdatePermissionsCommand}.
 */
export interface UpdatePermissionsCommandInput extends UpdatePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePermissionsCommand}.
 */
export interface UpdatePermissionsCommandOutput extends UpdatePermissionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates which users in a workspace have the Grafana <code>Admin</code> or
 *                 <code>Editor</code> roles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GrafanaClient, UpdatePermissionsCommand } from "@aws-sdk/client-grafana"; // ES Modules import
 * // const { GrafanaClient, UpdatePermissionsCommand } = require("@aws-sdk/client-grafana"); // CommonJS import
 * const client = new GrafanaClient(config);
 * const input = { // UpdatePermissionsRequest
 *   updateInstructionBatch: [ // UpdateInstructionBatch // required
 *     { // UpdateInstruction
 *       action: "STRING_VALUE", // required
 *       role: "STRING_VALUE", // required
 *       users: [ // UserList // required
 *         { // User
 *           id: "STRING_VALUE", // required
 *           type: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   ],
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new UpdatePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePermissionsResponse
 * //   errors: [ // UpdateErrorList // required
 * //     { // UpdateError
 * //       code: Number("int"), // required
 * //       message: "STRING_VALUE", // required
 * //       causedBy: { // UpdateInstruction
 * //         action: "STRING_VALUE", // required
 * //         role: "STRING_VALUE", // required
 * //         users: [ // UserList // required
 * //           { // User
 * //             id: "STRING_VALUE", // required
 * //             type: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdatePermissionsCommandInput - {@link UpdatePermissionsCommandInput}
 * @returns {@link UpdatePermissionsCommandOutput}
 * @see {@link UpdatePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdatePermissionsCommandOutput} for command's `response` shape.
 * @see {@link GrafanaClientResolvedConfig | config} for GrafanaClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error while processing the request. Retry the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link GrafanaServiceException}
 * <p>Base exception class for all service exceptions from Grafana service.</p>
 *
 */
export class UpdatePermissionsCommand extends $Command<
  UpdatePermissionsCommandInput,
  UpdatePermissionsCommandOutput,
  GrafanaClientResolvedConfig
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
  constructor(readonly input: UpdatePermissionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GrafanaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdatePermissionsCommandInput, UpdatePermissionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePermissionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GrafanaClient";
    const commandName = "UpdatePermissionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGrafanaControlPlane",
        operation: "UpdatePermissions",
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
  private serialize(input: UpdatePermissionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdatePermissionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePermissionsCommandOutput> {
    return de_UpdatePermissionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
