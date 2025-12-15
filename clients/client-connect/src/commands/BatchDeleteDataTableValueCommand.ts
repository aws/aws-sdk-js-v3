// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteDataTableValueRequest, BatchDeleteDataTableValueResponse } from "../models/models_0";
import { BatchDeleteDataTableValue } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteDataTableValueCommand}.
 */
export interface BatchDeleteDataTableValueCommandInput extends BatchDeleteDataTableValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteDataTableValueCommand}.
 */
export interface BatchDeleteDataTableValueCommandOutput extends BatchDeleteDataTableValueResponse, __MetadataBearer {}

/**
 * <p>Deletes multiple values from a data table. API users may delete values at any time. When deletion is requested
 *    from the admin website, a warning is shown alerting the user of the most recent time the attribute and its values
 *    were accessed. System managed values are not deletable by customers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchDeleteDataTableValueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchDeleteDataTableValueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchDeleteDataTableValueRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   Values: [ // DataTableDeleteValueIdentifierList // required
 *     { // DataTableDeleteValueIdentifier
 *       PrimaryValues: [ // PrimaryValuesSet
 *         { // PrimaryValue
 *           AttributeName: "STRING_VALUE", // required
 *           Value: "STRING_VALUE", // required
 *         },
 *       ],
 *       AttributeName: "STRING_VALUE", // required
 *       LockVersion: { // DataTableLockVersion
 *         DataTable: "STRING_VALUE",
 *         Attribute: "STRING_VALUE",
 *         PrimaryValues: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchDeleteDataTableValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteDataTableValueResponse
 * //   Successful: [ // BatchDeleteDataTableValueSuccessResultList // required
 * //     { // BatchDeleteDataTableValueSuccessResult
 * //       PrimaryValues: [ // PrimaryValuesSet // required
 * //         { // PrimaryValue
 * //           AttributeName: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       AttributeName: "STRING_VALUE", // required
 * //       LockVersion: { // DataTableLockVersion
 * //         DataTable: "STRING_VALUE",
 * //         Attribute: "STRING_VALUE",
 * //         PrimaryValues: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Failed: [ // BatchDeleteDataTableValueFailureResultList // required
 * //     { // BatchDeleteDataTableValueFailureResult
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
 * @param BatchDeleteDataTableValueCommandInput - {@link BatchDeleteDataTableValueCommandInput}
 * @returns {@link BatchDeleteDataTableValueCommandOutput}
 * @see {@link BatchDeleteDataTableValueCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteDataTableValueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Operation cannot be performed at this time as there is a conflict with another operation or contact
 *    state.</p>
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
export class BatchDeleteDataTableValueCommand extends $Command
  .classBuilder<
    BatchDeleteDataTableValueCommandInput,
    BatchDeleteDataTableValueCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "BatchDeleteDataTableValue", {})
  .n("ConnectClient", "BatchDeleteDataTableValueCommand")
  .sc(BatchDeleteDataTableValue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteDataTableValueRequest;
      output: BatchDeleteDataTableValueResponse;
    };
    sdk: {
      input: BatchDeleteDataTableValueCommandInput;
      output: BatchDeleteDataTableValueCommandOutput;
    };
  };
}
