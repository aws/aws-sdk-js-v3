// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudSearchClient } from "./CloudSearchClient";
import {
  BuildSuggestersCommand,
  BuildSuggestersCommandInput,
  BuildSuggestersCommandOutput,
} from "./commands/BuildSuggestersCommand";
import {
  CreateDomainCommand,
  CreateDomainCommandInput,
  CreateDomainCommandOutput,
} from "./commands/CreateDomainCommand";
import {
  DefineAnalysisSchemeCommand,
  DefineAnalysisSchemeCommandInput,
  DefineAnalysisSchemeCommandOutput,
} from "./commands/DefineAnalysisSchemeCommand";
import {
  DefineExpressionCommand,
  DefineExpressionCommandInput,
  DefineExpressionCommandOutput,
} from "./commands/DefineExpressionCommand";
import {
  DefineIndexFieldCommand,
  DefineIndexFieldCommandInput,
  DefineIndexFieldCommandOutput,
} from "./commands/DefineIndexFieldCommand";
import {
  DefineSuggesterCommand,
  DefineSuggesterCommandInput,
  DefineSuggesterCommandOutput,
} from "./commands/DefineSuggesterCommand";
import {
  DeleteAnalysisSchemeCommand,
  DeleteAnalysisSchemeCommandInput,
  DeleteAnalysisSchemeCommandOutput,
} from "./commands/DeleteAnalysisSchemeCommand";
import {
  DeleteDomainCommand,
  DeleteDomainCommandInput,
  DeleteDomainCommandOutput,
} from "./commands/DeleteDomainCommand";
import {
  DeleteExpressionCommand,
  DeleteExpressionCommandInput,
  DeleteExpressionCommandOutput,
} from "./commands/DeleteExpressionCommand";
import {
  DeleteIndexFieldCommand,
  DeleteIndexFieldCommandInput,
  DeleteIndexFieldCommandOutput,
} from "./commands/DeleteIndexFieldCommand";
import {
  DeleteSuggesterCommand,
  DeleteSuggesterCommandInput,
  DeleteSuggesterCommandOutput,
} from "./commands/DeleteSuggesterCommand";
import {
  DescribeAnalysisSchemesCommand,
  DescribeAnalysisSchemesCommandInput,
  DescribeAnalysisSchemesCommandOutput,
} from "./commands/DescribeAnalysisSchemesCommand";
import {
  DescribeAvailabilityOptionsCommand,
  DescribeAvailabilityOptionsCommandInput,
  DescribeAvailabilityOptionsCommandOutput,
} from "./commands/DescribeAvailabilityOptionsCommand";
import {
  DescribeDomainEndpointOptionsCommand,
  DescribeDomainEndpointOptionsCommandInput,
  DescribeDomainEndpointOptionsCommandOutput,
} from "./commands/DescribeDomainEndpointOptionsCommand";
import {
  DescribeDomainsCommand,
  DescribeDomainsCommandInput,
  DescribeDomainsCommandOutput,
} from "./commands/DescribeDomainsCommand";
import {
  DescribeExpressionsCommand,
  DescribeExpressionsCommandInput,
  DescribeExpressionsCommandOutput,
} from "./commands/DescribeExpressionsCommand";
import {
  DescribeIndexFieldsCommand,
  DescribeIndexFieldsCommandInput,
  DescribeIndexFieldsCommandOutput,
} from "./commands/DescribeIndexFieldsCommand";
import {
  DescribeScalingParametersCommand,
  DescribeScalingParametersCommandInput,
  DescribeScalingParametersCommandOutput,
} from "./commands/DescribeScalingParametersCommand";
import {
  DescribeServiceAccessPoliciesCommand,
  DescribeServiceAccessPoliciesCommandInput,
  DescribeServiceAccessPoliciesCommandOutput,
} from "./commands/DescribeServiceAccessPoliciesCommand";
import {
  DescribeSuggestersCommand,
  DescribeSuggestersCommandInput,
  DescribeSuggestersCommandOutput,
} from "./commands/DescribeSuggestersCommand";
import {
  IndexDocumentsCommand,
  IndexDocumentsCommandInput,
  IndexDocumentsCommandOutput,
} from "./commands/IndexDocumentsCommand";
import {
  ListDomainNamesCommand,
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
} from "./commands/ListDomainNamesCommand";
import {
  UpdateAvailabilityOptionsCommand,
  UpdateAvailabilityOptionsCommandInput,
  UpdateAvailabilityOptionsCommandOutput,
} from "./commands/UpdateAvailabilityOptionsCommand";
import {
  UpdateDomainEndpointOptionsCommand,
  UpdateDomainEndpointOptionsCommandInput,
  UpdateDomainEndpointOptionsCommandOutput,
} from "./commands/UpdateDomainEndpointOptionsCommand";
import {
  UpdateScalingParametersCommand,
  UpdateScalingParametersCommandInput,
  UpdateScalingParametersCommandOutput,
} from "./commands/UpdateScalingParametersCommand";
import {
  UpdateServiceAccessPoliciesCommand,
  UpdateServiceAccessPoliciesCommandInput,
  UpdateServiceAccessPoliciesCommandOutput,
} from "./commands/UpdateServiceAccessPoliciesCommand";

