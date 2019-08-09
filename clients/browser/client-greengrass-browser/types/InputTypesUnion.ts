import { AssociateRoleToGroupInput } from "./AssociateRoleToGroupInput";
import { AssociateServiceRoleToAccountInput } from "./AssociateServiceRoleToAccountInput";
import { CreateConnectorDefinitionInput } from "./CreateConnectorDefinitionInput";
import { CreateConnectorDefinitionVersionInput } from "./CreateConnectorDefinitionVersionInput";
import { CreateCoreDefinitionInput } from "./CreateCoreDefinitionInput";
import { CreateCoreDefinitionVersionInput } from "./CreateCoreDefinitionVersionInput";
import { CreateDeploymentInput } from "./CreateDeploymentInput";
import { CreateDeviceDefinitionInput } from "./CreateDeviceDefinitionInput";
import { CreateDeviceDefinitionVersionInput } from "./CreateDeviceDefinitionVersionInput";
import { CreateFunctionDefinitionInput } from "./CreateFunctionDefinitionInput";
import { CreateFunctionDefinitionVersionInput } from "./CreateFunctionDefinitionVersionInput";
import { CreateGroupInput } from "./CreateGroupInput";
import { CreateGroupCertificateAuthorityInput } from "./CreateGroupCertificateAuthorityInput";
import { CreateGroupVersionInput } from "./CreateGroupVersionInput";
import { CreateLoggerDefinitionInput } from "./CreateLoggerDefinitionInput";
import { CreateLoggerDefinitionVersionInput } from "./CreateLoggerDefinitionVersionInput";
import { CreateResourceDefinitionInput } from "./CreateResourceDefinitionInput";
import { CreateResourceDefinitionVersionInput } from "./CreateResourceDefinitionVersionInput";
import { CreateSoftwareUpdateJobInput } from "./CreateSoftwareUpdateJobInput";
import { CreateSubscriptionDefinitionInput } from "./CreateSubscriptionDefinitionInput";
import { CreateSubscriptionDefinitionVersionInput } from "./CreateSubscriptionDefinitionVersionInput";
import { DeleteConnectorDefinitionInput } from "./DeleteConnectorDefinitionInput";
import { DeleteCoreDefinitionInput } from "./DeleteCoreDefinitionInput";
import { DeleteDeviceDefinitionInput } from "./DeleteDeviceDefinitionInput";
import { DeleteFunctionDefinitionInput } from "./DeleteFunctionDefinitionInput";
import { DeleteGroupInput } from "./DeleteGroupInput";
import { DeleteLoggerDefinitionInput } from "./DeleteLoggerDefinitionInput";
import { DeleteResourceDefinitionInput } from "./DeleteResourceDefinitionInput";
import { DeleteSubscriptionDefinitionInput } from "./DeleteSubscriptionDefinitionInput";
import { DisassociateRoleFromGroupInput } from "./DisassociateRoleFromGroupInput";
import { DisassociateServiceRoleFromAccountInput } from "./DisassociateServiceRoleFromAccountInput";
import { GetAssociatedRoleInput } from "./GetAssociatedRoleInput";
import { GetBulkDeploymentStatusInput } from "./GetBulkDeploymentStatusInput";
import { GetConnectivityInfoInput } from "./GetConnectivityInfoInput";
import { GetConnectorDefinitionInput } from "./GetConnectorDefinitionInput";
import { GetConnectorDefinitionVersionInput } from "./GetConnectorDefinitionVersionInput";
import { GetCoreDefinitionInput } from "./GetCoreDefinitionInput";
import { GetCoreDefinitionVersionInput } from "./GetCoreDefinitionVersionInput";
import { GetDeploymentStatusInput } from "./GetDeploymentStatusInput";
import { GetDeviceDefinitionInput } from "./GetDeviceDefinitionInput";
import { GetDeviceDefinitionVersionInput } from "./GetDeviceDefinitionVersionInput";
import { GetFunctionDefinitionInput } from "./GetFunctionDefinitionInput";
import { GetFunctionDefinitionVersionInput } from "./GetFunctionDefinitionVersionInput";
import { GetGroupInput } from "./GetGroupInput";
import { GetGroupCertificateAuthorityInput } from "./GetGroupCertificateAuthorityInput";
import { GetGroupCertificateConfigurationInput } from "./GetGroupCertificateConfigurationInput";
import { GetGroupVersionInput } from "./GetGroupVersionInput";
import { GetLoggerDefinitionInput } from "./GetLoggerDefinitionInput";
import { GetLoggerDefinitionVersionInput } from "./GetLoggerDefinitionVersionInput";
import { GetResourceDefinitionInput } from "./GetResourceDefinitionInput";
import { GetResourceDefinitionVersionInput } from "./GetResourceDefinitionVersionInput";
import { GetServiceRoleForAccountInput } from "./GetServiceRoleForAccountInput";
import { GetSubscriptionDefinitionInput } from "./GetSubscriptionDefinitionInput";
import { GetSubscriptionDefinitionVersionInput } from "./GetSubscriptionDefinitionVersionInput";
import { ListBulkDeploymentDetailedReportsInput } from "./ListBulkDeploymentDetailedReportsInput";
import { ListBulkDeploymentsInput } from "./ListBulkDeploymentsInput";
import { ListConnectorDefinitionVersionsInput } from "./ListConnectorDefinitionVersionsInput";
import { ListConnectorDefinitionsInput } from "./ListConnectorDefinitionsInput";
import { ListCoreDefinitionVersionsInput } from "./ListCoreDefinitionVersionsInput";
import { ListCoreDefinitionsInput } from "./ListCoreDefinitionsInput";
import { ListDeploymentsInput } from "./ListDeploymentsInput";
import { ListDeviceDefinitionVersionsInput } from "./ListDeviceDefinitionVersionsInput";
import { ListDeviceDefinitionsInput } from "./ListDeviceDefinitionsInput";
import { ListFunctionDefinitionVersionsInput } from "./ListFunctionDefinitionVersionsInput";
import { ListFunctionDefinitionsInput } from "./ListFunctionDefinitionsInput";
import { ListGroupCertificateAuthoritiesInput } from "./ListGroupCertificateAuthoritiesInput";
import { ListGroupVersionsInput } from "./ListGroupVersionsInput";
import { ListGroupsInput } from "./ListGroupsInput";
import { ListLoggerDefinitionVersionsInput } from "./ListLoggerDefinitionVersionsInput";
import { ListLoggerDefinitionsInput } from "./ListLoggerDefinitionsInput";
import { ListResourceDefinitionVersionsInput } from "./ListResourceDefinitionVersionsInput";
import { ListResourceDefinitionsInput } from "./ListResourceDefinitionsInput";
import { ListSubscriptionDefinitionVersionsInput } from "./ListSubscriptionDefinitionVersionsInput";
import { ListSubscriptionDefinitionsInput } from "./ListSubscriptionDefinitionsInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ResetDeploymentsInput } from "./ResetDeploymentsInput";
import { StartBulkDeploymentInput } from "./StartBulkDeploymentInput";
import { StopBulkDeploymentInput } from "./StopBulkDeploymentInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateConnectivityInfoInput } from "./UpdateConnectivityInfoInput";
import { UpdateConnectorDefinitionInput } from "./UpdateConnectorDefinitionInput";
import { UpdateCoreDefinitionInput } from "./UpdateCoreDefinitionInput";
import { UpdateDeviceDefinitionInput } from "./UpdateDeviceDefinitionInput";
import { UpdateFunctionDefinitionInput } from "./UpdateFunctionDefinitionInput";
import { UpdateGroupInput } from "./UpdateGroupInput";
import { UpdateGroupCertificateConfigurationInput } from "./UpdateGroupCertificateConfigurationInput";
import { UpdateLoggerDefinitionInput } from "./UpdateLoggerDefinitionInput";
import { UpdateResourceDefinitionInput } from "./UpdateResourceDefinitionInput";
import { UpdateSubscriptionDefinitionInput } from "./UpdateSubscriptionDefinitionInput";
export type InputTypesUnion =
  | AssociateRoleToGroupInput
  | AssociateServiceRoleToAccountInput
  | CreateConnectorDefinitionInput
  | CreateConnectorDefinitionVersionInput
  | CreateCoreDefinitionInput
  | CreateCoreDefinitionVersionInput
  | CreateDeploymentInput
  | CreateDeviceDefinitionInput
  | CreateDeviceDefinitionVersionInput
  | CreateFunctionDefinitionInput
  | CreateFunctionDefinitionVersionInput
  | CreateGroupInput
  | CreateGroupCertificateAuthorityInput
  | CreateGroupVersionInput
  | CreateLoggerDefinitionInput
  | CreateLoggerDefinitionVersionInput
  | CreateResourceDefinitionInput
  | CreateResourceDefinitionVersionInput
  | CreateSoftwareUpdateJobInput
  | CreateSubscriptionDefinitionInput
  | CreateSubscriptionDefinitionVersionInput
  | DeleteConnectorDefinitionInput
  | DeleteCoreDefinitionInput
  | DeleteDeviceDefinitionInput
  | DeleteFunctionDefinitionInput
  | DeleteGroupInput
  | DeleteLoggerDefinitionInput
  | DeleteResourceDefinitionInput
  | DeleteSubscriptionDefinitionInput
  | DisassociateRoleFromGroupInput
  | DisassociateServiceRoleFromAccountInput
  | GetAssociatedRoleInput
  | GetBulkDeploymentStatusInput
  | GetConnectivityInfoInput
  | GetConnectorDefinitionInput
  | GetConnectorDefinitionVersionInput
  | GetCoreDefinitionInput
  | GetCoreDefinitionVersionInput
  | GetDeploymentStatusInput
  | GetDeviceDefinitionInput
  | GetDeviceDefinitionVersionInput
  | GetFunctionDefinitionInput
  | GetFunctionDefinitionVersionInput
  | GetGroupInput
  | GetGroupCertificateAuthorityInput
  | GetGroupCertificateConfigurationInput
  | GetGroupVersionInput
  | GetLoggerDefinitionInput
  | GetLoggerDefinitionVersionInput
  | GetResourceDefinitionInput
  | GetResourceDefinitionVersionInput
  | GetServiceRoleForAccountInput
  | GetSubscriptionDefinitionInput
  | GetSubscriptionDefinitionVersionInput
  | ListBulkDeploymentDetailedReportsInput
  | ListBulkDeploymentsInput
  | ListConnectorDefinitionVersionsInput
  | ListConnectorDefinitionsInput
  | ListCoreDefinitionVersionsInput
  | ListCoreDefinitionsInput
  | ListDeploymentsInput
  | ListDeviceDefinitionVersionsInput
  | ListDeviceDefinitionsInput
  | ListFunctionDefinitionVersionsInput
  | ListFunctionDefinitionsInput
  | ListGroupCertificateAuthoritiesInput
  | ListGroupVersionsInput
  | ListGroupsInput
  | ListLoggerDefinitionVersionsInput
  | ListLoggerDefinitionsInput
  | ListResourceDefinitionVersionsInput
  | ListResourceDefinitionsInput
  | ListSubscriptionDefinitionVersionsInput
  | ListSubscriptionDefinitionsInput
  | ListTagsForResourceInput
  | ResetDeploymentsInput
  | StartBulkDeploymentInput
  | StopBulkDeploymentInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateConnectivityInfoInput
  | UpdateConnectorDefinitionInput
  | UpdateCoreDefinitionInput
  | UpdateDeviceDefinitionInput
  | UpdateFunctionDefinitionInput
  | UpdateGroupInput
  | UpdateGroupCertificateConfigurationInput
  | UpdateLoggerDefinitionInput
  | UpdateResourceDefinitionInput
  | UpdateSubscriptionDefinitionInput;
