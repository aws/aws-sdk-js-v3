// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVpcConfigurationRequest, GetVpcConfigurationResponse } from "../models/models_0";
import { GetVpcConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVpcConfigurationCommand}.
 */
export interface GetVpcConfigurationCommandInput extends GetVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetVpcConfigurationCommand}.
 */
export interface GetVpcConfigurationCommandOutput extends GetVpcConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the details and current status of a single VPC configuration. Use this operation to poll for the outcome of an asynchronous create or delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, GetVpcConfigurationCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, GetVpcConfigurationCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // GetVpcConfigurationRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   vpcConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new GetVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetVpcConfigurationResponse
 * //   vpcConfiguration: { // VpcConfiguration
 * //     vpcConfigurationId: "STRING_VALUE", // required
 * //     status: "CREATING" || "CREATED" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * //     statusMessage: "STRING_VALUE",
 * //     vpcId: "STRING_VALUE", // required
 * //     subnetIds: [ // SubnetIdList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     resourceTarget: "STRING_VALUE", // required
 * //     port: Number("int"), // required
 * //     protocol: "HTTP" || "HTTPS", // required
 * //     resolutionMode: "PUBLIC" || "IN_VPC", // required
 * //     hostHeader: "STRING_VALUE",
 * //     tlsServerName: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVpcConfigurationCommandInput - {@link GetVpcConfigurationCommandInput}
 * @returns {@link GetVpcConfigurationCommandOutput}
 * @see {@link GetVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockAgentServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgent service.</p>
 *
 *
 * @public
 */
export class GetVpcConfigurationCommand extends command<GetVpcConfigurationCommandInput, GetVpcConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetVpcConfiguration",
  GetVpcConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVpcConfigurationRequest;
      output: GetVpcConfigurationResponse;
    };
    sdk: {
      input: GetVpcConfigurationCommandInput;
      output: GetVpcConfigurationCommandOutput;
    };
  };
}
