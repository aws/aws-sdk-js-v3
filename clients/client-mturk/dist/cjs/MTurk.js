"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MTurkClient_1 = require("./MTurkClient");
const AcceptQualificationRequestCommand_1 = require("./commands/AcceptQualificationRequestCommand");
const ApproveAssignmentCommand_1 = require("./commands/ApproveAssignmentCommand");
const AssociateQualificationWithWorkerCommand_1 = require("./commands/AssociateQualificationWithWorkerCommand");
const CreateAdditionalAssignmentsForHITCommand_1 = require("./commands/CreateAdditionalAssignmentsForHITCommand");
const CreateHITCommand_1 = require("./commands/CreateHITCommand");
const CreateHITTypeCommand_1 = require("./commands/CreateHITTypeCommand");
const CreateHITWithHITTypeCommand_1 = require("./commands/CreateHITWithHITTypeCommand");
const CreateQualificationTypeCommand_1 = require("./commands/CreateQualificationTypeCommand");
const CreateWorkerBlockCommand_1 = require("./commands/CreateWorkerBlockCommand");
const DeleteHITCommand_1 = require("./commands/DeleteHITCommand");
const DeleteQualificationTypeCommand_1 = require("./commands/DeleteQualificationTypeCommand");
const DeleteWorkerBlockCommand_1 = require("./commands/DeleteWorkerBlockCommand");
const DisassociateQualificationFromWorkerCommand_1 = require("./commands/DisassociateQualificationFromWorkerCommand");
const GetAccountBalanceCommand_1 = require("./commands/GetAccountBalanceCommand");
const GetAssignmentCommand_1 = require("./commands/GetAssignmentCommand");
const GetFileUploadURLCommand_1 = require("./commands/GetFileUploadURLCommand");
const GetHITCommand_1 = require("./commands/GetHITCommand");
const GetQualificationScoreCommand_1 = require("./commands/GetQualificationScoreCommand");
const GetQualificationTypeCommand_1 = require("./commands/GetQualificationTypeCommand");
const ListAssignmentsForHITCommand_1 = require("./commands/ListAssignmentsForHITCommand");
const ListBonusPaymentsCommand_1 = require("./commands/ListBonusPaymentsCommand");
const ListHITsCommand_1 = require("./commands/ListHITsCommand");
const ListHITsForQualificationTypeCommand_1 = require("./commands/ListHITsForQualificationTypeCommand");
const ListQualificationRequestsCommand_1 = require("./commands/ListQualificationRequestsCommand");
const ListQualificationTypesCommand_1 = require("./commands/ListQualificationTypesCommand");
const ListReviewPolicyResultsForHITCommand_1 = require("./commands/ListReviewPolicyResultsForHITCommand");
const ListReviewableHITsCommand_1 = require("./commands/ListReviewableHITsCommand");
const ListWorkerBlocksCommand_1 = require("./commands/ListWorkerBlocksCommand");
const ListWorkersWithQualificationTypeCommand_1 = require("./commands/ListWorkersWithQualificationTypeCommand");
const NotifyWorkersCommand_1 = require("./commands/NotifyWorkersCommand");
const RejectAssignmentCommand_1 = require("./commands/RejectAssignmentCommand");
const RejectQualificationRequestCommand_1 = require("./commands/RejectQualificationRequestCommand");
const SendBonusCommand_1 = require("./commands/SendBonusCommand");
const SendTestEventNotificationCommand_1 = require("./commands/SendTestEventNotificationCommand");
const UpdateExpirationForHITCommand_1 = require("./commands/UpdateExpirationForHITCommand");
const UpdateHITReviewStatusCommand_1 = require("./commands/UpdateHITReviewStatusCommand");
const UpdateHITTypeOfHITCommand_1 = require("./commands/UpdateHITTypeOfHITCommand");
const UpdateNotificationSettingsCommand_1 = require("./commands/UpdateNotificationSettingsCommand");
const UpdateQualificationTypeCommand_1 = require("./commands/UpdateQualificationTypeCommand");
/**
 * <fullname>Amazon Mechanical Turk API Reference</fullname>
 */
