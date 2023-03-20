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

import { DeleteBlueGreenDeploymentRequest, DeleteBlueGreenDeploymentResponse } from "../models/models_0";
import {
  deserializeAws_queryDeleteBlueGreenDeploymentCommand,
  serializeAws_queryDeleteBlueGreenDeploymentCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DeleteBlueGreenDeploymentCommand}.
 */
export interface DeleteBlueGreenDeploymentCommandInput extends DeleteBlueGreenDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBlueGreenDeploymentCommand}.
 */
export interface DeleteBlueGreenDeploymentCommandOutput extends DeleteBlueGreenDeploymentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deletes a blue/green deployment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS Blue/Green Deployments
 *             for database updates</a> in the <i>Amazon RDS User Guide</i> and
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">
 *                 Using Amazon RDS Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                     User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DeleteBlueGreenDeploymentCommandInput - {@link DeleteBlueGreenDeploymentCommandInput}
 * @returns {@link DeleteBlueGreenDeploymentCommandOutput}
 * @see {@link DeleteBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentNotFoundFault} (client fault)
 *  <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 *
 * @throws {@link InvalidBlueGreenDeploymentStateFault} (client fault)
 *  <p>The blue/green deployment can't be switched over or deleted because there is an invalid configuration in
 *             the green environment.</p>
 *
 *
 */
export class DeleteBlueGreenDeploymentCommand extends $Command<
  DeleteBlueGreenDeploymentCommandInput,
  DeleteBlueGreenDeploymentCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DeleteBlueGreenDeploymentCommandInput) {
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
  ): Handler<DeleteBlueGreenDeploymentCommandInput, DeleteBlueGreenDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteBlueGreenDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteBlueGreenDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DeleteBlueGreenDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteBlueGreenDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteBlueGreenDeploymentCommandOutput> {
    return deserializeAws_queryDeleteBlueGreenDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
