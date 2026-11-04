// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainUnitsForParentInput, ListDomainUnitsForParentOutput } from "../models/models_1";
import { ListDomainUnitsForParent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainUnitsForParentCommand}.
 */
export interface ListDomainUnitsForParentCommandInput extends ListDomainUnitsForParentInput {}
/**
 * @public
 *
 * The output of {@link ListDomainUnitsForParentCommand}.
 */
export interface ListDomainUnitsForParentCommandOutput extends ListDomainUnitsForParentOutput, __MetadataBearer {}

/**
 * Lists child domain units for the specified parent domain unit.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDomainUnitsForParentCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDomainUnitsForParentCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListDomainUnitsForParentInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   parentDomainUnitIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainUnitsForParentCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainUnitsForParentOutput
 * //   items: [ // DomainUnitSummaries // required
 * //     { // DomainUnitSummary
 * //       name: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainUnitsForParentCommandInput - {@link ListDomainUnitsForParentCommandInput}
 * @returns {@link ListDomainUnitsForParentCommandOutput}
 * @see {@link ListDomainUnitsForParentCommandInput} for command's `input` shape.
 * @see {@link ListDomainUnitsForParentCommandOutput} for command's `response` shape.
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
export class ListDomainUnitsForParentCommand extends command<ListDomainUnitsForParentCommandInput, ListDomainUnitsForParentCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainUnitsForParent",
  ListDomainUnitsForParent$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainUnitsForParentInput;
      output: ListDomainUnitsForParentOutput;
    };
    sdk: {
      input: ListDomainUnitsForParentCommandInput;
      output: ListDomainUnitsForParentCommandOutput;
    };
  };
}
