// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteNetworkInsightsAccessScopeRequest,
  DeleteNetworkInsightsAccessScopeResult,
} from "../models/models_2";
import { DeleteNetworkInsightsAccessScope$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteNetworkInsightsAccessScopeCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeCommandInput extends DeleteNetworkInsightsAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteNetworkInsightsAccessScopeCommand}.
 */
export interface DeleteNetworkInsightsAccessScopeCommandOutput extends DeleteNetworkInsightsAccessScopeResult, __MetadataBearer {}

/**
 * <p>Deletes the specified Network Access Scope.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteNetworkInsightsAccessScopeRequest
 *   DryRun: true || false,
 *   NetworkInsightsAccessScopeId: "STRING_VALUE", // required
 * };
 * const command = new DeleteNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * // { // DeleteNetworkInsightsAccessScopeResult
 * //   NetworkInsightsAccessScopeId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteNetworkInsightsAccessScopeCommandInput - {@link DeleteNetworkInsightsAccessScopeCommandInput}
 * @returns {@link DeleteNetworkInsightsAccessScopeCommandOutput}
 * @see {@link DeleteNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link DeleteNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteNetworkInsightsAccessScopeCommand extends command<DeleteNetworkInsightsAccessScopeCommandInput, DeleteNetworkInsightsAccessScopeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteNetworkInsightsAccessScope",
  DeleteNetworkInsightsAccessScope$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteNetworkInsightsAccessScopeRequest;
      output: DeleteNetworkInsightsAccessScopeResult;
    };
    sdk: {
      input: DeleteNetworkInsightsAccessScopeCommandInput;
      output: DeleteNetworkInsightsAccessScopeCommandOutput;
    };
  };
}
