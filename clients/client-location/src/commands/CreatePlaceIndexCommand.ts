// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { CreatePlaceIndexRequest, CreatePlaceIndexResponse } from "../models/models_0";
import { de_CreatePlaceIndexCommand, se_CreatePlaceIndexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePlaceIndexCommand}.
 */
export interface CreatePlaceIndexCommandInput extends CreatePlaceIndexRequest {}
/**
 * @public
 *
 * The output of {@link CreatePlaceIndexCommand}.
 */
export interface CreatePlaceIndexCommandOutput extends CreatePlaceIndexResponse, __MetadataBearer {}

/**
 * <p>Creates a place index resource in your Amazon Web Services account. Use a place index resource to
 *             geocode addresses and other text queries by using the
 *                 <code>SearchPlaceIndexForText</code> operation, and reverse geocode coordinates by
 *             using the <code>SearchPlaceIndexForPosition</code> operation, and enable autosuggestions
 *             by using the <code>SearchPlaceIndexForSuggestions</code> operation.</p>
 *          <note>
 *             <p>If your application is tracking or routing assets you use in your business, such
 *                 as delivery vehicles or employees, you must not use Esri as your geolocation
 *                 provider. See section 82 of the <a href="http://aws.amazon.com/service-terms">Amazon Web Services
 *                     service terms</a> for more details.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CreatePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CreatePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // CreatePlaceIndexRequest
 *   IndexName: "STRING_VALUE", // required
 *   DataSource: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DataSourceConfiguration: { // DataSourceConfiguration
 *     IntendedUse: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePlaceIndexCommand(input);
 * const response = await client.send(command);
 * // { // CreatePlaceIndexResponse
 * //   IndexName: "STRING_VALUE", // required
 * //   IndexArn: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreatePlaceIndexCommandInput - {@link CreatePlaceIndexCommandInput}
 * @returns {@link CreatePlaceIndexCommandOutput}
 * @see {@link CreatePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link CreatePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was unsuccessful because of a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The operation was denied because the request would exceed the maximum <a href="https://docs.aws.amazon.com/location/latest/developerguide/location-quotas.html">quota</a>
 *       set for Amazon Location Service.</p>
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
export class CreatePlaceIndexCommand extends $Command
  .classBuilder<
    CreatePlaceIndexCommandInput,
    CreatePlaceIndexCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "CreatePlaceIndex", {})
  .n("LocationClient", "CreatePlaceIndexCommand")
  .f(void 0, void 0)
  .ser(se_CreatePlaceIndexCommand)
  .de(de_CreatePlaceIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePlaceIndexRequest;
      output: CreatePlaceIndexResponse;
    };
    sdk: {
      input: CreatePlaceIndexCommandInput;
      output: CreatePlaceIndexCommandOutput;
    };
  };
}
