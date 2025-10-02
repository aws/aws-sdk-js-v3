// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListNodesRequest, ListNodesResponse } from "../models/models_0";
import { de_ListNodesCommand, se_ListNodesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListNodesCommand}.
 */
export interface ListNodesCommandInput extends ListNodesRequest {}
/**
 * @public
 *
 * The output of {@link ListNodesCommand}.
 */
export interface ListNodesCommandOutput extends ListNodesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the broker nodes in the cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListNodesCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListNodesCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListNodesRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListNodesCommand(input);
 * const response = await client.send(command);
 * // { // ListNodesResponse
 * //   NextToken: "STRING_VALUE",
 * //   NodeInfoList: [ // __listOfNodeInfo
 * //     { // NodeInfo
 * //       AddedToClusterTime: "STRING_VALUE",
 * //       BrokerNodeInfo: { // BrokerNodeInfo
 * //         AttachedENIId: "STRING_VALUE",
 * //         BrokerId: Number("double"),
 * //         ClientSubnet: "STRING_VALUE",
 * //         ClientVpcIpAddress: "STRING_VALUE",
 * //         CurrentBrokerSoftwareInfo: { // BrokerSoftwareInfo
 * //           ConfigurationArn: "STRING_VALUE",
 * //           ConfigurationRevision: Number("long"),
 * //           KafkaVersion: "STRING_VALUE",
 * //         },
 * //         Endpoints: [ // __listOf__string
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ControllerNodeInfo: { // ControllerNodeInfo
 * //         Endpoints: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       InstanceType: "STRING_VALUE",
 * //       NodeARN: "STRING_VALUE",
 * //       NodeType: "BROKER",
 * //       ZookeeperNodeInfo: { // ZookeeperNodeInfo
 * //         AttachedENIId: "STRING_VALUE",
 * //         ClientVpcIpAddress: "STRING_VALUE",
 * //         Endpoints: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ZookeeperId: Number("double"),
 * //         ZookeeperVersion: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListNodesCommandInput - {@link ListNodesCommandInput}
 * @returns {@link ListNodesCommandOutput}
 * @see {@link ListNodesCommandInput} for command's `input` shape.
 * @see {@link ListNodesCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class ListNodesCommand extends $Command
  .classBuilder<
    ListNodesCommandInput,
    ListNodesCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "ListNodes", {})
  .n("KafkaClient", "ListNodesCommand")
  .f(void 0, void 0)
  .ser(se_ListNodesCommand)
  .de(de_ListNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListNodesRequest;
      output: ListNodesResponse;
    };
    sdk: {
      input: ListNodesCommandInput;
      output: ListNodesCommandOutput;
    };
  };
}
