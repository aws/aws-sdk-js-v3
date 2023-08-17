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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListFindingsRequest, ListFindingsResponse } from "../models/models_0";
import { de_ListFindingsCommand, se_ListFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandInput extends ListFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingsCommand}.
 */
export interface ListFindingsCommandOutput extends ListFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists findings for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListFindingsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListFindingsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListFindingsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filterCriteria: { // FilterCriteria
 *     findingArn: [ // StringFilterList
 *       { // StringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     awsAccountId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     findingType: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     severity: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     firstObservedAt: [ // DateFilterList
 *       { // DateFilter
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     lastObservedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     updatedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     findingStatus: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     title: "<StringFilterList>",
 *     inspectorScore: [ // NumberFilterList
 *       { // NumberFilter
 *         upperInclusive: Number("double"),
 *         lowerInclusive: Number("double"),
 *       },
 *     ],
 *     resourceType: "<StringFilterList>",
 *     resourceId: "<StringFilterList>",
 *     resourceTags: [ // MapFilterList
 *       { // MapFilter
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     ec2InstanceImageId: "<StringFilterList>",
 *     ec2InstanceVpcId: "<StringFilterList>",
 *     ec2InstanceSubnetId: "<StringFilterList>",
 *     ecrImagePushedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     ecrImageArchitecture: "<StringFilterList>",
 *     ecrImageRegistry: "<StringFilterList>",
 *     ecrImageRepositoryName: "<StringFilterList>",
 *     ecrImageTags: "<StringFilterList>",
 *     ecrImageHash: "<StringFilterList>",
 *     portRange: [ // PortRangeFilterList
 *       { // PortRangeFilter
 *         beginInclusive: Number("int"),
 *         endInclusive: Number("int"),
 *       },
 *     ],
 *     networkProtocol: "<StringFilterList>",
 *     componentId: "<StringFilterList>",
 *     componentType: "<StringFilterList>",
 *     vulnerabilityId: "<StringFilterList>",
 *     vulnerabilitySource: "<StringFilterList>",
 *     vendorSeverity: "<StringFilterList>",
 *     vulnerablePackages: [ // PackageFilterList
 *       { // PackageFilter
 *         name: "<StringFilter>",
 *         version: "<StringFilter>",
 *         epoch: {
 *           upperInclusive: Number("double"),
 *           lowerInclusive: Number("double"),
 *         },
 *         release: "<StringFilter>",
 *         architecture: "<StringFilter>",
 *         sourceLayerHash: "<StringFilter>",
 *         sourceLambdaLayerArn: "<StringFilter>",
 *       },
 *     ],
 *     relatedVulnerabilities: "<StringFilterList>",
 *     fixAvailable: "<StringFilterList>",
 *     lambdaFunctionName: "<StringFilterList>",
 *     lambdaFunctionLayers: "<StringFilterList>",
 *     lambdaFunctionRuntime: "<StringFilterList>",
 *     lambdaFunctionLastModifiedAt: [
 *       {
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *     lambdaFunctionExecutionRoleArn: "<StringFilterList>",
 *     exploitAvailable: "<StringFilterList>",
 *     codeVulnerabilityDetectorName: "<StringFilterList>",
 *     codeVulnerabilityDetectorTags: "<StringFilterList>",
 *     codeVulnerabilityFilePath: "<StringFilterList>",
 *     epssScore: [
 *       {
 *         upperInclusive: Number("double"),
 *         lowerInclusive: Number("double"),
 *       },
 *     ],
 *   },
 *   sortCriteria: { // SortCriteria
 *     field: "STRING_VALUE", // required
 *     sortOrder: "STRING_VALUE", // required
 *   },
 * };
 * const command = new ListFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingsResponse
 * //   nextToken: "STRING_VALUE",
 * //   findings: [ // FindingList
 * //     { // Finding
 * //       findingArn: "STRING_VALUE", // required
 * //       awsAccountId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       title: "STRING_VALUE",
 * //       remediation: { // Remediation
 * //         recommendation: { // Recommendation
 * //           text: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //       },
 * //       severity: "STRING_VALUE", // required
 * //       firstObservedAt: new Date("TIMESTAMP"), // required
 * //       lastObservedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE", // required
 * //       resources: [ // ResourceList // required
 * //         { // Resource
 * //           type: "STRING_VALUE", // required
 * //           id: "STRING_VALUE", // required
 * //           partition: "STRING_VALUE",
 * //           region: "STRING_VALUE",
 * //           tags: { // TagMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           details: { // ResourceDetails
 * //             awsEc2Instance: { // AwsEc2InstanceDetails
 * //               type: "STRING_VALUE",
 * //               imageId: "STRING_VALUE",
 * //               ipV4Addresses: [ // IpV4AddressList
 * //                 "STRING_VALUE",
 * //               ],
 * //               ipV6Addresses: [ // IpV6AddressList
 * //                 "STRING_VALUE",
 * //               ],
 * //               keyName: "STRING_VALUE",
 * //               iamInstanceProfileArn: "STRING_VALUE",
 * //               vpcId: "STRING_VALUE",
 * //               subnetId: "STRING_VALUE",
 * //               launchedAt: new Date("TIMESTAMP"),
 * //               platform: "STRING_VALUE",
 * //             },
 * //             awsEcrContainerImage: { // AwsEcrContainerImageDetails
 * //               repositoryName: "STRING_VALUE", // required
 * //               imageTags: [ // ImageTagList
 * //                 "STRING_VALUE",
 * //               ],
 * //               pushedAt: new Date("TIMESTAMP"),
 * //               author: "STRING_VALUE",
 * //               architecture: "STRING_VALUE",
 * //               imageHash: "STRING_VALUE", // required
 * //               registry: "STRING_VALUE", // required
 * //               platform: "STRING_VALUE",
 * //             },
 * //             awsLambdaFunction: { // AwsLambdaFunctionDetails
 * //               functionName: "STRING_VALUE", // required
 * //               runtime: "STRING_VALUE", // required
 * //               codeSha256: "STRING_VALUE", // required
 * //               version: "STRING_VALUE", // required
 * //               executionRoleArn: "STRING_VALUE", // required
 * //               layers: [ // LayerList
 * //                 "STRING_VALUE",
 * //               ],
 * //               vpcConfig: { // LambdaVpcConfig
 * //                 subnetIds: [ // SubnetIdList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 securityGroupIds: [ // SecurityGroupIdList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 vpcId: "STRING_VALUE",
 * //               },
 * //               packageType: "STRING_VALUE",
 * //               architectures: [ // ArchitectureList
 * //                 "STRING_VALUE",
 * //               ],
 * //               lastModifiedAt: new Date("TIMESTAMP"),
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       inspectorScore: Number("double"),
 * //       inspectorScoreDetails: { // InspectorScoreDetails
 * //         adjustedCvss: { // CvssScoreDetails
 * //           scoreSource: "STRING_VALUE", // required
 * //           cvssSource: "STRING_VALUE",
 * //           version: "STRING_VALUE", // required
 * //           score: Number("double"), // required
 * //           scoringVector: "STRING_VALUE", // required
 * //           adjustments: [ // CvssScoreAdjustmentList
 * //             { // CvssScoreAdjustment
 * //               metric: "STRING_VALUE", // required
 * //               reason: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       networkReachabilityDetails: { // NetworkReachabilityDetails
 * //         openPortRange: { // PortRange
 * //           begin: Number("int"), // required
 * //           end: Number("int"), // required
 * //         },
 * //         protocol: "STRING_VALUE", // required
 * //         networkPath: { // NetworkPath
 * //           steps: [ // StepList
 * //             { // Step
 * //               componentId: "STRING_VALUE", // required
 * //               componentType: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       packageVulnerabilityDetails: { // PackageVulnerabilityDetails
 * //         vulnerabilityId: "STRING_VALUE", // required
 * //         vulnerablePackages: [ // VulnerablePackageList
 * //           { // VulnerablePackage
 * //             name: "STRING_VALUE", // required
 * //             version: "STRING_VALUE", // required
 * //             sourceLayerHash: "STRING_VALUE",
 * //             epoch: Number("int"),
 * //             release: "STRING_VALUE",
 * //             arch: "STRING_VALUE",
 * //             packageManager: "STRING_VALUE",
 * //             filePath: "STRING_VALUE",
 * //             fixedInVersion: "STRING_VALUE",
 * //             remediation: "STRING_VALUE",
 * //             sourceLambdaLayerArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         source: "STRING_VALUE", // required
 * //         cvss: [ // CvssScoreList
 * //           { // CvssScore
 * //             baseScore: Number("double"), // required
 * //             scoringVector: "STRING_VALUE", // required
 * //             version: "STRING_VALUE", // required
 * //             source: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         relatedVulnerabilities: [ // VulnerabilityIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         sourceUrl: "STRING_VALUE",
 * //         vendorSeverity: "STRING_VALUE",
 * //         vendorCreatedAt: new Date("TIMESTAMP"),
 * //         vendorUpdatedAt: new Date("TIMESTAMP"),
 * //         referenceUrls: [ // NonEmptyStringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       fixAvailable: "STRING_VALUE",
 * //       exploitAvailable: "STRING_VALUE",
 * //       exploitabilityDetails: { // ExploitabilityDetails
 * //         lastKnownExploitAt: new Date("TIMESTAMP"),
 * //       },
 * //       codeVulnerabilityDetails: { // CodeVulnerabilityDetails
 * //         filePath: { // CodeFilePath
 * //           fileName: "STRING_VALUE", // required
 * //           filePath: "STRING_VALUE", // required
 * //           startLine: Number("int"), // required
 * //           endLine: Number("int"), // required
 * //         },
 * //         detectorTags: [ // DetectorTagList
 * //           "STRING_VALUE",
 * //         ],
 * //         referenceUrls: [ // ReferenceUrls
 * //           "STRING_VALUE",
 * //         ],
 * //         ruleId: "STRING_VALUE",
 * //         sourceLambdaLayerArn: "STRING_VALUE",
 * //         detectorId: "STRING_VALUE", // required
 * //         detectorName: "STRING_VALUE", // required
 * //         cwes: [ // CweList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       epss: { // EpssDetails
 * //         score: Number("double"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFindingsCommandInput - {@link ListFindingsCommandInput}
 * @returns {@link ListFindingsCommandOutput}
 * @see {@link ListFindingsCommandInput} for command's `input` shape.
 * @see {@link ListFindingsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class ListFindingsCommand extends $Command<
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: ListFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListFindingsCommandInput, ListFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListFindingsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "ListFindingsCommand";
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
  private serialize(input: ListFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingsCommandOutput> {
    return de_ListFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
