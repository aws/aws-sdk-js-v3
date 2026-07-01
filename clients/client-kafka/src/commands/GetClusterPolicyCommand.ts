// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetClusterPolicyRequest, GetClusterPolicyResponse } from "../models/models_0";
import { GetClusterPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetClusterPolicyCommand}.
 */
export interface GetClusterPolicyCommandInput extends GetClusterPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetClusterPolicyCommand}.
 */
export interface GetClusterPolicyCommandOutput extends GetClusterPolicyResponse, __MetadataBearer {}

/**
 * <p>Get the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, GetClusterPolicyCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, GetClusterPolicyCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // GetClusterPolicyRequest
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new GetClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetClusterPolicyResponse
 * //   CurrentVersion: "STRING_VALUE",
 * //   Policy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetClusterPolicyCommandInput - {@link GetClusterPolicyCommandInput}
 * @returns {@link GetClusterPolicyCommandOutput}
 * @see {@link GetClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link GetClusterPolicyCommandOutput} for command's `response` shape.
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
export class GetClusterPolicyCommand extends command<GetClusterPolicyCommandInput, GetClusterPolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetClusterPolicy",
  GetClusterPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetClusterPolicyRequest;
      output: GetClusterPolicyResponse;
    };
    sdk: {
      input: GetClusterPolicyCommandInput;
      output: GetClusterPolicyCommandOutput;
    };
  };
}
