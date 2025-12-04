import {
  AlgorithmicStemming,
  AnalysisSchemeLanguage,
  BuildSuggestersCommand,
  CloudSearch,
  CloudSearchClient,
  CloudSearchServiceException,
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
  IndexFieldType,
  ListDomainNamesCommand,
  OptionState,
  PartitionInstanceType,
  SuggesterFuzzyMatching,
  TLSSecurityPolicy,
  UpdateAvailabilityOptionsCommand,
  UpdateDomainEndpointOptionsCommand,
  UpdateScalingParametersCommand,
  UpdateServiceAccessPoliciesCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudSearchClient === "function");
assert(typeof CloudSearch === "function");
// commands
assert(typeof BuildSuggestersCommand === "function");
assert(typeof CreateDomainCommand === "function");
assert(typeof DefineAnalysisSchemeCommand === "function");
assert(typeof DefineExpressionCommand === "function");
assert(typeof DefineIndexFieldCommand === "function");
assert(typeof DefineSuggesterCommand === "function");
assert(typeof DeleteAnalysisSchemeCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteExpressionCommand === "function");
assert(typeof DeleteIndexFieldCommand === "function");
assert(typeof DeleteSuggesterCommand === "function");
assert(typeof DescribeAnalysisSchemesCommand === "function");
assert(typeof DescribeAvailabilityOptionsCommand === "function");
assert(typeof DescribeDomainEndpointOptionsCommand === "function");
assert(typeof DescribeDomainsCommand === "function");
assert(typeof DescribeExpressionsCommand === "function");
assert(typeof DescribeIndexFieldsCommand === "function");
assert(typeof DescribeScalingParametersCommand === "function");
assert(typeof DescribeServiceAccessPoliciesCommand === "function");
assert(typeof DescribeSuggestersCommand === "function");
assert(typeof IndexDocumentsCommand === "function");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof UpdateAvailabilityOptionsCommand === "function");
assert(typeof UpdateDomainEndpointOptionsCommand === "function");
assert(typeof UpdateScalingParametersCommand === "function");
assert(typeof UpdateServiceAccessPoliciesCommand === "function");
// enums
assert(typeof AlgorithmicStemming === "object");
assert(typeof AnalysisSchemeLanguage === "object");
assert(typeof IndexFieldType === "object");
assert(typeof OptionState === "object");
assert(typeof PartitionInstanceType === "object");
assert(typeof SuggesterFuzzyMatching === "object");
assert(typeof TLSSecurityPolicy === "object");
// errors
assert(CloudSearchServiceException.prototype instanceof Error);
console.log(`CloudSearch index test passed.`);
