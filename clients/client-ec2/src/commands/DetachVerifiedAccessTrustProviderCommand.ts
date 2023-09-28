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
  DetachVerifiedAccessTrustProviderRequest,
  DetachVerifiedAccessTrustProviderResult,
  DetachVerifiedAccessTrustProviderResultFilterSensitiveLog,
} from "../models/models_5";
import {
  de_DetachVerifiedAccessTrustProviderCommand,
  se_DetachVerifiedAccessTrustProviderCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DetachVerifiedAccessTrustProviderCommand}.
 */
export interface DetachVerifiedAccessTrustProviderCommandInput extends DetachVerifiedAccessTrustProviderRequest {}
/**
 * @public
 *
 * The output of {@link DetachVerifiedAccessTrustProviderCommand}.
 */
export interface DetachVerifiedAccessTrustProviderCommandOutput
  extends DetachVerifiedAccessTrustProviderResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Detaches the specified Amazon Web Services Verified Access trust provider from the specified Amazon Web Services Verified Access instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachVerifiedAccessTrustProviderCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachVerifiedAccessTrustProviderCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DetachVerifiedAccessTrustProviderRequest
 *   VerifiedAccessInstanceId: "STRING_VALUE", // required
 *   VerifiedAccessTrustProviderId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DetachVerifiedAccessTrustProviderCommand(input);
 * const response = await client.send(command);
 * // { // DetachVerifiedAccessTrustProviderResult
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
 * //   VerifiedAccessInstance: { // VerifiedAccessInstance
 * //     VerifiedAccessInstanceId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     VerifiedAccessTrustProviders: [ // VerifiedAccessTrustProviderCondensedList
 * //       { // VerifiedAccessTrustProviderCondensed
 * //         VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         TrustProviderType: "user" || "device",
 * //         UserTrustProviderType: "iam-identity-center" || "oidc",
 * //         DeviceTrustProviderType: "jamf" || "crowdstrike",
 * //       },
 * //     ],
 * //     CreationTime: "STRING_VALUE",
 * //     LastUpdatedTime: "STRING_VALUE",
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FipsEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DetachVerifiedAccessTrustProviderCommandInput - {@link DetachVerifiedAccessTrustProviderCommandInput}
 * @returns {@link DetachVerifiedAccessTrustProviderCommandOutput}
 * @see {@link DetachVerifiedAccessTrustProviderCommandInput} for command's `input` shape.
 * @see {@link DetachVerifiedAccessTrustProviderCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DetachVerifiedAccessTrustProviderCommand extends $Command<
  DetachVerifiedAccessTrustProviderCommandInput,
  DetachVerifiedAccessTrustProviderCommandOutput,
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
  constructor(readonly input: DetachVerifiedAccessTrustProviderCommandInput) {
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
  ): Handler<DetachVerifiedAccessTrustProviderCommandInput, DetachVerifiedAccessTrustProviderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DetachVerifiedAccessTrustProviderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DetachVerifiedAccessTrustProviderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DetachVerifiedAccessTrustProviderResultFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "DetachVerifiedAccessTrustProvider",
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
    input: DetachVerifiedAccessTrustProviderCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DetachVerifiedAccessTrustProviderCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DetachVerifiedAccessTrustProviderCommandOutput> {
    return de_DetachVerifiedAccessTrustProviderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
