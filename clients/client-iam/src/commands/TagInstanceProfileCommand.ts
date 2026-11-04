// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { TagInstanceProfileRequest } from "../models/models_0";
import { TagInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link TagInstanceProfileCommand}.
 */
export interface TagInstanceProfileCommandInput extends TagInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link TagInstanceProfileCommand}.
 */
export interface TagInstanceProfileCommandOutput extends __MetadataBearer {}

/**
 * Adds one or more tags to an IAM instance profile. If a tag with the same key name already exists, then that tag is overwritten with the new value.
 *
 * Each tag consists of a key name and an associated value. By assigning tags to your resources, you can do the following:
 *
 * - **Administrative grouping and discovery** - Attach tags to resources to aid in organization and search. For example, you could search for all resources with the key name *Project* and the value *MyImportantProject*. Or search for all resources with the key name *Cost Center* and the value *41200*.
 * - **Access control** - Include tags in IAM user-based and resource-based policies. You can use tags to restrict access to only an IAM instance profile that has a specified tag attached. For examples of policies that show how to use tags to control access, see [Control access using IAM tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html) in the *IAM User Guide*.
 *
 * > **Note:**
 * >
 * > - If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
 * > - Amazon Web Services always interprets the tag `Value` as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, TagInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, TagInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // TagInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 *   Tags: [ // tagListType // required
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new TagInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TagInstanceProfileCommandInput - {@link TagInstanceProfileCommandInput}
 * @returns {@link TagInstanceProfileCommandOutput}
 * @see {@link TagInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link TagInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class TagInstanceProfileCommand extends command<TagInstanceProfileCommandInput, TagInstanceProfileCommandOutput>(
  _ep0,
  _mw0,
  "TagInstanceProfile",
  TagInstanceProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: TagInstanceProfileRequest;
      output: {};
    };
    sdk: {
      input: TagInstanceProfileCommandInput;
      output: TagInstanceProfileCommandOutput;
    };
  };
}
