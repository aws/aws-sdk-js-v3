// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainLayoutRequest, GetDomainLayoutResponse } from "../models/models_0";
import { GetDomainLayout$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDomainLayoutCommand}.
 */
export interface GetDomainLayoutCommandInput extends GetDomainLayoutRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainLayoutCommand}.
 */
export interface GetDomainLayoutCommandOutput extends GetDomainLayoutResponse, __MetadataBearer {}

/**
 * Gets the layout to view data for a specific domain. This API can only be invoked from the Amazon Connect admin website.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetDomainLayoutCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetDomainLayoutCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetDomainLayoutRequest
 *   DomainName: "STRING_VALUE", // required
 *   LayoutDefinitionName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainLayoutCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainLayoutResponse
 * //   LayoutDefinitionName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE", // required
 * //   IsDefault: true || false,
 * //   LayoutType: "PROFILE_EXPLORER", // required
 * //   Layout: "STRING_VALUE", // required
 * //   Version: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainLayoutCommandInput - {@link GetDomainLayoutCommandInput}
 * @returns {@link GetDomainLayoutCommandOutput}
 * @see {@link GetDomainLayoutCommandInput} for command's `input` shape.
 * @see {@link GetDomainLayoutCommandOutput} for command's `response` shape.
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
export class GetDomainLayoutCommand extends command<GetDomainLayoutCommandInput, GetDomainLayoutCommandOutput>(
  _ep0,
  _mw0,
  "GetDomainLayout",
  GetDomainLayout$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainLayoutRequest;
      output: GetDomainLayoutResponse;
    };
    sdk: {
      input: GetDomainLayoutCommandInput;
      output: GetDomainLayoutCommandOutput;
    };
  };
}
