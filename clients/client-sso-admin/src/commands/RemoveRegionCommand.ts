// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RemoveRegionRequest, RemoveRegionResponse } from "../models/models_0";
import { RemoveRegion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RemoveRegionCommand}.
 */
export interface RemoveRegionCommandInput extends RemoveRegionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveRegionCommand}.
 */
export interface RemoveRegionCommandOutput extends RemoveRegionResponse, __MetadataBearer {}

/**
 * Removes an additional Region from an IAM Identity Center instance. This operation initiates an asynchronous workflow to clean up IAM Identity Center resources in the specified additional Region. The Region status is set to REMOVING and the Region record is deleted when the workflow completes. The request must be made from the primary Region. The target Region cannot be the primary Region, and no other add or remove Region workflows can be in progress.
 *
 * The following actions are related to `RemoveRegion`:
 *
 * - [AddRegion](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AddRegion.html)
 * - [DescribeRegion](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeRegion.html)
 * - [ListRegions](https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListRegions.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, RemoveRegionCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, RemoveRegionCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // RemoveRegionRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   RegionName: "STRING_VALUE", // required
 * };
 * const command = new RemoveRegionCommand(input);
 * const response = await client.send(command);
 * // { // RemoveRegionResponse
 * //   Status: "ACTIVE" || "ADDING" || "REMOVING",
 * // };
 *
 * ```
 *
 * @param RemoveRegionCommandInput - {@link RemoveRegionCommandInput}
 * @returns {@link RemoveRegionCommandOutput}
 * @see {@link RemoveRegionCommandInput} for command's `input` shape.
 * @see {@link RemoveRegionCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure with an internal server.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Indicates that a requested resource is not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Indicates that the principal has crossed the throttling limits of the API operations.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request failed because it contains a syntax error.
 *
 * @throws {@link SSOAdminServiceException}
 *
 * Base exception class for all service exceptions from SSOAdmin service.
 *
 * @public
 */
export class RemoveRegionCommand extends command<RemoveRegionCommandInput, RemoveRegionCommandOutput>(
  _ep0,
  _mw0,
  "RemoveRegion",
  RemoveRegion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveRegionRequest;
      output: RemoveRegionResponse;
    };
    sdk: {
      input: RemoveRegionCommandInput;
      output: RemoveRegionCommandOutput;
    };
  };
}
