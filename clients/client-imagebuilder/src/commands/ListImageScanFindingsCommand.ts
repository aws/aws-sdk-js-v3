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

import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImageScanFindingsRequest, ListImageScanFindingsResponse } from "../models/models_0";
import { de_ListImageScanFindingsCommand, se_ListImageScanFindingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListImageScanFindingsCommand}.
 */
export interface ListImageScanFindingsCommandInput extends ListImageScanFindingsRequest {}
/**
 * @public
 *
 * The output of {@link ListImageScanFindingsCommand}.
 */
export interface ListImageScanFindingsCommandOutput extends ListImageScanFindingsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of image scan findings for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageScanFindingsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageScanFindingsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImageScanFindingsRequest
 *   filters: [ // ImageScanFindingsFilterList
 *     { // ImageScanFindingsFilter
 *       name: "STRING_VALUE",
 *       values: [ // ImageScanFindingsFilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImageScanFindingsCommand(input);
 * const response = await client.send(command);
 * // { // ListImageScanFindingsResponse
 * //   requestId: "STRING_VALUE",
 * //   findings: [ // ImageScanFindingsList
 * //     { // ImageScanFinding
 * //       awsAccountId: "STRING_VALUE",
 * //       imageBuildVersionArn: "STRING_VALUE",
 * //       imagePipelineArn: "STRING_VALUE",
 * //       type: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       title: "STRING_VALUE",
 * //       remediation: { // Remediation
 * //         recommendation: { // RemediationRecommendation
 * //           text: "STRING_VALUE",
 * //           url: "STRING_VALUE",
 * //         },
 * //       },
 * //       severity: "STRING_VALUE",
 * //       firstObservedAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       inspectorScore: Number("double"),
 * //       inspectorScoreDetails: { // InspectorScoreDetails
 * //         adjustedCvss: { // CvssScoreDetails
 * //           scoreSource: "STRING_VALUE",
 * //           cvssSource: "STRING_VALUE",
 * //           version: "STRING_VALUE",
 * //           score: Number("double"),
 * //           scoringVector: "STRING_VALUE",
 * //           adjustments: [ // CvssScoreAdjustmentList
 * //             { // CvssScoreAdjustment
 * //               metric: "STRING_VALUE",
 * //               reason: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       packageVulnerabilityDetails: { // PackageVulnerabilityDetails
 * //         vulnerabilityId: "STRING_VALUE", // required
 * //         vulnerablePackages: [ // VulnerablePackageList
 * //           { // VulnerablePackage
 * //             name: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //             sourceLayerHash: "STRING_VALUE",
 * //             epoch: Number("int"),
 * //             release: "STRING_VALUE",
 * //             arch: "STRING_VALUE",
 * //             packageManager: "STRING_VALUE",
 * //             filePath: "STRING_VALUE",
 * //             fixedInVersion: "STRING_VALUE",
 * //             remediation: "STRING_VALUE",
 * //           },
 * //         ],
 * //         source: "STRING_VALUE",
 * //         cvss: [ // CvssScoreList
 * //           { // CvssScore
 * //             baseScore: Number("double"),
 * //             scoringVector: "STRING_VALUE",
 * //             version: "STRING_VALUE",
 * //             source: "STRING_VALUE",
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
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImageScanFindingsCommandInput - {@link ListImageScanFindingsCommandInput}
 * @returns {@link ListImageScanFindingsCommandOutput}
 * @see {@link ListImageScanFindingsCommandInput} for command's `input` shape.
 * @see {@link ListImageScanFindingsCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 */
export class ListImageScanFindingsCommand extends $Command<
  ListImageScanFindingsCommandInput,
  ListImageScanFindingsCommandOutput,
  ImagebuilderClientResolvedConfig
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
  constructor(readonly input: ListImageScanFindingsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ImagebuilderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListImageScanFindingsCommandInput, ListImageScanFindingsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListImageScanFindingsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ImagebuilderClient";
    const commandName = "ListImageScanFindingsCommand";
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
  private serialize(input: ListImageScanFindingsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListImageScanFindingsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListImageScanFindingsCommandOutput> {
    return de_ListImageScanFindingsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
