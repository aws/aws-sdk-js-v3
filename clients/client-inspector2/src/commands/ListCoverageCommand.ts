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
import { ListCoverageRequest, ListCoverageResponse } from "../models/models_0";
import { de_ListCoverageCommand, se_ListCoverageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandInput extends ListCoverageRequest {}
/**
 * @public
 *
 * The output of {@link ListCoverageCommand}.
 */
export interface ListCoverageCommandOutput extends ListCoverageResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists coverage details for you environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCoverageCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCoverageCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // ListCoverageRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
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
 * };
 * const command = new ListCoverageCommand(input);
 * const response = await client.send(command);
 * // { // ListCoverageResponse
 * //   nextToken: "STRING_VALUE",
 * //   coveredResources: [ // CoveredResources
 * //     { // CoveredResource
 * //       resourceType: "STRING_VALUE", // required
 * //       resourceId: "STRING_VALUE", // required
 * //       accountId: "STRING_VALUE", // required
 * //       scanType: "STRING_VALUE", // required
 * //       scanStatus: { // ScanStatus
 * //         statusCode: "STRING_VALUE", // required
 * //         reason: "STRING_VALUE", // required
 * //       },
 * //       resourceMetadata: { // ResourceScanMetadata
 * //         ecrRepository: { // EcrRepositoryMetadata
 * //           name: "STRING_VALUE",
 * //           scanFrequency: "STRING_VALUE",
 * //         },
 * //         ecrImage: { // EcrContainerImageMetadata
 * //           tags: [ // TagList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         ec2: { // Ec2Metadata
 * //           tags: { // TagMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           amiId: "STRING_VALUE",
 * //           platform: "STRING_VALUE",
 * //         },
 * //         lambdaFunction: { // LambdaFunctionMetadata
 * //           functionTags: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           layers: [ // LambdaLayerList
 * //             "STRING_VALUE",
 * //           ],
 * //           functionName: "STRING_VALUE",
 * //           runtime: "STRING_VALUE",
 * //         },
 * //       },
 * //       lastScannedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCoverageCommandInput - {@link ListCoverageCommandInput}
 * @returns {@link ListCoverageCommandOutput}
 * @see {@link ListCoverageCommandInput} for command's `input` shape.
 * @see {@link ListCoverageCommandOutput} for command's `response` shape.
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
export class ListCoverageCommand extends $Command<
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
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
  constructor(readonly input: ListCoverageCommandInput) {
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
  ): Handler<ListCoverageCommandInput, ListCoverageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListCoverageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "ListCoverageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "ListCoverage",
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
  private serialize(input: ListCoverageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCoverageCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCoverageCommandOutput> {
    return de_ListCoverageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
