// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssetInput, GetAssetOutput } from "../models/models_0";
import { GetAsset } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssetCommand}.
 */
export interface GetAssetCommandInput extends GetAssetInput {}
/**
 * @public
 *
 * The output of {@link GetAssetCommand}.
 */
export interface GetAssetCommandOutput extends GetAssetOutput, __MetadataBearer {}

/**
 * <p>Gets an Amazon DataZone asset.</p> <p>An asset is the fundamental building block in Amazon DataZone, representing any data resource that needs to be cataloged and managed. It can take many forms, from Amazon S3 buckets and database tables to dashboards and machine learning models. Each asset contains comprehensive metadata about the resource, including its location, schema, ownership, and lineage information. Assets are essential for organizing and managing data resources across an organization, making them discoverable and usable while maintaining proper governance.</p> <p>Before using the Amazon DataZone GetAsset command, ensure the following prerequisites are met:</p> <ul> <li> <p>Domain identifier must exist and be valid</p> </li> <li> <p>Asset identifier must exist</p> </li> <li> <p>User must have the required permissions to perform the action</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetAssetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetAssetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * // import type { DataZoneClientConfig } from "@aws-sdk/client-datazone";
 * const config = {}; // type is DataZoneClientConfig
 * const client = new DataZoneClient(config);
 * const input = { // GetAssetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   revision: "STRING_VALUE",
 * };
 * const command = new GetAssetCommand(input);
 * const response = await client.send(command);
 * // { // GetAssetOutput
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   typeIdentifier: "STRING_VALUE", // required
 * //   typeRevision: "STRING_VALUE", // required
 * //   externalIdentifier: "STRING_VALUE",
 * //   revision: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   createdBy: "STRING_VALUE",
 * //   firstRevisionCreatedAt: new Date("TIMESTAMP"),
 * //   firstRevisionCreatedBy: "STRING_VALUE",
 * //   glossaryTerms: [ // GlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   governedGlossaryTerms: [ // GovernedGlossaryTerms
 * //     "STRING_VALUE",
 * //   ],
 * //   owningProjectId: "STRING_VALUE", // required
 * //   domainId: "STRING_VALUE", // required
 * //   listing: { // AssetListingDetails
 * //     listingId: "STRING_VALUE", // required
 * //     listingStatus: "CREATING" || "ACTIVE" || "INACTIVE", // required
 * //   },
 * //   formsOutput: [ // FormOutputList // required
 * //     { // FormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   readOnlyFormsOutput: [
 * //     {
 * //       formName: "STRING_VALUE", // required
 * //       typeName: "STRING_VALUE",
 * //       typeRevision: "STRING_VALUE",
 * //       content: "STRING_VALUE",
 * //     },
 * //   ],
 * //   latestTimeSeriesDataPointFormsOutput: [ // TimeSeriesDataPointSummaryFormOutputList
 * //     { // TimeSeriesDataPointSummaryFormOutput
 * //       formName: "STRING_VALUE", // required
 * //       typeIdentifier: "STRING_VALUE", // required
 * //       typeRevision: "STRING_VALUE",
 * //       timestamp: new Date("TIMESTAMP"), // required
 * //       contentSummary: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetAssetCommandInput - {@link GetAssetCommandInput}
 * @returns {@link GetAssetCommandOutput}
 * @see {@link GetAssetCommandInput} for command's `input` shape.
 * @see {@link GetAssetCommandOutput} for command's `response` shape.
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
export class GetAssetCommand extends $Command
  .classBuilder<
    GetAssetCommandInput,
    GetAssetCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("DataZone", "GetAsset", {})
  .n("DataZoneClient", "GetAssetCommand")
  .sc(GetAsset)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssetInput;
      output: GetAssetOutput;
    };
    sdk: {
      input: GetAssetCommandInput;
      output: GetAssetCommandOutput;
    };
  };
}
