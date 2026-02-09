// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { RemoveRegionRequest, RemoveRegionResponse } from "../models/models_0";
import { RemoveRegion$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes an additional Region from an IAM Identity Center instance. This operation initiates an asynchronous workflow to clean up IAM Identity Center resources in the specified additional Region. The Region status is set to REMOVING and the Region record is deleted when the workflow completes. The request must be made from the primary Region. The target Region cannot be the primary Region, and no other add or remove Region workflows can be in progress.</p> <p>The following actions are related to <code>RemoveRegion</code>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_AddRegion.html"> AddRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_DescribeRegion.html">DescribeRegion</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/singlesignon/latest/APIReference/API_ListRegions.html">ListRegions</a> </p> </li> </ul>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
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
export class RemoveRegionCommand extends $Command
  .classBuilder<
    RemoveRegionCommandInput,
    RemoveRegionCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "RemoveRegion", {})
  .n("SSOAdminClient", "RemoveRegionCommand")
  .sc(RemoveRegion$)
  .build() {
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
