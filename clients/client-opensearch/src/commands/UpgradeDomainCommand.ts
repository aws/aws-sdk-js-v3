// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpgradeDomainRequest, UpgradeDomainResponse } from "../models/models_1";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { UpgradeDomain } from "../schemas/schemas_30_Domain";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpgradeDomainCommand}.
 */
export interface UpgradeDomainCommandInput extends UpgradeDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpgradeDomainCommand}.
 */
export interface UpgradeDomainCommandOutput extends UpgradeDomainResponse, __MetadataBearer {}

/**
 * <p>Allows you to either upgrade your Amazon OpenSearch Service domain or perform an upgrade
 *    eligibility check to a compatible version of OpenSearch or Elasticsearch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, UpgradeDomainCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, UpgradeDomainCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // UpgradeDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   TargetVersion: "STRING_VALUE", // required
 *   PerformCheckOnly: true || false,
 *   AdvancedOptions: { // AdvancedOptions
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new UpgradeDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpgradeDomainResponse
 * //   UpgradeId: "STRING_VALUE",
 * //   DomainName: "STRING_VALUE",
 * //   TargetVersion: "STRING_VALUE",
 * //   PerformCheckOnly: true || false,
 * //   AdvancedOptions: { // AdvancedOptions
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   ChangeProgressDetails: { // ChangeProgressDetails
 * //     ChangeId: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     ConfigChangeStatus: "Pending" || "Initializing" || "Validating" || "ValidationFailed" || "ApplyingChanges" || "Completed" || "PendingUserInput" || "Cancelled",
 * //     InitiatedBy: "CUSTOMER" || "SERVICE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpgradeDomainCommandInput - {@link UpgradeDomainCommandInput}
 * @returns {@link UpgradeDomainCommandOutput}
 * @see {@link UpgradeDomainCommandInput} for command's `input` shape.
 * @see {@link UpgradeDomainCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists.</p>
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
export class UpgradeDomainCommand extends $Command
  .classBuilder<
    UpgradeDomainCommandInput,
    UpgradeDomainCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "UpgradeDomain", {})
  .n("OpenSearchClient", "UpgradeDomainCommand")
  .sc(UpgradeDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeDomainRequest;
      output: UpgradeDomainResponse;
    };
    sdk: {
      input: UpgradeDomainCommandInput;
      output: UpgradeDomainCommandOutput;
    };
  };
}
