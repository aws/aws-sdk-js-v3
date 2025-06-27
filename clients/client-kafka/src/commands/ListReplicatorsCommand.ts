// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListReplicatorsRequest, ListReplicatorsResponse } from "../models/models_0";
import { de_ListReplicatorsCommand, se_ListReplicatorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReplicatorsCommand}.
 */
export interface ListReplicatorsCommandInput extends ListReplicatorsRequest {}
/**
 * @public
 *
 * The output of {@link ListReplicatorsCommand}.
 */
export interface ListReplicatorsCommandOutput extends ListReplicatorsResponse, __MetadataBearer {}

/**
 * <p>Lists the replicators.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListReplicatorsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListReplicatorsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListReplicatorsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ReplicatorNameFilter: "STRING_VALUE",
 * };
 * const command = new ListReplicatorsCommand(input);
 * const response = await client.send(command);
 * // { // ListReplicatorsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Replicators: [ // __listOfReplicatorSummary
 * //     { // ReplicatorSummary
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       CurrentVersion: "STRING_VALUE",
 * //       IsReplicatorReference: true || false,
 * //       KafkaClustersSummary: [ // __listOfKafkaClusterSummary
 * //         { // KafkaClusterSummary
 * //           AmazonMskCluster: { // AmazonMskCluster
 * //             MskClusterArn: "STRING_VALUE", // required
 * //           },
 * //           KafkaClusterAlias: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicationInfoSummaryList: [ // __listOfReplicationInfoSummary
 * //         { // ReplicationInfoSummary
 * //           SourceKafkaClusterAlias: "STRING_VALUE",
 * //           TargetKafkaClusterAlias: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReplicatorArn: "STRING_VALUE",
 * //       ReplicatorName: "STRING_VALUE",
 * //       ReplicatorResourceArn: "STRING_VALUE",
 * //       ReplicatorState: "RUNNING" || "CREATING" || "UPDATING" || "DELETING" || "FAILED",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReplicatorsCommandInput - {@link ListReplicatorsCommandInput}
 * @returns {@link ListReplicatorsCommandOutput}
 * @see {@link ListReplicatorsCommandInput} for command's `input` shape.
 * @see {@link ListReplicatorsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class ListReplicatorsCommand extends $Command
  .classBuilder<
    ListReplicatorsCommandInput,
    ListReplicatorsCommandOutput,
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
  .s("Kafka", "ListReplicators", {})
  .n("KafkaClient", "ListReplicatorsCommand")
  .f(void 0, void 0)
  .ser(se_ListReplicatorsCommand)
  .de(de_ListReplicatorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReplicatorsRequest;
      output: ListReplicatorsResponse;
    };
    sdk: {
      input: ListReplicatorsCommandInput;
      output: ListReplicatorsCommandOutput;
    };
  };
}
