"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FraudDetectorClient_1 = require("./FraudDetectorClient");
const BatchCreateVariableCommand_1 = require("./commands/BatchCreateVariableCommand");
const BatchGetVariableCommand_1 = require("./commands/BatchGetVariableCommand");
const CreateDetectorVersionCommand_1 = require("./commands/CreateDetectorVersionCommand");
const CreateModelVersionCommand_1 = require("./commands/CreateModelVersionCommand");
const CreateRuleCommand_1 = require("./commands/CreateRuleCommand");
const CreateVariableCommand_1 = require("./commands/CreateVariableCommand");
const DeleteDetectorVersionCommand_1 = require("./commands/DeleteDetectorVersionCommand");
const DeleteEventCommand_1 = require("./commands/DeleteEventCommand");
const DescribeDetectorCommand_1 = require("./commands/DescribeDetectorCommand");
const DescribeModelVersionsCommand_1 = require("./commands/DescribeModelVersionsCommand");
const GetDetectorVersionCommand_1 = require("./commands/GetDetectorVersionCommand");
const GetDetectorsCommand_1 = require("./commands/GetDetectorsCommand");
const GetExternalModelsCommand_1 = require("./commands/GetExternalModelsCommand");
const GetModelVersionCommand_1 = require("./commands/GetModelVersionCommand");
const GetModelsCommand_1 = require("./commands/GetModelsCommand");
const GetOutcomesCommand_1 = require("./commands/GetOutcomesCommand");
const GetPredictionCommand_1 = require("./commands/GetPredictionCommand");
const GetRulesCommand_1 = require("./commands/GetRulesCommand");
const GetVariablesCommand_1 = require("./commands/GetVariablesCommand");
const PutDetectorCommand_1 = require("./commands/PutDetectorCommand");
const PutExternalModelCommand_1 = require("./commands/PutExternalModelCommand");
const PutModelCommand_1 = require("./commands/PutModelCommand");
const PutOutcomeCommand_1 = require("./commands/PutOutcomeCommand");
const UpdateDetectorVersionCommand_1 = require("./commands/UpdateDetectorVersionCommand");
const UpdateDetectorVersionMetadataCommand_1 = require("./commands/UpdateDetectorVersionMetadataCommand");
const UpdateDetectorVersionStatusCommand_1 = require("./commands/UpdateDetectorVersionStatusCommand");
const UpdateModelVersionCommand_1 = require("./commands/UpdateModelVersionCommand");
const UpdateRuleMetadataCommand_1 = require("./commands/UpdateRuleMetadataCommand");
const UpdateRuleVersionCommand_1 = require("./commands/UpdateRuleVersionCommand");
const UpdateVariableCommand_1 = require("./commands/UpdateVariableCommand");
/**
 * <p>This is the Amazon Fraud Detector API Reference. This guide is for developers who need
 *             detailed information about Amazon Fraud Detector API actions, data types, and errors. For
 *             more information about Amazon Fraud Detector features, see the <a href="https://docs.aws.amazon.com/frauddetector/latest/ug/">Amazon Fraud Detector User Guide</a>.</p>
 */
