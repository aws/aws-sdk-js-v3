// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentActionInput, GetEnvironmentActionOutput } from "../models/models_1";
import { GetEnvironmentAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentActionCommand}.
 */
export interface GetEnvironmentActionCommandInput extends GetEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentActionCommand}.
 */
export interface GetEnvironmentActionCommandOutput extends GetEnvironmentActionOutput, __MetadataBearer {}

/**
 * Gets the specified environment action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentActionOutput
 * //   domainId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   parameters: { // ActionParameters Union: only one key present
 * //     awsConsoleLink: { // AwsConsoleLinkParameters
 * //       uri: "STRING_VALUE",
 * //     },
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetEnvironmentActionCommandInput - {@link GetEnvironmentActionCommandInput}
 * @returns {@link GetEnvironmentActionCommandOutput}
 * @see {@link GetEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentActionCommandOutput} for command's `response` shape.
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
export class GetEnvironmentActionCommand extends command<GetEnvironmentActionCommandInput, GetEnvironmentActionCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentAction",
  GetEnvironmentAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentActionInput;
      output: GetEnvironmentActionOutput;
    };
    sdk: {
      input: GetEnvironmentActionCommandInput;
      output: GetEnvironmentActionCommandOutput;
    };
  };
}
