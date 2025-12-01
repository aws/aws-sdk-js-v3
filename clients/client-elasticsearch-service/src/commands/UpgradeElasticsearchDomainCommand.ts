// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpgradeElasticsearchDomainRequest, UpgradeElasticsearchDomainResponse } from "../models/models_0";
import { UpgradeElasticsearchDomain } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpgradeElasticsearchDomainCommand}.
 */
export interface UpgradeElasticsearchDomainCommandInput extends UpgradeElasticsearchDomainRequest {}
/**
 * @public
 *
 * The output of {@link UpgradeElasticsearchDomainCommand}.
 */
export interface UpgradeElasticsearchDomainCommandOutput extends UpgradeElasticsearchDomainResponse, __MetadataBearer {}

/**
 * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpgradeElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpgradeElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // UpgradeElasticsearchDomainRequest
 *   DomainName: "STRING_VALUE", // required
 *   TargetVersion: "STRING_VALUE", // required
 *   PerformCheckOnly: true || false,
 * };
 * const command = new UpgradeElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpgradeElasticsearchDomainResponse
 * //   DomainName: "STRING_VALUE",
 * //   TargetVersion: "STRING_VALUE",
 * //   PerformCheckOnly: true || false,
 * //   ChangeProgressDetails: { // ChangeProgressDetails
 * //     ChangeId: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     ConfigChangeStatus: "Pending" || "Initializing" || "Validating" || "ValidationFailed" || "ApplyingChanges" || "Completed" || "PendingUserInput" || "Cancelled",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     LastUpdatedTime: new Date("TIMESTAMP"),
 * //     InitiatedBy: "CUSTOMER" || "SERVICE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpgradeElasticsearchDomainCommandInput - {@link UpgradeElasticsearchDomainCommandInput}
 * @returns {@link UpgradeElasticsearchDomainCommandOutput}
 * @see {@link UpgradeElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link UpgradeElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>An exception for creating a resource that already exists. Gives http status code of 400.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing / invalid input fields. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 *
 * @public
 */
export class UpgradeElasticsearchDomainCommand extends $Command
  .classBuilder<
    UpgradeElasticsearchDomainCommandInput,
    UpgradeElasticsearchDomainCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "UpgradeElasticsearchDomain", {})
  .n("ElasticsearchServiceClient", "UpgradeElasticsearchDomainCommand")
  .sc(UpgradeElasticsearchDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpgradeElasticsearchDomainRequest;
      output: UpgradeElasticsearchDomainResponse;
    };
    sdk: {
      input: UpgradeElasticsearchDomainCommandInput;
      output: UpgradeElasticsearchDomainCommandOutput;
    };
  };
}
