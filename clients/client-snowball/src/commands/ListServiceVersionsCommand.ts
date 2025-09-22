// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListServiceVersionsRequest, ListServiceVersionsResult } from "../models/models_0";
import { ListServiceVersions } from "../schemas/schemas_5_List";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceVersionsCommand}.
 */
export interface ListServiceVersionsCommandInput extends ListServiceVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceVersionsCommand}.
 */
export interface ListServiceVersionsCommandOutput extends ListServiceVersionsResult, __MetadataBearer {}

/**
 * <p>Lists all supported versions for Snow on-device services. Returns an
 *       array of <code>ServiceVersion</code> object containing the supported versions for a particular service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListServiceVersionsCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListServiceVersionsCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // ListServiceVersionsRequest
 *   ServiceName: "KUBERNETES" || "EKS_ANYWHERE", // required
 *   DependentServices: [ // DependentServiceList
 *     { // DependentService
 *       ServiceName: "KUBERNETES" || "EKS_ANYWHERE",
 *       ServiceVersion: { // ServiceVersion
 *         Version: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServiceVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceVersionsResult
 * //   ServiceVersions: [ // ServiceVersionList // required
 * //     { // ServiceVersion
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ServiceName: "KUBERNETES" || "EKS_ANYWHERE", // required
 * //   DependentServices: [ // DependentServiceList
 * //     { // DependentService
 * //       ServiceName: "KUBERNETES" || "EKS_ANYWHERE",
 * //       ServiceVersion: {
 * //         Version: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceVersionsCommandInput - {@link ListServiceVersionsCommandInput}
 * @returns {@link ListServiceVersionsCommandOutput}
 * @see {@link ListServiceVersionsCommandInput} for command's `input` shape.
 * @see {@link ListServiceVersionsCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class ListServiceVersionsCommand extends $Command
  .classBuilder<
    ListServiceVersionsCommandInput,
    ListServiceVersionsCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIESnowballJobManagementService", "ListServiceVersions", {})
  .n("SnowballClient", "ListServiceVersionsCommand")
  .sc(ListServiceVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceVersionsRequest;
      output: ListServiceVersionsResult;
    };
    sdk: {
      input: ListServiceVersionsCommandInput;
      output: ListServiceVersionsCommandOutput;
    };
  };
}
