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
import {
  GetContinuousDeploymentPolicyConfigRequest,
  GetContinuousDeploymentPolicyConfigResult,
} from "../models/models_1";
import {
  de_GetContinuousDeploymentPolicyConfigCommand,
  se_GetContinuousDeploymentPolicyConfigCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetContinuousDeploymentPolicyConfigCommand}.
 */
export interface GetContinuousDeploymentPolicyConfigCommandInput extends GetContinuousDeploymentPolicyConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetContinuousDeploymentPolicyConfigCommand}.
 */
export interface GetContinuousDeploymentPolicyConfigCommandOutput
  extends GetContinuousDeploymentPolicyConfigResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets configuration information about a continuous deployment policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetContinuousDeploymentPolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetContinuousDeploymentPolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetContinuousDeploymentPolicyConfigRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetContinuousDeploymentPolicyConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetContinuousDeploymentPolicyConfigResult
 * //   ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //     StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //       Quantity: Number("int"), // required
 * //       Items: [ // StagingDistributionDnsNameList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Enabled: true || false, // required
 * //     TrafficConfig: { // TrafficConfig
 * //       SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //         Weight: Number("float"), // required
 * //         SessionStickinessConfig: { // SessionStickinessConfig
 * //           IdleTTL: Number("int"), // required
 * //           MaximumTTL: Number("int"), // required
 * //         },
 * //       },
 * //       SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //         Header: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //       Type: "SingleWeight" || "SingleHeader", // required
 * //     },
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetContinuousDeploymentPolicyConfigCommandInput - {@link GetContinuousDeploymentPolicyConfigCommandInput}
 * @returns {@link GetContinuousDeploymentPolicyConfigCommandOutput}
 * @see {@link GetContinuousDeploymentPolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetContinuousDeploymentPolicyConfigCommandOutput} for command's `response` shape.
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
export class GetContinuousDeploymentPolicyConfigCommand extends $Command<
  GetContinuousDeploymentPolicyConfigCommandInput,
  GetContinuousDeploymentPolicyConfigCommandOutput,
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
  constructor(readonly input: GetContinuousDeploymentPolicyConfigCommandInput) {
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
  ): Handler<GetContinuousDeploymentPolicyConfigCommandInput, GetContinuousDeploymentPolicyConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetContinuousDeploymentPolicyConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "GetContinuousDeploymentPolicyConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "GetContinuousDeploymentPolicyConfig",
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
    input: GetContinuousDeploymentPolicyConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetContinuousDeploymentPolicyConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetContinuousDeploymentPolicyConfigCommandOutput> {
    return de_GetContinuousDeploymentPolicyConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
