// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetGovCloudAccountInformationRequest, GetGovCloudAccountInformationResponse } from "../models/models_0";
import { GetGovCloudAccountInformation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetGovCloudAccountInformationCommand}.
 */
export interface GetGovCloudAccountInformationCommandInput extends GetGovCloudAccountInformationRequest {}
/**
 * @public
 *
 * The output of {@link GetGovCloudAccountInformationCommand}.
 */
export interface GetGovCloudAccountInformationCommandOutput extends GetGovCloudAccountInformationResponse, __MetadataBearer {}

/**
 * Retrieves information about the GovCloud account linked to the specified standard account (if it exists) including the GovCloud account ID and state. To use this API, an IAM user or role must have the `account:GetGovCloudAccountInformation` IAM permission.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AccountClient, GetGovCloudAccountInformationCommand } from "@aws-sdk/client-account"; // ES Modules import
 * // const { AccountClient, GetGovCloudAccountInformationCommand } = require("@aws-sdk/client-account"); // CommonJS import
 * // import type { AccountClientConfig } from "@aws-sdk/client-account";
 * const config = {}; // type is AccountClientConfig
 * const client = new AccountClient(config);
 * const input = { // GetGovCloudAccountInformationRequest
 *   StandardAccountId: "STRING_VALUE",
 * };
 * const command = new GetGovCloudAccountInformationCommand(input);
 * const response = await client.send(command);
 * // { // GetGovCloudAccountInformationResponse
 * //   GovCloudAccountId: "STRING_VALUE", // required
 * //   AccountState: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetGovCloudAccountInformationCommandInput - {@link GetGovCloudAccountInformationCommandInput}
 * @returns {@link GetGovCloudAccountInformationCommandOutput}
 * @see {@link GetGovCloudAccountInformationCommandInput} for command's `input` shape.
 * @see {@link GetGovCloudAccountInformationCommandOutput} for command's `response` shape.
 * @see {@link AccountClientResolvedConfig | config} for AccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The operation failed because the calling identity doesn't have the minimum required permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation failed because of an error internal to Amazon Web Services. Try your operation again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation failed because it specified a resource that can't be found.
 *
 * @throws {@link ResourceUnavailableException} (client fault)
 *
 * The operation failed because it specified a resource that is not currently available.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The operation failed because it was called too frequently and exceeded a throttle limit.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation failed because one of the input parameters was invalid.
 *
 * @throws {@link AccountServiceException}
 *
 * Base exception class for all service exceptions from Account service.
 *
 * @public
 */
export class GetGovCloudAccountInformationCommand extends command<GetGovCloudAccountInformationCommandInput, GetGovCloudAccountInformationCommandOutput>(
  _ep0,
  _mw0,
  "GetGovCloudAccountInformation",
  GetGovCloudAccountInformation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGovCloudAccountInformationRequest;
      output: GetGovCloudAccountInformationResponse;
    };
    sdk: {
      input: GetGovCloudAccountInformationCommandInput;
      output: GetGovCloudAccountInformationCommandOutput;
    };
  };
}
