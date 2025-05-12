// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateWorkerRequest, CreateWorkerResponse } from "../models/models_0";
import { de_CreateWorkerCommand, se_CreateWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateWorkerCommand}.
 */
export interface CreateWorkerCommandInput extends CreateWorkerRequest {}
/**
 * @public
 *
 * The output of {@link CreateWorkerCommand}.
 */
export interface CreateWorkerCommandOutput extends CreateWorkerResponse, __MetadataBearer {}

/**
 * <p>Creates a worker. A worker tells your instance how much processing power (vCPU), and memory (GiB) you’ll need to assemble the digital assets held within a particular instance. You can specify certain instance types to use, or let the worker know which instances types to exclude.</p> <p>Deadline Cloud limits the number of workers to less than or equal to the fleet's maximum worker count. The service maintains eventual consistency for the worker count. If you make multiple rapid calls to <code>CreateWorker</code> before the field updates, you might exceed your fleet's maximum worker count. For example, if your <code>maxWorkerCount</code> is 10 and you currently have 9 workers, making two quick <code>CreateWorker</code> calls might successfully create 2 workers instead of 1, resulting in 11 total workers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, CreateWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, CreateWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * const client = new DeadlineClient(config);
 * const input = { // CreateWorkerRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   hostProperties: { // HostPropertiesRequest
 *     ipAddresses: { // IpAddresses
 *       ipV4Addresses: [ // IpV4Addresses
 *         "STRING_VALUE",
 *       ],
 *       ipV6Addresses: [ // IpV6Addresses
 *         "STRING_VALUE",
 *       ],
 *     },
 *     hostName: "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateWorkerCommand(input);
 * const response = await client.send(command);
 * // { // CreateWorkerResponse
 * //   workerId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateWorkerCommandInput - {@link CreateWorkerCommandInput}
 * @returns {@link CreateWorkerCommandOutput}
 * @see {@link CreateWorkerCommandInput} for command's `input` shape.
 * @see {@link CreateWorkerCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.</p>
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
export class CreateWorkerCommand extends $Command
  .classBuilder<
    CreateWorkerCommandInput,
    CreateWorkerCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Deadline", "CreateWorker", {})
  .n("DeadlineClient", "CreateWorkerCommand")
  .f(void 0, void 0)
  .ser(se_CreateWorkerCommand)
  .de(de_CreateWorkerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWorkerRequest;
      output: CreateWorkerResponse;
    };
    sdk: {
      input: CreateWorkerCommandInput;
      output: CreateWorkerCommandOutput;
    };
  };
}
