// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetSupportedResourceTypesOutput } from "../models/models_0";
import { de_GetSupportedResourceTypesCommand, se_GetSupportedResourceTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSupportedResourceTypesCommand}.
 */
export interface GetSupportedResourceTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link GetSupportedResourceTypesCommand}.
 */
export interface GetSupportedResourceTypesCommandOutput extends GetSupportedResourceTypesOutput, __MetadataBearer {}

/**
 * <p>Returns the Amazon Web Services resource types supported by Backup.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetSupportedResourceTypesCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetSupportedResourceTypesCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupClient(config);
 * const input = {};
 * const command = new GetSupportedResourceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetSupportedResourceTypesOutput
 * //   ResourceTypes: [ // ResourceTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSupportedResourceTypesCommandInput - {@link GetSupportedResourceTypesCommandInput}
 * @returns {@link GetSupportedResourceTypesCommandOutput}
 * @see {@link GetSupportedResourceTypesCommandInput} for command's `input` shape.
 * @see {@link GetSupportedResourceTypesCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class GetSupportedResourceTypesCommand extends $Command
  .classBuilder<
    GetSupportedResourceTypesCommandInput,
    GetSupportedResourceTypesCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "GetSupportedResourceTypes", {})
  .n("BackupClient", "GetSupportedResourceTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetSupportedResourceTypesCommand)
  .de(de_GetSupportedResourceTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetSupportedResourceTypesOutput;
    };
    sdk: {
      input: GetSupportedResourceTypesCommandInput;
      output: GetSupportedResourceTypesCommandOutput;
    };
  };
}
