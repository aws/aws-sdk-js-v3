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

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetContinuousDeploymentPolicyRequest, GetContinuousDeploymentPolicyResult } from "../models/models_1";
import {
  de_GetContinuousDeploymentPolicyCommand,
  se_GetContinuousDeploymentPolicyCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContinuousDeploymentPolicyCommand}.
 */
export interface GetContinuousDeploymentPolicyCommandInput extends GetContinuousDeploymentPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetContinuousDeploymentPolicyCommand}.
 */
export interface GetContinuousDeploymentPolicyCommandOutput
  extends GetContinuousDeploymentPolicyResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a continuous deployment policy, including metadata (the policy's identifier and
 * 			the date and time when the policy was last modified).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetContinuousDeploymentPolicyRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetContinuousDeploymentPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetContinuousDeploymentPolicyResult
 * //   ContinuousDeploymentPolicy: { // ContinuousDeploymentPolicy
 * //     Id: "STRING_VALUE", // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //       StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //         Quantity: Number("int"), // required
 * //         Items: [ // StagingDistributionDnsNameList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       Enabled: true || false, // required
 * //       TrafficConfig: { // TrafficConfig
 * //         SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //           Weight: Number("float"), // required
 * //           SessionStickinessConfig: { // SessionStickinessConfig
 * //             IdleTTL: Number("int"), // required
 * //             MaximumTTL: Number("int"), // required
 * //           },
 * //         },
 * //         SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //           Header: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //         Type: "SingleWeight" || "SingleHeader", // required
 * //       },
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContinuousDeploymentPolicyCommandInput - {@link GetContinuousDeploymentPolicyCommandInput}
 * @returns {@link GetContinuousDeploymentPolicyCommandOutput}
 * @see {@link GetContinuousDeploymentPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContinuousDeploymentPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class GetContinuousDeploymentPolicyCommand extends $Command<
  GetContinuousDeploymentPolicyCommandInput,
  GetContinuousDeploymentPolicyCommandOutput,
  CloudFrontClientResolvedConfig
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
  constructor(readonly input: GetContinuousDeploymentPolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFrontClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetContinuousDeploymentPolicyCommandInput, GetContinuousDeploymentPolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContinuousDeploymentPolicyCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetContinuousDeploymentPolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetContinuousDeploymentPolicy",
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
  private serialize(input: GetContinuousDeploymentPolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetContinuousDeploymentPolicyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContinuousDeploymentPolicyCommandOutput> {
    return de_GetContinuousDeploymentPolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
