// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelSessionCommand,
  CancelSessionCommandInput,
  CancelSessionCommandOutput,
} from "./commands/CancelSessionCommand";
import {
  CreateApprovalTeamCommand,
  CreateApprovalTeamCommandInput,
  CreateApprovalTeamCommandOutput,
} from "./commands/CreateApprovalTeamCommand";
import {
  CreateIdentitySourceCommand,
  CreateIdentitySourceCommandInput,
  CreateIdentitySourceCommandOutput,
} from "./commands/CreateIdentitySourceCommand";
import {
  DeleteIdentitySourceCommand,
  DeleteIdentitySourceCommandInput,
  DeleteIdentitySourceCommandOutput,
} from "./commands/DeleteIdentitySourceCommand";
import {
  DeleteInactiveApprovalTeamVersionCommand,
  DeleteInactiveApprovalTeamVersionCommandInput,
  DeleteInactiveApprovalTeamVersionCommandOutput,
} from "./commands/DeleteInactiveApprovalTeamVersionCommand";
import {
  GetApprovalTeamCommand,
  GetApprovalTeamCommandInput,
  GetApprovalTeamCommandOutput,
} from "./commands/GetApprovalTeamCommand";
import {
  GetIdentitySourceCommand,
  GetIdentitySourceCommandInput,
  GetIdentitySourceCommandOutput,
} from "./commands/GetIdentitySourceCommand";
import {
  GetPolicyVersionCommand,
  GetPolicyVersionCommandInput,
  GetPolicyVersionCommandOutput,
} from "./commands/GetPolicyVersionCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import {
  ListApprovalTeamsCommand,
  ListApprovalTeamsCommandInput,
  ListApprovalTeamsCommandOutput,
} from "./commands/ListApprovalTeamsCommand";
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
  ListPolicyVersionsCommand,
  ListPolicyVersionsCommandInput,
  ListPolicyVersionsCommandOutput,
} from "./commands/ListPolicyVersionsCommand";
import {
  ListResourcePoliciesCommand,
  ListResourcePoliciesCommandInput,
  ListResourcePoliciesCommandOutput,
} from "./commands/ListResourcePoliciesCommand";
import {
  ListSessionsCommand,
  ListSessionsCommandInput,
  ListSessionsCommandOutput,
} from "./commands/ListSessionsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartActiveApprovalTeamDeletionCommand,
  StartActiveApprovalTeamDeletionCommandInput,
  StartActiveApprovalTeamDeletionCommandOutput,
} from "./commands/StartActiveApprovalTeamDeletionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApprovalTeamCommand,
  UpdateApprovalTeamCommandInput,
  UpdateApprovalTeamCommandOutput,
} from "./commands/UpdateApprovalTeamCommand";
import { MPAClient, MPAClientConfig } from "./MPAClient";

const commands = {
  CancelSessionCommand,
  CreateApprovalTeamCommand,
  CreateIdentitySourceCommand,
  DeleteIdentitySourceCommand,
  DeleteInactiveApprovalTeamVersionCommand,
  GetApprovalTeamCommand,
  GetIdentitySourceCommand,
  GetPolicyVersionCommand,
  GetResourcePolicyCommand,
  GetSessionCommand,
  ListApprovalTeamsCommand,
  ListIdentitySourcesCommand,
  ListPoliciesCommand,
  ListPolicyVersionsCommand,
  ListResourcePoliciesCommand,
  ListSessionsCommand,
  ListTagsForResourceCommand,
  StartActiveApprovalTeamDeletionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateApprovalTeamCommand,
};

