// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  RejectEnvironmentAccountConnectionInput,
  RejectEnvironmentAccountConnectionOutput,
} from "../models/models_0";
import { RejectEnvironmentAccountConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectEnvironmentAccountConnectionCommand}.
 */
export interface RejectEnvironmentAccountConnectionCommandInput extends RejectEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link RejectEnvironmentAccountConnectionCommand}.
 */
export interface RejectEnvironmentAccountConnectionCommandOutput extends RejectEnvironmentAccountConnectionOutput, __MetadataBearer {}

/**
 * In a management account, reject an environment account connection from another environment account.
 *
 * After you reject an environment account connection request, you *can't* accept or use the rejected environment account connection.
 *
 * You *can’t* reject an environment account connection that's connected to an environment.
 *
 * For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, RejectEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, RejectEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // RejectEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new RejectEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // RejectEnvironmentAccountConnectionOutput
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
 * @param RejectEnvironmentAccountConnectionCommandInput - {@link RejectEnvironmentAccountConnectionCommandInput}
 * @returns {@link RejectEnvironmentAccountConnectionCommandOutput}
 * @see {@link RejectEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link RejectEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
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
export class RejectEnvironmentAccountConnectionCommand extends command<RejectEnvironmentAccountConnectionCommandInput, RejectEnvironmentAccountConnectionCommandOutput>(
  _ep0,
  _mw0,
  "RejectEnvironmentAccountConnection",
  RejectEnvironmentAccountConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectEnvironmentAccountConnectionInput;
      output: RejectEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: RejectEnvironmentAccountConnectionCommandInput;
      output: RejectEnvironmentAccountConnectionCommandOutput;
    };
  };
}
