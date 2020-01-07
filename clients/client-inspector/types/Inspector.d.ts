import { InspectorClient } from "./InspectorClient";
import { AddAttributesToFindingsCommandInput, AddAttributesToFindingsCommandOutput } from "./commands/AddAttributesToFindingsCommand";
import { CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput } from "./commands/CreateAssessmentTargetCommand";
import { CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput } from "./commands/CreateAssessmentTemplateCommand";
import { CreateExclusionsPreviewCommandInput, CreateExclusionsPreviewCommandOutput } from "./commands/CreateExclusionsPreviewCommand";
import { CreateResourceGroupCommandInput, CreateResourceGroupCommandOutput } from "./commands/CreateResourceGroupCommand";
import { DeleteAssessmentRunCommandInput, DeleteAssessmentRunCommandOutput } from "./commands/DeleteAssessmentRunCommand";
import { DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput } from "./commands/DeleteAssessmentTargetCommand";
import { DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput } from "./commands/DeleteAssessmentTemplateCommand";
import { DescribeAssessmentRunsCommandInput, DescribeAssessmentRunsCommandOutput } from "./commands/DescribeAssessmentRunsCommand";
import { DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput } from "./commands/DescribeAssessmentTargetsCommand";
import { DescribeAssessmentTemplatesCommandInput, DescribeAssessmentTemplatesCommandOutput } from "./commands/DescribeAssessmentTemplatesCommand";
import { DescribeCrossAccountAccessRoleCommandInput, DescribeCrossAccountAccessRoleCommandOutput } from "./commands/DescribeCrossAccountAccessRoleCommand";
import { DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput } from "./commands/DescribeExclusionsCommand";
import { DescribeFindingsCommandInput, DescribeFindingsCommandOutput } from "./commands/DescribeFindingsCommand";
import { DescribeResourceGroupsCommandInput, DescribeResourceGroupsCommandOutput } from "./commands/DescribeResourceGroupsCommand";
import { DescribeRulesPackagesCommandInput, DescribeRulesPackagesCommandOutput } from "./commands/DescribeRulesPackagesCommand";
import { GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput } from "./commands/GetAssessmentReportCommand";
import { GetExclusionsPreviewCommandInput, GetExclusionsPreviewCommandOutput } from "./commands/GetExclusionsPreviewCommand";
import { GetTelemetryMetadataCommandInput, GetTelemetryMetadataCommandOutput } from "./commands/GetTelemetryMetadataCommand";
import { ListAssessmentRunAgentsCommandInput, ListAssessmentRunAgentsCommandOutput } from "./commands/ListAssessmentRunAgentsCommand";
import { ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput } from "./commands/ListAssessmentRunsCommand";
import { ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput } from "./commands/ListAssessmentTargetsCommand";
import { ListAssessmentTemplatesCommandInput, ListAssessmentTemplatesCommandOutput } from "./commands/ListAssessmentTemplatesCommand";
import { ListEventSubscriptionsCommandInput, ListEventSubscriptionsCommandOutput } from "./commands/ListEventSubscriptionsCommand";
import { ListExclusionsCommandInput, ListExclusionsCommandOutput } from "./commands/ListExclusionsCommand";
import { ListFindingsCommandInput, ListFindingsCommandOutput } from "./commands/ListFindingsCommand";
import { ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput } from "./commands/ListRulesPackagesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PreviewAgentsCommandInput, PreviewAgentsCommandOutput } from "./commands/PreviewAgentsCommand";
import { RegisterCrossAccountAccessRoleCommandInput, RegisterCrossAccountAccessRoleCommandOutput } from "./commands/RegisterCrossAccountAccessRoleCommand";
import { RemoveAttributesFromFindingsCommandInput, RemoveAttributesFromFindingsCommandOutput } from "./commands/RemoveAttributesFromFindingsCommand";
import { SetTagsForResourceCommandInput, SetTagsForResourceCommandOutput } from "./commands/SetTagsForResourceCommand";
import { StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput } from "./commands/StartAssessmentRunCommand";
import { StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput } from "./commands/StopAssessmentRunCommand";
import { SubscribeToEventCommandInput, SubscribeToEventCommandOutput } from "./commands/SubscribeToEventCommand";
import { UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput } from "./commands/UnsubscribeFromEventCommand";
import { UpdateAssessmentTargetCommandInput, UpdateAssessmentTargetCommandOutput } from "./commands/UpdateAssessmentTargetCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
export declare class Inspector extends InspectorClient {
    /**
     * <p>Assigns attributes (key and value pairs) to the findings that are specified by the
     *          ARNs of the findings.</p>
     */
    addAttributesToFindings(args: AddAttributesToFindingsCommandInput, options?: __HttpHandlerOptions): Promise<AddAttributesToFindingsCommandOutput>;
    addAttributesToFindings(args: AddAttributesToFindingsCommandInput, cb: (err: any, data?: AddAttributesToFindingsCommandOutput) => void): void;
    addAttributesToFindings(args: AddAttributesToFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddAttributesToFindingsCommandOutput) => void): void;
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
    createAssessmentTarget(args: CreateAssessmentTargetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssessmentTargetCommandOutput>;
    createAssessmentTarget(args: CreateAssessmentTargetCommandInput, cb: (err: any, data?: CreateAssessmentTargetCommandOutput) => void): void;
    createAssessmentTarget(args: CreateAssessmentTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssessmentTargetCommandOutput) => void): void;
    /**
     * <p>Creates an assessment template for the assessment target that is specified by the ARN
     *          of the assessment target. If the <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_slr.html">service-linked role</a> isn’t already registered, this action also creates and
     *          registers a service-linked role to grant Amazon Inspector access to AWS Services needed to
     *          perform security assessments.</p>
     */
    createAssessmentTemplate(args: CreateAssessmentTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssessmentTemplateCommandOutput>;
    createAssessmentTemplate(args: CreateAssessmentTemplateCommandInput, cb: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void): void;
    createAssessmentTemplate(args: CreateAssessmentTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAssessmentTemplateCommandOutput) => void): void;
    /**
     * <p>Starts the generation of an exclusions preview for the specified assessment template.
     *          The exclusions preview lists the potential exclusions (ExclusionPreview) that Inspector can
     *          detect before it runs the assessment. </p>
     */
    createExclusionsPreview(args: CreateExclusionsPreviewCommandInput, options?: __HttpHandlerOptions): Promise<CreateExclusionsPreviewCommandOutput>;
    createExclusionsPreview(args: CreateExclusionsPreviewCommandInput, cb: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void): void;
    createExclusionsPreview(args: CreateExclusionsPreviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateExclusionsPreviewCommandOutput) => void): void;
    /**
     * <p>Creates a resource group using the specified set of tags (key and value pairs) that
     *          are used to select the EC2 instances to be included in an Amazon Inspector assessment
     *          target. The created resource group is then used to create an Amazon Inspector assessment
     *          target. For more information, see <a>CreateAssessmentTarget</a>.</p>
     */
    createResourceGroup(args: CreateResourceGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateResourceGroupCommandOutput>;
    createResourceGroup(args: CreateResourceGroupCommandInput, cb: (err: any, data?: CreateResourceGroupCommandOutput) => void): void;
    createResourceGroup(args: CreateResourceGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateResourceGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the assessment run that is specified by the ARN of the assessment
     *          run.</p>
     */
    deleteAssessmentRun(args: DeleteAssessmentRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssessmentRunCommandOutput>;
    deleteAssessmentRun(args: DeleteAssessmentRunCommandInput, cb: (err: any, data?: DeleteAssessmentRunCommandOutput) => void): void;
    deleteAssessmentRun(args: DeleteAssessmentRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssessmentRunCommandOutput) => void): void;
    /**
     * <p>Deletes the assessment target that is specified by the ARN of the assessment
     *          target.</p>
     */
    deleteAssessmentTarget(args: DeleteAssessmentTargetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssessmentTargetCommandOutput>;
    deleteAssessmentTarget(args: DeleteAssessmentTargetCommandInput, cb: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void): void;
    deleteAssessmentTarget(args: DeleteAssessmentTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssessmentTargetCommandOutput) => void): void;
    /**
     * <p>Deletes the assessment template that is specified by the ARN of the assessment
     *          template.</p>
     */
    deleteAssessmentTemplate(args: DeleteAssessmentTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssessmentTemplateCommandOutput>;
    deleteAssessmentTemplate(args: DeleteAssessmentTemplateCommandInput, cb: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void): void;
    deleteAssessmentTemplate(args: DeleteAssessmentTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssessmentTemplateCommandOutput) => void): void;
    /**
     * <p>Describes the assessment runs that are specified by the ARNs of the assessment
     *          runs.</p>
     */
    describeAssessmentRuns(args: DescribeAssessmentRunsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssessmentRunsCommandOutput>;
    describeAssessmentRuns(args: DescribeAssessmentRunsCommandInput, cb: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void): void;
    describeAssessmentRuns(args: DescribeAssessmentRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssessmentRunsCommandOutput) => void): void;
    /**
     * <p>Describes the assessment targets that are specified by the ARNs of the assessment
     *          targets.</p>
     */
    describeAssessmentTargets(args: DescribeAssessmentTargetsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssessmentTargetsCommandOutput>;
    describeAssessmentTargets(args: DescribeAssessmentTargetsCommandInput, cb: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void): void;
    describeAssessmentTargets(args: DescribeAssessmentTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssessmentTargetsCommandOutput) => void): void;
    /**
     * <p>Describes the assessment templates that are specified by the ARNs of the assessment
     *          templates.</p>
     */
    describeAssessmentTemplates(args: DescribeAssessmentTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssessmentTemplatesCommandOutput>;
    describeAssessmentTemplates(args: DescribeAssessmentTemplatesCommandInput, cb: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void): void;
    describeAssessmentTemplates(args: DescribeAssessmentTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAssessmentTemplatesCommandOutput) => void): void;
    /**
     * <p>Describes the IAM role that enables Amazon Inspector to access your AWS
     *          account.</p>
     */
    describeCrossAccountAccessRole(args: DescribeCrossAccountAccessRoleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCrossAccountAccessRoleCommandOutput>;
    describeCrossAccountAccessRole(args: DescribeCrossAccountAccessRoleCommandInput, cb: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void): void;
    describeCrossAccountAccessRole(args: DescribeCrossAccountAccessRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCrossAccountAccessRoleCommandOutput) => void): void;
    /**
     * <p>Describes the exclusions that are specified by the exclusions' ARNs.</p>
     */
    describeExclusions(args: DescribeExclusionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExclusionsCommandOutput>;
    describeExclusions(args: DescribeExclusionsCommandInput, cb: (err: any, data?: DescribeExclusionsCommandOutput) => void): void;
    describeExclusions(args: DescribeExclusionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExclusionsCommandOutput) => void): void;
    /**
     * <p>Describes the findings that are specified by the ARNs of the findings.</p>
     */
    describeFindings(args: DescribeFindingsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFindingsCommandOutput>;
    describeFindings(args: DescribeFindingsCommandInput, cb: (err: any, data?: DescribeFindingsCommandOutput) => void): void;
    describeFindings(args: DescribeFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFindingsCommandOutput) => void): void;
    /**
     * <p>Describes the resource groups that are specified by the ARNs of the resource
     *          groups.</p>
     */
    describeResourceGroups(args: DescribeResourceGroupsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeResourceGroupsCommandOutput>;
    describeResourceGroups(args: DescribeResourceGroupsCommandInput, cb: (err: any, data?: DescribeResourceGroupsCommandOutput) => void): void;
    describeResourceGroups(args: DescribeResourceGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeResourceGroupsCommandOutput) => void): void;
    /**
     * <p>Describes the rules packages that are specified by the ARNs of the rules
     *          packages.</p>
     */
    describeRulesPackages(args: DescribeRulesPackagesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRulesPackagesCommandOutput>;
    describeRulesPackages(args: DescribeRulesPackagesCommandInput, cb: (err: any, data?: DescribeRulesPackagesCommandOutput) => void): void;
    describeRulesPackages(args: DescribeRulesPackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRulesPackagesCommandOutput) => void): void;
    /**
     * <p>Produces an assessment report that includes detailed and comprehensive results of a
     *          specified assessment run. </p>
     */
    getAssessmentReport(args: GetAssessmentReportCommandInput, options?: __HttpHandlerOptions): Promise<GetAssessmentReportCommandOutput>;
    getAssessmentReport(args: GetAssessmentReportCommandInput, cb: (err: any, data?: GetAssessmentReportCommandOutput) => void): void;
    getAssessmentReport(args: GetAssessmentReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetAssessmentReportCommandOutput) => void): void;
    /**
     * <p>Retrieves the exclusions preview (a list of ExclusionPreview objects) specified by
     *          the preview token. You can obtain the preview token by running the CreateExclusionsPreview
     *          API.</p>
     */
    getExclusionsPreview(args: GetExclusionsPreviewCommandInput, options?: __HttpHandlerOptions): Promise<GetExclusionsPreviewCommandOutput>;
    getExclusionsPreview(args: GetExclusionsPreviewCommandInput, cb: (err: any, data?: GetExclusionsPreviewCommandOutput) => void): void;
    getExclusionsPreview(args: GetExclusionsPreviewCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExclusionsPreviewCommandOutput) => void): void;
    /**
     * <p>Information about the data that is collected for the specified assessment
     *          run.</p>
     */
    getTelemetryMetadata(args: GetTelemetryMetadataCommandInput, options?: __HttpHandlerOptions): Promise<GetTelemetryMetadataCommandOutput>;
    getTelemetryMetadata(args: GetTelemetryMetadataCommandInput, cb: (err: any, data?: GetTelemetryMetadataCommandOutput) => void): void;
    getTelemetryMetadata(args: GetTelemetryMetadataCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTelemetryMetadataCommandOutput) => void): void;
    /**
     * <p>Lists the agents of the assessment runs that are specified by the ARNs of the
     *          assessment runs.</p>
     */
    listAssessmentRunAgents(args: ListAssessmentRunAgentsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssessmentRunAgentsCommandOutput>;
    listAssessmentRunAgents(args: ListAssessmentRunAgentsCommandInput, cb: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void): void;
    listAssessmentRunAgents(args: ListAssessmentRunAgentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssessmentRunAgentsCommandOutput) => void): void;
    /**
     * <p>Lists the assessment runs that correspond to the assessment templates that are
     *          specified by the ARNs of the assessment templates.</p>
     */
    listAssessmentRuns(args: ListAssessmentRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssessmentRunsCommandOutput>;
    listAssessmentRuns(args: ListAssessmentRunsCommandInput, cb: (err: any, data?: ListAssessmentRunsCommandOutput) => void): void;
    listAssessmentRuns(args: ListAssessmentRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssessmentRunsCommandOutput) => void): void;
    /**
     * <p>Lists the ARNs of the assessment targets within this AWS account. For more
     *          information about assessment targets, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_applications.html">Amazon Inspector Assessment
     *             Targets</a>.</p>
     */
    listAssessmentTargets(args: ListAssessmentTargetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssessmentTargetsCommandOutput>;
    listAssessmentTargets(args: ListAssessmentTargetsCommandInput, cb: (err: any, data?: ListAssessmentTargetsCommandOutput) => void): void;
    listAssessmentTargets(args: ListAssessmentTargetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssessmentTargetsCommandOutput) => void): void;
    /**
     * <p>Lists the assessment templates that correspond to the assessment targets that are
     *          specified by the ARNs of the assessment targets.</p>
     */
    listAssessmentTemplates(args: ListAssessmentTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListAssessmentTemplatesCommandOutput>;
    listAssessmentTemplates(args: ListAssessmentTemplatesCommandInput, cb: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void): void;
    listAssessmentTemplates(args: ListAssessmentTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssessmentTemplatesCommandOutput) => void): void;
    /**
     * <p>Lists all the event subscriptions for the assessment template that is specified by
     *          the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
     */
    listEventSubscriptions(args: ListEventSubscriptionsCommandInput, options?: __HttpHandlerOptions): Promise<ListEventSubscriptionsCommandOutput>;
    listEventSubscriptions(args: ListEventSubscriptionsCommandInput, cb: (err: any, data?: ListEventSubscriptionsCommandOutput) => void): void;
    listEventSubscriptions(args: ListEventSubscriptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEventSubscriptionsCommandOutput) => void): void;
    /**
     * <p>List exclusions that are generated by the assessment run.</p>
     */
    listExclusions(args: ListExclusionsCommandInput, options?: __HttpHandlerOptions): Promise<ListExclusionsCommandOutput>;
    listExclusions(args: ListExclusionsCommandInput, cb: (err: any, data?: ListExclusionsCommandOutput) => void): void;
    listExclusions(args: ListExclusionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExclusionsCommandOutput) => void): void;
    /**
     * <p>Lists findings that are generated by the assessment runs that are specified by the
     *          ARNs of the assessment runs.</p>
     */
    listFindings(args: ListFindingsCommandInput, options?: __HttpHandlerOptions): Promise<ListFindingsCommandOutput>;
    listFindings(args: ListFindingsCommandInput, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
    listFindings(args: ListFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFindingsCommandOutput) => void): void;
    /**
     * <p>Lists all available Amazon Inspector rules packages.</p>
     */
    listRulesPackages(args: ListRulesPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesPackagesCommandOutput>;
    listRulesPackages(args: ListRulesPackagesCommandInput, cb: (err: any, data?: ListRulesPackagesCommandOutput) => void): void;
    listRulesPackages(args: ListRulesPackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRulesPackagesCommandOutput) => void): void;
    /**
     * <p>Lists all tags associated with an assessment template.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Previews the agents installed on the EC2 instances that are part of the specified
     *          assessment target.</p>
     */
    previewAgents(args: PreviewAgentsCommandInput, options?: __HttpHandlerOptions): Promise<PreviewAgentsCommandOutput>;
    previewAgents(args: PreviewAgentsCommandInput, cb: (err: any, data?: PreviewAgentsCommandOutput) => void): void;
    previewAgents(args: PreviewAgentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PreviewAgentsCommandOutput) => void): void;
    /**
     * <p>Registers the IAM role that grants Amazon Inspector access to AWS Services needed to
     *          perform security assessments.</p>
     */
    registerCrossAccountAccessRole(args: RegisterCrossAccountAccessRoleCommandInput, options?: __HttpHandlerOptions): Promise<RegisterCrossAccountAccessRoleCommandOutput>;
    registerCrossAccountAccessRole(args: RegisterCrossAccountAccessRoleCommandInput, cb: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void): void;
    registerCrossAccountAccessRole(args: RegisterCrossAccountAccessRoleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterCrossAccountAccessRoleCommandOutput) => void): void;
    /**
     * <p>Removes entire attributes (key and value pairs) from the findings that are specified
     *          by the ARNs of the findings where an attribute with the specified key exists.</p>
     */
    removeAttributesFromFindings(args: RemoveAttributesFromFindingsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveAttributesFromFindingsCommandOutput>;
    removeAttributesFromFindings(args: RemoveAttributesFromFindingsCommandInput, cb: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void): void;
    removeAttributesFromFindings(args: RemoveAttributesFromFindingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RemoveAttributesFromFindingsCommandOutput) => void): void;
    /**
     * <p>Sets tags (key and value pairs) to the assessment template that is specified by the
     *          ARN of the assessment template.</p>
     */
    setTagsForResource(args: SetTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<SetTagsForResourceCommandOutput>;
    setTagsForResource(args: SetTagsForResourceCommandInput, cb: (err: any, data?: SetTagsForResourceCommandOutput) => void): void;
    setTagsForResource(args: SetTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SetTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts the assessment run specified by the ARN of the assessment template. For this
     *          API to function properly, you must not exceed the limit of running up to 500 concurrent
     *          agents per AWS account.</p>
     */
    startAssessmentRun(args: StartAssessmentRunCommandInput, options?: __HttpHandlerOptions): Promise<StartAssessmentRunCommandOutput>;
    startAssessmentRun(args: StartAssessmentRunCommandInput, cb: (err: any, data?: StartAssessmentRunCommandOutput) => void): void;
    startAssessmentRun(args: StartAssessmentRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartAssessmentRunCommandOutput) => void): void;
    /**
     * <p>Stops the assessment run that is specified by the ARN of the assessment
     *          run.</p>
     */
    stopAssessmentRun(args: StopAssessmentRunCommandInput, options?: __HttpHandlerOptions): Promise<StopAssessmentRunCommandOutput>;
    stopAssessmentRun(args: StopAssessmentRunCommandInput, cb: (err: any, data?: StopAssessmentRunCommandOutput) => void): void;
    stopAssessmentRun(args: StopAssessmentRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopAssessmentRunCommandOutput) => void): void;
    /**
     * <p>Enables the process of sending Amazon Simple Notification Service (SNS) notifications
     *          about a specified event to a specified SNS topic.</p>
     */
    subscribeToEvent(args: SubscribeToEventCommandInput, options?: __HttpHandlerOptions): Promise<SubscribeToEventCommandOutput>;
    subscribeToEvent(args: SubscribeToEventCommandInput, cb: (err: any, data?: SubscribeToEventCommandOutput) => void): void;
    subscribeToEvent(args: SubscribeToEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubscribeToEventCommandOutput) => void): void;
    /**
     * <p>Disables the process of sending Amazon Simple Notification Service (SNS)
     *          notifications about a specified event to a specified SNS topic.</p>
     */
    unsubscribeFromEvent(args: UnsubscribeFromEventCommandInput, options?: __HttpHandlerOptions): Promise<UnsubscribeFromEventCommandOutput>;
    unsubscribeFromEvent(args: UnsubscribeFromEventCommandInput, cb: (err: any, data?: UnsubscribeFromEventCommandOutput) => void): void;
    unsubscribeFromEvent(args: UnsubscribeFromEventCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UnsubscribeFromEventCommandOutput) => void): void;
    /**
     * <p>Updates the assessment target that is specified by the ARN of the assessment
     *          target.</p>
     *          <p>If resourceGroupArn is not specified, all EC2 instances in the current AWS account
     *          and region are included in the assessment target.</p>
     */
    updateAssessmentTarget(args: UpdateAssessmentTargetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssessmentTargetCommandOutput>;
    updateAssessmentTarget(args: UpdateAssessmentTargetCommandInput, cb: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void): void;
    updateAssessmentTarget(args: UpdateAssessmentTargetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAssessmentTargetCommandOutput) => void): void;
}
