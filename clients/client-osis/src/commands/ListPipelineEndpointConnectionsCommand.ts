// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListPipelineEndpointConnectionsRequest,
  ListPipelineEndpointConnectionsResponse,
} from "../models/models_0";
import type { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { ListPipelineEndpointConnections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPipelineEndpointConnectionsCommand}.
 */
export interface ListPipelineEndpointConnectionsCommandInput extends ListPipelineEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPipelineEndpointConnectionsCommand}.
 */
export interface ListPipelineEndpointConnectionsCommandOutput
  extends ListPipelineEndpointConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Lists the pipeline endpoints connected to pipelines in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, ListPipelineEndpointConnectionsCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, ListPipelineEndpointConnectionsCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // ListPipelineEndpointConnectionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPipelineEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPipelineEndpointConnectionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   PipelineEndpointConnections: [ // PipelineEndpointConnectionsSummaryList
 * //     { // PipelineEndpointConnection
 * //       PipelineArn: "STRING_VALUE",
 * //       EndpointId: "STRING_VALUE",
 * //       Status: "CREATING" || "ACTIVE" || "CREATE_FAILED" || "DELETING" || "REVOKING" || "REVOKED",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPipelineEndpointConnectionsCommandInput - {@link ListPipelineEndpointConnectionsCommandInput}
 * @returns {@link ListPipelineEndpointConnectionsCommandOutput}
 * @see {@link ListPipelineEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineEndpointConnectionsCommandOutput} for command's `response` shape.
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
export class ListPipelineEndpointConnectionsCommand extends $Command
  .classBuilder<
    ListPipelineEndpointConnectionsCommandInput,
    ListPipelineEndpointConnectionsCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "ListPipelineEndpointConnections", {})
  .n("OSISClient", "ListPipelineEndpointConnectionsCommand")
  .sc(ListPipelineEndpointConnections$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPipelineEndpointConnectionsRequest;
      output: ListPipelineEndpointConnectionsResponse;
    };
    sdk: {
      input: ListPipelineEndpointConnectionsCommandInput;
      output: ListPipelineEndpointConnectionsCommandOutput;
    };
  };
}
