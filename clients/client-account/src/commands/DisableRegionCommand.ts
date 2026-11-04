// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisableRegionRequest } from "../models/models_0";
import { DisableRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DisableRegionCommand}.
 */
export interface DisableRegionCommandInput extends DisableRegionRequest {}
/**
 * @public
 *
 * The output of {@link DisableRegionCommand}.
 */
export interface DisableRegionCommandOutput extends __MetadataBearer {}

/**
 * Disables (opts-out) a particular Region for an account.
 *
 * > **Note:** The act of disabling a Region will remove all IAM access to any resources that reside in that Region.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, DisableRegionCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, DisableRegionCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // DisableRegionRequest
 *   AccountId: "STRING_VALUE",
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new DisableRegionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableRegionCommandInput - {@link DisableRegionCommandInput}
 * @returns {@link DisableRegionCommandOutput}
 * @see {@link DisableRegionCommandInput} for command's `input` shape.
 * @see {@link DisableRegionCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation failed because the calling identity doesn't have the minimum required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of a conflict in the current status of the resource. For example, this happens if you try to enable a Region that is currently being disabled (in a status of DISABLING) or if you try to change an account’s root user email to an email address which is already in use.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation failed because of an error internal to Amazon Web Services. Try your operation again later.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The operation failed because it was called too frequently and exceeded a throttle limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed because one of the input parameters was invalid.
 *
 * @throws {@link AccountServiceException}
 *
 * Base exception class for all service exceptions from Account service.
 *
 * @public
 */
export class DisableRegionCommand extends command<DisableRegionCommandInput, DisableRegionCommandOutput>(
  _ep0,
  _mw0,
  "DisableRegion",
  DisableRegion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableRegionRequest;
      output: {};
    };
    sdk: {
      input: DisableRegionCommandInput;
      output: DisableRegionCommandOutput;
    };
  };
}
