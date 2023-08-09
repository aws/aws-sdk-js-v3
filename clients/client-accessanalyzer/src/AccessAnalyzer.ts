// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AccessAnalyzerClient, AccessAnalyzerClientConfig } from "./AccessAnalyzerClient";
import {
  ApplyArchiveRuleCommand,
  ApplyArchiveRuleCommandInput,
  ApplyArchiveRuleCommandOutput,
} from "./commands/ApplyArchiveRuleCommand";
import {
  CancelPolicyGenerationCommand,
  CancelPolicyGenerationCommandInput,
  CancelPolicyGenerationCommandOutput,
} from "./commands/CancelPolicyGenerationCommand";
import {
  CreateAccessPreviewCommand,
  CreateAccessPreviewCommandInput,
  CreateAccessPreviewCommandOutput,
} from "./commands/CreateAccessPreviewCommand";
import {
  CreateAnalyzerCommand,
  CreateAnalyzerCommandInput,
  CreateAnalyzerCommandOutput,
} from "./commands/CreateAnalyzerCommand";
import {
  CreateArchiveRuleCommand,
  CreateArchiveRuleCommandInput,
  CreateArchiveRuleCommandOutput,
} from "./commands/CreateArchiveRuleCommand";
import {
  DeleteAnalyzerCommand,
  DeleteAnalyzerCommandInput,
  DeleteAnalyzerCommandOutput,
} from "./commands/DeleteAnalyzerCommand";
import {
  DeleteArchiveRuleCommand,
  DeleteArchiveRuleCommandInput,
  DeleteArchiveRuleCommandOutput,
} from "./commands/DeleteArchiveRuleCommand";
import {
  GetAccessPreviewCommand,
  GetAccessPreviewCommandInput,
  GetAccessPreviewCommandOutput,
} from "./commands/GetAccessPreviewCommand";
import {
  GetAnalyzedResourceCommand,
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput,
} from "./commands/GetAnalyzedResourceCommand";
import { GetAnalyzerCommand, GetAnalyzerCommandInput, GetAnalyzerCommandOutput } from "./commands/GetAnalyzerCommand";
import {
  GetArchiveRuleCommand,
  GetArchiveRuleCommandInput,
  GetArchiveRuleCommandOutput,
} from "./commands/GetArchiveRuleCommand";
import { GetFindingCommand, GetFindingCommandInput, GetFindingCommandOutput } from "./commands/GetFindingCommand";
import {
  GetGeneratedPolicyCommand,
  GetGeneratedPolicyCommandInput,
  GetGeneratedPolicyCommandOutput,
} from "./commands/GetGeneratedPolicyCommand";
import {
  ListAccessPreviewFindingsCommand,
  ListAccessPreviewFindingsCommandInput,
  ListAccessPreviewFindingsCommandOutput,
} from "./commands/ListAccessPreviewFindingsCommand";
import {
  ListAccessPreviewsCommand,
  ListAccessPreviewsCommandInput,
  ListAccessPreviewsCommandOutput,
} from "./commands/ListAccessPreviewsCommand";
import {
  ListAnalyzedResourcesCommand,
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput,
} from "./commands/ListAnalyzedResourcesCommand";
import {
  ListAnalyzersCommand,
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput,
} from "./commands/ListAnalyzersCommand";
import {
  ListArchiveRulesCommand,
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput,
} from "./commands/ListArchiveRulesCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import {
  ListPolicyGenerationsCommand,
  ListPolicyGenerationsCommandInput,
  ListPolicyGenerationsCommandOutput,
} from "./commands/ListPolicyGenerationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartPolicyGenerationCommand,
  StartPolicyGenerationCommandInput,
  StartPolicyGenerationCommandOutput,
} from "./commands/StartPolicyGenerationCommand";
import {
  StartResourceScanCommand,
  StartResourceScanCommandInput,
  StartResourceScanCommandOutput,
} from "./commands/StartResourceScanCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateArchiveRuleCommand,
  UpdateArchiveRuleCommandInput,
  UpdateArchiveRuleCommandOutput,
} from "./commands/UpdateArchiveRuleCommand";
import {
  UpdateFindingsCommand,
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput,
} from "./commands/UpdateFindingsCommand";
import {
  ValidatePolicyCommand,
  ValidatePolicyCommandInput,
  ValidatePolicyCommandOutput,
} from "./commands/ValidatePolicyCommand";

