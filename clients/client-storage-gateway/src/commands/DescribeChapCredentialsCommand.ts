// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeChapCredentialsInput,
  DescribeChapCredentialsOutput,
  DescribeChapCredentialsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeChapCredentialsCommand, se_DescribeChapCredentialsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChapCredentialsCommand}.
 */
export interface DescribeChapCredentialsCommandInput extends DescribeChapCredentialsInput {}
/**
 * @public
 *
 * The output of {@link DescribeChapCredentialsCommand}.
 */
export interface DescribeChapCredentialsCommandOutput extends DescribeChapCredentialsOutput, __MetadataBearer {}

/**
 * <p>Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials
 *          information for a specified iSCSI target, one for each target-initiator pair. This
 *          operation is supported in the volume and tape gateway types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, DescribeChapCredentialsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, DescribeChapCredentialsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const input = { // DescribeChapCredentialsInput
 *   TargetARN: "STRING_VALUE", // required
 * };
 * const command = new DescribeChapCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChapCredentialsOutput
 * //   ChapCredentials: [ // ChapCredentials
 * //     { // ChapInfo
 * //       TargetARN: "STRING_VALUE",
 * //       SecretToAuthenticateInitiator: "STRING_VALUE",
 * //       InitiatorName: "STRING_VALUE",
 * //       SecretToAuthenticateTarget: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeChapCredentialsCommandInput - {@link DescribeChapCredentialsCommandInput}
 * @returns {@link DescribeChapCredentialsCommandOutput}
 * @see {@link DescribeChapCredentialsCommandInput} for command's `input` shape.
 * @see {@link DescribeChapCredentialsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @public
 * @example To describe CHAP credetnitals for an iSCSI
 * ```javascript
 * // Returns an array of Challenge-Handshake Authentication Protocol (CHAP) credentials information for a specified iSCSI target, one for each target-initiator pair.
 * const input = {
 *   "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 * };
 * const command = new DescribeChapCredentialsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ChapCredentials": [
 *     {
 *       "InitiatorName": "iqn.1991-05.com.microsoft:computername.domain.example.com",
 *       "SecretToAuthenticateInitiator": "111111111111",
 *       "SecretToAuthenticateTarget": "222222222222",
 *       "TargetARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:myvolume"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-chap-credetnitals-for-an-iscsi-1471467462967
 * ```
 *
 */
export class DescribeChapCredentialsCommand extends $Command
  .classBuilder<
    DescribeChapCredentialsCommandInput,
    DescribeChapCredentialsCommandOutput,
    StorageGatewayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: StorageGatewayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StorageGateway_20130630", "DescribeChapCredentials", {})
  .n("StorageGatewayClient", "DescribeChapCredentialsCommand")
  .f(void 0, DescribeChapCredentialsOutputFilterSensitiveLog)
  .ser(se_DescribeChapCredentialsCommand)
  .de(de_DescribeChapCredentialsCommand)
  .build() {}
