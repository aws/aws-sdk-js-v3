// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateEnvironmentActionInput, CreateEnvironmentActionOutput } from "../models/models_0";
import { CreateEnvironmentAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateEnvironmentActionCommand}.
 */
export interface CreateEnvironmentActionCommandInput extends CreateEnvironmentActionInput {}
/**
 * @public
 *
 * The output of {@link CreateEnvironmentActionCommand}.
 */
export interface CreateEnvironmentActionCommandOutput extends CreateEnvironmentActionOutput, __MetadataBearer {}

/**
 * Creates an action for the environment, for example, creates a console link for an analytics tool that is available in this environment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateEnvironmentActionCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateEnvironmentActionCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateEnvironmentActionInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   parameters: { // ActionParameters Union: only one key present
 *     awsConsoleLink: { // AwsConsoleLinkParameters
 *       uri: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateEnvironmentActionCommand(input);
 * const response = await client.send(command);
 * // { // CreateEnvironmentActionOutput
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
 * @param CreateEnvironmentActionCommandInput - {@link CreateEnvironmentActionCommandInput}
 * @returns {@link CreateEnvironmentActionCommandOutput}
 * @see {@link CreateEnvironmentActionCommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentActionCommandOutput} for command's `response` shape.
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
export class CreateEnvironmentActionCommand extends command<CreateEnvironmentActionCommandInput, CreateEnvironmentActionCommandOutput>(
  _ep0,
  _mw0,
  "CreateEnvironmentAction",
  CreateEnvironmentAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEnvironmentActionInput;
      output: CreateEnvironmentActionOutput;
    };
    sdk: {
      input: CreateEnvironmentActionCommandInput;
      output: CreateEnvironmentActionCommandOutput;
    };
  };
}
