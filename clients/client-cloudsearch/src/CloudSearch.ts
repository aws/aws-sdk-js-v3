// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CloudSearchClient } from "./CloudSearchClient";
import {
  type BuildSuggestersCommandInput,
  type BuildSuggestersCommandOutput,
  BuildSuggestersCommand,
} from "./commands/BuildSuggestersCommand";
import {
  type CreateDomainCommandInput,
  type CreateDomainCommandOutput,
  CreateDomainCommand,
} from "./commands/CreateDomainCommand";
import {
  type DefineAnalysisSchemeCommandInput,
  type DefineAnalysisSchemeCommandOutput,
  DefineAnalysisSchemeCommand,
} from "./commands/DefineAnalysisSchemeCommand";
import {
  type DefineExpressionCommandInput,
  type DefineExpressionCommandOutput,
  DefineExpressionCommand,
} from "./commands/DefineExpressionCommand";
import {
  type DefineIndexFieldCommandInput,
  type DefineIndexFieldCommandOutput,
  DefineIndexFieldCommand,
} from "./commands/DefineIndexFieldCommand";
import {
  type DefineSuggesterCommandInput,
  type DefineSuggesterCommandOutput,
  DefineSuggesterCommand,
} from "./commands/DefineSuggesterCommand";
import {
  type DeleteAnalysisSchemeCommandInput,
  type DeleteAnalysisSchemeCommandOutput,
  DeleteAnalysisSchemeCommand,
} from "./commands/DeleteAnalysisSchemeCommand";
import {
  type DeleteDomainCommandInput,
  type DeleteDomainCommandOutput,
  DeleteDomainCommand,
} from "./commands/DeleteDomainCommand";
import {
  type DeleteExpressionCommandInput,
  type DeleteExpressionCommandOutput,
  DeleteExpressionCommand,
} from "./commands/DeleteExpressionCommand";
import {
  type DeleteIndexFieldCommandInput,
  type DeleteIndexFieldCommandOutput,
  DeleteIndexFieldCommand,
} from "./commands/DeleteIndexFieldCommand";
import {
  type DeleteSuggesterCommandInput,
  type DeleteSuggesterCommandOutput,
  DeleteSuggesterCommand,
} from "./commands/DeleteSuggesterCommand";
import {
  type DescribeAnalysisSchemesCommandInput,
  type DescribeAnalysisSchemesCommandOutput,
  DescribeAnalysisSchemesCommand,
} from "./commands/DescribeAnalysisSchemesCommand";
import {
  type DescribeAvailabilityOptionsCommandInput,
  type DescribeAvailabilityOptionsCommandOutput,
  DescribeAvailabilityOptionsCommand,
} from "./commands/DescribeAvailabilityOptionsCommand";
import {
  type DescribeDomainEndpointOptionsCommandInput,
  type DescribeDomainEndpointOptionsCommandOutput,
  DescribeDomainEndpointOptionsCommand,
} from "./commands/DescribeDomainEndpointOptionsCommand";
import {
  type DescribeDomainsCommandInput,
  type DescribeDomainsCommandOutput,
  DescribeDomainsCommand,
} from "./commands/DescribeDomainsCommand";
import {
  type DescribeExpressionsCommandInput,
  type DescribeExpressionsCommandOutput,
  DescribeExpressionsCommand,
} from "./commands/DescribeExpressionsCommand";
import {
  type DescribeIndexFieldsCommandInput,
  type DescribeIndexFieldsCommandOutput,
  DescribeIndexFieldsCommand,
} from "./commands/DescribeIndexFieldsCommand";
import {
  type DescribeScalingParametersCommandInput,
  type DescribeScalingParametersCommandOutput,
  DescribeScalingParametersCommand,
} from "./commands/DescribeScalingParametersCommand";
import {
  type DescribeServiceAccessPoliciesCommandInput,
  type DescribeServiceAccessPoliciesCommandOutput,
  DescribeServiceAccessPoliciesCommand,
} from "./commands/DescribeServiceAccessPoliciesCommand";
import {
  type DescribeSuggestersCommandInput,
  type DescribeSuggestersCommandOutput,
  DescribeSuggestersCommand,
} from "./commands/DescribeSuggestersCommand";
import {
  type IndexDocumentsCommandInput,
  type IndexDocumentsCommandOutput,
  IndexDocumentsCommand,
} from "./commands/IndexDocumentsCommand";
import {
  type ListDomainNamesCommandInput,
  type ListDomainNamesCommandOutput,
  ListDomainNamesCommand,
} from "./commands/ListDomainNamesCommand";
import {
  type UpdateAvailabilityOptionsCommandInput,
  type UpdateAvailabilityOptionsCommandOutput,
  UpdateAvailabilityOptionsCommand,
} from "./commands/UpdateAvailabilityOptionsCommand";
import {
  type UpdateDomainEndpointOptionsCommandInput,
  type UpdateDomainEndpointOptionsCommandOutput,
  UpdateDomainEndpointOptionsCommand,
} from "./commands/UpdateDomainEndpointOptionsCommand";
import {
  type UpdateScalingParametersCommandInput,
  type UpdateScalingParametersCommandOutput,
  UpdateScalingParametersCommand,
} from "./commands/UpdateScalingParametersCommand";
import {
  type UpdateServiceAccessPoliciesCommandInput,
  type UpdateServiceAccessPoliciesCommandOutput,
  UpdateServiceAccessPoliciesCommand,
} from "./commands/UpdateServiceAccessPoliciesCommand";

