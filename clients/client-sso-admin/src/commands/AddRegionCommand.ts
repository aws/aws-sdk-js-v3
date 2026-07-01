// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddRegionRequest, AddRegionResponse } from "../models/models_0";
import { AddRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddRegionCommand}.
 */
export interface AddRegionCommandInput extends AddRegionRequest {}
/**
 * @public
 *
 * The output of {@link AddRegionCommand}.
 */
export interface AddRegionCommandOutput extends AddRegionResponse, __MetadataBearer {}

/**
 * <p>Adds a Region to an IAM Identity Center instance. This operation initiates an asynchronous workflow to replicate the IAM Identity Center instance to the target Region. The Region status is set to ADDING at first and changes to ACTIVE when the workflow completes.</p> <p>To use this operation, your IAM Identity Center instance and the target Region must meet the requirements described in the <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/multi-region-iam-identity-center.html#multi-region-prerequisites">IAM Identity Center User Guide</a>. </p> <p>The following actions are related to <code>AddRegion</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_RemoveRegion.html">RemoveRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeRegion.html">DescribeRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListRegions.html">ListRegions</a> </p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, AddRegionCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, AddRegionCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // AddRegionRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new AddRegionCommand(input);
 * const response = await client.send(command);
 * // { // AddRegionResponse
 * //   Status: "ACTIVE" || "ADDING" || "REMOVING",
 * // };
 *
 * ```
 *
 * @param AddRegionCommandInput - {@link AddRegionCommandInput}
 * @returns {@link AddRegionCommandOutput}
 * @see {@link AddRegionCommandInput} for command's `input` shape.
 * @see {@link AddRegionCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Indicates that the principal has crossed the permitted number of resources that can be created.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class AddRegionCommand extends command<AddRegionCommandInput, AddRegionCommandOutput>(
  _ep0,
  _mw0,
  "AddRegion",
  AddRegion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddRegionRequest;
      output: AddRegionResponse;
    };
    sdk: {
      input: AddRegionCommandInput;
      output: AddRegionCommandOutput;
    };
  };
}
