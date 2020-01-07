"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MarketplaceCommerceAnalyticsClient_1 = require("./MarketplaceCommerceAnalyticsClient");
const GenerateDataSetCommand_1 = require("./commands/GenerateDataSetCommand");
const StartSupportDataExportCommand_1 = require("./commands/StartSupportDataExportCommand");
/**
 * Provides AWS Marketplace business intelligence data on-demand.
 */
class MarketplaceCommerceAnalytics extends MarketplaceCommerceAnalyticsClient_1.MarketplaceCommerceAnalyticsClient {
    generateDataSet(args, optionsOrCb, cb) {
        const command = new GenerateDataSetCommand_1.GenerateDataSetCommand(args);
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
    startSupportDataExport(args, optionsOrCb, cb) {
        const command = new StartSupportDataExportCommand_1.StartSupportDataExportCommand(args);
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
exports.MarketplaceCommerceAnalytics = MarketplaceCommerceAnalytics;
//# sourceMappingURL=MarketplaceCommerceAnalytics.js.map