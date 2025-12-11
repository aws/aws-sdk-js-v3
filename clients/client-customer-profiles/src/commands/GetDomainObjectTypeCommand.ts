// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainObjectTypeRequest, GetDomainObjectTypeResponse } from "../models/models_0";
import { GetDomainObjectType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainObjectTypeCommand}.
 */
export interface GetDomainObjectTypeCommandInput extends GetDomainObjectTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainObjectTypeCommand}.
 */
export interface GetDomainObjectTypeCommandOutput extends GetDomainObjectTypeResponse, __MetadataBearer {}

/**
 * <p>Return a DomainObjectType for the input Domain and ObjectType names. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetDomainObjectTypeCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetDomainObjectTypeCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetDomainObjectTypeRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 * };
 * const command = new GetDomainObjectTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainObjectTypeResponse
 * //   ObjectTypeName: "STRING_VALUE", // required
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
 * @param GetDomainObjectTypeCommandInput - {@link GetDomainObjectTypeCommandInput}
 * @returns {@link GetDomainObjectTypeCommandOutput}
 * @see {@link GetDomainObjectTypeCommandInput} for command's `input` shape.
 * @see {@link GetDomainObjectTypeCommandOutput} for command's `response` shape.
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
export class GetDomainObjectTypeCommand extends $Command
  .classBuilder<
    GetDomainObjectTypeCommandInput,
    GetDomainObjectTypeCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetDomainObjectType", {})
  .n("CustomerProfilesClient", "GetDomainObjectTypeCommand")
  .sc(GetDomainObjectType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainObjectTypeRequest;
      output: GetDomainObjectTypeResponse;
    };
    sdk: {
      input: GetDomainObjectTypeCommandInput;
      output: GetDomainObjectTypeCommandOutput;
    };
  };
}
