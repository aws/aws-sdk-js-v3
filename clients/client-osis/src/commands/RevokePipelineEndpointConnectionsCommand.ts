// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RevokePipelineEndpointConnectionsRequest,
  RevokePipelineEndpointConnectionsResponse,
} from "../models/models_0";
import { OSISClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OSISClient";
import { RevokePipelineEndpointConnections } from "../schemas/schemas_2_Resource";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokePipelineEndpointConnectionsCommand}.
 */
export interface RevokePipelineEndpointConnectionsCommandInput extends RevokePipelineEndpointConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link RevokePipelineEndpointConnectionsCommand}.
 */
export interface RevokePipelineEndpointConnectionsCommandOutput
  extends RevokePipelineEndpointConnectionsResponse,
    __MetadataBearer {}

/**
 * <p>Revokes pipeline endpoints from specified endpoint IDs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, RevokePipelineEndpointConnectionsCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, RevokePipelineEndpointConnectionsCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // RevokePipelineEndpointConnectionsRequest
 *   PipelineArn: "STRING_VALUE", // required
 *   EndpointIds: [ // PipelineEndpointIdsList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RevokePipelineEndpointConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // RevokePipelineEndpointConnectionsResponse
 * //   PipelineArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RevokePipelineEndpointConnectionsCommandInput - {@link RevokePipelineEndpointConnectionsCommandInput}
 * @returns {@link RevokePipelineEndpointConnectionsCommandOutput}
 * @see {@link RevokePipelineEndpointConnectionsCommandInput} for command's `input` shape.
 * @see {@link RevokePipelineEndpointConnectionsCommandOutput} for command's `response` shape.
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
export class RevokePipelineEndpointConnectionsCommand extends $Command
  .classBuilder<
    RevokePipelineEndpointConnectionsCommandInput,
    RevokePipelineEndpointConnectionsCommandOutput,
    OSISClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OSISClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchIngestionService", "RevokePipelineEndpointConnections", {})
  .n("OSISClient", "RevokePipelineEndpointConnectionsCommand")
  .sc(RevokePipelineEndpointConnections)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokePipelineEndpointConnectionsRequest;
      output: RevokePipelineEndpointConnectionsResponse;
    };
    sdk: {
      input: RevokePipelineEndpointConnectionsCommandInput;
      output: RevokePipelineEndpointConnectionsCommandOutput;
    };
  };
}
