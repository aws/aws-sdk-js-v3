// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateListingChangeSetInput, CreateListingChangeSetOutput } from "../models/models_0";
import { CreateListingChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateListingChangeSetCommand}.
 */
export interface CreateListingChangeSetCommandInput extends CreateListingChangeSetInput {}
/**
 * @public
 *
 * The output of {@link CreateListingChangeSetCommand}.
 */
export interface CreateListingChangeSetCommandOutput extends CreateListingChangeSetOutput, __MetadataBearer {}

/**
 * <p>Publishes a listing (a record of an asset at a given time) or removes a listing from the catalog. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateListingChangeSetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateListingChangeSetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // CreateListingChangeSetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET" || "DATA_PRODUCT", // required
 *   entityRevision: "STRING_VALUE",
 *   action: "PUBLISH" || "UNPUBLISH", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateListingChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateListingChangeSetOutput
 * //   listingId: "STRING_VALUE", // required
 * //   listingRevision: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "INACTIVE", // required
 * // };
 *
 * ```
 *
 * @param CreateListingChangeSetCommandInput - {@link CreateListingChangeSetCommandInput}
 * @returns {@link CreateListingChangeSetCommandOutput}
 * @see {@link CreateListingChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateListingChangeSetCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
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
export class CreateListingChangeSetCommand extends $Command
  .classBuilder<
    CreateListingChangeSetCommandInput,
    CreateListingChangeSetCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "CreateListingChangeSet", {})
  .n("DataZoneClient", "CreateListingChangeSetCommand")
  .sc(CreateListingChangeSet$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateListingChangeSetInput;
      output: CreateListingChangeSetOutput;
    };
    sdk: {
      input: CreateListingChangeSetCommandInput;
      output: CreateListingChangeSetCommandOutput;
    };
  };
}
