// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBucketAccessKeysRequest, GetBucketAccessKeysResult } from "../models/models_0";
import { GetBucketAccessKeys$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the existing access key IDs for the specified Amazon Lightsail bucket.
 *
 * > **Important:** This action does not return the secret access key value of an access key. You can get a secret access key only when you create it from the response of the [CreateBucketAccessKey](https://docs.aws.amazon.com/lightsail/2016-11-28/api-reference/API_CreateBucketAccessKey.html) action. If you lose the secret access key, you must create a new access key.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetBucketAccessKeysCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetBucketAccessKeysCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * // import type { LightsailClientConfig } from "@aws-sdk/client-lightsail";
 * const config = {}; // type is LightsailClientConfig
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
 *
 * Lightsail throws this exception when the user cannot be authenticated or uses invalid credentials to access a resource.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Lightsail throws this exception when user input does not conform to the validation rules of an input field.
 *
 * > **Note:** Domain and distribution APIs are only available in the N. Virginia (`us-east-1`) Amazon Web Services Region. Please set your Amazon Web Services Region configuration to `us-east-1` to create, view, or edit these resources.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Lightsail throws this exception when it cannot find a resource.
 *
 * @throws {@link RegionSetupInProgressException} (client fault)
 *
 * Lightsail throws this exception when an operation is performed on resources in an opt-in Region that is currently being set up.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * A general service exception.
 *
 * @throws {@link UnauthenticatedException} (client fault)
 *
 * Lightsail throws this exception when the user has not been authenticated.
 *
 * @throws {@link LightsailServiceException}
 *
 * Base exception class for all service exceptions from Lightsail service.
 *
 * @public
 */
export class GetBucketAccessKeysCommand extends command<GetBucketAccessKeysCommandInput, GetBucketAccessKeysCommandOutput>(
  _ep0,
  _mw0,
  "GetBucketAccessKeys",
  GetBucketAccessKeys$
) {
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
