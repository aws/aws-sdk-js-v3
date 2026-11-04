// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RevokePipelineEndpointConnectionsRequest,
  RevokePipelineEndpointConnectionsResponse,
} from "../models/models_0";
import { RevokePipelineEndpointConnections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface RevokePipelineEndpointConnectionsCommandOutput extends RevokePipelineEndpointConnectionsResponse, __MetadataBearer {}

/**
 * Revokes pipeline endpoints from specified endpoint IDs.
 *
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
 *
 * You don't have permissions to access the resource.
 *
 * @throws {@link DisabledOperationException} (client fault)
 *
 * Exception is thrown when an operation has been disabled.
 *
 * @throws {@link InternalException} (server fault)
 *
 * The request failed because of an unknown error, exception, or failure (the failure is internal to the service).
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * You attempted to create more than the allowed number of tags.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An exception for missing or invalid input fields.
 *
 * @throws {@link OSISServiceException}
 *
 * Base exception class for all service exceptions from OSIS service.
 *
 * @public
 */
export class RevokePipelineEndpointConnectionsCommand extends command<RevokePipelineEndpointConnectionsCommandInput, RevokePipelineEndpointConnectionsCommandOutput>(
  _ep0,
  _mw0,
  "RevokePipelineEndpointConnections",
  RevokePipelineEndpointConnections$
) {
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
