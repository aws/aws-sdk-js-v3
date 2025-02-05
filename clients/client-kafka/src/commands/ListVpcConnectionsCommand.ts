// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListVpcConnectionsRequest, ListVpcConnectionsResponse } from "../models/models_0";
import { de_ListVpcConnectionsCommand, se_ListVpcConnectionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVpcConnectionsCommand}.
 */
export interface ListVpcConnectionsCommandInput extends ListVpcConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcConnectionsCommand}.
 */
export interface ListVpcConnectionsCommandOutput extends ListVpcConnectionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the VPC connections in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListVpcConnectionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListVpcConnectionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KafkaClient(config);
 * const input = { // ListVpcConnectionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcConnectionsResponse
 * //   VpcConnections: [ // __listOfVpcConnection
 * //     { // VpcConnection
 * //       VpcConnectionArn: "STRING_VALUE", // required
 * //       TargetClusterArn: "STRING_VALUE", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Authentication: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       State: "CREATING" || "AVAILABLE" || "INACTIVE" || "DEACTIVATING" || "DELETING" || "FAILED" || "REJECTED" || "REJECTING",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVpcConnectionsCommandInput - {@link ListVpcConnectionsCommandInput}
 * @returns {@link ListVpcConnectionsCommandOutput}
 * @see {@link ListVpcConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListVpcConnectionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListVpcConnectionsCommand extends $Command
  .classBuilder<
    ListVpcConnectionsCommandInput,
    ListVpcConnectionsCommandOutput,
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
  .s("Kafka", "ListVpcConnections", {})
  .n("KafkaClient", "ListVpcConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListVpcConnectionsCommand)
  .de(de_ListVpcConnectionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVpcConnectionsRequest;
      output: ListVpcConnectionsResponse;
    };
    sdk: {
      input: ListVpcConnectionsCommandInput;
      output: ListVpcConnectionsCommandOutput;
    };
  };
}
