// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetUpgradeStatusRequest, GetUpgradeStatusResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { GetUpgradeStatus } from "../schemas/schemas_32_GetUpgrade";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUpgradeStatusCommand}.
 */
export interface GetUpgradeStatusCommandInput extends GetUpgradeStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetUpgradeStatusCommand}.
 */
export interface GetUpgradeStatusCommandOutput extends GetUpgradeStatusResponse, __MetadataBearer {}

/**
 * <p>Returns the most recent status of the last upgrade or upgrade eligibility check performed on
 *    an Amazon OpenSearch Service domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, GetUpgradeStatusCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, GetUpgradeStatusCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // GetUpgradeStatusRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetUpgradeStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetUpgradeStatusResponse
 * //   UpgradeStep: "PRE_UPGRADE_CHECK" || "SNAPSHOT" || "UPGRADE",
 * //   StepStatus: "IN_PROGRESS" || "SUCCEEDED" || "SUCCEEDED_WITH_ISSUES" || "FAILED",
 * //   UpgradeName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUpgradeStatusCommandInput - {@link GetUpgradeStatusCommandInput}
 * @returns {@link GetUpgradeStatusCommandOutput}
 * @see {@link GetUpgradeStatusCommandInput} for command's `input` shape.
 * @see {@link GetUpgradeStatusCommandOutput} for command's `response` shape.
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
export class GetUpgradeStatusCommand extends $Command
  .classBuilder<
    GetUpgradeStatusCommandInput,
    GetUpgradeStatusCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "GetUpgradeStatus", {})
  .n("OpenSearchClient", "GetUpgradeStatusCommand")
  .sc(GetUpgradeStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUpgradeStatusRequest;
      output: GetUpgradeStatusResponse;
    };
    sdk: {
      input: GetUpgradeStatusCommandInput;
      output: GetUpgradeStatusCommandOutput;
    };
  };
}
