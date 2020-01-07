"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TranslateClient_1 = require("./TranslateClient");
const DeleteTerminologyCommand_1 = require("./commands/DeleteTerminologyCommand");
const DescribeTextTranslationJobCommand_1 = require("./commands/DescribeTextTranslationJobCommand");
const GetTerminologyCommand_1 = require("./commands/GetTerminologyCommand");
const ImportTerminologyCommand_1 = require("./commands/ImportTerminologyCommand");
const ListTerminologiesCommand_1 = require("./commands/ListTerminologiesCommand");
const ListTextTranslationJobsCommand_1 = require("./commands/ListTextTranslationJobsCommand");
const StartTextTranslationJobCommand_1 = require("./commands/StartTextTranslationJobCommand");
const StopTextTranslationJobCommand_1 = require("./commands/StopTextTranslationJobCommand");
const TranslateTextCommand_1 = require("./commands/TranslateTextCommand");
/**
 * <p>Provides translation between one source language and another of the same set of
 *       languages.</p>
 */
class Translate extends TranslateClient_1.TranslateClient {
    deleteTerminology(args, optionsOrCb, cb) {
        const command = new DeleteTerminologyCommand_1.DeleteTerminologyCommand(args);
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
    describeTextTranslationJob(args, optionsOrCb, cb) {
        const command = new DescribeTextTranslationJobCommand_1.DescribeTextTranslationJobCommand(args);
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
    getTerminology(args, optionsOrCb, cb) {
        const command = new GetTerminologyCommand_1.GetTerminologyCommand(args);
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
    importTerminology(args, optionsOrCb, cb) {
        const command = new ImportTerminologyCommand_1.ImportTerminologyCommand(args);
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
    listTerminologies(args, optionsOrCb, cb) {
        const command = new ListTerminologiesCommand_1.ListTerminologiesCommand(args);
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
    listTextTranslationJobs(args, optionsOrCb, cb) {
        const command = new ListTextTranslationJobsCommand_1.ListTextTranslationJobsCommand(args);
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
    startTextTranslationJob(args, optionsOrCb, cb) {
        const command = new StartTextTranslationJobCommand_1.StartTextTranslationJobCommand(args);
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
    stopTextTranslationJob(args, optionsOrCb, cb) {
        const command = new StopTextTranslationJobCommand_1.StopTextTranslationJobCommand(args);
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
    translateText(args, optionsOrCb, cb) {
        const command = new TranslateTextCommand_1.TranslateTextCommand(args);
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
exports.Translate = Translate;
//# sourceMappingURL=Translate.js.map