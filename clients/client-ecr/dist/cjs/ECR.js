"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ECRClient_1 = require("./ECRClient");
const BatchCheckLayerAvailabilityCommand_1 = require("./commands/BatchCheckLayerAvailabilityCommand");
const BatchDeleteImageCommand_1 = require("./commands/BatchDeleteImageCommand");
const BatchGetImageCommand_1 = require("./commands/BatchGetImageCommand");
const CompleteLayerUploadCommand_1 = require("./commands/CompleteLayerUploadCommand");
const CreateRepositoryCommand_1 = require("./commands/CreateRepositoryCommand");
const DeleteLifecyclePolicyCommand_1 = require("./commands/DeleteLifecyclePolicyCommand");
const DeleteRepositoryCommand_1 = require("./commands/DeleteRepositoryCommand");
const DeleteRepositoryPolicyCommand_1 = require("./commands/DeleteRepositoryPolicyCommand");
const DescribeImageScanFindingsCommand_1 = require("./commands/DescribeImageScanFindingsCommand");
const DescribeImagesCommand_1 = require("./commands/DescribeImagesCommand");
const DescribeRepositoriesCommand_1 = require("./commands/DescribeRepositoriesCommand");
const GetAuthorizationTokenCommand_1 = require("./commands/GetAuthorizationTokenCommand");
const GetDownloadUrlForLayerCommand_1 = require("./commands/GetDownloadUrlForLayerCommand");
const GetLifecyclePolicyCommand_1 = require("./commands/GetLifecyclePolicyCommand");
const GetLifecyclePolicyPreviewCommand_1 = require("./commands/GetLifecyclePolicyPreviewCommand");
const GetRepositoryPolicyCommand_1 = require("./commands/GetRepositoryPolicyCommand");
const InitiateLayerUploadCommand_1 = require("./commands/InitiateLayerUploadCommand");
const ListImagesCommand_1 = require("./commands/ListImagesCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const PutImageCommand_1 = require("./commands/PutImageCommand");
const PutImageScanningConfigurationCommand_1 = require("./commands/PutImageScanningConfigurationCommand");
const PutImageTagMutabilityCommand_1 = require("./commands/PutImageTagMutabilityCommand");
const PutLifecyclePolicyCommand_1 = require("./commands/PutLifecyclePolicyCommand");
const SetRepositoryPolicyCommand_1 = require("./commands/SetRepositoryPolicyCommand");
const StartImageScanCommand_1 = require("./commands/StartImageScanCommand");
const StartLifecyclePolicyPreviewCommand_1 = require("./commands/StartLifecyclePolicyPreviewCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UploadLayerPartCommand_1 = require("./commands/UploadLayerPartCommand");
/**
 * <fullname>Amazon Elastic Container Registry</fullname>
 *         <p>Amazon Elastic Container Registry (Amazon ECR) is a managed Docker registry service. Customers can use the familiar
 *             Docker CLI to push, pull, and manage images. Amazon ECR provides a secure, scalable, and
 *             reliable registry. Amazon ECR supports private Docker repositories with resource-based
 *             permissions using IAM so that specific users or Amazon EC2 instances can access
 *             repositories and images. Developers can use the Docker CLI to author and manage
 *             images.</p>
 */
class ECR extends ECRClient_1.ECRClient {
    batchCheckLayerAvailability(args, optionsOrCb, cb) {
        const command = new BatchCheckLayerAvailabilityCommand_1.BatchCheckLayerAvailabilityCommand(args);
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
    batchDeleteImage(args, optionsOrCb, cb) {
        const command = new BatchDeleteImageCommand_1.BatchDeleteImageCommand(args);
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
    batchGetImage(args, optionsOrCb, cb) {
        const command = new BatchGetImageCommand_1.BatchGetImageCommand(args);
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
    completeLayerUpload(args, optionsOrCb, cb) {
        const command = new CompleteLayerUploadCommand_1.CompleteLayerUploadCommand(args);
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
    createRepository(args, optionsOrCb, cb) {
        const command = new CreateRepositoryCommand_1.CreateRepositoryCommand(args);
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
    deleteLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new DeleteLifecyclePolicyCommand_1.DeleteLifecyclePolicyCommand(args);
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
    deleteRepository(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryCommand_1.DeleteRepositoryCommand(args);
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
    deleteRepositoryPolicy(args, optionsOrCb, cb) {
        const command = new DeleteRepositoryPolicyCommand_1.DeleteRepositoryPolicyCommand(args);
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
    describeImageScanFindings(args, optionsOrCb, cb) {
        const command = new DescribeImageScanFindingsCommand_1.DescribeImageScanFindingsCommand(args);
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
    describeImages(args, optionsOrCb, cb) {
        const command = new DescribeImagesCommand_1.DescribeImagesCommand(args);
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
    describeRepositories(args, optionsOrCb, cb) {
        const command = new DescribeRepositoriesCommand_1.DescribeRepositoriesCommand(args);
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
    getAuthorizationToken(args, optionsOrCb, cb) {
        const command = new GetAuthorizationTokenCommand_1.GetAuthorizationTokenCommand(args);
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
    getDownloadUrlForLayer(args, optionsOrCb, cb) {
        const command = new GetDownloadUrlForLayerCommand_1.GetDownloadUrlForLayerCommand(args);
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
    getLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new GetLifecyclePolicyCommand_1.GetLifecyclePolicyCommand(args);
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
    getLifecyclePolicyPreview(args, optionsOrCb, cb) {
        const command = new GetLifecyclePolicyPreviewCommand_1.GetLifecyclePolicyPreviewCommand(args);
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
    getRepositoryPolicy(args, optionsOrCb, cb) {
        const command = new GetRepositoryPolicyCommand_1.GetRepositoryPolicyCommand(args);
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
    initiateLayerUpload(args, optionsOrCb, cb) {
        const command = new InitiateLayerUploadCommand_1.InitiateLayerUploadCommand(args);
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
    listImages(args, optionsOrCb, cb) {
        const command = new ListImagesCommand_1.ListImagesCommand(args);
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
    putImage(args, optionsOrCb, cb) {
        const command = new PutImageCommand_1.PutImageCommand(args);
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
    putImageScanningConfiguration(args, optionsOrCb, cb) {
        const command = new PutImageScanningConfigurationCommand_1.PutImageScanningConfigurationCommand(args);
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
    putImageTagMutability(args, optionsOrCb, cb) {
        const command = new PutImageTagMutabilityCommand_1.PutImageTagMutabilityCommand(args);
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
    putLifecyclePolicy(args, optionsOrCb, cb) {
        const command = new PutLifecyclePolicyCommand_1.PutLifecyclePolicyCommand(args);
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
    setRepositoryPolicy(args, optionsOrCb, cb) {
        const command = new SetRepositoryPolicyCommand_1.SetRepositoryPolicyCommand(args);
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
    startImageScan(args, optionsOrCb, cb) {
        const command = new StartImageScanCommand_1.StartImageScanCommand(args);
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
    startLifecyclePolicyPreview(args, optionsOrCb, cb) {
        const command = new StartLifecyclePolicyPreviewCommand_1.StartLifecyclePolicyPreviewCommand(args);
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
    tagResource(args, optionsOrCb, cb) {
        const command = new TagResourceCommand_1.TagResourceCommand(args);
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
    untagResource(args, optionsOrCb, cb) {
        const command = new UntagResourceCommand_1.UntagResourceCommand(args);
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
    uploadLayerPart(args, optionsOrCb, cb) {
        const command = new UploadLayerPartCommand_1.UploadLayerPartCommand(args);
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
exports.ECR = ECR;
//# sourceMappingURL=ECR.js.map