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
import { ListFindingAggregationsRequest, ListFindingAggregationsResponse } from "../models/models_0";
import { de_ListFindingAggregationsCommand, se_ListFindingAggregationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFindingAggregationsCommand}.
 */
export interface ListFindingAggregationsCommandInput extends ListFindingAggregationsRequest {}
/**
 * @public
 *
 * The output of {@link ListFindingAggregationsCommand}.
 */
export interface ListFindingAggregationsCommandOutput extends ListFindingAggregationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists aggregated finding data for your environment based on specific criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListFindingAggregationsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListFindingAggregationsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListFindingAggregationsRequest
 *   aggregationType: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   accountIds: [ // StringFilterList
 *     { // StringFilter
 *       comparison: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   aggregationRequest: { // AggregationRequest Union: only one key present
 *     accountAggregation: { // AccountAggregation
 *       findingType: "STRING_VALUE",
 *       resourceType: "STRING_VALUE",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     amiAggregation: { // AmiAggregation
 *       amis: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     awsEcrContainerAggregation: { // AwsEcrContainerAggregation
 *       resourceIds: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       imageShas: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       repositories: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           value: "STRING_VALUE", // required
 *         },
 *       ],
 *       architectures: "<StringFilterList>",
 *       imageTags: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     ec2InstanceAggregation: { // Ec2InstanceAggregation
 *       amis: "<StringFilterList>",
 *       operatingSystems: "<StringFilterList>",
 *       instanceIds: "<StringFilterList>",
 *       instanceTags: [ // MapFilterList
 *         { // MapFilter
 *           comparison: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     findingTypeAggregation: { // FindingTypeAggregation
 *       findingType: "STRING_VALUE",
 *       resourceType: "STRING_VALUE",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     imageLayerAggregation: { // ImageLayerAggregation
 *       repositories: "<StringFilterList>",
 *       resourceIds: "<StringFilterList>",
 *       layerHashes: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     packageAggregation: { // PackageAggregation
 *       packageNames: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     repositoryAggregation: { // RepositoryAggregation
 *       repositories: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     titleAggregation: { // TitleAggregation
 *       titles: "<StringFilterList>",
 *       vulnerabilityIds: "<StringFilterList>",
 *       resourceType: "STRING_VALUE",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *       findingType: "STRING_VALUE",
 *     },
 *     lambdaLayerAggregation: { // LambdaLayerAggregation
 *       functionNames: "<StringFilterList>",
 *       resourceIds: "<StringFilterList>",
 *       layerArns: "<StringFilterList>",
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *     lambdaFunctionAggregation: { // LambdaFunctionAggregation
 *       resourceIds: "<StringFilterList>",
 *       functionNames: "<StringFilterList>",
 *       runtimes: "<StringFilterList>",
 *       functionTags: [
 *         {
 *           comparison: "STRING_VALUE", // required
 *           key: "STRING_VALUE", // required
 *           value: "STRING_VALUE",
 *         },
 *       ],
 *       sortOrder: "STRING_VALUE",
 *       sortBy: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new ListFindingAggregationsCommand(input);
 * const response = await client.send(command);
 * // { // ListFindingAggregationsResponse
 * //   aggregationType: "STRING_VALUE", // required
 * //   responses: [ // AggregationResponseList
 * //     { // AggregationResponse Union: only one key present
 * //       accountAggregation: { // AccountAggregationResponse
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: { // SeverityCounts
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //       },
 * //       amiAggregation: { // AmiAggregationResponse
 * //         ami: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //         affectedInstances: Number("long"),
 * //       },
 * //       awsEcrContainerAggregation: { // AwsEcrContainerAggregationResponse
 * //         resourceId: "STRING_VALUE", // required
 * //         imageSha: "STRING_VALUE",
 * //         repository: "STRING_VALUE",
 * //         architecture: "STRING_VALUE",
 * //         imageTags: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //       },
 * //       ec2InstanceAggregation: { // Ec2InstanceAggregationResponse
 * //         instanceId: "STRING_VALUE", // required
 * //         ami: "STRING_VALUE",
 * //         operatingSystem: "STRING_VALUE",
 * //         instanceTags: { // TagMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //         networkFindings: Number("long"),
 * //       },
 * //       findingTypeAggregation: { // FindingTypeAggregationResponse
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: {
 * //           all: Number("long"),
 * //           medium: Number("long"),
 * //           high: Number("long"),
 * //           critical: Number("long"),
 * //         },
 * //       },
 * //       imageLayerAggregation: { // ImageLayerAggregationResponse
 * //         repository: "STRING_VALUE", // required
 * //         resourceId: "STRING_VALUE", // required
 * //         layerHash: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       packageAggregation: { // PackageAggregationResponse
 * //         packageName: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       repositoryAggregation: { // RepositoryAggregationResponse
 * //         repository: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //         affectedImages: Number("long"),
 * //       },
 * //       titleAggregation: { // TitleAggregationResponse
 * //         title: "STRING_VALUE", // required
 * //         vulnerabilityId: "STRING_VALUE",
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       lambdaLayerAggregation: { // LambdaLayerAggregationResponse
 * //         functionName: "STRING_VALUE", // required
 * //         resourceId: "STRING_VALUE", // required
 * //         layerArn: "STRING_VALUE", // required
 * //         accountId: "STRING_VALUE", // required
 * //         severityCounts: "<SeverityCounts>",
 * //       },
 * //       lambdaFunctionAggregation: { // LambdaFunctionAggregationResponse
 * //         resourceId: "STRING_VALUE", // required
 * //         functionName: "STRING_VALUE",
 * //         runtime: "STRING_VALUE",
 * //         lambdaTags: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         accountId: "STRING_VALUE",
 * //         severityCounts: "<SeverityCounts>",
 * //         lastModifiedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFindingAggregationsCommandInput - {@link ListFindingAggregationsCommandInput}
 * @returns {@link ListFindingAggregationsCommandOutput}
 * @see {@link ListFindingAggregationsCommandInput} for command's `input` shape.
 * @see {@link ListFindingAggregationsCommandOutput} for command's `response` shape.
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
export class ListFindingAggregationsCommand extends $Command<
  ListFindingAggregationsCommandInput,
  ListFindingAggregationsCommandOutput,
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
  constructor(readonly input: ListFindingAggregationsCommandInput) {
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
  ): Handler<ListFindingAggregationsCommandInput, ListFindingAggregationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListFindingAggregationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "ListFindingAggregationsCommand";
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
  private serialize(input: ListFindingAggregationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListFindingAggregationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingAggregationsCommandOutput> {
    return de_ListFindingAggregationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
