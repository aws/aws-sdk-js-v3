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
  CreateWorkforceRequest,
  CreateWorkforceRequestFilterSensitiveLog,
  CreateWorkforceResponse,
} from "../models/models_1";
import { de_CreateWorkforceCommand, se_CreateWorkforceCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkforceCommand}.
 */
export interface CreateWorkforceCommandInput extends CreateWorkforceRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkforceCommand}.
 */
export interface CreateWorkforceCommandOutput extends CreateWorkforceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Use this operation to create a workforce. This operation will return an error
 *           if a workforce already exists in the Amazon Web Services Region that you specify. You can only
 *           create one workforce in each Amazon Web Services Region per Amazon Web Services account.</p>
 *          <p>If you want to create a new workforce in an Amazon Web Services Region where
 *             a workforce already exists, use the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DeleteWorkforce.html">DeleteWorkforce</a> API
 *       operation to delete the existing workforce and then use <code>CreateWorkforce</code>
 *       to create a new workforce.</p>
 *          <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool
 *     in <code>CognitoConfig</code>.
 *     You can also create an Amazon Cognito workforce using the Amazon SageMaker console.
 *     For more information, see
 *       <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">
 *       Create a Private Workforce (Amazon Cognito)</a>.</p>
 *          <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP
 *       configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i>
 *       because groups are used by Ground Truth and Amazon A2I to create work teams.
 *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html">
 *       Create a Private Workforce (OIDC IdP)</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateWorkforceRequest
 *   CognitoConfig: { // CognitoConfig
 *     UserPool: "STRING_VALUE", // required
 *     ClientId: "STRING_VALUE", // required
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
 *   SourceIpConfig: { // SourceIpConfig
 *     Cidrs: [ // Cidrs // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   WorkforceName: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
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
 * const command = new CreateWorkforceCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkforceResponse
 * //   WorkforceArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkforceCommandInput - {@link CreateWorkforceCommandInput}
 * @returns {@link CreateWorkforceCommandOutput}
 * @see {@link CreateWorkforceCommandInput} for command's `input` shape.
 * @see {@link CreateWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateWorkforceCommand extends $Command<
  CreateWorkforceCommandInput,
  CreateWorkforceCommandOutput,
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
  constructor(readonly input: CreateWorkforceCommandInput) {
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
  ): Handler<CreateWorkforceCommandInput, CreateWorkforceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateWorkforceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateWorkforceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateWorkforceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateWorkforce",
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
  private serialize(input: CreateWorkforceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateWorkforceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateWorkforceCommandOutput> {
    return de_CreateWorkforceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
