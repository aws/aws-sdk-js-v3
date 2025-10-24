// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  UpdatePlaceIndexRequest,
  UpdatePlaceIndexResponse,
  UpdatePlaceIndexResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdatePlaceIndexCommand, se_UpdatePlaceIndexCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdatePlaceIndexCommand}.
 */
export interface UpdatePlaceIndexCommandInput extends UpdatePlaceIndexRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePlaceIndexCommand}.
 */
export interface UpdatePlaceIndexCommandOutput extends UpdatePlaceIndexResponse, __MetadataBearer {}

/**
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Places API V2 unless you require Grab data.</p> <ul> <li> <p> <code>UpdatePlaceIndex</code> is part of a previous Amazon Location Service Places API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The Places API version 2 has a simplified interface that can be used without creating or managing place index resources.</p> </li> <li> <p>If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Places API version 2 is found under <code>geo-places</code> or <code>geo_places</code>, not under <code>location</code>.</p> </li> <li> <p>Since Grab is not yet fully supported in Places API version 2, we recommend you continue using API version 1 when using Grab.</p> </li> <li> <p>Start your version 2 API journey with the Places V2 <a href="/location/latest/APIReference/API_Operations_Amazon_Location_Service_Places_V2.html">API Reference</a> or the <a href="/location/latest/developerguide/places.html">Developer Guide</a>.</p> </li> </ul> </important> <p>Updates the specified properties of a given place index resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdatePlaceIndexCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdatePlaceIndexCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdatePlaceIndexRequest
 *   IndexName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   DataSourceConfiguration: { // DataSourceConfiguration
 *     IntendedUse: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdatePlaceIndexCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePlaceIndexResponse
 * //   IndexName: "STRING_VALUE", // required
 * //   IndexArn: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdatePlaceIndexCommandInput - {@link UpdatePlaceIndexCommandInput}
 * @returns {@link UpdatePlaceIndexCommandOutput}
 * @see {@link UpdatePlaceIndexCommandInput} for command's `input` shape.
 * @see {@link UpdatePlaceIndexCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
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
export class UpdatePlaceIndexCommand extends $Command
  .classBuilder<
    UpdatePlaceIndexCommandInput,
    UpdatePlaceIndexCommandOutput,
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
  .s("LocationService", "UpdatePlaceIndex", {})
  .n("LocationClient", "UpdatePlaceIndexCommand")
  .f(void 0, UpdatePlaceIndexResponseFilterSensitiveLog)
  .ser(se_UpdatePlaceIndexCommand)
  .de(de_UpdatePlaceIndexCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePlaceIndexRequest;
      output: UpdatePlaceIndexResponse;
    };
    sdk: {
      input: UpdatePlaceIndexCommandInput;
      output: UpdatePlaceIndexCommandOutput;
    };
  };
}
