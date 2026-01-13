// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRecordInput, DescribeRecordOutput } from "../models/models_0";
import { DescribeRecord$ } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecordCommand}.
 */
export interface DescribeRecordCommandInput extends DescribeRecordInput {}
/**
 * @public
 *
 * The output of {@link DescribeRecordCommand}.
 */
export interface DescribeRecordCommandOutput extends DescribeRecordOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified request operation.</p>
 *          <p>Use this operation after calling a request operation (for example, <a>ProvisionProduct</a>,
 *          <a>TerminateProvisionedProduct</a>, or <a>UpdateProvisionedProduct</a>).
 *       </p>
 *          <note>
 *             <p>If a provisioned product was transferred to a new owner using <a>UpdateProvisionedProductProperties</a>, the new owner
 *       will be able to describe all past records for that product. The previous owner will no longer be able to describe the records, but will be able to
 *       use <a>ListRecordHistory</a> to see the product's history from when he was the owner.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeRecordCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeRecordCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribeRecordInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeRecordCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecordOutput
 * //   RecordDetail: { // RecordDetail
 * //     RecordId: "STRING_VALUE",
 * //     ProvisionedProductName: "STRING_VALUE",
 * //     Status: "CREATED" || "IN_PROGRESS" || "IN_PROGRESS_IN_ERROR" || "SUCCEEDED" || "FAILED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     UpdatedTime: new Date("TIMESTAMP"),
 * //     ProvisionedProductType: "STRING_VALUE",
 * //     RecordType: "STRING_VALUE",
 * //     ProvisionedProductId: "STRING_VALUE",
 * //     ProductId: "STRING_VALUE",
 * //     ProvisioningArtifactId: "STRING_VALUE",
 * //     PathId: "STRING_VALUE",
 * //     RecordErrors: [ // RecordErrors
 * //       { // RecordError
 * //         Code: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //       },
 * //     ],
 * //     RecordTags: [ // RecordTags
 * //       { // RecordTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LaunchRoleArn: "STRING_VALUE",
 * //   },
 * //   RecordOutputs: [ // RecordOutputs
 * //     { // RecordOutput
 * //       OutputKey: "STRING_VALUE",
 * //       OutputValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecordCommandInput - {@link DescribeRecordCommandInput}
 * @returns {@link DescribeRecordCommandOutput}
 * @see {@link DescribeRecordCommandInput} for command's `input` shape.
 * @see {@link DescribeRecordCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class DescribeRecordCommand extends $Command
  .classBuilder<
    DescribeRecordCommandInput,
    DescribeRecordCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DescribeRecord", {})
  .n("ServiceCatalogClient", "DescribeRecordCommand")
  .sc(DescribeRecord$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecordInput;
      output: DescribeRecordOutput;
    };
    sdk: {
      input: DescribeRecordCommandInput;
      output: DescribeRecordCommandOutput;
    };
  };
}
