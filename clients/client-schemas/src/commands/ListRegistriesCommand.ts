// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRegistriesRequest, ListRegistriesResponse } from "../models/models_0";
import { ListRegistries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandInput extends ListRegistriesRequest {}
/**
 * @public
 *
 * The output of {@link ListRegistriesCommand}.
 */
export interface ListRegistriesCommandOutput extends ListRegistriesResponse, __MetadataBearer {}

/**
 * <p>List the registries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, ListRegistriesCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, ListRegistriesCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * // import type { SchemasClientConfig } from "@aws-sdk/client-schemas";
 * const config = {}; // type is SchemasClientConfig
 * const client = new SchemasClient(config);
 * const input = { // ListRegistriesRequest
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   RegistryNamePrefix: "STRING_VALUE",
 *   Scope: "STRING_VALUE",
 * };
 * const command = new ListRegistriesCommand(input);
 * const response = await client.send(command);
 * // { // ListRegistriesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Registries: [ // __listOfRegistrySummary
 * //     { // RegistrySummary
 * //       RegistryArn: "STRING_VALUE",
 * //       RegistryName: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRegistriesCommandInput - {@link ListRegistriesCommandInput}
 * @returns {@link ListRegistriesCommandOutput}
 * @see {@link ListRegistriesCommandInput} for command's `input` shape.
 * @see {@link ListRegistriesCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 *
 * @public
 */
export class ListRegistriesCommand extends command<ListRegistriesCommandInput, ListRegistriesCommandOutput>(
  _ep0,
  _mw0,
  "ListRegistries",
  ListRegistries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRegistriesRequest;
      output: ListRegistriesResponse;
    };
    sdk: {
      input: ListRegistriesCommandInput;
      output: ListRegistriesCommandOutput;
    };
  };
}
