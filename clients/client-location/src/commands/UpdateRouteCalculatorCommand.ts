// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRouteCalculatorRequest, UpdateRouteCalculatorResponse } from "../models/models_0";
import { UpdateRouteCalculator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRouteCalculatorCommand}.
 */
export interface UpdateRouteCalculatorCommandInput extends UpdateRouteCalculatorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRouteCalculatorCommand}.
 */
export interface UpdateRouteCalculatorCommandOutput extends UpdateRouteCalculatorResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the Routes API V2 unless you require Grab data.
 * >
 * > - `UpdateRouteCalculator` is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The Routes API version 2 has a simplified interface that can be used without creating or managing route calculator resources.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under `geo-routes` or `geo_routes`, not under `location`.
 * > - Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.
 * > - Start your version 2 API journey with the Routes V2 [API Reference](/location/latest/APIReference/API_Operations_Amazon_Location_Service_Routes_V2.html) or the [Developer Guide](/location/latest/developerguide/routes.html).
 *
 * Updates the specified properties for a given route calculator resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, UpdateRouteCalculatorCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, UpdateRouteCalculatorCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // UpdateRouteCalculatorRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   PricingPlan: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 * };
 * const command = new UpdateRouteCalculatorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRouteCalculatorResponse
 * //   CalculatorName: "STRING_VALUE", // required
 * //   CalculatorArn: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRouteCalculatorCommandInput - {@link UpdateRouteCalculatorCommandInput}
 * @returns {@link UpdateRouteCalculatorCommandOutput}
 * @see {@link UpdateRouteCalculatorCommandInput} for command's `input` shape.
 * @see {@link UpdateRouteCalculatorCommandOutput} for command's `response` shape.
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
export class UpdateRouteCalculatorCommand extends command<UpdateRouteCalculatorCommandInput, UpdateRouteCalculatorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRouteCalculator",
  UpdateRouteCalculator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRouteCalculatorRequest;
      output: UpdateRouteCalculatorResponse;
    };
    sdk: {
      input: UpdateRouteCalculatorCommandInput;
      output: UpdateRouteCalculatorCommandOutput;
    };
  };
}
