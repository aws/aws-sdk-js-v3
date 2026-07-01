// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteTargetAccountConfigurationRequest,
  DeleteTargetAccountConfigurationResponse,
} from "../models/models_0";
import { DeleteTargetAccountConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteTargetAccountConfigurationCommand}.
 */
export interface DeleteTargetAccountConfigurationCommandInput extends DeleteTargetAccountConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTargetAccountConfigurationCommand}.
 */
export interface DeleteTargetAccountConfigurationCommandOutput extends DeleteTargetAccountConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified target account configuration of the experiment template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FisClient, DeleteTargetAccountConfigurationCommand } from "@aws-sdk/client-fis"; // ES Modules import
 * // const { FisClient, DeleteTargetAccountConfigurationCommand } = require("@aws-sdk/client-fis"); // CommonJS import
 * // import type { FisClientConfig } from "@aws-sdk/client-fis";
 * const config = {}; // type is FisClientConfig
 * const client = new FisClient(config);
 * const input = { // DeleteTargetAccountConfigurationRequest
 *   experimentTemplateId: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE", // required
 * };
 * const command = new DeleteTargetAccountConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTargetAccountConfigurationResponse
 * //   targetAccountConfiguration: { // TargetAccountConfiguration
 * //     roleArn: "STRING_VALUE",
 * //     accountId: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteTargetAccountConfigurationCommandInput - {@link DeleteTargetAccountConfigurationCommandInput}
 * @returns {@link DeleteTargetAccountConfigurationCommandOutput}
 * @see {@link DeleteTargetAccountConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteTargetAccountConfigurationCommandOutput} for command's `response` shape.
 * @see {@link FisClientResolvedConfig | config} for FisClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified input is not valid, or fails to satisfy the constraints for the request.</p>
 *
 * @throws {@link FisServiceException}
 * <p>Base exception class for all service exceptions from Fis service.</p>
 *
 *
 * @public
 */
export class DeleteTargetAccountConfigurationCommand extends command<DeleteTargetAccountConfigurationCommandInput, DeleteTargetAccountConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteTargetAccountConfiguration",
  DeleteTargetAccountConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTargetAccountConfigurationRequest;
      output: DeleteTargetAccountConfigurationResponse;
    };
    sdk: {
      input: DeleteTargetAccountConfigurationCommandInput;
      output: DeleteTargetAccountConfigurationCommandOutput;
    };
  };
}
