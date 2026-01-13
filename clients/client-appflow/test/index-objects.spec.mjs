import {
  AccessDeniedException,
  AccessDeniedException$,
  AggregationConfig$,
  AggregationType,
  AmplitudeConnectorOperator,
  AmplitudeConnectorProfileCredentials$,
  AmplitudeConnectorProfileProperties$,
  AmplitudeMetadata$,
  AmplitudeSourceProperties$,
  ApiKeyCredentials$,
  Appflow,
  AppflowClient,
  AppflowServiceException,
  AuthenticationConfig$,
  AuthenticationType,
  AuthParameter$,
  BasicAuthCredentials$,
  CancelFlowExecutions$,
  CancelFlowExecutionsCommand,
  CancelFlowExecutionsRequest$,
  CancelFlowExecutionsResponse$,
  CatalogType,
  ConflictException,
  ConflictException$,
  ConnectionMode,
  ConnectorAuthenticationException,
  ConnectorAuthenticationException$,
  ConnectorConfiguration$,
  ConnectorDetail$,
  ConnectorEntity$,
  ConnectorEntityField$,
  ConnectorMetadata$,
  ConnectorOAuthRequest$,
  ConnectorOperator$,
  ConnectorProfile$,
  ConnectorProfileConfig$,
  ConnectorProfileCredentials$,
  ConnectorProfileProperties$,
  ConnectorProvisioningConfig$,
  ConnectorProvisioningType,
  ConnectorRuntimeSetting$,
  ConnectorServerException,
  ConnectorServerException$,
  ConnectorType,
  CreateConnectorProfile$,
  CreateConnectorProfileCommand,
  CreateConnectorProfileRequest$,
  CreateConnectorProfileResponse$,
  CreateFlow$,
  CreateFlowCommand,
  CreateFlowRequest$,
  CreateFlowResponse$,
  CustomAuthConfig$,
  CustomAuthCredentials$,
  CustomConnectorDestinationProperties$,
  CustomConnectorProfileCredentials$,
  CustomConnectorProfileProperties$,
  CustomConnectorSourceProperties$,
  CustomerProfilesDestinationProperties$,
  CustomerProfilesMetadata$,
  DatadogConnectorOperator,
  DatadogConnectorProfileCredentials$,
  DatadogConnectorProfileProperties$,
  DatadogMetadata$,
  DatadogSourceProperties$,
  DataPullMode,
  DataTransferApi$,
  DataTransferApiType,
  DeleteConnectorProfile$,
  DeleteConnectorProfileCommand,
  DeleteConnectorProfileRequest$,
  DeleteConnectorProfileResponse$,
  DeleteFlow$,
  DeleteFlowCommand,
  DeleteFlowRequest$,
  DeleteFlowResponse$,
  DescribeConnector$,
  DescribeConnectorCommand,
  DescribeConnectorEntity$,
  DescribeConnectorEntityCommand,
  DescribeConnectorEntityRequest$,
  DescribeConnectorEntityResponse$,
  DescribeConnectorProfiles$,
  DescribeConnectorProfilesCommand,
  DescribeConnectorProfilesRequest$,
  DescribeConnectorProfilesResponse$,
  DescribeConnectorRequest$,
  DescribeConnectorResponse$,
  DescribeConnectors$,
  DescribeConnectorsCommand,
  DescribeConnectorsRequest$,
  DescribeConnectorsResponse$,
  DescribeFlow$,
  DescribeFlowCommand,
  DescribeFlowExecutionRecords$,
  DescribeFlowExecutionRecordsCommand,
  DescribeFlowExecutionRecordsRequest$,
  DescribeFlowExecutionRecordsResponse$,
  DescribeFlowRequest$,
  DescribeFlowResponse$,
  DestinationConnectorProperties$,
  DestinationFieldProperties$,
  DestinationFlowConfig$,
  DynatraceConnectorOperator,
  DynatraceConnectorProfileCredentials$,
  DynatraceConnectorProfileProperties$,
  DynatraceMetadata$,
  DynatraceSourceProperties$,
  ErrorHandlingConfig$,
  ErrorInfo$,
  EventBridgeDestinationProperties$,
  EventBridgeMetadata$,
  ExecutionDetails$,
  ExecutionRecord$,
  ExecutionResult$,
  ExecutionStatus,
  FieldTypeDetails$,
  FileType,
  FlowDefinition$,
  FlowStatus,
  GlueDataCatalogConfig$,
  GoogleAnalyticsConnectorOperator,
  GoogleAnalyticsConnectorProfileCredentials$,
  GoogleAnalyticsConnectorProfileProperties$,
  GoogleAnalyticsMetadata$,
  GoogleAnalyticsSourceProperties$,
  HoneycodeConnectorProfileCredentials$,
  HoneycodeConnectorProfileProperties$,
  HoneycodeDestinationProperties$,
  HoneycodeMetadata$,
  IncrementalPullConfig$,
  InforNexusConnectorOperator,
  InforNexusConnectorProfileCredentials$,
  InforNexusConnectorProfileProperties$,
  InforNexusMetadata$,
  InforNexusSourceProperties$,
  InternalServerException,
  InternalServerException$,
  LambdaConnectorProvisioningConfig$,
  ListConnectorEntities$,
  ListConnectorEntitiesCommand,
  ListConnectorEntitiesRequest$,
  ListConnectorEntitiesResponse$,
  ListConnectors$,
  ListConnectorsCommand,
  ListConnectorsRequest$,
  ListConnectorsResponse$,
  ListFlows$,
  ListFlowsCommand,
  ListFlowsRequest$,
  ListFlowsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LookoutMetricsDestinationProperties$,
  MarketoConnectorOperator,
  MarketoConnectorProfileCredentials$,
  MarketoConnectorProfileProperties$,
  MarketoDestinationProperties$,
  MarketoMetadata$,
  MarketoSourceProperties$,
  MetadataCatalogConfig$,
  MetadataCatalogDetail$,
  OAuth2Credentials$,
  OAuth2CustomParameter$,
  OAuth2CustomPropType,
  OAuth2Defaults$,
  OAuth2GrantType,
  OAuth2Properties$,
  OAuthCredentials$,
  OAuthProperties$,
  Operator,
  OperatorPropertiesKeys,
  Operators,
  paginateDescribeConnectorProfiles,
  paginateDescribeConnectors,
  paginateDescribeFlowExecutionRecords,
  paginateListConnectors,
  paginateListFlows,
  PardotConnectorOperator,
  PardotConnectorProfileCredentials$,
  PardotConnectorProfileProperties$,
  PardotMetadata$,
  PardotSourceProperties$,
  PathPrefix,
  PrefixConfig$,
  PrefixFormat,
  PrefixType,
  PrivateConnectionProvisioningFailureCause,
  PrivateConnectionProvisioningState$,
  PrivateConnectionProvisioningStatus,
  Range$,
  RedshiftConnectorProfileCredentials$,
  RedshiftConnectorProfileProperties$,
  RedshiftDestinationProperties$,
  RedshiftMetadata$,
  RegisterConnector$,
  RegisterConnectorCommand,
  RegisterConnectorRequest$,
  RegisterConnectorResponse$,
  RegistrationOutput$,
  ResetConnectorMetadataCache$,
  ResetConnectorMetadataCacheCommand,
  ResetConnectorMetadataCacheRequest$,
  ResetConnectorMetadataCacheResponse$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3ConnectorOperator,
  S3DestinationProperties$,
  S3InputFileType,
  S3InputFormatConfig$,
  S3Metadata$,
  S3OutputFormatConfig$,
  S3SourceProperties$,
  SalesforceConnectorOperator,
  SalesforceConnectorProfileCredentials$,
  SalesforceConnectorProfileProperties$,
  SalesforceDataTransferApi,
  SalesforceDestinationProperties$,
  SalesforceMetadata$,
  SalesforceSourceProperties$,
  SAPODataConnectorOperator,
  SAPODataConnectorProfileCredentials$,
  SAPODataConnectorProfileProperties$,
  SAPODataDestinationProperties$,
  SAPODataMetadata$,
  SAPODataPaginationConfig$,
  SAPODataParallelismConfig$,
  SAPODataSourceProperties$,
  ScheduledTriggerProperties$,
  ScheduleFrequencyType,
  ServiceNowConnectorOperator,
  ServiceNowConnectorProfileCredentials$,
  ServiceNowConnectorProfileProperties$,
  ServiceNowMetadata$,
  ServiceNowSourceProperties$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SingularConnectorOperator,
  SingularConnectorProfileCredentials$,
  SingularConnectorProfileProperties$,
  SingularMetadata$,
  SingularSourceProperties$,
  SlackConnectorOperator,
  SlackConnectorProfileCredentials$,
  SlackConnectorProfileProperties$,
  SlackMetadata$,
  SlackSourceProperties$,
  SnowflakeConnectorProfileCredentials$,
  SnowflakeConnectorProfileProperties$,
  SnowflakeDestinationProperties$,
  SnowflakeMetadata$,
  SourceConnectorProperties$,
  SourceFieldProperties$,
  SourceFlowConfig$,
  StartFlow$,
  StartFlowCommand,
  StartFlowRequest$,
  StartFlowResponse$,
  StopFlow$,
  StopFlowCommand,
  StopFlowRequest$,
  StopFlowResponse$,
  SuccessResponseHandlingConfig$,
  SupportedDataTransferType,
  SupportedFieldTypeDetails$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  Task$,
  TaskType,
  ThrottlingException,
  ThrottlingException$,
  TrendmicroConnectorOperator,
  TrendmicroConnectorProfileCredentials$,
  TrendmicroConnectorProfileProperties$,
  TrendmicroMetadata$,
  TrendmicroSourceProperties$,
  TriggerConfig$,
  TriggerProperties$,
  TriggerType,
  UnregisterConnector$,
  UnregisterConnectorCommand,
  UnregisterConnectorRequest$,
  UnregisterConnectorResponse$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateConnectorProfile$,
  UpdateConnectorProfileCommand,
  UpdateConnectorProfileRequest$,
  UpdateConnectorProfileResponse$,
  UpdateConnectorRegistration$,
  UpdateConnectorRegistrationCommand,
  UpdateConnectorRegistrationRequest$,
  UpdateConnectorRegistrationResponse$,
  UpdateFlow$,
  UpdateFlowCommand,
  UpdateFlowRequest$,
  UpdateFlowResponse$,
  UpsolverDestinationProperties$,
  UpsolverMetadata$,
  UpsolverS3OutputFormatConfig$,
  ValidationException,
  ValidationException$,
  VeevaConnectorOperator,
  VeevaConnectorProfileCredentials$,
  VeevaConnectorProfileProperties$,
  VeevaMetadata$,
  VeevaSourceProperties$,
  WriteOperationType,
  ZendeskConnectorOperator,
  ZendeskConnectorProfileCredentials$,
  ZendeskConnectorProfileProperties$,
  ZendeskDestinationProperties$,
  ZendeskMetadata$,
  ZendeskSourceProperties$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppflowClient === "function");
