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
  UpdateServiceInstanceInput,
  UpdateServiceInstanceInputFilterSensitiveLog,
  UpdateServiceInstanceOutput,
  UpdateServiceInstanceOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateServiceInstanceCommand, se_UpdateServiceInstanceCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceInstanceCommand}.
 */
export interface UpdateServiceInstanceCommandInput extends UpdateServiceInstanceInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceInstanceCommand}.
 */
export interface UpdateServiceInstanceCommandOutput extends UpdateServiceInstanceOutput, __MetadataBearer {}

/**
 * @public
 * <p>Update a service instance.</p>
 *          <p>There are a few modes for updating a service instance. The <code>deploymentType</code>
 *       field defines the mode.</p>
 *          <note>
 *             <p>You can't update a service instance while its deployment status, or the deployment
 *         status of a component attached to it, is <code>IN_PROGRESS</code>.</p>
 *             <p>For more information about components, see
 *   <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the
 *   <i>Proton User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceInstanceCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceInstanceCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceInstanceInput
 *   name: "STRING_VALUE", // required
 *   serviceName: "STRING_VALUE", // required
 *   deploymentType: "STRING_VALUE", // required
 *   spec: "STRING_VALUE",
 *   templateMajorVersion: "STRING_VALUE",
 *   templateMinorVersion: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new UpdateServiceInstanceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceInstanceOutput
 * //   serviceInstance: { // ServiceInstance
 * //     name: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentAttemptedAt: new Date("TIMESTAMP"), // required
 * //     lastDeploymentSucceededAt: new Date("TIMESTAMP"), // required
 * //     serviceName: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     templateName: "STRING_VALUE", // required
 * //     templateMajorVersion: "STRING_VALUE", // required
 * //     templateMinorVersion: "STRING_VALUE", // required
 * //     deploymentStatus: "STRING_VALUE", // required
 * //     deploymentStatusMessage: "STRING_VALUE",
 * //     spec: "STRING_VALUE",
 * //     lastClientRequestToken: "STRING_VALUE",
 * //     lastAttemptedDeploymentId: "STRING_VALUE",
 * //     lastSucceededDeploymentId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceInstanceCommandInput - {@link UpdateServiceInstanceCommandInput}
 * @returns {@link UpdateServiceInstanceCommandOutput}
 * @see {@link UpdateServiceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceInstanceCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
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
export class UpdateServiceInstanceCommand extends $Command<
  UpdateServiceInstanceCommandInput,
  UpdateServiceInstanceCommandOutput,
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
  constructor(readonly input: UpdateServiceInstanceCommandInput) {
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
  ): Handler<UpdateServiceInstanceCommandInput, UpdateServiceInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateServiceInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ProtonClient";
    const commandName = "UpdateServiceInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateServiceInstanceInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateServiceInstanceOutputFilterSensitiveLog,
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
  private serialize(input: UpdateServiceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateServiceInstanceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateServiceInstanceCommandOutput> {
    return de_UpdateServiceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
