// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchGetWorkerRequest, BatchGetWorkerResponse } from "../models/models_0";
import { BatchGetWorker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetWorkerCommand}.
 */
export interface BatchGetWorkerCommandInput extends BatchGetWorkerRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetWorkerCommand}.
 */
export interface BatchGetWorkerCommandOutput extends BatchGetWorkerResponse, __MetadataBearer {}

/**
 * <p>Retrieves multiple workers in a single request. This is a batch version of the <code>GetWorker</code> API.</p> <p>The result of getting each worker is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, BatchGetWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, BatchGetWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // BatchGetWorkerRequest
 *   identifiers: [ // BatchGetWorkerIdentifiers // required
 *     { // BatchGetWorkerIdentifier
 *       farmId: "STRING_VALUE", // required
 *       fleetId: "STRING_VALUE", // required
 *       workerId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchGetWorkerCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetWorkerResponse
 * //   workers: [ // BatchGetWorkerItems // required
 * //     { // BatchGetWorkerItem
 * //       farmId: "STRING_VALUE", // required
 * //       fleetId: "STRING_VALUE", // required
 * //       workerId: "STRING_VALUE", // required
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
 * //       status: "CREATED" || "STARTED" || "STOPPING" || "STOPPED" || "NOT_RESPONDING" || "NOT_COMPATIBLE" || "RUNNING" || "IDLE", // required
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
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       createdBy: "STRING_VALUE", // required
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       updatedBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   errors: [ // BatchGetWorkerErrors // required
 * //     { // BatchGetWorkerError
 * //       farmId: "STRING_VALUE", // required
 * //       fleetId: "STRING_VALUE", // required
 * //       workerId: "STRING_VALUE", // required
 * //       code: "InternalServerErrorException" || "ResourceNotFoundException" || "ValidationException", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetWorkerCommandInput - {@link BatchGetWorkerCommandInput}
 * @returns {@link BatchGetWorkerCommandOutput}
 * @see {@link BatchGetWorkerCommandInput} for command's `input` shape.
 * @see {@link BatchGetWorkerCommandOutput} for command's `response` shape.
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
 * @example Get multiple workers in a single request
 * ```javascript
 * //
 * const input = {
 *   identifiers: [
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       fleetId: "fleet-1234567890abcdef1234567890abcdef",
 *       workerId: "worker-1234567890abcdef1234567890abcdef"
 *     },
 *     {
 *       farmId: "farm-1234567890abcdef1234567890abcdef",
 *       fleetId: "fleet-1234567890abcdef1234567890abcdef",
 *       workerId: "worker-234567890abcdef1234567890abcdef1"
 *     }
 *   ]
 * };
 * const command = new BatchGetWorkerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class BatchGetWorkerCommand extends $Command
  .classBuilder<
    BatchGetWorkerCommandInput,
    BatchGetWorkerCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "BatchGetWorker", {})
  .n("DeadlineClient", "BatchGetWorkerCommand")
  .sc(BatchGetWorker$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetWorkerRequest;
      output: BatchGetWorkerResponse;
    };
    sdk: {
      input: BatchGetWorkerCommandInput;
      output: BatchGetWorkerCommandOutput;
    };
  };
}
