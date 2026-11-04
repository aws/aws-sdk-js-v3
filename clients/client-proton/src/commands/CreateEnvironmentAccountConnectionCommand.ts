// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateEnvironmentAccountConnectionInput,
  CreateEnvironmentAccountConnectionOutput,
} from "../models/models_0";
import { CreateEnvironmentAccountConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentAccountConnectionCommand}.
 */
export interface CreateEnvironmentAccountConnectionCommandInput extends CreateEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentAccountConnectionCommand}.
 */
export interface CreateEnvironmentAccountConnectionCommandOutput extends CreateEnvironmentAccountConnectionOutput, __MetadataBearer {}

/**
 * Create an environment account connection in an environment account so that environment infrastructure resources can be provisioned in the environment account from a management account.
 *
 * An environment account connection is a secure bi-directional connection between a *management account* and an *environment account* that maintains authorization and permissions. For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, CreateEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, CreateEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // CreateEnvironmentAccountConnectionInput
 *   clientToken: "STRING_VALUE",
 *   managementAccountId: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   environmentName: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *     },
 *   ],
 *   componentRoleArn: "STRING_VALUE",
 *   codebuildRoleArn: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentAccountConnectionOutput
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
 * @param CreateEnvironmentAccountConnectionCommandInput - {@link CreateEnvironmentAccountConnectionCommandInput}
 * @returns {@link CreateEnvironmentAccountConnectionCommandOutput}
 * @see {@link CreateEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * A quota was exceeded. For more information, see [Proton Quotas](https://docs.aws.amazon.com/proton/latest/userguide/ag-limits.html) in the *Proton User Guide*.
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
export class CreateEnvironmentAccountConnectionCommand extends command<CreateEnvironmentAccountConnectionCommandInput, CreateEnvironmentAccountConnectionCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnvironmentAccountConnection",
  CreateEnvironmentAccountConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentAccountConnectionInput;
      output: CreateEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: CreateEnvironmentAccountConnectionCommandInput;
      output: CreateEnvironmentAccountConnectionCommandOutput;
    };
  };
}
