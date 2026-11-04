// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteEnvironmentInput, DeleteEnvironmentOutput } from "../models/models_0";
import { DeleteEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandInput extends DeleteEnvironmentInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentCommand}.
 */
export interface DeleteEnvironmentCommandOutput extends DeleteEnvironmentOutput, __MetadataBearer {}

/**
 * Deletes an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, DeleteEnvironmentCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // DeleteEnvironmentInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentCommandInput - {@link DeleteEnvironmentCommandInput}
 * @returns {@link DeleteEnvironmentCommandOutput}
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * InternalServerException: An internal error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * ResourceNotFoundException: The resource is not available.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * ServiceUnavailableException: The service is currently unavailable.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * ValidationException: The provided input is not valid.
 *
 * @throws {@link MWAAServiceException}
 *
 * Base exception class for all service exceptions from MWAA service.
 *
 * @public
 */
export class DeleteEnvironmentCommand extends command<DeleteEnvironmentCommandInput, DeleteEnvironmentCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironment",
  DeleteEnvironment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentInput;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentCommandInput;
      output: DeleteEnvironmentCommandOutput;
    };
  };
}
