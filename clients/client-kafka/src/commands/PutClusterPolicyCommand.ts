// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutClusterPolicyRequest, PutClusterPolicyResponse } from "../models/models_0";
import { PutClusterPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutClusterPolicyCommand}.
 */
export interface PutClusterPolicyCommandInput extends PutClusterPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutClusterPolicyCommand}.
 */
export interface PutClusterPolicyCommandOutput extends PutClusterPolicyResponse, __MetadataBearer {}

/**
 * <p>Creates or updates the MSK cluster policy specified by the cluster Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, PutClusterPolicyCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, PutClusterPolicyCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // PutClusterPolicyRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE",
 *   Policy: "STRING_VALUE", // required
 * };
 * const command = new PutClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutClusterPolicyResponse
 * //   CurrentVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutClusterPolicyCommandInput - {@link PutClusterPolicyCommandInput}
 * @returns {@link PutClusterPolicyCommandOutput}
 * @see {@link PutClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link PutClusterPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 *
 * @public
 */
export class PutClusterPolicyCommand extends command<PutClusterPolicyCommandInput, PutClusterPolicyCommandOutput>(
  _ep0,
  _mw0,
  "PutClusterPolicy",
  PutClusterPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutClusterPolicyRequest;
      output: PutClusterPolicyResponse;
    };
    sdk: {
      input: PutClusterPolicyCommandInput;
      output: PutClusterPolicyCommandOutput;
    };
  };
}
