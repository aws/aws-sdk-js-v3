// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMapStyleDescriptorRequest, GetMapStyleDescriptorResponse } from "../models/models_0";
import { GetMapStyleDescriptor$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMapStyleDescriptorCommand}.
 */
export interface GetMapStyleDescriptorCommandInput extends GetMapStyleDescriptorRequest {}
/**
 * @public
 */
export type GetMapStyleDescriptorCommandOutputType = Omit<GetMapStyleDescriptorResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapStyleDescriptorCommand}.
 */
export interface GetMapStyleDescriptorCommandOutput extends GetMapStyleDescriptorCommandOutputType, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend upgrading to [`GetStyleDescriptor`](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetStyleDescriptor.html) unless you require `Grab` data.
 * >
 * > - `GetMapStyleDescriptor` is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `GetStyleDescriptor` operation gives a better user experience and is compatible with the remainder of the V2 Maps API.
 * > - If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under `geo-maps` or `geo_maps`, not under `location`.
 * > - Since `Grab` is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using `Grab`.
 * > - Start your version 2 API journey with the [Maps V2 API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html) or the [Developer Guide](https://docs.aws.amazon.com/location/latest/developerguide/maps.html).
 *
 * Retrieves the map style descriptor from a map resource.
 *
 * The style descriptor contains speciﬁcations on how features render on a map. For example, what data to display, what order to display the data in, and the style for the data. Style descriptors follow the Mapbox Style Specification.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapStyleDescriptorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapStyleDescriptorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetMapStyleDescriptorRequest
 *   MapName: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapStyleDescriptorCommand(input);
 * const response = await client.send(command);
 * // { // GetMapStyleDescriptorResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapStyleDescriptorCommandInput - {@link GetMapStyleDescriptorCommandInput}
 * @returns {@link GetMapStyleDescriptorCommandOutput}
 * @see {@link GetMapStyleDescriptorCommandInput} for command's `input` shape.
 * @see {@link GetMapStyleDescriptorCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class GetMapStyleDescriptorCommand extends command<GetMapStyleDescriptorCommandInput, GetMapStyleDescriptorCommandOutput>(
  _ep0,
  _mw0,
  "GetMapStyleDescriptor",
  GetMapStyleDescriptor$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMapStyleDescriptorRequest;
      output: GetMapStyleDescriptorResponse;
    };
    sdk: {
      input: GetMapStyleDescriptorCommandInput;
      output: GetMapStyleDescriptorCommandOutput;
    };
  };
}
