// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterResourceRequest, RegisterResourceResponse } from "../models/models_0";
import { RegisterResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterResourceCommand}.
 */
export interface RegisterResourceCommandInput extends RegisterResourceRequest {}
/**
 * @public
 *
 * The output of {@link RegisterResourceCommand}.
 */
export interface RegisterResourceCommandOutput extends RegisterResourceResponse, __MetadataBearer {}

/**
 * Registers the resource as managed by the Data Catalog.
 *
 * To add or update data, Lake Formation needs read/write access to the chosen data location. Choose a role that you know has permission to do this, or choose the AWSServiceRoleForLakeFormationDataAccess service-linked role. When you register the first Amazon S3 path, the service-linked role and a new inline policy are created on your behalf. Lake Formation adds the first path to the inline policy and attaches it to the service-linked role. When you register subsequent paths, Lake Formation adds the path to the existing policy.
 *
 * The following request registers a new location and gives Lake Formation permission to use the service-linked role to access that location.
 *
 * `ResourceArn = arn:aws:s3:::my-bucket/ UseServiceLinkedRole = true`
 *
 * If `UseServiceLinkedRole` is not set to true, you must provide or set the `RoleArn`:
 *
 * `arn:aws:iam::12345:role/my-data-access-role`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, RegisterResourceCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, RegisterResourceCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // RegisterResourceRequest
 *   ResourceArn: "STRING_VALUE", // required
 *   UseServiceLinkedRole: true || false,
 *   RoleArn: "STRING_VALUE",
 *   WithFederation: true || false,
 *   HybridAccessEnabled: true || false,
 *   WithPrivilegedAccess: true || false,
 *   ExpectedResourceOwnerAccount: "STRING_VALUE",
 * };
 * const command = new RegisterResourceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterResourceCommandInput - {@link RegisterResourceCommandInput}
 * @returns {@link RegisterResourceCommandOutput}
 * @see {@link RegisterResourceCommandInput} for command's `input` shape.
 * @see {@link RegisterResourceCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * A resource to be created or added already exists.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *
 * A resource numerical limit was exceeded.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class RegisterResourceCommand extends command<RegisterResourceCommandInput, RegisterResourceCommandOutput>(
  _ep0,
  _mw0,
  "RegisterResource",
  RegisterResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterResourceRequest;
      output: {};
    };
    sdk: {
      input: RegisterResourceCommandInput;
      output: RegisterResourceCommandOutput;
    };
  };
}
