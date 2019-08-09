import { CloudSearchClient } from "./CloudSearchClient";
import { BaseException } from "./types/BaseException";
import { BuildSuggestersInput } from "./types/BuildSuggestersInput";
import { BuildSuggestersOutput } from "./types/BuildSuggestersOutput";
import { CreateDomainInput } from "./types/CreateDomainInput";
import { CreateDomainOutput } from "./types/CreateDomainOutput";
import { DefineAnalysisSchemeInput } from "./types/DefineAnalysisSchemeInput";
import { DefineAnalysisSchemeOutput } from "./types/DefineAnalysisSchemeOutput";
import { DefineExpressionInput } from "./types/DefineExpressionInput";
import { DefineExpressionOutput } from "./types/DefineExpressionOutput";
import { DefineIndexFieldInput } from "./types/DefineIndexFieldInput";
import { DefineIndexFieldOutput } from "./types/DefineIndexFieldOutput";
import { DefineSuggesterInput } from "./types/DefineSuggesterInput";
import { DefineSuggesterOutput } from "./types/DefineSuggesterOutput";
import { DeleteAnalysisSchemeInput } from "./types/DeleteAnalysisSchemeInput";
import { DeleteAnalysisSchemeOutput } from "./types/DeleteAnalysisSchemeOutput";
import { DeleteDomainInput } from "./types/DeleteDomainInput";
import { DeleteDomainOutput } from "./types/DeleteDomainOutput";
import { DeleteExpressionInput } from "./types/DeleteExpressionInput";
import { DeleteExpressionOutput } from "./types/DeleteExpressionOutput";
import { DeleteIndexFieldInput } from "./types/DeleteIndexFieldInput";
import { DeleteIndexFieldOutput } from "./types/DeleteIndexFieldOutput";
import { DeleteSuggesterInput } from "./types/DeleteSuggesterInput";
import { DeleteSuggesterOutput } from "./types/DeleteSuggesterOutput";
import { DescribeAnalysisSchemesInput } from "./types/DescribeAnalysisSchemesInput";
import { DescribeAnalysisSchemesOutput } from "./types/DescribeAnalysisSchemesOutput";
import { DescribeAvailabilityOptionsInput } from "./types/DescribeAvailabilityOptionsInput";
import { DescribeAvailabilityOptionsOutput } from "./types/DescribeAvailabilityOptionsOutput";
import { DescribeDomainsInput } from "./types/DescribeDomainsInput";
import { DescribeDomainsOutput } from "./types/DescribeDomainsOutput";
import { DescribeExpressionsInput } from "./types/DescribeExpressionsInput";
import { DescribeExpressionsOutput } from "./types/DescribeExpressionsOutput";
import { DescribeIndexFieldsInput } from "./types/DescribeIndexFieldsInput";
import { DescribeIndexFieldsOutput } from "./types/DescribeIndexFieldsOutput";
import { DescribeScalingParametersInput } from "./types/DescribeScalingParametersInput";
import { DescribeScalingParametersOutput } from "./types/DescribeScalingParametersOutput";
import { DescribeServiceAccessPoliciesInput } from "./types/DescribeServiceAccessPoliciesInput";
import { DescribeServiceAccessPoliciesOutput } from "./types/DescribeServiceAccessPoliciesOutput";
import { DescribeSuggestersInput } from "./types/DescribeSuggestersInput";
import { DescribeSuggestersOutput } from "./types/DescribeSuggestersOutput";
import { DisabledOperationException } from "./types/DisabledOperationException";
import { IndexDocumentsInput } from "./types/IndexDocumentsInput";
import { IndexDocumentsOutput } from "./types/IndexDocumentsOutput";
import { InternalException } from "./types/InternalException";
import { InvalidTypeException } from "./types/InvalidTypeException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListDomainNamesInput } from "./types/ListDomainNamesInput";
import { ListDomainNamesOutput } from "./types/ListDomainNamesOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { UpdateAvailabilityOptionsInput } from "./types/UpdateAvailabilityOptionsInput";
import { UpdateAvailabilityOptionsOutput } from "./types/UpdateAvailabilityOptionsOutput";
import { UpdateScalingParametersInput } from "./types/UpdateScalingParametersInput";
import { UpdateScalingParametersOutput } from "./types/UpdateScalingParametersOutput";
import { UpdateServiceAccessPoliciesInput } from "./types/UpdateServiceAccessPoliciesInput";
import { UpdateServiceAccessPoliciesOutput } from "./types/UpdateServiceAccessPoliciesOutput";
import { BuildSuggestersCommand } from "./commands/BuildSuggestersCommand";
import { CreateDomainCommand } from "./commands/CreateDomainCommand";
import { DefineAnalysisSchemeCommand } from "./commands/DefineAnalysisSchemeCommand";
import { DefineExpressionCommand } from "./commands/DefineExpressionCommand";
import { DefineIndexFieldCommand } from "./commands/DefineIndexFieldCommand";
import { DefineSuggesterCommand } from "./commands/DefineSuggesterCommand";
import { DeleteAnalysisSchemeCommand } from "./commands/DeleteAnalysisSchemeCommand";
import { DeleteDomainCommand } from "./commands/DeleteDomainCommand";
import { DeleteExpressionCommand } from "./commands/DeleteExpressionCommand";
import { DeleteIndexFieldCommand } from "./commands/DeleteIndexFieldCommand";
import { DeleteSuggesterCommand } from "./commands/DeleteSuggesterCommand";
import { DescribeAnalysisSchemesCommand } from "./commands/DescribeAnalysisSchemesCommand";
import { DescribeAvailabilityOptionsCommand } from "./commands/DescribeAvailabilityOptionsCommand";
import { DescribeDomainsCommand } from "./commands/DescribeDomainsCommand";
import { DescribeExpressionsCommand } from "./commands/DescribeExpressionsCommand";
import { DescribeIndexFieldsCommand } from "./commands/DescribeIndexFieldsCommand";
import { DescribeScalingParametersCommand } from "./commands/DescribeScalingParametersCommand";
import { DescribeServiceAccessPoliciesCommand } from "./commands/DescribeServiceAccessPoliciesCommand";
import { DescribeSuggestersCommand } from "./commands/DescribeSuggestersCommand";
import { IndexDocumentsCommand } from "./commands/IndexDocumentsCommand";
import { ListDomainNamesCommand } from "./commands/ListDomainNamesCommand";
import { UpdateAvailabilityOptionsCommand } from "./commands/UpdateAvailabilityOptionsCommand";
import { UpdateScalingParametersCommand } from "./commands/UpdateScalingParametersCommand";
import { UpdateServiceAccessPoliciesCommand } from "./commands/UpdateServiceAccessPoliciesCommand";

