// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelineEndpointsRequest, ListPipelineEndpointsResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { ListPipelineEndpoints } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineEndpointsCommand}.
 */
export interface ListPipelineEndpointsCommandInput extends ListPipelineEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineEndpointsCommand}.
 */
export interface ListPipelineEndpointsCommandOutput extends ListPipelineEndpointsResponse, __MetadataBearer {}

/**
 * <p>Lists all pipeline endpoints in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, ListPipelineEndpointsCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, ListPipelineEndpointsCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // ListPipelineEndpointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPipelineEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineEndpointsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PipelineEndpoints: [ // PipelineEndpointsSummaryList
 * //     { // PipelineEndpoint
 * //       PipelineArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "DELETING" || "REVOKING" || "REVOKED",
 * //       VpcId: "STRING_VALUE",
 * //       VpcOptions: { // PipelineEndpointVpcOptions
 * //         SubnetIds: [ // SubnetIds
 * //           "STRING_VALUE",
 * //         ],
 * //         SecurityGroupIds: [ // SecurityGroupIds
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       IngestEndpointUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPipelineEndpointsCommandInput - {@link ListPipelineEndpointsCommandInput}
 * @returns {@link ListPipelineEndpointsCommandOutput}
 * @see {@link ListPipelineEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineEndpointsCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 *
 * @public
 */
export class ListPipelineEndpointsCommand extends $Command
  .classBuilder<
    ListPipelineEndpointsCommandInput,
    ListPipelineEndpointsCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "ListPipelineEndpoints", {})
  .n("OSISClient", "ListPipelineEndpointsCommand")
  .sc(ListPipelineEndpoints)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelineEndpointsRequest;
      output: ListPipelineEndpointsResponse;
    };
    sdk: {
      input: ListPipelineEndpointsCommandInput;
      output: ListPipelineEndpointsCommandOutput;
    };
  };
}