const commands = {
  BuildSuggestersCommand,
  CreateDomainCommand,
  DefineAnalysisSchemeCommand,
  DefineExpressionCommand,
  DefineIndexFieldCommand,
  DefineSuggesterCommand,
  DeleteAnalysisSchemeCommand,
  DeleteDomainCommand,
  DeleteExpressionCommand,
  DeleteIndexFieldCommand,
  DeleteSuggesterCommand,
  DescribeAnalysisSchemesCommand,
  DescribeAvailabilityOptionsCommand,
  DescribeDomainEndpointOptionsCommand,
  DescribeDomainsCommand,
  DescribeExpressionsCommand,
  DescribeIndexFieldsCommand,
  DescribeScalingParametersCommand,
  DescribeServiceAccessPoliciesCommand,
  DescribeSuggestersCommand,
  IndexDocumentsCommand,
  ListDomainNamesCommand,
  UpdateAvailabilityOptionsCommand,
  UpdateDomainEndpointOptionsCommand,
  UpdateScalingParametersCommand,
  UpdateServiceAccessPoliciesCommand,
};

export interface CloudSearch {
  /**
   * @see {@link BuildSuggestersCommand}
   */
  buildSuggesters(
    args: BuildSuggestersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BuildSuggestersCommandOutput>;
  buildSuggesters(
    args: BuildSuggestersCommandInput,
    cb: (err: any, data?: BuildSuggestersCommandOutput) => void
  ): void;
  buildSuggesters(
    args: BuildSuggestersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BuildSuggestersCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDomainCommand}
   */
  createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  createDomain(
    args: CreateDomainCommandInput,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DefineAnalysisSchemeCommand}
   */
  defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineAnalysisSchemeCommandOutput>;
  defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    cb: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void
  ): void;
  defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DefineExpressionCommand}
   */
  defineExpression(
    args: DefineExpressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineExpressionCommandOutput>;
  defineExpression(
    args: DefineExpressionCommandInput,
    cb: (err: any, data?: DefineExpressionCommandOutput) => void
  ): void;
  defineExpression(
    args: DefineExpressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineExpressionCommandOutput) => void
  ): void;

  /**
   * @see {@link DefineIndexFieldCommand}
   */
  defineIndexField(
    args: DefineIndexFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineIndexFieldCommandOutput>;
  defineIndexField(
    args: DefineIndexFieldCommandInput,
    cb: (err: any, data?: DefineIndexFieldCommandOutput) => void
  ): void;
  defineIndexField(
    args: DefineIndexFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineIndexFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link DefineSuggesterCommand}
   */
  defineSuggester(
    args: DefineSuggesterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineSuggesterCommandOutput>;
  defineSuggester(
    args: DefineSuggesterCommandInput,
    cb: (err: any, data?: DefineSuggesterCommandOutput) => void
  ): void;
  defineSuggester(
    args: DefineSuggesterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineSuggesterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAnalysisSchemeCommand}
   */
  deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalysisSchemeCommandOutput>;
  deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    cb: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void
  ): void;
  deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDomainCommand}
   */
  deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  deleteDomain(
    args: DeleteDomainCommandInput,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExpressionCommand}
   */
  deleteExpression(
    args: DeleteExpressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExpressionCommandOutput>;
  deleteExpression(
    args: DeleteExpressionCommandInput,
    cb: (err: any, data?: DeleteExpressionCommandOutput) => void
  ): void;
  deleteExpression(
    args: DeleteExpressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExpressionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIndexFieldCommand}
   */
  deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexFieldCommandOutput>;
  deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    cb: (err: any, data?: DeleteIndexFieldCommandOutput) => void
  ): void;
  deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexFieldCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSuggesterCommand}
   */
  deleteSuggester(
    args: DeleteSuggesterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSuggesterCommandOutput>;
  deleteSuggester(
    args: DeleteSuggesterCommandInput,
    cb: (err: any, data?: DeleteSuggesterCommandOutput) => void
  ): void;
  deleteSuggester(
    args: DeleteSuggesterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSuggesterCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAnalysisSchemesCommand}
   */
  describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisSchemesCommandOutput>;
  describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    cb: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void
  ): void;
  describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAvailabilityOptionsCommand}
   */
  describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailabilityOptionsCommandOutput>;
  describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    cb: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void
  ): void;
  describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainEndpointOptionsCommand}
   */
  describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainEndpointOptionsCommandOutput>;
  describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    cb: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void
  ): void;
  describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDomainsCommand}
   */
  describeDomains(): Promise<DescribeDomainsCommandOutput>;
  describeDomains(
    args: DescribeDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainsCommandOutput>;
  describeDomains(
    args: DescribeDomainsCommandInput,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;
  describeDomains(
    args: DescribeDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExpressionsCommand}
   */
  describeExpressions(
    args: DescribeExpressionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExpressionsCommandOutput>;
  describeExpressions(
    args: DescribeExpressionsCommandInput,
    cb: (err: any, data?: DescribeExpressionsCommandOutput) => void
  ): void;
  describeExpressions(
    args: DescribeExpressionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExpressionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIndexFieldsCommand}
   */
  describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIndexFieldsCommandOutput>;
  describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    cb: (err: any, data?: DescribeIndexFieldsCommandOutput) => void
  ): void;
  describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexFieldsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScalingParametersCommand}
   */
  describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingParametersCommandOutput>;
  describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    cb: (err: any, data?: DescribeScalingParametersCommandOutput) => void
  ): void;
  describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeServiceAccessPoliciesCommand}
   */
  describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceAccessPoliciesCommandOutput>;
  describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    cb: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void
  ): void;
  describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSuggestersCommand}
   */
  describeSuggesters(
    args: DescribeSuggestersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSuggestersCommandOutput>;
  describeSuggesters(
    args: DescribeSuggestersCommandInput,
    cb: (err: any, data?: DescribeSuggestersCommandOutput) => void
  ): void;
  describeSuggesters(
    args: DescribeSuggestersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSuggestersCommandOutput) => void
  ): void;

  /**
   * @see {@link IndexDocumentsCommand}
   */
  indexDocuments(
    args: IndexDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IndexDocumentsCommandOutput>;
  indexDocuments(
    args: IndexDocumentsCommandInput,
    cb: (err: any, data?: IndexDocumentsCommandOutput) => void
  ): void;
  indexDocuments(
    args: IndexDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IndexDocumentsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDomainNamesCommand}
   */
  listDomainNames(): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainNamesCommandOutput>;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  listDomainNames(
    args: ListDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAvailabilityOptionsCommand}
   */
  updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAvailabilityOptionsCommandOutput>;
  updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    cb: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void
  ): void;
  updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDomainEndpointOptionsCommand}
   */
  updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainEndpointOptionsCommandOutput>;
  updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    cb: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void
  ): void;
  updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateScalingParametersCommand}
   */
  updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScalingParametersCommandOutput>;
  updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    cb: (err: any, data?: UpdateScalingParametersCommandOutput) => void
  ): void;
  updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScalingParametersCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateServiceAccessPoliciesCommand}
   */
  updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceAccessPoliciesCommandOutput>;
  updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    cb: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void
  ): void;
  updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 * @public
 */
export class CloudSearch extends CloudSearchClient implements CloudSearch {}
createAggregatedClient(commands, CloudSearch);