export class CloudSearch extends CloudSearchClient {
  /**
   * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public buildSuggesters(
    args: BuildSuggestersInput
  ): Promise<BuildSuggestersOutput>;
  public buildSuggesters(
    args: BuildSuggestersInput,
    cb: (err: any, data?: BuildSuggestersOutput) => void
  ): void;
  public buildSuggesters(
    args: BuildSuggestersInput,
    cb?: (err: any, data?: BuildSuggestersOutput) => void
  ): Promise<BuildSuggestersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BuildSuggestersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDomain(args: CreateDomainInput): Promise<CreateDomainOutput>;
  public createDomain(
    args: CreateDomainInput,
    cb: (err: any, data?: CreateDomainOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainInput,
    cb?: (err: any, data?: CreateDomainOutput) => void
  ): Promise<CreateDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeInput
  ): Promise<DefineAnalysisSchemeOutput>;
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeInput,
    cb: (err: any, data?: DefineAnalysisSchemeOutput) => void
  ): void;
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeInput,
    cb?: (err: any, data?: DefineAnalysisSchemeOutput) => void
  ): Promise<DefineAnalysisSchemeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DefineAnalysisSchemeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public defineExpression(
    args: DefineExpressionInput
  ): Promise<DefineExpressionOutput>;
  public defineExpression(
    args: DefineExpressionInput,
    cb: (err: any, data?: DefineExpressionOutput) => void
  ): void;
  public defineExpression(
    args: DefineExpressionInput,
    cb?: (err: any, data?: DefineExpressionOutput) => void
  ): Promise<DefineExpressionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DefineExpressionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public defineIndexField(
    args: DefineIndexFieldInput
  ): Promise<DefineIndexFieldOutput>;
  public defineIndexField(
    args: DefineIndexFieldInput,
    cb: (err: any, data?: DefineIndexFieldOutput) => void
  ): void;
  public defineIndexField(
    args: DefineIndexFieldInput,
    cb?: (err: any, data?: DefineIndexFieldOutput) => void
  ): Promise<DefineIndexFieldOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DefineIndexFieldCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public defineSuggester(
    args: DefineSuggesterInput
  ): Promise<DefineSuggesterOutput>;
  public defineSuggester(
    args: DefineSuggesterInput,
    cb: (err: any, data?: DefineSuggesterOutput) => void
  ): void;
  public defineSuggester(
    args: DefineSuggesterInput,
    cb?: (err: any, data?: DefineSuggesterOutput) => void
  ): Promise<DefineSuggesterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DefineSuggesterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeInput
  ): Promise<DeleteAnalysisSchemeOutput>;
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeInput,
    cb: (err: any, data?: DeleteAnalysisSchemeOutput) => void
  ): void;
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeInput,
    cb?: (err: any, data?: DeleteAnalysisSchemeOutput) => void
  ): Promise<DeleteAnalysisSchemeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAnalysisSchemeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDomain(args: DeleteDomainInput): Promise<DeleteDomainOutput>;
  public deleteDomain(
    args: DeleteDomainInput,
    cb: (err: any, data?: DeleteDomainOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainInput,
    cb?: (err: any, data?: DeleteDomainOutput) => void
  ): Promise<DeleteDomainOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDomainCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteExpression(
    args: DeleteExpressionInput
  ): Promise<DeleteExpressionOutput>;
  public deleteExpression(
    args: DeleteExpressionInput,
    cb: (err: any, data?: DeleteExpressionOutput) => void
  ): void;
  public deleteExpression(
    args: DeleteExpressionInput,
    cb?: (err: any, data?: DeleteExpressionOutput) => void
  ): Promise<DeleteExpressionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteExpressionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIndexField(
    args: DeleteIndexFieldInput
  ): Promise<DeleteIndexFieldOutput>;
  public deleteIndexField(
    args: DeleteIndexFieldInput,
    cb: (err: any, data?: DeleteIndexFieldOutput) => void
  ): void;
  public deleteIndexField(
    args: DeleteIndexFieldInput,
    cb?: (err: any, data?: DeleteIndexFieldOutput) => void
  ): Promise<DeleteIndexFieldOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIndexFieldCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteSuggester(
    args: DeleteSuggesterInput
  ): Promise<DeleteSuggesterOutput>;
  public deleteSuggester(
    args: DeleteSuggesterInput,
    cb: (err: any, data?: DeleteSuggesterOutput) => void
  ): void;
  public deleteSuggester(
    args: DeleteSuggesterInput,
    cb?: (err: any, data?: DeleteSuggesterOutput) => void
  ): Promise<DeleteSuggesterOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteSuggesterCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesInput
  ): Promise<DescribeAnalysisSchemesOutput>;
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesInput,
    cb: (err: any, data?: DescribeAnalysisSchemesOutput) => void
  ): void;
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesInput,
    cb?: (err: any, data?: DescribeAnalysisSchemesOutput) => void
  ): Promise<DescribeAnalysisSchemesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAnalysisSchemesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {DisabledOperationException} <p>The request was rejected because it attempted an operation which is not enabled.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsInput
  ): Promise<DescribeAvailabilityOptionsOutput>;
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsInput,
    cb: (err: any, data?: DescribeAvailabilityOptionsOutput) => void
  ): void;
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsInput,
    cb?: (err: any, data?: DescribeAvailabilityOptionsOutput) => void
  ): Promise<DescribeAvailabilityOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeAvailabilityOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;amp;q.parser=structured&amp;amp;size=0</code>. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeDomains(
    args: DescribeDomainsInput
  ): Promise<DescribeDomainsOutput>;
  public describeDomains(
    args: DescribeDomainsInput,
    cb: (err: any, data?: DescribeDomainsOutput) => void
  ): void;
  public describeDomains(
    args: DescribeDomainsInput,
    cb?: (err: any, data?: DescribeDomainsOutput) => void
  ): Promise<DescribeDomainsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeDomainsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeExpressions(
    args: DescribeExpressionsInput
  ): Promise<DescribeExpressionsOutput>;
  public describeExpressions(
    args: DescribeExpressionsInput,
    cb: (err: any, data?: DescribeExpressionsOutput) => void
  ): void;
  public describeExpressions(
    args: DescribeExpressionsInput,
    cb?: (err: any, data?: DescribeExpressionsOutput) => void
  ): Promise<DescribeExpressionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeExpressionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the index fields configured for the search domain. Can be limited to specific fields by name. By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeIndexFields(
    args: DescribeIndexFieldsInput
  ): Promise<DescribeIndexFieldsOutput>;
  public describeIndexFields(
    args: DescribeIndexFieldsInput,
    cb: (err: any, data?: DescribeIndexFieldsOutput) => void
  ): void;
  public describeIndexFields(
    args: DescribeIndexFieldsInput,
    cb?: (err: any, data?: DescribeIndexFieldsOutput) => void
  ): Promise<DescribeIndexFieldsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeIndexFieldsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeScalingParameters(
    args: DescribeScalingParametersInput
  ): Promise<DescribeScalingParametersOutput>;
  public describeScalingParameters(
    args: DescribeScalingParametersInput,
    cb: (err: any, data?: DescribeScalingParametersOutput) => void
  ): void;
  public describeScalingParameters(
    args: DescribeScalingParametersInput,
    cb?: (err: any, data?: DescribeScalingParametersOutput) => void
  ): Promise<DescribeScalingParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeScalingParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesInput
  ): Promise<DescribeServiceAccessPoliciesOutput>;
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesInput,
    cb: (err: any, data?: DescribeServiceAccessPoliciesOutput) => void
  ): void;
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesInput,
    cb?: (err: any, data?: DescribeServiceAccessPoliciesOutput) => void
  ): Promise<DescribeServiceAccessPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeServiceAccessPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public describeSuggesters(
    args: DescribeSuggestersInput
  ): Promise<DescribeSuggestersOutput>;
  public describeSuggesters(
    args: DescribeSuggestersInput,
    cb: (err: any, data?: DescribeSuggestersOutput) => void
  ): void;
  public describeSuggesters(
    args: DescribeSuggestersInput,
    cb?: (err: any, data?: DescribeSuggestersOutput) => void
  ): Promise<DescribeSuggestersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DescribeSuggestersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is <code>RequiresIndexDocuments</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public indexDocuments(
    args: IndexDocumentsInput
  ): Promise<IndexDocumentsOutput>;
  public indexDocuments(
    args: IndexDocumentsInput,
    cb: (err: any, data?: IndexDocumentsOutput) => void
  ): void;
  public indexDocuments(
    args: IndexDocumentsInput,
    cb?: (err: any, data?: IndexDocumentsOutput) => void
  ): Promise<IndexDocumentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new IndexDocumentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists all search domains owned by an account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDomainNames(
    args: ListDomainNamesInput
  ): Promise<ListDomainNamesOutput>;
  public listDomainNames(
    args: ListDomainNamesInput,
    cb: (err: any, data?: ListDomainNamesOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesInput,
    cb?: (err: any, data?: ListDomainNamesOutput) => void
  ): Promise<ListDomainNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDomainNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {DisabledOperationException} <p>The request was rejected because it attempted an operation which is not enabled.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsInput
  ): Promise<UpdateAvailabilityOptionsOutput>;
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsInput,
    cb: (err: any, data?: UpdateAvailabilityOptionsOutput) => void
  ): void;
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsInput,
    cb?: (err: any, data?: UpdateAvailabilityOptionsOutput) => void
  ): Promise<UpdateAvailabilityOptionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAvailabilityOptionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateScalingParameters(
    args: UpdateScalingParametersInput
  ): Promise<UpdateScalingParametersOutput>;
  public updateScalingParameters(
    args: UpdateScalingParametersInput,
    cb: (err: any, data?: UpdateScalingParametersOutput) => void
  ): void;
  public updateScalingParameters(
    args: UpdateScalingParametersInput,
    cb?: (err: any, data?: UpdateScalingParametersOutput) => void
  ): Promise<UpdateScalingParametersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateScalingParametersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures the access rules that control access to the domain's document and search endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank"> Configuring Access for an Amazon CloudSearch Domain</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BaseException} <p>An error occurred while processing the request.</p>
   *   - {InternalException} <p>An internal error occurred while processing the request. If this problem persists, report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
   *   - {LimitExceededException} <p>The request was rejected because a resource limit has already been met.</p>
   *   - {ResourceNotFoundException} <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
   *   - {InvalidTypeException} <p>The request was rejected because it specified an invalid type definition.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesInput
  ): Promise<UpdateServiceAccessPoliciesOutput>;
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesInput,
    cb: (err: any, data?: UpdateServiceAccessPoliciesOutput) => void
  ): void;
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesInput,
    cb?: (err: any, data?: UpdateServiceAccessPoliciesOutput) => void
  ): Promise<UpdateServiceAccessPoliciesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateServiceAccessPoliciesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
