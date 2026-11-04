// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEnvironmentProfileInput, GetEnvironmentProfileOutput } from "../models/models_1";
import { GetEnvironmentProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEnvironmentProfileCommand}.
 */
export interface GetEnvironmentProfileCommandInput extends GetEnvironmentProfileInput {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentProfileCommand}.
 */
export interface GetEnvironmentProfileCommandOutput extends GetEnvironmentProfileOutput, __MetadataBearer {}

/**
 * Gets an evinronment profile in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetEnvironmentProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetEnvironmentProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetEnvironmentProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentProfileOutput
 * //   id: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   awsAccountId: "STRING_VALUE",
 * //   awsAccountRegion: "STRING_VALUE",
 * //   createdBy: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   environmentBlueprintId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE",
 * //   userParameters: [ // CustomParameterList
 * //     { // CustomParameter
 * //       keyName: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       fieldType: "STRING_VALUE", // required
 * //       defaultValue: "STRING_VALUE",
 * //       isEditable: true || false,
 * //       isOptional: true || false,
 * //       isUpdateSupported: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEnvironmentProfileCommandInput - {@link GetEnvironmentProfileCommandInput}
 * @returns {@link GetEnvironmentProfileCommandOutput}
 * @see {@link GetEnvironmentProfileCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentProfileCommandOutput} for command's `response` shape.
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
export class GetEnvironmentProfileCommand extends command<GetEnvironmentProfileCommandInput, GetEnvironmentProfileCommandOutput>(
  _ep0,
  _mw0,
  "GetEnvironmentProfile",
  GetEnvironmentProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentProfileInput;
      output: GetEnvironmentProfileOutput;
    };
    sdk: {
      input: GetEnvironmentProfileCommandInput;
      output: GetEnvironmentProfileCommandOutput;
    };
  };
}
