// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PopulateIdMappingTableInput, PopulateIdMappingTableOutput } from "../models/models_0";
import { PopulateIdMappingTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PopulateIdMappingTableCommand}.
 */
export interface PopulateIdMappingTableCommandInput extends PopulateIdMappingTableInput {}
/**
 * @public
 *
 * The output of {@link PopulateIdMappingTableCommand}.
 */
export interface PopulateIdMappingTableCommandOutput extends PopulateIdMappingTableOutput, __MetadataBearer {}

/**
 * Defines the information that's necessary to populate an ID mapping table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, PopulateIdMappingTableCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, PopulateIdMappingTableCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // PopulateIdMappingTableInput
 *   idMappingTableIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 *   jobType: "BATCH" || "INCREMENTAL" || "DELETE_ONLY",
 * };
 * const command = new PopulateIdMappingTableCommand(input);
 * const response = await client.send(command);
 * // { // PopulateIdMappingTableOutput
 * //   idMappingJobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param PopulateIdMappingTableCommandInput - {@link PopulateIdMappingTableCommandInput}
 * @returns {@link PopulateIdMappingTableCommandOutput}
 * @see {@link PopulateIdMappingTableCommandInput} for command's `input` shape.
 * @see {@link PopulateIdMappingTableCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request denied because service quota has been exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class PopulateIdMappingTableCommand extends command<PopulateIdMappingTableCommandInput, PopulateIdMappingTableCommandOutput>(
  _ep0,
  _mw0,
  "PopulateIdMappingTable",
  PopulateIdMappingTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PopulateIdMappingTableInput;
      output: PopulateIdMappingTableOutput;
    };
    sdk: {
      input: PopulateIdMappingTableCommandInput;
      output: PopulateIdMappingTableCommandOutput;
    };
  };
}
