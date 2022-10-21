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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import {
  RegisterCrossAccountAccessRoleRequest,
  RegisterCrossAccountAccessRoleRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand,
  serializeAws_json1_1RegisterCrossAccountAccessRoleCommand,
} from "../protocols/Aws_json1_1";

export interface RegisterCrossAccountAccessRoleCommandInput extends RegisterCrossAccountAccessRoleRequest {}
export interface RegisterCrossAccountAccessRoleCommandOutput extends __MetadataBearer {}

/**
 * <p>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to
 *          perform security assessments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, RegisterCrossAccountAccessRoleCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, RegisterCrossAccountAccessRoleCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new RegisterCrossAccountAccessRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCrossAccountAccessRoleCommandInput} for command's `input` shape.
 * @see {@link RegisterCrossAccountAccessRoleCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 */
export class RegisterCrossAccountAccessRoleCommand extends $Command<
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
  InspectorClientResolvedConfig
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

  constructor(readonly input: RegisterCrossAccountAccessRoleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterCrossAccountAccessRoleCommandInput, RegisterCrossAccountAccessRoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterCrossAccountAccessRoleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "RegisterCrossAccountAccessRoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCrossAccountAccessRoleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RegisterCrossAccountAccessRoleCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1RegisterCrossAccountAccessRoleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterCrossAccountAccessRoleCommandOutput> {
    return deserializeAws_json1_1RegisterCrossAccountAccessRoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
