// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFieldLevelEncryptionConfigsRequest, ListFieldLevelEncryptionConfigsResult } from "../models/models_1";
import { ListFieldLevelEncryptionConfigs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListFieldLevelEncryptionConfigsCommandOutput extends ListFieldLevelEncryptionConfigsResult, __MetadataBearer {}

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
export class ListFieldLevelEncryptionConfigsCommand extends command<ListFieldLevelEncryptionConfigsCommandInput, ListFieldLevelEncryptionConfigsCommandOutput>(
  _ep0,
  _mw0,
  "ListFieldLevelEncryptionConfigs",
  ListFieldLevelEncryptionConfigs$
) {
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
