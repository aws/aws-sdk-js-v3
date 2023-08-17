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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateGroupRequest } from "../models/models_1";
import { de_UpdateGroupCommand, se_UpdateGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandInput extends UpdateGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Updates the name and/or the path of the specified IAM group.</p>
 *          <important>
 *             <p> You should understand the implications of changing a group's path or name. For
 *                 more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and
 *                     groups</a> in the <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *                 role group with the old name and the new name. For example, to change the group
 *                 named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy
 *                 that allows them to update both groups. If the principal has permission to update
 *                 the <code>Managers</code> group, but not the <code>MGRs</code> group, then the
 *                 update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>.
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // UpdateGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   NewPath: "STRING_VALUE",
 *   NewGroupName: "STRING_VALUE",
 * };
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGroupCommandInput - {@link UpdateGroupCommandInput}
 * @returns {@link UpdateGroupCommandOutput}
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @example To rename an IAM group
 * ```javascript
 * // The following command changes the name of the IAM group Test to Test-1.
 * const input = {
 *   "GroupName": "Test",
 *   "NewGroupName": "Test-1"
 * };
 * const command = new UpdateGroupCommand(input);
 * await client.send(command);
 * // example id: f0cf1662-91ae-4278-a80e-7db54256ccba
 * ```
 *
 */
export class UpdateGroupCommand extends $Command<
  UpdateGroupCommandInput,
  UpdateGroupCommandOutput,
  IAMClientResolvedConfig
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
  constructor(readonly input: UpdateGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateGroupCommandInput, UpdateGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateGroupCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateGroupCommand";
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
  private serialize(input: UpdateGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGroupCommandOutput> {
    return de_UpdateGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
