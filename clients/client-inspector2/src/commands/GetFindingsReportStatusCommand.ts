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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetFindingsReportStatusRequest, GetFindingsReportStatusResponse } from "../models/models_0";
import { de_GetFindingsReportStatusCommand, se_GetFindingsReportStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetFindingsReportStatusCommand}.
 */
export interface GetFindingsReportStatusCommandInput extends GetFindingsReportStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetFindingsReportStatusCommand}.
 */
export interface GetFindingsReportStatusCommandOutput extends GetFindingsReportStatusResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the status of a findings report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetFindingsReportStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetFindingsReportStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // GetFindingsReportStatusRequest
 *   reportId: "STRING_VALUE",
 * };
 * const command = new GetFindingsReportStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetFindingsReportStatusResponse
 * //   reportId: "STRING_VALUE",
 * //   status: "STRING_VALUE",
 * //   errorCode: "STRING_VALUE",
 * //   errorMessage: "STRING_VALUE",
 * //   destination: { // Destination
 * //     bucketName: "STRING_VALUE", // required
 * //     keyPrefix: "STRING_VALUE",
 * //     kmsKeyArn: "STRING_VALUE", // required
 * //   },
 * //   filterCriteria: { // FilterCriteria
 * //     findingArn: [ // StringFilterList
 * //       { // StringFilter
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     awsAccountId: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     findingType: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     severity: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     firstObservedAt: [ // DateFilterList
 * //       { // DateFilter
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     lastObservedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     updatedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     findingStatus: [
 * //       {
 * //         comparison: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     title: "<StringFilterList>",
 * //     inspectorScore: [ // NumberFilterList
 * //       { // NumberFilter
 * //         upperInclusive: Number("double"),
 * //         lowerInclusive: Number("double"),
 * //       },
 * //     ],
 * //     resourceType: "<StringFilterList>",
 * //     resourceId: "<StringFilterList>",
 * //     resourceTags: [ // MapFilterList
 * //       { // MapFilter
 * //         comparison: "STRING_VALUE", // required
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ec2InstanceImageId: "<StringFilterList>",
 * //     ec2InstanceVpcId: "<StringFilterList>",
 * //     ec2InstanceSubnetId: "<StringFilterList>",
 * //     ecrImagePushedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     ecrImageArchitecture: "<StringFilterList>",
 * //     ecrImageRegistry: "<StringFilterList>",
 * //     ecrImageRepositoryName: "<StringFilterList>",
 * //     ecrImageTags: "<StringFilterList>",
 * //     ecrImageHash: "<StringFilterList>",
 * //     portRange: [ // PortRangeFilterList
 * //       { // PortRangeFilter
 * //         beginInclusive: Number("int"),
 * //         endInclusive: Number("int"),
 * //       },
 * //     ],
 * //     networkProtocol: "<StringFilterList>",
 * //     componentId: "<StringFilterList>",
 * //     componentType: "<StringFilterList>",
 * //     vulnerabilityId: "<StringFilterList>",
 * //     vulnerabilitySource: "<StringFilterList>",
 * //     vendorSeverity: "<StringFilterList>",
 * //     vulnerablePackages: [ // PackageFilterList
 * //       { // PackageFilter
 * //         name: "<StringFilter>",
 * //         version: "<StringFilter>",
 * //         epoch: {
 * //           upperInclusive: Number("double"),
 * //           lowerInclusive: Number("double"),
 * //         },
 * //         release: "<StringFilter>",
 * //         architecture: "<StringFilter>",
 * //         sourceLayerHash: "<StringFilter>",
 * //         sourceLambdaLayerArn: "<StringFilter>",
 * //       },
 * //     ],
 * //     relatedVulnerabilities: "<StringFilterList>",
 * //     fixAvailable: "<StringFilterList>",
 * //     lambdaFunctionName: "<StringFilterList>",
 * //     lambdaFunctionLayers: "<StringFilterList>",
 * //     lambdaFunctionRuntime: "<StringFilterList>",
 * //     lambdaFunctionLastModifiedAt: [
 * //       {
 * //         startInclusive: new Date("TIMESTAMP"),
 * //         endInclusive: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     lambdaFunctionExecutionRoleArn: "<StringFilterList>",
 * //     exploitAvailable: "<StringFilterList>",
 * //     codeVulnerabilityDetectorName: "<StringFilterList>",
 * //     codeVulnerabilityDetectorTags: "<StringFilterList>",
 * //     codeVulnerabilityFilePath: "<StringFilterList>",
 * //     epssScore: [
 * //       {
 * //         upperInclusive: Number("double"),
 * //         lowerInclusive: Number("double"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetFindingsReportStatusCommandInput - {@link GetFindingsReportStatusCommandInput}
 * @returns {@link GetFindingsReportStatusCommandOutput}
 * @see {@link GetFindingsReportStatusCommandInput} for command's `input` shape.
 * @see {@link GetFindingsReportStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified correctly.</p>
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
export class GetFindingsReportStatusCommand extends $Command<
  GetFindingsReportStatusCommandInput,
  GetFindingsReportStatusCommandOutput,
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
  constructor(readonly input: GetFindingsReportStatusCommandInput) {
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
  ): Handler<GetFindingsReportStatusCommandInput, GetFindingsReportStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetFindingsReportStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "GetFindingsReportStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "GetFindingsReportStatus",
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
  private serialize(input: GetFindingsReportStatusCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetFindingsReportStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetFindingsReportStatusCommandOutput> {
    return de_GetFindingsReportStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