class FraudDetector extends FraudDetectorClient_1.FraudDetectorClient {
    batchCreateVariable(args, optionsOrCb, cb) {
        const command = new BatchCreateVariableCommand_1.BatchCreateVariableCommand(args);
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
    batchGetVariable(args, optionsOrCb, cb) {
        const command = new BatchGetVariableCommand_1.BatchGetVariableCommand(args);
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
    createDetectorVersion(args, optionsOrCb, cb) {
        const command = new CreateDetectorVersionCommand_1.CreateDetectorVersionCommand(args);
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
    createModelVersion(args, optionsOrCb, cb) {
        const command = new CreateModelVersionCommand_1.CreateModelVersionCommand(args);
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
    createRule(args, optionsOrCb, cb) {
        const command = new CreateRuleCommand_1.CreateRuleCommand(args);
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
    createVariable(args, optionsOrCb, cb) {
        const command = new CreateVariableCommand_1.CreateVariableCommand(args);
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
    deleteDetectorVersion(args, optionsOrCb, cb) {
        const command = new DeleteDetectorVersionCommand_1.DeleteDetectorVersionCommand(args);
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
    deleteEvent(args, optionsOrCb, cb) {
        const command = new DeleteEventCommand_1.DeleteEventCommand(args);
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
    describeDetector(args, optionsOrCb, cb) {
        const command = new DescribeDetectorCommand_1.DescribeDetectorCommand(args);
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
    describeModelVersions(args, optionsOrCb, cb) {
        const command = new DescribeModelVersionsCommand_1.DescribeModelVersionsCommand(args);
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
    getDetectorVersion(args, optionsOrCb, cb) {
        const command = new GetDetectorVersionCommand_1.GetDetectorVersionCommand(args);
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
    getDetectors(args, optionsOrCb, cb) {
        const command = new GetDetectorsCommand_1.GetDetectorsCommand(args);
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
    getExternalModels(args, optionsOrCb, cb) {
        const command = new GetExternalModelsCommand_1.GetExternalModelsCommand(args);
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
    getModelVersion(args, optionsOrCb, cb) {
        const command = new GetModelVersionCommand_1.GetModelVersionCommand(args);
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
    getModels(args, optionsOrCb, cb) {
        const command = new GetModelsCommand_1.GetModelsCommand(args);
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
    getOutcomes(args, optionsOrCb, cb) {
        const command = new GetOutcomesCommand_1.GetOutcomesCommand(args);
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
    getPrediction(args, optionsOrCb, cb) {
        const command = new GetPredictionCommand_1.GetPredictionCommand(args);
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
    getRules(args, optionsOrCb, cb) {
        const command = new GetRulesCommand_1.GetRulesCommand(args);
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
    getVariables(args, optionsOrCb, cb) {
        const command = new GetVariablesCommand_1.GetVariablesCommand(args);
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
    putDetector(args, optionsOrCb, cb) {
        const command = new PutDetectorCommand_1.PutDetectorCommand(args);
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
    putExternalModel(args, optionsOrCb, cb) {
        const command = new PutExternalModelCommand_1.PutExternalModelCommand(args);
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
    putModel(args, optionsOrCb, cb) {
        const command = new PutModelCommand_1.PutModelCommand(args);
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
    putOutcome(args, optionsOrCb, cb) {
        const command = new PutOutcomeCommand_1.PutOutcomeCommand(args);
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
    updateDetectorVersion(args, optionsOrCb, cb) {
        const command = new UpdateDetectorVersionCommand_1.UpdateDetectorVersionCommand(args);
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
    updateDetectorVersionMetadata(args, optionsOrCb, cb) {
        const command = new UpdateDetectorVersionMetadataCommand_1.UpdateDetectorVersionMetadataCommand(args);
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
    updateDetectorVersionStatus(args, optionsOrCb, cb) {
        const command = new UpdateDetectorVersionStatusCommand_1.UpdateDetectorVersionStatusCommand(args);
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
    updateModelVersion(args, optionsOrCb, cb) {
        const command = new UpdateModelVersionCommand_1.UpdateModelVersionCommand(args);
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
    updateRuleMetadata(args, optionsOrCb, cb) {
        const command = new UpdateRuleMetadataCommand_1.UpdateRuleMetadataCommand(args);
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
    updateRuleVersion(args, optionsOrCb, cb) {
        const command = new UpdateRuleVersionCommand_1.UpdateRuleVersionCommand(args);
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
    updateVariable(args, optionsOrCb, cb) {
        const command = new UpdateVariableCommand_1.UpdateVariableCommand(args);
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
exports.FraudDetector = FraudDetector;
//# sourceMappingURL=FraudDetector.js.map