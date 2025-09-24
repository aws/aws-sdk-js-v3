// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { DeleteClusterPolicyRequest, DeleteClusterPolicyResponse } from "../models/models_0";
import { DeleteClusterPolicy } from "../schemas/schemas_22_DeleteClusterPolicy";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteClusterPolicyCommand}.
 */
export interface DeleteClusterPolicyCommandInput extends DeleteClusterPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteClusterPolicyCommand}.
 */
export interface DeleteClusterPolicyCommandOutput extends DeleteClusterPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the MSK cluster policy specified by the Amazon Resource Name (ARN) in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, DeleteClusterPolicyCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, DeleteClusterPolicyCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // DeleteClusterPolicyRequest
 *   ClusterArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteClusterPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteClusterPolicyCommandInput - {@link DeleteClusterPolicyCommandInput}
 * @returns {@link DeleteClusterPolicyCommandOutput}
 * @see {@link DeleteClusterPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteClusterPolicyCommandOutput} for command's `response` shape.
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
export class DeleteClusterPolicyCommand extends $Command
  .classBuilder<
    DeleteClusterPolicyCommandInput,
    DeleteClusterPolicyCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Kafka", "DeleteClusterPolicy", {})
  .n("KafkaClient", "DeleteClusterPolicyCommand")
  .sc(DeleteClusterPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteClusterPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteClusterPolicyCommandInput;
      output: DeleteClusterPolicyCommandOutput;
    };
  };
}
