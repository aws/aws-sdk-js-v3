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

import {
  UpdateWorkforceRequest,
  UpdateWorkforceRequestFilterSensitiveLog,
  UpdateWorkforceResponse,
} from "../models/models_4";
import { de_UpdateWorkforceCommand, se_UpdateWorkforceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkforceCommand}.
 */
export interface UpdateWorkforceCommandInput extends UpdateWorkforceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkforceCommand}.
 */
export interface UpdateWorkforceCommandOutput extends UpdateWorkforceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to update your workforce. You can use this operation to
 *         require that workers use specific IP addresses to work on tasks
 *         and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p>
 *          <p>The worker portal is now supported in VPC and public internet.</p>
 *          <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses.
 *         You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.
 *         By default, a workforce isn't restricted to specific IP addresses. If you specify a
 *             range of IP addresses, workers who attempt to access tasks using any IP address outside
 *             the specified range are denied and get a <code>Not Found</code> error message on
 *             the worker portal.</p>
 *          <p>To restrict access to all the workers in public internet, add the <code>SourceIpConfig</code> CIDR value as "10.0.0.0/16".</p>
 *          <important>
 *             <p>Amazon SageMaker does not support Source Ip restriction for worker portals in VPC.</p>
 *          </important>
 *          <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using
 *             your own OIDC IdP. </p>
 *          <important>
 *             <p>You can only update your OIDC IdP configuration when there are no work teams
 *                 associated with your workforce. You can delete work teams using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkteam.html">DeleteWorkteam</a> operation.</p>
 *          </important>
 *          <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you
 *             can view details about your update workforce using the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeWorkforce.html">DescribeWorkforce</a>
 *             operation.</p>
 *          <important>
 *             <p>This operation only applies to private workforces.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateWorkforceRequest
 *   WorkforceName: "STRING_VALUE", // required
 *   SourceIpConfig: { // SourceIpConfig
 *     Cidrs: [ // Cidrs // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   OidcConfig: { // OidcConfig
 *     ClientId: "STRING_VALUE", // required
 *     ClientSecret: "STRING_VALUE", // required
 *     Issuer: "STRING_VALUE", // required
 *     AuthorizationEndpoint: "STRING_VALUE", // required
 *     TokenEndpoint: "STRING_VALUE", // required
 *     UserInfoEndpoint: "STRING_VALUE", // required
 *     LogoutEndpoint: "STRING_VALUE", // required
 *     JwksUri: "STRING_VALUE", // required
 *   },
 *   WorkforceVpcConfig: { // WorkforceVpcConfigRequest
 *     VpcId: "STRING_VALUE",
 *     SecurityGroupIds: [ // WorkforceSecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // WorkforceSubnets
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateWorkforceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkforceResponse
 * //   Workforce: { // Workforce
 * //     WorkforceName: "STRING_VALUE", // required
 * //     WorkforceArn: "STRING_VALUE", // required
 * //     LastUpdatedDate: new Date("TIMESTAMP"),
 * //     SourceIpConfig: { // SourceIpConfig
 * //       Cidrs: [ // Cidrs // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     SubDomain: "STRING_VALUE",
 * //     CognitoConfig: { // CognitoConfig
 * //       UserPool: "STRING_VALUE", // required
 * //       ClientId: "STRING_VALUE", // required
 * //     },
 * //     OidcConfig: { // OidcConfigForResponse
 * //       ClientId: "STRING_VALUE",
 * //       Issuer: "STRING_VALUE",
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       TokenEndpoint: "STRING_VALUE",
 * //       UserInfoEndpoint: "STRING_VALUE",
 * //       LogoutEndpoint: "STRING_VALUE",
 * //       JwksUri: "STRING_VALUE",
 * //     },
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     WorkforceVpcConfig: { // WorkforceVpcConfigResponse
 * //       VpcId: "STRING_VALUE", // required
 * //       SecurityGroupIds: [ // WorkforceSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // WorkforceSubnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcEndpointId: "STRING_VALUE",
 * //     },
 * //     Status: "Initializing" || "Updating" || "Deleting" || "Failed" || "Active",
 * //     FailureReason: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkforceCommandInput - {@link UpdateWorkforceCommandInput}
 * @returns {@link UpdateWorkforceCommandOutput}
 * @see {@link UpdateWorkforceCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when you attempted to modify a SageMaker entity such as an
 *       <code>Experiment</code> or <code>Artifact</code>.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class UpdateWorkforceCommand extends $Command<
  UpdateWorkforceCommandInput,
  UpdateWorkforceCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: UpdateWorkforceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateWorkforceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateWorkforceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "UpdateWorkforce",
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
  private serialize(input: UpdateWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateWorkforceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateWorkforceCommandOutput> {
    return de_UpdateWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
