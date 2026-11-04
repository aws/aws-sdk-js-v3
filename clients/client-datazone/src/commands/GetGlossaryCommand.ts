// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGlossaryInput, GetGlossaryOutput } from "../models/models_1";
import { GetGlossary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGlossaryCommand}.
 */
export interface GetGlossaryCommandInput extends GetGlossaryInput {}
/**
 * @public
 *
 * The output of {@link GetGlossaryCommand}.
 */
export interface GetGlossaryCommandOutput extends GetGlossaryOutput, __MetadataBearer {}

/**
 * Gets a business glossary in Amazon DataZone.
 *
 * Prerequisites:
 *
 * - The specified glossary ID must exist and be associated with the given domain.
 * - The caller must have the `datazone:GetGlossary` permission on the domain.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetGlossaryCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetGlossaryCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetGlossaryInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetGlossaryCommand(input);
 * const response = await client.send(command);
 * // { // GetGlossaryOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   owningProjectId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "DISABLED" || "ENABLED", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   updatedBy: "STRING_VALUE",
 * //   usageRestrictions: [ // GlossaryUsageRestrictions
 * //     "ASSET_GOVERNED_TERMS",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetGlossaryCommandInput - {@link GetGlossaryCommandInput}
 * @returns {@link GetGlossaryCommandOutput}
 * @see {@link GetGlossaryCommandInput} for command's `input` shape.
 * @see {@link GetGlossaryCommandOutput} for command's `response` shape.
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
export class GetGlossaryCommand extends command<GetGlossaryCommandInput, GetGlossaryCommandOutput>(
  _ep0,
  _mw0,
  "GetGlossary",
  GetGlossary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGlossaryInput;
      output: GetGlossaryOutput;
    };
    sdk: {
      input: GetGlossaryCommandInput;
      output: GetGlossaryCommandOutput;
    };
  };
}
