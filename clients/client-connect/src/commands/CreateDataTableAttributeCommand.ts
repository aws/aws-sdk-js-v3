// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataTableAttributeRequest, CreateDataTableAttributeResponse } from "../models/models_0";
import { CreateDataTableAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataTableAttributeCommand}.
 */
export interface CreateDataTableAttributeCommandInput extends CreateDataTableAttributeRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataTableAttributeCommand}.
 */
export interface CreateDataTableAttributeCommandOutput extends CreateDataTableAttributeResponse, __MetadataBearer {}

/**
 * Adds an attribute to an existing data table. Creating a new primary attribute uses the empty value for the specified value type for all existing records. This should not affect uniqueness of published data tables since the existing primary values will already be unique. Creating attributes does not create any values. System managed tables may not allow customers to create new attributes.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateDataTableAttributeCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateDataTableAttributeCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateDataTableAttributeRequest
 *   InstanceId: "STRING_VALUE", // required
 *   DataTableId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   ValueType: "TEXT" || "NUMBER" || "BOOLEAN" || "TEXT_LIST" || "NUMBER_LIST", // required
 *   Description: "STRING_VALUE",
 *   Primary: true || false,
 *   Validation: { // Validation
 *     MinLength: Number("int"),
 *     MaxLength: Number("int"),
 *     MinValues: Number("int"),
 *     MaxValues: Number("int"),
 *     IgnoreCase: true || false,
 *     Minimum: Number("double"),
 *     Maximum: Number("double"),
 *     ExclusiveMinimum: Number("double"),
 *     ExclusiveMaximum: Number("double"),
 *     MultipleOf: Number("double"),
 *     Enum: { // ValidationEnum
 *       Strict: true || false,
 *       Values: [ // ValidationEnumValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new CreateDataTableAttributeCommand(input);
 * const response = await client.send(command);
 * // { // CreateDataTableAttributeResponse
 * //   Name: "STRING_VALUE", // required
 * //   AttributeId: "STRING_VALUE",
 * //   LockVersion: { // DataTableLockVersion
 * //     DataTable: "STRING_VALUE",
 * //     Attribute: "STRING_VALUE",
 * //     PrimaryValues: "STRING_VALUE",
 * //     Value: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateDataTableAttributeCommandInput - {@link CreateDataTableAttributeCommandInput}
 * @returns {@link CreateDataTableAttributeCommandOutput}
 * @see {@link CreateDataTableAttributeCommandInput} for command's `input` shape.
 * @see {@link CreateDataTableAttributeCommandOutput} for command's `response` shape.
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
export class CreateDataTableAttributeCommand extends command<CreateDataTableAttributeCommandInput, CreateDataTableAttributeCommandOutput>(
  _ep0,
  _mw0,
  "CreateDataTableAttribute",
  CreateDataTableAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataTableAttributeRequest;
      output: CreateDataTableAttributeResponse;
    };
    sdk: {
      input: CreateDataTableAttributeCommandInput;
      output: CreateDataTableAttributeCommandOutput;
    };
  };
}
