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
  UpdateManagedInstanceRoleRequest,
  UpdateManagedInstanceRoleRequestFilterSensitiveLog,
  UpdateManagedInstanceRoleResult,
  UpdateManagedInstanceRoleResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateManagedInstanceRoleCommand,
  serializeAws_json1_1UpdateManagedInstanceRoleCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface UpdateManagedInstanceRoleCommandInput extends UpdateManagedInstanceRoleRequest {}
export interface UpdateManagedInstanceRoleCommandOutput extends UpdateManagedInstanceRoleResult, __MetadataBearer {}

/**
 * <p>Changes the Identity and Access Management (IAM) role that is assigned to the
 *    on-premises server, edge device, or virtual machines (VM). IAM roles are first
 *    assigned to these hybrid nodes during the activation process. For more information, see <a>CreateActivation</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateManagedInstanceRoleCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateManagedInstanceRoleCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateManagedInstanceRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateManagedInstanceRoleCommandInput} for command's `input` shape.
 * @see {@link UpdateManagedInstanceRoleCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class UpdateManagedInstanceRoleCommand extends $Command<
  UpdateManagedInstanceRoleCommandInput,
  UpdateManagedInstanceRoleCommandOutput,
  SSMClientResolvedConfig
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

  constructor(readonly input: UpdateManagedInstanceRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateManagedInstanceRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateManagedInstanceRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateManagedInstanceRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateManagedInstanceRoleResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateManagedInstanceRoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateManagedInstanceRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateManagedInstanceRoleCommandOutput> {
    return deserializeAws_json1_1UpdateManagedInstanceRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
