// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListWorkloadIdentitiesRequest, ListWorkloadIdentitiesResponse } from "../models/models_0";
import { de_ListWorkloadIdentitiesCommand, se_ListWorkloadIdentitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWorkloadIdentitiesCommand}.
 */
export interface ListWorkloadIdentitiesCommandInput extends ListWorkloadIdentitiesRequest {}
/**
 * @public
 *
 * The output of {@link ListWorkloadIdentitiesCommand}.
 */
export interface ListWorkloadIdentitiesCommandOutput extends ListWorkloadIdentitiesResponse, __MetadataBearer {}

/**
 * <p>Lists all workload identities in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListWorkloadIdentitiesCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListWorkloadIdentitiesCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListWorkloadIdentitiesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListWorkloadIdentitiesCommand(input);
 * const response = await client.send(command);
 * // { // ListWorkloadIdentitiesResponse
 * //   workloadIdentities: [ // WorkloadIdentityList // required
 * //     { // WorkloadIdentityType
 * //       name: "STRING_VALUE", // required
 * //       workloadIdentityArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWorkloadIdentitiesCommandInput - {@link ListWorkloadIdentitiesCommandInput}
 * @returns {@link ListWorkloadIdentitiesCommandOutput}
 * @see {@link ListWorkloadIdentitiesCommandInput} for command's `input` shape.
 * @see {@link ListWorkloadIdentitiesCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListWorkloadIdentitiesCommand extends $Command
  .classBuilder<
    ListWorkloadIdentitiesCommandInput,
    ListWorkloadIdentitiesCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "ListWorkloadIdentities", {})
  .n("BedrockAgentCoreControlClient", "ListWorkloadIdentitiesCommand")
  .f(void 0, void 0)
  .ser(se_ListWorkloadIdentitiesCommand)
  .de(de_ListWorkloadIdentitiesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWorkloadIdentitiesRequest;
      output: ListWorkloadIdentitiesResponse;
    };
    sdk: {
      input: ListWorkloadIdentitiesCommandInput;
      output: ListWorkloadIdentitiesCommandOutput;
    };
  };
}
