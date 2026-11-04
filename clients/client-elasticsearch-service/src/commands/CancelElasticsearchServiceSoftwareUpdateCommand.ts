// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CancelElasticsearchServiceSoftwareUpdateRequest,
  CancelElasticsearchServiceSoftwareUpdateResponse,
} from "../models/models_0";
import { CancelElasticsearchServiceSoftwareUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelElasticsearchServiceSoftwareUpdateCommand}.
 */
export interface CancelElasticsearchServiceSoftwareUpdateCommandInput extends CancelElasticsearchServiceSoftwareUpdateRequest {}
/**
 * @public
 *
 * The output of {@link CancelElasticsearchServiceSoftwareUpdateCommand}.
 */
export interface CancelElasticsearchServiceSoftwareUpdateCommandOutput extends CancelElasticsearchServiceSoftwareUpdateResponse, __MetadataBearer {}

/**
 * Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the `AutomatedUpdateDate` and when the `UpdateStatus` is in the `PENDING_UPDATE` state.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CancelElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // CancelElasticsearchServiceSoftwareUpdateRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new CancelElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * // { // CancelElasticsearchServiceSoftwareUpdateResponse
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
 * @param CancelElasticsearchServiceSoftwareUpdateCommandInput - {@link CancelElasticsearchServiceSoftwareUpdateCommandInput}
 * @returns {@link CancelElasticsearchServiceSoftwareUpdateCommandOutput}
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link CancelElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *
 * An error occurred while processing the request.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for missing / invalid input fields. Gives http status code of 400.
 *
 * @throws {@link ElasticsearchServiceServiceException}
 *
 * Base exception class for all service exceptions from ElasticsearchService service.
 *
 * @public
 */
export class CancelElasticsearchServiceSoftwareUpdateCommand extends command<CancelElasticsearchServiceSoftwareUpdateCommandInput, CancelElasticsearchServiceSoftwareUpdateCommandOutput>(
  _ep0,
  _mw0,
  "CancelElasticsearchServiceSoftwareUpdate",
  CancelElasticsearchServiceSoftwareUpdate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelElasticsearchServiceSoftwareUpdateRequest;
      output: CancelElasticsearchServiceSoftwareUpdateResponse;
    };
    sdk: {
      input: CancelElasticsearchServiceSoftwareUpdateCommandInput;
      output: CancelElasticsearchServiceSoftwareUpdateCommandOutput;
    };
  };
}
