// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  GetBucketAccessKeysRequest,
  GetBucketAccessKeysResult,
  GetBucketAccessKeysResultFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBucketAccessKeysCommand, se_GetBucketAccessKeysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBucketAccessKeysCommand}.
 */
export interface GetBucketAccessKeysCommandInput extends GetBucketAccessKeysRequest {}
/**
 * @public
 *
 * The output of {@link GetBucketAccessKeysCommand}.
 */
export interface GetBucketAccessKeysCommandOutput extends GetBucketAccessKeysResult, __MetadataBearer {}

/**
 * <p>Returns the existing access key IDs for the specified Amazon Lightsail bucket.</p>
 *          <important>
 *             <p>This action does not return the secret access key value of an access key. You can get a
 *         secret access key only when you create it from the response of the <a href="https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html">CreateBucketAccessKey</a> action. If you lose the secret access key, you must create
 *         a new access key.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketAccessKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketAccessKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LightsailClient(config);
 * const input = { // GetBucketAccessKeysRequest
 *   bucketName: "STRING_VALUE", // required
 * };
 * const command = new GetBucketAccessKeysCommand(input);
 * const response = await client.send(command);
 * // { // GetBucketAccessKeysResult
 * //   accessKeys: [ // AccessKeyList
 * //     { // AccessKey
 * //       accessKeyId: "STRING_VALUE",
 * //       secretAccessKey: "STRING_VALUE",
 * //       status: "Active" || "Inactive",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       lastUsed: { // AccessKeyLastUsed
 * //         lastUsedDate: new Date("TIMESTAMP"),
 * //         region: "STRING_VALUE",
 * //         serviceName: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBucketAccessKeysCommandInput - {@link GetBucketAccessKeysCommandInput}
 * @returns {@link GetBucketAccessKeysCommandOutput}
 * @see {@link GetBucketAccessKeysCommandInput} for command's `input` shape.
 * @see {@link GetBucketAccessKeysCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for LightsailClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Lightsail throws this exception when the user cannot be authenticated or uses invalid
 *       credentials to access a resource.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Lightsail throws this exception when user input does not conform to the validation rules
 *       of an input field.</p>
 *          <note>
 *             <p>Domain and distribution APIs are only available in the N. Virginia
 *           (<code>us-east-1</code>) Amazon Web Services Region. Please set your Amazon Web Services
 *         Region configuration to <code>us-east-1</code> to create, view, or edit these
 *         resources.</p>
 *          </note>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Lightsail throws this exception when it cannot find a resource.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>A general service exception.</p>
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *  <p>Lightsail throws this exception when the user has not been authenticated.</p>
 *
 * @throws {@link LightsailServiceException}
 * <p>Base exception class for all service exceptions from Lightsail service.</p>
 *
 * @public
 */
export class GetBucketAccessKeysCommand extends $Command
  .classBuilder<
    GetBucketAccessKeysCommandInput,
    GetBucketAccessKeysCommandOutput,
    LightsailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LightsailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Lightsail_20161128", "GetBucketAccessKeys", {})
  .n("LightsailClient", "GetBucketAccessKeysCommand")
  .f(void 0, GetBucketAccessKeysResultFilterSensitiveLog)
  .ser(se_GetBucketAccessKeysCommand)
  .de(de_GetBucketAccessKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBucketAccessKeysRequest;
      output: GetBucketAccessKeysResult;
    };
    sdk: {
      input: GetBucketAccessKeysCommandInput;
      output: GetBucketAccessKeysCommandOutput;
    };
  };
}
