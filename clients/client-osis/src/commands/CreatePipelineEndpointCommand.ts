// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreatePipelineEndpointRequest, CreatePipelineEndpointResponse } from "../models/models_0";
import type { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { CreatePipelineEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePipelineEndpointCommand}.
 */
export interface CreatePipelineEndpointCommandInput extends CreatePipelineEndpointRequest {}
/**
 * @public
 *
 * The output of {@link CreatePipelineEndpointCommand}.
 */
export interface CreatePipelineEndpointCommandOutput extends CreatePipelineEndpointResponse, __MetadataBearer {}

/**
 * <p>Creates a VPC endpoint for an OpenSearch Ingestion pipeline. Pipeline endpoints allow you to
 *    ingest data from your VPC into pipelines that you have access to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, CreatePipelineEndpointCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, CreatePipelineEndpointCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // CreatePipelineEndpointRequest
 *   PipelineArn: "STRING_VALUE", // required
 *   VpcOptions: { // PipelineEndpointVpcOptions
 *     SubnetIds: [ // SubnetIds
 *       "STRING_VALUE",
 *     ],
 *     SecurityGroupIds: [ // SecurityGroupIds
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreatePipelineEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreatePipelineEndpointResponse
 * //   PipelineArn: "STRING_VALUE",
 * //   EndpointId: "STRING_VALUE",
 * //   Status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "DELETING" || "REVOKING" || "REVOKED",
 * //   VpcId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePipelineEndpointCommandInput - {@link CreatePipelineEndpointCommandInput}
 * @returns {@link CreatePipelineEndpointCommandOutput}
 * @see {@link CreatePipelineEndpointCommandInput} for command's `input` shape.
 * @see {@link CreatePipelineEndpointCommandOutput} for command's `response` shape.
 * @see {@link OSISClientResolvedConfig | config} for OSISClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to access the resource.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>Exception is thrown when an operation has been disabled.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request failed because of an unknown error, exception, or failure (the failure is
 *    internal to the service).</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You attempted to create more than the allowed number of tags.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You attempted to access or delete a resource that does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 *
 * @public
 */
export class CreatePipelineEndpointCommand extends $Command
  .classBuilder<
    CreatePipelineEndpointCommandInput,
    CreatePipelineEndpointCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "CreatePipelineEndpoint", {})
  .n("OSISClient", "CreatePipelineEndpointCommand")
  .sc(CreatePipelineEndpoint$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePipelineEndpointRequest;
      output: CreatePipelineEndpointResponse;
    };
    sdk: {
      input: CreatePipelineEndpointCommandInput;
      output: CreatePipelineEndpointCommandOutput;
    };
  };
}