/**
 * <fullname>Amazon CloudSearch Configuration Service</fullname>
 *     <p>You use the Amazon CloudSearch configuration service to create, configure, and manage search domains.
 *       Configuration service  requests are submitted using the AWS Query protocol. AWS Query requests
 *       are HTTP or HTTPS requests submitted via HTTP GET or POST with a query parameter named Action.</p>
 *     <p>The endpoint for configuration service requests is region-specific: cloudsearch.<i>region</i>.amazonaws.com.
 *       For example, cloudsearch.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#cloudsearch_region" target="_blank">Regions and Endpoints</a>.</p>
 */
export class CloudSearch extends CloudSearchClient {
  /**
   * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public buildSuggesters(
    args: BuildSuggestersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BuildSuggestersCommandOutput>;
  public buildSuggesters(
    args: BuildSuggestersCommandInput,
    cb: (err: any, data?: BuildSuggestersCommandOutput) => void
  ): void;
  public buildSuggesters(
    args: BuildSuggestersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BuildSuggestersCommandOutput) => void
  ): void;
  public buildSuggesters(
    args: BuildSuggestersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BuildSuggestersCommandOutput) => void),
    cb?: (err: any, data?: BuildSuggestersCommandOutput) => void
  ): Promise<BuildSuggestersCommandOutput> | void {
    const command = new BuildSuggestersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new search domain. For more information,
   *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/creating-domains.html" target="_blank">Creating a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public createDomain(
    args: CreateDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainCommandOutput>;
  public createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
  public createDomain(
    args: CreateDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainCommandOutput) => void
  ): void;
  public createDomain(
    args: CreateDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainCommandOutput) => void
  ): Promise<CreateDomainCommandOutput> | void {
    const command = new CreateDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures an analysis scheme that can be applied to a <code>text</code> or <code>text-array</code> field to define language-specific text processing options. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineAnalysisSchemeCommandOutput>;
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    cb: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void
  ): void;
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void
  ): void;
  public defineAnalysisScheme(
    args: DefineAnalysisSchemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DefineAnalysisSchemeCommandOutput) => void),
    cb?: (err: any, data?: DefineAnalysisSchemeCommandOutput) => void
  ): Promise<DefineAnalysisSchemeCommandOutput> | void {
    const command = new DefineAnalysisSchemeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures an <code><a>Expression</a></code> for the search domain. Used to create new expressions and modify existing ones.  If the expression exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public defineExpression(
    args: DefineExpressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineExpressionCommandOutput>;
  public defineExpression(
    args: DefineExpressionCommandInput,
    cb: (err: any, data?: DefineExpressionCommandOutput) => void
  ): void;
  public defineExpression(
    args: DefineExpressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineExpressionCommandOutput) => void
  ): void;
  public defineExpression(
    args: DefineExpressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DefineExpressionCommandOutput) => void),
    cb?: (err: any, data?: DefineExpressionCommandOutput) => void
  ): Promise<DefineExpressionCommandOutput> | void {
    const command = new DefineExpressionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures an <code><a>IndexField</a></code> for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the <code><a>IndexFieldType</a></code>. If the field exists, the new configuration replaces the old one. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   */
  public defineIndexField(
    args: DefineIndexFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineIndexFieldCommandOutput>;
  public defineIndexField(
    args: DefineIndexFieldCommandInput,
    cb: (err: any, data?: DefineIndexFieldCommandOutput) => void
  ): void;
  public defineIndexField(
    args: DefineIndexFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineIndexFieldCommandOutput) => void
  ): void;
  public defineIndexField(
    args: DefineIndexFieldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DefineIndexFieldCommandOutput) => void),
    cb?: (err: any, data?: DefineIndexFieldCommandOutput) => void
  ): Promise<DefineIndexFieldCommandOutput> | void {
    const command = new DefineIndexFieldCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public defineSuggester(
    args: DefineSuggesterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DefineSuggesterCommandOutput>;
  public defineSuggester(
    args: DefineSuggesterCommandInput,
    cb: (err: any, data?: DefineSuggesterCommandOutput) => void
  ): void;
  public defineSuggester(
    args: DefineSuggesterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DefineSuggesterCommandOutput) => void
  ): void;
  public defineSuggester(
    args: DefineSuggesterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DefineSuggesterCommandOutput) => void),
    cb?: (err: any, data?: DefineSuggesterCommandOutput) => void
  ): Promise<DefineSuggesterCommandOutput> | void {
    const command = new DefineSuggesterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an analysis scheme. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   */
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnalysisSchemeCommandOutput>;
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    cb: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void
  ): void;
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void
  ): void;
  public deleteAnalysisScheme(
    args: DeleteAnalysisSchemeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnalysisSchemeCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnalysisSchemeCommandOutput) => void
  ): Promise<DeleteAnalysisSchemeCommandOutput> | void {
    const command = new DeleteAnalysisSchemeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information,
   *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/deleting-domains.html" target="_blank">Deleting a Search  Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   */
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainCommandOutput>;
  public deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainCommandOutput) => void
  ): void;
  public deleteDomain(
    args: DeleteDomainCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainCommandOutput) => void
  ): Promise<DeleteDomainCommandOutput> | void {
    const command = new DeleteDomainCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an <code><a>Expression</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public deleteExpression(
    args: DeleteExpressionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExpressionCommandOutput>;
  public deleteExpression(
    args: DeleteExpressionCommandInput,
    cb: (err: any, data?: DeleteExpressionCommandOutput) => void
  ): void;
  public deleteExpression(
    args: DeleteExpressionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExpressionCommandOutput) => void
  ): void;
  public deleteExpression(
    args: DeleteExpressionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExpressionCommandOutput) => void),
    cb?: (err: any, data?: DeleteExpressionCommandOutput) => void
  ): Promise<DeleteExpressionCommandOutput> | void {
    const command = new DeleteExpressionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an <code><a>IndexField</a></code> from the search domain. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexFieldCommandOutput>;
  public deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    cb: (err: any, data?: DeleteIndexFieldCommandOutput) => void
  ): void;
  public deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexFieldCommandOutput) => void
  ): void;
  public deleteIndexField(
    args: DeleteIndexFieldCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIndexFieldCommandOutput) => void),
    cb?: (err: any, data?: DeleteIndexFieldCommandOutput) => void
  ): Promise<DeleteIndexFieldCommandOutput> | void {
    const command = new DeleteIndexFieldCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a suggester. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public deleteSuggester(
    args: DeleteSuggesterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSuggesterCommandOutput>;
  public deleteSuggester(
    args: DeleteSuggesterCommandInput,
    cb: (err: any, data?: DeleteSuggesterCommandOutput) => void
  ): void;
  public deleteSuggester(
    args: DeleteSuggesterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSuggesterCommandOutput) => void
  ): void;
  public deleteSuggester(
    args: DeleteSuggesterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSuggesterCommandOutput) => void),
    cb?: (err: any, data?: DeleteSuggesterCommandOutput) => void
  ): Promise<DeleteSuggesterCommandOutput> | void {
    const command = new DeleteSuggesterCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a <code>text</code> field. Can be limited to specific analysis schemes by name.  By default, shows all analysis schemes and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html" target="_blank">Configuring Analysis Schemes</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAnalysisSchemesCommandOutput>;
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    cb: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void
  ): void;
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void
  ): void;
  public describeAnalysisSchemes(
    args: DescribeAnalysisSchemesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAnalysisSchemesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAnalysisSchemesCommandOutput) => void
  ): Promise<DescribeAnalysisSchemesCommandOutput> | void {
    const command = new DescribeAnalysisSchemesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the availability options configured for a domain. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAvailabilityOptionsCommandOutput>;
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    cb: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void
  ): void;
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void
  ): void;
  public describeAvailabilityOptions(
    args: DescribeAvailabilityOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAvailabilityOptionsCommandOutput) => void
  ): Promise<DescribeAvailabilityOptionsCommandOutput> | void {
    const command = new DescribeAvailabilityOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainEndpointOptionsCommandOutput>;
  public describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    cb: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void
  ): void;
  public describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void
  ): void;
  public describeDomainEndpointOptions(
    args: DescribeDomainEndpointOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainEndpointOptionsCommandOutput) => void
  ): Promise<DescribeDomainEndpointOptionsCommandOutput> | void {
    const command = new DescribeDomainEndpointOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows
   *       all domains by default. To get the number of searchable documents in a domain, use the console or submit a <code>matchall</code> request to your domain's search endpoint: <code>q=matchall&amp;q.parser=structured&amp;size=0</code>. For more information,
   *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Information about a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeDomains(
    args: DescribeDomainsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDomainsCommandOutput>;
  public describeDomains(
    args: DescribeDomainsCommandInput,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;
  public describeDomains(
    args: DescribeDomainsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): void;
  public describeDomains(
    args: DescribeDomainsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDomainsCommandOutput) => void),
    cb?: (err: any, data?: DescribeDomainsCommandOutput) => void
  ): Promise<DescribeDomainsCommandOutput> | void {
    const command = new DescribeDomainsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the expressions configured for the search domain. Can be limited to specific expressions by name. By default, shows all expressions and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information, see  <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeExpressions(
    args: DescribeExpressionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExpressionsCommandOutput>;
  public describeExpressions(
    args: DescribeExpressionsCommandInput,
    cb: (err: any, data?: DescribeExpressionsCommandOutput) => void
  ): void;
  public describeExpressions(
    args: DescribeExpressionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExpressionsCommandOutput) => void
  ): void;
  public describeExpressions(
    args: DescribeExpressionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExpressionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeExpressionsCommandOutput) => void
  ): Promise<DescribeExpressionsCommandOutput> | void {
    const command = new DescribeExpressionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the index fields configured for the search domain.
   *       Can be limited to specific fields by name.  By default, shows all fields and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
   *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-domain-info.html" target="_blank">Getting Domain Information</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIndexFieldsCommandOutput>;
  public describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    cb: (err: any, data?: DescribeIndexFieldsCommandOutput) => void
  ): void;
  public describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexFieldsCommandOutput) => void
  ): void;
  public describeIndexFields(
    args: DescribeIndexFieldsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIndexFieldsCommandOutput) => void),
    cb?: (err: any, data?: DescribeIndexFieldsCommandOutput) => void
  ): Promise<DescribeIndexFieldsCommandOutput> | void {
    const command = new DescribeIndexFieldsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the scaling parameters configured for a domain. A domain's scaling parameters specify the desired search instance type and replication count. For more information, see   <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScalingParametersCommandOutput>;
  public describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    cb: (err: any, data?: DescribeScalingParametersCommandOutput) => void
  ): void;
  public describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScalingParametersCommandOutput) => void
  ): void;
  public describeScalingParameters(
    args: DescribeScalingParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScalingParametersCommandOutput) => void),
    cb?: (err: any, data?: DescribeScalingParametersCommandOutput) => void
  ): Promise<DescribeScalingParametersCommandOutput> | void {
    const command = new DescribeScalingParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the access policies that control access to the domain's document and search endpoints. By default, shows the configuration with any pending changes. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes. For more information,
   *       see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeServiceAccessPoliciesCommandOutput>;
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    cb: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void
  ): void;
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void
  ): void;
  public describeServiceAccessPolicies(
    args: DescribeServiceAccessPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void),
    cb?: (err: any, data?: DescribeServiceAccessPoliciesCommandOutput) => void
  ): Promise<DescribeServiceAccessPoliciesCommandOutput> | void {
    const command = new DescribeServiceAccessPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries.  Can be limited to specific suggesters by name.  By default, shows all suggesters and includes any pending changes to the configuration. Set the <code>Deployed</code> option to <code>true</code> to show the active configuration and exclude pending changes.  For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html" target="_blank">Getting Search Suggestions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public describeSuggesters(
    args: DescribeSuggestersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSuggestersCommandOutput>;
  public describeSuggesters(
    args: DescribeSuggestersCommandInput,
    cb: (err: any, data?: DescribeSuggestersCommandOutput) => void
  ): void;
  public describeSuggesters(
    args: DescribeSuggestersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSuggestersCommandOutput) => void
  ): void;
  public describeSuggesters(
    args: DescribeSuggestersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSuggestersCommandOutput) => void),
    cb?: (err: any, data?: DescribeSuggestersCommandOutput) => void
  ): Promise<DescribeSuggestersCommandOutput> | void {
    const command = new DescribeSuggestersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is  <code>RequiresIndexDocuments</code>.</p>
   */
  public indexDocuments(
    args: IndexDocumentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<IndexDocumentsCommandOutput>;
  public indexDocuments(
    args: IndexDocumentsCommandInput,
    cb: (err: any, data?: IndexDocumentsCommandOutput) => void
  ): void;
  public indexDocuments(
    args: IndexDocumentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: IndexDocumentsCommandOutput) => void
  ): void;
  public indexDocuments(
    args: IndexDocumentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: IndexDocumentsCommandOutput) => void),
    cb?: (err: any, data?: IndexDocumentsCommandOutput) => void
  ): Promise<IndexDocumentsCommandOutput> | void {
    const command = new IndexDocumentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all search domains owned by an account.</p>
   */
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainNamesCommandOutput>;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainNamesCommandOutput) => void),
    cb?: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): Promise<ListDomainNamesCommandOutput> | void {
    const command = new ListDomainNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures the availability options for a domain. Enabling the Multi-AZ option expands an Amazon CloudSearch domain to an additional Availability Zone in the same Region to increase fault tolerance in the event of a service disruption. Changes to the Multi-AZ option can take about half an hour to become active. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-availability-options.html" target="_blank">Configuring Availability Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAvailabilityOptionsCommandOutput>;
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    cb: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void
  ): void;
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void
  ): void;
  public updateAvailabilityOptions(
    args: UpdateAvailabilityOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateAvailabilityOptionsCommandOutput) => void
  ): Promise<UpdateAvailabilityOptionsCommandOutput> | void {
    const command = new UpdateAvailabilityOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the domain's endpoint options, specifically whether all requests to the domain must arrive over HTTPS. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-domain-endpoint-options.html" target="_blank">Configuring Domain Endpoint Options</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  public updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainEndpointOptionsCommandOutput>;
  public updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    cb: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void
  ): void;
  public updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void
  ): void;
  public updateDomainEndpointOptions(
    args: UpdateDomainEndpointOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainEndpointOptionsCommandOutput) => void
  ): Promise<UpdateDomainEndpointOptionsCommandOutput> | void {
    const command = new UpdateDomainEndpointOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures scaling parameters for a domain. A domain's scaling parameters specify the desired search instance type and replication count. Amazon CloudSearch will still automatically scale your domain based on the volume of data and traffic, but not below the desired instance type and replication count. If the Multi-AZ option is enabled, these values control the resources used per Availability Zone. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-scaling-options.html" target="_blank">Configuring Scaling Options</a> in the <i>Amazon CloudSearch Developer Guide</i>. </p>
   */
  public updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScalingParametersCommandOutput>;
  public updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    cb: (err: any, data?: UpdateScalingParametersCommandOutput) => void
  ): void;
  public updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScalingParametersCommandOutput) => void
  ): void;
  public updateScalingParameters(
    args: UpdateScalingParametersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScalingParametersCommandOutput) => void),
    cb?: (err: any, data?: UpdateScalingParametersCommandOutput) => void
  ): Promise<UpdateScalingParametersCommandOutput> | void {
    const command = new UpdateScalingParametersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures the access rules that control access to the domain's document and search endpoints.
   *       For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">
   *         Configuring Access for an Amazon CloudSearch Domain</a>.</p>
   */
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceAccessPoliciesCommandOutput>;
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    cb: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void
  ): void;
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void
  ): void;
  public updateServiceAccessPolicies(
    args: UpdateServiceAccessPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceAccessPoliciesCommandOutput) => void
  ): Promise<UpdateServiceAccessPoliciesCommandOutput> | void {
    const command = new UpdateServiceAccessPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
