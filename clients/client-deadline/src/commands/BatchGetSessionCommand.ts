// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetSessionRequest, BatchGetSessionResponse } from "../models/models_0";
import { BatchGetSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSessionCommand}.
 */
export interface BatchGetSessionCommandInput extends BatchGetSessionRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetSessionCommand}.
 */
export interface BatchGetSessionCommandOutput extends BatchGetSessionResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple sessions in a single request. This is a batch version of the <code>GetSession</code> API.</p> <p>The result of getting each session is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetSessionCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetSessionCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetSessionRequest
 *   identifiers: [ // BatchGetSessionIdentifiers // required
 *     { // BatchGetSessionIdentifier
 *       farmId: "STRING_VALUE", // required
 *       queueId: "STRING_VALUE", // required
 *       jobId: "STRING_VALUE", // required
 *       sessionId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetSessionCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSessionResponse
 * //   sessions: [ // BatchGetSessionItems // required
 * //     { // BatchGetSessionItem
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       fleetId: "STRING_VALUE", // required
 * //       workerId: "STRING_VALUE", // required
 * //       startedAt: new Date("TIMESTAMP"), // required
 * //       lifecycleStatus: "STARTED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCEEDED" || "UPDATE_FAILED" || "ENDED", // required
 * //       endedAt: new Date("TIMESTAMP"),
 * //       targetLifecycleStatus: "ENDED",
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //       log: { // LogConfiguration
 * //         logDriver: "STRING_VALUE", // required
 * //         options: { // LogOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         parameters: { // LogParameters
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         error: "STRING_VALUE",
 * //       },
 * //       hostProperties: { // HostPropertiesResponse
 * //         ipAddresses: { // IpAddresses
 * //           ipV4Addresses: [ // IpV4Addresses
 * //             "STRING_VALUE",
 * //           ],
 * //           ipV6Addresses: [ // IpV6Addresses
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         hostName: "STRING_VALUE",
 * //         ec2InstanceArn: "STRING_VALUE",
 * //         ec2InstanceType: "STRING_VALUE",
 * //       },
 * //       workerLog: {
 * //         logDriver: "STRING_VALUE", // required
 * //         options: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         parameters: {
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         error: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   errors: [ // BatchGetSessionErrors // required
 * //     { // BatchGetSessionError
 * //       farmId: "STRING_VALUE", // required
 * //       queueId: "STRING_VALUE", // required
 * //       jobId: "STRING_VALUE", // required
 * //       sessionId: "STRING_VALUE", // required
 * //       code: "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSessionCommandInput - {@link BatchGetSessionCommandInput}
 * @returns {@link BatchGetSessionCommandOutput}
 * @see {@link BatchGetSessionCommandInput} for command's `input` shape.
 * @see {@link BatchGetSessionCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Deadline Cloud can't process your request right now. Try again later.</p>
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
 * @example Get multiple sessions in a single request
 * ```javascript
 * //
 * const input = {
 *   identifiers: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       sessionId: "session-1234567890abcdef1234567890abcdef"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       jobId: "job-1234567890abcdef1234567890abcdef",
 *       queueId: "queue-1234567890abcdef1234567890abcdef",
 *       sessionId: "session-234567890abcdef1234567890abcdef1"
 *     }
 *   ]
 * };
 * const command = new BatchGetSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetSessionCommand extends $Command
  .classBuilder<
    BatchGetSessionCommandInput,
    BatchGetSessionCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchGetSession", {})
  .n("DeadlineClient", "BatchGetSessionCommand")
  .sc(BatchGetSession$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetSessionRequest;
      output: BatchGetSessionResponse;
    };
    sdk: {
      input: BatchGetSessionCommandInput;
      output: BatchGetSessionCommandOutput;
    };
  };
}
