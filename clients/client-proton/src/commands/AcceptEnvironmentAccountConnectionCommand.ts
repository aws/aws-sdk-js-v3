// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AcceptEnvironmentAccountConnectionInput,
  AcceptEnvironmentAccountConnectionOutput,
} from "../models/models_0";
import { AcceptEnvironmentAccountConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptEnvironmentAccountConnectionCommand}.
 */
export interface AcceptEnvironmentAccountConnectionCommandInput extends AcceptEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link AcceptEnvironmentAccountConnectionCommand}.
 */
export interface AcceptEnvironmentAccountConnectionCommandOutput extends AcceptEnvironmentAccountConnectionOutput, __MetadataBearer {}

/**
 * In a management account, an environment account connection request is accepted. When the environment account connection request is accepted, Proton can use the associated IAM role to provision environment infrastructure resources in the associated environment account.
 *
 * For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, AcceptEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, AcceptEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // AcceptEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new AcceptEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptEnvironmentAccountConnectionOutput
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
 * @param AcceptEnvironmentAccountConnectionCommandInput - {@link AcceptEnvironmentAccountConnectionCommandInput}
 * @returns {@link AcceptEnvironmentAccountConnectionCommandOutput}
 * @see {@link AcceptEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
export class AcceptEnvironmentAccountConnectionCommand extends command<AcceptEnvironmentAccountConnectionCommandInput, AcceptEnvironmentAccountConnectionCommandOutput>(
  _ep0,
  _mw0,
  "AcceptEnvironmentAccountConnection",
  AcceptEnvironmentAccountConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptEnvironmentAccountConnectionInput;
      output: AcceptEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: AcceptEnvironmentAccountConnectionCommandInput;
      output: AcceptEnvironmentAccountConnectionCommandOutput;
    };
  };
}
