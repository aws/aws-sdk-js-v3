// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetWorkerRequest, GetWorkerResponse } from "../models/models_0";
import { de_GetWorkerCommand, se_GetWorkerCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetWorkerCommand}.
 */
export interface GetWorkerCommandInput extends GetWorkerRequest {}
/**
 * @public
 *
 * The output of {@link GetWorkerCommand}.
 */
export interface GetWorkerCommandOutput extends GetWorkerResponse, __MetadataBearer {}

/**
 * <p>Gets a worker.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetWorkerCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetWorkerCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DeadlineClient(config);
 * const input = { // GetWorkerRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   workerId: "STRING_VALUE", // required
 * };
 * const command = new GetWorkerCommand(input);
 * const response = await client.send(command);
 * // { // GetWorkerResponse
 * //   farmId: "STRING_VALUE", // required
 * //   fleetId: "STRING_VALUE", // required
 * //   workerId: "STRING_VALUE", // required
 * //   hostProperties: { // HostPropertiesResponse
 * //     ipAddresses: { // IpAddresses
 * //       ipV4Addresses: [ // IpV4Addresses
 * //         "STRING_VALUE",
 * //       ],
 * //       ipV6Addresses: [ // IpV6Addresses
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     hostName: "STRING_VALUE",
 * //     ec2InstanceArn: "STRING_VALUE",
 * //     ec2InstanceType: "STRING_VALUE",
 * //   },
 * //   status: "CREATED" || "STARTED" || "STOPPING" || "STOPPED" || "NOT_RESPONDING" || "NOT_COMPATIBLE" || "RUNNING" || "IDLE", // required
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
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetWorkerCommandInput - {@link GetWorkerCommandInput}
 * @returns {@link GetWorkerCommandOutput}
 * @see {@link GetWorkerCommandInput} for command's `input` shape.
 * @see {@link GetWorkerCommandOutput} for command's `response` shape.
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
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *          unsupported characters.</p>
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 * @public
 */
export class GetWorkerCommand extends $Command
  .classBuilder<
    GetWorkerCommandInput,
    GetWorkerCommandOutput,
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
  .s("Deadline", "GetWorker", {})
  .n("DeadlineClient", "GetWorkerCommand")
  .f(void 0, void 0)
  .ser(se_GetWorkerCommand)
  .de(de_GetWorkerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetWorkerRequest;
      output: GetWorkerResponse;
    };
    sdk: {
      input: GetWorkerCommandInput;
      output: GetWorkerCommandOutput;
    };
  };
}
