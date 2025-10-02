// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult } from "../models/models_1";
import {
  de_ListFieldLevelEncryptionConfigsCommand,
  se_ListFieldLevelEncryptionConfigsCommand,
} from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFieldLevelEncryptionConfigsCommand}.
 */
export interface ListFieldLevelEncryptionConfigsCommandInput extends ListFieldLevelEncryptionConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFieldLevelEncryptionConfigsCommand}.
 */
export interface ListFieldLevelEncryptionConfigsCommandOutput
  extends ListFieldLevelEncryptionConfigsResult,
    __MetadataBearer {}

/**
 * <p>List all field-level encryption configurations that have been created in CloudFront for this account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListFieldLevelEncryptionConfigsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // ListFieldLevelEncryptionConfigsRequest
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListFieldLevelEncryptionConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFieldLevelEncryptionConfigsResult
 * //   FieldLevelEncryptionList: { // FieldLevelEncryptionList
 * //     NextMarker: "STRING_VALUE",
 * //     MaxItems: Number("int"), // required
 * //     Quantity: Number("int"), // required
 * //     Items: [ // FieldLevelEncryptionSummaryList
 * //       { // FieldLevelEncryptionSummary
 * //         Id: "STRING_VALUE", // required
 * //         LastModifiedTime: new Date("TIMESTAMP"), // required
 * //         Comment: "STRING_VALUE",
 * //         QueryArgProfileConfig: { // QueryArgProfileConfig
 * //           ForwardWhenQueryArgProfileIsUnknown: true || false, // required
 * //           QueryArgProfiles: { // QueryArgProfiles
 * //             Quantity: Number("int"), // required
 * //             Items: [ // QueryArgProfileList
 * //               { // QueryArgProfile
 * //                 QueryArg: "STRING_VALUE", // required
 * //                 ProfileId: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //         ContentTypeProfileConfig: { // ContentTypeProfileConfig
 * //           ForwardWhenContentTypeIsUnknown: true || false, // required
 * //           ContentTypeProfiles: { // ContentTypeProfiles
 * //             Quantity: Number("int"), // required
 * //             Items: [ // ContentTypeProfileList
 * //               { // ContentTypeProfile
 * //                 Format: "URLEncoded", // required
 * //                 ProfileId: "STRING_VALUE",
 * //                 ContentType: "STRING_VALUE", // required
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ListFieldLevelEncryptionConfigsCommandInput - {@link ListFieldLevelEncryptionConfigsCommandInput}
 * @returns {@link ListFieldLevelEncryptionConfigsCommandOutput}
 * @see {@link ListFieldLevelEncryptionConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFieldLevelEncryptionConfigsCommandOutput} for command's `response` shape.
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
export class ListFieldLevelEncryptionConfigsCommand extends $Command
  .classBuilder<
    ListFieldLevelEncryptionConfigsCommandInput,
    ListFieldLevelEncryptionConfigsCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "ListFieldLevelEncryptionConfigs", {})
  .n("CloudFrontClient", "ListFieldLevelEncryptionConfigsCommand")
  .f(void 0, void 0)
  .ser(se_ListFieldLevelEncryptionConfigsCommand)
  .de(de_ListFieldLevelEncryptionConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFieldLevelEncryptionConfigsRequest;
      output: ListFieldLevelEncryptionConfigsResult;
    };
    sdk: {
      input: ListFieldLevelEncryptionConfigsCommandInput;
      output: ListFieldLevelEncryptionConfigsCommandOutput;
    };
  };
}
