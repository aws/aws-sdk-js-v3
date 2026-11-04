// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainObjectTypeRequest, GetDomainObjectTypeResponse } from "../models/models_0";
import { GetDomainObjectType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Return a DomainObjectType for the input Domain and ObjectType names.
 *
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
export class GetDomainObjectTypeCommand extends command<GetDomainObjectTypeCommandInput, GetDomainObjectTypeCommandOutput>(
  _ep0,
  _mw0,
  "GetDomainObjectType",
  GetDomainObjectType$
) {
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
