// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentCredentialsInput, GetEnvironmentCredentialsOutput } from "../models/models_1";
import { GetEnvironmentCredentials$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCredentialsCommand}.
 */
export interface GetEnvironmentCredentialsCommandInput extends GetEnvironmentCredentialsInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCredentialsCommand}.
 */
export interface GetEnvironmentCredentialsCommandOutput extends GetEnvironmentCredentialsOutput, __MetadataBearer {}

/**
 * Gets the credentials of an environment in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentCredentialsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentCredentialsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentCredentialsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentCredentialsOutput
 * //   accessKeyId: "STRING_VALUE",
 * //   secretAccessKey: "STRING_VALUE",
 * //   sessionToken: "STRING_VALUE",
 * //   expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCredentialsCommandInput - {@link GetEnvironmentCredentialsCommandInput}
 * @returns {@link GetEnvironmentCredentialsCommandOutput}
 * @see {@link GetEnvironmentCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCredentialsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource cannot be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You do not have permission to perform this action.
 *
 * @throws {@link DataZoneServiceException}
 *
 * Base exception class for all service exceptions from DataZone service.
 *
 * @public
 */
export class GetEnvironmentCredentialsCommand extends command<GetEnvironmentCredentialsCommandInput, GetEnvironmentCredentialsCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentCredentials",
  GetEnvironmentCredentials$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentCredentialsInput;
      output: GetEnvironmentCredentialsOutput;
    };
    sdk: {
      input: GetEnvironmentCredentialsCommandInput;
      output: GetEnvironmentCredentialsCommandOutput;
    };
  };
}
