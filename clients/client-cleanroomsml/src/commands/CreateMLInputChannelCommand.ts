// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMLInputChannelRequest,
  CreateMLInputChannelRequestFilterSensitiveLog,
  CreateMLInputChannelResponse,
} from "../models/models_0";
import { de_CreateMLInputChannelCommand, se_CreateMLInputChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMLInputChannelCommand}.
 */
export interface CreateMLInputChannelCommandInput extends CreateMLInputChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateMLInputChannelCommand}.
 */
export interface CreateMLInputChannelCommandOutput extends CreateMLInputChannelResponse, __MetadataBearer {}

/**
 * <p>Provides the information to create an ML input channel. An ML input channel is the result of a query that can be used for ML modeling.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateMLInputChannelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateMLInputChannelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateMLInputChannelRequest
 *   membershipIdentifier: "STRING_VALUE", // required
 *   configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationArnList // required
 *     "STRING_VALUE",
 *   ],
 *   inputChannel: { // InputChannel
 *     dataSource: { // InputChannelDataSource Union: only one key present
 *       protectedQueryInputParameters: { // ProtectedQueryInputParameters
 *         sqlParameters: { // ProtectedQuerySQLParameters
 *           queryString: "STRING_VALUE",
 *           analysisTemplateArn: "STRING_VALUE",
 *           parameters: { // ParameterMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         computeConfiguration: { // ComputeConfiguration Union: only one key present
 *           worker: { // WorkerComputeConfiguration
 *             type: "CR.1X" || "CR.4X",
 *             number: Number("int"),
 *           },
 *         },
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   name: "STRING_VALUE", // required
 *   retentionInDays: Number("int"), // required
 *   description: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateMLInputChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateMLInputChannelResponse
 * //   mlInputChannelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateMLInputChannelCommandInput - {@link CreateMLInputChannelCommandInput}
 * @returns {@link CreateMLInputChannelCommandOutput}
 * @see {@link CreateMLInputChannelCommandInput} for command's `input` shape.
 * @see {@link CreateMLInputChannelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class CreateMLInputChannelCommand extends $Command
  .classBuilder<
    CreateMLInputChannelCommandInput,
    CreateMLInputChannelCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "CreateMLInputChannel", {})
  .n("CleanRoomsMLClient", "CreateMLInputChannelCommand")
  .f(CreateMLInputChannelRequestFilterSensitiveLog, void 0)
  .ser(se_CreateMLInputChannelCommand)
  .de(de_CreateMLInputChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMLInputChannelRequest;
      output: CreateMLInputChannelResponse;
    };
    sdk: {
      input: CreateMLInputChannelCommandInput;
      output: CreateMLInputChannelCommandOutput;
    };
  };
}
