// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CreateAccountAssignmentRequest,
  CreateAccountAssignmentRequestFilterSensitiveLog,
  CreateAccountAssignmentResponse,
  CreateAccountAssignmentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAccountAssignmentCommand,
  serializeAws_json1_1CreateAccountAssignmentCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

export interface CreateAccountAssignmentCommandInput extends CreateAccountAssignmentRequest {}
export interface CreateAccountAssignmentCommandOutput extends CreateAccountAssignmentResponse, __MetadataBearer {}

/**
 * <p>Assigns access to a principal for a specified AWS account using a specified
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
 * const command = new CreateAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
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
      inputFilterSensitiveLog: CreateAccountAssignmentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAccountAssignmentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAccountAssignmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAccountAssignmentCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAccountAssignmentCommandOutput> {
    return deserializeAws_json1_1CreateAccountAssignmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
