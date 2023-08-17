// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  DeleteDeploymentInput,
  DeleteDeploymentOutput,
  DeleteDeploymentOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DeleteDeploymentCommand, se_DeleteDeploymentCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteDeploymentCommand}.
 */
export interface DeleteDeploymentCommandInput extends DeleteDeploymentInput {}
/**
 * @public
 *
 * The output of {@link DeleteDeploymentCommand}.
 */
export interface DeleteDeploymentCommandOutput extends DeleteDeploymentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Delete the deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteDeploymentCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteDeploymentCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // DeleteDeploymentInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeploymentOutput
 * //   deployment: { // Deployment
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     targetArn: "STRING_VALUE", // required
 * //     targetResourceCreatedAt: new Date("TIMESTAMP"), // required
 * //     targetResourceType: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     serviceName: "STRING_VALUE",
 * //     serviceInstanceName: "STRING_VALUE",
 * //     componentName: "STRING_VALUE",
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     completedAt: new Date("TIMESTAMP"),
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //     initialState: { // DeploymentState Union: only one key present
 * //       serviceInstance: { // ServiceInstanceState
 * //         spec: "STRING_VALUE", // required
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //         lastSuccessfulComponentDeploymentIds: [ // ComponentDeploymentIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         lastSuccessfulEnvironmentDeploymentId: "STRING_VALUE",
 * //         lastSuccessfulServicePipelineDeploymentId: "STRING_VALUE",
 * //       },
 * //       environment: { // EnvironmentState
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       servicePipeline: { // ServicePipelineState
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       component: { // ComponentState
 * //         serviceName: "STRING_VALUE",
 * //         serviceInstanceName: "STRING_VALUE",
 * //         serviceSpec: "STRING_VALUE",
 * //         templateFile: "STRING_VALUE",
 * //       },
 * //     },
 * //     targetState: {//  Union: only one key present
 * //       serviceInstance: {
 * //         spec: "STRING_VALUE", // required
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //         lastSuccessfulComponentDeploymentIds: [
 * //           "STRING_VALUE",
 * //         ],
 * //         lastSuccessfulEnvironmentDeploymentId: "STRING_VALUE",
 * //         lastSuccessfulServicePipelineDeploymentId: "STRING_VALUE",
 * //       },
 * //       environment: {
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       servicePipeline: {
 * //         spec: "STRING_VALUE",
 * //         templateName: "STRING_VALUE", // required
 * //         templateMajorVersion: "STRING_VALUE", // required
 * //         templateMinorVersion: "STRING_VALUE", // required
 * //       },
 * //       component: {
 * //         serviceName: "STRING_VALUE",
 * //         serviceInstanceName: "STRING_VALUE",
 * //         serviceSpec: "STRING_VALUE",
 * //         templateFile: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDeploymentCommandInput - {@link DeleteDeploymentCommandInput}
 * @returns {@link DeleteDeploymentCommandOutput}
 * @see {@link DeleteDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 */
export class DeleteDeploymentCommand extends $Command<
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
  ProtonClientResolvedConfig
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
  constructor(readonly input: DeleteDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ProtonClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "DeleteDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeleteDeploymentOutputFilterSensitiveLog,
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
  private serialize(input: DeleteDeploymentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteDeploymentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDeploymentCommandOutput> {
    return de_DeleteDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
