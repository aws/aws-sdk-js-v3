// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateDomainLayoutRequest,
  CreateDomainLayoutRequestFilterSensitiveLog,
  CreateDomainLayoutResponse,
  CreateDomainLayoutResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateDomainLayoutCommand, se_CreateDomainLayoutCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDomainLayoutCommand}.
 */
export interface CreateDomainLayoutCommandInput extends CreateDomainLayoutRequest {}
/**
 * @public
 *
 * The output of {@link CreateDomainLayoutCommand}.
 */
export interface CreateDomainLayoutCommandOutput extends CreateDomainLayoutResponse, __MetadataBearer {}

/**
 * <p>Creates the layout to view data for a specific domain. This API can only be invoked from
 *          the Amazon Connect admin website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateDomainLayoutCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateDomainLayoutCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateDomainLayoutRequest
 *   DomainName: "STRING_VALUE", // required
 *   LayoutDefinitionName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE", // required
 *   IsDefault: true || false,
 *   LayoutType: "PROFILE_EXPLORER", // required
 *   Layout: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDomainLayoutCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainLayoutResponse
 * //   LayoutDefinitionName: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   DisplayName: "STRING_VALUE", // required
 * //   IsDefault: true || false,
 * //   LayoutType: "PROFILE_EXPLORER", // required
 * //   Layout: "STRING_VALUE", // required
 * //   Version: "STRING_VALUE", // required
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateDomainLayoutCommandInput - {@link CreateDomainLayoutCommandInput}
 * @returns {@link CreateDomainLayoutCommandOutput}
 * @see {@link CreateDomainLayoutCommandInput} for command's `input` shape.
 * @see {@link CreateDomainLayoutCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class CreateDomainLayoutCommand extends $Command
  .classBuilder<
    CreateDomainLayoutCommandInput,
    CreateDomainLayoutCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "CreateDomainLayout", {})
  .n("CustomerProfilesClient", "CreateDomainLayoutCommand")
  .f(CreateDomainLayoutRequestFilterSensitiveLog, CreateDomainLayoutResponseFilterSensitiveLog)
  .ser(se_CreateDomainLayoutCommand)
  .de(de_CreateDomainLayoutCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainLayoutRequest;
      output: CreateDomainLayoutResponse;
    };
    sdk: {
      input: CreateDomainLayoutCommandInput;
      output: CreateDomainLayoutCommandOutput;
    };
  };
}
