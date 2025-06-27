// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAccountPreferencesRequest, DescribeAccountPreferencesResponse } from "../models/models_0";
import { de_DescribeAccountPreferencesCommand, se_DescribeAccountPreferencesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAccountPreferencesCommand}.
 */
export interface DescribeAccountPreferencesCommandInput extends DescribeAccountPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccountPreferencesCommand}.
 */
export interface DescribeAccountPreferencesCommandOutput extends DescribeAccountPreferencesResponse, __MetadataBearer {}

/**
 * <p>Returns the account preferences settings for the Amazon Web Services account associated with the user making the request, in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeAccountPreferencesCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeAccountPreferencesCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // DescribeAccountPreferencesRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeAccountPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountPreferencesResponse
 * //   ResourceIdPreference: { // ResourceIdPreference
 * //     ResourceIdType: "LONG_ID" || "SHORT_ID",
 * //     Resources: [ // Resources
 * //       "FILE_SYSTEM" || "MOUNT_TARGET",
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountPreferencesCommandInput - {@link DescribeAccountPreferencesCommandInput}
 * @returns {@link DescribeAccountPreferencesCommandOutput}
 * @see {@link DescribeAccountPreferencesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountPreferencesCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @public
 */
export class DescribeAccountPreferencesCommand extends $Command
  .classBuilder<
    DescribeAccountPreferencesCommandInput,
    DescribeAccountPreferencesCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "DescribeAccountPreferences", {})
  .n("EFSClient", "DescribeAccountPreferencesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAccountPreferencesCommand)
  .de(de_DescribeAccountPreferencesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountPreferencesRequest;
      output: DescribeAccountPreferencesResponse;
    };
    sdk: {
      input: DescribeAccountPreferencesCommandInput;
      output: DescribeAccountPreferencesCommandOutput;
    };
  };
}
