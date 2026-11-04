// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddTagsToStreamInput } from "../models/models_0";
import { AddTagsToStream$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddTagsToStreamCommand}.
 */
export interface AddTagsToStreamCommandInput extends AddTagsToStreamInput {}
/**
 * @public
 *
 * The output of {@link AddTagsToStreamCommand}.
 */
export interface AddTagsToStreamCommandOutput extends __MetadataBearer {}

/**
 * Adds or updates tags for the specified Kinesis data stream. You can assign up to 50 tags to a data stream.
 *
 * > **Note:** When invoking this API, you must use either the `StreamARN` or the `StreamName` parameter, or both. It is recommended that you use the `StreamARN` input parameter when you invoke this API.
 *
 * If tags have already been assigned to the stream, `AddTagsToStream` overwrites any existing tags that correspond to the specified tag keys.
 *
 * AddTagsToStream has a limit of five transactions per second per account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, AddTagsToStreamCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, AddTagsToStreamCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // AddTagsToStreamInput
 *   StreamName: "STRING_VALUE",
 *   Tags: { // TagMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 *   StreamARN: "STRING_VALUE",
 *   StreamId: "STRING_VALUE",
 * };
 * const command = new AddTagsToStreamCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddTagsToStreamCommandInput - {@link AddTagsToStreamCommandInput}
 * @returns {@link AddTagsToStreamCommandOutput}
 * @see {@link AddTagsToStreamCommandInput} for command's `input` shape.
 * @see {@link AddTagsToStreamCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Specifies that you do not have the permissions required to perform this operation.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *
 * A specified parameter exceeds its restrictions, is not supported, or can't be used. For more information, see the returned message.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The requested resource exceeds the maximum number allowed, or the number of concurrent stream requests exceeds the maximum number allowed.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is not available for this operation. For successful operation, the resource must be in the `ACTIVE` state.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource could not be found. The stream might not be specified correctly.
 *
 * @throws {@link KinesisServiceException}
 *
 * Base exception class for all service exceptions from Kinesis service.
 *
 * @public
 */
export class AddTagsToStreamCommand extends command<AddTagsToStreamCommandInput, AddTagsToStreamCommandOutput>(
  _ep0,
  _mw0,
  "AddTagsToStream",
  AddTagsToStream$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddTagsToStreamInput;
      output: {};
    };
    sdk: {
      input: AddTagsToStreamCommandInput;
      output: AddTagsToStreamCommandOutput;
    };
  };
}