export interface MPA {
  /**
   * @see {@link CancelSessionCommand}
   */
  cancelSession(args: CancelSessionCommandInput, options?: __HttpHandlerOptions): Promise<CancelSessionCommandOutput>;
  cancelSession(args: CancelSessionCommandInput, cb: (err: any, data?: CancelSessionCommandOutput) => void): void;
  cancelSession(
    args: CancelSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateApprovalTeamCommand}
   */
  createApprovalTeam(
    args: CreateApprovalTeamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApprovalTeamCommandOutput>;
  createApprovalTeam(
    args: CreateApprovalTeamCommandInput,
    cb: (err: any, data?: CreateApprovalTeamCommandOutput) => void
  ): void;
  createApprovalTeam(
    args: CreateApprovalTeamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApprovalTeamCommandOutput) => void
  ): void;

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
   * @see {@link DeleteInactiveApprovalTeamVersionCommand}
   */
  deleteInactiveApprovalTeamVersion(
    args: DeleteInactiveApprovalTeamVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteInactiveApprovalTeamVersionCommandOutput>;
  deleteInactiveApprovalTeamVersion(
    args: DeleteInactiveApprovalTeamVersionCommandInput,
    cb: (err: any, data?: DeleteInactiveApprovalTeamVersionCommandOutput) => void
  ): void;
  deleteInactiveApprovalTeamVersion(
    args: DeleteInactiveApprovalTeamVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteInactiveApprovalTeamVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetApprovalTeamCommand}
   */
  getApprovalTeam(
    args: GetApprovalTeamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApprovalTeamCommandOutput>;
  getApprovalTeam(args: GetApprovalTeamCommandInput, cb: (err: any, data?: GetApprovalTeamCommandOutput) => void): void;
  getApprovalTeam(
    args: GetApprovalTeamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApprovalTeamCommandOutput) => void
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
   * @see {@link GetPolicyVersionCommand}
   */
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyVersionCommandOutput>;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;
  getPolicyVersion(
    args: GetPolicyVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyVersionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourcePolicyCommand}
   */
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListApprovalTeamsCommand}
   */
  listApprovalTeams(): Promise<ListApprovalTeamsCommandOutput>;
  listApprovalTeams(
    args: ListApprovalTeamsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListApprovalTeamsCommandOutput>;
  listApprovalTeams(
    args: ListApprovalTeamsCommandInput,
    cb: (err: any, data?: ListApprovalTeamsCommandOutput) => void
  ): void;
  listApprovalTeams(
    args: ListApprovalTeamsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApprovalTeamsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIdentitySourcesCommand}
   */
  listIdentitySources(): Promise<ListIdentitySourcesCommandOutput>;
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
  listPolicies(): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<ListPoliciesCommandOutput>;
  listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyVersionsCommand}
   */
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyVersionsCommandOutput>;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;
  listPolicyVersions(
    args: ListPolicyVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcePoliciesCommand}
   */
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcePoliciesCommandOutput>;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;
  listResourcePolicies(
    args: ListResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSessionsCommand}
   */
  listSessions(args: ListSessionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSessionsCommandOutput>;
  listSessions(args: ListSessionsCommandInput, cb: (err: any, data?: ListSessionsCommandOutput) => void): void;
  listSessions(
    args: ListSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StartActiveApprovalTeamDeletionCommand}
   */
  startActiveApprovalTeamDeletion(
    args: StartActiveApprovalTeamDeletionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartActiveApprovalTeamDeletionCommandOutput>;
  startActiveApprovalTeamDeletion(
    args: StartActiveApprovalTeamDeletionCommandInput,
    cb: (err: any, data?: StartActiveApprovalTeamDeletionCommandOutput) => void
  ): void;
  startActiveApprovalTeamDeletion(
    args: StartActiveApprovalTeamDeletionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartActiveApprovalTeamDeletionCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateApprovalTeamCommand}
   */
  updateApprovalTeam(
    args: UpdateApprovalTeamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApprovalTeamCommandOutput>;
  updateApprovalTeam(
    args: UpdateApprovalTeamCommandInput,
    cb: (err: any, data?: UpdateApprovalTeamCommandOutput) => void
  ): void;
  updateApprovalTeam(
    args: UpdateApprovalTeamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApprovalTeamCommandOutput) => void
  ): void;
}

/**
 * <p>Multi-party approval is a capability of <a href="http://aws.amazon.com/organizations">Organizations</a> that allows you to protect a predefined list of operations through a distributed approval process. Use Multi-party approval to establish approval workflows and transform security processes into team-based decisions.</p> <p> <b>When to use Multi-party approval</b>:</p> <ul> <li> <p>You need to align with the Zero Trust principle of "never trust, always verify"</p> </li> <li> <p>You need to make sure that the right humans have access to the right things in the right way</p> </li> <li> <p>You need distributed decision-making for sensitive or critical operations</p> </li> <li> <p>You need to protect against unintended operations on sensitive or critical resources</p> </li> <li> <p>You need formal reviews and approvals for auditing or compliance reasons</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/mpa/latest/userguide/what-is.html">What is Multi-party approval</a> in the <i>Multi-party approval User Guide</i>.</p>
 * @public
 */
export class MPA extends MPAClient implements MPA {}
createAggregatedClient(commands, MPA);
