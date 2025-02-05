// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateWorkerRequest, UpdateWorkerResponse } from "../models/models_0";
import { de_UpdateWorkerCommand, se_UpdateWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateWorkerCommand}.
 */
export interface UpdateWorkerCommandInput extends UpdateWorkerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkerCommand}.
 */
export interface UpdateWorkerCommandOutput extends UpdateWorkerResponse, __MetadataBearer {}

/**
 * <p>Updates a worker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, UpdateWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, UpdateWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeadlineClient(config);
 * const input = { // UpdateWorkerRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 *   status: "STARTED" || "STOPPING" || "STOPPED",
 *   capabilities: { // WorkerCapabilities
 *     amounts: [ // WorkerAmountCapabilityList // required
 *       { // WorkerAmountCapability
 *         name: "STRING_VALUE", // required
 *         value: Number("float"), // required
 *       },
 *     ],
 *     attributes: [ // WorkerAttributeCapabilityList // required
 *       { // WorkerAttributeCapability
 *         name: "STRING_VALUE", // required
 *         values: [ // AttributeCapabilityValuesList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
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
 * };
 * const command = new UpdateWorkerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateWorkerResponse
 * //   log: { // LogConfiguration
 * //     logDriver: "STRING_VALUE", // required
 * //     options: { // LogOptions
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     parameters: { // LogParameters
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     error: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateWorkerCommandInput - {@link UpdateWorkerCommandInput}
 * @returns {@link UpdateWorkerCommandOutput}
 * @see {@link UpdateWorkerCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkerCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *          than one operation on the same resource at the same time.</p>
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class UpdateWorkerCommand extends $Command
  .classBuilder<
    UpdateWorkerCommandInput,
    UpdateWorkerCommandOutput,
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
  .s("Deadline", "UpdateWorker", {})
  .n("DeadlineClient", "UpdateWorkerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateWorkerCommand)
  .de(de_UpdateWorkerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkerRequest;
      output: UpdateWorkerResponse;
    };
    sdk: {
      input: UpdateWorkerCommandInput;
      output: UpdateWorkerCommandOutput;
    };
  };
}
