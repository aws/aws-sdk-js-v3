// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSupportedInstanceTypesInput, ListSupportedInstanceTypesOutput } from "../models/models_0";
import { ListSupportedInstanceTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSupportedInstanceTypesCommand}.
 */
export interface ListSupportedInstanceTypesCommandInput extends ListSupportedInstanceTypesInput {}
/**
 * @public
 *
 * The output of {@link ListSupportedInstanceTypesCommand}.
 */
export interface ListSupportedInstanceTypesCommandOutput extends ListSupportedInstanceTypesOutput, __MetadataBearer {}

/**
 * <p>A list of the instance types that Amazon EMR supports. You can filter the
 *          list by Amazon Web Services Region and Amazon EMR release. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, ListSupportedInstanceTypesCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, ListSupportedInstanceTypesCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // ListSupportedInstanceTypesInput
 *   ReleaseLabel: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 * };
 * const command = new ListSupportedInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListSupportedInstanceTypesOutput
 * //   SupportedInstanceTypes: [ // SupportedInstanceTypesList
 * //     { // SupportedInstanceType
 * //       Type: "STRING_VALUE",
 * //       MemoryGB: Number("float"),
 * //       StorageGB: Number("int"),
 * //       VCPU: Number("int"),
 * //       Is64BitsOnly: true || false,
 * //       InstanceFamilyId: "STRING_VALUE",
 * //       EbsOptimizedAvailable: true || false,
 * //       EbsOptimizedByDefault: true || false,
 * //       NumberOfDisks: Number("int"),
 * //       EbsStorageOnly: true || false,
 * //       Architecture: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSupportedInstanceTypesCommandInput - {@link ListSupportedInstanceTypesCommandInput}
 * @returns {@link ListSupportedInstanceTypesCommandOutput}
 * @see {@link ListSupportedInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListSupportedInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class ListSupportedInstanceTypesCommand extends $Command
  .classBuilder<
    ListSupportedInstanceTypesCommandInput,
    ListSupportedInstanceTypesCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "ListSupportedInstanceTypes", {})
  .n("EMRClient", "ListSupportedInstanceTypesCommand")
  .sc(ListSupportedInstanceTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSupportedInstanceTypesInput;
      output: ListSupportedInstanceTypesOutput;
    };
    sdk: {
      input: ListSupportedInstanceTypesCommandInput;
      output: ListSupportedInstanceTypesCommandOutput;
    };
  };
}