class MTurk extends MTurkClient_1.MTurkClient {
    acceptQualificationRequest(args, optionsOrCb, cb) {
        const command = new AcceptQualificationRequestCommand_1.AcceptQualificationRequestCommand(args);
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
    approveAssignment(args, optionsOrCb, cb) {
        const command = new ApproveAssignmentCommand_1.ApproveAssignmentCommand(args);
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
    associateQualificationWithWorker(args, optionsOrCb, cb) {
        const command = new AssociateQualificationWithWorkerCommand_1.AssociateQualificationWithWorkerCommand(args);
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
    createAdditionalAssignmentsForHIT(args, optionsOrCb, cb) {
        const command = new CreateAdditionalAssignmentsForHITCommand_1.CreateAdditionalAssignmentsForHITCommand(args);
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
    createHIT(args, optionsOrCb, cb) {
        const command = new CreateHITCommand_1.CreateHITCommand(args);
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
    createHITType(args, optionsOrCb, cb) {
        const command = new CreateHITTypeCommand_1.CreateHITTypeCommand(args);
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
    createHITWithHITType(args, optionsOrCb, cb) {
        const command = new CreateHITWithHITTypeCommand_1.CreateHITWithHITTypeCommand(args);
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
    createQualificationType(args, optionsOrCb, cb) {
        const command = new CreateQualificationTypeCommand_1.CreateQualificationTypeCommand(args);
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
    createWorkerBlock(args, optionsOrCb, cb) {
        const command = new CreateWorkerBlockCommand_1.CreateWorkerBlockCommand(args);
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
    deleteHIT(args, optionsOrCb, cb) {
        const command = new DeleteHITCommand_1.DeleteHITCommand(args);
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
    deleteQualificationType(args, optionsOrCb, cb) {
        const command = new DeleteQualificationTypeCommand_1.DeleteQualificationTypeCommand(args);
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
    deleteWorkerBlock(args, optionsOrCb, cb) {
        const command = new DeleteWorkerBlockCommand_1.DeleteWorkerBlockCommand(args);
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
    disassociateQualificationFromWorker(args, optionsOrCb, cb) {
        const command = new DisassociateQualificationFromWorkerCommand_1.DisassociateQualificationFromWorkerCommand(args);
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
    getAccountBalance(args, optionsOrCb, cb) {
        const command = new GetAccountBalanceCommand_1.GetAccountBalanceCommand(args);
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
    getAssignment(args, optionsOrCb, cb) {
        const command = new GetAssignmentCommand_1.GetAssignmentCommand(args);
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
    getFileUploadURL(args, optionsOrCb, cb) {
        const command = new GetFileUploadURLCommand_1.GetFileUploadURLCommand(args);
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
    getHIT(args, optionsOrCb, cb) {
        const command = new GetHITCommand_1.GetHITCommand(args);
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
    getQualificationScore(args, optionsOrCb, cb) {
        const command = new GetQualificationScoreCommand_1.GetQualificationScoreCommand(args);
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
    getQualificationType(args, optionsOrCb, cb) {
        const command = new GetQualificationTypeCommand_1.GetQualificationTypeCommand(args);
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
    listAssignmentsForHIT(args, optionsOrCb, cb) {
        const command = new ListAssignmentsForHITCommand_1.ListAssignmentsForHITCommand(args);
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
    listBonusPayments(args, optionsOrCb, cb) {
        const command = new ListBonusPaymentsCommand_1.ListBonusPaymentsCommand(args);
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
    listHITs(args, optionsOrCb, cb) {
        const command = new ListHITsCommand_1.ListHITsCommand(args);
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
    listHITsForQualificationType(args, optionsOrCb, cb) {
        const command = new ListHITsForQualificationTypeCommand_1.ListHITsForQualificationTypeCommand(args);
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
    listQualificationRequests(args, optionsOrCb, cb) {
        const command = new ListQualificationRequestsCommand_1.ListQualificationRequestsCommand(args);
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
    listQualificationTypes(args, optionsOrCb, cb) {
        const command = new ListQualificationTypesCommand_1.ListQualificationTypesCommand(args);
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
    listReviewPolicyResultsForHIT(args, optionsOrCb, cb) {
        const command = new ListReviewPolicyResultsForHITCommand_1.ListReviewPolicyResultsForHITCommand(args);
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
    listReviewableHITs(args, optionsOrCb, cb) {
        const command = new ListReviewableHITsCommand_1.ListReviewableHITsCommand(args);
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
    listWorkerBlocks(args, optionsOrCb, cb) {
        const command = new ListWorkerBlocksCommand_1.ListWorkerBlocksCommand(args);
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
    listWorkersWithQualificationType(args, optionsOrCb, cb) {
        const command = new ListWorkersWithQualificationTypeCommand_1.ListWorkersWithQualificationTypeCommand(args);
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
    notifyWorkers(args, optionsOrCb, cb) {
        const command = new NotifyWorkersCommand_1.NotifyWorkersCommand(args);
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
    rejectAssignment(args, optionsOrCb, cb) {
        const command = new RejectAssignmentCommand_1.RejectAssignmentCommand(args);
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
    rejectQualificationRequest(args, optionsOrCb, cb) {
        const command = new RejectQualificationRequestCommand_1.RejectQualificationRequestCommand(args);
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
    sendBonus(args, optionsOrCb, cb) {
        const command = new SendBonusCommand_1.SendBonusCommand(args);
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
    sendTestEventNotification(args, optionsOrCb, cb) {
        const command = new SendTestEventNotificationCommand_1.SendTestEventNotificationCommand(args);
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
    updateExpirationForHIT(args, optionsOrCb, cb) {
        const command = new UpdateExpirationForHITCommand_1.UpdateExpirationForHITCommand(args);
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
    updateHITReviewStatus(args, optionsOrCb, cb) {
        const command = new UpdateHITReviewStatusCommand_1.UpdateHITReviewStatusCommand(args);
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
    updateHITTypeOfHIT(args, optionsOrCb, cb) {
        const command = new UpdateHITTypeOfHITCommand_1.UpdateHITTypeOfHITCommand(args);
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
    updateNotificationSettings(args, optionsOrCb, cb) {
        const command = new UpdateNotificationSettingsCommand_1.UpdateNotificationSettingsCommand(args);
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
    updateQualificationType(args, optionsOrCb, cb) {
        const command = new UpdateQualificationTypeCommand_1.UpdateQualificationTypeCommand(args);
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
exports.MTurk = MTurk;
//# sourceMappingURL=MTurk.js.map