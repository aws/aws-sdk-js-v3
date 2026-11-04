// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  SubmitMultiRegionAccessPointRoutesRequest,
  SubmitMultiRegionAccessPointRoutesResult,
} from "../models/models_0";
import { SubmitMultiRegionAccessPointRoutes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SubmitMultiRegionAccessPointRoutesCommand}.
 */
export interface SubmitMultiRegionAccessPointRoutesCommandInput extends SubmitMultiRegionAccessPointRoutesRequest {}
/**
 * @public
 *
 * The output of {@link SubmitMultiRegionAccessPointRoutesCommand}.
 */
export interface SubmitMultiRegionAccessPointRoutesCommandOutput extends SubmitMultiRegionAccessPointRoutesResult, __MetadataBearer {}

/**
 * > **Note:** This operation is not supported by directory buckets.
 *
 * Submits an updated route configuration for a Multi-Region Access Point. This API operation updates the routing status for the specified Regions from active to passive, or from passive to active. A value of `0` indicates a passive status, which means that traffic won't be routed to the specified Region. A value of `100` indicates an active status, which means that traffic will be routed to the specified Region. At least one Region must be active at all times.
 *
 * When the routing configuration is changed, any in-progress operations (uploads, copies, deletes, and so on) to formerly active Regions will continue to run to their final completion state (success or failure). The routing configurations of any Regions that aren’t specified remain unchanged.
 *
 * > **Note:** Updated routing configurations might not be immediately applied. It can take up to 2 minutes for your changes to take effect.
 *
 * To submit routing control changes and failover requests, use the Amazon S3 failover control infrastructure endpoints in these five Amazon Web Services Regions:
 *
 * - `us-east-1`
 * - `us-west-2`
 * - `ap-southeast-2`
 * - `ap-northeast-1`
 * - `eu-west-1`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, SubmitMultiRegionAccessPointRoutesCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, SubmitMultiRegionAccessPointRoutesCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // SubmitMultiRegionAccessPointRoutesRequest
 *   AccountId: "STRING_VALUE",
 *   Mrap: "STRING_VALUE", // required
 *   RouteUpdates: [ // RouteList // required
 *     { // MultiRegionAccessPointRoute
 *       Bucket: "STRING_VALUE",
 *       Region: "STRING_VALUE",
 *       TrafficDialPercentage: Number("int"), // required
 *     },
 *   ],
 * };
 * const command = new SubmitMultiRegionAccessPointRoutesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SubmitMultiRegionAccessPointRoutesCommandInput - {@link SubmitMultiRegionAccessPointRoutesCommandInput}
 * @returns {@link SubmitMultiRegionAccessPointRoutesCommandOutput}
 * @see {@link SubmitMultiRegionAccessPointRoutesCommandInput} for command's `input` shape.
 * @see {@link SubmitMultiRegionAccessPointRoutesCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 *
 * Base exception class for all service exceptions from S3Control service.
 *
 * @public
 */
export class SubmitMultiRegionAccessPointRoutesCommand extends command<SubmitMultiRegionAccessPointRoutesCommandInput, SubmitMultiRegionAccessPointRoutesCommandOutput>(
  _ep0,
  _mw0,
  "SubmitMultiRegionAccessPointRoutes",
  SubmitMultiRegionAccessPointRoutes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubmitMultiRegionAccessPointRoutesRequest;
      output: {};
    };
    sdk: {
      input: SubmitMultiRegionAccessPointRoutesCommandInput;
      output: SubmitMultiRegionAccessPointRoutesCommandOutput;
    };
  };
}
