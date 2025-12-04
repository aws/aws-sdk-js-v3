// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { PopulateIdMappingTableInput, PopulateIdMappingTableOutput } from "../models/models_0";
import { PopulateIdMappingTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Defines the information that's necessary to populate an ID mapping table.</p>
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
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class PopulateIdMappingTableCommand extends $Command
  .classBuilder<
    PopulateIdMappingTableCommandInput,
    PopulateIdMappingTableCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "PopulateIdMappingTable", {})
  .n("CleanRoomsClient", "PopulateIdMappingTableCommand")
  .sc(PopulateIdMappingTable)
  .build() {
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
