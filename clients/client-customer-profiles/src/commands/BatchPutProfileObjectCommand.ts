// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchPutProfileObjectRequest, BatchPutProfileObjectResponse } from "../models/models_0";
import { BatchPutProfileObject$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutProfileObjectCommand}.
 */
export interface BatchPutProfileObjectCommandInput extends BatchPutProfileObjectRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutProfileObjectCommand}.
 */
export interface BatchPutProfileObjectCommandOutput extends BatchPutProfileObjectResponse, __MetadataBearer {}

/**
 * <p>Adds multiple profile objects to a domain of a given ObjectType in a single API call.</p>
 *          <p>When adding a specific profile object, like a Contact Record, an inferred profile can
 *          get created if it is not mapped to an existing profile. The resulting profile will only
 *          have a phone number populated in the standard ProfileObject. Any additional Contact Records
 *          with the same phone number will be mapped to the same inferred profile.</p>
 *          <p>When a ProfileObject is created and if a ProfileObjectType already exists for the
 *          ProfileObject, it will provide data to a standard profile depending on the
 *          ProfileObjectType definition.</p>
 *          <p>BatchPutProfileObject needs an ObjectType, which can be created using
 *          PutProfileObjectType.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, BatchPutProfileObjectCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, BatchPutProfileObjectCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // BatchPutProfileObjectRequest
 *   DomainName: "STRING_VALUE", // required
 *   ObjectTypeName: "STRING_VALUE", // required
 *   Items: [ // BatchPutProfileObjectRequestItemList // required
 *     { // BatchPutProfileObjectRequestItem
 *       Id: "STRING_VALUE", // required
 *       Object: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchPutProfileObjectCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutProfileObjectResponse
 * //   Successful: [ // BatchPutProfileObjectResponseList
 * //     { // BatchPutProfileObjectResponseItem
 * //       Id: "STRING_VALUE", // required
 * //       ProfileObjectUniqueKey: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // BatchPutProfileObjectErrorList
 * //     { // BatchPutProfileObjectErrorItem
 * //       Id: "STRING_VALUE", // required
 * //       Code: Number("int"), // required
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutProfileObjectCommandInput - {@link BatchPutProfileObjectCommandInput}
 * @returns {@link BatchPutProfileObjectCommandOutput}
 * @see {@link BatchPutProfileObjectCommandInput} for command's `input` shape.
 * @see {@link BatchPutProfileObjectCommandOutput} for command's `response` shape.
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
export class BatchPutProfileObjectCommand extends $Command
  .classBuilder<
    BatchPutProfileObjectCommandInput,
    BatchPutProfileObjectCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "BatchPutProfileObject", {})
  .n("CustomerProfilesClient", "BatchPutProfileObjectCommand")
  .sc(BatchPutProfileObject$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutProfileObjectRequest;
      output: BatchPutProfileObjectResponse;
    };
    sdk: {
      input: BatchPutProfileObjectCommandInput;
      output: BatchPutProfileObjectCommandOutput;
    };
  };
}
