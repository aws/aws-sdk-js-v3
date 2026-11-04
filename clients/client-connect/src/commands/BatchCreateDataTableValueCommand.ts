// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateDataTableValueRequest, BatchCreateDataTableValueResponse } from "../models/models_0";
import { BatchCreateDataTableValue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates values for attributes in a data table. The value may be a default or it may be associated with a primary value. The value must pass all customer defined validation as well as the default validation for the value type. The operation must conform to Batch Operation API Standards. Although the standard specifies that successful and failed entities are listed separately in the response, authorization fails if any primary values or attributes are unauthorized. The combination of primary values and the attribute name serve as the identifier for the individual item request.
 *
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
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Operation cannot be performed at this time as there is a conflict with another operation or contact state.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The service quota has been exceeded.
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
export class BatchCreateDataTableValueCommand extends command<BatchCreateDataTableValueCommandInput, BatchCreateDataTableValueCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateDataTableValue",
  BatchCreateDataTableValue$
) {
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
