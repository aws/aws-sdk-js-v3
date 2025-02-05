// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CloudFrontKeyValueStoreClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudFrontKeyValueStoreClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeKeyValueStoreRequest, DescribeKeyValueStoreResponse } from "../models/models_0";
import { de_DescribeKeyValueStoreCommand, se_DescribeKeyValueStoreCommand } from "../protocols/Aws_restJson1";

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
export interface DescribeKeyValueStoreCommandOutput extends DescribeKeyValueStoreResponse, __MetadataBearer {}

/**
 * <p>Returns metadata information about Key Value Store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } from "@aws-sdk/client-cloudfront-keyvaluestore"; // ES Modules import
 * // const { CloudFrontKeyValueStoreClient, DescribeKeyValueStoreCommand } = require("@aws-sdk/client-cloudfront-keyvaluestore"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CloudFrontKeyValueStoreClient(config);
 * const input = { // DescribeKeyValueStoreRequest
 *   KvsARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeKeyValueStoreCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyValueStoreResponse
 * //   ItemCount: Number("int"), // required
 * //   TotalSizeInBytes: Number("long"), // required
 * //   KvsARN: "STRING_VALUE", // required
 * //   Created: new Date("TIMESTAMP"), // required
 * //   ETag: "STRING_VALUE", // required
 * //   LastModified: new Date("TIMESTAMP"),
 * //   Status: "STRING_VALUE",
 * //   FailureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeKeyValueStoreCommandInput - {@link DescribeKeyValueStoreCommandInput}
 * @returns {@link DescribeKeyValueStoreCommandOutput}
 * @see {@link DescribeKeyValueStoreCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyValueStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontKeyValueStoreClientResolvedConfig | config} for CloudFrontKeyValueStoreClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Resource is not in expected state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource was not found.</p>
 *
 * @throws {@link CloudFrontKeyValueStoreServiceException}
 * <p>Base exception class for all service exceptions from CloudFrontKeyValueStore service.</p>
 *
 * @public
 */
export class DescribeKeyValueStoreCommand extends $Command
  .classBuilder<
    DescribeKeyValueStoreCommandInput,
    DescribeKeyValueStoreCommandOutput,
    CloudFrontKeyValueStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    KvsARN: { type: "contextParams", name: "KvsARN" },
  })
  .m(function (this: any, Command: any, cs: any, config: CloudFrontKeyValueStoreClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFrontKeyValueStore", "DescribeKeyValueStore", {})
  .n("CloudFrontKeyValueStoreClient", "DescribeKeyValueStoreCommand")
  .f(void 0, void 0)
  .ser(se_DescribeKeyValueStoreCommand)
  .de(de_DescribeKeyValueStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyValueStoreRequest;
      output: DescribeKeyValueStoreResponse;
    };
    sdk: {
      input: DescribeKeyValueStoreCommandInput;
      output: DescribeKeyValueStoreCommandOutput;
    };
  };
}
