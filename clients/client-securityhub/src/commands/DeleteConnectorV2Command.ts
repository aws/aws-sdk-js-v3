// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectorV2Request, DeleteConnectorV2Response } from "../models/models_2";
import { DeleteConnectorV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectorV2Command}.
 */
export interface DeleteConnectorV2CommandInput extends DeleteConnectorV2Request {}
/**
 * @public
 *
 * The output of {@link DeleteConnectorV2Command}.
 */
export interface DeleteConnectorV2CommandOutput extends DeleteConnectorV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to delete a connectorV2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteConnectorV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteConnectorV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // DeleteConnectorV2Request
 *   ConnectorId: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectorV2Command(input);
 * const response = await client.send(command);
 * // { // DeleteConnectorV2Response
 * //   EnablementStatus: "ENABLED" || "PENDING_ENABLEMENT" || "FAILED_TO_ENABLE" || "PENDING_UPDATE" || "FAILED_TO_UPDATE" || "PENDING_DELETION" || "FAILED_TO_DELETE",
 * // };
 *
 * ```
 *
 * @param DeleteConnectorV2CommandInput - {@link DeleteConnectorV2CommandInput}
 * @returns {@link DeleteConnectorV2CommandOutput}
 * @see {@link DeleteConnectorV2CommandInput} for command's `input` shape.
 * @see {@link DeleteConnectorV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class DeleteConnectorV2Command extends command<DeleteConnectorV2CommandInput, DeleteConnectorV2CommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectorV2",
  DeleteConnectorV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectorV2Request;
      output: DeleteConnectorV2Response;
    };
    sdk: {
      input: DeleteConnectorV2CommandInput;
      output: DeleteConnectorV2CommandOutput;
    };
  };
}
