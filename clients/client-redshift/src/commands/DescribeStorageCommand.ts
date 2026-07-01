// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CustomerStorageMessage } from "../models/models_0";
import { DescribeStorage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DescribeStorageCommand extends command<DescribeStorageCommandInput, DescribeStorageCommandOutput>(
  _ep0,
  _mw0,
  "DescribeStorage",
  DescribeStorage$
) {
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
