// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchUpdateDataTableValueRequest, BatchUpdateDataTableValueResponse } from "../models/models_0";
import { BatchUpdateDataTableValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchUpdateDataTableValueCommand}.
 */
export interface BatchUpdateDataTableValueCommandInput extends BatchUpdateDataTableValueRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateDataTableValueCommand}.
 */
export interface BatchUpdateDataTableValueCommandOutput extends BatchUpdateDataTableValueResponse, __MetadataBearer {}

/**
 * Updates multiple data table values using all properties from BatchCreateDataTableValue. System managed values are not modifiable by customers. The operation requires proper lock versions to prevent concurrent modification conflicts.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, BatchUpdateDataTableValueCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, BatchUpdateDataTableValueCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // BatchUpdateDataTableValueRequest
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
 * const command = new BatchUpdateDataTableValueCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateDataTableValueResponse
 * //   Successful: [ // BatchUpdateDataTableValueSuccessResultList // required
 * //     { // BatchUpdateDataTableValueSuccessResult
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
 * //   Failed: [ // BatchUpdateDataTableValueFailureResultList // required
 * //     { // BatchUpdateDataTableValueFailureResult
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
 * @param BatchUpdateDataTableValueCommandInput - {@link BatchUpdateDataTableValueCommandInput}
 * @returns {@link BatchUpdateDataTableValueCommandOutput}
 * @see {@link BatchUpdateDataTableValueCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateDataTableValueCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Operation cannot be performed at this time as there is a conflict with another operation or contact state.
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
export class BatchUpdateDataTableValueCommand extends command<BatchUpdateDataTableValueCommandInput, BatchUpdateDataTableValueCommandOutput>(
  _ep0,
  _mw0,
  "BatchUpdateDataTableValue",
  BatchUpdateDataTableValue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateDataTableValueRequest;
      output: BatchUpdateDataTableValueResponse;
    };
    sdk: {
      input: BatchUpdateDataTableValueCommandInput;
      output: BatchUpdateDataTableValueCommandOutput;
    };
  };
}
