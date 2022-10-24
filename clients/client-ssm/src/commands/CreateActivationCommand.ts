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
  CreateActivationRequest,
  CreateActivationRequestFilterSensitiveLog,
  CreateActivationResult,
  CreateActivationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateActivationCommand,
  serializeAws_json1_1CreateActivationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface CreateActivationCommandInput extends CreateActivationRequest {}
export interface CreateActivationCommandOutput extends CreateActivationResult, __MetadataBearer {}

/**
 * <p>Generates an activation code and activation ID you can use to register your on-premises
 *    servers, edge devices, or virtual machine (VM) with Amazon Web Services Systems Manager. Registering these machines with
 *    Systems Manager makes it possible to manage them using Systems Manager capabilities. You use the activation code and
 *    ID when installing SSM Agent on machines in your hybrid environment. For more information about
 *    requirements for managing on-premises machines using Systems Manager, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-managedinstances.html">Setting up
 *     Amazon Web Services Systems Manager for hybrid environments</a> in the <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 *          <note>
 *             <p>Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, and on-premises servers and VMs that are
 *     configured for Systems Manager are all called <i>managed nodes</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateActivationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateActivationCommandInput} for command's `input` shape.
 * @see {@link CreateActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class CreateActivationCommand extends $Command<
  CreateActivationCommandInput,
  CreateActivationCommandOutput,
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

  constructor(readonly input: CreateActivationCommandInput) {
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
  ): Handler<CreateActivationCommandInput, CreateActivationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateActivationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateActivationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateActivationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateActivationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateActivationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateActivationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateActivationCommandOutput> {
    return deserializeAws_json1_1CreateActivationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
