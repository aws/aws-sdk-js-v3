// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { DescribeKeyRequest, DescribeKeyResponse, DescribeKeyResponseFilterSensitiveLog } from "../models/models_0";
import { de_DescribeKeyCommand, se_DescribeKeyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandInput extends DescribeKeyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeKeyCommand}.
 */
export interface DescribeKeyCommandOutput extends DescribeKeyResponse, __MetadataBearer {}

/**
 * <p>Retrieves the API key resource details.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, DescribeKeyCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, DescribeKeyCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // DescribeKeyRequest
 *   KeyName: "STRING_VALUE", // required
 * };
 * const command = new DescribeKeyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeKeyResponse
 * //   Key: "STRING_VALUE", // required
 * //   KeyArn: "STRING_VALUE", // required
 * //   KeyName: "STRING_VALUE", // required
 * //   Restrictions: { // ApiKeyRestrictions
 * //     AllowActions: [ // ApiKeyActionList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowResources: [ // GeoArnList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     AllowReferers: [ // RefererPatternList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   ExpireTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   Description: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeKeyCommandInput - {@link DescribeKeyCommandInput}
 * @returns {@link DescribeKeyCommandOutput}
 * @see {@link DescribeKeyCommandInput} for command's `input` shape.
 * @see {@link DescribeKeyCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 *
 * @public
 */
export class DescribeKeyCommand extends $Command
  .classBuilder<
    DescribeKeyCommandInput,
    DescribeKeyCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "DescribeKey", {})
  .n("LocationClient", "DescribeKeyCommand")
  .f(void 0, DescribeKeyResponseFilterSensitiveLog)
  .ser(se_DescribeKeyCommand)
  .de(de_DescribeKeyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeKeyRequest;
      output: DescribeKeyResponse;
    };
    sdk: {
      input: DescribeKeyCommandInput;
      output: DescribeKeyCommandOutput;
    };
  };
}
