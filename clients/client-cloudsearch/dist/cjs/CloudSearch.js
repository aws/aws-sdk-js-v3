"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CloudSearchClient_1 = require("./CloudSearchClient");
const BuildSuggestersCommand_1 = require("./commands/BuildSuggestersCommand");
const CreateDomainCommand_1 = require("./commands/CreateDomainCommand");
const DefineAnalysisSchemeCommand_1 = require("./commands/DefineAnalysisSchemeCommand");
const DefineExpressionCommand_1 = require("./commands/DefineExpressionCommand");
const DefineIndexFieldCommand_1 = require("./commands/DefineIndexFieldCommand");
const DefineSuggesterCommand_1 = require("./commands/DefineSuggesterCommand");
const DeleteAnalysisSchemeCommand_1 = require("./commands/DeleteAnalysisSchemeCommand");
const DeleteDomainCommand_1 = require("./commands/DeleteDomainCommand");
const DeleteExpressionCommand_1 = require("./commands/DeleteExpressionCommand");
const DeleteIndexFieldCommand_1 = require("./commands/DeleteIndexFieldCommand");
const DeleteSuggesterCommand_1 = require("./commands/DeleteSuggesterCommand");
const DescribeAnalysisSchemesCommand_1 = require("./commands/DescribeAnalysisSchemesCommand");
const DescribeAvailabilityOptionsCommand_1 = require("./commands/DescribeAvailabilityOptionsCommand");
const DescribeDomainEndpointOptionsCommand_1 = require("./commands/DescribeDomainEndpointOptionsCommand");
const DescribeDomainsCommand_1 = require("./commands/DescribeDomainsCommand");
const DescribeExpressionsCommand_1 = require("./commands/DescribeExpressionsCommand");
const DescribeIndexFieldsCommand_1 = require("./commands/DescribeIndexFieldsCommand");
const DescribeScalingParametersCommand_1 = require("./commands/DescribeScalingParametersCommand");
const DescribeServiceAccessPoliciesCommand_1 = require("./commands/DescribeServiceAccessPoliciesCommand");
const DescribeSuggestersCommand_1 = require("./commands/DescribeSuggestersCommand");
const IndexDocumentsCommand_1 = require("./commands/IndexDocumentsCommand");
const ListDomainNamesCommand_1 = require("./commands/ListDomainNamesCommand");
const UpdateAvailabilityOptionsCommand_1 = require("./commands/UpdateAvailabilityOptionsCommand");
const UpdateDomainEndpointOptionsCommand_1 = require("./commands/UpdateDomainEndpointOptionsCommand");
const UpdateScalingParametersCommand_1 = require("./commands/UpdateScalingParametersCommand");
const UpdateServiceAccessPoliciesCommand_1 = require("./commands/UpdateServiceAccessPoliciesCommand");
/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
class CloudSearch extends CloudSearchClient_1.CloudSearchClient {
    buildSuggesters(args, optionsOrCb, cb) {
        const command = new BuildSuggestersCommand_1.BuildSuggestersCommand(args);
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
    createDomain(args, optionsOrCb, cb) {
        const command = new CreateDomainCommand_1.CreateDomainCommand(args);
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
    defineAnalysisScheme(args, optionsOrCb, cb) {
        const command = new DefineAnalysisSchemeCommand_1.DefineAnalysisSchemeCommand(args);
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
    defineExpression(args, optionsOrCb, cb) {
        const command = new DefineExpressionCommand_1.DefineExpressionCommand(args);
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
    defineIndexField(args, optionsOrCb, cb) {
        const command = new DefineIndexFieldCommand_1.DefineIndexFieldCommand(args);
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
    defineSuggester(args, optionsOrCb, cb) {
        const command = new DefineSuggesterCommand_1.DefineSuggesterCommand(args);
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
    deleteAnalysisScheme(args, optionsOrCb, cb) {
        const command = new DeleteAnalysisSchemeCommand_1.DeleteAnalysisSchemeCommand(args);
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
    deleteDomain(args, optionsOrCb, cb) {
        const command = new DeleteDomainCommand_1.DeleteDomainCommand(args);
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
    deleteExpression(args, optionsOrCb, cb) {
        const command = new DeleteExpressionCommand_1.DeleteExpressionCommand(args);
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
    deleteIndexField(args, optionsOrCb, cb) {
        const command = new DeleteIndexFieldCommand_1.DeleteIndexFieldCommand(args);
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
    deleteSuggester(args, optionsOrCb, cb) {
        const command = new DeleteSuggesterCommand_1.DeleteSuggesterCommand(args);
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
    describeAnalysisSchemes(args, optionsOrCb, cb) {
        const command = new DescribeAnalysisSchemesCommand_1.DescribeAnalysisSchemesCommand(args);
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
    describeAvailabilityOptions(args, optionsOrCb, cb) {
        const command = new DescribeAvailabilityOptionsCommand_1.DescribeAvailabilityOptionsCommand(args);
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
    describeDomainEndpointOptions(args, optionsOrCb, cb) {
        const command = new DescribeDomainEndpointOptionsCommand_1.DescribeDomainEndpointOptionsCommand(args);
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
    describeDomains(args, optionsOrCb, cb) {
        const command = new DescribeDomainsCommand_1.DescribeDomainsCommand(args);
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
    describeExpressions(args, optionsOrCb, cb) {
        const command = new DescribeExpressionsCommand_1.DescribeExpressionsCommand(args);
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
    describeIndexFields(args, optionsOrCb, cb) {
        const command = new DescribeIndexFieldsCommand_1.DescribeIndexFieldsCommand(args);
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
    describeScalingParameters(args, optionsOrCb, cb) {
        const command = new DescribeScalingParametersCommand_1.DescribeScalingParametersCommand(args);
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
    describeServiceAccessPolicies(args, optionsOrCb, cb) {
        const command = new DescribeServiceAccessPoliciesCommand_1.DescribeServiceAccessPoliciesCommand(args);
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
    describeSuggesters(args, optionsOrCb, cb) {
        const command = new DescribeSuggestersCommand_1.DescribeSuggestersCommand(args);
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
    indexDocuments(args, optionsOrCb, cb) {
        const command = new IndexDocumentsCommand_1.IndexDocumentsCommand(args);
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
    listDomainNames(args, optionsOrCb, cb) {
        const command = new ListDomainNamesCommand_1.ListDomainNamesCommand(args);
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
    updateAvailabilityOptions(args, optionsOrCb, cb) {
        const command = new UpdateAvailabilityOptionsCommand_1.UpdateAvailabilityOptionsCommand(args);
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
    updateDomainEndpointOptions(args, optionsOrCb, cb) {
        const command = new UpdateDomainEndpointOptionsCommand_1.UpdateDomainEndpointOptionsCommand(args);
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
    updateScalingParameters(args, optionsOrCb, cb) {
        const command = new UpdateScalingParametersCommand_1.UpdateScalingParametersCommand(args);
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
    updateServiceAccessPolicies(args, optionsOrCb, cb) {
        const command = new UpdateServiceAccessPoliciesCommand_1.UpdateServiceAccessPoliciesCommand(args);
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
exports.CloudSearch = CloudSearch;
//# sourceMappingURL=CloudSearch.js.map