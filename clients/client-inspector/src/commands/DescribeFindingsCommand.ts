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

import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeFindingsRequest, DescribeFindingsResponse } from "../models/models_0";
import { de_DescribeFindingsCommand, se_DescribeFindingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandInput extends DescribeFindingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFindingsCommand}.
 */
export interface DescribeFindingsCommandOutput extends DescribeFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes the findings that are specified by the ARNs of the findings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, DescribeFindingsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, DescribeFindingsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const input = { // DescribeFindingsRequest
 *   findingArns: [ // BatchDescribeArnList // required
 *     "STRING_VALUE",
 *   ],
 *   locale: "EN_US",
 * };
 * const command = new DescribeFindingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFindingsResponse
 * //   findings: [ // FindingList // required
 * //     { // Finding
 * //       arn: "STRING_VALUE", // required
 * //       schemaVersion: Number("int"),
 * //       service: "STRING_VALUE",
 * //       serviceAttributes: { // InspectorServiceAttributes
 * //         schemaVersion: Number("int"), // required
 * //         assessmentRunArn: "STRING_VALUE",
 * //         rulesPackageArn: "STRING_VALUE",
 * //       },
 * //       assetType: "ec2-instance",
 * //       assetAttributes: { // AssetAttributes
 * //         schemaVersion: Number("int"), // required
 * //         agentId: "STRING_VALUE",
 * //         autoScalingGroup: "STRING_VALUE",
 * //         amiId: "STRING_VALUE",
 * //         hostname: "STRING_VALUE",
 * //         ipv4Addresses: [ // Ipv4AddressList
 * //           "STRING_VALUE",
 * //         ],
 * //         tags: [ // Tags
 * //           { // Tag
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //         networkInterfaces: [ // NetworkInterfaces
 * //           { // NetworkInterface
 * //             networkInterfaceId: "STRING_VALUE",
 * //             subnetId: "STRING_VALUE",
 * //             vpcId: "STRING_VALUE",
 * //             privateDnsName: "STRING_VALUE",
 * //             privateIpAddress: "STRING_VALUE",
 * //             privateIpAddresses: [ // PrivateIpAddresses
 * //               { // PrivateIp
 * //                 privateDnsName: "STRING_VALUE",
 * //                 privateIpAddress: "STRING_VALUE",
 * //               },
 * //             ],
 * //             publicDnsName: "STRING_VALUE",
 * //             publicIp: "STRING_VALUE",
 * //             ipv6Addresses: [ // Ipv6Addresses
 * //               "STRING_VALUE",
 * //             ],
 * //             securityGroups: [ // SecurityGroups
 * //               { // SecurityGroup
 * //                 groupName: "STRING_VALUE",
 * //                 groupId: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       id: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       recommendation: "STRING_VALUE",
 * //       severity: "Low" || "Medium" || "High" || "Informational" || "Undefined",
 * //       numericSeverity: Number("double"),
 * //       confidence: Number("int"),
 * //       indicatorOfCompromise: true || false,
 * //       attributes: [ // AttributeList // required
 * //         { // Attribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       userAttributes: [ // UserAttributeList // required
 * //         {
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   failedItems: { // FailedItems // required
 * //     "<keys>": { // FailedItemDetails
 * //       failureCode: "INVALID_ARN" || "DUPLICATE_ARN" || "ITEM_DOES_NOT_EXIST" || "ACCESS_DENIED" || "LIMIT_EXCEEDED" || "INTERNAL_ERROR", // required
 * //       retryable: true || false, // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFindingsCommandInput - {@link DescribeFindingsCommandInput}
 * @returns {@link DescribeFindingsCommandOutput}
 * @see {@link DescribeFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeFindingsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 * @example Describe findings
 * ```javascript
 * // Describes the findings that are specified by the ARNs of the findings.
 * const input = {
 *   "findingArns": [
 *     "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4"
 *   ]
 * };
 * const command = new DescribeFindingsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "failedItems": {},
 *   "findings": [
 *     {
 *       "arn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE/finding/0-HwPnsDm4",
 *       "assetAttributes": {
 *         "ipv4Addresses": [],
 *         "schemaVersion": 1
 *       },
 *       "assetType": "ec2-instance",
 *       "attributes": [],
 *       "confidence": 10,
 *       "createdAt": "1458680301.37",
 *       "description": "Amazon Inspector did not find any potential security issues during this assessment.",
 *       "indicatorOfCompromise": false,
 *       "numericSeverity": 0,
 *       "recommendation": "No remediation needed.",
 *       "schemaVersion": 1,
 *       "service": "Inspector",
 *       "serviceAttributes": {
 *         "assessmentRunArn": "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq/template/0-4r1V2mAw/run/0-MKkpXXPE",
 *         "rulesPackageArn": "arn:aws:inspector:us-west-2:758058086616:rulespackage/0-X1KXtawP",
 *         "schemaVersion": 1
 *       },
 *       "severity": "Informational",
 *       "title": "No potential security issues found",
 *       "updatedAt": "1458680301.37",
 *       "userAttributes": []
 *     }
 *   ]
 * }
 * *\/
 * // example id: describte-findings-1481064771803
 * ```
 *
 */
export class DescribeFindingsCommand extends $Command<
  DescribeFindingsCommandInput,
  DescribeFindingsCommandOutput,
  InspectorClientResolvedConfig
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
  constructor(readonly input: DescribeFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: InspectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFindingsCommandInput, DescribeFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "InspectorClient";
    const commandName = "DescribeFindingsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "InspectorService",
        operation: "DescribeFindings",
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
  private serialize(input: DescribeFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeFindingsCommandOutput> {
    return de_DescribeFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
