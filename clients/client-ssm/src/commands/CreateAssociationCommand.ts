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
  CreateAssociationRequest,
  CreateAssociationRequestFilterSensitiveLog,
  CreateAssociationResult,
  CreateAssociationResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateAssociationCommand,
  serializeAws_json1_1CreateAssociationCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

export interface CreateAssociationCommandInput extends CreateAssociationRequest {}
export interface CreateAssociationCommandOutput extends CreateAssociationResult, __MetadataBearer {}

/**
 * <p>A State Manager association defines the state that you want to maintain on your managed
 *    nodes. For example, an association can specify that anti-virus software must be installed and
 *    running on your managed nodes, or that certain ports must be closed. For static targets, the
 *    association specifies a schedule for when the configuration is reapplied. For dynamic targets,
 *    such as an Amazon Web Services resource group or an Amazon Web Services autoscaling group, State Manager, a capability of
 *    Amazon Web Services Systems Manager applies the configuration when new managed nodes are added to the group. The
 *    association also specifies actions to take when applying the configuration. For example, an
 *    association for anti-virus software might run once a day. If the software isn't installed, then
 *    State Manager installs it. If the software is installed, but the service isn't running, then the
 *    association might instruct State Manager to start the service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 */
export class CreateAssociationCommand extends $Command<
  CreateAssociationCommandInput,
  CreateAssociationCommandOutput,
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

  constructor(readonly input: CreateAssociationCommandInput) {
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
  ): Handler<CreateAssociationCommandInput, CreateAssociationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAssociationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateAssociationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAssociationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAssociationResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAssociationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAssociationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAssociationCommandOutput> {
    return deserializeAws_json1_1CreateAssociationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
