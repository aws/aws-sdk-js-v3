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

import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { DescribeImageScanFindingsRequest, DescribeImageScanFindingsResponse } from "../models/models_0";
import { de_DescribeImageScanFindingsCommand, se_DescribeImageScanFindingsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeImageScanFindingsCommand}.
 */
export interface DescribeImageScanFindingsCommandInput extends DescribeImageScanFindingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeImageScanFindingsCommand}.
 */
export interface DescribeImageScanFindingsCommandOutput extends DescribeImageScanFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns the scan findings for the specified image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DescribeImageScanFindingsCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DescribeImageScanFindingsCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const input = { // DescribeImageScanFindingsRequest
 *   registryId: "STRING_VALUE",
 *   repositoryName: "STRING_VALUE", // required
 *   imageId: { // ImageIdentifier
 *     imageDigest: "STRING_VALUE",
 *     imageTag: "STRING_VALUE",
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeImageScanFindingsResponse
 * //   registryId: "STRING_VALUE",
 * //   repositoryName: "STRING_VALUE",
 * //   imageId: { // ImageIdentifier
 * //     imageDigest: "STRING_VALUE",
 * //     imageTag: "STRING_VALUE",
 * //   },
 * //   imageScanStatus: { // ImageScanStatus
 * //     status: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * //   imageScanFindings: { // ImageScanFindings
 * //     imageScanCompletedAt: new Date("TIMESTAMP"),
 * //     vulnerabilitySourceUpdatedAt: new Date("TIMESTAMP"),
 * //     findingSeverityCounts: { // FindingSeverityCounts
 * //       "<keys>": Number("int"),
 * //     },
 * //     findings: [ // ImageScanFindingList
 * //       { // ImageScanFinding
 * //         name: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         uri: "STRING_VALUE",
 * //         severity: "STRING_VALUE",
 * //         attributes: [ // AttributeList
 * //           { // Attribute
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     enhancedFindings: [ // EnhancedImageScanFindingList
 * //       { // EnhancedImageScanFinding
 * //         awsAccountId: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //         findingArn: "STRING_VALUE",
 * //         firstObservedAt: new Date("TIMESTAMP"),
 * //         lastObservedAt: new Date("TIMESTAMP"),
 * //         packageVulnerabilityDetails: { // PackageVulnerabilityDetails
 * //           cvss: [ // CvssScoreList
 * //             { // CvssScore
 * //               baseScore: Number("double"),
 * //               scoringVector: "STRING_VALUE",
 * //               source: "STRING_VALUE",
 * //               version: "STRING_VALUE",
 * //             },
 * //           ],
 * //           referenceUrls: [ // ReferenceUrlsList
 * //             "STRING_VALUE",
 * //           ],
 * //           relatedVulnerabilities: [ // RelatedVulnerabilitiesList
 * //             "STRING_VALUE",
 * //           ],
 * //           source: "STRING_VALUE",
 * //           sourceUrl: "STRING_VALUE",
 * //           vendorCreatedAt: new Date("TIMESTAMP"),
 * //           vendorSeverity: "STRING_VALUE",
 * //           vendorUpdatedAt: new Date("TIMESTAMP"),
 * //           vulnerabilityId: "STRING_VALUE",
 * //           vulnerablePackages: [ // VulnerablePackagesList
 * //             { // VulnerablePackage
 * //               arch: "STRING_VALUE",
 * //               epoch: Number("int"),
 * //               filePath: "STRING_VALUE",
 * //               name: "STRING_VALUE",
 * //               packageManager: "STRING_VALUE",
 * //               release: "STRING_VALUE",
 * //               sourceLayerHash: "STRING_VALUE",
 * //               version: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         remediation: { // Remediation
 * //           recommendation: { // Recommendation
 * //             url: "STRING_VALUE",
 * //             text: "STRING_VALUE",
 * //           },
 * //         },
 * //         resources: [ // ResourceList
 * //           { // Resource
 * //             details: { // ResourceDetails
 * //               awsEcrContainerImage: { // AwsEcrContainerImageDetails
 * //                 architecture: "STRING_VALUE",
 * //                 author: "STRING_VALUE",
 * //                 imageHash: "STRING_VALUE",
 * //                 imageTags: [ // ImageTagsList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 platform: "STRING_VALUE",
 * //                 pushedAt: new Date("TIMESTAMP"),
 * //                 registry: "STRING_VALUE",
 * //                 repositoryName: "STRING_VALUE",
 * //               },
 * //             },
 * //             id: "STRING_VALUE",
 * //             tags: { // Tags
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //             type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         score: Number("double"),
 * //         scoreDetails: { // ScoreDetails
 * //           cvss: { // CvssScoreDetails
 * //             adjustments: [ // CvssScoreAdjustmentList
 * //               { // CvssScoreAdjustment
 * //                 metric: "STRING_VALUE",
 * //                 reason: "STRING_VALUE",
 * //               },
 * //             ],
 * //             score: Number("double"),
 * //             scoreSource: "STRING_VALUE",
 * //             scoringVector: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //           },
 * //         },
 * //         severity: "STRING_VALUE",
 * //         status: "STRING_VALUE",
 * //         title: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeImageScanFindingsCommandInput - {@link DescribeImageScanFindingsCommandInput}
 * @returns {@link DescribeImageScanFindingsCommandOutput}
 * @see {@link DescribeImageScanFindingsCommandInput} for command's `input` shape.
 * @see {@link DescribeImageScanFindingsCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for ECRClient's `config` shape.
 *
 * @throws {@link ImageNotFoundException} (client fault)
 *  <p>The image requested does not exist in the specified repository.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The specified parameter is invalid. Review the available parameters for the API
 *             request.</p>
 *
 * @throws {@link RepositoryNotFoundException} (client fault)
 *  <p>The specified repository could not be found. Check the spelling of the specified
 *             repository and ensure that you are performing operations on the correct registry.</p>
 *
 * @throws {@link ScanNotFoundException} (client fault)
 *  <p>The specified image scan could not be found. Ensure that image scanning is enabled on
 *             the repository and try again.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server-side issue.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There was an exception validating this request.</p>
 *
 * @throws {@link ECRServiceException}
 * <p>Base exception class for all service exceptions from ECR service.</p>
 *
 */
export class DescribeImageScanFindingsCommand extends $Command<
  DescribeImageScanFindingsCommandInput,
  DescribeImageScanFindingsCommandOutput,
  ECRClientResolvedConfig
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
  constructor(readonly input: DescribeImageScanFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ECRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeImageScanFindingsCommandInput, DescribeImageScanFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeImageScanFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ECRClient";
    const commandName = "DescribeImageScanFindingsCommand";
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
  private serialize(input: DescribeImageScanFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeImageScanFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeImageScanFindingsCommandOutput> {
    return de_DescribeImageScanFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
