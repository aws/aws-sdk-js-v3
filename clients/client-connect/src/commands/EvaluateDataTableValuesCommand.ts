// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { EvaluateDataTableValuesRequest, EvaluateDataTableValuesResponse } from "../models/models_1";
import { EvaluateDataTableValues$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EvaluateDataTableValuesCommand}.
 */
export interface EvaluateDataTableValuesCommandInput extends EvaluateDataTableValuesRequest {}
/**
 * @public
 *
 * The output of {@link EvaluateDataTableValuesCommand}.
 */
export interface EvaluateDataTableValuesCommandOutput extends EvaluateDataTableValuesResponse, __MetadataBearer {}

/**
 * <p>Evaluates values at the time of the request and returns them. It considers the request's timezone or the table's
 *    timezone, in that order, when accessing time based tables. When a value is accessed, the accessor's identity and the
 *    time of access are saved alongside the value to help identify values that are actively in use. The term "Batch" is
 *    not included in the operation name since it does not meet all the criteria for a batch operation as specified in
 *    Batch Operations: AWS API Standards.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, EvaluateDataTableValuesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, EvaluateDataTableValuesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // EvaluateDataTableValuesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   Values: [ // DataTableValueEvaluationSetList // required
 *     { // DataTableValueEvaluationSet
 *       PrimaryValues: [ // PrimaryValuesSet
 *         { // PrimaryValue
 *           AttributeName: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       AttributeNames: [ // AttributeNameList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   TimeZone: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new EvaluateDataTableValuesCommand(input);
 * const response = await client.send(command);
 * // { // EvaluateDataTableValuesResponse
 * //   Values: [ // DataTableEvaluatedValueList // required
 * //     { // DataTableEvaluatedValue
 * //       RecordId: "STRING_VALUE", // required
 * //       PrimaryValues: [ // PrimaryValuesSet // required
 * //         { // PrimaryValue
 * //           AttributeName: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AttributeName: "STRING_VALUE", // required
 * //       ValueType: "TEXT" || "NUMBER" || "BOOLEAN" || "TEXT_LIST" || "NUMBER_LIST", // required
 * //       Found: true || false, // required
 * //       Error: true || false, // required
 * //       EvaluatedValue: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param EvaluateDataTableValuesCommandInput - {@link EvaluateDataTableValuesCommandInput}
 * @returns {@link EvaluateDataTableValuesCommandOutput}
 * @see {@link EvaluateDataTableValuesCommandInput} for command's `input` shape.
 * @see {@link EvaluateDataTableValuesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class EvaluateDataTableValuesCommand extends $Command
  .classBuilder<
    EvaluateDataTableValuesCommandInput,
    EvaluateDataTableValuesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "EvaluateDataTableValues", {})
  .n("ConnectClient", "EvaluateDataTableValuesCommand")
  .sc(EvaluateDataTableValues$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EvaluateDataTableValuesRequest;
      output: EvaluateDataTableValuesResponse;
    };
    sdk: {
      input: EvaluateDataTableValuesCommandInput;
      output: EvaluateDataTableValuesCommandOutput;
    };
  };
}
