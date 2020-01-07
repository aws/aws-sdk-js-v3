import { CloudSearchClient } from "./CloudSearchClient";
import { BuildSuggestersCommandInput, BuildSuggestersCommandOutput } from "./commands/BuildSuggestersCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { DefineAnalysisSchemeCommandInput, DefineAnalysisSchemeCommandOutput } from "./commands/DefineAnalysisSchemeCommand";
import { DefineExpressionCommandInput, DefineExpressionCommandOutput } from "./commands/DefineExpressionCommand";
import { DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput } from "./commands/DefineIndexFieldCommand";
import { DefineSuggesterCommandInput, DefineSuggesterCommandOutput } from "./commands/DefineSuggesterCommand";
import { DeleteAnalysisSchemeCommandInput, DeleteAnalysisSchemeCommandOutput } from "./commands/DeleteAnalysisSchemeCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteExpressionCommandInput, DeleteExpressionCommandOutput } from "./commands/DeleteExpressionCommand";
import { DeleteIndexFieldCommandInput, DeleteIndexFieldCommandOutput } from "./commands/DeleteIndexFieldCommand";
import { DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput } from "./commands/DeleteSuggesterCommand";
import { DescribeAnalysisSchemesCommandInput, DescribeAnalysisSchemesCommandOutput } from "./commands/DescribeAnalysisSchemesCommand";
import { DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput } from "./commands/DescribeAvailabilityOptionsCommand";
import { DescribeDomainEndpointOptionsCommandInput, DescribeDomainEndpointOptionsCommandOutput } from "./commands/DescribeDomainEndpointOptionsCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "./commands/DescribeDomainsCommand";
import { DescribeExpressionsCommandInput, DescribeExpressionsCommandOutput } from "./commands/DescribeExpressionsCommand";
import { DescribeIndexFieldsCommandInput, DescribeIndexFieldsCommandOutput } from "./commands/DescribeIndexFieldsCommand";
import { DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput } from "./commands/DescribeScalingParametersCommand";
import { DescribeServiceAccessPoliciesCommandInput, DescribeServiceAccessPoliciesCommandOutput } from "./commands/DescribeServiceAccessPoliciesCommand";
import { DescribeSuggestersCommandInput, DescribeSuggestersCommandOutput } from "./commands/DescribeSuggestersCommand";
import { IndexDocumentsCommandInput, IndexDocumentsCommandOutput } from "./commands/IndexDocumentsCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import { UpdateAvailabilityOptionsCommandInput, UpdateAvailabilityOptionsCommandOutput } from "./commands/UpdateAvailabilityOptionsCommand";
import { UpdateDomainEndpointOptionsCommandInput, UpdateDomainEndpointOptionsCommandOutput } from "./commands/UpdateDomainEndpointOptionsCommand";
import { UpdateScalingParametersCommandInput, UpdateScalingParametersCommandOutput } from "./commands/UpdateScalingParametersCommand";
import { UpdateServiceAccessPoliciesCommandInput, UpdateServiceAccessPoliciesCommandOutput } from "./commands/UpdateServiceAccessPoliciesCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
export declare class CloudSearch extends CloudSearchClient {
    /**
     * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    buildSuggesters(args: BuildSuggestersCommandInput, options?: __HttpHandlerOptions): Promise<BuildSuggestersCommandOutput>;
    buildSuggesters(args: BuildSuggestersCommandInput, cb: (err: any, data?: BuildSuggestersCommandOutput) => void): void;
    buildSuggesters(args: BuildSuggestersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BuildSuggestersCommandOutput) => void): void;
    /**
     * <p>Creates a new search domain. For more information,
     *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    defineAnalysisScheme(args: DefineAnalysisSchemeCommandInput, options?: __HttpHandlerOptions): Promise<DefineAnalysisSchemeCommandOutput>;
    defineAnalysisScheme(args: DefineAnalysisSchemeCommandInput, cb: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void): void;
    defineAnalysisScheme(args: DefineAnalysisSchemeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void): void;
    /**
     * <p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones.  If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    defineExpression(args: DefineExpressionCommandInput, options?: __HttpHandlerOptions): Promise<DefineExpressionCommandOutput>;
    defineExpression(args: DefineExpressionCommandInput, cb: (err: any, data?: DefineExpressionCommandOutput) => void): void;
    defineExpression(args: DefineExpressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DefineExpressionCommandOutput) => void): void;
    /**
     * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
     */
    defineIndexField(args: DefineIndexFieldCommandInput, options?: __HttpHandlerOptions): Promise<DefineIndexFieldCommandOutput>;
    defineIndexField(args: DefineIndexFieldCommandInput, cb: (err: any, data?: DefineIndexFieldCommandOutput) => void): void;
    defineIndexField(args: DefineIndexFieldCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DefineIndexFieldCommandOutput) => void): void;
    /**
     * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    defineSuggester(args: DefineSuggesterCommandInput, options?: __HttpHandlerOptions): Promise<DefineSuggesterCommandOutput>;
    defineSuggester(args: DefineSuggesterCommandInput, cb: (err: any, data?: DefineSuggesterCommandOutput) => void): void;
    defineSuggester(args: DefineSuggesterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DefineSuggesterCommandOutput) => void): void;
    /**
     * <p>Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
     */
    deleteAnalysisScheme(args: DeleteAnalysisSchemeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAnalysisSchemeCommandOutput>;
    deleteAnalysisScheme(args: DeleteAnalysisSchemeCommandInput, cb: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void): void;
    deleteAnalysisScheme(args: DeleteAnalysisSchemeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void): void;
    /**
     * <p>Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information,
     *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search  Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    deleteExpression(args: DeleteExpressionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExpressionCommandOutput>;
    deleteExpression(args: DeleteExpressionCommandInput, cb: (err: any, data?: DeleteExpressionCommandOutput) => void): void;
    deleteExpression(args: DeleteExpressionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteExpressionCommandOutput) => void): void;
    /**
     * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    deleteIndexField(args: DeleteIndexFieldCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexFieldCommandOutput>;
    deleteIndexField(args: DeleteIndexFieldCommandInput, cb: (err: any, data?: DeleteIndexFieldCommandOutput) => void): void;
    deleteIndexField(args: DeleteIndexFieldCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIndexFieldCommandOutput) => void): void;
    /**
     * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    deleteSuggester(args: DeleteSuggesterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSuggesterCommandOutput>;
    deleteSuggester(args: DeleteSuggesterCommandInput, cb: (err: any, data?: DeleteSuggesterCommandOutput) => void): void;
    deleteSuggester(args: DeleteSuggesterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSuggesterCommandOutput) => void): void;
    /**
     * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name.  By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeAnalysisSchemes(args: DescribeAnalysisSchemesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAnalysisSchemesCommandOutput>;
    describeAnalysisSchemes(args: DescribeAnalysisSchemesCommandInput, cb: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void): void;
    describeAnalysisSchemes(args: DescribeAnalysisSchemesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void): void;
    /**
     * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeAvailabilityOptions(args: DescribeAvailabilityOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAvailabilityOptionsCommandOutput>;
    describeAvailabilityOptions(args: DescribeAvailabilityOptionsCommandInput, cb: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void): void;
    describeAvailabilityOptions(args: DescribeAvailabilityOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void): void;
    /**
     * <p>Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeDomainEndpointOptions(args: DescribeDomainEndpointOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainEndpointOptionsCommandOutput>;
    describeDomainEndpointOptions(args: DescribeDomainEndpointOptionsCommandInput, cb: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void): void;
    describeDomainEndpointOptions(args: DescribeDomainEndpointOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void): void;
    /**
     * <p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
     *       all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;q.parser=structured&amp;size=0</code>. For more information,
     *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeDomains(args: DescribeDomainsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainsCommandOutput>;
    describeDomains(args: DescribeDomainsCommandInput, cb: (err: any, data?: DescribeDomainsCommandOutput) => void): void;
    describeDomains(args: DescribeDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainsCommandOutput) => void): void;
    /**
     * <p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeExpressions(args: DescribeExpressionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExpressionsCommandOutput>;
    describeExpressions(args: DescribeExpressionsCommandInput, cb: (err: any, data?: DescribeExpressionsCommandOutput) => void): void;
    describeExpressions(args: DescribeExpressionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExpressionsCommandOutput) => void): void;
    /**
     * <p>Gets information about the index fields configured for the search domain.
     *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
     *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeIndexFields(args: DescribeIndexFieldsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIndexFieldsCommandOutput>;
    describeIndexFields(args: DescribeIndexFieldsCommandInput, cb: (err: any, data?: DescribeIndexFieldsCommandOutput) => void): void;
    describeIndexFields(args: DescribeIndexFieldsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIndexFieldsCommandOutput) => void): void;
    /**
     * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeScalingParameters(args: DescribeScalingParametersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScalingParametersCommandOutput>;
    describeScalingParameters(args: DescribeScalingParametersCommandInput, cb: (err: any, data?: DescribeScalingParametersCommandOutput) => void): void;
    describeScalingParameters(args: DescribeScalingParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScalingParametersCommandOutput) => void): void;
    /**
     * <p>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
     *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeServiceAccessPolicies(args: DescribeServiceAccessPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeServiceAccessPoliciesCommandOutput>;
    describeServiceAccessPolicies(args: DescribeServiceAccessPoliciesCommandInput, cb: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void): void;
    describeServiceAccessPolicies(args: DescribeServiceAccessPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void): void;
    /**
     * <p>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries.  Can be limited to specific suggesters by name.  By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    describeSuggesters(args: DescribeSuggestersCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSuggestersCommandOutput>;
    describeSuggesters(args: DescribeSuggestersCommandInput, cb: (err: any, data?: DescribeSuggestersCommandOutput) => void): void;
    describeSuggesters(args: DescribeSuggestersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSuggestersCommandOutput) => void): void;
    /**
     * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is  <code>RequiresIndexDocuments</code>.</p>
     */
    indexDocuments(args: IndexDocumentsCommandInput, options?: __HttpHandlerOptions): Promise<IndexDocumentsCommandOutput>;
    indexDocuments(args: IndexDocumentsCommandInput, cb: (err: any, data?: IndexDocumentsCommandOutput) => void): void;
    indexDocuments(args: IndexDocumentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: IndexDocumentsCommandOutput) => void): void;
    /**
     * <p>Lists all search domains owned by an account.</p>
     */
    listDomainNames(args: ListDomainNamesCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainNamesCommandOutput>;
    listDomainNames(args: ListDomainNamesCommandInput, cb: (err: any, data?: ListDomainNamesCommandOutput) => void): void;
    listDomainNames(args: ListDomainNamesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainNamesCommandOutput) => void): void;
    /**
     * <p>Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    updateAvailabilityOptions(args: UpdateAvailabilityOptionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAvailabilityOptionsCommandOutput>;
    updateAvailabilityOptions(args: UpdateAvailabilityOptionsCommandInput, cb: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void): void;
    updateAvailabilityOptions(args: UpdateAvailabilityOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void): void;
    /**
     * <p>Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
     */
    updateDomainEndpointOptions(args: UpdateDomainEndpointOptionsCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainEndpointOptionsCommandOutput>;
    updateDomainEndpointOptions(args: UpdateDomainEndpointOptionsCommandInput, cb: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void): void;
    updateDomainEndpointOptions(args: UpdateDomainEndpointOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void): void;
    /**
     * <p>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
     */
    updateScalingParameters(args: UpdateScalingParametersCommandInput, options?: __HttpHandlerOptions): Promise<UpdateScalingParametersCommandOutput>;
    updateScalingParameters(args: UpdateScalingParametersCommandInput, cb: (err: any, data?: UpdateScalingParametersCommandOutput) => void): void;
    updateScalingParameters(args: UpdateScalingParametersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateScalingParametersCommandOutput) => void): void;
    /**
     * <p>Configures the access rules that control access to the domain's document and search endpoints.
     *       For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">
     *         Configuring Access for an Amazon CloudSearch Domain</a>.</p>
     */
    updateServiceAccessPolicies(args: UpdateServiceAccessPoliciesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateServiceAccessPoliciesCommandOutput>;
    updateServiceAccessPolicies(args: UpdateServiceAccessPoliciesCommandInput, cb: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void): void;
    updateServiceAccessPolicies(args: UpdateServiceAccessPoliciesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void): void;
}
