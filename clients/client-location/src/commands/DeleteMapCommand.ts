// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMapRequest, DeleteMapResponse } from "../models/models_0";
import { DeleteMap$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMapCommand}.
 */
export interface DeleteMapCommandInput extends DeleteMapRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMapCommand}.
 */
export interface DeleteMapCommandOutput extends DeleteMapResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend upgrading to the Maps API V2 unless you require `Grab` data.
 * >
 * > - `DeleteMap` is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The Maps API version 2 has a simplified interface that can be used without creating or managing map resources.
 * > - If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under `geo-maps` or `geo_maps`, not under `location`.
 * > - Since `Grab` is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using `Grab`.
 * > - Start your version 2 API journey with the [Maps V2 API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html) or the [Developer Guide](https://docs.aws.amazon.com/location/latest/developerguide/maps.html).
 *
 * Deletes a map resource from your Amazon Web Services account.
 *
 * > **Note:** This operation deletes the resource permanently. If the map is being used in an application, the map may not render.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DeleteMapCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DeleteMapCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DeleteMapRequest
 *   MapName: "STRING_VALUE", // required
 * };
 * const command = new DeleteMapCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMapCommandInput - {@link DeleteMapCommandInput}
 * @returns {@link DeleteMapCommandOutput}
 * @see {@link DeleteMapCommandInput} for command's `input` shape.
 * @see {@link DeleteMapCommandOutput} for command's `response` shape.
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
export class DeleteMapCommand extends command<DeleteMapCommandInput, DeleteMapCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMap",
  DeleteMap$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMapRequest;
      output: {};
    };
    sdk: {
      input: DeleteMapCommandInput;
      output: DeleteMapCommandOutput;
    };
  };
}
