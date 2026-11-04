// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateWebLoginTokenRequest, CreateWebLoginTokenResponse } from "../models/models_0";
import { CreateWebLoginToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateWebLoginTokenCommand}.
 */
export interface CreateWebLoginTokenCommandInput extends CreateWebLoginTokenRequest {}
/**
 * @public
 *
 * The output of {@link CreateWebLoginTokenCommand}.
 */
export interface CreateWebLoginTokenCommandOutput extends CreateWebLoginTokenResponse, __MetadataBearer {}

/**
 * Creates a web login token for the Airflow Web UI. To learn more, see [Creating an Apache Airflow web login token](https://docs.aws.amazon.com/mwaa/latest/userguide/call-mwaa-apis-web.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, CreateWebLoginTokenCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, CreateWebLoginTokenCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // CreateWebLoginTokenRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new CreateWebLoginTokenCommand(input);
 * const response = await client.send(command);
 * // { // CreateWebLoginTokenResponse
 * //   WebToken: "STRING_VALUE",
 * //   WebServerHostname: "STRING_VALUE",
 * //   IamIdentity: "STRING_VALUE",
 * //   AirflowIdentity: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateWebLoginTokenCommandInput - {@link CreateWebLoginTokenCommandInput}
 * @returns {@link CreateWebLoginTokenCommandOutput}
 * @see {@link CreateWebLoginTokenCommandInput} for command's `input` shape.
 * @see {@link CreateWebLoginTokenCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see [Accessing an Amazon MWAA environment](https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html).
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * InternalServerException: An internal error has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * ResourceNotFoundException: The resource is not available.
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
export class CreateWebLoginTokenCommand extends command<CreateWebLoginTokenCommandInput, CreateWebLoginTokenCommandOutput>(
  _ep0,
  _mw0,
  "CreateWebLoginToken",
  CreateWebLoginToken$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateWebLoginTokenRequest;
      output: CreateWebLoginTokenResponse;
    };
    sdk: {
      input: CreateWebLoginTokenCommandInput;
      output: CreateWebLoginTokenCommandOutput;
    };
  };
}
