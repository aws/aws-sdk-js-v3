"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CostExplorerClient_1 = require("./CostExplorerClient");
const CreateCostCategoryDefinitionCommand_1 = require("./commands/CreateCostCategoryDefinitionCommand");
const DeleteCostCategoryDefinitionCommand_1 = require("./commands/DeleteCostCategoryDefinitionCommand");
const DescribeCostCategoryDefinitionCommand_1 = require("./commands/DescribeCostCategoryDefinitionCommand");
const GetCostAndUsageCommand_1 = require("./commands/GetCostAndUsageCommand");
const GetCostAndUsageWithResourcesCommand_1 = require("./commands/GetCostAndUsageWithResourcesCommand");
const GetCostForecastCommand_1 = require("./commands/GetCostForecastCommand");
const GetDimensionValuesCommand_1 = require("./commands/GetDimensionValuesCommand");
const GetReservationCoverageCommand_1 = require("./commands/GetReservationCoverageCommand");
const GetReservationPurchaseRecommendationCommand_1 = require("./commands/GetReservationPurchaseRecommendationCommand");
const GetReservationUtilizationCommand_1 = require("./commands/GetReservationUtilizationCommand");
const GetRightsizingRecommendationCommand_1 = require("./commands/GetRightsizingRecommendationCommand");
const GetSavingsPlansCoverageCommand_1 = require("./commands/GetSavingsPlansCoverageCommand");
const GetSavingsPlansPurchaseRecommendationCommand_1 = require("./commands/GetSavingsPlansPurchaseRecommendationCommand");
const GetSavingsPlansUtilizationCommand_1 = require("./commands/GetSavingsPlansUtilizationCommand");
const GetSavingsPlansUtilizationDetailsCommand_1 = require("./commands/GetSavingsPlansUtilizationDetailsCommand");
const GetTagsCommand_1 = require("./commands/GetTagsCommand");
const GetUsageForecastCommand_1 = require("./commands/GetUsageForecastCommand");
const ListCostCategoryDefinitionsCommand_1 = require("./commands/ListCostCategoryDefinitionsCommand");
const UpdateCostCategoryDefinitionCommand_1 = require("./commands/UpdateCostCategoryDefinitionCommand");
/**
 * <p>The Cost Explorer API enables you to programmatically query your cost and usage data. You can query for aggregated data
 * 			such as total monthly costs or total daily usage. You can also query for granular data, such as the number of
 * 			daily write operations for Amazon DynamoDB database tables in your production environment. </p>
 * 		       <p>Service Endpoint</p>
 * 		       <p>The Cost Explorer API provides the following endpoint:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>
 *                   <code>https://ce.us-east-1.amazonaws.com</code>
 *                </p>
 * 			         </li>
 *          </ul>
 * 		       <p>For information about costs associated with the Cost Explorer API, see
 * 			<a href="https://aws.amazon.com/aws-cost-management/pricing/">AWS Cost Management Pricing</a>.</p>
 */
class CostExplorer extends CostExplorerClient_1.CostExplorerClient {
    createCostCategoryDefinition(args, optionsOrCb, cb) {
        const command = new CreateCostCategoryDefinitionCommand_1.CreateCostCategoryDefinitionCommand(args);
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
    deleteCostCategoryDefinition(args, optionsOrCb, cb) {
        const command = new DeleteCostCategoryDefinitionCommand_1.DeleteCostCategoryDefinitionCommand(args);
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
    describeCostCategoryDefinition(args, optionsOrCb, cb) {
        const command = new DescribeCostCategoryDefinitionCommand_1.DescribeCostCategoryDefinitionCommand(args);
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
    getCostAndUsage(args, optionsOrCb, cb) {
        const command = new GetCostAndUsageCommand_1.GetCostAndUsageCommand(args);
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
    getCostAndUsageWithResources(args, optionsOrCb, cb) {
        const command = new GetCostAndUsageWithResourcesCommand_1.GetCostAndUsageWithResourcesCommand(args);
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
    getCostForecast(args, optionsOrCb, cb) {
        const command = new GetCostForecastCommand_1.GetCostForecastCommand(args);
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
    getDimensionValues(args, optionsOrCb, cb) {
        const command = new GetDimensionValuesCommand_1.GetDimensionValuesCommand(args);
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
    getReservationCoverage(args, optionsOrCb, cb) {
        const command = new GetReservationCoverageCommand_1.GetReservationCoverageCommand(args);
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
    getReservationPurchaseRecommendation(args, optionsOrCb, cb) {
        const command = new GetReservationPurchaseRecommendationCommand_1.GetReservationPurchaseRecommendationCommand(args);
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
    getReservationUtilization(args, optionsOrCb, cb) {
        const command = new GetReservationUtilizationCommand_1.GetReservationUtilizationCommand(args);
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
    getRightsizingRecommendation(args, optionsOrCb, cb) {
        const command = new GetRightsizingRecommendationCommand_1.GetRightsizingRecommendationCommand(args);
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
    getSavingsPlansCoverage(args, optionsOrCb, cb) {
        const command = new GetSavingsPlansCoverageCommand_1.GetSavingsPlansCoverageCommand(args);
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
    getSavingsPlansPurchaseRecommendation(args, optionsOrCb, cb) {
        const command = new GetSavingsPlansPurchaseRecommendationCommand_1.GetSavingsPlansPurchaseRecommendationCommand(args);
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
    getSavingsPlansUtilization(args, optionsOrCb, cb) {
        const command = new GetSavingsPlansUtilizationCommand_1.GetSavingsPlansUtilizationCommand(args);
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
    getSavingsPlansUtilizationDetails(args, optionsOrCb, cb) {
        const command = new GetSavingsPlansUtilizationDetailsCommand_1.GetSavingsPlansUtilizationDetailsCommand(args);
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
    getTags(args, optionsOrCb, cb) {
        const command = new GetTagsCommand_1.GetTagsCommand(args);
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
    getUsageForecast(args, optionsOrCb, cb) {
        const command = new GetUsageForecastCommand_1.GetUsageForecastCommand(args);
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
    listCostCategoryDefinitions(args, optionsOrCb, cb) {
        const command = new ListCostCategoryDefinitionsCommand_1.ListCostCategoryDefinitionsCommand(args);
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
    updateCostCategoryDefinition(args, optionsOrCb, cb) {
        const command = new UpdateCostCategoryDefinitionCommand_1.UpdateCostCategoryDefinitionCommand(args);
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
exports.CostExplorer = CostExplorer;
//# sourceMappingURL=CostExplorer.js.map