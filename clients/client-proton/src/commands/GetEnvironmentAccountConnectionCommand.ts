// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentAccountConnectionInput, GetEnvironmentAccountConnectionOutput } from "../models/models_0";
import { GetEnvironmentAccountConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentAccountConnectionCommand}.
 */
export interface GetEnvironmentAccountConnectionCommandInput extends GetEnvironmentAccountConnectionInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentAccountConnectionCommand}.
 */
export interface GetEnvironmentAccountConnectionCommandOutput extends GetEnvironmentAccountConnectionOutput, __MetadataBearer {}

/**
 * In an environment account, get the detailed data for an environment account connection.
 *
 * For more information, see [Environment account connections](https://docs.aws.amazon.com/proton/latest/userguide/ag-env-account-connections.html) in the *Proton User guide*.
 *
 * @deprecated (since 10/07/2025) AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetEnvironmentAccountConnectionCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetEnvironmentAccountConnectionCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // GetEnvironmentAccountConnectionInput
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentAccountConnectionCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentAccountConnectionOutput
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
 * @param GetEnvironmentAccountConnectionCommandInput - {@link GetEnvironmentAccountConnectionCommandInput}
 * @returns {@link GetEnvironmentAccountConnectionCommandOutput}
 * @see {@link GetEnvironmentAccountConnectionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentAccountConnectionCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * There *isn't* sufficient access for performing this action.
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
export class GetEnvironmentAccountConnectionCommand extends command<GetEnvironmentAccountConnectionCommandInput, GetEnvironmentAccountConnectionCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentAccountConnection",
  GetEnvironmentAccountConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentAccountConnectionInput;
      output: GetEnvironmentAccountConnectionOutput;
    };
    sdk: {
      input: GetEnvironmentAccountConnectionCommandInput;
      output: GetEnvironmentAccountConnectionCommandOutput;
    };
  };
}
