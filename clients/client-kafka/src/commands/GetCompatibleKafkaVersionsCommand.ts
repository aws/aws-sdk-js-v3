// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetCompatibleKafkaVersionsRequest, GetCompatibleKafkaVersionsResponse } from "../models/models_0";
import { GetCompatibleKafkaVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class GetCompatibleKafkaVersionsCommand extends command<GetCompatibleKafkaVersionsCommandInput, GetCompatibleKafkaVersionsCommandOutput>(
  _ep0,
  _mw0,
  "GetCompatibleKafkaVersions",
  GetCompatibleKafkaVersions$
) {
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
