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

import { DescribeProductsRequest, DescribeProductsResponse } from "../models/models_2";
import { de_DescribeProductsCommand, se_DescribeProductsCommand } from "../protocols/Aws_restJson1";
import { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProductsCommand}.
 */
export interface DescribeProductsCommandInput extends DescribeProductsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProductsCommand}.
 */
export interface DescribeProductsCommandOutput extends DescribeProductsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about product integrations in Security Hub.</p>
 *          <p>You can optionally provide an integration ARN. If you provide an integration ARN, then
 *          the results only include that integration.</p>
 *          <p>If you do not provide an integration ARN, then the results include all of the available
 *          product integrations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DescribeProductsCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DescribeProductsCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const input = { // DescribeProductsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProductArn: "STRING_VALUE",
 * };
 * const command = new DescribeProductsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProductsResponse
 * //   Products: [ // ProductsList // required
 * //     { // Product
 * //       ProductArn: "STRING_VALUE", // required
 * //       ProductName: "STRING_VALUE",
 * //       CompanyName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Categories: [ // CategoryList
 * //         "STRING_VALUE",
 * //       ],
 * //       IntegrationTypes: [ // IntegrationTypeList
 * //         "SEND_FINDINGS_TO_SECURITY_HUB" || "RECEIVE_FINDINGS_FROM_SECURITY_HUB" || "UPDATE_FINDINGS_IN_SECURITY_HUB",
 * //       ],
 * //       MarketplaceUrl: "STRING_VALUE",
 * //       ActivationUrl: "STRING_VALUE",
 * //       ProductSubscriptionResourcePolicy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProductsCommandInput - {@link DescribeProductsCommandInput}
 * @returns {@link DescribeProductsCommandOutput}
 * @see {@link DescribeProductsCommandInput} for command's `input` shape.
 * @see {@link DescribeProductsCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidAccessException} (client fault)
 *  <p>The account doesn't have permission to perform this action.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because you supplied an invalid or out-of-range value for an
 *          input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current Amazon Web Services
 *          account or throttling limits. The error code describes the limit exceeded.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 * @example To get information about Security Hub integrations
 * ```javascript
 * // The following example returns details about AWS services and third-party products that Security Hub integrates with.
 * const input = {
 *   "MaxResults": 1,
 *   "NextToken": "NULL",
 *   "ProductArn": "arn:aws:securityhub:us-east-1:517716713836:product/crowdstrike/crowdstrike-falcon"
 * };
 * const command = new DescribeProductsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "U2FsdGVkX18vvPlOqb7RDrWRWVFBJI46MOIAb+nZmRJmR15NoRi2gm13sdQEn3O/pq/78dGs+bKpgA+7HMPHO0qX33/zoRI+uIG/F9yLNhcOrOWzFUdy36JcXLQji3Rpnn/cD1SVkGA98qI3zPOSDg==",
 *   "Products": [
 *     {
 *       "ActivationUrl": "https://falcon.crowdstrike.com/support/documentation",
 *       "Categories": [
 *         "Endpoint Detection and Response (EDR)",
 *         "AV Scanning and Sandboxing",
 *         "Threat Intelligence Feeds and Reports",
 *         "Endpoint Forensics",
 *         "Network Forensics"
 *       ],
 *       "CompanyName": "CrowdStrike",
 *       "Description": "CrowdStrike Falcon's single lightweight sensor unifies next-gen antivirus, endpoint detection and response, and 24/7 managed hunting, via the cloud.",
 *       "IntegrationTypes": [
 *         "SEND_FINDINGS_TO_SECURITY_HUB"
 *       ],
 *       "MarketplaceUrl": "https://aws.amazon.com/marketplace/seller-profile?id=a1b2c3d4-5678-90ab-cdef-EXAMPLE11111",
 *       "ProductArn": "arn:aws:securityhub:us-east-1:517716713836:product/crowdstrike/crowdstrike-falcon",
 *       "ProductName": "CrowdStrike Falcon",
 *       "ProductSubscriptionResourcePolicy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"123456789333\"},\"Action\":[\"securityhub:BatchImportFindings\"],\"Resource\":\"arn:aws:securityhub:us-west-1:123456789012:product-subscription/crowdstrike/crowdstrike-falcon\",\"Condition\":{\"StringEquals\":{\"securityhub:TargetAccount\":\"123456789012\"}}},{\"Effect\":\"Allow\",\"Principal\":{\"AWS\":\"123456789012\"},\"Action\":[\"securityhub:BatchImportFindings\"],\"Resource\":\"arn:aws:securityhub:us-west-1:123456789333:product/crowdstrike/crowdstrike-falcon\",\"Condition\":{\"StringEquals\":{\"securityhub:TargetAccount\":\"123456789012\"}}}]}"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-information-about-security-hub-integrations-1676061228533
 * ```
 *
 */
export class DescribeProductsCommand extends $Command<
  DescribeProductsCommandInput,
  DescribeProductsCommandOutput,
  SecurityHubClientResolvedConfig
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
  constructor(readonly input: DescribeProductsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeProductsCommandInput, DescribeProductsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProductsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityHubClient";
    const commandName = "DescribeProductsCommand";
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
  private serialize(input: DescribeProductsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProductsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProductsCommandOutput> {
    return de_DescribeProductsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
