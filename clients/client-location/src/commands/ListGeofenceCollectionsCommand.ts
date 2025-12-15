// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { ListGeofenceCollectionsRequest, ListGeofenceCollectionsResponse } from "../models/models_0";
import { ListGeofenceCollections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGeofenceCollectionsCommand}.
 */
export interface ListGeofenceCollectionsCommandInput extends ListGeofenceCollectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListGeofenceCollectionsCommand}.
 */
export interface ListGeofenceCollectionsCommandOutput extends ListGeofenceCollectionsResponse, __MetadataBearer {}

/**
 * <p>Lists geofence collections in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListGeofenceCollectionsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListGeofenceCollectionsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListGeofenceCollectionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListGeofenceCollectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListGeofenceCollectionsResponse
 * //   Entries: [ // ListGeofenceCollectionsResponseEntryList // required
 * //     { // ListGeofenceCollectionsResponseEntry
 * //       CollectionName: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       PricingPlan: "STRING_VALUE",
 * //       PricingPlanDataSource: "STRING_VALUE",
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGeofenceCollectionsCommandInput - {@link ListGeofenceCollectionsCommandInput}
 * @returns {@link ListGeofenceCollectionsCommandOutput}
 * @see {@link ListGeofenceCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListGeofenceCollectionsCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class ListGeofenceCollectionsCommand extends $Command
  .classBuilder<
    ListGeofenceCollectionsCommandInput,
    ListGeofenceCollectionsCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ListGeofenceCollections", {})
  .n("LocationClient", "ListGeofenceCollectionsCommand")
  .sc(ListGeofenceCollections$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGeofenceCollectionsRequest;
      output: ListGeofenceCollectionsResponse;
    };
    sdk: {
      input: ListGeofenceCollectionsCommandInput;
      output: ListGeofenceCollectionsCommandOutput;
    };
  };
}
