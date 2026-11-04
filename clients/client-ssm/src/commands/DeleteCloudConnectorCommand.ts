// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCloudConnectorRequest, DeleteCloudConnectorResult } from "../models/models_0";
import { DeleteCloudConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCloudConnectorCommand}.
 */
export interface DeleteCloudConnectorCommandInput extends DeleteCloudConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCloudConnectorCommand}.
 */
export interface DeleteCloudConnectorCommandOutput extends DeleteCloudConnectorResult, __MetadataBearer {}

/**
 * Deletes a cloud connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteCloudConnectorCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteCloudConnectorCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteCloudConnectorRequest
 *   CloudConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCloudConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteCloudConnectorResult
 * //   CloudConnectorId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteCloudConnectorCommandInput - {@link DeleteCloudConnectorCommandInput}
 * @returns {@link DeleteCloudConnectorCommandOutput}
 * @see {@link DeleteCloudConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteCloudConnectorCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * An error occurred because of a conflict with a concurrent request or the current state of the resource. Retry your request.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified parameter to be shared could not be found.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class DeleteCloudConnectorCommand extends command<DeleteCloudConnectorCommandInput, DeleteCloudConnectorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCloudConnector",
  DeleteCloudConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCloudConnectorRequest;
      output: DeleteCloudConnectorResult;
    };
    sdk: {
      input: DeleteCloudConnectorCommandInput;
      output: DeleteCloudConnectorCommandOutput;
    };
  };
}
