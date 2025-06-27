// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClusterOperationsV2Request, ListClusterOperationsV2Response } from "../models/models_0";
import { de_ListClusterOperationsV2Command, se_ListClusterOperationsV2Command } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClusterOperationsV2Command}.
 */
export interface ListClusterOperationsV2CommandInput extends ListClusterOperationsV2Request {}
/**
 * @public
 *
 * The output of {@link ListClusterOperationsV2Command}.
 */
export interface ListClusterOperationsV2CommandOutput extends ListClusterOperationsV2Response, __MetadataBearer {}

/**
 * <p>Returns a list of all the operations that have been performed on the specified MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClusterOperationsV2Command } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClusterOperationsV2Command } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListClusterOperationsV2Request
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterOperationsV2Command(input);
 * const response = await client.send(command);
 * // { // ListClusterOperationsV2Response
 * //   ClusterOperationInfoList: [ // __listOfClusterOperationV2Summary
 * //     { // ClusterOperationV2Summary
 * //       ClusterArn: "STRING_VALUE",
 * //       ClusterType: "PROVISIONED" || "SERVERLESS",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       OperationArn: "STRING_VALUE",
 * //       OperationState: "STRING_VALUE",
 * //       OperationType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterOperationsV2CommandInput - {@link ListClusterOperationsV2CommandInput}
 * @returns {@link ListClusterOperationsV2CommandOutput}
 * @see {@link ListClusterOperationsV2CommandInput} for command's `input` shape.
 * @see {@link ListClusterOperationsV2CommandOutput} for command's `response` shape.
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
export class ListClusterOperationsV2Command extends $Command
  .classBuilder<
    ListClusterOperationsV2CommandInput,
    ListClusterOperationsV2CommandOutput,
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
  .s("Kafka", "ListClusterOperationsV2", {})
  .n("KafkaClient", "ListClusterOperationsV2Command")
  .f(void 0, void 0)
  .ser(se_ListClusterOperationsV2Command)
  .de(de_ListClusterOperationsV2Command)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterOperationsV2Request;
      output: ListClusterOperationsV2Response;
    };
    sdk: {
      input: ListClusterOperationsV2CommandInput;
      output: ListClusterOperationsV2CommandOutput;
    };
  };
}
