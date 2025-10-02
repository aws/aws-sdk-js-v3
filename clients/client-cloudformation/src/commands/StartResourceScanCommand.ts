// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartResourceScanInput, StartResourceScanOutput } from "../models/models_1";
import { de_StartResourceScanCommand, se_StartResourceScanCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartResourceScanCommand}.
 */
export interface StartResourceScanCommandInput extends StartResourceScanInput {}
/**
 * @public
 *
 * The output of {@link StartResourceScanCommand}.
 */
export interface StartResourceScanCommandOutput extends StartResourceScanOutput, __MetadataBearer {}

/**
 * <p>Starts a scan of the resources in this account in this Region. You can the status of a
 *       scan using the <code>ListResourceScans</code> API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, StartResourceScanCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, StartResourceScanCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * // import type { CloudFormationClientConfig } from "@aws-sdk/client-cloudformation";
 * const config = {}; // type is CloudFormationClientConfig
 * const client = new CloudFormationClient(config);
 * const input = { // StartResourceScanInput
 *   ClientRequestToken: "STRING_VALUE",
 *   ScanFilters: [ // ScanFilters
 *     { // ScanFilter
 *       Types: [ // ResourceTypeFilters
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new StartResourceScanCommand(input);
 * const response = await client.send(command);
 * // { // StartResourceScanOutput
 * //   ResourceScanId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartResourceScanCommandInput - {@link StartResourceScanCommandInput}
 * @returns {@link StartResourceScanCommandOutput}
 * @see {@link StartResourceScanCommandInput} for command's `input` shape.
 * @see {@link StartResourceScanCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 * @throws {@link ResourceScanInProgressException} (client fault)
 *  <p>A resource scan is currently in progress. Only one can be run at a time for an account in a Region.</p>
 *
 * @throws {@link ResourceScanLimitExceededException} (client fault)
 *  <p>The limit on resource scans has been exceeded. Reasons include:</p>
 *          <ul>
 *             <li>
 *                <p>Exceeded the daily quota for resource scans.</p>
 *             </li>
 *             <li>
 *                <p>A resource scan recently failed. You must wait 10 minutes before starting a new resource scan.</p>
 *             </li>
 *             <li>
 *                <p>The last resource scan failed after exceeding 100,000 resources. When this happens, you must wait 24 hours
 *      before starting a new resource scan.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link CloudFormationServiceException}
 * <p>Base exception class for all service exceptions from CloudFormation service.</p>
 *
 *
 * @example To start a resource scan
 * ```javascript
 * // This example shows how to start a new resource scan
 * const input = { /* empty *\/ };
 * const command = new StartResourceScanCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ResourceScanId: "arn:aws:cloudformation:us-east-1:123456789012:resourceScan/88f09db1-d211-4cb7-964b-434e2b8469ca"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartResourceScanCommand extends $Command
  .classBuilder<
    StartResourceScanCommandInput,
    StartResourceScanCommandOutput,
    CloudFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudFormation", "StartResourceScan", {})
  .n("CloudFormationClient", "StartResourceScanCommand")
  .f(void 0, void 0)
  .ser(se_StartResourceScanCommand)
  .de(de_StartResourceScanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartResourceScanInput;
      output: StartResourceScanOutput;
    };
    sdk: {
      input: StartResourceScanCommandInput;
      output: StartResourceScanCommandOutput;
    };
  };
}
