import { AccessAnalyzerClient } from "./AccessAnalyzerClient";
import {
  CreateAnalyzerCommand,
  CreateAnalyzerCommandInput,
  CreateAnalyzerCommandOutput
} from "./commands/CreateAnalyzerCommand";
import {
  CreateArchiveRuleCommand,
  CreateArchiveRuleCommandInput,
  CreateArchiveRuleCommandOutput
} from "./commands/CreateArchiveRuleCommand";
import {
  DeleteAnalyzerCommand,
  DeleteAnalyzerCommandInput,
  DeleteAnalyzerCommandOutput
} from "./commands/DeleteAnalyzerCommand";
import {
  DeleteArchiveRuleCommand,
  DeleteArchiveRuleCommandInput,
  DeleteArchiveRuleCommandOutput
} from "./commands/DeleteArchiveRuleCommand";
import {
  GetAnalyzedResourceCommand,
  GetAnalyzedResourceCommandInput,
  GetAnalyzedResourceCommandOutput
} from "./commands/GetAnalyzedResourceCommand";
import {
  GetAnalyzerCommand,
  GetAnalyzerCommandInput,
  GetAnalyzerCommandOutput
} from "./commands/GetAnalyzerCommand";
import {
  GetArchiveRuleCommand,
  GetArchiveRuleCommandInput,
  GetArchiveRuleCommandOutput
} from "./commands/GetArchiveRuleCommand";
import {
  GetFindingCommand,
  GetFindingCommandInput,
  GetFindingCommandOutput
} from "./commands/GetFindingCommand";
import {
  ListAnalyzedResourcesCommand,
  ListAnalyzedResourcesCommandInput,
  ListAnalyzedResourcesCommandOutput
} from "./commands/ListAnalyzedResourcesCommand";
import {
  ListAnalyzersCommand,
  ListAnalyzersCommandInput,
  ListAnalyzersCommandOutput
} from "./commands/ListAnalyzersCommand";
import {
  ListArchiveRulesCommand,
  ListArchiveRulesCommandInput,
  ListArchiveRulesCommandOutput
} from "./commands/ListArchiveRulesCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput
} from "./commands/ListFindingsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  StartResourceScanCommand,
  StartResourceScanCommandInput,
  StartResourceScanCommandOutput
} from "./commands/StartResourceScanCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import {
  UpdateArchiveRuleCommand,
  UpdateArchiveRuleCommandInput,
  UpdateArchiveRuleCommandOutput
} from "./commands/UpdateArchiveRuleCommand";
import {
  UpdateFindingsCommand,
  UpdateFindingsCommandInput,
  UpdateFindingsCommandOutput
} from "./commands/UpdateFindingsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS IAM Access Analyzer helps identify potential resource-access risks by enabling you to identify
 *          any policies that grant access to an external principal. It does this by using logic-based
 *          reasoning to analyze resource-based policies in your AWS environment. An external principal
 *          can be another AWS account, a root user, an IAM user or role, a federated user, an AWS
 *          service, or an anonymous user. This guide describes the AWS IAM Access Analyzer operations that you can
 *          call programmatically. For general information about Access Analyzer, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html">AWS IAM Access Analyzer section of the IAM User Guide</a>.</p>
 *          <p>To start using Access Analyzer, you first need to create an analyzer.</p>
 */
