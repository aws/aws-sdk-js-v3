// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateGroupProfileInput, CreateGroupProfileOutput } from "../models/models_0";
import { CreateGroupProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateGroupProfileCommand}.
 */
export interface CreateGroupProfileCommandInput extends CreateGroupProfileInput {}
/**
 * @public
 *
 * The output of {@link CreateGroupProfileCommand}.
 */
export interface CreateGroupProfileCommandOutput extends CreateGroupProfileOutput, __MetadataBearer {}

/**
 * Creates a group profile in Amazon DataZone.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateGroupProfileCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateGroupProfileCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateGroupProfileInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   groupIdentifier: "STRING_VALUE",
 *   rolePrincipalArn: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateGroupProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateGroupProfileOutput
 * //   domainId: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * //   status: "ASSIGNED" || "NOT_ASSIGNED",
 * //   groupName: "STRING_VALUE",
 * //   rolePrincipalArn: "STRING_VALUE",
 * //   rolePrincipalId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateGroupProfileCommandInput - {@link CreateGroupProfileCommandInput}
 * @returns {@link CreateGroupProfileCommandOutput}
 * @see {@link CreateGroupProfileCommandInput} for command's `input` shape.
 * @see {@link CreateGroupProfileCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the Amazon Web Services service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
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
export class CreateGroupProfileCommand extends command<CreateGroupProfileCommandInput, CreateGroupProfileCommandOutput>(
  _ep0,
  _mw0,
  "CreateGroupProfile",
  CreateGroupProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateGroupProfileInput;
      output: CreateGroupProfileOutput;
    };
    sdk: {
      input: CreateGroupProfileCommandInput;
      output: CreateGroupProfileCommandOutput;
    };
  };
}
