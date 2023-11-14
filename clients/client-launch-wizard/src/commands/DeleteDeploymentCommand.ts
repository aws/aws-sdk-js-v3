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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { LaunchWizardClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LaunchWizardClient";
import { DeleteDeploymentInput, DeleteDeploymentOutput } from "../models/models_0";
import { de_DeleteDeploymentCommand, se_DeleteDeploymentCommand } from "../protocols/Aws_restJson1";

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
 * <p>Deletes a deployment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LaunchWizardClient, DeleteDeploymentCommand } from "@aws-sdk/client-launch-wizard"; // ES Modules import
 * // const { LaunchWizardClient, DeleteDeploymentCommand } = require("@aws-sdk/client-launch-wizard"); // CommonJS import
 * const client = new LaunchWizardClient(config);
 * const input = { // DeleteDeploymentInput
 *   deploymentId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDeploymentOutput
 * //   status: "COMPLETED" || "CREATING" || "DELETE_IN_PROGRESS" || "DELETE_INITIATING" || "DELETE_FAILED" || "DELETED" || "FAILED" || "IN_PROGRESS" || "VALIDATING",
 * //   statusReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteDeploymentCommandInput - {@link DeleteDeploymentCommandInput}
 * @returns {@link DeleteDeploymentCommandOutput}
 * @see {@link DeleteDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteDeploymentCommandOutput} for command's `response` shape.
 * @see {@link LaunchWizardClientResolvedConfig | config} for LaunchWizardClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred. Retry your request, but if the problem persists, contact
 *          us with details by posting a question on <a href="https://repost.aws/">re:Post</a>.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified workload or deployment resource can't be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link LaunchWizardServiceException}
 * <p>Base exception class for all service exceptions from LaunchWizard service.</p>
 *
 */
export class DeleteDeploymentCommand extends $Command<
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
  LaunchWizardClientResolvedConfig
> {
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
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LaunchWizardClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteDeploymentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LaunchWizardClient";
    const commandName = "DeleteDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "LaunchWizard",
        operation: "DeleteDeployment",
      },
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
}
