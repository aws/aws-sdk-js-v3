// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateIdentitySourceCommand,
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
} from "./commands/CreateIdentitySourceCommand";
import {
  CreatePolicyCommand,
  CreatePolicyCommandInput,
  CreatePolicyCommandOutput,
} from "./commands/CreatePolicyCommand";
import {
  CreatePolicyStoreCommand,
  CreatePolicyStoreCommandInput,
  CreatePolicyStoreCommandOutput,
} from "./commands/CreatePolicyStoreCommand";
import {
  CreatePolicyTemplateCommand,
  CreatePolicyTemplateCommandInput,
  CreatePolicyTemplateCommandOutput,
} from "./commands/CreatePolicyTemplateCommand";
import {
  DeleteIdentitySourceCommand,
  DeleteIdentitySourceCommandInput,
  DeleteIdentitySourceCommandOutput,
} from "./commands/DeleteIdentitySourceCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeletePolicyStoreCommand,
  DeletePolicyStoreCommandInput,
  DeletePolicyStoreCommandOutput,
} from "./commands/DeletePolicyStoreCommand";
import {
  DeletePolicyTemplateCommand,
  DeletePolicyTemplateCommandInput,
  DeletePolicyTemplateCommandOutput,
} from "./commands/DeletePolicyTemplateCommand";
import {
  GetIdentitySourceCommand,
  GetIdentitySourceCommandInput,
  GetIdentitySourceCommandOutput,
} from "./commands/GetIdentitySourceCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetPolicyStoreCommand,
  GetPolicyStoreCommandInput,
  GetPolicyStoreCommandOutput,
} from "./commands/GetPolicyStoreCommand";
import {
  GetPolicyTemplateCommand,
  GetPolicyTemplateCommandInput,
  GetPolicyTemplateCommandOutput,
} from "./commands/GetPolicyTemplateCommand";
import { GetSchemaCommand, GetSchemaCommandInput, GetSchemaCommandOutput } from "./commands/GetSchemaCommand";
import {
  IsAuthorizedCommand,
  IsAuthorizedCommandInput,
  IsAuthorizedCommandOutput,
} from "./commands/IsAuthorizedCommand";
import {
  IsAuthorizedWithTokenCommand,
  IsAuthorizedWithTokenCommandInput,
  IsAuthorizedWithTokenCommandOutput,
} from "./commands/IsAuthorizedWithTokenCommand";
import {
  ListIdentitySourcesCommand,
  ListIdentitySourcesCommandInput,
  ListIdentitySourcesCommandOutput,
} from "./commands/ListIdentitySourcesCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListPolicyStoresCommand,
  ListPolicyStoresCommandInput,
  ListPolicyStoresCommandOutput,
} from "./commands/ListPolicyStoresCommand";
import {
  ListPolicyTemplatesCommand,
  ListPolicyTemplatesCommandInput,
  ListPolicyTemplatesCommandOutput,
} from "./commands/ListPolicyTemplatesCommand";
import { PutSchemaCommand, PutSchemaCommandInput, PutSchemaCommandOutput } from "./commands/PutSchemaCommand";
import {
  UpdateIdentitySourceCommand,
  UpdateIdentitySourceCommandInput,
  UpdateIdentitySourceCommandOutput,
} from "./commands/UpdateIdentitySourceCommand";
import {
  UpdatePolicyCommand,
  UpdatePolicyCommandInput,
  UpdatePolicyCommandOutput,
} from "./commands/UpdatePolicyCommand";
import {
  UpdatePolicyStoreCommand,
  UpdatePolicyStoreCommandInput,
  UpdatePolicyStoreCommandOutput,
} from "./commands/UpdatePolicyStoreCommand";
import {
  UpdatePolicyTemplateCommand,
  UpdatePolicyTemplateCommandInput,
  UpdatePolicyTemplateCommandOutput,
} from "./commands/UpdatePolicyTemplateCommand";
import { VerifiedPermissionsClient, VerifiedPermissionsClientConfig } from "./VerifiedPermissionsClient";

