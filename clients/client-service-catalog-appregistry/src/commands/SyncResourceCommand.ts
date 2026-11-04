// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SyncResourceRequest, SyncResourceResponse } from "../models/models_0";
import { SyncResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Syncs the resource with current AppRegistry records.
 *
 * Specifically, the resource’s AppRegistry system tags sync with its associated application. We remove the resource's AppRegistry system tags if it does not associate with the application. The caller must have permissions to read and update the resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogAppRegistryClient, SyncResourceCommand } from "@aws-sdk/client-service-catalog-appregistry"; // ES Modules import
 * // const { ServiceCatalogAppRegistryClient, SyncResourceCommand } = require("@aws-sdk/client-service-catalog-appregistry"); // CommonJS import
 * // import type { ServiceCatalogAppRegistryClientConfig } from "@aws-sdk/client-service-catalog-appregistry";
 * const config = {}; // type is ServiceCatalogAppRegistryClientConfig
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
 *
 * There was a conflict when processing the request (for example, a resource with the given name already exists within the account).
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service is experiencing internal problems.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The maximum number of API requests has been exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link ServiceCatalogAppRegistryServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalogAppRegistry service.
 *
 * @public
 */
export class SyncResourceCommand extends command<SyncResourceCommandInput, SyncResourceCommandOutput>(
  _ep0,
  _mw0,
  "SyncResource",
  SyncResource$
) {
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
