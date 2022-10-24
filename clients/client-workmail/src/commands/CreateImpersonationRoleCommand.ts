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
  CreateImpersonationRoleRequest,
  CreateImpersonationRoleRequestFilterSensitiveLog,
  CreateImpersonationRoleResponse,
  CreateImpersonationRoleResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateImpersonationRoleCommand,
  serializeAws_json1_1CreateImpersonationRoleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

export interface CreateImpersonationRoleCommandInput extends CreateImpersonationRoleRequest {}
export interface CreateImpersonationRoleCommandOutput extends CreateImpersonationRoleResponse, __MetadataBearer {}

/**
 * <p>Creates an impersonation role for the given WorkMail organization.</p>
 *          <p>
 *             <i>Idempotency</i> ensures that an API request completes no more than one
 *          time. With an idempotent request, if the original request completes successfully, any
 *          subsequent retries also complete successfully without performing any further
 *          actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateImpersonationRoleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateImpersonationRoleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new CreateImpersonationRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateImpersonationRoleCommandInput} for command's `input` shape.
 * @see {@link CreateImpersonationRoleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 */
export class CreateImpersonationRoleCommand extends $Command<
  CreateImpersonationRoleCommandInput,
  CreateImpersonationRoleCommandOutput,
  WorkMailClientResolvedConfig
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

  constructor(readonly input: CreateImpersonationRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkMailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImpersonationRoleCommandInput, CreateImpersonationRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImpersonationRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkMailClient";
    const commandName = "CreateImpersonationRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateImpersonationRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateImpersonationRoleResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateImpersonationRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateImpersonationRoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImpersonationRoleCommandOutput> {
    return deserializeAws_json1_1CreateImpersonationRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
