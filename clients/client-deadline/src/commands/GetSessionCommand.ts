// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSessionRequest, GetSessionResponse } from "../models/models_0";
import { GetSession } from "../schemas/schemas_3_Get";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSessionCommand}.
 */
export interface GetSessionCommandInput extends GetSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetSessionCommand}.
 */
export interface GetSessionCommandOutput extends GetSessionResponse, __MetadataBearer {}

/**
 * <p>Gets a session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, GetSessionCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, GetSessionCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // GetSessionRequest
 *   farmId: "STRING_VALUE", // required
 *   queueId: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetSessionResponse
 * //   sessionId: "STRING_VALUE", // required
 * //   fleetId: "STRING_VALUE", // required
 * //   workerId: "STRING_VALUE", // required
 * //   startedAt: new Date("TIMESTAMP"), // required
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
 * //   lifecycleStatus: "STARTED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCEEDED" || "UPDATE_FAILED" || "ENDED", // required
 * //   endedAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   targetLifecycleStatus: "ENDED",
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
 * //   workerLog: {
 * //     logDriver: "STRING_VALUE", // required
 * //     options: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     parameters: {
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     error: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSessionCommandInput - {@link GetSessionCommandInput}
 * @returns {@link GetSessionCommandOutput}
 * @see {@link GetSessionCommandInput} for command's `input` shape.
 * @see {@link GetSessionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetSessionCommand extends $Command
  .classBuilder<
    GetSessionCommandInput,
    GetSessionCommandOutput,
    DeadlineClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DeadlineClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Deadline", "GetSession", {})
  .n("DeadlineClient", "GetSessionCommand")
  .sc(GetSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSessionRequest;
      output: GetSessionResponse;
    };
    sdk: {
      input: GetSessionCommandInput;
      output: GetSessionCommandOutput;
    };
  };
}