export class AccessAnalyzer extends AccessAnalyzerClient {
  /**
   * <p>Creates an analyzer for your account.</p>
   */
  public createAnalyzer(
    args: CreateAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnalyzerCommandOutput>;
  public createAnalyzer(
    args: CreateAnalyzerCommandInput,
    cb: (err: any, data?: CreateAnalyzerCommandOutput) => void
  ): void;
  public createAnalyzer(
    args: CreateAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnalyzerCommandOutput) => void
  ): void;
  public createAnalyzer(
    args: CreateAnalyzerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAnalyzerCommandOutput) => void),
    cb?: (err: any, data?: CreateAnalyzerCommandOutput) => void
  ): Promise<CreateAnalyzerCommandOutput> | void {
    const command = new CreateAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an archive rule for the specified analyzer. Archive rules automatically archive
   *          findings that meet the criteria you define when you create the rule.</p>
   */
  public createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateArchiveRuleCommandOutput>;
  public createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    cb: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): void;
  public createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): void;
  public createArchiveRule(
    args: CreateArchiveRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateArchiveRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateArchiveRuleCommandOutput) => void
  ): Promise<CreateArchiveRuleCommandOutput> | void {
    const command = new CreateArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified analyzer. When you delete an analyzer, Access Analyzer is disabled
   *          for the account in the current or specific Region. All findings that were generated by the
   *          analyzer are deleted. You cannot undo this action.</p>
   */
  public deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalyzerCommandOutput>;
  public deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    cb: (err: any, data?: DeleteAnalyzerCommandOutput) => void
  ): void;
  public deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalyzerCommandOutput) => void
  ): void;
  public deleteAnalyzer(
    args: DeleteAnalyzerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAnalyzerCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnalyzerCommandOutput) => void
  ): Promise<DeleteAnalyzerCommandOutput> | void {
    const command = new DeleteAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified archive rule.</p>
   */
  public deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteArchiveRuleCommandOutput>;
  public deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    cb: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): void;
  public deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): void;
  public deleteArchiveRule(
    args: DeleteArchiveRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteArchiveRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteArchiveRuleCommandOutput) => void
  ): Promise<DeleteArchiveRuleCommandOutput> | void {
    const command = new DeleteArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a resource that was analyzed.</p>
   */
  public getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnalyzedResourceCommandOutput>;
  public getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    cb: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): void;
  public getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): void;
  public getAnalyzedResource(
    args: GetAnalyzedResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAnalyzedResourceCommandOutput) => void),
    cb?: (err: any, data?: GetAnalyzedResourceCommandOutput) => void
  ): Promise<GetAnalyzedResourceCommandOutput> | void {
    const command = new GetAnalyzedResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the specified analyzer.</p>
   */
  public getAnalyzer(
    args: GetAnalyzerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnalyzerCommandOutput>;
  public getAnalyzer(
    args: GetAnalyzerCommandInput,
    cb: (err: any, data?: GetAnalyzerCommandOutput) => void
  ): void;
  public getAnalyzer(
    args: GetAnalyzerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnalyzerCommandOutput) => void
  ): void;
  public getAnalyzer(
    args: GetAnalyzerCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAnalyzerCommandOutput) => void),
    cb?: (err: any, data?: GetAnalyzerCommandOutput) => void
  ): Promise<GetAnalyzerCommandOutput> | void {
    const command = new GetAnalyzerCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about an archive rule.</p>
   */
  public getArchiveRule(
    args: GetArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetArchiveRuleCommandOutput>;
  public getArchiveRule(
    args: GetArchiveRuleCommandInput,
    cb: (err: any, data?: GetArchiveRuleCommandOutput) => void
  ): void;
  public getArchiveRule(
    args: GetArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetArchiveRuleCommandOutput) => void
  ): void;
  public getArchiveRule(
    args: GetArchiveRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetArchiveRuleCommandOutput) => void),
    cb?: (err: any, data?: GetArchiveRuleCommandOutput) => void
  ): Promise<GetArchiveRuleCommandOutput> | void {
    const command = new GetArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the specified finding.</p>
   */
  public getFinding(
    args: GetFindingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetFindingCommandOutput>;
  public getFinding(
    args: GetFindingCommandInput,
    cb: (err: any, data?: GetFindingCommandOutput) => void
  ): void;
  public getFinding(
    args: GetFindingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFindingCommandOutput) => void
  ): void;
  public getFinding(
    args: GetFindingCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetFindingCommandOutput) => void),
    cb?: (err: any, data?: GetFindingCommandOutput) => void
  ): Promise<GetFindingCommandOutput> | void {
    const command = new GetFindingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of resources of the specified type that have been analyzed by the
   *          specified analyzer..</p>
   */
  public listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalyzedResourcesCommandOutput>;
  public listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    cb: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): void;
  public listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): void;
  public listAnalyzedResources(
    args: ListAnalyzedResourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAnalyzedResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListAnalyzedResourcesCommandOutput) => void
  ): Promise<ListAnalyzedResourcesCommandOutput> | void {
    const command = new ListAnalyzedResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of analyzers.</p>
   */
  public listAnalyzers(
    args: ListAnalyzersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnalyzersCommandOutput>;
  public listAnalyzers(
    args: ListAnalyzersCommandInput,
    cb: (err: any, data?: ListAnalyzersCommandOutput) => void
  ): void;
  public listAnalyzers(
    args: ListAnalyzersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnalyzersCommandOutput) => void
  ): void;
  public listAnalyzers(
    args: ListAnalyzersCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAnalyzersCommandOutput) => void),
    cb?: (err: any, data?: ListAnalyzersCommandOutput) => void
  ): Promise<ListAnalyzersCommandOutput> | void {
    const command = new ListAnalyzersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of archive rules created for the specified analyzer.</p>
   */
  public listArchiveRules(
    args: ListArchiveRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListArchiveRulesCommandOutput>;
  public listArchiveRules(
    args: ListArchiveRulesCommandInput,
    cb: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): void;
  public listArchiveRules(
    args: ListArchiveRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): void;
  public listArchiveRules(
    args: ListArchiveRulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListArchiveRulesCommandOutput) => void),
    cb?: (err: any, data?: ListArchiveRulesCommandOutput) => void
  ): Promise<ListArchiveRulesCommandOutput> | void {
    const command = new ListArchiveRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of findings generated by the specified analyzer.</p>
   */
  public listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  public listFindings(
    args: ListFindingsCommandInput,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListFindingsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingsCommandOutput) => void
  ): Promise<ListFindingsCommandOutput> | void {
    const command = new ListFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of tags applied to the specified resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Immediately starts a scan of the policies applied to the specified resource.</p>
   */
  public startResourceScan(
    args: StartResourceScanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartResourceScanCommandOutput>;
  public startResourceScan(
    args: StartResourceScanCommandInput,
    cb: (err: any, data?: StartResourceScanCommandOutput) => void
  ): void;
  public startResourceScan(
    args: StartResourceScanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartResourceScanCommandOutput) => void
  ): void;
  public startResourceScan(
    args: StartResourceScanCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartResourceScanCommandOutput) => void),
    cb?: (err: any, data?: StartResourceScanCommandOutput) => void
  ): Promise<StartResourceScanCommandOutput> | void {
    const command = new StartResourceScanCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a tag to the specified resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag from the specified resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the criteria and values for the specified archive rule.</p>
   */
  public updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateArchiveRuleCommandOutput>;
  public updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    cb: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): void;
  public updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): void;
  public updateArchiveRule(
    args: UpdateArchiveRuleCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateArchiveRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateArchiveRuleCommandOutput) => void
  ): Promise<UpdateArchiveRuleCommandOutput> | void {
    const command = new UpdateArchiveRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the status for the specified findings.</p>
   */
  public updateFindings(
    args: UpdateFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFindingsCommandOutput>;
  public updateFindings(
    args: UpdateFindingsCommandInput,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;
  public updateFindings(
    args: UpdateFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): void;
  public updateFindings(
    args: UpdateFindingsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateFindingsCommandOutput) => void),
    cb?: (err: any, data?: UpdateFindingsCommandOutput) => void
  ): Promise<UpdateFindingsCommandOutput> | void {
    const command = new UpdateFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
