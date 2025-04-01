// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SyncResourceRequest, SyncResourceResponse } from "../models/models_0";
import { de_SyncResourceCommand, se_SyncResourceCommand } from "../protocols/Aws_restJson1";
import {
  ServiceCatalogAppRegistryClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogAppRegistryClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SyncResourceCommand}.
 */
export interface SyncResourceCommandInput extends SyncResourceRequest {}
/**
 * @public
 *
 * The output of {@link SyncResourceCommand}.
 */
export interface SyncResourceCommandOutput extends SyncResourceResponse, __MetadataBearer {}

/**
 * <p>Syncs the resource with current AppRegistry records.</p>
 *          <p>Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, SyncResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, SyncResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * const client = new ServiceCatalogAppRegistryClient(config);
 * const input = { // SyncResourceRequest
 *   resourceType: "CFN_STACK" || "RESOURCE_TAG_VALUE", // required
 *   resource: "STRING_VALUE", // required
 * };
 * const command = new SyncResourceCommand(input);
 * const response = await client.send(command);
 * // { // SyncResourceResponse
 * //   applicationArn: "STRING_VALUE",
 * //   resourceArn: "STRING_VALUE",
 * //   actionTaken: "START_SYNC" || "NO_ACTION",
 * // };
 *
 * ```
 *
 * @param SyncResourceCommandInput - {@link SyncResourceCommandInput}
 * @returns {@link SyncResourceCommandOutput}
 * @see {@link SyncResourceCommandInput} for command's `input` shape.
 * @see {@link SyncResourceCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogAppRegistryClientResolvedConfig | config} for ServiceCatalogAppRegistryClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict when processing the request (for example, a resource with the given
 *       name already exists within the account).</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service is experiencing internal problems.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The maximum number
 *       of API requests
 *       has been exceeded.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalogAppRegistry service.</p>
 *
 *
 * @public
 */
export class SyncResourceCommand extends $Command
  .classBuilder<
    SyncResourceCommandInput,
    SyncResourceCommandOutput,
    ServiceCatalogAppRegistryClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogAppRegistryClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242AppRegistry", "SyncResource", {})
  .n("ServiceCatalogAppRegistryClient", "SyncResourceCommand")
  .f(void 0, void 0)
  .ser(se_SyncResourceCommand)
  .de(de_SyncResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SyncResourceRequest;
      output: SyncResourceResponse;
    };
    sdk: {
      input: SyncResourceCommandInput;
      output: SyncResourceCommandOutput;
    };
  };
}
