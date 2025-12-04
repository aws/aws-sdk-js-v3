// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/models_0";
import { DescribeAccountModifications } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountModificationsCommand}.
 */
export interface DescribeAccountModificationsCommandInput extends DescribeAccountModificationsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountModificationsCommand}.
 */
export interface DescribeAccountModificationsCommandOutput
  extends DescribeAccountModificationsResult,
    __MetadataBearer {}

/**
 * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
 *          License (BYOL) for the specified account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesClient, DescribeAccountModificationsCommand } from "@aws-sdk/client-workspaces"; // ES Modules import
 * // const { WorkSpacesClient, DescribeAccountModificationsCommand } = require("@aws-sdk/client-workspaces"); // CommonJS import
 * // import type { WorkSpacesClientConfig } from "@aws-sdk/client-workspaces";
 * const config = {}; // type is WorkSpacesClientConfig
 * const client = new WorkSpacesClient(config);
 * const input = { // DescribeAccountModificationsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeAccountModificationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountModificationsResult
 * //   AccountModifications: [ // AccountModificationList
 * //     { // AccountModification
 * //       ModificationState: "PENDING" || "COMPLETED" || "FAILED",
 * //       DedicatedTenancySupport: "ENABLED" || "DISABLED",
 * //       DedicatedTenancyManagementCidrRange: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountModificationsCommandInput - {@link DescribeAccountModificationsCommandInput}
 * @returns {@link DescribeAccountModificationsCommandOutput}
 * @see {@link DescribeAccountModificationsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountModificationsCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesClientResolvedConfig | config} for WorkSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user is not authorized to access a resource.</p>
 *
 * @throws {@link WorkSpacesServiceException}
 * <p>Base exception class for all service exceptions from WorkSpaces service.</p>
 *
 *
 * @public
 */
export class DescribeAccountModificationsCommand extends $Command
  .classBuilder<
    DescribeAccountModificationsCommandInput,
    DescribeAccountModificationsCommandOutput,
    WorkSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkSpacesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkspacesService", "DescribeAccountModifications", {})
  .n("WorkSpacesClient", "DescribeAccountModificationsCommand")
  .sc(DescribeAccountModifications)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountModificationsRequest;
      output: DescribeAccountModificationsResult;
    };
    sdk: {
      input: DescribeAccountModificationsCommandInput;
      output: DescribeAccountModificationsCommandOutput;
    };
  };
}
