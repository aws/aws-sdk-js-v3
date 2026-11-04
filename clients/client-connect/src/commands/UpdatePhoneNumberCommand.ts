// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePhoneNumberRequest, UpdatePhoneNumberResponse } from "../models/models_4";
import { UpdatePhoneNumber$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberCommand}.
 */
export interface UpdatePhoneNumberCommandInput extends UpdatePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberCommand}.
 */
export interface UpdatePhoneNumberCommandOutput extends UpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * Updates your claimed phone number from its current Connect Customer instance or traffic distribution group to another Connect Customer instance or traffic distribution group in the same Amazon Web Services Region.
 *
 * > **Important:**
 * >
 * > After using this API, you must verify that the phone number is attached to the correct flow in the target instance or traffic distribution group. You need to do this because the API switches only the phone number to a new instance or traffic distribution group. It doesn't migrate the flow configuration of the phone number, too.
 * >
 * > You can call [DescribePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html) API to verify the status of a previous [UpdatePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_UpdatePhoneNumber.html) operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdatePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   TargetArn: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePhoneNumberResponse
 * //   PhoneNumberId: "STRING_VALUE",
 * //   PhoneNumberArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePhoneNumberCommandInput - {@link UpdatePhoneNumberCommandInput}
 * @returns {@link UpdatePhoneNumberCommandOutput}
 * @see {@link UpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient permissions to perform this action.
 *
 * @throws {@link IdempotencyException} (client fault)
 *
 * An entity with the same name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * That resource is already in use (for example, you're trying to add a record with the same name as an existing record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute), remove its reference from related resources and then try again.
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
export class UpdatePhoneNumberCommand extends command<UpdatePhoneNumberCommandInput, UpdatePhoneNumberCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePhoneNumber",
  UpdatePhoneNumber$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberRequest;
      output: UpdatePhoneNumberResponse;
    };
    sdk: {
      input: UpdatePhoneNumberCommandInput;
      output: UpdatePhoneNumberCommandOutput;
    };
  };
}
