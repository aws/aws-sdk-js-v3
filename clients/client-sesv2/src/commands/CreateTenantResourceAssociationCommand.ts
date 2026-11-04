// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateTenantResourceAssociationRequest,
  CreateTenantResourceAssociationResponse,
} from "../models/models_0";
import { CreateTenantResourceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTenantResourceAssociationCommand}.
 */
export interface CreateTenantResourceAssociationCommandInput extends CreateTenantResourceAssociationRequest {}
/**
 * @public
 *
 * The output of {@link CreateTenantResourceAssociationCommand}.
 */
export interface CreateTenantResourceAssociationCommandOutput extends CreateTenantResourceAssociationResponse, __MetadataBearer {}

/**
 * Associate a resource with a tenant.
 *
 * *Resources* can be email identities, configuration sets, or email templates. When you associate a resource with a tenant, you can use that resource when sending emails on behalf of that tenant.
 *
 * A single resource can be associated with multiple tenants, allowing for resource sharing across different tenants while maintaining isolation in email sending operations.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateTenantResourceAssociationCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateTenantResourceAssociationCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // CreateTenantResourceAssociationRequest
 *   TenantName: "STRING_VALUE", // required
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new CreateTenantResourceAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTenantResourceAssociationCommandInput - {@link CreateTenantResourceAssociationCommandInput}
 * @returns {@link CreateTenantResourceAssociationCommandOutput}
 * @see {@link CreateTenantResourceAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateTenantResourceAssociationCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The resource specified in your request already exists.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class CreateTenantResourceAssociationCommand extends command<CreateTenantResourceAssociationCommandInput, CreateTenantResourceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "CreateTenantResourceAssociation",
  CreateTenantResourceAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTenantResourceAssociationRequest;
      output: {};
    };
    sdk: {
      input: CreateTenantResourceAssociationCommandInput;
      output: CreateTenantResourceAssociationCommandOutput;
    };
  };
}
