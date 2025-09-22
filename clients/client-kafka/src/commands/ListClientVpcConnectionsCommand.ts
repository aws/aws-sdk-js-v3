// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListClientVpcConnectionsRequest, ListClientVpcConnectionsResponse } from "../models/models_0";
import { ListClientVpcConnections } from "../schemas/schemas_4_Vpc";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListClientVpcConnectionsCommand}.
 */
export interface ListClientVpcConnectionsCommandInput extends ListClientVpcConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListClientVpcConnectionsCommand}.
 */
export interface ListClientVpcConnectionsCommandOutput extends ListClientVpcConnectionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the VPC connections in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListClientVpcConnectionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListClientVpcConnectionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListClientVpcConnectionsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClientVpcConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListClientVpcConnectionsResponse
 * //   ClientVpcConnections: [ // __listOfClientVpcConnection
 * //     { // ClientVpcConnection
 * //       Authentication: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       State: "CREATING" || "AVAILABLE" || "INACTIVE" || "DEACTIVATING" || "DELETING" || "FAILED" || "REJECTED" || "REJECTING",
 * //       VpcConnectionArn: "STRING_VALUE", // required
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClientVpcConnectionsCommandInput - {@link ListClientVpcConnectionsCommandInput}
 * @returns {@link ListClientVpcConnectionsCommandOutput}
 * @see {@link ListClientVpcConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListClientVpcConnectionsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceUnavailableException} (server fault)
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
export class ListClientVpcConnectionsCommand extends $Command
  .classBuilder<
    ListClientVpcConnectionsCommandInput,
    ListClientVpcConnectionsCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "ListClientVpcConnections", {})
  .n("KafkaClient", "ListClientVpcConnectionsCommand")
  .sc(ListClientVpcConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClientVpcConnectionsRequest;
      output: ListClientVpcConnectionsResponse;
    };
    sdk: {
      input: ListClientVpcConnectionsCommandInput;
      output: ListClientVpcConnectionsCommandOutput;
    };
  };
}
