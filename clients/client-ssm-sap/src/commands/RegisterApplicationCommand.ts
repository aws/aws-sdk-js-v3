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
  RegisterApplicationInput,
  RegisterApplicationInputFilterSensitiveLog,
  RegisterApplicationOutput,
  RegisterApplicationOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1RegisterApplicationCommand,
  serializeAws_restJson1RegisterApplicationCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

export interface RegisterApplicationCommandInput extends RegisterApplicationInput {}
export interface RegisterApplicationCommandOutput extends RegisterApplicationOutput, __MetadataBearer {}

/**
 * <p>Register an SAP application with AWS Systems Manager for SAP. You must meet the
 *          following requirements before registering. </p>
 *          <p>The SAP application you want to register with AWS Systems Manager for SAP is running
 *          on Amazon EC2.</p>
 *          <p>AWS Systems Manager Agent must be setup on an Amazon EC2 instance along with the required
 *          IAM permissions.</p>
 *          <p>Amazon EC2 instance(s) must have access to the secrets created in AWS Secrets Manager to
 *          manage SAP applications and components.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, RegisterApplicationCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, RegisterApplicationCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const command = new RegisterApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterApplicationCommandInput} for command's `input` shape.
 * @see {@link RegisterApplicationCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 */
export class RegisterApplicationCommand extends $Command<
  RegisterApplicationCommandInput,
  RegisterApplicationCommandOutput,
  SsmSapClientResolvedConfig
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

  constructor(readonly input: RegisterApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterApplicationCommandInput, RegisterApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "RegisterApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterApplicationInputFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterApplicationOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterApplicationCommandOutput> {
    return deserializeAws_restJson1RegisterApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
