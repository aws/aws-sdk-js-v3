// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeBrokerInstanceOptionsRequest, DescribeBrokerInstanceOptionsResponse } from "../models/models_0";
import { DescribeBrokerInstanceOptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeBrokerInstanceOptionsCommand}.
 */
export interface DescribeBrokerInstanceOptionsCommandInput extends DescribeBrokerInstanceOptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBrokerInstanceOptionsCommand}.
 */
export interface DescribeBrokerInstanceOptionsCommandOutput extends DescribeBrokerInstanceOptionsResponse, __MetadataBearer {}

/**
 * <p>Describe available broker instance options.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, DescribeBrokerInstanceOptionsCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, DescribeBrokerInstanceOptionsCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * // import type { MqClientConfig } from "@aws-sdk/client-mq";
 * const config = {}; // type is MqClientConfig
 * const client = new MqClient(config);
 * const input = { // DescribeBrokerInstanceOptionsRequest
 *   EngineType: "STRING_VALUE",
 *   HostInstanceType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   StorageType: "STRING_VALUE",
 * };
 * const command = new DescribeBrokerInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBrokerInstanceOptionsResponse
 * //   BrokerInstanceOptions: [ // __listOfBrokerInstanceOption
 * //     { // BrokerInstanceOption
 * //       AvailabilityZones: [ // __listOfAvailabilityZone
 * //         { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       EngineType: "ACTIVEMQ" || "RABBITMQ",
 * //       HostInstanceType: "STRING_VALUE",
 * //       StorageType: "EBS" || "EFS",
 * //       SupportedDeploymentModes: [ // __listOfDeploymentMode
 * //         "SINGLE_INSTANCE" || "ACTIVE_STANDBY_MULTI_AZ" || "CLUSTER_MULTI_AZ",
 * //       ],
 * //       SupportedEngineVersions: [ // __listOf__string
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   MaxResults: Number("int"),
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBrokerInstanceOptionsCommandInput - {@link DescribeBrokerInstanceOptionsCommandInput}
 * @returns {@link DescribeBrokerInstanceOptionsCommandOutput}
 * @see {@link DescribeBrokerInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeBrokerInstanceOptionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeBrokerInstanceOptionsCommand extends command<DescribeBrokerInstanceOptionsCommandInput, DescribeBrokerInstanceOptionsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeBrokerInstanceOptions",
  DescribeBrokerInstanceOptions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBrokerInstanceOptionsRequest;
      output: DescribeBrokerInstanceOptionsResponse;
    };
    sdk: {
      input: DescribeBrokerInstanceOptionsCommandInput;
      output: DescribeBrokerInstanceOptionsCommandOutput;
    };
  };
}
