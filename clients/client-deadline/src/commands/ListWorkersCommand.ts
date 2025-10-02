// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DeadlineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeadlineClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkersRequest, ListWorkersResponse } from "../models/models_0";
import { de_ListWorkersCommand, se_ListWorkersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkersCommand}.
 */
export interface ListWorkersCommandInput extends ListWorkersRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkersCommand}.
 */
export interface ListWorkersCommandOutput extends ListWorkersResponse, __MetadataBearer {}

/**
 * <p>Lists workers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, ListWorkersCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, ListWorkersCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // ListWorkersRequest
 *   farmId: "STRING_VALUE", // required
 *   fleetId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkersCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkersResponse
 * //   nextToken: "STRING_VALUE",
 * //   workers: [ // WorkerSummaries // required
 * //     { // WorkerSummary
 * //       workerId: "STRING_VALUE", // required
 * //       farmId: "STRING_VALUE", // required
 * //       fleetId: "STRING_VALUE", // required
 * //       status: "CREATED" || "STARTED" || "STOPPING" || "STOPPED" || "NOT_RESPONDING" || "NOT_COMPATIBLE" || "RUNNING" || "IDLE", // required
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
 * // };
 *
 * ```
 *
 * @param ListWorkersCommandInput - {@link ListWorkersCommandInput}
 * @returns {@link ListWorkersCommandOutput}
 * @see {@link ListWorkersCommandInput} for command's `input` shape.
 * @see {@link ListWorkersCommandOutput} for command's `response` shape.
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
export class ListWorkersCommand extends $Command
  .classBuilder<
    ListWorkersCommandInput,
    ListWorkersCommandOutput,
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
  .s("Deadline", "ListWorkers", {})
  .n("DeadlineClient", "ListWorkersCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkersCommand)
  .de(de_ListWorkersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkersRequest;
      output: ListWorkersResponse;
    };
    sdk: {
      input: ListWorkersCommandInput;
      output: ListWorkersCommandOutput;
    };
  };
}
