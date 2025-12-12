// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDescribeDataTableValueRequest, BatchDescribeDataTableValueResponse } from "../models/models_0";
import { BatchDescribeDataTableValue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDescribeDataTableValueCommand}.
 */
export interface BatchDescribeDataTableValueCommandInput extends BatchDescribeDataTableValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchDescribeDataTableValueCommand}.
 */
export interface BatchDescribeDataTableValueCommandOutput
  extends BatchDescribeDataTableValueResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves multiple values from a data table without evaluating expressions. Returns the raw stored values along
 *    with metadata such as lock versions and modification timestamps. "Describe" is a deprecated term but is allowed to
 *    maintain consistency with existing operations.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchDescribeDataTableValueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchDescribeDataTableValueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchDescribeDataTableValueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   Values: [ // DataTableValueIdentifierList // required
 *     { // DataTableValueIdentifier
 *       PrimaryValues: [ // PrimaryValuesSet
 *         { // PrimaryValue
 *           AttributeName: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       AttributeName: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDescribeDataTableValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchDescribeDataTableValueResponse
 * //   Successful: [ // BatchDescribeDataTableValueSuccessResultList // required
 * //     { // BatchDescribeDataTableValueSuccessResult
 * //       RecordId: "STRING_VALUE", // required
 * //       AttributeId: "STRING_VALUE", // required
 * //       PrimaryValues: [ // PrimaryValuesResponseSet // required
 * //         { // PrimaryValueResponse
 * //           AttributeName: "STRING_VALUE",
 * //           AttributeId: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttributeName: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE",
 * //       LockVersion: { // DataTableLockVersion
 * //         DataTable: "STRING_VALUE",
 * //         Attribute: "STRING_VALUE",
 * //         PrimaryValues: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Failed: [ // BatchDescribeDataTableValueFailureResultList // required
 * //     { // BatchDescribeDataTableValueFailureResult
 * //       PrimaryValues: [ // PrimaryValuesSet // required
 * //         { // PrimaryValue
 * //           AttributeName: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AttributeName: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDescribeDataTableValueCommandInput - {@link BatchDescribeDataTableValueCommandInput}
 * @returns {@link BatchDescribeDataTableValueCommandOutput}
 * @see {@link BatchDescribeDataTableValueCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeDataTableValueCommandOutput} for command's `response` shape.
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
export class BatchDescribeDataTableValueCommand extends $Command
  .classBuilder<
    BatchDescribeDataTableValueCommandInput,
    BatchDescribeDataTableValueCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "BatchDescribeDataTableValue", {})
  .n("ConnectClient", "BatchDescribeDataTableValueCommand")
  .sc(BatchDescribeDataTableValue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDescribeDataTableValueRequest;
      output: BatchDescribeDataTableValueResponse;
    };
    sdk: {
      input: BatchDescribeDataTableValueCommandInput;
      output: BatchDescribeDataTableValueCommandOutput;
    };
  };
}
