// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { UpdateStorageRequest, UpdateStorageResponse } from "../models/models_0";
import { de_UpdateStorageCommand, se_UpdateStorageCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateStorageCommand}.
 */
export interface UpdateStorageCommandInput extends UpdateStorageRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStorageCommand}.
 */
export interface UpdateStorageCommandOutput extends UpdateStorageResponse, __MetadataBearer {}

/**
 * Updates cluster broker volume size (or) sets cluster storage mode to TIERED.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, UpdateStorageCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, UpdateStorageCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new KafkaClient(config);
 * const input = { // UpdateStorageRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   CurrentVersion: "STRING_VALUE", // required
 *   ProvisionedThroughput: { // ProvisionedThroughput
 *     Enabled: true || false,
 *     VolumeThroughput: Number("int"),
 *   },
 *   StorageMode: "LOCAL" || "TIERED",
 *   VolumeSizeGB: Number("int"),
 * };
 * const command = new UpdateStorageCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStorageResponse
 * //   ClusterArn: "STRING_VALUE",
 * //   ClusterOperationArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStorageCommandInput - {@link UpdateStorageCommandInput}
 * @returns {@link UpdateStorageCommandOutput}
 * @see {@link UpdateStorageCommandInput} for command's `input` shape.
 * @see {@link UpdateStorageCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link KafkaServiceException}
 * <p>Base exception class for all service exceptions from Kafka service.</p>
 *
 * @public
 */
export class UpdateStorageCommand extends $Command
  .classBuilder<
    UpdateStorageCommandInput,
    UpdateStorageCommandOutput,
    KafkaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KafkaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Kafka", "UpdateStorage", {})
  .n("KafkaClient", "UpdateStorageCommand")
  .f(void 0, void 0)
  .ser(se_UpdateStorageCommand)
  .de(de_UpdateStorageCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStorageRequest;
      output: UpdateStorageResponse;
    };
    sdk: {
      input: UpdateStorageCommandInput;
      output: UpdateStorageCommandOutput;
    };
  };
}
