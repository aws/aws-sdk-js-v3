// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetListingInput, GetListingOutput } from "../models/models_1";
import { GetListing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets a listing (a record of an asset at a given time). If you specify a listing version, only details that are specific to that version are returned.
 *
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
export class GetListingCommand extends command<GetListingCommandInput, GetListingCommandOutput>(
  _ep0,
  _mw0,
  "GetListing",
  GetListing$
) {
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
