// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartElasticsearchServiceSoftwareUpdateRequest,
  StartElasticsearchServiceSoftwareUpdateResponse,
} from "../models/models_0";
import { StartElasticsearchServiceSoftwareUpdate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartElasticsearchServiceSoftwareUpdateCommand}.
 */
export interface StartElasticsearchServiceSoftwareUpdateCommandInput
  extends StartElasticsearchServiceSoftwareUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartElasticsearchServiceSoftwareUpdateCommand}.
 */
export interface StartElasticsearchServiceSoftwareUpdateCommandOutput
  extends StartElasticsearchServiceSoftwareUpdateResponse,
    __MetadataBearer {}

/**
 * <p>Schedules a service software update for an Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, StartElasticsearchServiceSoftwareUpdateCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * // import type { ElasticsearchServiceClientConfig } from "@aws-sdk/client-elasticsearch-service";
 * const config = {}; // type is ElasticsearchServiceClientConfig
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // StartElasticsearchServiceSoftwareUpdateRequest
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new StartElasticsearchServiceSoftwareUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartElasticsearchServiceSoftwareUpdateResponse
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
 * @param StartElasticsearchServiceSoftwareUpdateCommandInput - {@link StartElasticsearchServiceSoftwareUpdateCommandInput}
 * @returns {@link StartElasticsearchServiceSoftwareUpdateCommandOutput}
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandInput} for command's `input` shape.
 * @see {@link StartElasticsearchServiceSoftwareUpdateCommandOutput} for command's `response` shape.
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
export class StartElasticsearchServiceSoftwareUpdateCommand extends $Command
  .classBuilder<
    StartElasticsearchServiceSoftwareUpdateCommandInput,
    StartElasticsearchServiceSoftwareUpdateCommandOutput,
    ElasticsearchServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticsearchServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElasticsearchService2015", "StartElasticsearchServiceSoftwareUpdate", {})
  .n("ElasticsearchServiceClient", "StartElasticsearchServiceSoftwareUpdateCommand")
  .sc(StartElasticsearchServiceSoftwareUpdate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartElasticsearchServiceSoftwareUpdateRequest;
      output: StartElasticsearchServiceSoftwareUpdateResponse;
    };
    sdk: {
      input: StartElasticsearchServiceSoftwareUpdateCommandInput;
      output: StartElasticsearchServiceSoftwareUpdateCommandOutput;
    };
  };
}
