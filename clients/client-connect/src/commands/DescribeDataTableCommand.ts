// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeDataTableRequest, DescribeDataTableResponse } from "../models/models_1";
import { DescribeDataTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeDataTableCommand}.
 */
export interface DescribeDataTableCommandInput extends DescribeDataTableRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDataTableCommand}.
 */
export interface DescribeDataTableCommandOutput extends DescribeDataTableResponse, __MetadataBearer {}

/**
 * Returns all properties for a data table except for attributes and values. All properties from CreateDataTable are returned as well as properties for region replication, versioning, and system tables. "Describe" is a deprecated term but is allowed to maintain consistency with existing operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeDataTableCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeDataTableCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeDataTableRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 * };
 * const command = new DescribeDataTableCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataTableResponse
 * //   DataTable: { // DataTable
 * //     Name: "STRING_VALUE", // required
 * //     Id: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     TimeZone: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     ValueLockLevel: "NONE" || "DATA_TABLE" || "PRIMARY_VALUE" || "ATTRIBUTE" || "VALUE",
 * //     LockVersion: { // DataTableLockVersion
 * //       DataTable: "STRING_VALUE",
 * //       Attribute: "STRING_VALUE",
 * //       PrimaryValues: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //     Version: "STRING_VALUE",
 * //     VersionDescription: "STRING_VALUE",
 * //     Status: "PUBLISHED",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDataTableCommandInput - {@link DescribeDataTableCommandInput}
 * @returns {@link DescribeDataTableCommandOutput}
 * @see {@link DescribeDataTableCommandInput} for command's `input` shape.
 * @see {@link DescribeDataTableCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
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
export class DescribeDataTableCommand extends command<DescribeDataTableCommandInput, DescribeDataTableCommandOutput>(
  _ep0,
  _mw0,
  "DescribeDataTable",
  DescribeDataTable$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataTableRequest;
      output: DescribeDataTableResponse;
    };
    sdk: {
      input: DescribeDataTableCommandInput;
      output: DescribeDataTableCommandOutput;
    };
  };
}
