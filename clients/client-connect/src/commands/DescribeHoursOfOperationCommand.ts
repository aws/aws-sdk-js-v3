// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeHoursOfOperationRequest, DescribeHoursOfOperationResponse } from "../models/models_1";
import { DescribeHoursOfOperation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeHoursOfOperationCommand}.
 */
export interface DescribeHoursOfOperationCommandInput extends DescribeHoursOfOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeHoursOfOperationCommand}.
 */
export interface DescribeHoursOfOperationCommandOutput extends DescribeHoursOfOperationResponse, __MetadataBearer {}

/**
 * Describes the hours of operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeHoursOfOperationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeHoursOfOperationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeHoursOfOperationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeHoursOfOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeHoursOfOperationResponse
 * //   HoursOfOperation: { // HoursOfOperation
 * //     HoursOfOperationId: "STRING_VALUE",
 * //     HoursOfOperationArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     TimeZone: "STRING_VALUE",
 * //     Config: [ // HoursOfOperationConfigList
 * //       { // HoursOfOperationConfig
 * //         Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY", // required
 * //         StartTime: { // HoursOfOperationTimeSlice
 * //           Hours: Number("int"), // required
 * //           Minutes: Number("int"), // required
 * //         },
 * //         EndTime: {
 * //           Hours: Number("int"), // required
 * //           Minutes: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     ParentHoursOfOperations: [ // ParentHoursOfOperationsList
 * //       { // HoursOfOperationsIdentifier
 * //         Name: "STRING_VALUE", // required
 * //         Id: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeHoursOfOperationCommandInput - {@link DescribeHoursOfOperationCommandInput}
 * @returns {@link DescribeHoursOfOperationCommandOutput}
 * @see {@link DescribeHoursOfOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeHoursOfOperationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeHoursOfOperationCommand extends command<DescribeHoursOfOperationCommandInput, DescribeHoursOfOperationCommandOutput>(
  _ep0,
  _mw0,
  "DescribeHoursOfOperation",
  DescribeHoursOfOperation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeHoursOfOperationRequest;
      output: DescribeHoursOfOperationResponse;
    };
    sdk: {
      input: DescribeHoursOfOperationCommandInput;
      output: DescribeHoursOfOperationCommandOutput;
    };
  };
}
