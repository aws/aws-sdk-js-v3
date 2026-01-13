// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBrokersRequest, ListBrokersResponse } from "../models/models_0";
import type { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { ListBrokers$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBrokersCommand}.
 */
export interface ListBrokersCommandInput extends ListBrokersRequest {}
/**
 * @public
 *
 * The output of {@link ListBrokersCommand}.
 */
export interface ListBrokersCommandOutput extends ListBrokersResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all brokers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListBrokersCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListBrokersCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // ListBrokersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListBrokersCommand(input);
 * const response = await client.send(command);
 * // { // ListBrokersResponse
 * //   BrokerSummaries: [ // __listOfBrokerSummary
 * //     { // BrokerSummary
 * //       BrokerArn: "STRING_VALUE",
 * //       BrokerId: "STRING_VALUE",
 * //       BrokerName: "STRING_VALUE",
 * //       BrokerState: "CREATION_IN_PROGRESS" || "CREATION_FAILED" || "DELETION_IN_PROGRESS" || "RUNNING" || "REBOOT_IN_PROGRESS" || "CRITICAL_ACTION_REQUIRED" || "REPLICA",
 * //       Created: new Date("TIMESTAMP"),
 * //       DeploymentMode: "SINGLE_INSTANCE" || "ACTIVE_STANDBY_MULTI_AZ" || "CLUSTER_MULTI_AZ", // required
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ", // required
 * //       HostInstanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBrokersCommandInput - {@link ListBrokersCommandInput}
 * @returns {@link ListBrokersCommandOutput}
 * @see {@link ListBrokersCommandInput} for command's `input` shape.
 * @see {@link ListBrokersCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 *
 * @public
 */
export class ListBrokersCommand extends $Command
  .classBuilder<
    ListBrokersCommandInput,
    ListBrokersCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("mq", "ListBrokers", {})
  .n("MqClient", "ListBrokersCommand")
  .sc(ListBrokers$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBrokersRequest;
      output: ListBrokersResponse;
    };
    sdk: {
      input: ListBrokersCommandInput;
      output: ListBrokersCommandOutput;
    };
  };
}
