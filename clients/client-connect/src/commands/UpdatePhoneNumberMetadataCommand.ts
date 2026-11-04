// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePhoneNumberMetadataRequest } from "../models/models_4";
import { UpdatePhoneNumberMetadata$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePhoneNumberMetadataCommand}.
 */
export interface UpdatePhoneNumberMetadataCommandInput extends UpdatePhoneNumberMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdatePhoneNumberMetadataCommand}.
 */
export interface UpdatePhoneNumberMetadataCommandOutput extends __MetadataBearer {}

/**
 * Updates a phone number’s metadata.
 *
 * > **Important:** To verify the status of a previous UpdatePhoneNumberMetadata operation, call the [DescribePhoneNumber](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html) API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdatePhoneNumberMetadataCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdatePhoneNumberMetadataCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdatePhoneNumberMetadataRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   PhoneNumberDescription: "STRING_VALUE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new UpdatePhoneNumberMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdatePhoneNumberMetadataCommandInput - {@link UpdatePhoneNumberMetadataCommandInput}
 * @returns {@link UpdatePhoneNumberMetadataCommandOutput}
 * @see {@link UpdatePhoneNumberMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdatePhoneNumberMetadataCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
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
export class UpdatePhoneNumberMetadataCommand extends command<UpdatePhoneNumberMetadataCommandInput, UpdatePhoneNumberMetadataCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePhoneNumberMetadata",
  UpdatePhoneNumberMetadata$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePhoneNumberMetadataRequest;
      output: {};
    };
    sdk: {
      input: UpdatePhoneNumberMetadataCommandInput;
      output: UpdatePhoneNumberMetadataCommandOutput;
    };
  };
}
