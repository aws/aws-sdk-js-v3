// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateDashboardPublishedVersionRequest,
  UpdateDashboardPublishedVersionResponse,
} from "../models/models_5";
import { UpdateDashboardPublishedVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDashboardPublishedVersionCommand}.
 */
export interface UpdateDashboardPublishedVersionCommandInput extends UpdateDashboardPublishedVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDashboardPublishedVersionCommand}.
 */
export interface UpdateDashboardPublishedVersionCommandOutput extends UpdateDashboardPublishedVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the published version of a dashboard.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateDashboardPublishedVersionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateDashboardPublishedVersionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // UpdateDashboardPublishedVersionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DashboardId: "STRING_VALUE", // required
 *   VersionNumber: Number("long"), // required
 * };
 * const command = new UpdateDashboardPublishedVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDashboardPublishedVersionResponse
 * //   DashboardId: "STRING_VALUE",
 * //   DashboardArn: "STRING_VALUE",
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDashboardPublishedVersionCommandInput - {@link UpdateDashboardPublishedVersionCommandInput}
 * @returns {@link UpdateDashboardPublishedVersionCommandOutput}
 * @see {@link UpdateDashboardPublishedVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateDashboardPublishedVersionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateDashboardPublishedVersionCommand extends command<UpdateDashboardPublishedVersionCommandInput, UpdateDashboardPublishedVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDashboardPublishedVersion",
  UpdateDashboardPublishedVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDashboardPublishedVersionRequest;
      output: UpdateDashboardPublishedVersionResponse;
    };
    sdk: {
      input: UpdateDashboardPublishedVersionCommandInput;
      output: UpdateDashboardPublishedVersionCommandOutput;
    };
  };
}
