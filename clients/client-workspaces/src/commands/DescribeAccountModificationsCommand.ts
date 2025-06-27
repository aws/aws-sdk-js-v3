// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountModificationsRequest, DescribeAccountModificationsResult } from "../models/models_0";
import {
  de_DescribeAccountModificationsCommand,
  se_DescribeAccountModificationsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WorkspacesService", "DescribeAccountModifications", {})
  .n("WorkSpacesClient", "DescribeAccountModificationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountModificationsCommand)
  .de(de_DescribeAccountModificationsCommand)
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
