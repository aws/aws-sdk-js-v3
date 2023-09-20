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
import { SearchVulnerabilitiesRequest, SearchVulnerabilitiesResponse } from "../models/models_0";
import { de_SearchVulnerabilitiesCommand, se_SearchVulnerabilitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link SearchVulnerabilitiesCommand}.
 */
export interface SearchVulnerabilitiesCommandInput extends SearchVulnerabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link SearchVulnerabilitiesCommand}.
 */
export interface SearchVulnerabilitiesCommandOutput extends SearchVulnerabilitiesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists Amazon Inspector coverage details for a specific vulnerability.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, SearchVulnerabilitiesCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, SearchVulnerabilitiesCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // SearchVulnerabilitiesRequest
 *   filterCriteria: { // SearchVulnerabilitiesFilterCriteria
 *     vulnerabilityIds: [ // VulnIdList // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchVulnerabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // SearchVulnerabilitiesResponse
 * //   vulnerabilities: [ // Vulnerabilities // required
 * //     { // Vulnerability
 * //       id: "STRING_VALUE", // required
 * //       cwes: [ // Cwes
 * //         "STRING_VALUE",
 * //       ],
 * //       cisaData: { // CisaData
 * //         dateAdded: new Date("TIMESTAMP"),
 * //         dateDue: new Date("TIMESTAMP"),
 * //         action: "STRING_VALUE",
 * //       },
 * //       source: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       atigData: { // AtigData
 * //         firstSeen: new Date("TIMESTAMP"),
 * //         lastSeen: new Date("TIMESTAMP"),
 * //         targets: [ // Targets
 * //           "STRING_VALUE",
 * //         ],
 * //         ttps: [ // Ttps
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       vendorSeverity: "STRING_VALUE",
 * //       cvss3: { // Cvss3
 * //         baseScore: Number("double"),
 * //         scoringVector: "STRING_VALUE",
 * //       },
 * //       relatedVulnerabilities: [ // RelatedVulnerabilities
 * //         "STRING_VALUE",
 * //       ],
 * //       cvss2: { // Cvss2
 * //         baseScore: Number("double"),
 * //         scoringVector: "STRING_VALUE",
 * //       },
 * //       vendorCreatedAt: new Date("TIMESTAMP"),
 * //       vendorUpdatedAt: new Date("TIMESTAMP"),
 * //       sourceUrl: "STRING_VALUE",
 * //       referenceUrls: [ // VulnerabilityReferenceUrls
 * //         "STRING_VALUE",
 * //       ],
 * //       exploitObserved: { // ExploitObserved
 * //         lastSeen: new Date("TIMESTAMP"),
 * //         firstSeen: new Date("TIMESTAMP"),
 * //       },
 * //       detectionPlatforms: [ // DetectionPlatforms
 * //         "STRING_VALUE",
 * //       ],
 * //       epss: { // Epss
 * //         score: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchVulnerabilitiesCommandInput - {@link SearchVulnerabilitiesCommandInput}
 * @returns {@link SearchVulnerabilitiesCommandOutput}
 * @see {@link SearchVulnerabilitiesCommandInput} for command's `input` shape.
 * @see {@link SearchVulnerabilitiesCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
export class SearchVulnerabilitiesCommand extends $Command<
  SearchVulnerabilitiesCommandInput,
  SearchVulnerabilitiesCommandOutput,
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
  constructor(readonly input: SearchVulnerabilitiesCommandInput) {
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
  ): Handler<SearchVulnerabilitiesCommandInput, SearchVulnerabilitiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchVulnerabilitiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "SearchVulnerabilitiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "SearchVulnerabilities",
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
  private serialize(input: SearchVulnerabilitiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchVulnerabilitiesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SearchVulnerabilitiesCommandOutput> {
    return de_SearchVulnerabilitiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
