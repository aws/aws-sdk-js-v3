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

import { EKSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EKSClient";
import { DescribeIdentityProviderConfigRequest, DescribeIdentityProviderConfigResponse } from "../models/models_0";
import {
  de_DescribeIdentityProviderConfigCommand,
  se_DescribeIdentityProviderConfigCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeIdentityProviderConfigCommand}.
 */
export interface DescribeIdentityProviderConfigCommandInput extends DescribeIdentityProviderConfigRequest {}
/**
 * @public
 *
 * The output of {@link DescribeIdentityProviderConfigCommand}.
 */
export interface DescribeIdentityProviderConfigCommandOutput
  extends DescribeIdentityProviderConfigResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Returns descriptive information about an identity provider configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, DescribeIdentityProviderConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, DescribeIdentityProviderConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const input = { // DescribeIdentityProviderConfigRequest
 *   clusterName: "STRING_VALUE", // required
 *   identityProviderConfig: { // IdentityProviderConfig
 *     type: "STRING_VALUE", // required
 *     name: "STRING_VALUE", // required
 *   },
 * };
 * const command = new DescribeIdentityProviderConfigCommand(input);
 * const response = await client.send(command);
 * // { // DescribeIdentityProviderConfigResponse
 * //   identityProviderConfig: { // IdentityProviderConfigResponse
 * //     oidc: { // OidcIdentityProviderConfig
 * //       identityProviderConfigName: "STRING_VALUE",
 * //       identityProviderConfigArn: "STRING_VALUE",
 * //       clusterName: "STRING_VALUE",
 * //       issuerUrl: "STRING_VALUE",
 * //       clientId: "STRING_VALUE",
 * //       usernameClaim: "STRING_VALUE",
 * //       usernamePrefix: "STRING_VALUE",
 * //       groupsClaim: "STRING_VALUE",
 * //       groupsPrefix: "STRING_VALUE",
 * //       requiredClaims: { // requiredClaimsMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       status: "CREATING" || "DELETING" || "ACTIVE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeIdentityProviderConfigCommandInput - {@link DescribeIdentityProviderConfigCommandInput}
 * @returns {@link DescribeIdentityProviderConfigCommandOutput}
 * @see {@link DescribeIdentityProviderConfigCommandInput} for command's `input` shape.
 * @see {@link DescribeIdentityProviderConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for EKSClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. Actions can include using an
 *             action or resource on behalf of a user that doesn't have permissions to use the action
 *             or resource or specifying an identifier that is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. You can view your available clusters with
 *                 <a>ListClusters</a>. You can view your available managed node groups with
 *                 <a>ListNodegroups</a>. Amazon EKS clusters and node groups are
 *             Region-specific.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unavailable. Back off and retry the operation.</p>
 *
 * @throws {@link EKSServiceException}
 * <p>Base exception class for all service exceptions from EKS service.</p>
 *
 */
export class DescribeIdentityProviderConfigCommand extends $Command<
  DescribeIdentityProviderConfigCommandInput,
  DescribeIdentityProviderConfigCommandOutput,
  EKSClientResolvedConfig
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
  constructor(readonly input: DescribeIdentityProviderConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EKSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeIdentityProviderConfigCommandInput, DescribeIdentityProviderConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeIdentityProviderConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EKSClient";
    const commandName = "DescribeIdentityProviderConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSWesleyFrontend",
        operation: "DescribeIdentityProviderConfig",
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
  private serialize(
    input: DescribeIdentityProviderConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeIdentityProviderConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeIdentityProviderConfigCommandOutput> {
    return de_DescribeIdentityProviderConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
