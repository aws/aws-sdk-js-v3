// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutDedicatedIpPoolScalingAttributesRequest,
  PutDedicatedIpPoolScalingAttributesResponse,
} from "../models/models_1";
import { PutDedicatedIpPoolScalingAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutDedicatedIpPoolScalingAttributesCommand}.
 */
export interface PutDedicatedIpPoolScalingAttributesCommandInput extends PutDedicatedIpPoolScalingAttributesRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpPoolScalingAttributesCommand}.
 */
export interface PutDedicatedIpPoolScalingAttributesCommandOutput extends PutDedicatedIpPoolScalingAttributesResponse, __MetadataBearer {}

/**
 * Used to convert a dedicated IP pool to a different scaling mode.
 *
 * > **Note:** `MANAGED` pools cannot be converted to `STANDARD` scaling mode.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, PutDedicatedIpPoolScalingAttributesCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, PutDedicatedIpPoolScalingAttributesCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // PutDedicatedIpPoolScalingAttributesRequest
 *   PoolName: "STRING_VALUE", // required
 *   ScalingMode: "STANDARD" || "MANAGED", // required
 * };
 * const command = new PutDedicatedIpPoolScalingAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpPoolScalingAttributesCommandInput - {@link PutDedicatedIpPoolScalingAttributesCommandInput}
 * @returns {@link PutDedicatedIpPoolScalingAttributesCommandOutput}
 * @see {@link PutDedicatedIpPoolScalingAttributesCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpPoolScalingAttributesCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *
 * The resource is being modified by another operation or thread.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @example Used to convert a dedicated IP pool to a different scaling mode.
 * ```javascript
 * // This example converts a dedicated IP pool from STANDARD to MANAGED.
 * const input = {
 *   PoolName: "sample-ses-pool",
 *   ScalingMode: "MANAGED"
 * };
 * const command = new PutDedicatedIpPoolScalingAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutDedicatedIpPoolScalingAttributesCommand extends command<PutDedicatedIpPoolScalingAttributesCommandInput, PutDedicatedIpPoolScalingAttributesCommandOutput>(
  _ep0,
  _mw0,
  "PutDedicatedIpPoolScalingAttributes",
  PutDedicatedIpPoolScalingAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutDedicatedIpPoolScalingAttributesRequest;
      output: {};
    };
    sdk: {
      input: PutDedicatedIpPoolScalingAttributesCommandInput;
      output: PutDedicatedIpPoolScalingAttributesCommandOutput;
    };
  };
}
