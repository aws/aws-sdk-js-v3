"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CloudFrontClient_1 = require("./CloudFrontClient");
const CreateCloudFrontOriginAccessIdentityCommand_1 = require("./commands/CreateCloudFrontOriginAccessIdentityCommand");
const CreateDistributionCommand_1 = require("./commands/CreateDistributionCommand");
const CreateDistributionWithTagsCommand_1 = require("./commands/CreateDistributionWithTagsCommand");
const CreateFieldLevelEncryptionConfigCommand_1 = require("./commands/CreateFieldLevelEncryptionConfigCommand");
const CreateFieldLevelEncryptionProfileCommand_1 = require("./commands/CreateFieldLevelEncryptionProfileCommand");
const CreateInvalidationCommand_1 = require("./commands/CreateInvalidationCommand");
const CreatePublicKeyCommand_1 = require("./commands/CreatePublicKeyCommand");
const CreateStreamingDistributionCommand_1 = require("./commands/CreateStreamingDistributionCommand");
const CreateStreamingDistributionWithTagsCommand_1 = require("./commands/CreateStreamingDistributionWithTagsCommand");
const DeleteCloudFrontOriginAccessIdentityCommand_1 = require("./commands/DeleteCloudFrontOriginAccessIdentityCommand");
const DeleteDistributionCommand_1 = require("./commands/DeleteDistributionCommand");
const DeleteFieldLevelEncryptionConfigCommand_1 = require("./commands/DeleteFieldLevelEncryptionConfigCommand");
const DeleteFieldLevelEncryptionProfileCommand_1 = require("./commands/DeleteFieldLevelEncryptionProfileCommand");
const DeletePublicKeyCommand_1 = require("./commands/DeletePublicKeyCommand");
const DeleteStreamingDistributionCommand_1 = require("./commands/DeleteStreamingDistributionCommand");
const GetCloudFrontOriginAccessIdentityCommand_1 = require("./commands/GetCloudFrontOriginAccessIdentityCommand");
const GetCloudFrontOriginAccessIdentityConfigCommand_1 = require("./commands/GetCloudFrontOriginAccessIdentityConfigCommand");
const GetDistributionCommand_1 = require("./commands/GetDistributionCommand");
const GetDistributionConfigCommand_1 = require("./commands/GetDistributionConfigCommand");
const GetFieldLevelEncryptionCommand_1 = require("./commands/GetFieldLevelEncryptionCommand");
const GetFieldLevelEncryptionConfigCommand_1 = require("./commands/GetFieldLevelEncryptionConfigCommand");
const GetFieldLevelEncryptionProfileCommand_1 = require("./commands/GetFieldLevelEncryptionProfileCommand");
const GetFieldLevelEncryptionProfileConfigCommand_1 = require("./commands/GetFieldLevelEncryptionProfileConfigCommand");
const GetInvalidationCommand_1 = require("./commands/GetInvalidationCommand");
const GetPublicKeyCommand_1 = require("./commands/GetPublicKeyCommand");
const GetPublicKeyConfigCommand_1 = require("./commands/GetPublicKeyConfigCommand");
const GetStreamingDistributionCommand_1 = require("./commands/GetStreamingDistributionCommand");
const GetStreamingDistributionConfigCommand_1 = require("./commands/GetStreamingDistributionConfigCommand");
const ListCloudFrontOriginAccessIdentitiesCommand_1 = require("./commands/ListCloudFrontOriginAccessIdentitiesCommand");
const ListDistributionsByWebACLIdCommand_1 = require("./commands/ListDistributionsByWebACLIdCommand");
const ListDistributionsCommand_1 = require("./commands/ListDistributionsCommand");
const ListFieldLevelEncryptionConfigsCommand_1 = require("./commands/ListFieldLevelEncryptionConfigsCommand");
const ListFieldLevelEncryptionProfilesCommand_1 = require("./commands/ListFieldLevelEncryptionProfilesCommand");
const ListInvalidationsCommand_1 = require("./commands/ListInvalidationsCommand");
const ListPublicKeysCommand_1 = require("./commands/ListPublicKeysCommand");
const ListStreamingDistributionsCommand_1 = require("./commands/ListStreamingDistributionsCommand");
const ListTagsForResourceCommand_1 = require("./commands/ListTagsForResourceCommand");
const TagResourceCommand_1 = require("./commands/TagResourceCommand");
const UntagResourceCommand_1 = require("./commands/UntagResourceCommand");
const UpdateCloudFrontOriginAccessIdentityCommand_1 = require("./commands/UpdateCloudFrontOriginAccessIdentityCommand");
const UpdateDistributionCommand_1 = require("./commands/UpdateDistributionCommand");
const UpdateFieldLevelEncryptionConfigCommand_1 = require("./commands/UpdateFieldLevelEncryptionConfigCommand");
const UpdateFieldLevelEncryptionProfileCommand_1 = require("./commands/UpdateFieldLevelEncryptionProfileCommand");
const UpdatePublicKeyCommand_1 = require("./commands/UpdatePublicKeyCommand");
const UpdateStreamingDistributionCommand_1 = require("./commands/UpdateStreamingDistributionCommand");
/**
 * <fullname>Amazon CloudFront</fullname>
 * 		       <p>This is the <i>Amazon CloudFront API Reference</i>. This guide is for developers who need detailed information about
 * 			CloudFront API actions, data types, and errors. For detailed information about CloudFront features, see the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
class CloudFront extends CloudFrontClient_1.CloudFrontClient {
    createCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
        const command = new CreateCloudFrontOriginAccessIdentityCommand_1.CreateCloudFrontOriginAccessIdentityCommand(args);
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
    createDistribution(args, optionsOrCb, cb) {
        const command = new CreateDistributionCommand_1.CreateDistributionCommand(args);
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
    createDistributionWithTags(args, optionsOrCb, cb) {
        const command = new CreateDistributionWithTagsCommand_1.CreateDistributionWithTagsCommand(args);
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
    createFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
        const command = new CreateFieldLevelEncryptionConfigCommand_1.CreateFieldLevelEncryptionConfigCommand(args);
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
    createFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
        const command = new CreateFieldLevelEncryptionProfileCommand_1.CreateFieldLevelEncryptionProfileCommand(args);
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
    createInvalidation(args, optionsOrCb, cb) {
        const command = new CreateInvalidationCommand_1.CreateInvalidationCommand(args);
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
    createPublicKey(args, optionsOrCb, cb) {
        const command = new CreatePublicKeyCommand_1.CreatePublicKeyCommand(args);
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
    createStreamingDistribution(args, optionsOrCb, cb) {
        const command = new CreateStreamingDistributionCommand_1.CreateStreamingDistributionCommand(args);
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
    createStreamingDistributionWithTags(args, optionsOrCb, cb) {
        const command = new CreateStreamingDistributionWithTagsCommand_1.CreateStreamingDistributionWithTagsCommand(args);
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
    deleteCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
        const command = new DeleteCloudFrontOriginAccessIdentityCommand_1.DeleteCloudFrontOriginAccessIdentityCommand(args);
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
    deleteDistribution(args, optionsOrCb, cb) {
        const command = new DeleteDistributionCommand_1.DeleteDistributionCommand(args);
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
    deleteFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
        const command = new DeleteFieldLevelEncryptionConfigCommand_1.DeleteFieldLevelEncryptionConfigCommand(args);
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
    deleteFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
        const command = new DeleteFieldLevelEncryptionProfileCommand_1.DeleteFieldLevelEncryptionProfileCommand(args);
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
    deletePublicKey(args, optionsOrCb, cb) {
        const command = new DeletePublicKeyCommand_1.DeletePublicKeyCommand(args);
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
    deleteStreamingDistribution(args, optionsOrCb, cb) {
        const command = new DeleteStreamingDistributionCommand_1.DeleteStreamingDistributionCommand(args);
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
    getCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
        const command = new GetCloudFrontOriginAccessIdentityCommand_1.GetCloudFrontOriginAccessIdentityCommand(args);
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
    getCloudFrontOriginAccessIdentityConfig(args, optionsOrCb, cb) {
        const command = new GetCloudFrontOriginAccessIdentityConfigCommand_1.GetCloudFrontOriginAccessIdentityConfigCommand(args);
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
    getDistribution(args, optionsOrCb, cb) {
        const command = new GetDistributionCommand_1.GetDistributionCommand(args);
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
    getDistributionConfig(args, optionsOrCb, cb) {
        const command = new GetDistributionConfigCommand_1.GetDistributionConfigCommand(args);
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
    getFieldLevelEncryption(args, optionsOrCb, cb) {
        const command = new GetFieldLevelEncryptionCommand_1.GetFieldLevelEncryptionCommand(args);
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
    getFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
        const command = new GetFieldLevelEncryptionConfigCommand_1.GetFieldLevelEncryptionConfigCommand(args);
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
    getFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
        const command = new GetFieldLevelEncryptionProfileCommand_1.GetFieldLevelEncryptionProfileCommand(args);
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
    getFieldLevelEncryptionProfileConfig(args, optionsOrCb, cb) {
        const command = new GetFieldLevelEncryptionProfileConfigCommand_1.GetFieldLevelEncryptionProfileConfigCommand(args);
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
    getInvalidation(args, optionsOrCb, cb) {
        const command = new GetInvalidationCommand_1.GetInvalidationCommand(args);
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
    getPublicKey(args, optionsOrCb, cb) {
        const command = new GetPublicKeyCommand_1.GetPublicKeyCommand(args);
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
    getPublicKeyConfig(args, optionsOrCb, cb) {
        const command = new GetPublicKeyConfigCommand_1.GetPublicKeyConfigCommand(args);
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
    getStreamingDistribution(args, optionsOrCb, cb) {
        const command = new GetStreamingDistributionCommand_1.GetStreamingDistributionCommand(args);
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
    getStreamingDistributionConfig(args, optionsOrCb, cb) {
        const command = new GetStreamingDistributionConfigCommand_1.GetStreamingDistributionConfigCommand(args);
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
    listCloudFrontOriginAccessIdentities(args, optionsOrCb, cb) {
        const command = new ListCloudFrontOriginAccessIdentitiesCommand_1.ListCloudFrontOriginAccessIdentitiesCommand(args);
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
    listDistributions(args, optionsOrCb, cb) {
        const command = new ListDistributionsCommand_1.ListDistributionsCommand(args);
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
    listDistributionsByWebACLId(args, optionsOrCb, cb) {
        const command = new ListDistributionsByWebACLIdCommand_1.ListDistributionsByWebACLIdCommand(args);
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
    listFieldLevelEncryptionConfigs(args, optionsOrCb, cb) {
        const command = new ListFieldLevelEncryptionConfigsCommand_1.ListFieldLevelEncryptionConfigsCommand(args);
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
    listFieldLevelEncryptionProfiles(args, optionsOrCb, cb) {
        const command = new ListFieldLevelEncryptionProfilesCommand_1.ListFieldLevelEncryptionProfilesCommand(args);
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
    listInvalidations(args, optionsOrCb, cb) {
        const command = new ListInvalidationsCommand_1.ListInvalidationsCommand(args);
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
    listPublicKeys(args, optionsOrCb, cb) {
        const command = new ListPublicKeysCommand_1.ListPublicKeysCommand(args);
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
    listStreamingDistributions(args, optionsOrCb, cb) {
        const command = new ListStreamingDistributionsCommand_1.ListStreamingDistributionsCommand(args);
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
    updateCloudFrontOriginAccessIdentity(args, optionsOrCb, cb) {
        const command = new UpdateCloudFrontOriginAccessIdentityCommand_1.UpdateCloudFrontOriginAccessIdentityCommand(args);
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
    updateDistribution(args, optionsOrCb, cb) {
        const command = new UpdateDistributionCommand_1.UpdateDistributionCommand(args);
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
    updateFieldLevelEncryptionConfig(args, optionsOrCb, cb) {
        const command = new UpdateFieldLevelEncryptionConfigCommand_1.UpdateFieldLevelEncryptionConfigCommand(args);
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
    updateFieldLevelEncryptionProfile(args, optionsOrCb, cb) {
        const command = new UpdateFieldLevelEncryptionProfileCommand_1.UpdateFieldLevelEncryptionProfileCommand(args);
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
    updatePublicKey(args, optionsOrCb, cb) {
        const command = new UpdatePublicKeyCommand_1.UpdatePublicKeyCommand(args);
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
    updateStreamingDistribution(args, optionsOrCb, cb) {
        const command = new UpdateStreamingDistributionCommand_1.UpdateStreamingDistributionCommand(args);
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
exports.CloudFront = CloudFront;
//# sourceMappingURL=CloudFront.js.map