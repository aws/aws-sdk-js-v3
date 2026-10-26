// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssumeQueueRoleForWorkerRequest, AssumeQueueRoleForWorkerResponse } from "../models/models_0";
import { AssumeQueueRoleForWorker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssumeQueueRoleForWorkerCommand}.
 */
export interface AssumeQueueRoleForWorkerCommandInput extends AssumeQueueRoleForWorkerRequest {}
/**
 * @public
 *
 * The output of {@link AssumeQueueRoleForWorkerCommand}.
 */
export interface AssumeQueueRoleForWorkerCommandOutput extends AssumeQueueRoleForWorkerResponse, __MetadataBearer {}

/**
 * Allows a worker to assume a queue role.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, AssumeQueueRoleForWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, AssumeQueueRoleForWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // AssumeQueueRoleForWorkerRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 * };
 * const command = new AssumeQueueRoleForWorkerCommand(input);
 * const response = await client.send(command);
 * // { // AssumeQueueRoleForWorkerResponse
 * //   credentials: { // AwsCredentials
 * //     accessKeyId: "STRING_VALUE", // required
 * //     secretAccessKey: "STRING_VALUE", // required
 * //     sessionToken: "STRING_VALUE", // required
 * //     expiration: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param AssumeQueueRoleForWorkerCommandInput - {@link AssumeQueueRoleForWorkerCommandInput}
 * @returns {@link AssumeQueueRoleForWorkerCommandOutput}
 * @see {@link AssumeQueueRoleForWorkerCommandInput} for command's `input` shape.
 * @see {@link AssumeQueueRoleForWorkerCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link ConflictException} (client fault)
 *  Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class AssumeQueueRoleForWorkerCommand extends command<AssumeQueueRoleForWorkerCommandInput, AssumeQueueRoleForWorkerCommandOutput>(
  _ep0,
  _mw0,
  "AssumeQueueRoleForWorker",
  AssumeQueueRoleForWorker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssumeQueueRoleForWorkerRequest;
      output: AssumeQueueRoleForWorkerResponse;
    };
    sdk: {
      input: AssumeQueueRoleForWorkerCommandInput;
      output: AssumeQueueRoleForWorkerCommandOutput;
    };
  };
}
