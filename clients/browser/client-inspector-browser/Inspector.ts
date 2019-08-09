import { InspectorClient } from "./InspectorClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { AddAttributesToFindingsInput } from "./types/AddAttributesToFindingsInput";
import { AddAttributesToFindingsOutput } from "./types/AddAttributesToFindingsOutput";
import { AgentsAlreadyRunningAssessmentException } from "./types/AgentsAlreadyRunningAssessmentException";
import { AssessmentRunInProgressException } from "./types/AssessmentRunInProgressException";
import { CreateAssessmentTargetInput } from "./types/CreateAssessmentTargetInput";
import { CreateAssessmentTargetOutput } from "./types/CreateAssessmentTargetOutput";
import { CreateAssessmentTemplateInput } from "./types/CreateAssessmentTemplateInput";
import { CreateAssessmentTemplateOutput } from "./types/CreateAssessmentTemplateOutput";
import { CreateExclusionsPreviewInput } from "./types/CreateExclusionsPreviewInput";
import { CreateExclusionsPreviewOutput } from "./types/CreateExclusionsPreviewOutput";
import { CreateResourceGroupInput } from "./types/CreateResourceGroupInput";
import { CreateResourceGroupOutput } from "./types/CreateResourceGroupOutput";
import { DeleteAssessmentRunInput } from "./types/DeleteAssessmentRunInput";
import { DeleteAssessmentRunOutput } from "./types/DeleteAssessmentRunOutput";
import { DeleteAssessmentTargetInput } from "./types/DeleteAssessmentTargetInput";
import { DeleteAssessmentTargetOutput } from "./types/DeleteAssessmentTargetOutput";
import { DeleteAssessmentTemplateInput } from "./types/DeleteAssessmentTemplateInput";
import { DeleteAssessmentTemplateOutput } from "./types/DeleteAssessmentTemplateOutput";
import { DescribeAssessmentRunsInput } from "./types/DescribeAssessmentRunsInput";
import { DescribeAssessmentRunsOutput } from "./types/DescribeAssessmentRunsOutput";
import { DescribeAssessmentTargetsInput } from "./types/DescribeAssessmentTargetsInput";
import { DescribeAssessmentTargetsOutput } from "./types/DescribeAssessmentTargetsOutput";
import { DescribeAssessmentTemplatesInput } from "./types/DescribeAssessmentTemplatesInput";
import { DescribeAssessmentTemplatesOutput } from "./types/DescribeAssessmentTemplatesOutput";
import { DescribeCrossAccountAccessRoleInput } from "./types/DescribeCrossAccountAccessRoleInput";
import { DescribeCrossAccountAccessRoleOutput } from "./types/DescribeCrossAccountAccessRoleOutput";
import { DescribeExclusionsInput } from "./types/DescribeExclusionsInput";
import { DescribeExclusionsOutput } from "./types/DescribeExclusionsOutput";
import { DescribeFindingsInput } from "./types/DescribeFindingsInput";
import { DescribeFindingsOutput } from "./types/DescribeFindingsOutput";
import { DescribeResourceGroupsInput } from "./types/DescribeResourceGroupsInput";
import { DescribeResourceGroupsOutput } from "./types/DescribeResourceGroupsOutput";
import { DescribeRulesPackagesInput } from "./types/DescribeRulesPackagesInput";
import { DescribeRulesPackagesOutput } from "./types/DescribeRulesPackagesOutput";
import { GetAssessmentReportInput } from "./types/GetAssessmentReportInput";
import { GetAssessmentReportOutput } from "./types/GetAssessmentReportOutput";
import { GetExclusionsPreviewInput } from "./types/GetExclusionsPreviewInput";
import { GetExclusionsPreviewOutput } from "./types/GetExclusionsPreviewOutput";
import { GetTelemetryMetadataInput } from "./types/GetTelemetryMetadataInput";
import { GetTelemetryMetadataOutput } from "./types/GetTelemetryMetadataOutput";
import { InternalException } from "./types/InternalException";
import { InvalidCrossAccountRoleException } from "./types/InvalidCrossAccountRoleException";
import { InvalidInputException } from "./types/InvalidInputException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListAssessmentRunAgentsInput } from "./types/ListAssessmentRunAgentsInput";
import { ListAssessmentRunAgentsOutput } from "./types/ListAssessmentRunAgentsOutput";
import { ListAssessmentRunsInput } from "./types/ListAssessmentRunsInput";
import { ListAssessmentRunsOutput } from "./types/ListAssessmentRunsOutput";
import { ListAssessmentTargetsInput } from "./types/ListAssessmentTargetsInput";
import { ListAssessmentTargetsOutput } from "./types/ListAssessmentTargetsOutput";
import { ListAssessmentTemplatesInput } from "./types/ListAssessmentTemplatesInput";
import { ListAssessmentTemplatesOutput } from "./types/ListAssessmentTemplatesOutput";
import { ListEventSubscriptionsInput } from "./types/ListEventSubscriptionsInput";
import { ListEventSubscriptionsOutput } from "./types/ListEventSubscriptionsOutput";
import { ListExclusionsInput } from "./types/ListExclusionsInput";
import { ListExclusionsOutput } from "./types/ListExclusionsOutput";
import { ListFindingsInput } from "./types/ListFindingsInput";
import { ListFindingsOutput } from "./types/ListFindingsOutput";
import { ListRulesPackagesInput } from "./types/ListRulesPackagesInput";
import { ListRulesPackagesOutput } from "./types/ListRulesPackagesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { NoSuchEntityException } from "./types/NoSuchEntityException";
import { PreviewAgentsInput } from "./types/PreviewAgentsInput";
import { PreviewAgentsOutput } from "./types/PreviewAgentsOutput";
import { PreviewGenerationInProgressException } from "./types/PreviewGenerationInProgressException";
import { RegisterCrossAccountAccessRoleInput } from "./types/RegisterCrossAccountAccessRoleInput";
import { RegisterCrossAccountAccessRoleOutput } from "./types/RegisterCrossAccountAccessRoleOutput";
import { RemoveAttributesFromFindingsInput } from "./types/RemoveAttributesFromFindingsInput";
import { RemoveAttributesFromFindingsOutput } from "./types/RemoveAttributesFromFindingsOutput";
import { ServiceTemporarilyUnavailableException } from "./types/ServiceTemporarilyUnavailableException";
import { SetTagsForResourceInput } from "./types/SetTagsForResourceInput";
import { SetTagsForResourceOutput } from "./types/SetTagsForResourceOutput";
import { StartAssessmentRunInput } from "./types/StartAssessmentRunInput";
import { StartAssessmentRunOutput } from "./types/StartAssessmentRunOutput";
import { StopAssessmentRunInput } from "./types/StopAssessmentRunInput";
import { StopAssessmentRunOutput } from "./types/StopAssessmentRunOutput";
import { SubscribeToEventInput } from "./types/SubscribeToEventInput";
import { SubscribeToEventOutput } from "./types/SubscribeToEventOutput";
import { UnsubscribeFromEventInput } from "./types/UnsubscribeFromEventInput";
import { UnsubscribeFromEventOutput } from "./types/UnsubscribeFromEventOutput";
import { UnsupportedFeatureException } from "./types/UnsupportedFeatureException";
import { UpdateAssessmentTargetInput } from "./types/UpdateAssessmentTargetInput";
import { UpdateAssessmentTargetOutput } from "./types/UpdateAssessmentTargetOutput";
import { AddAttributesToFindingsCommand } from "./commands/AddAttributesToFindingsCommand";
import { CreateAssessmentTargetCommand } from "./commands/CreateAssessmentTargetCommand";
import { CreateAssessmentTemplateCommand } from "./commands/CreateAssessmentTemplateCommand";
import { CreateExclusionsPreviewCommand } from "./commands/CreateExclusionsPreviewCommand";
import { CreateResourceGroupCommand } from "./commands/CreateResourceGroupCommand";
import { DeleteAssessmentRunCommand } from "./commands/DeleteAssessmentRunCommand";
import { DeleteAssessmentTargetCommand } from "./commands/DeleteAssessmentTargetCommand";
import { DeleteAssessmentTemplateCommand } from "./commands/DeleteAssessmentTemplateCommand";
import { DescribeAssessmentRunsCommand } from "./commands/DescribeAssessmentRunsCommand";
import { DescribeAssessmentTargetsCommand } from "./commands/DescribeAssessmentTargetsCommand";
import { DescribeAssessmentTemplatesCommand } from "./commands/DescribeAssessmentTemplatesCommand";
import { DescribeCrossAccountAccessRoleCommand } from "./commands/DescribeCrossAccountAccessRoleCommand";
import { DescribeExclusionsCommand } from "./commands/DescribeExclusionsCommand";
import { DescribeFindingsCommand } from "./commands/DescribeFindingsCommand";
import { DescribeResourceGroupsCommand } from "./commands/DescribeResourceGroupsCommand";
import { DescribeRulesPackagesCommand } from "./commands/DescribeRulesPackagesCommand";
import { GetAssessmentReportCommand } from "./commands/GetAssessmentReportCommand";
import { GetExclusionsPreviewCommand } from "./commands/GetExclusionsPreviewCommand";
import { GetTelemetryMetadataCommand } from "./commands/GetTelemetryMetadataCommand";
import { ListAssessmentRunAgentsCommand } from "./commands/ListAssessmentRunAgentsCommand";
import { ListAssessmentRunsCommand } from "./commands/ListAssessmentRunsCommand";
import { ListAssessmentTargetsCommand } from "./commands/ListAssessmentTargetsCommand";
import { ListAssessmentTemplatesCommand } from "./commands/ListAssessmentTemplatesCommand";
import { ListEventSubscriptionsCommand } from "./commands/ListEventSubscriptionsCommand";
import { ListExclusionsCommand } from "./commands/ListExclusionsCommand";
import { ListFindingsCommand } from "./commands/ListFindingsCommand";
import { ListRulesPackagesCommand } from "./commands/ListRulesPackagesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { PreviewAgentsCommand } from "./commands/PreviewAgentsCommand";
import { RegisterCrossAccountAccessRoleCommand } from "./commands/RegisterCrossAccountAccessRoleCommand";
import { RemoveAttributesFromFindingsCommand } from "./commands/RemoveAttributesFromFindingsCommand";
import { SetTagsForResourceCommand } from "./commands/SetTagsForResourceCommand";
import { StartAssessmentRunCommand } from "./commands/StartAssessmentRunCommand";
import { StopAssessmentRunCommand } from "./commands/StopAssessmentRunCommand";
import { SubscribeToEventCommand } from "./commands/SubscribeToEventCommand";
import { UnsubscribeFromEventCommand } from "./commands/UnsubscribeFromEventCommand";
import { UpdateAssessmentTargetCommand } from "./commands/UpdateAssessmentTargetCommand";

