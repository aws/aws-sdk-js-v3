// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainLayoutRequest, UpdateDomainLayoutResponse } from "../models/models_1";
import { UpdateDomainLayout$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainLayoutCommand}.
 */
export interface UpdateDomainLayoutCommandInput extends UpdateDomainLayoutRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainLayoutCommand}.
 */
export interface UpdateDomainLayoutCommandOutput extends UpdateDomainLayoutResponse, __MetadataBearer {}

/**
 * Updates the layout used to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, UpdateDomainLayoutCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, UpdateDomainLayoutCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // UpdateDomainLayoutRequest
 *   DomainName: "STRING_VALUE", // required
 *   LayoutDefinitionName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DisplayName: "STRING_VALUE",
 *   IsDefault: true || false,
 *   LayoutType: "PROFILE_EXPLORER",
 *   Layout: "STRING_VALUE",
 * };
 * const command = new UpdateDomainLayoutCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainLayoutResponse
 * //   LayoutDefinitionName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   IsDefault: true || false,
 * //   LayoutType: "PROFILE_EXPLORER",
 * //   Layout: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainLayoutCommandInput - {@link UpdateDomainLayoutCommandInput}
 * @returns {@link UpdateDomainLayoutCommandOutput}
 * @see {@link UpdateDomainLayoutCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainLayoutCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class UpdateDomainLayoutCommand extends command<UpdateDomainLayoutCommandInput, UpdateDomainLayoutCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomainLayout",
  UpdateDomainLayout$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainLayoutRequest;
      output: UpdateDomainLayoutResponse;
    };
    sdk: {
      input: UpdateDomainLayoutCommandInput;
      output: UpdateDomainLayoutCommandOutput;
    };
  };
}
