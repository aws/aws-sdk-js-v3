// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteEnvironmentAccountConnectionInput,
  DeleteEnvironmentAccountConnectionOutput,
} from "../models/models_0";
import { DeleteEnvironmentAccountConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentAccountConnectionCommand}.
 */
export interface DeleteEnvironmentAccountConnectionCommandInput extends DeleteEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentAccountConnectionCommand}.
 */
export interface DeleteEnvironmentAccountConnectionCommandOutput extends DeleteEnvironmentAccountConnectionOutput, __MetadataBearer {}

/**
 * In an environment account, delete an environment account connection.
 *
 * After you delete an environment account connection that’s in use by an Proton environment, Proton *can’t* manage the environment infrastructure resources until a new environment account connection is accepted for the environment account and associated environment. You're responsible for cleaning up provisioned resources that remain without an environment connection.
 *
 * For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, DeleteEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, DeleteEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // DeleteEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEnvironmentAccountConnectionOutput
 * //   environmentAccountConnection: { // EnvironmentAccountConnection
 * //     id: "STRING_VALUE", // required
 * //     arn: "STRING_VALUE", // required
 * //     managementAccountId: "STRING_VALUE", // required
 * //     environmentAccountId: "STRING_VALUE", // required
 * //     roleArn: "STRING_VALUE", // required
 * //     environmentName: "STRING_VALUE", // required
 * //     requestedAt: new Date("TIMESTAMP"), // required
 * //     lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     componentRoleArn: "STRING_VALUE",
 * //     codebuildRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteEnvironmentAccountConnectionCommandInput - {@link DeleteEnvironmentAccountConnectionCommandInput}
 * @returns {@link DeleteEnvironmentAccountConnectionCommandOutput}
 * @see {@link DeleteEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request *couldn't* be made due to a conflicting operation or resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request failed to register with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource *wasn't* found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input is invalid or an out-of-range value was supplied for the input parameter.
 *
 * @throws {@link ProtonServiceException}
 *
 * Base exception class for all service exceptions from Proton service.
 *
 * @public
 */
export class DeleteEnvironmentAccountConnectionCommand extends command<DeleteEnvironmentAccountConnectionCommandInput, DeleteEnvironmentAccountConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteEnvironmentAccountConnection",
  DeleteEnvironmentAccountConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentAccountConnectionInput;
      output: DeleteEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: DeleteEnvironmentAccountConnectionCommandInput;
      output: DeleteEnvironmentAccountConnectionCommandOutput;
    };
  };
}
