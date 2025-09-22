// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePersistentAppUIInput, DescribePersistentAppUIOutput } from "../models/models_0";
import { DescribePersistentAppUI } from "../schemas/schemas_15_Describe";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePersistentAppUICommand}.
 */
export interface DescribePersistentAppUICommandInput extends DescribePersistentAppUIInput {}
/**
 * @public
 *
 * The output of {@link DescribePersistentAppUICommand}.
 */
export interface DescribePersistentAppUICommandOutput extends DescribePersistentAppUIOutput, __MetadataBearer {}

/**
 * <p>Describes a persistent application user interface.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DescribePersistentAppUICommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DescribePersistentAppUICommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // DescribePersistentAppUIInput
 *   PersistentAppUIId: "STRING_VALUE", // required
 * };
 * const command = new DescribePersistentAppUICommand(input);
 * const response = await client.send(command);
 * // { // DescribePersistentAppUIOutput
 * //   PersistentAppUI: { // PersistentAppUI
 * //     PersistentAppUIId: "STRING_VALUE",
 * //     PersistentAppUITypeList: [ // PersistentAppUITypeList
 * //       "SHS" || "TEZ" || "YTS",
 * //     ],
 * //     PersistentAppUIStatus: "STRING_VALUE",
 * //     AuthorId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastStateChangeReason: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribePersistentAppUICommandInput - {@link DescribePersistentAppUICommandInput}
 * @returns {@link DescribePersistentAppUICommandOutput}
 * @see {@link DescribePersistentAppUICommandInput} for command's `input` shape.
 * @see {@link DescribePersistentAppUICommandOutput} for command's `response` shape.
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
export class DescribePersistentAppUICommand extends $Command
  .classBuilder<
    DescribePersistentAppUICommandInput,
    DescribePersistentAppUICommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "DescribePersistentAppUI", {})
  .n("EMRClient", "DescribePersistentAppUICommand")
  .sc(DescribePersistentAppUI)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePersistentAppUIInput;
      output: DescribePersistentAppUIOutput;
    };
    sdk: {
      input: DescribePersistentAppUICommandInput;
      output: DescribePersistentAppUICommandOutput;
    };
  };
}
