// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEnvironmentActionInput, UpdateEnvironmentActionOutput } from "../models/models_2";
import { UpdateEnvironmentAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEnvironmentActionCommand}.
 */
export interface UpdateEnvironmentActionCommandInput extends UpdateEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link UpdateEnvironmentActionCommand}.
 */
export interface UpdateEnvironmentActionCommandOutput extends UpdateEnvironmentActionOutput, __MetadataBearer {}

/**
 * Updates an environment action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, UpdateEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, UpdateEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // UpdateEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   parameters: { // ActionParameters Union: only one key present
 *     awsConsoleLink: { // AwsConsoleLinkParameters
 *       uri: "STRING_VALUE",
 *     },
 *   },
 *   name: "STRING_VALUE",
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEnvironmentActionOutput
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
 * @param UpdateEnvironmentActionCommandInput - {@link UpdateEnvironmentActionCommandInput}
 * @returns {@link UpdateEnvironmentActionCommandOutput}
 * @see {@link UpdateEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link UpdateEnvironmentActionCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There is a conflict while performing this action.
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
export class UpdateEnvironmentActionCommand extends command<UpdateEnvironmentActionCommandInput, UpdateEnvironmentActionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEnvironmentAction",
  UpdateEnvironmentAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEnvironmentActionInput;
      output: UpdateEnvironmentActionOutput;
    };
    sdk: {
      input: UpdateEnvironmentActionCommandInput;
      output: UpdateEnvironmentActionCommandOutput;
    };
  };
}
