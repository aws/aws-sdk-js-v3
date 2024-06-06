// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse } from "../models/models_0";
import { MqClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MqClient";
import { de_DescribeBrokerEngineTypesCommand, se_DescribeBrokerEngineTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBrokerEngineTypesCommand}.
 */
export interface DescribeBrokerEngineTypesCommandInput extends DescribeBrokerEngineTypesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrokerEngineTypesCommand}.
 */
export interface DescribeBrokerEngineTypesCommandOutput extends DescribeBrokerEngineTypesResponse, __MetadataBearer {}

/**
 * <p>Describe available engine types and versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerEngineTypesCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerEngineTypesCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const input = { // DescribeBrokerEngineTypesRequest
 *   EngineType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeBrokerEngineTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrokerEngineTypesResponse
 * //   BrokerEngineTypes: [ // __listOfBrokerEngineType
 * //     { // BrokerEngineType
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ",
 * //       EngineVersions: [ // __listOfEngineVersion
 * //         { // EngineVersion
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrokerEngineTypesCommandInput - {@link DescribeBrokerEngineTypesCommandInput}
 * @returns {@link DescribeBrokerEngineTypesCommandOutput}
 * @see {@link DescribeBrokerEngineTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerEngineTypesCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for MqClient's `config` shape.
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
 * @throws {@link MqServiceException}
 * <p>Base exception class for all service exceptions from Mq service.</p>
 *
 * @public
 */
export class DescribeBrokerEngineTypesCommand extends $Command
  .classBuilder<
    DescribeBrokerEngineTypesCommandInput,
    DescribeBrokerEngineTypesCommandOutput,
    MqClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MqClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mq", "DescribeBrokerEngineTypes", {})
  .n("MqClient", "DescribeBrokerEngineTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBrokerEngineTypesCommand)
  .de(de_DescribeBrokerEngineTypesCommand)
  .build() {}
