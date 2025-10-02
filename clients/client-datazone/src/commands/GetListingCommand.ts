// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetListingInput, GetListingOutput, GetListingOutputFilterSensitiveLog } from "../models/models_1";
import { de_GetListingCommand, se_GetListingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetListingCommand}.
 */
export interface GetListingCommandInput extends GetListingInput {}
/**
 * @public
 *
 * The output of {@link GetListingCommand}.
 */
export interface GetListingCommandOutput extends GetListingOutput, __MetadataBearer {}

/**
 * <p>Gets a listing (a record of an asset at a given time). If you specify a listing version, only details that are specific to that version are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetListingCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetListingCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetListingInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   listingRevision: "STRING_VALUE",
 * };
 * const command = new GetListingCommand(input);
 * const response = await client.send(command);
 * // { // GetListingOutput
 * //   domainId: "STRING_VALUE", // required
 * //   id: "STRING_VALUE", // required
 * //   listingRevision: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   updatedBy: "STRING_VALUE",
 * //   item: { // ListingItem Union: only one key present
 * //     assetListing: { // AssetListing
 * //       assetId: "STRING_VALUE",
 * //       assetRevision: "STRING_VALUE",
 * //       assetType: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       forms: "STRING_VALUE",
 * //       latestTimeSeriesDataPointForms: [ // TimeSeriesDataPointSummaryFormOutputList
 * //         { // TimeSeriesDataPointSummaryFormOutput
 * //           formName: "STRING_VALUE", // required
 * //           typeIdentifier: "STRING_VALUE", // required
 * //           typeRevision: "STRING_VALUE",
 * //           timestamp: new Date("TIMESTAMP"), // required
 * //           contentSummary: "STRING_VALUE",
 * //           id: "STRING_VALUE",
 * //         },
 * //       ],
 * //       glossaryTerms: [ // DetailedGlossaryTerms
 * //         { // DetailedGlossaryTerm
 * //           name: "STRING_VALUE",
 * //           shortDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       governedGlossaryTerms: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           shortDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       owningProjectId: "STRING_VALUE",
 * //     },
 * //     dataProductListing: { // DataProductListing
 * //       dataProductId: "STRING_VALUE",
 * //       dataProductRevision: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       forms: "STRING_VALUE",
 * //       glossaryTerms: [
 * //         {
 * //           name: "STRING_VALUE",
 * //           shortDescription: "STRING_VALUE",
 * //         },
 * //       ],
 * //       owningProjectId: "STRING_VALUE",
 * //       items: [ // ListingSummaries
 * //         { // ListingSummary
 * //           listingId: "STRING_VALUE",
 * //           listingRevision: "STRING_VALUE",
 * //           glossaryTerms: [
 * //             {
 * //               name: "STRING_VALUE",
 * //               shortDescription: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   status: "CREATING" || "ACTIVE" || "INACTIVE",
 * // };
 *
 * ```
 *
 * @param GetListingCommandInput - {@link GetListingCommandInput}
 * @returns {@link GetListingCommandOutput}
 * @see {@link GetListingCommandInput} for command's `input` shape.
 * @see {@link GetListingCommandOutput} for command's `response` shape.
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
export class GetListingCommand extends $Command
  .classBuilder<
    GetListingCommandInput,
    GetListingCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "GetListing", {})
  .n("DataZoneClient", "GetListingCommand")
  .f(void 0, GetListingOutputFilterSensitiveLog)
  .ser(se_GetListingCommand)
  .de(de_GetListingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetListingInput;
      output: GetListingOutput;
    };
    sdk: {
      input: GetListingCommandInput;
      output: GetListingCommandOutput;
    };
  };
}
