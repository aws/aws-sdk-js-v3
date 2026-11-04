// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSubscriptionInput, CreateSubscriptionOutput } from "../models/models_0";
import { CreateSubscription$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionCommand}.
 */
export interface CreateSubscriptionCommandInput extends CreateSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionCommand}.
 */
export interface CreateSubscriptionCommandOutput extends CreateSubscriptionOutput, __MetadataBearer {}

/**
 * Creates a new Subscription within a Domain for billing and user management.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectHealthClient, CreateSubscriptionCommand } from "@aws-sdk/client-connecthealth"; // ES Modules import
 * // const { ConnectHealthClient, CreateSubscriptionCommand } = require("@aws-sdk/client-connecthealth"); // CommonJS import
 * // import type { ConnectHealthClientConfig } from "@aws-sdk/client-connecthealth";
 * const config = {}; // type is ConnectHealthClientConfig
 * const client = new ConnectHealthClient(config);
 * const input = { // CreateSubscriptionInput
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new CreateSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionOutput
 * //   domainId: "STRING_VALUE", // required
 * //   subscriptionId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   status: "ACTIVE" || "INACTIVE" || "DELETED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   lastUpdatedAt: new Date("TIMESTAMP"), // required
 * //   activatedAt: new Date("TIMESTAMP"),
 * //   deactivatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionCommandInput - {@link CreateSubscriptionCommandInput}
 * @returns {@link CreateSubscriptionCommandOutput}
 * @see {@link CreateSubscriptionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link ConnectHealthClientResolvedConfig | config} for ConnectHealthClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * This error is thrown when the client does not supply proper credentials to the API.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This error is thrown when a transient error causes our API to fail.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This error is thrown when the requested resource is not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This error is thrown when the client supplies invalid input to the API.
 *
 * @throws {@link ConnectHealthServiceException}
 *
 * Base exception class for all service exceptions from ConnectHealth service.
 *
 * @public
 */
export class CreateSubscriptionCommand extends command<CreateSubscriptionCommandInput, CreateSubscriptionCommandOutput>(
  _ep0,
  _mw0,
  "CreateSubscription",
  CreateSubscription$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionInput;
      output: CreateSubscriptionOutput;
    };
    sdk: {
      input: CreateSubscriptionCommandInput;
      output: CreateSubscriptionCommandOutput;
    };
  };
}
