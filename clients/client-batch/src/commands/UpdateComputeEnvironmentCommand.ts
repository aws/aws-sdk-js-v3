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

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { UpdateComputeEnvironmentRequest, UpdateComputeEnvironmentResponse } from "../models/models_0";
import { de_UpdateComputeEnvironmentCommand, se_UpdateComputeEnvironmentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateComputeEnvironmentCommand}.
 */
export interface UpdateComputeEnvironmentCommandInput extends UpdateComputeEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateComputeEnvironmentCommand}.
 */
export interface UpdateComputeEnvironmentCommandOutput extends UpdateComputeEnvironmentResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an Batch compute environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, UpdateComputeEnvironmentCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, UpdateComputeEnvironmentCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // UpdateComputeEnvironmentRequest
 *   computeEnvironment: "STRING_VALUE", // required
 *   state: "ENABLED" || "DISABLED",
 *   unmanagedvCpus: Number("int"),
 *   computeResources: { // ComputeResourceUpdate
 *     minvCpus: Number("int"),
 *     maxvCpus: Number("int"),
 *     desiredvCpus: Number("int"),
 *     subnets: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     securityGroupIds: [
 *       "STRING_VALUE",
 *     ],
 *     allocationStrategy: "BEST_FIT_PROGRESSIVE" || "SPOT_CAPACITY_OPTIMIZED",
 *     instanceTypes: [
 *       "STRING_VALUE",
 *     ],
 *     ec2KeyPair: "STRING_VALUE",
 *     instanceRole: "STRING_VALUE",
 *     tags: { // TagsMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     placementGroup: "STRING_VALUE",
 *     bidPercentage: Number("int"),
 *     launchTemplate: { // LaunchTemplateSpecification
 *       launchTemplateId: "STRING_VALUE",
 *       launchTemplateName: "STRING_VALUE",
 *       version: "STRING_VALUE",
 *     },
 *     ec2Configuration: [ // Ec2ConfigurationList
 *       { // Ec2Configuration
 *         imageType: "STRING_VALUE", // required
 *         imageIdOverride: "STRING_VALUE",
 *         imageKubernetesVersion: "STRING_VALUE",
 *       },
 *     ],
 *     updateToLatestImageVersion: true || false,
 *     type: "EC2" || "SPOT" || "FARGATE" || "FARGATE_SPOT",
 *     imageId: "STRING_VALUE",
 *   },
 *   serviceRole: "STRING_VALUE",
 *   updatePolicy: { // UpdatePolicy
 *     terminateJobsOnUpdate: true || false,
 *     jobExecutionTimeoutMinutes: Number("long"),
 *   },
 * };
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateComputeEnvironmentResponse
 * //   computeEnvironmentName: "STRING_VALUE",
 * //   computeEnvironmentArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateComputeEnvironmentCommandInput - {@link UpdateComputeEnvironmentCommandInput}
 * @returns {@link UpdateComputeEnvironmentCommandOutput}
 * @see {@link UpdateComputeEnvironmentCommandInput} for command's `input` shape.
 * @see {@link UpdateComputeEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @example To update a compute environment
 * ```javascript
 * // This example disables the P2OnDemand compute environment so it can be deleted.
 * const input = {
 *   "computeEnvironment": "P2OnDemand",
 *   "state": "DISABLED"
 * };
 * const command = new UpdateComputeEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "computeEnvironmentArn": "arn:aws:batch:us-east-1:012345678910:compute-environment/P2OnDemand",
 *   "computeEnvironmentName": "P2OnDemand"
 * }
 * *\/
 * // example id: to-update-a-compute-environment-1481154702731
 * ```
 *
 */
export class UpdateComputeEnvironmentCommand extends $Command<
  UpdateComputeEnvironmentCommandInput,
  UpdateComputeEnvironmentCommandOutput,
  BatchClientResolvedConfig
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
  constructor(readonly input: UpdateComputeEnvironmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateComputeEnvironmentCommandInput, UpdateComputeEnvironmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateComputeEnvironmentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BatchClient";
    const commandName = "UpdateComputeEnvironmentCommand";
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
  private serialize(input: UpdateComputeEnvironmentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateComputeEnvironmentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateComputeEnvironmentCommandOutput> {
    return de_UpdateComputeEnvironmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
