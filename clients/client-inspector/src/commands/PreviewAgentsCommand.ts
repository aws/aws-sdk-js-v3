// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { PreviewAgentsRequest, PreviewAgentsResponse } from "../models/models_0";
import { PreviewAgents } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PreviewAgentsCommand}.
 */
export interface PreviewAgentsCommandInput extends PreviewAgentsRequest {}
/**
 * @public
 *
 * The output of {@link PreviewAgentsCommand}.
 */
export interface PreviewAgentsCommandOutput extends PreviewAgentsResponse, __MetadataBearer {}

/**
 * <p>Previews the agents installed on the EC2 instances that are part of the specified
 *          assessment target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, PreviewAgentsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, PreviewAgentsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * // import type { InspectorClientConfig } from "@aws-sdk/client-inspector";
 * const config = {}; // type is InspectorClientConfig
 * const client = new InspectorClient(config);
 * const input = { // PreviewAgentsRequest
 *   previewAgentsArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * // { // PreviewAgentsResponse
 * //   agentPreviews: [ // AgentPreviewList // required
 * //     { // AgentPreview
 * //       hostname: "STRING_VALUE",
 * //       agentId: "STRING_VALUE", // required
 * //       autoScalingGroup: "STRING_VALUE",
 * //       agentHealth: "HEALTHY" || "UNHEALTHY" || "UNKNOWN",
 * //       agentVersion: "STRING_VALUE",
 * //       operatingSystem: "STRING_VALUE",
 * //       kernelVersion: "STRING_VALUE",
 * //       ipv4Address: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PreviewAgentsCommandInput - {@link PreviewAgentsCommandInput}
 * @returns {@link PreviewAgentsCommandOutput}
 * @see {@link PreviewAgentsCommandInput} for command's `input` shape.
 * @see {@link PreviewAgentsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for InspectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to access the requested resource.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Internal server error.</p>
 *
 * @throws {@link InvalidCrossAccountRoleException} (client fault)
 *  <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2
 *          instances during the assessment run.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *          input parameter.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced an entity that does not exist. The
 *          error code describes the entity.</p>
 *
 * @throws {@link InspectorServiceException}
 * <p>Base exception class for all service exceptions from Inspector service.</p>
 *
 *
 * @example Preview agents
 * ```javascript
 * // Previews the agents installed on the EC2 instances that are part of the specified assessment target.
 * const input = {
 *   maxResults: 123,
 *   previewAgentsArn: "arn:aws:inspector:us-west-2:123456789012:target/0-0kFIPusq"
 * };
 * const command = new PreviewAgentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agentPreviews: [
 *     {
 *       agentId: "i-49113b93"
 *     }
 *   ],
 *   nextToken: "1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PreviewAgentsCommand extends $Command
  .classBuilder<
    PreviewAgentsCommandInput,
    PreviewAgentsCommandOutput,
    InspectorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InspectorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("InspectorService", "PreviewAgents", {})
  .n("InspectorClient", "PreviewAgentsCommand")
  .sc(PreviewAgents)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PreviewAgentsRequest;
      output: PreviewAgentsResponse;
    };
    sdk: {
      input: PreviewAgentsCommandInput;
      output: PreviewAgentsCommandOutput;
    };
  };
}
