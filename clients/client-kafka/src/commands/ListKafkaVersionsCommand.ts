// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { ListKafkaVersionsRequest, ListKafkaVersionsResponse } from "../models/models_0";
import { de_ListKafkaVersionsCommand, se_ListKafkaVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListKafkaVersionsCommand}.
 */
export interface ListKafkaVersionsCommandInput extends ListKafkaVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListKafkaVersionsCommand}.
 */
export interface ListKafkaVersionsCommandOutput extends ListKafkaVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of Apache Kafka versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, ListKafkaVersionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, ListKafkaVersionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // ListKafkaVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListKafkaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListKafkaVersionsResponse
 * //   KafkaVersions: [ // __listOfKafkaVersion
 * //     { // KafkaVersion
 * //       Version: "STRING_VALUE",
 * //       Status: "ACTIVE" || "DEPRECATED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListKafkaVersionsCommandInput - {@link ListKafkaVersionsCommandInput}
 * @returns {@link ListKafkaVersionsCommandOutput}
 * @see {@link ListKafkaVersionsCommandInput} for command's `input` shape.
 * @see {@link ListKafkaVersionsCommandOutput} for command's `response` shape.
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
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class ListKafkaVersionsCommand extends $Command
  .classBuilder<
    ListKafkaVersionsCommandInput,
    ListKafkaVersionsCommandOutput,
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
  .s("Kafka", "ListKafkaVersions", {})
  .n("KafkaClient", "ListKafkaVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListKafkaVersionsCommand)
  .de(de_ListKafkaVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListKafkaVersionsRequest;
      output: ListKafkaVersionsResponse;
    };
    sdk: {
      input: ListKafkaVersionsCommandInput;
      output: ListKafkaVersionsCommandOutput;
    };
  };
}
