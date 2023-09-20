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
import { ListCoverageStatisticsRequest, ListCoverageStatisticsResponse } from "../models/models_0";
import { de_ListCoverageStatisticsCommand, se_ListCoverageStatisticsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCoverageStatisticsCommand}.
 */
export interface ListCoverageStatisticsCommandInput extends ListCoverageStatisticsRequest {}
/**
 * @public
 *
 * The output of {@link ListCoverageStatisticsCommand}.
 */
export interface ListCoverageStatisticsCommandOutput extends ListCoverageStatisticsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists Amazon Inspector coverage statistics for your environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCoverageStatisticsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCoverageStatisticsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListCoverageStatisticsRequest
 *   filterCriteria: { // CoverageFilterCriteria
 *     scanStatusCode: [ // CoverageStringFilterList
 *       { // CoverageStringFilter
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanStatusReason: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     accountId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceId: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     resourceType: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         value: "STRING_VALUE", // required
 *       },
 *     ],
 *     scanType: "<CoverageStringFilterList>",
 *     ecrRepositoryName: "<CoverageStringFilterList>",
 *     ecrImageTags: "<CoverageStringFilterList>",
 *     ec2InstanceTags: [ // CoverageMapFilterList
 *       { // CoverageMapFilter
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionName: "<CoverageStringFilterList>",
 *     lambdaFunctionTags: [
 *       {
 *         comparison: "STRING_VALUE", // required
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     lambdaFunctionRuntime: "<CoverageStringFilterList>",
 *     lastScannedAt: [ // CoverageDateFilterList
 *       { // CoverageDateFilter
 *         startInclusive: new Date("TIMESTAMP"),
 *         endInclusive: new Date("TIMESTAMP"),
 *       },
 *     ],
 *   },
 *   groupBy: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListCoverageStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // ListCoverageStatisticsResponse
 * //   countsByGroup: [ // CountsList
 * //     { // Counts
 * //       count: Number("long"),
 * //       groupKey: "STRING_VALUE",
 * //     },
 * //   ],
 * //   totalCounts: Number("long"), // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCoverageStatisticsCommandInput - {@link ListCoverageStatisticsCommandInput}
 * @returns {@link ListCoverageStatisticsCommandOutput}
 * @see {@link ListCoverageStatisticsCommandInput} for command's `input` shape.
 * @see {@link ListCoverageStatisticsCommandOutput} for command's `response` shape.
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
export class ListCoverageStatisticsCommand extends $Command<
  ListCoverageStatisticsCommandInput,
  ListCoverageStatisticsCommandOutput,
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
  constructor(readonly input: ListCoverageStatisticsCommandInput) {
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
  ): Handler<ListCoverageStatisticsCommandInput, ListCoverageStatisticsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCoverageStatisticsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "ListCoverageStatisticsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "ListCoverageStatistics",
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
  private serialize(input: ListCoverageStatisticsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCoverageStatisticsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoverageStatisticsCommandOutput> {
    return de_ListCoverageStatisticsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
