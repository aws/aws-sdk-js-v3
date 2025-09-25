// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient";
import { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/models_0";
import { DescribeHomeRegionControls } from "../schemas/schemas_1_HomeRegion";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeHomeRegionControlsCommand}.
 */
export interface DescribeHomeRegionControlsCommandInput extends DescribeHomeRegionControlsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHomeRegionControlsCommand}.
 */
export interface DescribeHomeRegionControlsCommandOutput extends DescribeHomeRegionControlsResult, __MetadataBearer {}

/**
 * <p>This API permits filtering on the <code>ControlId</code> and <code>HomeRegion</code>
 *       fields.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, DescribeHomeRegionControlsCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * // import type { MigrationHubConfigClientConfig } from "@aws-sdk/client-migrationhub-config";
 * const config = {}; // type is MigrationHubConfigClientConfig
 * const client = new MigrationHubConfigClient(config);
 * const input = { // DescribeHomeRegionControlsRequest
 *   ControlId: "STRING_VALUE",
 *   HomeRegion: "STRING_VALUE",
 *   Target: { // Target
 *     Type: "ACCOUNT", // required
 *     Id: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeHomeRegionControlsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHomeRegionControlsResult
 * //   HomeRegionControls: [ // HomeRegionControls
 * //     { // HomeRegionControl
 * //       ControlId: "STRING_VALUE",
 * //       HomeRegion: "STRING_VALUE",
 * //       Target: { // Target
 * //         Type: "ACCOUNT", // required
 * //         Id: "STRING_VALUE",
 * //       },
 * //       RequestedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeHomeRegionControlsCommandInput - {@link DescribeHomeRegionControlsCommandInput}
 * @returns {@link DescribeHomeRegionControlsCommandOutput}
 * @see {@link DescribeHomeRegionControlsCommandInput} for command's `input` shape.
 * @see {@link DescribeHomeRegionControlsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Exception raised when an internal, configuration, or dependency error is
 *       encountered.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>Exception raised when the provided input violates a policy constraint or is entered in the
 *       wrong format or data type.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Exception raised when a request fails due to temporary unavailability of the
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link MigrationHubConfigServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubConfig service.</p>
 *
 *
 * @public
 */
export class DescribeHomeRegionControlsCommand extends $Command
  .classBuilder<
    DescribeHomeRegionControlsCommandInput,
    DescribeHomeRegionControlsCommandOutput,
    MigrationHubConfigClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubConfigClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMigrationHubMultiAccountService", "DescribeHomeRegionControls", {})
  .n("MigrationHubConfigClient", "DescribeHomeRegionControlsCommand")
  .sc(DescribeHomeRegionControls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHomeRegionControlsRequest;
      output: DescribeHomeRegionControlsResult;
    };
    sdk: {
      input: DescribeHomeRegionControlsCommandInput;
      output: DescribeHomeRegionControlsCommandOutput;
    };
  };
}
