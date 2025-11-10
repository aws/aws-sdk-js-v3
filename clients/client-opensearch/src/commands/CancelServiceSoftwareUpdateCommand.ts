// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelServiceSoftwareUpdateRequest, CancelServiceSoftwareUpdateResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { CancelServiceSoftwareUpdate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelServiceSoftwareUpdateCommand}.
 */
export interface CancelServiceSoftwareUpdateCommandInput extends CancelServiceSoftwareUpdateRequest {}
/**
 * @public
 *
 * The output of {@link CancelServiceSoftwareUpdateCommand}.
 */
export interface CancelServiceSoftwareUpdateCommandOutput
  extends CancelServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a scheduled service software update for an Amazon OpenSearch Service domain.
 *             You can only perform this operation before the <code>AutomatedUpdateDate</code> and when
 *             the domain's <code>UpdateStatus</code> is <code>PENDING_UPDATE</code>. For more
 *             information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service
 *                 software updates in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CancelServiceSoftwareUpdateCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CancelServiceSoftwareUpdateCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // CancelServiceSoftwareUpdateRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new CancelServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * // { // CancelServiceSoftwareUpdateResponse
 * //   ServiceSoftwareOptions: { // ServiceSoftwareOptions
 * //     CurrentVersion: "STRING_VALUE",
 * //     NewVersion: "STRING_VALUE",
 * //     UpdateAvailable: true || false,
 * //     Cancellable: true || false,
 * //     UpdateStatus: "PENDING_UPDATE" || "IN_PROGRESS" || "COMPLETED" || "NOT_ELIGIBLE" || "ELIGIBLE",
 * //     Description: "STRING_VALUE",
 * //     AutomatedUpdateDate: new Date("TIMESTAMP"),
 * //     OptionalDeployment: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelServiceSoftwareUpdateCommandInput - {@link CancelServiceSoftwareUpdateCommandInput}
 * @returns {@link CancelServiceSoftwareUpdateCommandOutput}
 * @see {@link CancelServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelServiceSoftwareUpdateCommandOutput} for command's `response` shape.
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
export class CancelServiceSoftwareUpdateCommand extends $Command
  .classBuilder<
    CancelServiceSoftwareUpdateCommandInput,
    CancelServiceSoftwareUpdateCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "CancelServiceSoftwareUpdate", {})
  .n("OpenSearchClient", "CancelServiceSoftwareUpdateCommand")
  .sc(CancelServiceSoftwareUpdate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelServiceSoftwareUpdateRequest;
      output: CancelServiceSoftwareUpdateResponse;
    };
    sdk: {
      input: CancelServiceSoftwareUpdateCommandInput;
      output: CancelServiceSoftwareUpdateCommandOutput;
    };
  };
}
