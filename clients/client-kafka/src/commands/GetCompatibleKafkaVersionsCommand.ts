// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { GetCompatibleKafkaVersionsRequest, GetCompatibleKafkaVersionsResponse } from "../models/models_0";
import { GetCompatibleKafkaVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCompatibleKafkaVersionsCommand}.
 */
export interface GetCompatibleKafkaVersionsCommandInput extends GetCompatibleKafkaVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetCompatibleKafkaVersionsCommand}.
 */
export interface GetCompatibleKafkaVersionsCommandOutput extends GetCompatibleKafkaVersionsResponse, __MetadataBearer {}

/**
 * <p>Gets the Apache Kafka versions to which you can update the MSK cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetCompatibleKafkaVersionsCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetCompatibleKafkaVersionsCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // GetCompatibleKafkaVersionsRequest
 *   ClusterArn: "STRING_VALUE",
 * };
 * const command = new GetCompatibleKafkaVersionsCommand(input);
 * const response = await client.send(command);
 * // { // GetCompatibleKafkaVersionsResponse
 * //   CompatibleKafkaVersions: [ // __listOfCompatibleKafkaVersion
 * //     { // CompatibleKafkaVersion
 * //       SourceVersion: "STRING_VALUE",
 * //       TargetVersions: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetCompatibleKafkaVersionsCommandInput - {@link GetCompatibleKafkaVersionsCommandInput}
 * @returns {@link GetCompatibleKafkaVersionsCommandOutput}
 * @see {@link GetCompatibleKafkaVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleKafkaVersionsCommandOutput} for command's `response` shape.
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
export class GetCompatibleKafkaVersionsCommand extends $Command
  .classBuilder<
    GetCompatibleKafkaVersionsCommandInput,
    GetCompatibleKafkaVersionsCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "GetCompatibleKafkaVersions", {})
  .n("KafkaClient", "GetCompatibleKafkaVersionsCommand")
  .sc(GetCompatibleKafkaVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCompatibleKafkaVersionsRequest;
      output: GetCompatibleKafkaVersionsResponse;
    };
    sdk: {
      input: GetCompatibleKafkaVersionsCommandInput;
      output: GetCompatibleKafkaVersionsCommandOutput;
    };
  };
}
