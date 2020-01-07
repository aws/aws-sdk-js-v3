"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MachineLearningClient_1 = require("./MachineLearningClient");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const CreateBatchPredictionCommand_1 = require("./commands/CreateBatchPredictionCommand");
const CreateDataSourceFromRDSCommand_1 = require("./commands/CreateDataSourceFromRDSCommand");
const CreateDataSourceFromRedshiftCommand_1 = require("./commands/CreateDataSourceFromRedshiftCommand");
const CreateDataSourceFromS3Command_1 = require("./commands/CreateDataSourceFromS3Command");
const CreateEvaluationCommand_1 = require("./commands/CreateEvaluationCommand");
const CreateMLModelCommand_1 = require("./commands/CreateMLModelCommand");
const CreateRealtimeEndpointCommand_1 = require("./commands/CreateRealtimeEndpointCommand");
const DeleteBatchPredictionCommand_1 = require("./commands/DeleteBatchPredictionCommand");
const DeleteDataSourceCommand_1 = require("./commands/DeleteDataSourceCommand");
const DeleteEvaluationCommand_1 = require("./commands/DeleteEvaluationCommand");
const DeleteMLModelCommand_1 = require("./commands/DeleteMLModelCommand");
const DeleteRealtimeEndpointCommand_1 = require("./commands/DeleteRealtimeEndpointCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DescribeBatchPredictionsCommand_1 = require("./commands/DescribeBatchPredictionsCommand");
const DescribeDataSourcesCommand_1 = require("./commands/DescribeDataSourcesCommand");
const DescribeEvaluationsCommand_1 = require("./commands/DescribeEvaluationsCommand");
const DescribeMLModelsCommand_1 = require("./commands/DescribeMLModelsCommand");
const DescribeTagsCommand_1 = require("./commands/DescribeTagsCommand");
const GetBatchPredictionCommand_1 = require("./commands/GetBatchPredictionCommand");
const GetDataSourceCommand_1 = require("./commands/GetDataSourceCommand");
const GetEvaluationCommand_1 = require("./commands/GetEvaluationCommand");
const GetMLModelCommand_1 = require("./commands/GetMLModelCommand");
const PredictCommand_1 = require("./commands/PredictCommand");
const UpdateBatchPredictionCommand_1 = require("./commands/UpdateBatchPredictionCommand");
const UpdateDataSourceCommand_1 = require("./commands/UpdateDataSourceCommand");
const UpdateEvaluationCommand_1 = require("./commands/UpdateEvaluationCommand");
const UpdateMLModelCommand_1 = require("./commands/UpdateMLModelCommand");
/**
 * <p>Definition of the public APIs
 *             exposed by Amazon Machine Learning</p>
 */
class MachineLearning extends MachineLearningClient_1.MachineLearningClient {
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
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
    createBatchPrediction(args, optionsOrCb, cb) {
        const command = new CreateBatchPredictionCommand_1.CreateBatchPredictionCommand(args);
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
    createDataSourceFromRDS(args, optionsOrCb, cb) {
        const command = new CreateDataSourceFromRDSCommand_1.CreateDataSourceFromRDSCommand(args);
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
    createDataSourceFromRedshift(args, optionsOrCb, cb) {
        const command = new CreateDataSourceFromRedshiftCommand_1.CreateDataSourceFromRedshiftCommand(args);
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
    createDataSourceFromS3(args, optionsOrCb, cb) {
        const command = new CreateDataSourceFromS3Command_1.CreateDataSourceFromS3Command(args);
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
    createEvaluation(args, optionsOrCb, cb) {
        const command = new CreateEvaluationCommand_1.CreateEvaluationCommand(args);
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
    createMLModel(args, optionsOrCb, cb) {
        const command = new CreateMLModelCommand_1.CreateMLModelCommand(args);
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
    createRealtimeEndpoint(args, optionsOrCb, cb) {
        const command = new CreateRealtimeEndpointCommand_1.CreateRealtimeEndpointCommand(args);
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
    deleteBatchPrediction(args, optionsOrCb, cb) {
        const command = new DeleteBatchPredictionCommand_1.DeleteBatchPredictionCommand(args);
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
    deleteDataSource(args, optionsOrCb, cb) {
        const command = new DeleteDataSourceCommand_1.DeleteDataSourceCommand(args);
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
    deleteEvaluation(args, optionsOrCb, cb) {
        const command = new DeleteEvaluationCommand_1.DeleteEvaluationCommand(args);
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
    deleteMLModel(args, optionsOrCb, cb) {
        const command = new DeleteMLModelCommand_1.DeleteMLModelCommand(args);
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
    deleteRealtimeEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteRealtimeEndpointCommand_1.DeleteRealtimeEndpointCommand(args);
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
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
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
    describeBatchPredictions(args, optionsOrCb, cb) {
        const command = new DescribeBatchPredictionsCommand_1.DescribeBatchPredictionsCommand(args);
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
    describeDataSources(args, optionsOrCb, cb) {
        const command = new DescribeDataSourcesCommand_1.DescribeDataSourcesCommand(args);
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
    describeEvaluations(args, optionsOrCb, cb) {
        const command = new DescribeEvaluationsCommand_1.DescribeEvaluationsCommand(args);
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
    describeMLModels(args, optionsOrCb, cb) {
        const command = new DescribeMLModelsCommand_1.DescribeMLModelsCommand(args);
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
    describeTags(args, optionsOrCb, cb) {
        const command = new DescribeTagsCommand_1.DescribeTagsCommand(args);
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
    getBatchPrediction(args, optionsOrCb, cb) {
        const command = new GetBatchPredictionCommand_1.GetBatchPredictionCommand(args);
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
    getDataSource(args, optionsOrCb, cb) {
        const command = new GetDataSourceCommand_1.GetDataSourceCommand(args);
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
    getEvaluation(args, optionsOrCb, cb) {
        const command = new GetEvaluationCommand_1.GetEvaluationCommand(args);
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
    getMLModel(args, optionsOrCb, cb) {
        const command = new GetMLModelCommand_1.GetMLModelCommand(args);
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
    predict(args, optionsOrCb, cb) {
        const command = new PredictCommand_1.PredictCommand(args);
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
    updateBatchPrediction(args, optionsOrCb, cb) {
        const command = new UpdateBatchPredictionCommand_1.UpdateBatchPredictionCommand(args);
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
    updateDataSource(args, optionsOrCb, cb) {
        const command = new UpdateDataSourceCommand_1.UpdateDataSourceCommand(args);
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
    updateEvaluation(args, optionsOrCb, cb) {
        const command = new UpdateEvaluationCommand_1.UpdateEvaluationCommand(args);
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
    updateMLModel(args, optionsOrCb, cb) {
        const command = new UpdateMLModelCommand_1.UpdateMLModelCommand(args);
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
exports.MachineLearning = MachineLearning;
//# sourceMappingURL=MachineLearning.js.map