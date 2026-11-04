// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/models_0";
import { DescribeHomeRegionControls$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This API permits filtering on the `ControlId` and `HomeRegion` fields.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Exception raised when an internal, configuration, or dependency error is encountered.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Exception raised when the provided input violates a policy constraint or is entered in the wrong format or data type.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Exception raised when a request fails due to temporary unavailability of the service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MigrationHubConfigServiceException}
 *
 * Base exception class for all service exceptions from MigrationHubConfig service.
 *
 * @public
 */
export class DescribeHomeRegionControlsCommand extends command<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeHomeRegionControls",
  DescribeHomeRegionControls$
) {
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
