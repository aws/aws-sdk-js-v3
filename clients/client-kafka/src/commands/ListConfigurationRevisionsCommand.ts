// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListConfigurationRevisionsRequest, ListConfigurationRevisionsResponse } from "../models/models_0";
import { de_ListConfigurationRevisionsCommand, se_ListConfigurationRevisionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConfigurationRevisionsCommand}.
 */
export interface ListConfigurationRevisionsCommandInput extends ListConfigurationRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConfigurationRevisionsCommand}.
 */
export interface ListConfigurationRevisionsCommandOutput extends ListConfigurationRevisionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all the MSK configurations in this Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListConfigurationRevisionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListConfigurationRevisionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * const client = new KafkaClient(config);
 * const input = { // ListConfigurationRevisionsRequest
 *   Arn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListConfigurationRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConfigurationRevisionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Revisions: [ // __listOfConfigurationRevision
 * //     { // ConfigurationRevision
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       Description: "STRING_VALUE",
 * //       Revision: Number("long"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConfigurationRevisionsCommandInput - {@link ListConfigurationRevisionsCommandInput}
 * @returns {@link ListConfigurationRevisionsCommandOutput}
 * @see {@link ListConfigurationRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListConfigurationRevisionsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class ListConfigurationRevisionsCommand extends $Command
  .classBuilder<
    ListConfigurationRevisionsCommandInput,
    ListConfigurationRevisionsCommandOutput,
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
  .s("Kafka", "ListConfigurationRevisions", {})
  .n("KafkaClient", "ListConfigurationRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_ListConfigurationRevisionsCommand)
  .de(de_ListConfigurationRevisionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConfigurationRevisionsRequest;
      output: ListConfigurationRevisionsResponse;
    };
    sdk: {
      input: ListConfigurationRevisionsCommandInput;
      output: ListConfigurationRevisionsCommandOutput;
    };
  };
}
