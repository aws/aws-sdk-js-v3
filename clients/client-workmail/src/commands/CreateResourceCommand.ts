// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResourceRequest, CreateResourceResponse } from "../models/models_0";
import { CreateResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourceCommand}.
 */
export interface CreateResourceCommandInput extends CreateResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourceCommand}.
 */
export interface CreateResourceCommandOutput extends CreateResourceResponse, __MetadataBearer {}

/**
 * Creates a new WorkMail resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, CreateResourceCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, CreateResourceCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // CreateResourceRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Type: "ROOM" || "EQUIPMENT", // required
 *   Description: "STRING_VALUE",
 *   HiddenFromGlobalAddressList: true || false,
 * };
 * const command = new CreateResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceResponse
 * //   ResourceId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourceCommandInput - {@link CreateResourceCommandInput}
 * @returns {@link CreateResourceCommandOutput}
 * @see {@link CreateResourceCommandInput} for command's `input` shape.
 * @see {@link CreateResourceCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link DirectoryServiceAuthenticationFailedException} (client fault)
 *
 * The directory service doesn't recognize the credentials supplied by WorkMail.
 *
 * @throws {@link DirectoryUnavailableException} (client fault)
 *
 * The directory is unavailable. It might be located in another Region or deleted.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link NameAvailabilityException} (client fault)
 *
 * The user, group, or resource name isn't unique in WorkMail.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link ReservedNameException} (client fault)
 *
 * This user, group, or resource name is not allowed in WorkMail.
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *
 * You can't perform a write operation against a read-only directory.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class CreateResourceCommand extends command<CreateResourceCommandInput, CreateResourceCommandOutput>(
  _ep0,
  _mw0,
  "CreateResource",
  CreateResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceRequest;
      output: CreateResourceResponse;
    };
    sdk: {
      input: CreateResourceCommandInput;
      output: CreateResourceCommandOutput;
    };
  };
}
