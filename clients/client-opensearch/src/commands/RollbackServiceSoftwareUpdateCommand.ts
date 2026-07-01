// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RollbackServiceSoftwareUpdateRequest, RollbackServiceSoftwareUpdateResponse } from "../models/models_1";
import { RollbackServiceSoftwareUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RollbackServiceSoftwareUpdateCommand}.
 */
export interface RollbackServiceSoftwareUpdateCommandInput extends RollbackServiceSoftwareUpdateRequest {}
/**
 * @public
 *
 * The output of {@link RollbackServiceSoftwareUpdateCommand}.
 */
export interface RollbackServiceSoftwareUpdateCommandOutput extends RollbackServiceSoftwareUpdateResponse, __MetadataBearer {}

/**
 * <p>Rolls back a service software update for a domain to the previous version. For more
 *             information, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html">Service
 *                 software updates in Amazon OpenSearch Service</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, RollbackServiceSoftwareUpdateCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, RollbackServiceSoftwareUpdateCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // RollbackServiceSoftwareUpdateRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new RollbackServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * // { // RollbackServiceSoftwareUpdateResponse
 * //   RollbackServiceSoftwareOptions: { // RollbackServiceSoftwareOptions
 * //     CurrentVersion: "STRING_VALUE",
 * //     NewVersion: "STRING_VALUE",
 * //     RollbackAvailable: true || false,
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RollbackServiceSoftwareUpdateCommandInput - {@link RollbackServiceSoftwareUpdateCommandInput}
 * @returns {@link RollbackServiceSoftwareUpdateCommandOutput}
 * @see {@link RollbackServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link RollbackServiceSoftwareUpdateCommandOutput} for command's `response` shape.
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
export class RollbackServiceSoftwareUpdateCommand extends command<RollbackServiceSoftwareUpdateCommandInput, RollbackServiceSoftwareUpdateCommandOutput>(
  _ep0,
  _mw0,
  "RollbackServiceSoftwareUpdate",
  RollbackServiceSoftwareUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RollbackServiceSoftwareUpdateRequest;
      output: RollbackServiceSoftwareUpdateResponse;
    };
    sdk: {
      input: RollbackServiceSoftwareUpdateCommandInput;
      output: RollbackServiceSoftwareUpdateCommandOutput;
    };
  };
}
