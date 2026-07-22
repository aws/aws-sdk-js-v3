// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSecurityConfigurationRequest, DeleteSecurityConfigurationResponse } from "../models/models_0";
import { DeleteSecurityConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSecurityConfigurationCommand}.
 */
export interface DeleteSecurityConfigurationCommandInput extends DeleteSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityConfigurationCommand}.
 */
export interface DeleteSecurityConfigurationCommandOutput extends DeleteSecurityConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes a security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRContainersClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-emr-containers"; // ES Modules import
 * // const { EMRContainersClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-emr-containers"); // CommonJS import
 * // import type { EMRContainersClientConfig } from "@aws-sdk/client-emr-containers";
 * const config = {}; // type is EMRContainersClientConfig
 * const client = new EMRContainersClient(config);
 * const input = { // DeleteSecurityConfigurationRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSecurityConfigurationResponse
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSecurityConfigurationCommandInput - {@link DeleteSecurityConfigurationCommandInput}
 * @returns {@link DeleteSecurityConfigurationCommandOutput}
 * @see {@link DeleteSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRContainersClientResolvedConfig | config} for EMRContainersClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This is an internal server exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>There are invalid parameters in the client request.</p>
 *
 * @throws {@link EMRContainersServiceException}
 * <p>Base exception class for all service exceptions from EMRContainers service.</p>
 *
 *
 * @public
 */
export class DeleteSecurityConfigurationCommand extends command<DeleteSecurityConfigurationCommandInput, DeleteSecurityConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSecurityConfiguration",
  DeleteSecurityConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityConfigurationRequest;
      output: DeleteSecurityConfigurationResponse;
    };
    sdk: {
      input: DeleteSecurityConfigurationCommandInput;
      output: DeleteSecurityConfigurationCommandOutput;
    };
  };
}
