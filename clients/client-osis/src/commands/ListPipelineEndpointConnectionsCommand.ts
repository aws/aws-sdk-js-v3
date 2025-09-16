// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPipelineEndpointConnectionsRequest, ListPipelineEndpointConnectionsResponse } from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import {
  de_ListPipelineEndpointConnectionsCommand,
  se_ListPipelineEndpointConnectionsCommand,
} from "../protocols/Aws_restJson1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonOpenSearchIngestionService", "ListPipelineEndpointConnections", {})
  .n("OSISClient", "ListPipelineEndpointConnectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListPipelineEndpointConnectionsCommand)
  .de(de_ListPipelineEndpointConnectionsCommand)
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
