// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPublicKeysRequest, ListPublicKeysResponse } from "../models/models_0";
import { de_ListPublicKeysCommand, se_ListPublicKeysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPublicKeysCommand}.
 */
export interface ListPublicKeysCommandInput extends ListPublicKeysRequest {}
/**
 * @public
 *
 * The output of {@link ListPublicKeysCommand}.
 */
export interface ListPublicKeysCommandOutput extends ListPublicKeysResponse, __MetadataBearer {}

/**
 * <p>Returns all public keys whose private keys were used to sign the digest files within the
 *          specified time range. The public key is needed to validate digest files that were signed
 *          with its corresponding private key.</p>
 *          <note>
 *             <p>CloudTrail uses different private and public key pairs per Region. Each digest
 *             file is signed with a private key unique to its Region. When you validate a digest file
 *             from a specific Region, you must look in the same Region for its corresponding public
 *             key.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, ListPublicKeysCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, ListPublicKeysCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // ListPublicKeysRequest
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPublicKeysCommand(input);
 * const response = await client.send(command);
 * // { // ListPublicKeysResponse
 * //   PublicKeyList: [ // PublicKeyList
 * //     { // PublicKey
 * //       Value: new Uint8Array(),
 * //       ValidityStartTime: new Date("TIMESTAMP"),
 * //       ValidityEndTime: new Date("TIMESTAMP"),
 * //       Fingerprint: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPublicKeysCommandInput - {@link ListPublicKeysCommandInput}
 * @returns {@link ListPublicKeysCommandOutput}
 * @see {@link ListPublicKeysCommandInput} for command's `input` shape.
 * @see {@link ListPublicKeysCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link InvalidTimeRangeException} (client fault)
 *  <p>Occurs if the timestamp values are not valid. Either the start time occurs after the end
 *          time, or the time range is outside the range of possible values.</p>
 *
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>Reserved for future use.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class ListPublicKeysCommand extends $Command
  .classBuilder<
    ListPublicKeysCommandInput,
    ListPublicKeysCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CloudTrail_20131101", "ListPublicKeys", {})
  .n("CloudTrailClient", "ListPublicKeysCommand")
  .f(void 0, void 0)
  .ser(se_ListPublicKeysCommand)
  .de(de_ListPublicKeysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPublicKeysRequest;
      output: ListPublicKeysResponse;
    };
    sdk: {
      input: ListPublicKeysCommandInput;
      output: ListPublicKeysCommandOutput;
    };
  };
}
