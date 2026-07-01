// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStorageProfileForQueueRequest, GetStorageProfileForQueueResponse } from "../models/models_0";
import { GetStorageProfileForQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStorageProfileForQueueCommand}.
 */
export interface GetStorageProfileForQueueCommandInput extends GetStorageProfileForQueueRequest {}
/**
 * @public
 *
 * The output of {@link GetStorageProfileForQueueCommand}.
 */
export interface GetStorageProfileForQueueCommandOutput extends GetStorageProfileForQueueResponse, __MetadataBearer {}

/**
 * <p>Gets a storage profile for a queue.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetStorageProfileForQueueCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetStorageProfileForQueueCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetStorageProfileForQueueRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   storageProfileId: "STRING_VALUE", // required
 * };
 * const command = new GetStorageProfileForQueueCommand(input);
 * const response = await client.send(command);
 * // { // GetStorageProfileForQueueResponse
 * //   storageProfileId: "STRING_VALUE", // required
 * //   displayName: "STRING_VALUE", // required
 * //   osFamily: "WINDOWS" || "LINUX" || "MACOS", // required
 * //   fileSystemLocations: [ // FileSystemLocationsList
 * //     { // FileSystemLocation
 * //       name: "STRING_VALUE", // required
 * //       path: "STRING_VALUE", // required
 * //       type: "SHARED" || "LOCAL", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetStorageProfileForQueueCommandInput - {@link GetStorageProfileForQueueCommandInput}
 * @returns {@link GetStorageProfileForQueueCommandOutput}
 * @see {@link GetStorageProfileForQueueCommandInput} for command's `input` shape.
 * @see {@link GetStorageProfileForQueueCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class GetStorageProfileForQueueCommand extends command<GetStorageProfileForQueueCommandInput, GetStorageProfileForQueueCommandOutput>(
  _ep0,
  _mw0,
  "GetStorageProfileForQueue",
  GetStorageProfileForQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStorageProfileForQueueRequest;
      output: GetStorageProfileForQueueResponse;
    };
    sdk: {
      input: GetStorageProfileForQueueCommandInput;
      output: GetStorageProfileForQueueCommandOutput;
    };
  };
}
