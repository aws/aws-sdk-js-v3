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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  ModifyVerifiedAccessTrustProviderRequest,
  ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog,
  ModifyVerifiedAccessTrustProviderResult,
  ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog,
} from "../models/models_6";
import {
  de_ModifyVerifiedAccessTrustProviderCommand,
  se_ModifyVerifiedAccessTrustProviderCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVerifiedAccessTrustProviderCommand}.
 */
export interface ModifyVerifiedAccessTrustProviderCommandInput extends ModifyVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVerifiedAccessTrustProviderCommand}.
 */
export interface ModifyVerifiedAccessTrustProviderCommandOutput
  extends ModifyVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Modifies the configuration of the specified Amazon Web Services Verified Access trust provider.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVerifiedAccessTrustProviderRequest
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   OidcOptions: { // ModifyVerifiedAccessTrustProviderOidcOptions
 *     Issuer: "STRING_VALUE",
 *     AuthorizationEndpoint: "STRING_VALUE",
 *     TokenEndpoint: "STRING_VALUE",
 *     UserInfoEndpoint: "STRING_VALUE",
 *     ClientId: "STRING_VALUE",
 *     ClientSecret: "STRING_VALUE",
 *     Scope: "STRING_VALUE",
 *   },
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 *   SseSpecification: { // VerifiedAccessSseSpecificationRequest
 *     CustomerManagedKeyEnabled: true || false,
 *     KmsKeyArn: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVerifiedAccessTrustProviderResult
 * //   VerifiedAccessTrustProvider: { // VerifiedAccessTrustProvider
 * //     VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     TrustProviderType: "user" || "device",
 * //     UserTrustProviderType: "iam-identity-center" || "oidc",
 * //     DeviceTrustProviderType: "jamf" || "crowdstrike",
 * //     OidcOptions: { // OidcOptions
 * //       Issuer: "STRING_VALUE",
 * //       AuthorizationEndpoint: "STRING_VALUE",
 * //       TokenEndpoint: "STRING_VALUE",
 * //       UserInfoEndpoint: "STRING_VALUE",
 * //       ClientId: "STRING_VALUE",
 * //       ClientSecret: "STRING_VALUE",
 * //       Scope: "STRING_VALUE",
 * //     },
 * //     DeviceOptions: { // DeviceOptions
 * //       TenantId: "STRING_VALUE",
 * //     },
 * //     PolicyReferenceName: "STRING_VALUE",
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SseSpecification: { // VerifiedAccessSseSpecificationResponse
 * //       CustomerManagedKeyEnabled: true || false,
 * //       KmsKeyArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVerifiedAccessTrustProviderCommandInput - {@link ModifyVerifiedAccessTrustProviderCommandInput}
 * @returns {@link ModifyVerifiedAccessTrustProviderCommandOutput}
 * @see {@link ModifyVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link ModifyVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVerifiedAccessTrustProviderCommand extends $Command<
  ModifyVerifiedAccessTrustProviderCommandInput,
  ModifyVerifiedAccessTrustProviderCommandOutput,
  EC2ClientResolvedConfig
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
  constructor(readonly input: ModifyVerifiedAccessTrustProviderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyVerifiedAccessTrustProviderCommandInput, ModifyVerifiedAccessTrustProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVerifiedAccessTrustProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVerifiedAccessTrustProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVerifiedAccessTrustProviderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ModifyVerifiedAccessTrustProviderResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "ModifyVerifiedAccessTrustProvider",
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
    input: ModifyVerifiedAccessTrustProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVerifiedAccessTrustProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVerifiedAccessTrustProviderCommandOutput> {
    return de_ModifyVerifiedAccessTrustProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
