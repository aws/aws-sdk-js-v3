"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InspectorClient_1 = require("./InspectorClient");
const AddAttributesToFindingsCommand_1 = require("./commands/AddAttributesToFindingsCommand");
const CreateAssessmentTargetCommand_1 = require("./commands/CreateAssessmentTargetCommand");
const CreateAssessmentTemplateCommand_1 = require("./commands/CreateAssessmentTemplateCommand");
const CreateExclusionsPreviewCommand_1 = require("./commands/CreateExclusionsPreviewCommand");
const CreateResourceGroupCommand_1 = require("./commands/CreateResourceGroupCommand");
const DeleteAssessmentRunCommand_1 = require("./commands/DeleteAssessmentRunCommand");
const DeleteAssessmentTargetCommand_1 = require("./commands/DeleteAssessmentTargetCommand");
const DeleteAssessmentTemplateCommand_1 = require("./commands/DeleteAssessmentTemplateCommand");
const DescribeAssessmentRunsCommand_1 = require("./commands/DescribeAssessmentRunsCommand");
const DescribeAssessmentTargetsCommand_1 = require("./commands/DescribeAssessmentTargetsCommand");
const DescribeAssessmentTemplatesCommand_1 = require("./commands/DescribeAssessmentTemplatesCommand");
const DescribeCrossAccountAccessRoleCommand_1 = require("./commands/DescribeCrossAccountAccessRoleCommand");
const DescribeExclusionsCommand_1 = require("./commands/DescribeExclusionsCommand");
const DescribeFindingsCommand_1 = require("./commands/DescribeFindingsCommand");
const DescribeResourceGroupsCommand_1 = require("./commands/DescribeResourceGroupsCommand");
const DescribeRulesPackagesCommand_1 = require("./commands/DescribeRulesPackagesCommand");
const GetAssessmentReportCommand_1 = require("./commands/GetAssessmentReportCommand");
const GetExclusionsPreviewCommand_1 = require("./commands/GetExclusionsPreviewCommand");
const GetTelemetryMetadataCommand_1 = require("./commands/GetTelemetryMetadataCommand");
const ListAssessmentRunAgentsCommand_1 = require("./commands/ListAssessmentRunAgentsCommand");
const ListAssessmentRunsCommand_1 = require("./commands/ListAssessmentRunsCommand");
const ListAssessmentTargetsCommand_1 = require("./commands/ListAssessmentTargetsCommand");
const ListAssessmentTemplatesCommand_1 = require("./commands/ListAssessmentTemplatesCommand");
const ListEventSubscriptionsCommand_1 = require("./commands/ListEventSubscriptionsCommand");
const ListExclusionsCommand_1 = require("./commands/ListExclusionsCommand");
const ListFindingsCommand_1 = require("./commands/ListFindingsCommand");
const ListRulesPackagesCommand_1 = require("./commands/ListRulesPackagesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PreviewAgentsCommand_1 = require("./commands/PreviewAgentsCommand");
const RegisterCrossAccountAccessRoleCommand_1 = require("./commands/RegisterCrossAccountAccessRoleCommand");
const RemoveAttributesFromFindingsCommand_1 = require("./commands/RemoveAttributesFromFindingsCommand");
const SetTagsForResourceCommand_1 = require("./commands/SetTagsForResourceCommand");
const StartAssessmentRunCommand_1 = require("./commands/StartAssessmentRunCommand");
const StopAssessmentRunCommand_1 = require("./commands/StopAssessmentRunCommand");
const SubscribeToEventCommand_1 = require("./commands/SubscribeToEventCommand");
const UnsubscribeFromEventCommand_1 = require("./commands/UnsubscribeFromEventCommand");
const UpdateAssessmentTargetCommand_1 = require("./commands/UpdateAssessmentTargetCommand");
/**
 * <fullname>Amazon Inspector</fullname>
 *          <p>Amazon Inspector enables you to analyze the behavior of your AWS resources and to
 *          identify potential security issues. For more information, see <a href="https://docs.aws.amazon.com/inspector/latest/userguide/inspector_introduction.html"> Amazon Inspector User
 *             Guide</a>.</p>
 */
class Inspector extends InspectorClient_1.InspectorClient {
    addAttributesToFindings(args, optionsOrCb, cb) {
        const command = new AddAttributesToFindingsCommand_1.AddAttributesToFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAssessmentTarget(args, optionsOrCb, cb) {
        const command = new CreateAssessmentTargetCommand_1.CreateAssessmentTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAssessmentTemplate(args, optionsOrCb, cb) {
        const command = new CreateAssessmentTemplateCommand_1.CreateAssessmentTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createExclusionsPreview(args, optionsOrCb, cb) {
        const command = new CreateExclusionsPreviewCommand_1.CreateExclusionsPreviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createResourceGroup(args, optionsOrCb, cb) {
        const command = new CreateResourceGroupCommand_1.CreateResourceGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAssessmentRun(args, optionsOrCb, cb) {
        const command = new DeleteAssessmentRunCommand_1.DeleteAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAssessmentTarget(args, optionsOrCb, cb) {
        const command = new DeleteAssessmentTargetCommand_1.DeleteAssessmentTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAssessmentTemplate(args, optionsOrCb, cb) {
        const command = new DeleteAssessmentTemplateCommand_1.DeleteAssessmentTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAssessmentRuns(args, optionsOrCb, cb) {
        const command = new DescribeAssessmentRunsCommand_1.DescribeAssessmentRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAssessmentTargets(args, optionsOrCb, cb) {
        const command = new DescribeAssessmentTargetsCommand_1.DescribeAssessmentTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAssessmentTemplates(args, optionsOrCb, cb) {
        const command = new DescribeAssessmentTemplatesCommand_1.DescribeAssessmentTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCrossAccountAccessRole(args, optionsOrCb, cb) {
        const command = new DescribeCrossAccountAccessRoleCommand_1.DescribeCrossAccountAccessRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExclusions(args, optionsOrCb, cb) {
        const command = new DescribeExclusionsCommand_1.DescribeExclusionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFindings(args, optionsOrCb, cb) {
        const command = new DescribeFindingsCommand_1.DescribeFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeResourceGroups(args, optionsOrCb, cb) {
        const command = new DescribeResourceGroupsCommand_1.DescribeResourceGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeRulesPackages(args, optionsOrCb, cb) {
        const command = new DescribeRulesPackagesCommand_1.DescribeRulesPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getAssessmentReport(args, optionsOrCb, cb) {
        const command = new GetAssessmentReportCommand_1.GetAssessmentReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getExclusionsPreview(args, optionsOrCb, cb) {
        const command = new GetExclusionsPreviewCommand_1.GetExclusionsPreviewCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getTelemetryMetadata(args, optionsOrCb, cb) {
        const command = new GetTelemetryMetadataCommand_1.GetTelemetryMetadataCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssessmentRunAgents(args, optionsOrCb, cb) {
        const command = new ListAssessmentRunAgentsCommand_1.ListAssessmentRunAgentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssessmentRuns(args, optionsOrCb, cb) {
        const command = new ListAssessmentRunsCommand_1.ListAssessmentRunsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssessmentTargets(args, optionsOrCb, cb) {
        const command = new ListAssessmentTargetsCommand_1.ListAssessmentTargetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssessmentTemplates(args, optionsOrCb, cb) {
        const command = new ListAssessmentTemplatesCommand_1.ListAssessmentTemplatesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEventSubscriptions(args, optionsOrCb, cb) {
        const command = new ListEventSubscriptionsCommand_1.ListEventSubscriptionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listExclusions(args, optionsOrCb, cb) {
        const command = new ListExclusionsCommand_1.ListExclusionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFindings(args, optionsOrCb, cb) {
        const command = new ListFindingsCommand_1.ListFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listRulesPackages(args, optionsOrCb, cb) {
        const command = new ListRulesPackagesCommand_1.ListRulesPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTagsForResource(args, optionsOrCb, cb) {
        const command = new ListTagsForResourceCommand_1.ListTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    previewAgents(args, optionsOrCb, cb) {
        const command = new PreviewAgentsCommand_1.PreviewAgentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerCrossAccountAccessRole(args, optionsOrCb, cb) {
        const command = new RegisterCrossAccountAccessRoleCommand_1.RegisterCrossAccountAccessRoleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    removeAttributesFromFindings(args, optionsOrCb, cb) {
        const command = new RemoveAttributesFromFindingsCommand_1.RemoveAttributesFromFindingsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    setTagsForResource(args, optionsOrCb, cb) {
        const command = new SetTagsForResourceCommand_1.SetTagsForResourceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startAssessmentRun(args, optionsOrCb, cb) {
        const command = new StartAssessmentRunCommand_1.StartAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopAssessmentRun(args, optionsOrCb, cb) {
        const command = new StopAssessmentRunCommand_1.StopAssessmentRunCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    subscribeToEvent(args, optionsOrCb, cb) {
        const command = new SubscribeToEventCommand_1.SubscribeToEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    unsubscribeFromEvent(args, optionsOrCb, cb) {
        const command = new UnsubscribeFromEventCommand_1.UnsubscribeFromEventCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAssessmentTarget(args, optionsOrCb, cb) {
        const command = new UpdateAssessmentTargetCommand_1.UpdateAssessmentTargetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.Inspector = Inspector;
//# sourceMappingURL=Inspector.js.map