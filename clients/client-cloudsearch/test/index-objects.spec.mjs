import {
  AlgorithmicStemming,
  AnalysisSchemeLanguage,
  BaseException,
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
  DisabledOperationException,
  IndexDocumentsCommand,
  IndexFieldType,
  InternalException,
  InvalidTypeException,
  LimitExceededException,
  ListDomainNamesCommand,
  OptionState,
  PartitionInstanceType,
  ResourceAlreadyExistsException,
  ResourceNotFoundException,
  SuggesterFuzzyMatching,
  TLSSecurityPolicy,
  UpdateAvailabilityOptionsCommand,
  UpdateDomainEndpointOptionsCommand,
  UpdateScalingParametersCommand,
  UpdateServiceAccessPoliciesCommand,
  ValidationException,
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
assert(BaseException.prototype instanceof CloudSearchServiceException);
assert(DisabledOperationException.prototype instanceof CloudSearchServiceException);
assert(InternalException.prototype instanceof CloudSearchServiceException);
assert(InvalidTypeException.prototype instanceof CloudSearchServiceException);
assert(LimitExceededException.prototype instanceof CloudSearchServiceException);
assert(ResourceAlreadyExistsException.prototype instanceof CloudSearchServiceException);
assert(ResourceNotFoundException.prototype instanceof CloudSearchServiceException);
assert(ValidationException.prototype instanceof CloudSearchServiceException);
assert(CloudSearchServiceException.prototype instanceof Error);
console.log(`CloudSearch index test passed.`);
