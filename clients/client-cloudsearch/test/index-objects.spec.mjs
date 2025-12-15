import {
  AccessPoliciesStatus$,
  AlgorithmicStemming,
  AnalysisOptions$,
  AnalysisScheme$,
  AnalysisSchemeLanguage,
  AnalysisSchemeStatus$,
  AvailabilityOptionsStatus$,
  BaseException,
  BaseException$,
  BuildSuggesters$,
  BuildSuggestersCommand,
  BuildSuggestersRequest$,
  BuildSuggestersResponse$,
  CloudSearch,
  CloudSearchClient,
  CloudSearchServiceException,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainRequest$,
  CreateDomainResponse$,
  DateArrayOptions$,
  DateOptions$,
  DefineAnalysisScheme$,
  DefineAnalysisSchemeCommand,
  DefineAnalysisSchemeRequest$,
  DefineAnalysisSchemeResponse$,
  DefineExpression$,
  DefineExpressionCommand,
  DefineExpressionRequest$,
  DefineExpressionResponse$,
  DefineIndexField$,
  DefineIndexFieldCommand,
  DefineIndexFieldRequest$,
  DefineIndexFieldResponse$,
  DefineSuggester$,
  DefineSuggesterCommand,
  DefineSuggesterRequest$,
  DefineSuggesterResponse$,
  DeleteAnalysisScheme$,
  DeleteAnalysisSchemeCommand,
  DeleteAnalysisSchemeRequest$,
  DeleteAnalysisSchemeResponse$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainRequest$,
  DeleteDomainResponse$,
  DeleteExpression$,
  DeleteExpressionCommand,
  DeleteExpressionRequest$,
  DeleteExpressionResponse$,
  DeleteIndexField$,
  DeleteIndexFieldCommand,
  DeleteIndexFieldRequest$,
  DeleteIndexFieldResponse$,
  DeleteSuggester$,
  DeleteSuggesterCommand,
  DeleteSuggesterRequest$,
  DeleteSuggesterResponse$,
  DescribeAnalysisSchemes$,
  DescribeAnalysisSchemesCommand,
  DescribeAnalysisSchemesRequest$,
  DescribeAnalysisSchemesResponse$,
  DescribeAvailabilityOptions$,
  DescribeAvailabilityOptionsCommand,
  DescribeAvailabilityOptionsRequest$,
  DescribeAvailabilityOptionsResponse$,
  DescribeDomainEndpointOptions$,
  DescribeDomainEndpointOptionsCommand,
  DescribeDomainEndpointOptionsRequest$,
  DescribeDomainEndpointOptionsResponse$,
  DescribeDomains$,
  DescribeDomainsCommand,
  DescribeDomainsRequest$,
  DescribeDomainsResponse$,
  DescribeExpressions$,
  DescribeExpressionsCommand,
  DescribeExpressionsRequest$,
  DescribeExpressionsResponse$,
  DescribeIndexFields$,
  DescribeIndexFieldsCommand,
  DescribeIndexFieldsRequest$,
  DescribeIndexFieldsResponse$,
  DescribeScalingParameters$,
  DescribeScalingParametersCommand,
  DescribeScalingParametersRequest$,
  DescribeScalingParametersResponse$,
  DescribeServiceAccessPolicies$,
  DescribeServiceAccessPoliciesCommand,
  DescribeServiceAccessPoliciesRequest$,
  DescribeServiceAccessPoliciesResponse$,
  DescribeSuggesters$,
  DescribeSuggestersCommand,
  DescribeSuggestersRequest$,
  DescribeSuggestersResponse$,
  DisabledOperationException,
  DisabledOperationException$,
  DocumentSuggesterOptions$,
  DomainEndpointOptions$,
  DomainEndpointOptionsStatus$,
  DomainStatus$,
  DoubleArrayOptions$,
  DoubleOptions$,
  Expression$,
  ExpressionStatus$,
  IndexDocuments$,
  IndexDocumentsCommand,
  IndexDocumentsRequest$,
  IndexDocumentsResponse$,
  IndexField$,
  IndexFieldStatus$,
  IndexFieldType,
  IntArrayOptions$,
  IntOptions$,
  InternalException,
  InternalException$,
  InvalidTypeException,
  InvalidTypeException$,
  LatLonOptions$,
  LimitExceededException,
  LimitExceededException$,
  Limits$,
  ListDomainNames$,
  ListDomainNamesCommand,
  ListDomainNamesResponse$,
  LiteralArrayOptions$,
  LiteralOptions$,
  OptionState,
  OptionStatus$,
  PartitionInstanceType,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ScalingParameters$,
  ScalingParametersStatus$,
  ServiceEndpoint$,
  Suggester$,
  SuggesterFuzzyMatching,
  SuggesterStatus$,
  TLSSecurityPolicy,
  TextArrayOptions$,
  TextOptions$,
  UpdateAvailabilityOptions$,
  UpdateAvailabilityOptionsCommand,
  UpdateAvailabilityOptionsRequest$,
  UpdateAvailabilityOptionsResponse$,
  UpdateDomainEndpointOptions$,
  UpdateDomainEndpointOptionsCommand,
  UpdateDomainEndpointOptionsRequest$,
  UpdateDomainEndpointOptionsResponse$,
  UpdateScalingParameters$,
  UpdateScalingParametersCommand,
  UpdateScalingParametersRequest$,
  UpdateScalingParametersResponse$,
  UpdateServiceAccessPolicies$,
  UpdateServiceAccessPoliciesCommand,
  UpdateServiceAccessPoliciesRequest$,
  UpdateServiceAccessPoliciesResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudSearchClient === "function");
