// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDedicatedIpPoolRequest, GetDedicatedIpPoolResponse } from "../models/models_0";
import { GetDedicatedIpPool$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDedicatedIpPoolCommand}.
 */
export interface GetDedicatedIpPoolCommandInput extends GetDedicatedIpPoolRequest {}
/**
 * @public
 *
 * The output of {@link GetDedicatedIpPoolCommand}.
 */
export interface GetDedicatedIpPoolCommandOutput extends GetDedicatedIpPoolResponse, __MetadataBearer {}

/**
 * Retrieve information about the dedicated pool.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetDedicatedIpPoolCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDedicatedIpPoolCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // GetDedicatedIpPoolRequest
 *   PoolName: "STRING_VALUE", // required
 * };
 * const command = new GetDedicatedIpPoolCommand(input);
 * const response = await client.send(command);
 * // { // GetDedicatedIpPoolResponse
 * //   DedicatedIpPool: { // DedicatedIpPool
 * //     PoolName: "STRING_VALUE", // required
 * //     ScalingMode: "STANDARD" || "MANAGED", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDedicatedIpPoolCommandInput - {@link GetDedicatedIpPoolCommandInput}
 * @returns {@link GetDedicatedIpPoolCommandOutput}
 * @see {@link GetDedicatedIpPoolCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpPoolCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
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
 * @public
 */
export class GetDedicatedIpPoolCommand extends command<GetDedicatedIpPoolCommandInput, GetDedicatedIpPoolCommandOutput>(
  _ep0,
  _mw0,
  "GetDedicatedIpPool",
  GetDedicatedIpPool$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDedicatedIpPoolRequest;
      output: GetDedicatedIpPoolResponse;
    };
    sdk: {
      input: GetDedicatedIpPoolCommandInput;
      output: GetDedicatedIpPoolCommandOutput;
    };
  };
}
