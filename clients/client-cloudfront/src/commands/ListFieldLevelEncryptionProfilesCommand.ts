// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListFieldLevelEncryptionProfilesRequest,
  ListFieldLevelEncryptionProfilesResult,
} from "../models/models_1";
import { ListFieldLevelEncryptionProfiles$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFieldLevelEncryptionProfilesCommand}.
 */
export interface ListFieldLevelEncryptionProfilesCommandInput extends ListFieldLevelEncryptionProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldLevelEncryptionProfilesCommand}.
 */
export interface ListFieldLevelEncryptionProfilesCommandOutput
  extends ListFieldLevelEncryptionProfilesResult,
    __MetadataBearer {}

/**
 * <p>Request a list of field-level encryption profiles that have been created in CloudFront for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionProfilesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionProfilesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListFieldLevelEncryptionProfilesRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFieldLevelEncryptionProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldLevelEncryptionProfilesResult
 * //   FieldLevelEncryptionProfileList: { // FieldLevelEncryptionProfileList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // FieldLevelEncryptionProfileSummaryList
 * //       { // FieldLevelEncryptionProfileSummary
 * //         Id: "STRING_VALUE", // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         Name: "STRING_VALUE", // required
 * //         EncryptionEntities: { // EncryptionEntities
 * //           Quantity: Number("int"), // required
 * //           Items: [ // EncryptionEntityList
 * //             { // EncryptionEntity
 * //               PublicKeyId: "STRING_VALUE", // required
 * //               ProviderId: "STRING_VALUE", // required
 * //               FieldPatterns: { // FieldPatterns
 * //                 Quantity: Number("int"), // required
 * //                 Items: [ // FieldPatternList
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         Comment: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListFieldLevelEncryptionProfilesCommandInput - {@link ListFieldLevelEncryptionProfilesCommandInput}
 * @returns {@link ListFieldLevelEncryptionProfilesCommandOutput}
 * @see {@link ListFieldLevelEncryptionProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionProfilesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class ListFieldLevelEncryptionProfilesCommand extends $Command
  .classBuilder<
    ListFieldLevelEncryptionProfilesCommandInput,
    ListFieldLevelEncryptionProfilesCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "ListFieldLevelEncryptionProfiles", {})
  .n("CloudFrontClient", "ListFieldLevelEncryptionProfilesCommand")
  .sc(ListFieldLevelEncryptionProfiles$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFieldLevelEncryptionProfilesRequest;
      output: ListFieldLevelEncryptionProfilesResult;
    };
    sdk: {
      input: ListFieldLevelEncryptionProfilesCommandInput;
      output: ListFieldLevelEncryptionProfilesCommandOutput;
    };
  };
}