assert(typeof CloudSearch === "function");
// commands
assert(typeof BuildSuggestersCommand === "function");
assert(typeof BuildSuggesters$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof DefineAnalysisSchemeCommand === "function");
assert(typeof DefineAnalysisScheme$ === "object");
assert(typeof DefineExpressionCommand === "function");
assert(typeof DefineExpression$ === "object");
assert(typeof DefineIndexFieldCommand === "function");
assert(typeof DefineIndexField$ === "object");
assert(typeof DefineSuggesterCommand === "function");
assert(typeof DefineSuggester$ === "object");
assert(typeof DeleteAnalysisSchemeCommand === "function");
assert(typeof DeleteAnalysisScheme$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteExpressionCommand === "function");
assert(typeof DeleteExpression$ === "object");
assert(typeof DeleteIndexFieldCommand === "function");
assert(typeof DeleteIndexField$ === "object");
assert(typeof DeleteSuggesterCommand === "function");
assert(typeof DeleteSuggester$ === "object");
assert(typeof DescribeAnalysisSchemesCommand === "function");
assert(typeof DescribeAnalysisSchemes$ === "object");
assert(typeof DescribeAvailabilityOptionsCommand === "function");
assert(typeof DescribeAvailabilityOptions$ === "object");
assert(typeof DescribeDomainEndpointOptionsCommand === "function");
assert(typeof DescribeDomainEndpointOptions$ === "object");
assert(typeof DescribeDomainsCommand === "function");
assert(typeof DescribeDomains$ === "object");
assert(typeof DescribeExpressionsCommand === "function");
assert(typeof DescribeExpressions$ === "object");
assert(typeof DescribeIndexFieldsCommand === "function");
assert(typeof DescribeIndexFields$ === "object");
assert(typeof DescribeScalingParametersCommand === "function");
assert(typeof DescribeScalingParameters$ === "object");
assert(typeof DescribeServiceAccessPoliciesCommand === "function");
assert(typeof DescribeServiceAccessPolicies$ === "object");
assert(typeof DescribeSuggestersCommand === "function");
assert(typeof DescribeSuggesters$ === "object");
assert(typeof IndexDocumentsCommand === "function");
assert(typeof IndexDocuments$ === "object");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof ListDomainNames$ === "object");
assert(typeof UpdateAvailabilityOptionsCommand === "function");
assert(typeof UpdateAvailabilityOptions$ === "object");
assert(typeof UpdateDomainEndpointOptionsCommand === "function");
assert(typeof UpdateDomainEndpointOptions$ === "object");
assert(typeof UpdateScalingParametersCommand === "function");
assert(typeof UpdateScalingParameters$ === "object");
assert(typeof UpdateServiceAccessPoliciesCommand === "function");
assert(typeof UpdateServiceAccessPolicies$ === "object");
// structural schemas
assert(typeof AccessPoliciesStatus$ === "object");
assert(typeof AnalysisOptions$ === "object");
assert(typeof AnalysisScheme$ === "object");
assert(typeof AnalysisSchemeStatus$ === "object");
assert(typeof AvailabilityOptionsStatus$ === "object");
assert(typeof BuildSuggestersRequest$ === "object");
assert(typeof BuildSuggestersResponse$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResponse$ === "object");
assert(typeof DateArrayOptions$ === "object");
assert(typeof DateOptions$ === "object");
assert(typeof DefineAnalysisSchemeRequest$ === "object");
assert(typeof DefineAnalysisSchemeResponse$ === "object");
assert(typeof DefineExpressionRequest$ === "object");
assert(typeof DefineExpressionResponse$ === "object");
assert(typeof DefineIndexFieldRequest$ === "object");
assert(typeof DefineIndexFieldResponse$ === "object");
assert(typeof DefineSuggesterRequest$ === "object");
assert(typeof DefineSuggesterResponse$ === "object");
assert(typeof DeleteAnalysisSchemeRequest$ === "object");
assert(typeof DeleteAnalysisSchemeResponse$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResponse$ === "object");
assert(typeof DeleteExpressionRequest$ === "object");
assert(typeof DeleteExpressionResponse$ === "object");
assert(typeof DeleteIndexFieldRequest$ === "object");
assert(typeof DeleteIndexFieldResponse$ === "object");
assert(typeof DeleteSuggesterRequest$ === "object");
assert(typeof DeleteSuggesterResponse$ === "object");
assert(typeof DescribeAnalysisSchemesRequest$ === "object");
assert(typeof DescribeAnalysisSchemesResponse$ === "object");
assert(typeof DescribeAvailabilityOptionsRequest$ === "object");
assert(typeof DescribeAvailabilityOptionsResponse$ === "object");
assert(typeof DescribeDomainEndpointOptionsRequest$ === "object");
assert(typeof DescribeDomainEndpointOptionsResponse$ === "object");
assert(typeof DescribeDomainsRequest$ === "object");
assert(typeof DescribeDomainsResponse$ === "object");
assert(typeof DescribeExpressionsRequest$ === "object");
assert(typeof DescribeExpressionsResponse$ === "object");
assert(typeof DescribeIndexFieldsRequest$ === "object");
assert(typeof DescribeIndexFieldsResponse$ === "object");
assert(typeof DescribeScalingParametersRequest$ === "object");
assert(typeof DescribeScalingParametersResponse$ === "object");
assert(typeof DescribeServiceAccessPoliciesRequest$ === "object");
assert(typeof DescribeServiceAccessPoliciesResponse$ === "object");
assert(typeof DescribeSuggestersRequest$ === "object");
assert(typeof DescribeSuggestersResponse$ === "object");
assert(typeof DocumentSuggesterOptions$ === "object");
assert(typeof DomainEndpointOptions$ === "object");
assert(typeof DomainEndpointOptionsStatus$ === "object");
assert(typeof DomainStatus$ === "object");
assert(typeof DoubleArrayOptions$ === "object");
assert(typeof DoubleOptions$ === "object");
assert(typeof Expression$ === "object");
assert(typeof ExpressionStatus$ === "object");
assert(typeof IndexDocumentsRequest$ === "object");
assert(typeof IndexDocumentsResponse$ === "object");
assert(typeof IndexField$ === "object");
assert(typeof IndexFieldStatus$ === "object");
assert(typeof IntArrayOptions$ === "object");
assert(typeof IntOptions$ === "object");
assert(typeof LatLonOptions$ === "object");
assert(typeof Limits$ === "object");
assert(typeof ListDomainNamesResponse$ === "object");
assert(typeof LiteralArrayOptions$ === "object");
assert(typeof LiteralOptions$ === "object");
assert(typeof OptionStatus$ === "object");
assert(typeof ScalingParameters$ === "object");
assert(typeof ScalingParametersStatus$ === "object");
assert(typeof ServiceEndpoint$ === "object");
assert(typeof Suggester$ === "object");
assert(typeof SuggesterStatus$ === "object");
assert(typeof TextArrayOptions$ === "object");
assert(typeof TextOptions$ === "object");
assert(typeof UpdateAvailabilityOptionsRequest$ === "object");
assert(typeof UpdateAvailabilityOptionsResponse$ === "object");
assert(typeof UpdateDomainEndpointOptionsRequest$ === "object");
assert(typeof UpdateDomainEndpointOptionsResponse$ === "object");
assert(typeof UpdateScalingParametersRequest$ === "object");
assert(typeof UpdateScalingParametersResponse$ === "object");
assert(typeof UpdateServiceAccessPoliciesRequest$ === "object");
assert(typeof UpdateServiceAccessPoliciesResponse$ === "object");
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
assert(typeof BaseException$ === "object");
assert(DisabledOperationException.prototype instanceof CloudSearchServiceException);
assert(typeof DisabledOperationException$ === "object");
assert(InternalException.prototype instanceof CloudSearchServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidTypeException.prototype instanceof CloudSearchServiceException);
assert(typeof InvalidTypeException$ === "object");
assert(LimitExceededException.prototype instanceof CloudSearchServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof CloudSearchServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof CloudSearchServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof CloudSearchServiceException);
assert(typeof ValidationException$ === "object");
assert(CloudSearchServiceException.prototype instanceof Error);
console.log(`CloudSearch index test passed.`);
