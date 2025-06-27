// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeKeyValueStoreRequest, DescribeKeyValueStoreResult } from "../models/models_1";
import { de_DescribeKeyValueStoreCommand, se_DescribeKeyValueStoreCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyValueStoreCommand}.
 */
export interface DescribeKeyValueStoreCommandInput extends DescribeKeyValueStoreRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyValueStoreCommand}.
 */
export interface DescribeKeyValueStoreCommandOutput extends DescribeKeyValueStoreResult, __MetadataBearer {}

/**
 * <p>Specifies the key value store and its configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DescribeKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // DescribeKeyValueStoreRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyValueStoreResult
 * //   KeyValueStore: { // KeyValueStore
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Comment: "STRING_VALUE", // required
 * //     ARN: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeKeyValueStoreCommandInput - {@link DescribeKeyValueStoreCommandInput}
 * @returns {@link DescribeKeyValueStoreCommandOutput}
 * @see {@link DescribeKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @example To describe a KeyValueStore
 * ```javascript
 * // Use the following command to describe a KeyValueStore.
 * const input = {
 *   Name: "my-keyvaluestore-name"
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ETag: "ETVPDKIKX0DER",
 *   KeyValueStore: {
 *     ARN: "arn:aws:cloudfront::123456789012:key-value-store/54947df8-0e9e-4471-a2f9-9af509fb5889",
 *     Comment: "my-key-valuestore-comment",
 *     Id: "54947df8-0e9e-4471-a2f9-9af509fb5889",
 *     LastModifiedTime: "2023-11-07T18:20:33.056Z",
 *     Name: "my-keyvaluestore-name",
 *     Status: "READY"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeKeyValueStoreCommand extends $Command
  .classBuilder<
    DescribeKeyValueStoreCommandInput,
    DescribeKeyValueStoreCommandOutput,
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
  .s("Cloudfront2020_05_31", "DescribeKeyValueStore", {})
  .n("CloudFrontClient", "DescribeKeyValueStoreCommand")
  .f(void 0, void 0)
  .ser(se_DescribeKeyValueStoreCommand)
  .de(de_DescribeKeyValueStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyValueStoreRequest;
      output: DescribeKeyValueStoreResult;
    };
    sdk: {
      input: DescribeKeyValueStoreCommandInput;
      output: DescribeKeyValueStoreCommandOutput;
    };
  };
}
