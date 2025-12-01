// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { BatchCreateDataTableValueRequest, BatchCreateDataTableValueResponse } from "../models/models_0";
import { BatchCreateDataTableValue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateDataTableValueCommand}.
 */
export interface BatchCreateDataTableValueCommandInput extends BatchCreateDataTableValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateDataTableValueCommand}.
 */
export interface BatchCreateDataTableValueCommandOutput extends BatchCreateDataTableValueResponse, __MetadataBearer {}

/**
 * <p>Creates values for attributes in a data table. The value may be a default or it may be associated with a primary value. The value must pass all customer defined validation as well as the default validation for the value type. The operation must conform to Batch Operation API Standards. Although the standard specifies that successful and failed entities are listed separately in the response, authorization fails if any primary values or attributes are unauthorized. The combination of primary values and the attribute name serve as the identifier for the individual item request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchCreateDataTableValueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchCreateDataTableValueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchCreateDataTableValueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   Values: [ // DataTableValueList // required
 *     { // DataTableValue
 *       PrimaryValues: [ // PrimaryValuesSet
 *         { // PrimaryValue
 *           AttributeName: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       AttributeName: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *       LockVersion: { // DataTableLockVersion
 *         DataTable: "STRING_VALUE",
 *         Attribute: "STRING_VALUE",
 *         PrimaryValues: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *       LastModifiedTime: new Date("TIMESTAMP"),
 *       LastModifiedRegion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchCreateDataTableValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateDataTableValueResponse
 * //   Successful: [ // BatchCreateDataTableValueSuccessResultList // required
 * //     { // BatchCreateDataTableValueSuccessResult
 * //       PrimaryValues: [ // PrimaryValuesSet // required
 * //         { // PrimaryValue
 * //           AttributeName: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AttributeName: "STRING_VALUE", // required
 * //       RecordId: "STRING_VALUE", // required
 * //       LockVersion: { // DataTableLockVersion
 * //         DataTable: "STRING_VALUE",
 * //         Attribute: "STRING_VALUE",
 * //         PrimaryValues: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Failed: [ // BatchCreateDataTableValueFailureResultList // required
 * //     { // BatchCreateDataTableValueFailureResult
 * //       PrimaryValues: [ // required
 * //         {
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
 * @param BatchCreateDataTableValueCommandInput - {@link BatchCreateDataTableValueCommandInput}
 * @returns {@link BatchCreateDataTableValueCommandOutput}
 * @see {@link BatchCreateDataTableValueCommandInput} for command's `input` shape.
 * @see {@link BatchCreateDataTableValueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or contact
 *    state.</p>
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class BatchCreateDataTableValueCommand extends $Command
  .classBuilder<
    BatchCreateDataTableValueCommandInput,
    BatchCreateDataTableValueCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "BatchCreateDataTableValue", {})
  .n("ConnectClient", "BatchCreateDataTableValueCommand")
  .sc(BatchCreateDataTableValue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateDataTableValueRequest;
      output: BatchCreateDataTableValueResponse;
    };
    sdk: {
      input: BatchCreateDataTableValueCommandInput;
      output: BatchCreateDataTableValueCommandOutput;
    };
  };
}
