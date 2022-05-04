// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddAttributesToFindingsCommand,
  AddAttributesToFindingsCommandInput,
  AddAttributesToFindingsCommandOutput,
} from "./commands/AddAttributesToFindingsCommand";
import {
  CreateAssessmentTargetCommand,
  CreateAssessmentTargetCommandInput,
  CreateAssessmentTargetCommandOutput,
} from "./commands/CreateAssessmentTargetCommand";
import {
  CreateAssessmentTemplateCommand,
  CreateAssessmentTemplateCommandInput,
  CreateAssessmentTemplateCommandOutput,
} from "./commands/CreateAssessmentTemplateCommand";
import {
  CreateExclusionsPreviewCommand,
  CreateExclusionsPreviewCommandInput,
  CreateExclusionsPreviewCommandOutput,
} from "./commands/CreateExclusionsPreviewCommand";
import {
  CreateResourceGroupCommand,
  CreateResourceGroupCommandInput,
  CreateResourceGroupCommandOutput,
} from "./commands/CreateResourceGroupCommand";
import {
  DeleteAssessmentRunCommand,
  DeleteAssessmentRunCommandInput,
  DeleteAssessmentRunCommandOutput,
} from "./commands/DeleteAssessmentRunCommand";
import {
  DeleteAssessmentTargetCommand,
  DeleteAssessmentTargetCommandInput,
  DeleteAssessmentTargetCommandOutput,
} from "./commands/DeleteAssessmentTargetCommand";
import {
  DeleteAssessmentTemplateCommand,
  DeleteAssessmentTemplateCommandInput,
  DeleteAssessmentTemplateCommandOutput,
} from "./commands/DeleteAssessmentTemplateCommand";
import {
  DescribeAssessmentRunsCommand,
  DescribeAssessmentRunsCommandInput,
  DescribeAssessmentRunsCommandOutput,
} from "./commands/DescribeAssessmentRunsCommand";
import {
  DescribeAssessmentTargetsCommand,
  DescribeAssessmentTargetsCommandInput,
  DescribeAssessmentTargetsCommandOutput,
} from "./commands/DescribeAssessmentTargetsCommand";
import {
  DescribeAssessmentTemplatesCommand,
  DescribeAssessmentTemplatesCommandInput,
  DescribeAssessmentTemplatesCommandOutput,
} from "./commands/DescribeAssessmentTemplatesCommand";
import {
  DescribeCrossAccountAccessRoleCommand,
  DescribeCrossAccountAccessRoleCommandInput,
  DescribeCrossAccountAccessRoleCommandOutput,
} from "./commands/DescribeCrossAccountAccessRoleCommand";
import {
  DescribeExclusionsCommand,
  DescribeExclusionsCommandInput,
  DescribeExclusionsCommandOutput,
} from "./commands/DescribeExclusionsCommand";
import {
  DescribeFindingsCommand,
  DescribeFindingsCommandInput,
  DescribeFindingsCommandOutput,
} from "./commands/DescribeFindingsCommand";
import {
  DescribeResourceGroupsCommand,
  DescribeResourceGroupsCommandInput,
  DescribeResourceGroupsCommandOutput,
} from "./commands/DescribeResourceGroupsCommand";
import {
  DescribeRulesPackagesCommand,
  DescribeRulesPackagesCommandInput,
  DescribeRulesPackagesCommandOutput,
} from "./commands/DescribeRulesPackagesCommand";
import {
  GetAssessmentReportCommand,
  GetAssessmentReportCommandInput,
  GetAssessmentReportCommandOutput,
} from "./commands/GetAssessmentReportCommand";
import {
  GetExclusionsPreviewCommand,
  GetExclusionsPreviewCommandInput,
  GetExclusionsPreviewCommandOutput,
} from "./commands/GetExclusionsPreviewCommand";
import {
  GetTelemetryMetadataCommand,
  GetTelemetryMetadataCommandInput,
  GetTelemetryMetadataCommandOutput,
} from "./commands/GetTelemetryMetadataCommand";
import {
  ListAssessmentRunAgentsCommand,
  ListAssessmentRunAgentsCommandInput,
  ListAssessmentRunAgentsCommandOutput,
} from "./commands/ListAssessmentRunAgentsCommand";
import {
  ListAssessmentRunsCommand,
  ListAssessmentRunsCommandInput,
  ListAssessmentRunsCommandOutput,
} from "./commands/ListAssessmentRunsCommand";
import {
  ListAssessmentTargetsCommand,
  ListAssessmentTargetsCommandInput,
  ListAssessmentTargetsCommandOutput,
} from "./commands/ListAssessmentTargetsCommand";
import {
  ListAssessmentTemplatesCommand,
  ListAssessmentTemplatesCommandInput,
  ListAssessmentTemplatesCommandOutput,
} from "./commands/ListAssessmentTemplatesCommand";
import {
  ListEventSubscriptionsCommand,
  ListEventSubscriptionsCommandInput,
  ListEventSubscriptionsCommandOutput,
} from "./commands/ListEventSubscriptionsCommand";
import {
  ListExclusionsCommand,
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput,
} from "./commands/ListExclusionsCommand";
import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "./commands/ListFindingsCommand";
import {
  ListRulesPackagesCommand,
  ListRulesPackagesCommandInput,
  ListRulesPackagesCommandOutput,
} from "./commands/ListRulesPackagesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PreviewAgentsCommand,
  PreviewAgentsCommandInput,
  PreviewAgentsCommandOutput,
} from "./commands/PreviewAgentsCommand";
import {
  RegisterCrossAccountAccessRoleCommand,
  RegisterCrossAccountAccessRoleCommandInput,
  RegisterCrossAccountAccessRoleCommandOutput,
} from "./commands/RegisterCrossAccountAccessRoleCommand";
import {
  RemoveAttributesFromFindingsCommand,
  RemoveAttributesFromFindingsCommandInput,
  RemoveAttributesFromFindingsCommandOutput,
} from "./commands/RemoveAttributesFromFindingsCommand";
import {
  SetTagsForResourceCommand,
  SetTagsForResourceCommandInput,
  SetTagsForResourceCommandOutput,
} from "./commands/SetTagsForResourceCommand";
import {
  StartAssessmentRunCommand,
  StartAssessmentRunCommandInput,
  StartAssessmentRunCommandOutput,
} from "./commands/StartAssessmentRunCommand";
import {
  StopAssessmentRunCommand,
  StopAssessmentRunCommandInput,
  StopAssessmentRunCommandOutput,
} from "./commands/StopAssessmentRunCommand";
import {
  SubscribeToEventCommand,
  SubscribeToEventCommandInput,
  SubscribeToEventCommandOutput,
} from "./commands/SubscribeToEventCommand";
import {
  UnsubscribeFromEventCommand,
  UnsubscribeFromEventCommandInput,
  UnsubscribeFromEventCommandOutput,
} from "./commands/UnsubscribeFromEventCommand";
import {
  UpdateAssessmentTargetCommand,
  UpdateAssessmentTargetCommandInput,
  UpdateAssessmentTargetCommandOutput,
} from "./commands/UpdateAssessmentTargetCommand";
import { InspectorClient } from "./InspectorClient";

