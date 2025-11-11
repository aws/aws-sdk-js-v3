// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CustomerStorageMessage } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeStorage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStorageCommand}.
 */
export interface DescribeStorageCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeStorageCommand}.
 */
export interface DescribeStorageCommandOutput extends CustomerStorageMessage, __MetadataBearer {}

/**
 * <p>Returns account level backups storage size and provisional storage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeStorageCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeStorageCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = {};
 * const command = new DescribeStorageCommand(input);
 * const response = await client.send(command);
 * // { // CustomerStorageMessage
 * //   TotalBackupSizeInMegaBytes: Number("double"),
 * //   TotalProvisionedStorageInMegaBytes: Number("double"),
 * // };
 *
 * ```
 *
 * @param DescribeStorageCommandInput - {@link DescribeStorageCommandInput}
 * @returns {@link DescribeStorageCommandOutput}
 * @see {@link DescribeStorageCommandInput} for command's `input` shape.
 * @see {@link DescribeStorageCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeStorageCommand extends $Command
  .classBuilder<
    DescribeStorageCommandInput,
    DescribeStorageCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeStorage", {})
  .n("RedshiftClient", "DescribeStorageCommand")
  .sc(DescribeStorage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: CustomerStorageMessage;
    };
    sdk: {
      input: DescribeStorageCommandInput;
      output: DescribeStorageCommandOutput;
    };
  };
}
