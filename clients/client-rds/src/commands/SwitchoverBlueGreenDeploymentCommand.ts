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
  SwitchoverBlueGreenDeploymentRequest,
  SwitchoverBlueGreenDeploymentRequestFilterSensitiveLog,
  SwitchoverBlueGreenDeploymentResponse,
  SwitchoverBlueGreenDeploymentResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_querySwitchoverBlueGreenDeploymentCommand,
  serializeAws_querySwitchoverBlueGreenDeploymentCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface SwitchoverBlueGreenDeploymentCommandInput extends SwitchoverBlueGreenDeploymentRequest {}
export interface SwitchoverBlueGreenDeploymentCommandOutput
  extends SwitchoverBlueGreenDeploymentResponse,
    __MetadataBearer {}

/**
 * <p>Switches over a blue/green deployment.</p>
 *          <p>Before you switch over, production traffic is routed to the databases in the blue environment.
 *             After you switch over, production traffic is routed to the databases in the green environment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, SwitchoverBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, SwitchoverBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new SwitchoverBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SwitchoverBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link SwitchoverBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class SwitchoverBlueGreenDeploymentCommand extends $Command<
  SwitchoverBlueGreenDeploymentCommandInput,
  SwitchoverBlueGreenDeploymentCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: SwitchoverBlueGreenDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<SwitchoverBlueGreenDeploymentCommandInput, SwitchoverBlueGreenDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SwitchoverBlueGreenDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "SwitchoverBlueGreenDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SwitchoverBlueGreenDeploymentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SwitchoverBlueGreenDeploymentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SwitchoverBlueGreenDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_querySwitchoverBlueGreenDeploymentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SwitchoverBlueGreenDeploymentCommandOutput> {
    return deserializeAws_querySwitchoverBlueGreenDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
