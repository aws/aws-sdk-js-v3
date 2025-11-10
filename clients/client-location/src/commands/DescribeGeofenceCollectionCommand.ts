// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeGeofenceCollectionRequest, DescribeGeofenceCollectionResponse } from "../models/models_0";
import { DescribeGeofenceCollection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeGeofenceCollectionCommand}.
 */
export interface DescribeGeofenceCollectionCommandInput extends DescribeGeofenceCollectionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeGeofenceCollectionCommand}.
 */
export interface DescribeGeofenceCollectionCommandOutput extends DescribeGeofenceCollectionResponse, __MetadataBearer {}

/**
 * <p>Retrieves the geofence collection details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeGeofenceCollectionCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeGeofenceCollectionCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DescribeGeofenceCollectionRequest
 *   CollectionName: "STRING_VALUE", // required
 * };
 * const command = new DescribeGeofenceCollectionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeGeofenceCollectionResponse
 * //   CollectionName: "STRING_VALUE", // required
 * //   CollectionArn: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   PricingPlan: "STRING_VALUE",
 * //   PricingPlanDataSource: "STRING_VALUE",
 * //   KmsKeyId: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   GeofenceCount: Number("int"),
 * // };
 *
 * ```
 *
 * @param DescribeGeofenceCollectionCommandInput - {@link DescribeGeofenceCollectionCommandInput}
 * @returns {@link DescribeGeofenceCollectionCommandOutput}
 * @see {@link DescribeGeofenceCollectionCommandInput} for command's `input` shape.
 * @see {@link DescribeGeofenceCollectionCommandOutput} for command's `response` shape.
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
export class DescribeGeofenceCollectionCommand extends $Command
  .classBuilder<
    DescribeGeofenceCollectionCommandInput,
    DescribeGeofenceCollectionCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "DescribeGeofenceCollection", {})
  .n("LocationClient", "DescribeGeofenceCollectionCommand")
  .sc(DescribeGeofenceCollection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeGeofenceCollectionRequest;
      output: DescribeGeofenceCollectionResponse;
    };
    sdk: {
      input: DescribeGeofenceCollectionCommandInput;
      output: DescribeGeofenceCollectionCommandOutput;
    };
  };
}
