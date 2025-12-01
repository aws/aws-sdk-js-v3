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
import type {
  CancelElasticsearchServiceSoftwareUpdateRequest,
  CancelElasticsearchServiceSoftwareUpdateResponse,
} from "../models/models_0";
import { CancelElasticsearchServiceSoftwareUpdate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelElasticsearchServiceSoftwareUpdateCommand}.
 */
export interface CancelElasticsearchServiceSoftwareUpdateCommandInput
  extends CancelElasticsearchServiceSoftwareUpdateRequest {}
/**
 * @public
 *
 * The output of {@link CancelElasticsearchServiceSoftwareUpdateCommand}.
 */
export interface CancelElasticsearchServiceSoftwareUpdateCommandOutput
  extends CancelElasticsearchServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Cancels a scheduled service software update for an Amazon ES domain. You can only perform this operation before the <code>AutomatedUpdateDate</code> and when the <code>UpdateStatus</code> is in the <code>PENDING_UPDATE</code> state.</p>
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
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
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
export class CancelElasticsearchServiceSoftwareUpdateCommand extends $Command
  .classBuilder<
    CancelElasticsearchServiceSoftwareUpdateCommandInput,
    CancelElasticsearchServiceSoftwareUpdateCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "CancelElasticsearchServiceSoftwareUpdate", {})
  .n("ElasticsearchServiceClient", "CancelElasticsearchServiceSoftwareUpdateCommand")
  .sc(CancelElasticsearchServiceSoftwareUpdate)
  .build() {
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
