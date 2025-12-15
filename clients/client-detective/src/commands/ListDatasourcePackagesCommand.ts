// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDatasourcePackagesRequest, ListDatasourcePackagesResponse } from "../models/models_0";
import { ListDatasourcePackages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDatasourcePackagesCommand}.
 */
export interface ListDatasourcePackagesCommandInput extends ListDatasourcePackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasourcePackagesCommand}.
 */
export interface ListDatasourcePackagesCommandOutput extends ListDatasourcePackagesResponse, __MetadataBearer {}

/**
 * <p>Lists data source packages in the behavior graph.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, ListDatasourcePackagesCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, ListDatasourcePackagesCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // ListDatasourcePackagesRequest
 *   GraphArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDatasourcePackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasourcePackagesResponse
 * //   DatasourcePackages: { // DatasourcePackageIngestDetails
 * //     "<keys>": { // DatasourcePackageIngestDetail
 * //       DatasourcePackageIngestState: "STARTED" || "STOPPED" || "DISABLED",
 * //       LastIngestStateChange: { // LastIngestStateChangeDates
 * //         "<keys>": { // TimestampForCollection
 * //           Timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       },
 * //     },
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasourcePackagesCommandInput - {@link ListDatasourcePackagesCommandInput}
 * @returns {@link ListDatasourcePackagesCommandOutput}
 * @see {@link ListDatasourcePackagesCommandInput} for command's `input` shape.
 * @see {@link ListDatasourcePackagesCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class ListDatasourcePackagesCommand extends $Command
  .classBuilder<
    ListDatasourcePackagesCommandInput,
    ListDatasourcePackagesCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "ListDatasourcePackages", {})
  .n("DetectiveClient", "ListDatasourcePackagesCommand")
  .sc(ListDatasourcePackages$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDatasourcePackagesRequest;
      output: ListDatasourcePackagesResponse;
    };
    sdk: {
      input: ListDatasourcePackagesCommandInput;
      output: ListDatasourcePackagesCommandOutput;
    };
  };
}
