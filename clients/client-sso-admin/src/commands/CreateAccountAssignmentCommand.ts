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

import { CreateAccountAssignmentRequest, CreateAccountAssignmentResponse } from "../models/models_0";
import { de_CreateAccountAssignmentCommand, se_CreateAccountAssignmentCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAccountAssignmentCommand}.
 */
export interface CreateAccountAssignmentCommandInput extends CreateAccountAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccountAssignmentCommand}.
 */
export interface CreateAccountAssignmentCommandOutput extends CreateAccountAssignmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Assigns access to a principal for a specified Amazon Web Services account using a specified
 *       permission set.</p>
 *          <note>
 *             <p>The term <i>principal</i> here refers to a user or group that is defined
 *         in IAM Identity Center.</p>
 *          </note>
 *          <note>
 *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified
 *         permission set will automatically be provisioned to the account in the form of an IAM
 *         policy. That policy is attached to the IAM role created in IAM Identity Center. If the permission set
 *         is subsequently updated, the corresponding IAM policies attached to roles in your accounts
 *         will not be updated automatically. In this case, you must call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> to make these updates.</p>
 *          </note>
 *          <note>
 *             <p>
 *         After a successful response, call <code>DescribeAccountAssignmentCreationStatus</code> to describe the status of an assignment creation request.
 *       </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const input = { // CreateAccountAssignmentRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   TargetId: "STRING_VALUE", // required
 *   TargetType: "AWS_ACCOUNT", // required
 *   PermissionSetArn: "STRING_VALUE", // required
 *   PrincipalType: "USER" || "GROUP", // required
 *   PrincipalId: "STRING_VALUE", // required
 * };
 * const command = new CreateAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccountAssignmentResponse
 * //   AccountAssignmentCreationStatus: { // AccountAssignmentOperationStatus
 * //     Status: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //     RequestId: "STRING_VALUE",
 * //     FailureReason: "STRING_VALUE",
 * //     TargetId: "STRING_VALUE",
 * //     TargetType: "AWS_ACCOUNT",
 * //     PermissionSetArn: "STRING_VALUE",
 * //     PrincipalType: "USER" || "GROUP",
 * //     PrincipalId: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccountAssignmentCommandInput - {@link CreateAccountAssignmentCommandInput}
 * @returns {@link CreateAccountAssignmentCommandOutput}
 * @see {@link CreateAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with
 *       an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be
 *       created.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API
 *       operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 */
export class CreateAccountAssignmentCommand extends $Command<
  CreateAccountAssignmentCommandInput,
  CreateAccountAssignmentCommandOutput,
  SSOAdminClientResolvedConfig
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
  constructor(readonly input: CreateAccountAssignmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOAdminClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAccountAssignmentCommandInput, CreateAccountAssignmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAccountAssignmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOAdminClient";
    const commandName = "CreateAccountAssignmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SWBExternalService",
        operation: "CreateAccountAssignment",
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
  private serialize(input: CreateAccountAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAccountAssignmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountAssignmentCommandOutput> {
    return de_CreateAccountAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
