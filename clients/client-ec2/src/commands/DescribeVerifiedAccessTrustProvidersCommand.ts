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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DescribeVerifiedAccessTrustProvidersRequest,
  DescribeVerifiedAccessTrustProvidersResult,
  DescribeVerifiedAccessTrustProvidersResultFilterSensitiveLog,
} from "../models/models_5";
import {
  de_DescribeVerifiedAccessTrustProvidersCommand,
  se_DescribeVerifiedAccessTrustProvidersCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeVerifiedAccessTrustProvidersCommand}.
 */
export interface DescribeVerifiedAccessTrustProvidersCommandInput extends DescribeVerifiedAccessTrustProvidersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeVerifiedAccessTrustProvidersCommand}.
 */
export interface DescribeVerifiedAccessTrustProvidersCommandOutput
  extends DescribeVerifiedAccessTrustProvidersResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the specified Amazon Web Services Verified Access trust providers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVerifiedAccessTrustProvidersCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVerifiedAccessTrustProvidersCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeVerifiedAccessTrustProvidersRequest
 *   VerifiedAccessTrustProviderIds: [ // VerifiedAccessTrustProviderIdList
 *     "STRING_VALUE",
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new DescribeVerifiedAccessTrustProvidersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeVerifiedAccessTrustProvidersResult
 * //   VerifiedAccessTrustProviders: [ // VerifiedAccessTrustProviderList
 * //     { // VerifiedAccessTrustProvider
 * //       VerifiedAccessTrustProviderId: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       TrustProviderType: "user" || "device",
 * //       UserTrustProviderType: "iam-identity-center" || "oidc",
 * //       DeviceTrustProviderType: "jamf" || "crowdstrike",
 * //       OidcOptions: { // OidcOptions
 * //         Issuer: "STRING_VALUE",
 * //         AuthorizationEndpoint: "STRING_VALUE",
 * //         TokenEndpoint: "STRING_VALUE",
 * //         UserInfoEndpoint: "STRING_VALUE",
 * //         ClientId: "STRING_VALUE",
 * //         ClientSecret: "STRING_VALUE",
 * //         Scope: "STRING_VALUE",
 * //       },
 * //       DeviceOptions: { // DeviceOptions
 * //         TenantId: "STRING_VALUE",
 * //       },
 * //       PolicyReferenceName: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       LastUpdatedTime: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeVerifiedAccessTrustProvidersCommandInput - {@link DescribeVerifiedAccessTrustProvidersCommandInput}
 * @returns {@link DescribeVerifiedAccessTrustProvidersCommandOutput}
 * @see {@link DescribeVerifiedAccessTrustProvidersCommandInput} for command's `input` shape.
 * @see {@link DescribeVerifiedAccessTrustProvidersCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class DescribeVerifiedAccessTrustProvidersCommand extends $Command<
  DescribeVerifiedAccessTrustProvidersCommandInput,
  DescribeVerifiedAccessTrustProvidersCommandOutput,
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
  constructor(readonly input: DescribeVerifiedAccessTrustProvidersCommandInput) {
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
  ): Handler<DescribeVerifiedAccessTrustProvidersCommandInput, DescribeVerifiedAccessTrustProvidersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeVerifiedAccessTrustProvidersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DescribeVerifiedAccessTrustProvidersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DescribeVerifiedAccessTrustProvidersResultFilterSensitiveLog,
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
    input: DescribeVerifiedAccessTrustProvidersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DescribeVerifiedAccessTrustProvidersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeVerifiedAccessTrustProvidersCommandOutput> {
    return de_DescribeVerifiedAccessTrustProvidersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
