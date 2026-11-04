// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVpcConfigurationRequest, CreateVpcConfigurationResponse } from "../models/models_0";
import { CreateVpcConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVpcConfigurationCommand}.
 */
export interface CreateVpcConfigurationCommandInput extends CreateVpcConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcConfigurationCommand}.
 */
export interface CreateVpcConfigurationCommandOutput extends CreateVpcConfigurationResponse, __MetadataBearer {}

/**
 * Creates a VPC configuration that lets a knowledge base connect to a resource in your private VPC. This operation is asynchronous: it returns a `vpcConfigurationId` with status `CREATING`. Poll `GetVpcConfiguration` until the status becomes `CREATED` or `CREATE_FAILED`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentClient, CreateVpcConfigurationCommand } from "@aws-sdk/client-bedrock-agent"; // ES Modules import
 * // const { BedrockAgentClient, CreateVpcConfigurationCommand } = require("@aws-sdk/client-bedrock-agent"); // CommonJS import
 * // import type { BedrockAgentClientConfig } from "@aws-sdk/client-bedrock-agent";
 * const config = {}; // type is BedrockAgentClientConfig
 * const client = new BedrockAgentClient(config);
 * const input = { // CreateVpcConfigurationRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   vpcId: "STRING_VALUE", // required
 *   subnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   resourceTarget: "STRING_VALUE", // required
 *   port: Number("int"), // required
 *   protocol: "HTTP" || "HTTPS", // required
 *   resolutionMode: "PUBLIC" || "IN_VPC", // required
 *   hostHeader: "STRING_VALUE",
 *   tlsServerName: "STRING_VALUE",
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateVpcConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcConfigurationResponse
 * //   vpcConfigurationId: "STRING_VALUE", // required
 * //   status: "CREATING" || "CREATED" || "DELETING" || "CREATE_FAILED" || "DELETE_FAILED", // required
 * // };
 *
 * ```
 *
 * @param CreateVpcConfigurationCommandInput - {@link CreateVpcConfigurationCommandInput}
 * @returns {@link CreateVpcConfigurationCommandOutput}
 * @see {@link CreateVpcConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateVpcConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentClientResolvedConfig | config} for BedrockAgentClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request is denied because of missing access permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict performing an operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource Amazon Resource Name (ARN) was not found. Check the Amazon Resource Name (ARN) and try your request again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The number of requests exceeds the service quota. Resubmit your request later.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of requests exceeds the limit. Resubmit your request later.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Input validation failed. Check your request parameters and retry the request.
 *
 * @throws {@link BedrockAgentServiceException}
 *
 * Base exception class for all service exceptions from BedrockAgent service.
 *
 * @public
 */
export class CreateVpcConfigurationCommand extends command<CreateVpcConfigurationCommandInput, CreateVpcConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateVpcConfiguration",
  CreateVpcConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcConfigurationRequest;
      output: CreateVpcConfigurationResponse;
    };
    sdk: {
      input: CreateVpcConfigurationCommandInput;
      output: CreateVpcConfigurationCommandOutput;
    };
  };
}