const commands = {
  CreateIdentitySourceCommand,
  CreatePolicyCommand,
  CreatePolicyStoreCommand,
  CreatePolicyTemplateCommand,
  DeleteIdentitySourceCommand,
  DeletePolicyCommand,
  DeletePolicyStoreCommand,
  DeletePolicyTemplateCommand,
  GetIdentitySourceCommand,
  GetPolicyCommand,
  GetPolicyStoreCommand,
  GetPolicyTemplateCommand,
  GetSchemaCommand,
  IsAuthorizedCommand,
  IsAuthorizedWithTokenCommand,
  ListIdentitySourcesCommand,
  ListPoliciesCommand,
  ListPolicyStoresCommand,
  ListPolicyTemplatesCommand,
  PutSchemaCommand,
  UpdateIdentitySourceCommand,
  UpdatePolicyCommand,
  UpdatePolicyStoreCommand,
  UpdatePolicyTemplateCommand,
};

export interface VerifiedPermissions {
  /**
   * @see {@link CreateIdentitySourceCommand}
   */
  createIdentitySource(
    args: CreateIdentitySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIdentitySourceCommandOutput>;
  createIdentitySource(
    args: CreateIdentitySourceCommandInput,
    cb: (err: any, data?: CreateIdentitySourceCommandOutput) => void
  ): void;
  createIdentitySource(
    args: CreateIdentitySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyCommand}
   */
  createPolicy(args: CreatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<CreatePolicyCommandOutput>;
  createPolicy(args: CreatePolicyCommandInput, cb: (err: any, data?: CreatePolicyCommandOutput) => void): void;
  createPolicy(
    args: CreatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyStoreCommand}
   */
  createPolicyStore(
    args: CreatePolicyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyStoreCommandOutput>;
  createPolicyStore(
    args: CreatePolicyStoreCommandInput,
    cb: (err: any, data?: CreatePolicyStoreCommandOutput) => void
  ): void;
  createPolicyStore(
    args: CreatePolicyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePolicyTemplateCommand}
   */
  createPolicyTemplate(
    args: CreatePolicyTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePolicyTemplateCommandOutput>;
  createPolicyTemplate(
    args: CreatePolicyTemplateCommandInput,
    cb: (err: any, data?: CreatePolicyTemplateCommandOutput) => void
  ): void;
  createPolicyTemplate(
    args: CreatePolicyTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIdentitySourceCommand}
   */
  deleteIdentitySource(
    args: DeleteIdentitySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIdentitySourceCommandOutput>;
  deleteIdentitySource(
    args: DeleteIdentitySourceCommandInput,
    cb: (err: any, data?: DeleteIdentitySourceCommandOutput) => void
  ): void;
  deleteIdentitySource(
    args: DeleteIdentitySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyCommand}
   */
  deletePolicy(args: DeletePolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeletePolicyCommandOutput>;
  deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyStoreCommand}
   */
  deletePolicyStore(
    args: DeletePolicyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyStoreCommandOutput>;
  deletePolicyStore(
    args: DeletePolicyStoreCommandInput,
    cb: (err: any, data?: DeletePolicyStoreCommandOutput) => void
  ): void;
  deletePolicyStore(
    args: DeletePolicyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePolicyTemplateCommand}
   */
  deletePolicyTemplate(
    args: DeletePolicyTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyTemplateCommandOutput>;
  deletePolicyTemplate(
    args: DeletePolicyTemplateCommandInput,
    cb: (err: any, data?: DeletePolicyTemplateCommandOutput) => void
  ): void;
  deletePolicyTemplate(
    args: DeletePolicyTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetIdentitySourceCommand}
   */
  getIdentitySource(
    args: GetIdentitySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIdentitySourceCommandOutput>;
  getIdentitySource(
    args: GetIdentitySourceCommandInput,
    cb: (err: any, data?: GetIdentitySourceCommandOutput) => void
  ): void;
  getIdentitySource(
    args: GetIdentitySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyCommand}
   */
  getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyStoreCommand}
   */
  getPolicyStore(
    args: GetPolicyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyStoreCommandOutput>;
  getPolicyStore(args: GetPolicyStoreCommandInput, cb: (err: any, data?: GetPolicyStoreCommandOutput) => void): void;
  getPolicyStore(
    args: GetPolicyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPolicyTemplateCommand}
   */
  getPolicyTemplate(
    args: GetPolicyTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyTemplateCommandOutput>;
  getPolicyTemplate(
    args: GetPolicyTemplateCommandInput,
    cb: (err: any, data?: GetPolicyTemplateCommandOutput) => void
  ): void;
  getPolicyTemplate(
    args: GetPolicyTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSchemaCommand}
   */
  getSchema(args: GetSchemaCommandInput, options?: __HttpHandlerOptions): Promise<GetSchemaCommandOutput>;
  getSchema(args: GetSchemaCommandInput, cb: (err: any, data?: GetSchemaCommandOutput) => void): void;
  getSchema(
    args: GetSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link IsAuthorizedCommand}
   */
  isAuthorized(args: IsAuthorizedCommandInput, options?: __HttpHandlerOptions): Promise<IsAuthorizedCommandOutput>;
  isAuthorized(args: IsAuthorizedCommandInput, cb: (err: any, data?: IsAuthorizedCommandOutput) => void): void;
  isAuthorized(
    args: IsAuthorizedCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsAuthorizedCommandOutput) => void
  ): void;

  /**
   * @see {@link IsAuthorizedWithTokenCommand}
   */
  isAuthorizedWithToken(
    args: IsAuthorizedWithTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IsAuthorizedWithTokenCommandOutput>;
  isAuthorizedWithToken(
    args: IsAuthorizedWithTokenCommandInput,
    cb: (err: any, data?: IsAuthorizedWithTokenCommandOutput) => void
  ): void;
  isAuthorizedWithToken(
    args: IsAuthorizedWithTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IsAuthorizedWithTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentitySourcesCommand}
   */
  listIdentitySources(
    args: ListIdentitySourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIdentitySourcesCommandOutput>;
  listIdentitySources(
    args: ListIdentitySourcesCommandInput,
    cb: (err: any, data?: ListIdentitySourcesCommandOutput) => void
  ): void;
  listIdentitySources(
    args: ListIdentitySourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIdentitySourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPoliciesCommand}
   */
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyStoresCommand}
   */
  listPolicyStores(
    args: ListPolicyStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyStoresCommandOutput>;
  listPolicyStores(
    args: ListPolicyStoresCommandInput,
    cb: (err: any, data?: ListPolicyStoresCommandOutput) => void
  ): void;
  listPolicyStores(
    args: ListPolicyStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyStoresCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyTemplatesCommand}
   */
  listPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyTemplatesCommandOutput>;
  listPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    cb: (err: any, data?: ListPolicyTemplatesCommandOutput) => void
  ): void;
  listPolicyTemplates(
    args: ListPolicyTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSchemaCommand}
   */
  putSchema(args: PutSchemaCommandInput, options?: __HttpHandlerOptions): Promise<PutSchemaCommandOutput>;
  putSchema(args: PutSchemaCommandInput, cb: (err: any, data?: PutSchemaCommandOutput) => void): void;
  putSchema(
    args: PutSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSchemaCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateIdentitySourceCommand}
   */
  updateIdentitySource(
    args: UpdateIdentitySourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIdentitySourceCommandOutput>;
  updateIdentitySource(
    args: UpdateIdentitySourceCommandInput,
    cb: (err: any, data?: UpdateIdentitySourceCommandOutput) => void
  ): void;
  updateIdentitySource(
    args: UpdateIdentitySourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIdentitySourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyCommand}
   */
  updatePolicy(args: UpdatePolicyCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePolicyCommandOutput>;
  updatePolicy(args: UpdatePolicyCommandInput, cb: (err: any, data?: UpdatePolicyCommandOutput) => void): void;
  updatePolicy(
    args: UpdatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyStoreCommand}
   */
  updatePolicyStore(
    args: UpdatePolicyStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePolicyStoreCommandOutput>;
  updatePolicyStore(
    args: UpdatePolicyStoreCommandInput,
    cb: (err: any, data?: UpdatePolicyStoreCommandOutput) => void
  ): void;
  updatePolicyStore(
    args: UpdatePolicyStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyStoreCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePolicyTemplateCommand}
   */
  updatePolicyTemplate(
    args: UpdatePolicyTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePolicyTemplateCommandOutput>;
  updatePolicyTemplate(
    args: UpdatePolicyTemplateCommandInput,
    cb: (err: any, data?: UpdatePolicyTemplateCommandOutput) => void
  ): void;
  updatePolicyTemplate(
    args: UpdatePolicyTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePolicyTemplateCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Verified Permissions is a permissions management service from Amazon Web Services. You can use Verified Permissions to manage
 *             permissions for your application, and authorize user access based on those permissions.
 *             Using Verified Permissions, application developers can grant access based on information about the
 *             users, resources, and requested actions. You can also evaluate additional information
 *             like group membership, attributes of the resources, and session context, such as time of
 *             request and IP addresses. Verified Permissions manages these permissions by letting you create and
 *             store authorization policies for your applications, such as consumer-facing web sites
 *             and enterprise business systems.</p>
 *          <p>Verified Permissions uses Cedar as the policy language to express your permission requirements.
 *             Cedar supports both role-based access control (RBAC) and attribute-based access
 *             control (ABAC) authorization models.</p>
 *          <p>For more information about configuring, administering, and using Amazon Verified Permissions in your
 *             applications, see the <a href="https://docs.aws.amazon.com/verifiedpermissions/latest/userguide/">Amazon Verified Permissions User Guide</a>.</p>
 *          <p>For more information about the Cedar policy language, see the <a href="https://docs.cedarpolicy.com/">Cedar Policy Language Guide</a>.</p>
 *          <important>
 *             <p>When you write Cedar policies that reference principals, resources and actions,
 *                 you can define the unique identifiers used for each of those elements. We strongly
 *                 recommend that you follow these best practices:</p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <b>Use values like universally unique identifiers
 *                             (UUIDs) for all principal and resource identifiers.</b>
 *                   </p>
 *                   <p>For example, if user <code>jane</code> leaves the company, and you later
 *                         let someone else use the name <code>jane</code>, then that new user
 *                         automatically gets access to everything granted by policies that still
 *                         reference <code>User::"jane"</code>. Cedar can’t distinguish between the
 *                         new user and the old. This applies to both principal and resource
 *                         identifiers. Always use identifiers that are guaranteed unique and never
 *                         reused to ensure that you don’t unintentionally grant access because of the
 *                         presence of an old identifier in a policy.</p>
 *                   <p>Where you use a UUID for an entity, we recommend that you follow it with
 *                         the // comment specifier and the ‘friendly’ name of your entity. This helps
 *                         to make your policies easier to understand. For example: principal ==
 *                         User::"a1b2c3d4-e5f6-a1b2-c3d4-EXAMPLE11111", // alice</p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <b>Do not include personally identifying, confidential,
 *                             or sensitive information as part of the unique identifier for your
 *                             principals or resources.</b> These identifiers are included in
 *                         log entries shared in CloudTrail trails.</p>
 *                </li>
 *             </ul>
 *          </important>
 *          <p>Several operations return structures that appear similar, but have different purposes.
 *             As new functionality is added to the product, the structure used in a parameter of one
 *             operation might need to change in a way that wouldn't make sense for the same parameter
 *             in a different operation. To help you understand the purpose of each, the following
 *             naming convention is used for the structures:</p>
 *          <ul>
 *             <li>
 *                <p>Parameter type structures that end in <code>Detail</code> are used in
 *                         <code>Get</code> operations.</p>
 *             </li>
 *             <li>
 *                <p>Parameter type structures that end in <code>Item</code> are used in
 *                         <code>List</code> operations.</p>
 *             </li>
 *             <li>
 *                <p>Parameter type structures that use neither suffix are used in the mutating
 *                     (create and update) operations.</p>
 *             </li>
 *          </ul>
 */
export class VerifiedPermissions extends VerifiedPermissionsClient implements VerifiedPermissions {}
createAggregatedClient(commands, VerifiedPermissions);
