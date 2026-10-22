// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDesignationsInput, ListDesignationsOutput } from "../models/models_1";
import { ListDesignations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDesignationsCommand}.
 */
export interface ListDesignationsCommandInput extends ListDesignationsInput {}
/**
 * @public
 *
 * The output of {@link ListDesignationsCommand}.
 */
export interface ListDesignationsCommandOutput extends ListDesignationsOutput, __MetadataBearer {}

/**
 * Lists the designations in a domain. Returns system-managed designations
 * first, followed by user-created designations sorted alphabetically by name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDesignationsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDesignationsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // ListDesignationsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDesignationsCommand(input);
 * const response = await client.send(command);
 * // { // ListDesignationsOutput
 * //   items: [ // DesignationSummaries
 * //     { // DesignationSummary
 * //       domainId: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       designationType: "MANAGED" || "USER_CREATED",
 * //       deletionProtection: true || false, // required
 * //       createdBy: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDesignationsCommandInput - {@link ListDesignationsCommandInput}
 * @returns {@link ListDesignationsCommandOutput}
 * @see {@link ListDesignationsCommandInput} for command's `input` shape.
 * @see {@link ListDesignationsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListDesignationsCommand extends command<ListDesignationsCommandInput, ListDesignationsCommandOutput>(
  _ep0,
  _mw0,
  "ListDesignations",
  ListDesignations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDesignationsInput;
      output: ListDesignationsOutput;
    };
    sdk: {
      input: ListDesignationsCommandInput;
      output: ListDesignationsCommandOutput;
    };
  };
}
