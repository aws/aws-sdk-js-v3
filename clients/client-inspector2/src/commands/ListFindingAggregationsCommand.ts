// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListFindingAggregationsRequest, ListFindingAggregationsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1ListFindingAggregationsCommand,
  serializeAws_restJson1ListFindingAggregationsCommand,
} from "../protocols/Aws_restJson1";

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
    return serializeAws_restJson1ListFindingAggregationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListFindingAggregationsCommandOutput> {
    return deserializeAws_restJson1ListFindingAggregationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
