// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBrokerEngineTypesRequest, DescribeBrokerEngineTypesResponse } from "../models/models_0";
import { DescribeBrokerEngineTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Describe available engine types and versions.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerEngineTypesCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerEngineTypesCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
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
 *
 * Returns information about an error.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Returns information about an error.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Returns information about an error.
 *
 * @throws {@link MqServiceException}
 *
 * Base exception class for all service exceptions from Mq service.
 *
 * @public
 */
export class DescribeBrokerEngineTypesCommand extends command<DescribeBrokerEngineTypesCommandInput, DescribeBrokerEngineTypesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBrokerEngineTypes",
  DescribeBrokerEngineTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBrokerEngineTypesRequest;
      output: DescribeBrokerEngineTypesResponse;
    };
    sdk: {
      input: DescribeBrokerEngineTypesCommandInput;
      output: DescribeBrokerEngineTypesCommandOutput;
    };
  };
}
