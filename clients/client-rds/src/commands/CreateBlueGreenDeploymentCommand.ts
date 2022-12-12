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
  CreateBlueGreenDeploymentRequest,
  CreateBlueGreenDeploymentRequestFilterSensitiveLog,
  CreateBlueGreenDeploymentResponse,
  CreateBlueGreenDeploymentResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateBlueGreenDeploymentCommand,
  serializeAws_queryCreateBlueGreenDeploymentCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateBlueGreenDeploymentCommandInput extends CreateBlueGreenDeploymentRequest {}
export interface CreateBlueGreenDeploymentCommandOutput extends CreateBlueGreenDeploymentResponse, __MetadataBearer {}

/**
 * <p>Creates a blue/green deployment.</p>
 *          <p>A blue/green deployment creates a staging environment that copies the production environment.
 *             In a blue/green deployment, the blue environment is the current production environment.
 *             The green environment is the staging environment. The staging environment stays in sync
 *             with the current production environment using logical replication.</p>
 *          <p>You can make changes to the databases in the green environment without affecting
 *             production workloads. For example, you can upgrade the major or minor DB engine version, change
 *             database parameters, or make schema changes in the staging environment. You can thoroughly test
 *             changes in the green environment. When ready, you can switch over the environments to promote the
 *             green environment to be the new production environment. The switchover typically takes under a minute.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *             Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *             User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateBlueGreenDeploymentCommand extends $Command<
  CreateBlueGreenDeploymentCommandInput,
  CreateBlueGreenDeploymentCommandOutput,
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

  constructor(readonly input: CreateBlueGreenDeploymentCommandInput) {
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
  ): Handler<CreateBlueGreenDeploymentCommandInput, CreateBlueGreenDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBlueGreenDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateBlueGreenDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBlueGreenDeploymentRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBlueGreenDeploymentResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBlueGreenDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateBlueGreenDeploymentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateBlueGreenDeploymentCommandOutput> {
    return deserializeAws_queryCreateBlueGreenDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