export class Inspector extends InspectorClient {
  /**
   * <p>Assigns attributes (key and value pairs) to the findings that are specified by the ARNs of the findings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public addAttributesToFindings(
    args: AddAttributesToFindingsInput
  ): Promise<AddAttributesToFindingsOutput>;
  public addAttributesToFindings(
    args: AddAttributesToFindingsInput,
    cb: (err: any, data?: AddAttributesToFindingsOutput) => void
  ): void;
  public addAttributesToFindings(
    args: AddAttributesToFindingsInput,
    cb?: (err: any, data?: AddAttributesToFindingsOutput) => void
  ): Promise<AddAttributesToFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AddAttributesToFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new assessment target using the ARN of the resource group that is generated by <a>CreateResourceGroup</a>. If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments. You can create up to 50 assessment targets per AWS account. You can run up to 500 concurrent agents per AWS account. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html"> Amazon Inspector Assessment Targets</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {InvalidCrossAccountRoleException} <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAssessmentTarget(
    args: CreateAssessmentTargetInput
  ): Promise<CreateAssessmentTargetOutput>;
  public createAssessmentTarget(
    args: CreateAssessmentTargetInput,
    cb: (err: any, data?: CreateAssessmentTargetOutput) => void
  ): void;
  public createAssessmentTarget(
    args: CreateAssessmentTargetInput,
    cb?: (err: any, data?: CreateAssessmentTargetOutput) => void
  ): Promise<CreateAssessmentTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAssessmentTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an assessment template for the assessment target that is specified by the ARN of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and registers a service-linked role to grant Amazon Inspector access to AWS Services needed to perform security assessments.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateInput
  ): Promise<CreateAssessmentTemplateOutput>;
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateInput,
    cb: (err: any, data?: CreateAssessmentTemplateOutput) => void
  ): void;
  public createAssessmentTemplate(
    args: CreateAssessmentTemplateInput,
    cb?: (err: any, data?: CreateAssessmentTemplateOutput) => void
  ): Promise<CreateAssessmentTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAssessmentTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the generation of an exclusions preview for the specified assessment template. The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can detect before it runs the assessment. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {PreviewGenerationInProgressException} <p>The request is rejected. The specified assessment template is currently generating an exclusions preview.</p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createExclusionsPreview(
    args: CreateExclusionsPreviewInput
  ): Promise<CreateExclusionsPreviewOutput>;
  public createExclusionsPreview(
    args: CreateExclusionsPreviewInput,
    cb: (err: any, data?: CreateExclusionsPreviewOutput) => void
  ): void;
  public createExclusionsPreview(
    args: CreateExclusionsPreviewInput,
    cb?: (err: any, data?: CreateExclusionsPreviewOutput) => void
  ): Promise<CreateExclusionsPreviewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateExclusionsPreviewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a resource group using the specified set of tags (key and value pairs) that are used to select the EC2 instances to be included in an Amazon Inspector assessment target. The created resource group is then used to create an Amazon Inspector assessment target. For more information, see <a>CreateAssessmentTarget</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResourceGroup(
    args: CreateResourceGroupInput
  ): Promise<CreateResourceGroupOutput>;
  public createResourceGroup(
    args: CreateResourceGroupInput,
    cb: (err: any, data?: CreateResourceGroupOutput) => void
  ): void;
  public createResourceGroup(
    args: CreateResourceGroupInput,
    cb?: (err: any, data?: CreateResourceGroupOutput) => void
  ): Promise<CreateResourceGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the assessment run that is specified by the ARN of the assessment run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AssessmentRunInProgressException} <p>You cannot perform a specified action if an assessment run is currently in progress.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAssessmentRun(
    args: DeleteAssessmentRunInput
  ): Promise<DeleteAssessmentRunOutput>;
  public deleteAssessmentRun(
    args: DeleteAssessmentRunInput,
    cb: (err: any, data?: DeleteAssessmentRunOutput) => void
  ): void;
  public deleteAssessmentRun(
    args: DeleteAssessmentRunInput,
    cb?: (err: any, data?: DeleteAssessmentRunOutput) => void
  ): Promise<DeleteAssessmentRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAssessmentRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the assessment target that is specified by the ARN of the assessment target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AssessmentRunInProgressException} <p>You cannot perform a specified action if an assessment run is currently in progress.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetInput
  ): Promise<DeleteAssessmentTargetOutput>;
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetInput,
    cb: (err: any, data?: DeleteAssessmentTargetOutput) => void
  ): void;
  public deleteAssessmentTarget(
    args: DeleteAssessmentTargetInput,
    cb?: (err: any, data?: DeleteAssessmentTargetOutput) => void
  ): Promise<DeleteAssessmentTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAssessmentTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the assessment template that is specified by the ARN of the assessment template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AssessmentRunInProgressException} <p>You cannot perform a specified action if an assessment run is currently in progress.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateInput
  ): Promise<DeleteAssessmentTemplateOutput>;
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateInput,
    cb: (err: any, data?: DeleteAssessmentTemplateOutput) => void
  ): void;
  public deleteAssessmentTemplate(
    args: DeleteAssessmentTemplateInput,
    cb?: (err: any, data?: DeleteAssessmentTemplateOutput) => void
  ): Promise<DeleteAssessmentTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAssessmentTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the assessment runs that are specified by the ARNs of the assessment runs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsInput
  ): Promise<DescribeAssessmentRunsOutput>;
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsInput,
    cb: (err: any, data?: DescribeAssessmentRunsOutput) => void
  ): void;
  public describeAssessmentRuns(
    args: DescribeAssessmentRunsInput,
    cb?: (err: any, data?: DescribeAssessmentRunsOutput) => void
  ): Promise<DescribeAssessmentRunsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssessmentRunsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the assessment targets that are specified by the ARNs of the assessment targets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsInput
  ): Promise<DescribeAssessmentTargetsOutput>;
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsInput,
    cb: (err: any, data?: DescribeAssessmentTargetsOutput) => void
  ): void;
  public describeAssessmentTargets(
    args: DescribeAssessmentTargetsInput,
    cb?: (err: any, data?: DescribeAssessmentTargetsOutput) => void
  ): Promise<DescribeAssessmentTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssessmentTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the assessment templates that are specified by the ARNs of the assessment templates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesInput
  ): Promise<DescribeAssessmentTemplatesOutput>;
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesInput,
    cb: (err: any, data?: DescribeAssessmentTemplatesOutput) => void
  ): void;
  public describeAssessmentTemplates(
    args: DescribeAssessmentTemplatesInput,
    cb?: (err: any, data?: DescribeAssessmentTemplatesOutput) => void
  ): Promise<DescribeAssessmentTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAssessmentTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the IAM role that enables Amazon Inspector to access your AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleInput
  ): Promise<DescribeCrossAccountAccessRoleOutput>;
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleInput,
    cb: (err: any, data?: DescribeCrossAccountAccessRoleOutput) => void
  ): void;
  public describeCrossAccountAccessRole(
    args: DescribeCrossAccountAccessRoleInput,
    cb?: (err: any, data?: DescribeCrossAccountAccessRoleOutput) => void
  ): Promise<DescribeCrossAccountAccessRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeCrossAccountAccessRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeExclusions(
    args: DescribeExclusionsInput
  ): Promise<DescribeExclusionsOutput>;
  public describeExclusions(
    args: DescribeExclusionsInput,
    cb: (err: any, data?: DescribeExclusionsOutput) => void
  ): void;
  public describeExclusions(
    args: DescribeExclusionsInput,
    cb?: (err: any, data?: DescribeExclusionsOutput) => void
  ): Promise<DescribeExclusionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeExclusionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the findings that are specified by the ARNs of the findings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeFindings(
    args: DescribeFindingsInput
  ): Promise<DescribeFindingsOutput>;
  public describeFindings(
    args: DescribeFindingsInput,
    cb: (err: any, data?: DescribeFindingsOutput) => void
  ): void;
  public describeFindings(
    args: DescribeFindingsInput,
    cb?: (err: any, data?: DescribeFindingsOutput) => void
  ): Promise<DescribeFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the resource groups that are specified by the ARNs of the resource groups.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeResourceGroups(
    args: DescribeResourceGroupsInput
  ): Promise<DescribeResourceGroupsOutput>;
  public describeResourceGroups(
    args: DescribeResourceGroupsInput,
    cb: (err: any, data?: DescribeResourceGroupsOutput) => void
  ): void;
  public describeResourceGroups(
    args: DescribeResourceGroupsInput,
    cb?: (err: any, data?: DescribeResourceGroupsOutput) => void
  ): Promise<DescribeResourceGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeResourceGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes the rules packages that are specified by the ARNs of the rules packages.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeRulesPackages(
    args: DescribeRulesPackagesInput
  ): Promise<DescribeRulesPackagesOutput>;
  public describeRulesPackages(
    args: DescribeRulesPackagesInput,
    cb: (err: any, data?: DescribeRulesPackagesOutput) => void
  ): void;
  public describeRulesPackages(
    args: DescribeRulesPackagesInput,
    cb?: (err: any, data?: DescribeRulesPackagesOutput) => void
  ): Promise<DescribeRulesPackagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeRulesPackagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Produces an assessment report that includes detailed and comprehensive results of a specified assessment run. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {AssessmentRunInProgressException} <p>You cannot perform a specified action if an assessment run is currently in progress.</p>
   *   - {UnsupportedFeatureException} <p>Used by the <a>GetAssessmentReport</a> API. The request was rejected because you tried to generate a report for an assessment run that existed before reporting was supported in Amazon Inspector. You can only generate reports for assessment runs that took place or will take place after generating reports in Amazon Inspector became available.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAssessmentReport(
    args: GetAssessmentReportInput
  ): Promise<GetAssessmentReportOutput>;
  public getAssessmentReport(
    args: GetAssessmentReportInput,
    cb: (err: any, data?: GetAssessmentReportOutput) => void
  ): void;
  public getAssessmentReport(
    args: GetAssessmentReportInput,
    cb?: (err: any, data?: GetAssessmentReportOutput) => void
  ): Promise<GetAssessmentReportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAssessmentReportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by the preview token. You can obtain the preview token by running the CreateExclusionsPreview API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {InternalException} <p>Internal server error.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExclusionsPreview(
    args: GetExclusionsPreviewInput
  ): Promise<GetExclusionsPreviewOutput>;
  public getExclusionsPreview(
    args: GetExclusionsPreviewInput,
    cb: (err: any, data?: GetExclusionsPreviewOutput) => void
  ): void;
  public getExclusionsPreview(
    args: GetExclusionsPreviewInput,
    cb?: (err: any, data?: GetExclusionsPreviewOutput) => void
  ): Promise<GetExclusionsPreviewOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExclusionsPreviewCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Information about the data that is collected for the specified assessment run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTelemetryMetadata(
    args: GetTelemetryMetadataInput
  ): Promise<GetTelemetryMetadataOutput>;
  public getTelemetryMetadata(
    args: GetTelemetryMetadataInput,
    cb: (err: any, data?: GetTelemetryMetadataOutput) => void
  ): void;
  public getTelemetryMetadata(
    args: GetTelemetryMetadataInput,
    cb?: (err: any, data?: GetTelemetryMetadataOutput) => void
  ): Promise<GetTelemetryMetadataOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTelemetryMetadataCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the agents of the assessment runs that are specified by the ARNs of the assessment runs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsInput
  ): Promise<ListAssessmentRunAgentsOutput>;
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsInput,
    cb: (err: any, data?: ListAssessmentRunAgentsOutput) => void
  ): void;
  public listAssessmentRunAgents(
    args: ListAssessmentRunAgentsInput,
    cb?: (err: any, data?: ListAssessmentRunAgentsOutput) => void
  ): Promise<ListAssessmentRunAgentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssessmentRunAgentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the assessment runs that correspond to the assessment templates that are specified by the ARNs of the assessment templates.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssessmentRuns(
    args: ListAssessmentRunsInput
  ): Promise<ListAssessmentRunsOutput>;
  public listAssessmentRuns(
    args: ListAssessmentRunsInput,
    cb: (err: any, data?: ListAssessmentRunsOutput) => void
  ): void;
  public listAssessmentRuns(
    args: ListAssessmentRunsInput,
    cb?: (err: any, data?: ListAssessmentRunsOutput) => void
  ): Promise<ListAssessmentRunsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssessmentRunsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the ARNs of the assessment targets within this AWS account. For more information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment Targets</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssessmentTargets(
    args: ListAssessmentTargetsInput
  ): Promise<ListAssessmentTargetsOutput>;
  public listAssessmentTargets(
    args: ListAssessmentTargetsInput,
    cb: (err: any, data?: ListAssessmentTargetsOutput) => void
  ): void;
  public listAssessmentTargets(
    args: ListAssessmentTargetsInput,
    cb?: (err: any, data?: ListAssessmentTargetsOutput) => void
  ): Promise<ListAssessmentTargetsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssessmentTargetsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the assessment templates that correspond to the assessment targets that are specified by the ARNs of the assessment targets.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesInput
  ): Promise<ListAssessmentTemplatesOutput>;
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesInput,
    cb: (err: any, data?: ListAssessmentTemplatesOutput) => void
  ): void;
  public listAssessmentTemplates(
    args: ListAssessmentTemplatesInput,
    cb?: (err: any, data?: ListAssessmentTemplatesOutput) => void
  ): Promise<ListAssessmentTemplatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListAssessmentTemplatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all the event subscriptions for the assessment template that is specified by the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listEventSubscriptions(
    args: ListEventSubscriptionsInput
  ): Promise<ListEventSubscriptionsOutput>;
  public listEventSubscriptions(
    args: ListEventSubscriptionsInput,
    cb: (err: any, data?: ListEventSubscriptionsOutput) => void
  ): void;
  public listEventSubscriptions(
    args: ListEventSubscriptionsInput,
    cb?: (err: any, data?: ListEventSubscriptionsOutput) => void
  ): Promise<ListEventSubscriptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListEventSubscriptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List exclusions that are generated by the assessment run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listExclusions(
    args: ListExclusionsInput
  ): Promise<ListExclusionsOutput>;
  public listExclusions(
    args: ListExclusionsInput,
    cb: (err: any, data?: ListExclusionsOutput) => void
  ): void;
  public listExclusions(
    args: ListExclusionsInput,
    cb?: (err: any, data?: ListExclusionsOutput) => void
  ): Promise<ListExclusionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListExclusionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists findings that are generated by the assessment runs that are specified by the ARNs of the assessment runs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFindings(args: ListFindingsInput): Promise<ListFindingsOutput>;
  public listFindings(
    args: ListFindingsInput,
    cb: (err: any, data?: ListFindingsOutput) => void
  ): void;
  public listFindings(
    args: ListFindingsInput,
    cb?: (err: any, data?: ListFindingsOutput) => void
  ): Promise<ListFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all available Amazon Inspector rules packages.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listRulesPackages(
    args: ListRulesPackagesInput
  ): Promise<ListRulesPackagesOutput>;
  public listRulesPackages(
    args: ListRulesPackagesInput,
    cb: (err: any, data?: ListRulesPackagesOutput) => void
  ): void;
  public listRulesPackages(
    args: ListRulesPackagesInput,
    cb?: (err: any, data?: ListRulesPackagesOutput) => void
  ): Promise<ListRulesPackagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListRulesPackagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all tags associated with an assessment template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Previews the agents installed on the EC2 instances that are part of the specified assessment target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {InvalidCrossAccountRoleException} <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public previewAgents(args: PreviewAgentsInput): Promise<PreviewAgentsOutput>;
  public previewAgents(
    args: PreviewAgentsInput,
    cb: (err: any, data?: PreviewAgentsOutput) => void
  ): void;
  public previewAgents(
    args: PreviewAgentsInput,
    cb?: (err: any, data?: PreviewAgentsOutput) => void
  ): Promise<PreviewAgentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PreviewAgentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to perform security assessments.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {InvalidCrossAccountRoleException} <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleInput
  ): Promise<RegisterCrossAccountAccessRoleOutput>;
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleInput,
    cb: (err: any, data?: RegisterCrossAccountAccessRoleOutput) => void
  ): void;
  public registerCrossAccountAccessRole(
    args: RegisterCrossAccountAccessRoleInput,
    cb?: (err: any, data?: RegisterCrossAccountAccessRoleOutput) => void
  ): Promise<RegisterCrossAccountAccessRoleOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterCrossAccountAccessRoleCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes entire attributes (key and value pairs) from the findings that are specified by the ARNs of the findings where an attribute with the specified key exists.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsInput
  ): Promise<RemoveAttributesFromFindingsOutput>;
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsInput,
    cb: (err: any, data?: RemoveAttributesFromFindingsOutput) => void
  ): void;
  public removeAttributesFromFindings(
    args: RemoveAttributesFromFindingsInput,
    cb?: (err: any, data?: RemoveAttributesFromFindingsOutput) => void
  ): Promise<RemoveAttributesFromFindingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RemoveAttributesFromFindingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets tags (key and value pairs) to the assessment template that is specified by the ARN of the assessment template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public setTagsForResource(
    args: SetTagsForResourceInput
  ): Promise<SetTagsForResourceOutput>;
  public setTagsForResource(
    args: SetTagsForResourceInput,
    cb: (err: any, data?: SetTagsForResourceOutput) => void
  ): void;
  public setTagsForResource(
    args: SetTagsForResourceInput,
    cb?: (err: any, data?: SetTagsForResourceOutput) => void
  ): Promise<SetTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SetTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the assessment run specified by the ARN of the assessment template. For this API to function properly, you must not exceed the limit of running up to 500 concurrent agents per AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {InvalidCrossAccountRoleException} <p>Amazon Inspector cannot assume the cross-account role that it needs to list your EC2 instances during the assessment run.</p>
   *   - {AgentsAlreadyRunningAssessmentException} <p>You started an assessment run, but one of the instances is already participating in another assessment run.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startAssessmentRun(
    args: StartAssessmentRunInput
  ): Promise<StartAssessmentRunOutput>;
  public startAssessmentRun(
    args: StartAssessmentRunInput,
    cb: (err: any, data?: StartAssessmentRunOutput) => void
  ): void;
  public startAssessmentRun(
    args: StartAssessmentRunInput,
    cb?: (err: any, data?: StartAssessmentRunOutput) => void
  ): Promise<StartAssessmentRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartAssessmentRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops the assessment run that is specified by the ARN of the assessment run.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopAssessmentRun(
    args: StopAssessmentRunInput
  ): Promise<StopAssessmentRunOutput>;
  public stopAssessmentRun(
    args: StopAssessmentRunInput,
    cb: (err: any, data?: StopAssessmentRunOutput) => void
  ): void;
  public stopAssessmentRun(
    args: StopAssessmentRunInput,
    cb?: (err: any, data?: StopAssessmentRunOutput) => void
  ): Promise<StopAssessmentRunOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopAssessmentRunCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {LimitExceededException} <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public subscribeToEvent(
    args: SubscribeToEventInput
  ): Promise<SubscribeToEventOutput>;
  public subscribeToEvent(
    args: SubscribeToEventInput,
    cb: (err: any, data?: SubscribeToEventOutput) => void
  ): void;
  public subscribeToEvent(
    args: SubscribeToEventInput,
    cb?: (err: any, data?: SubscribeToEventOutput) => void
  ): Promise<SubscribeToEventOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new SubscribeToEventCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Disables the process of sending Amazon Simple Notification Service (SNS) notifications about a specified event to a specified SNS topic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventInput
  ): Promise<UnsubscribeFromEventOutput>;
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventInput,
    cb: (err: any, data?: UnsubscribeFromEventOutput) => void
  ): void;
  public unsubscribeFromEvent(
    args: UnsubscribeFromEventInput,
    cb?: (err: any, data?: UnsubscribeFromEventOutput) => void
  ): Promise<UnsubscribeFromEventOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UnsubscribeFromEventCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the assessment target that is specified by the ARN of the assessment target.</p> <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account and region are included in the assessment target.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalException} <p>Internal server error.</p>
   *   - {InvalidInputException} <p>The request was rejected because an invalid or out-of-range value was supplied for an input parameter.</p>
   *   - {AccessDeniedException} <p>You do not have required permissions to access the requested resource.</p>
   *   - {NoSuchEntityException} <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
   *   - {ServiceTemporarilyUnavailableException} <p>The serice is temporary unavailable.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetInput
  ): Promise<UpdateAssessmentTargetOutput>;
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetInput,
    cb: (err: any, data?: UpdateAssessmentTargetOutput) => void
  ): void;
  public updateAssessmentTarget(
    args: UpdateAssessmentTargetInput,
    cb?: (err: any, data?: UpdateAssessmentTargetOutput) => void
  ): Promise<UpdateAssessmentTargetOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAssessmentTargetCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
