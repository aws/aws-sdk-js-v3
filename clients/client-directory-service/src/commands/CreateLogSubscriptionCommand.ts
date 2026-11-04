// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLogSubscriptionRequest, CreateLogSubscriptionResult } from "../models/models_0";
import { CreateLogSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLogSubscriptionCommand}.
 */
export interface CreateLogSubscriptionCommandInput extends CreateLogSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link CreateLogSubscriptionCommand}.
 */
export interface CreateLogSubscriptionCommandOutput extends CreateLogSubscriptionResult, __MetadataBearer {}

/**
 * Creates a subscription to forward real-time Directory Service domain controller security logs to the specified Amazon CloudWatch log group in your Amazon Web Services account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, CreateLogSubscriptionCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, CreateLogSubscriptionCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * // import type { DirectoryServiceClientConfig } from "@aws-sdk/client-directory-service";
 * const config = {}; // type is DirectoryServiceClientConfig
 * const client = new DirectoryServiceClient(config);
 * const input = { // CreateLogSubscriptionRequest
 *   DirectoryId: "STRING_VALUE", // required
 *   LogGroupName: "STRING_VALUE", // required
 * };
 * const command = new CreateLogSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateLogSubscriptionCommandInput - {@link CreateLogSubscriptionCommandInput}
 * @returns {@link CreateLogSubscriptionCommandOutput}
 * @see {@link CreateLogSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateLogSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for DirectoryServiceClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *
 * A client exception has occurred.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *
 * The specified entity already exists.
 *
 * @throws {@link EntityDoesNotExistException} (client fault)
 *
 * The specified entity could not be found.
 *
 * @throws {@link InsufficientPermissionsException} (client fault)
 *
 * The account does not have sufficient permission to perform the operation.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * An exception has occurred in Directory Service.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link DirectoryServiceServiceException}
 *
 * Base exception class for all service exceptions from DirectoryService service.
 *
 * @public
 */
export class CreateLogSubscriptionCommand extends command<CreateLogSubscriptionCommandInput, CreateLogSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateLogSubscription",
  CreateLogSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLogSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: CreateLogSubscriptionCommandInput;
      output: CreateLogSubscriptionCommandOutput;
    };
  };
}
