// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { SearchVulnerabilitiesRequest, SearchVulnerabilitiesResponse } from "../models/models_1";
import { de_SearchVulnerabilitiesCommand, se_SearchVulnerabilitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
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
 *
 * @public
 */
export class SearchVulnerabilitiesCommand extends $Command
  .classBuilder<
    SearchVulnerabilitiesCommandInput,
    SearchVulnerabilitiesCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "SearchVulnerabilities", {})
  .n("Inspector2Client", "SearchVulnerabilitiesCommand")
  .f(void 0, void 0)
  .ser(se_SearchVulnerabilitiesCommand)
  .de(de_SearchVulnerabilitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchVulnerabilitiesRequest;
      output: SearchVulnerabilitiesResponse;
    };
    sdk: {
      input: SearchVulnerabilitiesCommandInput;
      output: SearchVulnerabilitiesCommandOutput;
    };
  };
}
