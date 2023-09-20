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
import { ListContinuousDeploymentPoliciesRequest, ListContinuousDeploymentPoliciesResult } from "../models/models_1";
import {
  de_ListContinuousDeploymentPoliciesCommand,
  se_ListContinuousDeploymentPoliciesCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListContinuousDeploymentPoliciesCommand}.
 */
export interface ListContinuousDeploymentPoliciesCommandInput extends ListContinuousDeploymentPoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListContinuousDeploymentPoliciesCommand}.
 */
export interface ListContinuousDeploymentPoliciesCommandOutput
  extends ListContinuousDeploymentPoliciesResult,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets a list of the continuous deployment policies in your Amazon Web Services account.</p>
 *          <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListContinuousDeploymentPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListContinuousDeploymentPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // ListContinuousDeploymentPoliciesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListContinuousDeploymentPoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListContinuousDeploymentPoliciesResult
 * //   ContinuousDeploymentPolicyList: { // ContinuousDeploymentPolicyList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // ContinuousDeploymentPolicySummaryList
 * //       { // ContinuousDeploymentPolicySummary
 * //         ContinuousDeploymentPolicy: { // ContinuousDeploymentPolicy
 * //           Id: "STRING_VALUE", // required
 * //           LastModifiedTime: new Date("TIMESTAMP"), // required
 * //           ContinuousDeploymentPolicyConfig: { // ContinuousDeploymentPolicyConfig
 * //             StagingDistributionDnsNames: { // StagingDistributionDnsNames
 * //               Quantity: Number("int"), // required
 * //               Items: [ // StagingDistributionDnsNameList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Enabled: true || false, // required
 * //             TrafficConfig: { // TrafficConfig
 * //               SingleWeightConfig: { // ContinuousDeploymentSingleWeightConfig
 * //                 Weight: Number("float"), // required
 * //                 SessionStickinessConfig: { // SessionStickinessConfig
 * //                   IdleTTL: Number("int"), // required
 * //                   MaximumTTL: Number("int"), // required
 * //                 },
 * //               },
 * //               SingleHeaderConfig: { // ContinuousDeploymentSingleHeaderConfig
 * //                 Header: "STRING_VALUE", // required
 * //                 Value: "STRING_VALUE", // required
 * //               },
 * //               Type: "SingleWeight" || "SingleHeader", // required
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListContinuousDeploymentPoliciesCommandInput - {@link ListContinuousDeploymentPoliciesCommandInput}
 * @returns {@link ListContinuousDeploymentPoliciesCommandOutput}
 * @see {@link ListContinuousDeploymentPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListContinuousDeploymentPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link NoSuchContinuousDeploymentPolicy} (client fault)
 *  <p>The continuous deployment policy doesn't exist.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 */
export class ListContinuousDeploymentPoliciesCommand extends $Command<
  ListContinuousDeploymentPoliciesCommandInput,
  ListContinuousDeploymentPoliciesCommandOutput,
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
  constructor(readonly input: ListContinuousDeploymentPoliciesCommandInput) {
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
  ): Handler<ListContinuousDeploymentPoliciesCommandInput, ListContinuousDeploymentPoliciesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListContinuousDeploymentPoliciesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "ListContinuousDeploymentPoliciesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Cloudfront2020_05_31",
        operation: "ListContinuousDeploymentPolicies",
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
    input: ListContinuousDeploymentPoliciesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ListContinuousDeploymentPoliciesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListContinuousDeploymentPoliciesCommandOutput> {
    return de_ListContinuousDeploymentPoliciesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