const commands = {
  ApplyArchiveRuleCommand,
  CancelPolicyGenerationCommand,
  CreateAccessPreviewCommand,
  CreateAnalyzerCommand,
  CreateArchiveRuleCommand,
  DeleteAnalyzerCommand,
  DeleteArchiveRuleCommand,
  GetAccessPreviewCommand,
  GetAnalyzedResourceCommand,
  GetAnalyzerCommand,
  GetArchiveRuleCommand,
  GetFindingCommand,
  GetGeneratedPolicyCommand,
  ListAccessPreviewFindingsCommand,
  ListAccessPreviewsCommand,
  ListAnalyzedResourcesCommand,
  ListAnalyzersCommand,
  ListArchiveRulesCommand,
  ListFindingsCommand,
  ListPolicyGenerationsCommand,
  ListTagsForResourceCommand,
  StartPolicyGenerationCommand,
  StartResourceScanCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateArchiveRuleCommand,
  UpdateFindingsCommand,
  ValidatePolicyCommand,
};

export interface AccessAnalyzer {
  /**
   * @see {@link ApplyArchiveRuleCommand}
   */
  applyArchiveRule(
    args: ApplyArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ApplyArchiveRuleCommandOutput>;
  applyArchiveRule(
    args: ApplyArchiveRuleCommandInput,
    cb: (err: any, data?: ApplyArchiveRuleCommandOutput) => void
  ): void;
  applyArchiveRule(
    args: ApplyArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplyArchiveRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelPolicyGenerationCommand}
   */
  cancelPolicyGeneration(
    args: CancelPolicyGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelPolicyGenerationCommandOutput>;
  cancelPolicyGeneration(
    args: CancelPolicyGenerationCommandInput,
    cb: (err: any, data?: CancelPolicyGenerationCommandOutput) => void
  ): void;
  cancelPolicyGeneration(
    args: CancelPolicyGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelPolicyGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessPreviewCommand}
   */
  createAccessPreview(
    args: CreateAccessPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPreviewCommandOutput>;
  createAccessPreview(
    args: CreateAccessPreviewCommandInput,
    cb: (err: any, data?: CreateAccessPreviewCommandOutput) => void
  ): void;
  createAccessPreview(
    args: CreateAccessPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAnalyzerCommand}
   */
  createAnalyzer(
    args: CreateAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalyzerCommandOutput>;
  createAnalyzer(args: CreateAnalyzerCommandInput, cb: (err: any, data?: CreateAnalyzerCommandOutput) => void): void;
  createAnalyzer(
    args: CreateAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalyzerCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateArchiveRuleCommand}
   */
  createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArchiveRuleCommandOutput>;
  createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    cb: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): void;
  createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnalyzerCommand}
   */
  deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalyzerCommandOutput>;
  deleteAnalyzer(args: DeleteAnalyzerCommandInput, cb: (err: any, data?: DeleteAnalyzerCommandOutput) => void): void;
  deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalyzerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteArchiveRuleCommand}
   */
  deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveRuleCommandOutput>;
  deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    cb: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): void;
  deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccessPreviewCommand}
   */
  getAccessPreview(
    args: GetAccessPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessPreviewCommandOutput>;
  getAccessPreview(
    args: GetAccessPreviewCommandInput,
    cb: (err: any, data?: GetAccessPreviewCommandOutput) => void
  ): void;
  getAccessPreview(
    args: GetAccessPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessPreviewCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalyzedResourceCommand}
   */
  getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnalyzedResourceCommandOutput>;
  getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    cb: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): void;
  getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAnalyzerCommand}
   */
  getAnalyzer(args: GetAnalyzerCommandInput, options?: __HttpHandlerOptions): Promise<GetAnalyzerCommandOutput>;
  getAnalyzer(args: GetAnalyzerCommandInput, cb: (err: any, data?: GetAnalyzerCommandOutput) => void): void;
  getAnalyzer(
    args: GetAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalyzerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetArchiveRuleCommand}
   */
  getArchiveRule(
    args: GetArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveRuleCommandOutput>;
  getArchiveRule(args: GetArchiveRuleCommandInput, cb: (err: any, data?: GetArchiveRuleCommandOutput) => void): void;
  getArchiveRule(
    args: GetArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFindingCommand}
   */
  getFinding(args: GetFindingCommandInput, options?: __HttpHandlerOptions): Promise<GetFindingCommandOutput>;
  getFinding(args: GetFindingCommandInput, cb: (err: any, data?: GetFindingCommandOutput) => void): void;
  getFinding(
    args: GetFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGeneratedPolicyCommand}
   */
  getGeneratedPolicy(
    args: GetGeneratedPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGeneratedPolicyCommandOutput>;
  getGeneratedPolicy(
    args: GetGeneratedPolicyCommandInput,
    cb: (err: any, data?: GetGeneratedPolicyCommandOutput) => void
  ): void;
  getGeneratedPolicy(
    args: GetGeneratedPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGeneratedPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPreviewFindingsCommand}
   */
  listAccessPreviewFindings(
    args: ListAccessPreviewFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPreviewFindingsCommandOutput>;
  listAccessPreviewFindings(
    args: ListAccessPreviewFindingsCommandInput,
    cb: (err: any, data?: ListAccessPreviewFindingsCommandOutput) => void
  ): void;
  listAccessPreviewFindings(
    args: ListAccessPreviewFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPreviewFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPreviewsCommand}
   */
  listAccessPreviews(
    args: ListAccessPreviewsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPreviewsCommandOutput>;
  listAccessPreviews(
    args: ListAccessPreviewsCommandInput,
    cb: (err: any, data?: ListAccessPreviewsCommandOutput) => void
  ): void;
  listAccessPreviews(
    args: ListAccessPreviewsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPreviewsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalyzedResourcesCommand}
   */
  listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalyzedResourcesCommandOutput>;
  listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    cb: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): void;
  listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAnalyzersCommand}
   */
  listAnalyzers(args: ListAnalyzersCommandInput, options?: __HttpHandlerOptions): Promise<ListAnalyzersCommandOutput>;
  listAnalyzers(args: ListAnalyzersCommandInput, cb: (err: any, data?: ListAnalyzersCommandOutput) => void): void;
  listAnalyzers(
    args: ListAnalyzersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyzersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListArchiveRulesCommand}
   */
  listArchiveRules(
    args: ListArchiveRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchiveRulesCommandOutput>;
  listArchiveRules(
    args: ListArchiveRulesCommandInput,
    cb: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): void;
  listArchiveRules(
    args: ListArchiveRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFindingsCommand}
   */
  listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
  listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPolicyGenerationsCommand}
   */
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyGenerationsCommandOutput>;
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    cb: (err: any, data?: ListPolicyGenerationsCommandOutput) => void
  ): void;
  listPolicyGenerations(
    args: ListPolicyGenerationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyGenerationsCommandOutput) => void
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
   * @see {@link StartPolicyGenerationCommand}
   */
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPolicyGenerationCommandOutput>;
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    cb: (err: any, data?: StartPolicyGenerationCommandOutput) => void
  ): void;
  startPolicyGeneration(
    args: StartPolicyGenerationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPolicyGenerationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartResourceScanCommand}
   */
  startResourceScan(
    args: StartResourceScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceScanCommandOutput>;
  startResourceScan(
    args: StartResourceScanCommandInput,
    cb: (err: any, data?: StartResourceScanCommandOutput) => void
  ): void;
  startResourceScan(
    args: StartResourceScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceScanCommandOutput) => void
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
   * @see {@link UpdateArchiveRuleCommand}
   */
  updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArchiveRuleCommandOutput>;
  updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    cb: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): void;
  updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFindingsCommand}
   */
  updateFindings(
    args: UpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsCommandOutput>;
  updateFindings(args: UpdateFindingsCommandInput, cb: (err: any, data?: UpdateFindingsCommandOutput) => void): void;
  updateFindings(
    args: UpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;

  /**
   * @see {@link ValidatePolicyCommand}
   */
  validatePolicy(
    args: ValidatePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ValidatePolicyCommandOutput>;
  validatePolicy(args: ValidatePolicyCommandInput, cb: (err: any, data?: ValidatePolicyCommandOutput) => void): void;
  validatePolicy(
    args: ValidatePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ValidatePolicyCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Identity and Access Management Access Analyzer helps identify potential resource-access risks by enabling you to
 *          identify any policies that grant access to an external principal. It does this by using
 *          logic-based reasoning to analyze resource-based policies in your Amazon Web Services environment. An
 *          external principal can be another Amazon Web Services account, a root user, an IAM user or role, a
 *          federated user, an Amazon Web Services service, or an anonymous user. You can also use IAM Access Analyzer to
 *          preview and validate public and cross-account access to your resources before deploying
 *          permissions changes. This guide describes the Identity and Access Management Access Analyzer operations that you can
 *          call programmatically. For general information about IAM Access Analyzer, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">Identity and Access Management Access Analyzer</a> in the <b>IAM User Guide</b>.</p>
 *          <p>To start using IAM Access Analyzer, you first need to create an analyzer.</p>
 */
export class AccessAnalyzer extends AccessAnalyzerClient implements AccessAnalyzer {}
createAggregatedClient(commands, AccessAnalyzer);
