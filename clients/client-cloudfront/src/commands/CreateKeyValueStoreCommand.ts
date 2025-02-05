// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateKeyValueStoreRequest, CreateKeyValueStoreResult } from "../models/models_0";
import { de_CreateKeyValueStoreCommand, se_CreateKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKeyValueStoreCommand}.
 */
export interface CreateKeyValueStoreCommandInput extends CreateKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link CreateKeyValueStoreCommand}.
 */
export interface CreateKeyValueStoreCommandOutput extends CreateKeyValueStoreResult, __MetadataBearer {}

/**
 * <p>Specifies the key value store resource to add to your account. In your account, the key value store names must be unique. You can also import key value store data in JSON format from an S3 bucket by providing a valid <code>ImportSource</code> that you own.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontClient(config);
 * const input = { // CreateKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 *   Comment: "STRING_VALUE",
 *   ImportSource: { // ImportSource
 *     SourceType: "S3", // required
 *     SourceARN: "STRING_VALUE", // required
 *   },
 * };
 * const command = new CreateKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // CreateKeyValueStoreResult
 * //   KeyValueStore: { // KeyValueStore
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * //   Location: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateKeyValueStoreCommandInput - {@link CreateKeyValueStoreCommandInput}
 * @returns {@link CreateKeyValueStoreCommandOutput}
 * @see {@link CreateKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link CreateKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique
 * 			entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link EntitySizeLimitExceeded} (client fault)
 *  <p>The entity size limit was exceeded.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 * @example To create a KeyValueStore
 * ```javascript
 * // Use the following command to create a KeyValueStore.
 * const input = {
 *   "Comment": "my-key-valuestore-comment",
 *   "ImportSource": {
 *     "SourceARN": "arn:aws:s3:::amzn-s3-demo-bucket/validJSON.json",
 *     "SourceType": "S3"
 *   },
 *   "Name": "my-keyvaluestore-name"
 * };
 * const command = new CreateKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ETag": "ETVPDKIKX0DER",
 *   "KeyValueStore": {
 *     "ARN": "arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889",
 *     "Comment": "my-key-valuestore-comment",
 *     "Id": "54947df8-0e9e-4471-a2f9-9af509fb5889",
 *     "LastModifiedTime": "2023-11-07T18:15:52.042Z",
 *     "Name": "my-keyvaluestore-name",
 *     "Status": "PROVISIONING"
 *   },
 *   "Location": "https://cloudfront.amazonaws.com/2020-05-31/key-value-store/arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889"
 * }
 * *\/
 * // example id: example-1
 * ```
 *
 */
export class CreateKeyValueStoreCommand extends $Command
  .classBuilder<
    CreateKeyValueStoreCommandInput,
    CreateKeyValueStoreCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateKeyValueStore", {})
  .n("CloudFrontClient", "CreateKeyValueStoreCommand")
  .f(void 0, void 0)
  .ser(se_CreateKeyValueStoreCommand)
  .de(de_CreateKeyValueStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKeyValueStoreRequest;
      output: CreateKeyValueStoreResult;
    };
    sdk: {
      input: CreateKeyValueStoreCommandInput;
      output: CreateKeyValueStoreCommandOutput;
    };
  };
}
