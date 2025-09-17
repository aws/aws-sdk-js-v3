// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { KafkaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KafkaClient";
import { CreateConfigurationRequest, CreateConfigurationResponse } from "../models/models_0";
import { de_CreateConfigurationCommand, se_CreateConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfigurationCommand}.
 */
export interface CreateConfigurationCommandInput extends CreateConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfigurationCommand}.
 */
export interface CreateConfigurationCommandOutput extends CreateConfigurationResponse, __MetadataBearer {}

/**
 * <p>Creates a new MSK configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KafkaClient, CreateConfigurationCommand } from "@aws-sdk/client-kafka"; // ES Modules import
 * // const { KafkaClient, CreateConfigurationCommand } = require("@aws-sdk/client-kafka"); // CommonJS import
 * // import type { KafkaClientConfig } from "@aws-sdk/client-kafka";
 * const config = {}; // type is KafkaClientConfig
 * const client = new KafkaClient(config);
 * const input = { // CreateConfigurationRequest
 *   Description: "STRING_VALUE",
 *   KafkaVersions: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   Name: "STRING_VALUE", // required
 *   ServerProperties: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")   // required
 * };
 * const command = new CreateConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfigurationResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LatestRevision: { // ConfigurationRevision
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     Description: "STRING_VALUE",
 * //     Revision: Number("long"), // required
 * //   },
 * //   Name: "STRING_VALUE",
 * //   State: "ACTIVE" || "DELETING" || "DELETE_FAILED",
 * // };
 *
 * ```
 *
 * @param CreateConfigurationCommandInput - {@link CreateConfigurationCommandInput}
 * @returns {@link CreateConfigurationCommandOutput}
 * @see {@link CreateConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link KafkaClientResolvedConfig | config} for KafkaClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Returns information about an error.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
 *
 * @public
 */
export class CreateConfigurationCommand extends $Command
  .classBuilder<
    CreateConfigurationCommandInput,
    CreateConfigurationCommandOutput,
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
  .s("Kafka", "CreateConfiguration", {})
  .n("KafkaClient", "CreateConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfigurationCommand)
  .de(de_CreateConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfigurationRequest;
      output: CreateConfigurationResponse;
    };
    sdk: {
      input: CreateConfigurationCommandInput;
      output: CreateConfigurationCommandOutput;
    };
  };
}
