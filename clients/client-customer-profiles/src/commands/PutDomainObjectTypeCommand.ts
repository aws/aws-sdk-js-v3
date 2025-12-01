// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutDomainObjectTypeRequest, PutDomainObjectTypeResponse } from "../models/models_0";
import { PutDomainObjectType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDomainObjectTypeCommand}.
 */
export interface PutDomainObjectTypeCommandInput extends PutDomainObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutDomainObjectTypeCommand}.
 */
export interface PutDomainObjectTypeCommandOutput extends PutDomainObjectTypeResponse, __MetadataBearer {}

/**
 * <p>Create/Update a DomainObjectType in a Customer Profiles domain. To create a new DomainObjectType, Data Store needs to be enabled on the Domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, PutDomainObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, PutDomainObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // PutDomainObjectTypeRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   EncryptionKey: "STRING_VALUE",
 *   Fields: { // DomainObjectTypeFields // required
 *     "<keys>": { // DomainObjectTypeField
 *       Source: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *       ContentType: "STRING" || "NUMBER",
 *       FeatureType: "TEXTUAL" || "CATEGORICAL",
 *     },
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutDomainObjectTypeCommand(input);
 * const response = await client.send(command);
 * // { // PutDomainObjectTypeResponse
 * //   ObjectTypeName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EncryptionKey: "STRING_VALUE",
 * //   Fields: { // DomainObjectTypeFields
 * //     "<keys>": { // DomainObjectTypeField
 * //       Source: "STRING_VALUE", // required
 * //       Target: "STRING_VALUE", // required
 * //       ContentType: "STRING" || "NUMBER",
 * //       FeatureType: "TEXTUAL" || "CATEGORICAL",
 * //     },
 * //   },
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PutDomainObjectTypeCommandInput - {@link PutDomainObjectTypeCommandInput}
 * @returns {@link PutDomainObjectTypeCommandOutput}
 * @see {@link PutDomainObjectTypeCommandInput} for command's `input` shape.
 * @see {@link PutDomainObjectTypeCommandOutput} for command's `response` shape.
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
export class PutDomainObjectTypeCommand extends $Command
  .classBuilder<
    PutDomainObjectTypeCommandInput,
    PutDomainObjectTypeCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "PutDomainObjectType", {})
  .n("CustomerProfilesClient", "PutDomainObjectTypeCommand")
  .sc(PutDomainObjectType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDomainObjectTypeRequest;
      output: PutDomainObjectTypeResponse;
    };
    sdk: {
      input: PutDomainObjectTypeCommandInput;
      output: PutDomainObjectTypeCommandOutput;
    };
  };
}
