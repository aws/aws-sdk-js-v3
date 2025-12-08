import {
  AccessDeniedException,
  AggregationType,
  AmplitudeConnectorOperator,
  Appflow,
  AppflowClient,
  AppflowServiceException,
  AuthenticationType,
  CancelFlowExecutionsCommand,
  CatalogType,
  ConflictException,
  ConnectionMode,
  ConnectorAuthenticationException,
  ConnectorProvisioningType,
  ConnectorServerException,
  ConnectorType,
  CreateConnectorProfileCommand,
  CreateFlowCommand,
  DataPullMode,
  DataTransferApiType,
  DatadogConnectorOperator,
  DeleteConnectorProfileCommand,
  DeleteFlowCommand,
  DescribeConnectorCommand,
  DescribeConnectorEntityCommand,
  DescribeConnectorProfilesCommand,
  DescribeConnectorsCommand,
  DescribeFlowCommand,
  DescribeFlowExecutionRecordsCommand,
  DynatraceConnectorOperator,
  ExecutionStatus,
  FileType,
  FlowStatus,
  GoogleAnalyticsConnectorOperator,
  InforNexusConnectorOperator,
  InternalServerException,
  ListConnectorEntitiesCommand,
  ListConnectorsCommand,
  ListFlowsCommand,
  ListTagsForResourceCommand,
  MarketoConnectorOperator,
  OAuth2CustomPropType,
  OAuth2GrantType,
  Operator,
  OperatorPropertiesKeys,
  Operators,
  PardotConnectorOperator,
  PathPrefix,
  PrefixFormat,
  PrefixType,
  PrivateConnectionProvisioningFailureCause,
  PrivateConnectionProvisioningStatus,
  RegisterConnectorCommand,
  ResetConnectorMetadataCacheCommand,
  ResourceNotFoundException,
  S3ConnectorOperator,
  S3InputFileType,
  SAPODataConnectorOperator,
  SalesforceConnectorOperator,
  SalesforceDataTransferApi,
  ScheduleFrequencyType,
  ServiceNowConnectorOperator,
  ServiceQuotaExceededException,
  SingularConnectorOperator,
  SlackConnectorOperator,
  StartFlowCommand,
  StopFlowCommand,
  SupportedDataTransferType,
  TagResourceCommand,
  TaskType,
  ThrottlingException,
  TrendmicroConnectorOperator,
  TriggerType,
  UnregisterConnectorCommand,
  UnsupportedOperationException,
  UntagResourceCommand,
  UpdateConnectorProfileCommand,
  UpdateConnectorRegistrationCommand,
  UpdateFlowCommand,
  ValidationException,
  VeevaConnectorOperator,
  WriteOperationType,
  ZendeskConnectorOperator,
  paginateDescribeConnectorProfiles,
  paginateDescribeConnectors,
  paginateDescribeFlowExecutionRecords,
  paginateListConnectors,
  paginateListFlows,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppflowClient === "function");
assert(typeof Appflow === "function");
// commands
assert(typeof CancelFlowExecutionsCommand === "function");
assert(typeof CreateConnectorProfileCommand === "function");
assert(typeof CreateFlowCommand === "function");
assert(typeof DeleteConnectorProfileCommand === "function");
assert(typeof DeleteFlowCommand === "function");
assert(typeof DescribeConnectorCommand === "function");
assert(typeof DescribeConnectorEntityCommand === "function");
assert(typeof DescribeConnectorProfilesCommand === "function");
assert(typeof DescribeConnectorsCommand === "function");
assert(typeof DescribeFlowCommand === "function");
assert(typeof DescribeFlowExecutionRecordsCommand === "function");
assert(typeof ListConnectorEntitiesCommand === "function");
assert(typeof ListConnectorsCommand === "function");
assert(typeof ListFlowsCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterConnectorCommand === "function");
assert(typeof ResetConnectorMetadataCacheCommand === "function");
assert(typeof StartFlowCommand === "function");
assert(typeof StopFlowCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UnregisterConnectorCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateConnectorProfileCommand === "function");
assert(typeof UpdateConnectorRegistrationCommand === "function");
assert(typeof UpdateFlowCommand === "function");
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
assert(ConflictException.prototype instanceof AppflowServiceException);
assert(ConnectorAuthenticationException.prototype instanceof AppflowServiceException);
assert(ConnectorServerException.prototype instanceof AppflowServiceException);
assert(InternalServerException.prototype instanceof AppflowServiceException);
assert(ResourceNotFoundException.prototype instanceof AppflowServiceException);
assert(ServiceQuotaExceededException.prototype instanceof AppflowServiceException);
assert(ThrottlingException.prototype instanceof AppflowServiceException);
assert(UnsupportedOperationException.prototype instanceof AppflowServiceException);
assert(ValidationException.prototype instanceof AppflowServiceException);
assert(AppflowServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeConnectorProfiles === "function");
assert(typeof paginateDescribeConnectors === "function");
assert(typeof paginateDescribeFlowExecutionRecords === "function");
assert(typeof paginateListConnectors === "function");
assert(typeof paginateListFlows === "function");
console.log(`Appflow index test passed.`);
