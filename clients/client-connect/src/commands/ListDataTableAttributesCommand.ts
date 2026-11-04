// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataTableAttributesRequest, ListDataTableAttributesResponse } from "../models/models_2";
import { ListDataTableAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataTableAttributesCommand}.
 */
export interface ListDataTableAttributesCommandInput extends ListDataTableAttributesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataTableAttributesCommand}.
 */
export interface ListDataTableAttributesCommandOutput extends ListDataTableAttributesResponse, __MetadataBearer {}

/**
 * Returns all attributes for a specified data table. A maximum of 100 attributes per data table is allowed. Customers can request an increase by using Amazon Web Services Service Quotas. The response can be filtered by specific attribute IDs for CloudFormation integration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListDataTableAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListDataTableAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListDataTableAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   AttributeIds: [ // AttributeIds
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataTableAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataTableAttributesResponse
 * //   NextToken: "STRING_VALUE",
 * //   Attributes: [ // AttributeList // required
 * //     { // DataTableAttribute
 * //       AttributeId: "STRING_VALUE",
 * //       Name: "STRING_VALUE", // required
 * //       ValueType: "TEXT" || "NUMBER" || "BOOLEAN" || "TEXT_LIST" || "NUMBER_LIST", // required
 * //       Description: "STRING_VALUE",
 * //       DataTableId: "STRING_VALUE",
 * //       DataTableArn: "STRING_VALUE",
 * //       Primary: true || false,
 * //       Version: "STRING_VALUE",
 * //       LockVersion: { // DataTableLockVersion
 * //         DataTable: "STRING_VALUE",
 * //         Attribute: "STRING_VALUE",
 * //         PrimaryValues: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //       Validation: { // Validation
 * //         MinLength: Number("int"),
 * //         MaxLength: Number("int"),
 * //         MinValues: Number("int"),
 * //         MaxValues: Number("int"),
 * //         IgnoreCase: true || false,
 * //         Minimum: Number("double"),
 * //         Maximum: Number("double"),
 * //         ExclusiveMinimum: Number("double"),
 * //         ExclusiveMaximum: Number("double"),
 * //         MultipleOf: Number("double"),
 * //         Enum: { // ValidationEnum
 * //           Strict: true || false,
 * //           Values: [ // ValidationEnumValues
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataTableAttributesCommandInput - {@link ListDataTableAttributesCommandInput}
 * @returns {@link ListDataTableAttributesCommandOutput}
 * @see {@link ListDataTableAttributesCommandInput} for command's `input` shape.
 * @see {@link ListDataTableAttributesCommandOutput} for command's `response` shape.
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
export class ListDataTableAttributesCommand extends command<ListDataTableAttributesCommandInput, ListDataTableAttributesCommandOutput>(
  _ep0,
  _mw0,
  "ListDataTableAttributes",
  ListDataTableAttributes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataTableAttributesRequest;
      output: ListDataTableAttributesResponse;
    };
    sdk: {
      input: ListDataTableAttributesCommandInput;
      output: ListDataTableAttributesCommandOutput;
    };
  };
}
