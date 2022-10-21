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

import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import {
  CreateRoleRequest,
  CreateRoleRequestFilterSensitiveLog,
  CreateRoleResponse,
  CreateRoleResponseFilterSensitiveLog,
} from "../models/models_0";
import { deserializeAws_queryCreateRoleCommand, serializeAws_queryCreateRoleCommand } from "../protocols/Aws_query";

export interface CreateRoleCommandInput extends CreateRoleRequest {}
export interface CreateRoleCommandOutput extends CreateRoleResponse, __MetadataBearer {}

/**
 * <p>Creates a new role for your Amazon Web Services account. For more information about roles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">IAM
 *                 roles</a>. For information about quotas for role names and the number of roles
 *             you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS quotas</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRoleCommandInput} for command's `input` shape.
 * @see {@link CreateRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 */
export class CreateRoleCommand extends $Command<
  CreateRoleCommandInput,
  CreateRoleCommandOutput,
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

  constructor(readonly input: CreateRoleCommandInput) {
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
  ): Handler<CreateRoleCommandInput, CreateRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateRoleCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateRoleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateRoleCommandOutput> {
    return deserializeAws_queryCreateRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
