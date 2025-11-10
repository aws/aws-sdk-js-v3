// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetPersonalAccessTokenMetadataRequest, GetPersonalAccessTokenMetadataResponse } from "../models/models_0";
import { GetPersonalAccessTokenMetadata } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetPersonalAccessTokenMetadataCommandOutput
  extends GetPersonalAccessTokenMetadataResponse,
    __MetadataBearer {}

/**
 * <p>
 *          Requests details of a specific Personal Access Token within the WorkMail organization.
 *       </p>
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
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource cannot be found.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class GetPersonalAccessTokenMetadataCommand extends $Command
  .classBuilder<
    GetPersonalAccessTokenMetadataCommandInput,
    GetPersonalAccessTokenMetadataCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "GetPersonalAccessTokenMetadata", {})
  .n("WorkMailClient", "GetPersonalAccessTokenMetadataCommand")
  .sc(GetPersonalAccessTokenMetadata)
  .build() {
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
