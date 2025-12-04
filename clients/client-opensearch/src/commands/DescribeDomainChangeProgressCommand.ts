// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeDomainChangeProgressRequest, DescribeDomainChangeProgressResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DescribeDomainChangeProgress } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDomainChangeProgressCommand}.
 */
export interface DescribeDomainChangeProgressCommandInput extends DescribeDomainChangeProgressRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDomainChangeProgressCommand}.
 */
export interface DescribeDomainChangeProgressCommandOutput
  extends DescribeDomainChangeProgressResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about the current blue/green deployment happening on an Amazon
 *             OpenSearch Service domain. For more information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/managedomains-configuration-changes.html">Making configuration changes in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DescribeDomainChangeProgressCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DescribeDomainChangeProgressCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DescribeDomainChangeProgressRequest
 *   DomainName: "STRING_VALUE", // required
 *   ChangeId: "STRING_VALUE",
 * };
 * const command = new DescribeDomainChangeProgressCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDomainChangeProgressResponse
 * //   ChangeProgressStatus: { // ChangeProgressStatusDetails
 * //     ChangeId: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Status: "PENDING" || "PROCESSING" || "COMPLETED" || "FAILED",
 * //     PendingProperties: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     CompletedProperties: [
 * //       "STRING_VALUE",
 * //     ],
 * //     TotalNumberOfStages: Number("int"),
 * //     ChangeProgressStages: [ // ChangeProgressStageList
 * //       { // ChangeProgressStage
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         LastUpdated: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     ConfigChangeStatus: "Pending" || "Initializing" || "Validating" || "ValidationFailed" || "ApplyingChanges" || "Completed" || "PendingUserInput" || "Cancelled",
 * //     InitiatedBy: "CUSTOMER" || "SERVICE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDomainChangeProgressCommandInput - {@link DescribeDomainChangeProgressCommandInput}
 * @returns {@link DescribeDomainChangeProgressCommandOutput}
 * @see {@link DescribeDomainChangeProgressCommandInput} for command's `input` shape.
 * @see {@link DescribeDomainChangeProgressCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DescribeDomainChangeProgressCommand extends $Command
  .classBuilder<
    DescribeDomainChangeProgressCommandInput,
    DescribeDomainChangeProgressCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "DescribeDomainChangeProgress", {})
  .n("OpenSearchClient", "DescribeDomainChangeProgressCommand")
  .sc(DescribeDomainChangeProgress)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDomainChangeProgressRequest;
      output: DescribeDomainChangeProgressResponse;
    };
    sdk: {
      input: DescribeDomainChangeProgressCommandInput;
      output: DescribeDomainChangeProgressCommandOutput;
    };
  };
}
