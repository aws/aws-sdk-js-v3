// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePipelineEndpointRequest, DeletePipelineEndpointResponse } from "../models/models_0";
import { DeletePipelineEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePipelineEndpointCommand}.
 */
export interface DeletePipelineEndpointCommandInput extends DeletePipelineEndpointRequest {}
/**
 * @public
 *
 * The output of {@link DeletePipelineEndpointCommand}.
 */
export interface DeletePipelineEndpointCommandOutput extends DeletePipelineEndpointResponse, __MetadataBearer {}

/**
 * <p>Deletes a VPC endpoint for an OpenSearch Ingestion pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OSISClient, DeletePipelineEndpointCommand } from "@aws-sdk/client-osis"; // ES Modules import
 * // const { OSISClient, DeletePipelineEndpointCommand } = require("@aws-sdk/client-osis"); // CommonJS import
 * // import type { OSISClientConfig } from "@aws-sdk/client-osis";
 * const config = {}; // type is OSISClientConfig
 * const client = new OSISClient(config);
 * const input = { // DeletePipelineEndpointRequest
 *   EndpointId: "STRING_VALUE", // required
 * };
 * const command = new DeletePipelineEndpointCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeletePipelineEndpointCommandInput - {@link DeletePipelineEndpointCommandInput}
 * @returns {@link DeletePipelineEndpointCommandOutput}
 * @see {@link DeletePipelineEndpointCommandInput} for command's `input` shape.
 * @see {@link DeletePipelineEndpointCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for missing or invalid input fields.</p>
 *
 * @throws {@link OSISServiceException}
 * <p>Base exception class for all service exceptions from OSIS service.</p>
 *
 *
 * @public
 */
export class DeletePipelineEndpointCommand extends command<DeletePipelineEndpointCommandInput, DeletePipelineEndpointCommandOutput>(
  _ep0,
  _mw0,
  "DeletePipelineEndpoint",
  DeletePipelineEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePipelineEndpointRequest;
      output: {};
    };
    sdk: {
      input: DeletePipelineEndpointCommandInput;
      output: DeletePipelineEndpointCommandOutput;
    };
  };
}
