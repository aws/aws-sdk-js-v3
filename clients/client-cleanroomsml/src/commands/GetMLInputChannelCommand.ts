// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetMLInputChannelRequest,
  GetMLInputChannelResponse,
  GetMLInputChannelResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetMLInputChannelCommand, se_GetMLInputChannelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMLInputChannelCommand}.
 */
export interface GetMLInputChannelCommandInput extends GetMLInputChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetMLInputChannelCommand}.
 */
export interface GetMLInputChannelCommandOutput extends GetMLInputChannelResponse, __MetadataBearer {}

/**
 * <p>Returns information about an ML input channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetMLInputChannelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetMLInputChannelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetMLInputChannelRequest
 *   mlInputChannelArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetMLInputChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetMLInputChannelResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   collaborationIdentifier: "STRING_VALUE", // required
 * //   inputChannel: { // InputChannel
 * //     dataSource: { // InputChannelDataSource Union: only one key present
 * //       protectedQueryInputParameters: { // ProtectedQueryInputParameters
 * //         sqlParameters: { // ProtectedQuerySQLParameters
 * //           queryString: "STRING_VALUE",
 * //           analysisTemplateArn: "STRING_VALUE",
 * //           parameters: { // ParameterMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         computeConfiguration: { // ComputeConfiguration Union: only one key present
 * //           worker: { // WorkerComputeConfiguration
 * //             type: "CR.1X" || "CR.4X",
 * //             number: Number("int"),
 * //           },
 * //         },
 * //         resultFormat: "CSV" || "PARQUET",
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   protectedQueryIdentifier: "STRING_VALUE",
 * //   mlInputChannelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   retentionInDays: Number("int"), // required
 * //   numberOfRecords: Number("long"),
 * //   numberOfFiles: Number("double"),
 * //   sizeInGb: Number("double"),
 * //   description: "STRING_VALUE",
 * //   kmsKeyArn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMLInputChannelCommandInput - {@link GetMLInputChannelCommandInput}
 * @returns {@link GetMLInputChannelCommandOutput}
 * @see {@link GetMLInputChannelCommandInput} for command's `input` shape.
 * @see {@link GetMLInputChannelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
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
export class GetMLInputChannelCommand extends $Command
  .classBuilder<
    GetMLInputChannelCommandInput,
    GetMLInputChannelCommandOutput,
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
  .s("AWSStarkControlService", "GetMLInputChannel", {})
  .n("CleanRoomsMLClient", "GetMLInputChannelCommand")
  .f(void 0, GetMLInputChannelResponseFilterSensitiveLog)
  .ser(se_GetMLInputChannelCommand)
  .de(de_GetMLInputChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMLInputChannelRequest;
      output: GetMLInputChannelResponse;
    };
    sdk: {
      input: GetMLInputChannelCommandInput;
      output: GetMLInputChannelCommandOutput;
    };
  };
}