assert(typeof Appflow === "function");
// commands
assert(typeof CancelFlowExecutionsCommand === "function");
assert(typeof CancelFlowExecutions$ === "object");
assert(typeof CreateConnectorProfileCommand === "function");
assert(typeof CreateConnectorProfile$ === "object");
assert(typeof CreateFlowCommand === "function");
assert(typeof CreateFlow$ === "object");
assert(typeof DeleteConnectorProfileCommand === "function");
assert(typeof DeleteConnectorProfile$ === "object");
assert(typeof DeleteFlowCommand === "function");
assert(typeof DeleteFlow$ === "object");
assert(typeof DescribeConnectorCommand === "function");
assert(typeof DescribeConnector$ === "object");
assert(typeof DescribeConnectorEntityCommand === "function");
assert(typeof DescribeConnectorEntity$ === "object");
assert(typeof DescribeConnectorProfilesCommand === "function");
assert(typeof DescribeConnectorProfiles$ === "object");
assert(typeof DescribeConnectorsCommand === "function");
assert(typeof DescribeConnectors$ === "object");
assert(typeof DescribeFlowCommand === "function");
assert(typeof DescribeFlow$ === "object");
assert(typeof DescribeFlowExecutionRecordsCommand === "function");
assert(typeof DescribeFlowExecutionRecords$ === "object");
assert(typeof ListConnectorEntitiesCommand === "function");
assert(typeof ListConnectorEntities$ === "object");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListConnectors$ === "object");
assert(typeof ListFlowsCommand === "function");
assert(typeof ListFlows$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterConnectorCommand === "function");
assert(typeof RegisterConnector$ === "object");
assert(typeof ResetConnectorMetadataCacheCommand === "function");
assert(typeof ResetConnectorMetadataCache$ === "object");
assert(typeof StartFlowCommand === "function");
assert(typeof StartFlow$ === "object");
assert(typeof StopFlowCommand === "function");
assert(typeof StopFlow$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UnregisterConnectorCommand === "function");
assert(typeof UnregisterConnector$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateConnectorProfileCommand === "function");
assert(typeof UpdateConnectorProfile$ === "object");
assert(typeof UpdateConnectorRegistrationCommand === "function");
assert(typeof UpdateConnectorRegistration$ === "object");
assert(typeof UpdateFlowCommand === "function");
assert(typeof UpdateFlow$ === "object");
// structural schemas
assert(typeof AggregationConfig$ === "object");
assert(typeof AmplitudeConnectorProfileCredentials$ === "object");
assert(typeof AmplitudeConnectorProfileProperties$ === "object");
assert(typeof AmplitudeMetadata$ === "object");
assert(typeof AmplitudeSourceProperties$ === "object");
assert(typeof ApiKeyCredentials$ === "object");
assert(typeof AuthenticationConfig$ === "object");
assert(typeof AuthParameter$ === "object");
assert(typeof BasicAuthCredentials$ === "object");
assert(typeof CancelFlowExecutionsRequest$ === "object");
assert(typeof CancelFlowExecutionsResponse$ === "object");
assert(typeof ConnectorConfiguration$ === "object");
assert(typeof ConnectorDetail$ === "object");
assert(typeof ConnectorEntity$ === "object");
assert(typeof ConnectorEntityField$ === "object");
assert(typeof ConnectorMetadata$ === "object");
assert(typeof ConnectorOAuthRequest$ === "object");
assert(typeof ConnectorOperator$ === "object");
assert(typeof ConnectorProfile$ === "object");
assert(typeof ConnectorProfileConfig$ === "object");
assert(typeof ConnectorProfileCredentials$ === "object");
assert(typeof ConnectorProfileProperties$ === "object");
assert(typeof ConnectorProvisioningConfig$ === "object");
assert(typeof ConnectorRuntimeSetting$ === "object");
assert(typeof CreateConnectorProfileRequest$ === "object");
assert(typeof CreateConnectorProfileResponse$ === "object");
assert(typeof CreateFlowRequest$ === "object");
assert(typeof CreateFlowResponse$ === "object");
assert(typeof CustomAuthConfig$ === "object");
assert(typeof CustomAuthCredentials$ === "object");
assert(typeof CustomConnectorDestinationProperties$ === "object");
assert(typeof CustomConnectorProfileCredentials$ === "object");
assert(typeof CustomConnectorProfileProperties$ === "object");
assert(typeof CustomConnectorSourceProperties$ === "object");
assert(typeof CustomerProfilesDestinationProperties$ === "object");
assert(typeof CustomerProfilesMetadata$ === "object");
assert(typeof DatadogConnectorProfileCredentials$ === "object");
assert(typeof DatadogConnectorProfileProperties$ === "object");
assert(typeof DatadogMetadata$ === "object");
assert(typeof DatadogSourceProperties$ === "object");
assert(typeof DataTransferApi$ === "object");
assert(typeof DeleteConnectorProfileRequest$ === "object");
assert(typeof DeleteConnectorProfileResponse$ === "object");
assert(typeof DeleteFlowRequest$ === "object");
assert(typeof DeleteFlowResponse$ === "object");
assert(typeof DescribeConnectorEntityRequest$ === "object");
assert(typeof DescribeConnectorEntityResponse$ === "object");
assert(typeof DescribeConnectorProfilesRequest$ === "object");
assert(typeof DescribeConnectorProfilesResponse$ === "object");
assert(typeof DescribeConnectorRequest$ === "object");
assert(typeof DescribeConnectorResponse$ === "object");
assert(typeof DescribeConnectorsRequest$ === "object");
assert(typeof DescribeConnectorsResponse$ === "object");
assert(typeof DescribeFlowExecutionRecordsRequest$ === "object");
assert(typeof DescribeFlowExecutionRecordsResponse$ === "object");
assert(typeof DescribeFlowRequest$ === "object");
assert(typeof DescribeFlowResponse$ === "object");
assert(typeof DestinationConnectorProperties$ === "object");
assert(typeof DestinationFieldProperties$ === "object");
assert(typeof DestinationFlowConfig$ === "object");
assert(typeof DynatraceConnectorProfileCredentials$ === "object");
assert(typeof DynatraceConnectorProfileProperties$ === "object");
assert(typeof DynatraceMetadata$ === "object");
assert(typeof DynatraceSourceProperties$ === "object");
assert(typeof ErrorHandlingConfig$ === "object");
assert(typeof ErrorInfo$ === "object");
assert(typeof EventBridgeDestinationProperties$ === "object");
assert(typeof EventBridgeMetadata$ === "object");
assert(typeof ExecutionDetails$ === "object");
assert(typeof ExecutionRecord$ === "object");
assert(typeof ExecutionResult$ === "object");
assert(typeof FieldTypeDetails$ === "object");
assert(typeof FlowDefinition$ === "object");
assert(typeof GlueDataCatalogConfig$ === "object");
assert(typeof GoogleAnalyticsConnectorProfileCredentials$ === "object");
assert(typeof GoogleAnalyticsConnectorProfileProperties$ === "object");
assert(typeof GoogleAnalyticsMetadata$ === "object");
assert(typeof GoogleAnalyticsSourceProperties$ === "object");
assert(typeof HoneycodeConnectorProfileCredentials$ === "object");
assert(typeof HoneycodeConnectorProfileProperties$ === "object");
assert(typeof HoneycodeDestinationProperties$ === "object");
assert(typeof HoneycodeMetadata$ === "object");
assert(typeof IncrementalPullConfig$ === "object");
assert(typeof InforNexusConnectorProfileCredentials$ === "object");
assert(typeof InforNexusConnectorProfileProperties$ === "object");
assert(typeof InforNexusMetadata$ === "object");
assert(typeof InforNexusSourceProperties$ === "object");
assert(typeof LambdaConnectorProvisioningConfig$ === "object");
assert(typeof ListConnectorEntitiesRequest$ === "object");
assert(typeof ListConnectorEntitiesResponse$ === "object");
assert(typeof ListConnectorsRequest$ === "object");
assert(typeof ListConnectorsResponse$ === "object");
assert(typeof ListFlowsRequest$ === "object");
assert(typeof ListFlowsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LookoutMetricsDestinationProperties$ === "object");
assert(typeof MarketoConnectorProfileCredentials$ === "object");
assert(typeof MarketoConnectorProfileProperties$ === "object");
assert(typeof MarketoDestinationProperties$ === "object");
assert(typeof MarketoMetadata$ === "object");
assert(typeof MarketoSourceProperties$ === "object");
assert(typeof MetadataCatalogConfig$ === "object");
assert(typeof MetadataCatalogDetail$ === "object");
assert(typeof OAuth2Credentials$ === "object");
assert(typeof OAuth2CustomParameter$ === "object");
assert(typeof OAuth2Defaults$ === "object");
assert(typeof OAuth2Properties$ === "object");
assert(typeof OAuthCredentials$ === "object");
assert(typeof OAuthProperties$ === "object");
assert(typeof PardotConnectorProfileCredentials$ === "object");
assert(typeof PardotConnectorProfileProperties$ === "object");
assert(typeof PardotMetadata$ === "object");
assert(typeof PardotSourceProperties$ === "object");
assert(typeof PrefixConfig$ === "object");
assert(typeof PrivateConnectionProvisioningState$ === "object");
assert(typeof Range$ === "object");
assert(typeof RedshiftConnectorProfileCredentials$ === "object");
assert(typeof RedshiftConnectorProfileProperties$ === "object");
assert(typeof RedshiftDestinationProperties$ === "object");
assert(typeof RedshiftMetadata$ === "object");
assert(typeof RegisterConnectorRequest$ === "object");
assert(typeof RegisterConnectorResponse$ === "object");
assert(typeof RegistrationOutput$ === "object");
assert(typeof ResetConnectorMetadataCacheRequest$ === "object");
assert(typeof ResetConnectorMetadataCacheResponse$ === "object");
assert(typeof S3DestinationProperties$ === "object");
assert(typeof S3InputFormatConfig$ === "object");
assert(typeof S3Metadata$ === "object");
assert(typeof S3OutputFormatConfig$ === "object");
assert(typeof S3SourceProperties$ === "object");
assert(typeof SalesforceConnectorProfileCredentials$ === "object");
assert(typeof SalesforceConnectorProfileProperties$ === "object");
assert(typeof SalesforceDestinationProperties$ === "object");
assert(typeof SalesforceMetadata$ === "object");
assert(typeof SalesforceSourceProperties$ === "object");
assert(typeof SAPODataConnectorProfileCredentials$ === "object");
assert(typeof SAPODataConnectorProfileProperties$ === "object");
assert(typeof SAPODataDestinationProperties$ === "object");
assert(typeof SAPODataMetadata$ === "object");
assert(typeof SAPODataPaginationConfig$ === "object");
assert(typeof SAPODataParallelismConfig$ === "object");
assert(typeof SAPODataSourceProperties$ === "object");
assert(typeof ScheduledTriggerProperties$ === "object");
assert(typeof ServiceNowConnectorProfileCredentials$ === "object");
assert(typeof ServiceNowConnectorProfileProperties$ === "object");
assert(typeof ServiceNowMetadata$ === "object");
assert(typeof ServiceNowSourceProperties$ === "object");
assert(typeof SingularConnectorProfileCredentials$ === "object");
assert(typeof SingularConnectorProfileProperties$ === "object");
assert(typeof SingularMetadata$ === "object");
assert(typeof SingularSourceProperties$ === "object");
assert(typeof SlackConnectorProfileCredentials$ === "object");
assert(typeof SlackConnectorProfileProperties$ === "object");
assert(typeof SlackMetadata$ === "object");
assert(typeof SlackSourceProperties$ === "object");
assert(typeof SnowflakeConnectorProfileCredentials$ === "object");
assert(typeof SnowflakeConnectorProfileProperties$ === "object");
assert(typeof SnowflakeDestinationProperties$ === "object");
assert(typeof SnowflakeMetadata$ === "object");
assert(typeof SourceConnectorProperties$ === "object");
assert(typeof SourceFieldProperties$ === "object");
assert(typeof SourceFlowConfig$ === "object");
assert(typeof StartFlowRequest$ === "object");
assert(typeof StartFlowResponse$ === "object");
assert(typeof StopFlowRequest$ === "object");
assert(typeof StopFlowResponse$ === "object");
assert(typeof SuccessResponseHandlingConfig$ === "object");
assert(typeof SupportedFieldTypeDetails$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof Task$ === "object");
assert(typeof TrendmicroConnectorProfileCredentials$ === "object");
assert(typeof TrendmicroConnectorProfileProperties$ === "object");
assert(typeof TrendmicroMetadata$ === "object");
assert(typeof TrendmicroSourceProperties$ === "object");
assert(typeof TriggerConfig$ === "object");
assert(typeof TriggerProperties$ === "object");
assert(typeof UnregisterConnectorRequest$ === "object");
assert(typeof UnregisterConnectorResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateConnectorProfileRequest$ === "object");
assert(typeof UpdateConnectorProfileResponse$ === "object");
assert(typeof UpdateConnectorRegistrationRequest$ === "object");
assert(typeof UpdateConnectorRegistrationResponse$ === "object");
assert(typeof UpdateFlowRequest$ === "object");
assert(typeof UpdateFlowResponse$ === "object");
assert(typeof UpsolverDestinationProperties$ === "object");
assert(typeof UpsolverMetadata$ === "object");
assert(typeof UpsolverS3OutputFormatConfig$ === "object");
assert(typeof VeevaConnectorProfileCredentials$ === "object");
assert(typeof VeevaConnectorProfileProperties$ === "object");
assert(typeof VeevaMetadata$ === "object");
assert(typeof VeevaSourceProperties$ === "object");
assert(typeof ZendeskConnectorProfileCredentials$ === "object");
assert(typeof ZendeskConnectorProfileProperties$ === "object");
assert(typeof ZendeskDestinationProperties$ === "object");
assert(typeof ZendeskMetadata$ === "object");
assert(typeof ZendeskSourceProperties$ === "object");
// enums
assert(typeof AggregationType === "object");
assert(typeof AmplitudeConnectorOperator === "object");
assert(typeof AuthenticationType === "object");
assert(typeof CatalogType === "object");
assert(typeof ConnectionMode === "object");
assert(typeof ConnectorProvisioningType === "object");
assert(typeof ConnectorType === "object");
assert(typeof DatadogConnectorOperator === "object");
assert(typeof DataPullMode === "object");
assert(typeof DataTransferApiType === "object");
assert(typeof DynatraceConnectorOperator === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof FileType === "object");
assert(typeof FlowStatus === "object");
assert(typeof GoogleAnalyticsConnectorOperator === "object");
assert(typeof InforNexusConnectorOperator === "object");
assert(typeof MarketoConnectorOperator === "object");
assert(typeof OAuth2CustomPropType === "object");
assert(typeof OAuth2GrantType === "object");
assert(typeof Operator === "object");
assert(typeof OperatorPropertiesKeys === "object");
assert(typeof Operators === "object");
assert(typeof PardotConnectorOperator === "object");
assert(typeof PathPrefix === "object");
assert(typeof PrefixFormat === "object");
assert(typeof PrefixType === "object");
assert(typeof PrivateConnectionProvisioningFailureCause === "object");
assert(typeof PrivateConnectionProvisioningStatus === "object");
assert(typeof S3ConnectorOperator === "object");
assert(typeof S3InputFileType === "object");
assert(typeof SalesforceConnectorOperator === "object");
assert(typeof SalesforceDataTransferApi === "object");
assert(typeof SAPODataConnectorOperator === "object");
assert(typeof ScheduleFrequencyType === "object");
assert(typeof ServiceNowConnectorOperator === "object");
assert(typeof SingularConnectorOperator === "object");
assert(typeof SlackConnectorOperator === "object");
assert(typeof SupportedDataTransferType === "object");
assert(typeof TaskType === "object");
assert(typeof TrendmicroConnectorOperator === "object");
assert(typeof TriggerType === "object");
assert(typeof VeevaConnectorOperator === "object");
assert(typeof WriteOperationType === "object");
assert(typeof ZendeskConnectorOperator === "object");
// errors
assert(AccessDeniedException.prototype instanceof AppflowServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AppflowServiceException);
assert(typeof ConflictException$ === "object");
assert(ConnectorAuthenticationException.prototype instanceof AppflowServiceException);
assert(typeof ConnectorAuthenticationException$ === "object");
assert(ConnectorServerException.prototype instanceof AppflowServiceException);
assert(typeof ConnectorServerException$ === "object");
assert(InternalServerException.prototype instanceof AppflowServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppflowServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof AppflowServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof AppflowServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnsupportedOperationException.prototype instanceof AppflowServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(ValidationException.prototype instanceof AppflowServiceException);
assert(typeof ValidationException$ === "object");
assert(AppflowServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeConnectorProfiles === "function");
assert(typeof paginateDescribeConnectors === "function");
assert(typeof paginateDescribeFlowExecutionRecords === "function");
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListFlows === "function");
console.log(`Appflow index test passed.`);
