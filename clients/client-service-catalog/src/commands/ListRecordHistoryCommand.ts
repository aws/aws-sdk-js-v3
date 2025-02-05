// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecordHistoryInput, ListRecordHistoryOutput } from "../models/models_0";
import { de_ListRecordHistoryCommand, se_ListRecordHistoryCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecordHistoryCommand}.
 */
export interface ListRecordHistoryCommandInput extends ListRecordHistoryInput {}
/**
 * @public
 *
 * The output of {@link ListRecordHistoryCommand}.
 */
export interface ListRecordHistoryCommandOutput extends ListRecordHistoryOutput, __MetadataBearer {}

/**
 * <p>Lists the specified requests or all performed requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListRecordHistoryCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListRecordHistoryCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListRecordHistoryInput
 *   AcceptLanguage: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 *   SearchFilter: { // ListRecordHistorySearchFilter
 *     Key: "STRING_VALUE",
 *     Value: "STRING_VALUE",
 *   },
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListRecordHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListRecordHistoryOutput
 * //   RecordDetails: [ // RecordDetails
 * //     { // RecordDetail
 * //       RecordId: "STRING_VALUE",
 * //       ProvisionedProductName: "STRING_VALUE",
 * //       Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       UpdatedTime: new Date("TIMESTAMP"),
 * //       ProvisionedProductType: "STRING_VALUE",
 * //       RecordType: "STRING_VALUE",
 * //       ProvisionedProductId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       PathId: "STRING_VALUE",
 * //       RecordErrors: [ // RecordErrors
 * //         { // RecordError
 * //           Code: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //         },
 * //       ],
 * //       RecordTags: [ // RecordTags
 * //         { // RecordTag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       LaunchRoleArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRecordHistoryCommandInput - {@link ListRecordHistoryCommandInput}
 * @returns {@link ListRecordHistoryCommandOutput}
 * @see {@link ListRecordHistoryCommandInput} for command's `input` shape.
 * @see {@link ListRecordHistoryCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class ListRecordHistoryCommand extends $Command
  .classBuilder<
    ListRecordHistoryCommandInput,
    ListRecordHistoryCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "ListRecordHistory", {})
  .n("ServiceCatalogClient", "ListRecordHistoryCommand")
  .f(void 0, void 0)
  .ser(se_ListRecordHistoryCommand)
  .de(de_ListRecordHistoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecordHistoryInput;
      output: ListRecordHistoryOutput;
    };
    sdk: {
      input: ListRecordHistoryCommandInput;
      output: ListRecordHistoryCommandOutput;
    };
  };
}
