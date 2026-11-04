// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelServiceSoftwareUpdateRequest, CancelServiceSoftwareUpdateResponse } from "../models/models_0";
import { CancelServiceSoftwareUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CancelServiceSoftwareUpdateCommandOutput extends CancelServiceSoftwareUpdateResponse, __MetadataBearer {}

/**
 * Cancels a scheduled service software update for an Amazon OpenSearch Service domain. You can only perform this operation before the `AutomatedUpdateDate` and when the domain's `UpdateStatus` is `PENDING_UPDATE`. For more information, see [Service software updates in Amazon OpenSearch Service](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/service-software.html).
 *
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
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * Request processing failed because of an unknown error, exception, or internal failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for accessing or deleting a resource that doesn't exist.
 *
 * @throws {@link OpenSearchServiceException}
 *
 * Base exception class for all service exceptions from OpenSearch service.
 *
 * @public
 */
export class CancelServiceSoftwareUpdateCommand extends command<CancelServiceSoftwareUpdateCommandInput, CancelServiceSoftwareUpdateCommandOutput>(
  _ep0,
  _mw0,
  "CancelServiceSoftwareUpdate",
  CancelServiceSoftwareUpdate$
) {
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
