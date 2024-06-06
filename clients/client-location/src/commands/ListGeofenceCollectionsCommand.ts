// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { ListGeofenceCollectionsRequest, ListGeofenceCollectionsResponse } from "../models/models_0";
import { de_ListGeofenceCollectionsCommand, se_ListGeofenceCollectionsCommand } from "../protocols/Aws_restJson1";

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
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "ListGeofenceCollections", {})
  .n("LocationClient", "ListGeofenceCollectionsCommand")
  .f(void 0, void 0)
  .ser(se_ListGeofenceCollectionsCommand)
  .de(de_ListGeofenceCollectionsCommand)
  .build() {}
