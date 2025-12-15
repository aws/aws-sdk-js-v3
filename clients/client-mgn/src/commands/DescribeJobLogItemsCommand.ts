// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type { DescribeJobLogItemsRequest, DescribeJobLogItemsResponse } from "../models/models_0";
import { DescribeJobLogItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeJobLogItemsCommand}.
 */
export interface DescribeJobLogItemsCommandInput extends DescribeJobLogItemsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeJobLogItemsCommand}.
 */
export interface DescribeJobLogItemsCommandOutput extends DescribeJobLogItemsResponse, __MetadataBearer {}

/**
 * <p>Retrieves detailed job log items with paging.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DescribeJobLogItemsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DescribeJobLogItemsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // DescribeJobLogItemsRequest
 *   jobID: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new DescribeJobLogItemsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeJobLogItemsResponse
 * //   items: [ // JobLogs
 * //     { // JobLog
 * //       logDateTime: "STRING_VALUE",
 * //       event: "STRING_VALUE",
 * //       eventData: { // JobLogEventData
 * //         sourceServerID: "STRING_VALUE",
 * //         conversionServerID: "STRING_VALUE",
 * //         targetInstanceID: "STRING_VALUE",
 * //         rawError: "STRING_VALUE",
 * //         attemptCount: Number("int"),
 * //         maxAttemptsCount: Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeJobLogItemsCommandInput - {@link DescribeJobLogItemsCommandInput}
 * @returns {@link DescribeJobLogItemsCommandOutput}
 * @see {@link DescribeJobLogItemsCommandInput} for command's `input` shape.
 * @see {@link DescribeJobLogItemsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class DescribeJobLogItemsCommand extends $Command
  .classBuilder<
    DescribeJobLogItemsCommandInput,
    DescribeJobLogItemsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "DescribeJobLogItems", {})
  .n("MgnClient", "DescribeJobLogItemsCommand")
  .sc(DescribeJobLogItems$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeJobLogItemsRequest;
      output: DescribeJobLogItemsResponse;
    };
    sdk: {
      input: DescribeJobLogItemsCommandInput;
      output: DescribeJobLogItemsCommandOutput;
    };
  };
}