/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
export class Inspector extends InspectorClient {
  /**
   * <p>Assigns attributes (key and value pairs) to the findings that are specified by the
   *          ARNs of the findings.</p>
   */
  public addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddAttributesToFindingsCommandOutput>;
  public addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    cb: (err: any, data?: AddAttributesToFindingsCommandOutput) => void
  ): void;
  public addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddAttributesToFindingsCommandOutput) => void
  ): void;
  public addAttributesToFindings(
    args: AddAttributesToFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddAttributesToFindingsCommandOutput) => void),
    cb?: (err: any, data?: AddAttributesToFindingsCommandOutput) => void
  ): Promise<AddAttributesToFindingsCommandOutput> | void {
    const command = new AddAttributesToFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new assessment target using the ARN of the resource group that is generated
   *          by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2
   *          instances in the current AWS account and region are included in the assessment target. If
   *          the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
   *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
   *          perform security assessments. You can create up to 50 assessment targets per AWS account.
   *          You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">
   *             Amazon Inspector Assessment Targets</a>.</p>
   */
  public createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentTargetCommandOutput>;
  public createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    cb: (err: any, data?: CreateAssessmentTargetCommandOutput) => void
  ): void;
  public createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentTargetCommandOutput) => void
  ): void;
  public createAssessmentTarget(
    args: CreateAssessmentTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssessmentTargetCommandOutput) => void),
    cb?: (err: any, data?: CreateAssessmentTargetCommandOutput) => void
  ): Promise<CreateAssessmentTargetCommandOutput> | void {
    const command = new CreateAssessmentTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an assessment template for the assessment target that is specified by the ARN
   *          of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
   *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
   *          perform security assessments.</p>
   */
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssessmentTemplateCommandOutput>;
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    cb: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void
  ): void;
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void
  ): void;
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssessmentTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void
  ): Promise<CreateAssessmentTemplateCommandOutput> | void {
    const command = new CreateAssessmentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the generation of an exclusions preview for the specified assessment template.
   *          The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
   *          detect before it runs the assessment. </p>
   */
  public createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExclusionsPreviewCommandOutput>;
  public createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    cb: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void
  ): void;
  public createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void
  ): void;
  public createExclusionsPreview(
    args: CreateExclusionsPreviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExclusionsPreviewCommandOutput) => void),
    cb?: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void
  ): Promise<CreateExclusionsPreviewCommandOutput> | void {
    const command = new CreateExclusionsPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a resource group using the specified set of tags (key and value pairs) that
   *          are used to select the EC2 instances to be included in an Amazon Inspector assessment
   *          target. The created resource group is then used to create an Amazon Inspector assessment
   *          target. For more information, see <a>CreateAssessmentTarget</a>.</p>
   */
  public createResourceGroup(
    args: CreateResourceGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceGroupCommandOutput>;
  public createResourceGroup(
    args: CreateResourceGroupCommandInput,
    cb: (err: any, data?: CreateResourceGroupCommandOutput) => void
  ): void;
  public createResourceGroup(
    args: CreateResourceGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceGroupCommandOutput) => void
  ): void;
  public createResourceGroup(
    args: CreateResourceGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceGroupCommandOutput) => void
  ): Promise<CreateResourceGroupCommandOutput> | void {
    const command = new CreateResourceGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the assessment run that is specified by the ARN of the assessment
   *          run.</p>
   */
  public deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentRunCommandOutput>;
  public deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    cb: (err: any, data?: DeleteAssessmentRunCommandOutput) => void
  ): void;
  public deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentRunCommandOutput) => void
  ): void;
  public deleteAssessmentRun(
    args: DeleteAssessmentRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentRunCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentRunCommandOutput) => void
  ): Promise<DeleteAssessmentRunCommandOutput> | void {
    const command = new DeleteAssessmentRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the assessment target that is specified by the ARN of the assessment
   *          target.</p>
   */
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentTargetCommandOutput>;
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    cb: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void
  ): void;
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void
  ): void;
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentTargetCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void
  ): Promise<DeleteAssessmentTargetCommandOutput> | void {
    const command = new DeleteAssessmentTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the assessment template that is specified by the ARN of the assessment
   *          template.</p>
   */
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssessmentTemplateCommandOutput>;
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    cb: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void
  ): void;
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void
  ): void;
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssessmentTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void
  ): Promise<DeleteAssessmentTemplateCommandOutput> | void {
    const command = new DeleteAssessmentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the assessment runs that are specified by the ARNs of the assessment
   *          runs.</p>
   */
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentRunsCommandOutput>;
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    cb: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void
  ): void;
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void
  ): void;
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssessmentRunsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void
  ): Promise<DescribeAssessmentRunsCommandOutput> | void {
    const command = new DescribeAssessmentRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the assessment targets that are specified by the ARNs of the assessment
   *          targets.</p>
   */
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentTargetsCommandOutput>;
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    cb: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void
  ): void;
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void
  ): void;
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssessmentTargetsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void
  ): Promise<DescribeAssessmentTargetsCommandOutput> | void {
    const command = new DescribeAssessmentTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the assessment templates that are specified by the ARNs of the assessment
   *          templates.</p>
   */
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssessmentTemplatesCommandOutput>;
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    cb: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void
  ): void;
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void
  ): void;
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void
  ): Promise<DescribeAssessmentTemplatesCommandOutput> | void {
    const command = new DescribeAssessmentTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the IAM role that enables Amazon Inspector to access your AWS
   *          account.</p>
   */
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCrossAccountAccessRoleCommandOutput>;
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    cb: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void
  ): void;
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void
  ): void;
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void),
    cb?: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void
  ): Promise<DescribeCrossAccountAccessRoleCommandOutput> | void {
    const command = new DescribeCrossAccountAccessRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
   */
  public describeExclusions(
    args: DescribeExclusionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExclusionsCommandOutput>;
  public describeExclusions(
    args: DescribeExclusionsCommandInput,
    cb: (err: any, data?: DescribeExclusionsCommandOutput) => void
  ): void;
  public describeExclusions(
    args: DescribeExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExclusionsCommandOutput) => void
  ): void;
  public describeExclusions(
    args: DescribeExclusionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExclusionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeExclusionsCommandOutput) => void
  ): Promise<DescribeExclusionsCommandOutput> | void {
    const command = new DescribeExclusionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the findings that are specified by the ARNs of the findings.</p>
   */
  public describeFindings(
    args: DescribeFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFindingsCommandOutput>;
  public describeFindings(
    args: DescribeFindingsCommandInput,
    cb: (err: any, data?: DescribeFindingsCommandOutput) => void
  ): void;
  public describeFindings(
    args: DescribeFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFindingsCommandOutput) => void
  ): void;
  public describeFindings(
    args: DescribeFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFindingsCommandOutput) => void),
    cb?: (err: any, data?: DescribeFindingsCommandOutput) => void
  ): Promise<DescribeFindingsCommandOutput> | void {
    const command = new DescribeFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the resource groups that are specified by the ARNs of the resource
   *          groups.</p>
   */
  public describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceGroupsCommandOutput>;
  public describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    cb: (err: any, data?: DescribeResourceGroupsCommandOutput) => void
  ): void;
  public describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceGroupsCommandOutput) => void
  ): void;
  public describeResourceGroups(
    args: DescribeResourceGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourceGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourceGroupsCommandOutput) => void
  ): Promise<DescribeResourceGroupsCommandOutput> | void {
    const command = new DescribeResourceGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the rules packages that are specified by the ARNs of the rules
   *          packages.</p>
   */
  public describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRulesPackagesCommandOutput>;
  public describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    cb: (err: any, data?: DescribeRulesPackagesCommandOutput) => void
  ): void;
  public describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRulesPackagesCommandOutput) => void
  ): void;
  public describeRulesPackages(
    args: DescribeRulesPackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRulesPackagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRulesPackagesCommandOutput) => void
  ): Promise<DescribeRulesPackagesCommandOutput> | void {
    const command = new DescribeRulesPackagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Produces an assessment report that includes detailed and comprehensive results of a
   *          specified assessment run. </p>
   */
  public getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssessmentReportCommandOutput>;
  public getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    cb: (err: any, data?: GetAssessmentReportCommandOutput) => void
  ): void;
  public getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssessmentReportCommandOutput) => void
  ): void;
  public getAssessmentReport(
    args: GetAssessmentReportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssessmentReportCommandOutput) => void),
    cb?: (err: any, data?: GetAssessmentReportCommandOutput) => void
  ): Promise<GetAssessmentReportCommandOutput> | void {
    const command = new GetAssessmentReportCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
   *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
   *          API.</p>
   */
  public getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExclusionsPreviewCommandOutput>;
  public getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    cb: (err: any, data?: GetExclusionsPreviewCommandOutput) => void
  ): void;
  public getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExclusionsPreviewCommandOutput) => void
  ): void;
  public getExclusionsPreview(
    args: GetExclusionsPreviewCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExclusionsPreviewCommandOutput) => void),
    cb?: (err: any, data?: GetExclusionsPreviewCommandOutput) => void
  ): Promise<GetExclusionsPreviewCommandOutput> | void {
    const command = new GetExclusionsPreviewCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Information about the data that is collected for the specified assessment
   *          run.</p>
   */
  public getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTelemetryMetadataCommandOutput>;
  public getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    cb: (err: any, data?: GetTelemetryMetadataCommandOutput) => void
  ): void;
  public getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTelemetryMetadataCommandOutput) => void
  ): void;
  public getTelemetryMetadata(
    args: GetTelemetryMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTelemetryMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetTelemetryMetadataCommandOutput) => void
  ): Promise<GetTelemetryMetadataCommandOutput> | void {
    const command = new GetTelemetryMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the agents of the assessment runs that are specified by the ARNs of the
   *          assessment runs.</p>
   */
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentRunAgentsCommandOutput>;
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    cb: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void
  ): void;
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void
  ): void;
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentRunAgentsCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void
  ): Promise<ListAssessmentRunAgentsCommandOutput> | void {
    const command = new ListAssessmentRunAgentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the assessment runs that correspond to the assessment templates that are
   *          specified by the ARNs of the assessment templates.</p>
   */
  public listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentRunsCommandOutput>;
  public listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    cb: (err: any, data?: ListAssessmentRunsCommandOutput) => void
  ): void;
  public listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentRunsCommandOutput) => void
  ): void;
  public listAssessmentRuns(
    args: ListAssessmentRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentRunsCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentRunsCommandOutput) => void
  ): Promise<ListAssessmentRunsCommandOutput> | void {
    const command = new ListAssessmentRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the ARNs of the assessment targets within this AWS account. For more
   *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
   *             Targets</a>.</p>
   */
  public listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentTargetsCommandOutput>;
  public listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    cb: (err: any, data?: ListAssessmentTargetsCommandOutput) => void
  ): void;
  public listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentTargetsCommandOutput) => void
  ): void;
  public listAssessmentTargets(
    args: ListAssessmentTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentTargetsCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentTargetsCommandOutput) => void
  ): Promise<ListAssessmentTargetsCommandOutput> | void {
    const command = new ListAssessmentTargetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the assessment templates that correspond to the assessment targets that are
   *          specified by the ARNs of the assessment targets.</p>
   */
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssessmentTemplatesCommandOutput>;
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    cb: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void
  ): void;
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void
  ): void;
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssessmentTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void
  ): Promise<ListAssessmentTemplatesCommandOutput> | void {
    const command = new ListAssessmentTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all the event subscriptions for the assessment template that is specified by
   *          the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
   */
  public listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEventSubscriptionsCommandOutput>;
  public listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    cb: (err: any, data?: ListEventSubscriptionsCommandOutput) => void
  ): void;
  public listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEventSubscriptionsCommandOutput) => void
  ): void;
  public listEventSubscriptions(
    args: ListEventSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEventSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: ListEventSubscriptionsCommandOutput) => void
  ): Promise<ListEventSubscriptionsCommandOutput> | void {
    const command = new ListEventSubscriptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>List exclusions that are generated by the assessment run.</p>
   */
  public listExclusions(
    args: ListExclusionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExclusionsCommandOutput>;
  public listExclusions(
    args: ListExclusionsCommandInput,
    cb: (err: any, data?: ListExclusionsCommandOutput) => void
  ): void;
  public listExclusions(
    args: ListExclusionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExclusionsCommandOutput) => void
  ): void;
  public listExclusions(
    args: ListExclusionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExclusionsCommandOutput) => void),
    cb?: (err: any, data?: ListExclusionsCommandOutput) => void
  ): Promise<ListExclusionsCommandOutput> | void {
    const command = new ListExclusionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists findings that are generated by the assessment runs that are specified by the
   *          ARNs of the assessment runs.</p>
   */
  public listFindings(
    args: ListFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFindingsCommandOutput>;
  public listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
  public listFindings(
    args: ListFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFindingsCommandOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFindingsCommandOutput) => void),
    cb?: (err: any, data?: ListFindingsCommandOutput) => void
  ): Promise<ListFindingsCommandOutput> | void {
    const command = new ListFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all available Amazon Inspector rules packages.</p>
   */
  public listRulesPackages(
    args: ListRulesPackagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesPackagesCommandOutput>;
  public listRulesPackages(
    args: ListRulesPackagesCommandInput,
    cb: (err: any, data?: ListRulesPackagesCommandOutput) => void
  ): void;
  public listRulesPackages(
    args: ListRulesPackagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesPackagesCommandOutput) => void
  ): void;
  public listRulesPackages(
    args: ListRulesPackagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesPackagesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesPackagesCommandOutput) => void
  ): Promise<ListRulesPackagesCommandOutput> | void {
    const command = new ListRulesPackagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all tags associated with an assessment template.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Previews the agents installed on the EC2 instances that are part of the specified
   *          assessment target.</p>
   */
  public previewAgents(
    args: PreviewAgentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PreviewAgentsCommandOutput>;
  public previewAgents(
    args: PreviewAgentsCommandInput,
    cb: (err: any, data?: PreviewAgentsCommandOutput) => void
  ): void;
  public previewAgents(
    args: PreviewAgentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PreviewAgentsCommandOutput) => void
  ): void;
  public previewAgents(
    args: PreviewAgentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PreviewAgentsCommandOutput) => void),
    cb?: (err: any, data?: PreviewAgentsCommandOutput) => void
  ): Promise<PreviewAgentsCommandOutput> | void {
    const command = new PreviewAgentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to
   *          perform security assessments.</p>
   */
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterCrossAccountAccessRoleCommandOutput>;
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    cb: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void
  ): void;
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void
  ): void;
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void),
    cb?: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void
  ): Promise<RegisterCrossAccountAccessRoleCommandOutput> | void {
    const command = new RegisterCrossAccountAccessRoleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes entire attributes (key and value pairs) from the findings that are specified
   *          by the ARNs of the findings where an attribute with the specified key exists.</p>
   */
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveAttributesFromFindingsCommandOutput>;
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    cb: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void
  ): void;
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void
  ): void;
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void),
    cb?: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void
  ): Promise<RemoveAttributesFromFindingsCommandOutput> | void {
    const command = new RemoveAttributesFromFindingsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets tags (key and value pairs) to the assessment template that is specified by the
   *          ARN of the assessment template.</p>
   */
  public setTagsForResource(
    args: SetTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetTagsForResourceCommandOutput>;
  public setTagsForResource(
    args: SetTagsForResourceCommandInput,
    cb: (err: any, data?: SetTagsForResourceCommandOutput) => void
  ): void;
  public setTagsForResource(
    args: SetTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetTagsForResourceCommandOutput) => void
  ): void;
  public setTagsForResource(
    args: SetTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: SetTagsForResourceCommandOutput) => void
  ): Promise<SetTagsForResourceCommandOutput> | void {
    const command = new SetTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the assessment run specified by the ARN of the assessment template. For this
   *          API to function properly, you must not exceed the limit of running up to 500 concurrent
   *          agents per AWS account.</p>
   */
  public startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAssessmentRunCommandOutput>;
  public startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    cb: (err: any, data?: StartAssessmentRunCommandOutput) => void
  ): void;
  public startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAssessmentRunCommandOutput) => void
  ): void;
  public startAssessmentRun(
    args: StartAssessmentRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAssessmentRunCommandOutput) => void),
    cb?: (err: any, data?: StartAssessmentRunCommandOutput) => void
  ): Promise<StartAssessmentRunCommandOutput> | void {
    const command = new StartAssessmentRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the assessment run that is specified by the ARN of the assessment
   *          run.</p>
   */
  public stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAssessmentRunCommandOutput>;
  public stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    cb: (err: any, data?: StopAssessmentRunCommandOutput) => void
  ): void;
  public stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAssessmentRunCommandOutput) => void
  ): void;
  public stopAssessmentRun(
    args: StopAssessmentRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopAssessmentRunCommandOutput) => void),
    cb?: (err: any, data?: StopAssessmentRunCommandOutput) => void
  ): Promise<StopAssessmentRunCommandOutput> | void {
    const command = new StopAssessmentRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the process of sending Amazon Simple Notification Service (SNS) notifications
   *          about a specified event to a specified SNS topic.</p>
   */
  public subscribeToEvent(
    args: SubscribeToEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubscribeToEventCommandOutput>;
  public subscribeToEvent(
    args: SubscribeToEventCommandInput,
    cb: (err: any, data?: SubscribeToEventCommandOutput) => void
  ): void;
  public subscribeToEvent(
    args: SubscribeToEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubscribeToEventCommandOutput) => void
  ): void;
  public subscribeToEvent(
    args: SubscribeToEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubscribeToEventCommandOutput) => void),
    cb?: (err: any, data?: SubscribeToEventCommandOutput) => void
  ): Promise<SubscribeToEventCommandOutput> | void {
    const command = new SubscribeToEventCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the process of sending Amazon Simple Notification Service (SNS)
   *          notifications about a specified event to a specified SNS topic.</p>
   */
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnsubscribeFromEventCommandOutput>;
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    cb: (err: any, data?: UnsubscribeFromEventCommandOutput) => void
  ): void;
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnsubscribeFromEventCommandOutput) => void
  ): void;
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnsubscribeFromEventCommandOutput) => void),
    cb?: (err: any, data?: UnsubscribeFromEventCommandOutput) => void
  ): Promise<UnsubscribeFromEventCommandOutput> | void {
    const command = new UnsubscribeFromEventCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the assessment target that is specified by the ARN of the assessment
   *          target.</p>
   *          <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account
   *          and region are included in the assessment target.</p>
   */
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssessmentTargetCommandOutput>;
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    cb: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void
  ): void;
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void
  ): void;
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssessmentTargetCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void
  ): Promise<UpdateAssessmentTargetCommandOutput> | void {
    const command = new UpdateAssessmentTargetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
