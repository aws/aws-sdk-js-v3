// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPersonalAccessTokenMetadataRequest, GetPersonalAccessTokenMetadataResponse } from "../models/models_0";
import { GetPersonalAccessTokenMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPersonalAccessTokenMetadataCommand}.
 */
export interface GetPersonalAccessTokenMetadataCommandInput extends GetPersonalAccessTokenMetadataRequest {}
/**
 * @public
 *
 * The output of {@link GetPersonalAccessTokenMetadataCommand}.
 */
export interface GetPersonalAccessTokenMetadataCommandOutput extends GetPersonalAccessTokenMetadataResponse, __MetadataBearer {}

/**
 * Requests details of a specific Personal Access Token within the WorkMail organization.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetPersonalAccessTokenMetadataCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetPersonalAccessTokenMetadataCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetPersonalAccessTokenMetadataRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   PersonalAccessTokenId: "STRING_VALUE", // required
 * };
 * const command = new GetPersonalAccessTokenMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetPersonalAccessTokenMetadataResponse
 * //   PersonalAccessTokenId: "STRING_VALUE",
 * //   UserId: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   DateCreated: new Date("TIMESTAMP"),
 * //   DateLastUsed: new Date("TIMESTAMP"),
 * //   ExpiresTime: new Date("TIMESTAMP"),
 * //   Scopes: [ // PersonalAccessTokenScopeList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetPersonalAccessTokenMetadataCommandInput - {@link GetPersonalAccessTokenMetadataCommandInput}
 * @returns {@link GetPersonalAccessTokenMetadataCommandOutput}
 * @see {@link GetPersonalAccessTokenMetadataCommandInput} for command's `input` shape.
 * @see {@link GetPersonalAccessTokenMetadataCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource cannot be found.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class GetPersonalAccessTokenMetadataCommand extends command<GetPersonalAccessTokenMetadataCommandInput, GetPersonalAccessTokenMetadataCommandOutput>(
  _ep0,
  _mw0,
  "GetPersonalAccessTokenMetadata",
  GetPersonalAccessTokenMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPersonalAccessTokenMetadataRequest;
      output: GetPersonalAccessTokenMetadataResponse;
    };
    sdk: {
      input: GetPersonalAccessTokenMetadataCommandInput;
      output: GetPersonalAccessTokenMetadataCommandOutput;
    };
  };
}
