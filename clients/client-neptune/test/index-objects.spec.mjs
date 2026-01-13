import {
  AddRoleToDBCluster$,
  AddRoleToDBClusterCommand,
  AddRoleToDBClusterMessage$,
  AddSourceIdentifierToSubscription$,
  AddSourceIdentifierToSubscriptionCommand,
  AddSourceIdentifierToSubscriptionMessage$,
  AddSourceIdentifierToSubscriptionResult$,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceMessage$,
  ApplyMethod,
  ApplyPendingMaintenanceAction$,
  ApplyPendingMaintenanceActionCommand,
  ApplyPendingMaintenanceActionMessage$,
  ApplyPendingMaintenanceActionResult$,
  AuthorizationNotFoundFault,
  AuthorizationNotFoundFault$,
  AvailabilityZone$,
  CertificateNotFoundFault,
  CertificateNotFoundFault$,
  CharacterSet$,
  CloudwatchLogsExportConfiguration$,
  ClusterPendingModifiedValues$,
  CopyDBClusterParameterGroup$,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterParameterGroupMessage$,
  CopyDBClusterParameterGroupResult$,
  CopyDBClusterSnapshot$,
  CopyDBClusterSnapshotCommand,
  CopyDBClusterSnapshotMessage$,
  CopyDBClusterSnapshotResult$,
  CopyDBParameterGroup$,
  CopyDBParameterGroupCommand,
  CopyDBParameterGroupMessage$,
  CopyDBParameterGroupResult$,
  CreateDBCluster$,
  CreateDBClusterCommand,
  CreateDBClusterEndpoint$,
  CreateDBClusterEndpointCommand,
  CreateDBClusterEndpointMessage$,
  CreateDBClusterEndpointOutput$,
  CreateDBClusterMessage$,
  CreateDBClusterParameterGroup$,
  CreateDBClusterParameterGroupCommand,
  CreateDBClusterParameterGroupMessage$,
  CreateDBClusterParameterGroupResult$,
  CreateDBClusterResult$,
  CreateDBClusterSnapshot$,
  CreateDBClusterSnapshotCommand,
  CreateDBClusterSnapshotMessage$,
  CreateDBClusterSnapshotResult$,
  CreateDBInstance$,
  CreateDBInstanceCommand,
  CreateDBInstanceMessage$,
  CreateDBInstanceResult$,
  CreateDBParameterGroup$,
  CreateDBParameterGroupCommand,
  CreateDBParameterGroupMessage$,
  CreateDBParameterGroupResult$,
  CreateDBSubnetGroup$,
  CreateDBSubnetGroupCommand,
  CreateDBSubnetGroupMessage$,
  CreateDBSubnetGroupResult$,
  CreateEventSubscription$,
  CreateEventSubscriptionCommand,
  CreateEventSubscriptionMessage$,
  CreateEventSubscriptionResult$,
  CreateGlobalCluster$,
  CreateGlobalClusterCommand,
  CreateGlobalClusterMessage$,
  CreateGlobalClusterResult$,
  DBCluster$,
  DBClusterAlreadyExistsFault,
  DBClusterAlreadyExistsFault$,
  DBClusterEndpoint$,
  DBClusterEndpointAlreadyExistsFault,
  DBClusterEndpointAlreadyExistsFault$,
  DBClusterEndpointMessage$,
  DBClusterEndpointNotFoundFault,
  DBClusterEndpointNotFoundFault$,
  DBClusterEndpointQuotaExceededFault,
  DBClusterEndpointQuotaExceededFault$,
  DBClusterMember$,
  DBClusterMessage$,
  DBClusterNotFoundFault,
  DBClusterNotFoundFault$,
  DBClusterOptionGroupStatus$,
  DBClusterParameterGroup$,
  DBClusterParameterGroupDetails$,
  DBClusterParameterGroupNameMessage$,
  DBClusterParameterGroupNotFoundFault,
  DBClusterParameterGroupNotFoundFault$,
  DBClusterParameterGroupsMessage$,
  DBClusterQuotaExceededFault,
  DBClusterQuotaExceededFault$,
  DBClusterRole$,
  DBClusterRoleAlreadyExistsFault,
  DBClusterRoleAlreadyExistsFault$,
  DBClusterRoleNotFoundFault,
  DBClusterRoleNotFoundFault$,
  DBClusterRoleQuotaExceededFault,
  DBClusterRoleQuotaExceededFault$,
  DBClusterSnapshot$,
  DBClusterSnapshotAlreadyExistsFault,
  DBClusterSnapshotAlreadyExistsFault$,
  DBClusterSnapshotAttribute$,
  DBClusterSnapshotAttributesResult$,
  DBClusterSnapshotMessage$,
  DBClusterSnapshotNotFoundFault,
  DBClusterSnapshotNotFoundFault$,
  DBEngineVersion$,
  DBEngineVersionMessage$,
  DBInstance$,
  DBInstanceAlreadyExistsFault,
  DBInstanceAlreadyExistsFault$,
  DBInstanceMessage$,
  DBInstanceNotFoundFault,
  DBInstanceNotFoundFault$,
  DBInstanceStatusInfo$,
  DBParameterGroup$,
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupAlreadyExistsFault$,
  DBParameterGroupDetails$,
  DBParameterGroupNameMessage$,
  DBParameterGroupNotFoundFault,
  DBParameterGroupNotFoundFault$,
  DBParameterGroupQuotaExceededFault,
  DBParameterGroupQuotaExceededFault$,
  DBParameterGroupsMessage$,
  DBParameterGroupStatus$,
  DBSecurityGroupMembership$,
  DBSecurityGroupNotFoundFault,
  DBSecurityGroupNotFoundFault$,
  DBSnapshotAlreadyExistsFault,
  DBSnapshotAlreadyExistsFault$,
  DBSnapshotNotFoundFault,
  DBSnapshotNotFoundFault$,
  DBSubnetGroup$,
  DBSubnetGroupAlreadyExistsFault,
  DBSubnetGroupAlreadyExistsFault$,
  DBSubnetGroupDoesNotCoverEnoughAZs,
  DBSubnetGroupDoesNotCoverEnoughAZs$,
  DBSubnetGroupMessage$,
  DBSubnetGroupNotFoundFault,
  DBSubnetGroupNotFoundFault$,
  DBSubnetGroupQuotaExceededFault,
  DBSubnetGroupQuotaExceededFault$,
  DBSubnetQuotaExceededFault,
  DBSubnetQuotaExceededFault$,
  DBUpgradeDependencyFailureFault,
  DBUpgradeDependencyFailureFault$,
  DeleteDBCluster$,
  DeleteDBClusterCommand,
  DeleteDBClusterEndpoint$,
  DeleteDBClusterEndpointCommand,
  DeleteDBClusterEndpointMessage$,
  DeleteDBClusterEndpointOutput$,
  DeleteDBClusterMessage$,
  DeleteDBClusterParameterGroup$,
  DeleteDBClusterParameterGroupCommand,
  DeleteDBClusterParameterGroupMessage$,
  DeleteDBClusterResult$,
  DeleteDBClusterSnapshot$,
  DeleteDBClusterSnapshotCommand,
  DeleteDBClusterSnapshotMessage$,
  DeleteDBClusterSnapshotResult$,
  DeleteDBInstance$,
  DeleteDBInstanceCommand,
  DeleteDBInstanceMessage$,
  DeleteDBInstanceResult$,
  DeleteDBParameterGroup$,
  DeleteDBParameterGroupCommand,
  DeleteDBParameterGroupMessage$,
  DeleteDBSubnetGroup$,
  DeleteDBSubnetGroupCommand,
  DeleteDBSubnetGroupMessage$,
  DeleteEventSubscription$,
  DeleteEventSubscriptionCommand,
  DeleteEventSubscriptionMessage$,
  DeleteEventSubscriptionResult$,
  DeleteGlobalCluster$,
  DeleteGlobalClusterCommand,
  DeleteGlobalClusterMessage$,
  DeleteGlobalClusterResult$,
  DescribeDBClusterEndpoints$,
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsMessage$,
  DescribeDBClusterParameterGroups$,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsMessage$,
  DescribeDBClusterParameters$,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersMessage$,
  DescribeDBClusters$,
  DescribeDBClustersCommand,
  DescribeDBClustersMessage$,
  DescribeDBClusterSnapshotAttributes$,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotAttributesMessage$,
  DescribeDBClusterSnapshotAttributesResult$,
  DescribeDBClusterSnapshots$,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsMessage$,
  DescribeDBEngineVersions$,
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsMessage$,
  DescribeDBInstances$,
  DescribeDBInstancesCommand,
  DescribeDBInstancesMessage$,
  DescribeDBParameterGroups$,
  DescribeDBParameterGroupsCommand,
  DescribeDBParameterGroupsMessage$,
  DescribeDBParameters$,
  DescribeDBParametersCommand,
  DescribeDBParametersMessage$,
  DescribeDBSubnetGroups$,
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsMessage$,
  DescribeEngineDefaultClusterParameters$,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultClusterParametersMessage$,
  DescribeEngineDefaultClusterParametersResult$,
  DescribeEngineDefaultParameters$,
  DescribeEngineDefaultParametersCommand,
  DescribeEngineDefaultParametersMessage$,
  DescribeEngineDefaultParametersResult$,
  DescribeEventCategories$,
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesMessage$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeEventSubscriptions$,
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsMessage$,
  DescribeGlobalClusters$,
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersMessage$,
  DescribeOrderableDBInstanceOptions$,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsMessage$,
  DescribePendingMaintenanceActions$,
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsMessage$,
  DescribeValidDBInstanceModifications$,
  DescribeValidDBInstanceModificationsCommand,
  DescribeValidDBInstanceModificationsMessage$,
  DescribeValidDBInstanceModificationsResult$,
  DomainMembership$,
  DomainNotFoundFault,
  DomainNotFoundFault$,
  DoubleRange$,
  Endpoint$,
  EngineDefaults$,
  Event$,
  EventCategoriesMap$,
  EventCategoriesMessage$,
  EventsMessage$,
  EventSubscription$,
  EventSubscriptionQuotaExceededFault,
  EventSubscriptionQuotaExceededFault$,
  EventSubscriptionsMessage$,
  FailoverDBCluster$,
  FailoverDBClusterCommand,
  FailoverDBClusterMessage$,
  FailoverDBClusterResult$,
  FailoverGlobalCluster$,
  FailoverGlobalClusterCommand,
  FailoverGlobalClusterMessage$,
  FailoverGlobalClusterResult$,
  FailoverState$,
  FailoverStatus,
  Filter$,
  GlobalCluster$,
  GlobalClusterAlreadyExistsFault,
  GlobalClusterAlreadyExistsFault$,
  GlobalClusterMember$,
  GlobalClusterNotFoundFault,
  GlobalClusterNotFoundFault$,
  GlobalClusterQuotaExceededFault,
  GlobalClusterQuotaExceededFault$,
  GlobalClustersMessage$,
  InstanceQuotaExceededFault,
  InstanceQuotaExceededFault$,
  InsufficientDBClusterCapacityFault,
  InsufficientDBClusterCapacityFault$,
  InsufficientDBInstanceCapacityFault,
  InsufficientDBInstanceCapacityFault$,
  InsufficientStorageClusterCapacityFault,
  InsufficientStorageClusterCapacityFault$,
  InvalidDBClusterEndpointStateFault,
  InvalidDBClusterEndpointStateFault$,
  InvalidDBClusterSnapshotStateFault,
  InvalidDBClusterSnapshotStateFault$,
  InvalidDBClusterStateFault,
  InvalidDBClusterStateFault$,
  InvalidDBInstanceStateFault,
  InvalidDBInstanceStateFault$,
  InvalidDBParameterGroupStateFault,
  InvalidDBParameterGroupStateFault$,
  InvalidDBSecurityGroupStateFault,
  InvalidDBSecurityGroupStateFault$,
  InvalidDBSnapshotStateFault,
  InvalidDBSnapshotStateFault$,
  InvalidDBSubnetGroupStateFault,
  InvalidDBSubnetGroupStateFault$,
  InvalidDBSubnetStateFault,
  InvalidDBSubnetStateFault$,
  InvalidEventSubscriptionStateFault,
  InvalidEventSubscriptionStateFault$,
  InvalidGlobalClusterStateFault,
  InvalidGlobalClusterStateFault$,
  InvalidRestoreFault,
  InvalidRestoreFault$,
  InvalidSubnet,
  InvalidSubnet$,
  InvalidVPCNetworkStateFault,
  InvalidVPCNetworkStateFault$,
  KMSKeyNotAccessibleFault,
  KMSKeyNotAccessibleFault$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceMessage$,
  ModifyDBCluster$,
  ModifyDBClusterCommand,
  ModifyDBClusterEndpoint$,
  ModifyDBClusterEndpointCommand,
  ModifyDBClusterEndpointMessage$,
  ModifyDBClusterEndpointOutput$,
  ModifyDBClusterMessage$,
  ModifyDBClusterParameterGroup$,
  ModifyDBClusterParameterGroupCommand,
  ModifyDBClusterParameterGroupMessage$,
  ModifyDBClusterResult$,
  ModifyDBClusterSnapshotAttribute$,
  ModifyDBClusterSnapshotAttributeCommand,
  ModifyDBClusterSnapshotAttributeMessage$,
  ModifyDBClusterSnapshotAttributeResult$,
  ModifyDBInstance$,
  ModifyDBInstanceCommand,
  ModifyDBInstanceMessage$,
  ModifyDBInstanceResult$,
  ModifyDBParameterGroup$,
  ModifyDBParameterGroupCommand,
  ModifyDBParameterGroupMessage$,
  ModifyDBSubnetGroup$,
  ModifyDBSubnetGroupCommand,
  ModifyDBSubnetGroupMessage$,
  ModifyDBSubnetGroupResult$,
  ModifyEventSubscription$,
  ModifyEventSubscriptionCommand,
  ModifyEventSubscriptionMessage$,
  ModifyEventSubscriptionResult$,
  ModifyGlobalCluster$,
  ModifyGlobalClusterCommand,
  ModifyGlobalClusterMessage$,
  ModifyGlobalClusterResult$,
  Neptune,
  NeptuneClient,
  NeptuneServiceException,
  OptionGroupMembership$,
  OptionGroupNotFoundFault,
  OptionGroupNotFoundFault$,
  OrderableDBInstanceOption$,
  OrderableDBInstanceOptionsMessage$,
  paginateDescribeDBClusterEndpoints,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstances,
  paginateDescribeDBParameterGroups,
  paginateDescribeDBParameters,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEngineDefaultParameters,
  paginateDescribeEvents,
  paginateDescribeEventSubscriptions,
  paginateDescribeGlobalClusters,
  paginateDescribeOrderableDBInstanceOptions,
  paginateDescribePendingMaintenanceActions,
  Parameter$,
  PendingCloudwatchLogsExports$,
  PendingMaintenanceAction$,
  PendingMaintenanceActionsMessage$,
  PendingModifiedValues$,
  PromoteReadReplicaDBCluster$,
  PromoteReadReplicaDBClusterCommand,
  PromoteReadReplicaDBClusterMessage$,
  PromoteReadReplicaDBClusterResult$,
  ProvisionedIopsNotAvailableInAZFault,
  ProvisionedIopsNotAvailableInAZFault$,
  Range$,
  RebootDBInstance$,
  RebootDBInstanceCommand,
  RebootDBInstanceMessage$,
  RebootDBInstanceResult$,
  RemoveFromGlobalCluster$,
  RemoveFromGlobalClusterCommand,
  RemoveFromGlobalClusterMessage$,
  RemoveFromGlobalClusterResult$,
  RemoveRoleFromDBCluster$,
  RemoveRoleFromDBClusterCommand,
  RemoveRoleFromDBClusterMessage$,
  RemoveSourceIdentifierFromSubscription$,
  RemoveSourceIdentifierFromSubscriptionCommand,
  RemoveSourceIdentifierFromSubscriptionMessage$,
  RemoveSourceIdentifierFromSubscriptionResult$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceMessage$,
  ResetDBClusterParameterGroup$,
  ResetDBClusterParameterGroupCommand,
  ResetDBClusterParameterGroupMessage$,
  ResetDBParameterGroup$,
  ResetDBParameterGroupCommand,
  ResetDBParameterGroupMessage$,
  ResourceNotFoundFault,
  ResourceNotFoundFault$,
  ResourcePendingMaintenanceActions$,
  RestoreDBClusterFromSnapshot$,
  RestoreDBClusterFromSnapshotCommand,
  RestoreDBClusterFromSnapshotMessage$,
  RestoreDBClusterFromSnapshotResult$,
  RestoreDBClusterToPointInTime$,
  RestoreDBClusterToPointInTimeCommand,
  RestoreDBClusterToPointInTimeMessage$,
  RestoreDBClusterToPointInTimeResult$,
  ServerlessV2ScalingConfiguration$,
  ServerlessV2ScalingConfigurationInfo$,
  SharedSnapshotQuotaExceededFault,
  SharedSnapshotQuotaExceededFault$,
  SnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault$,
  SNSInvalidTopicFault,
  SNSInvalidTopicFault$,
  SNSNoAuthorizationFault,
  SNSNoAuthorizationFault$,
  SNSTopicArnNotFoundFault,
  SNSTopicArnNotFoundFault$,
  SourceNotFoundFault,
  SourceNotFoundFault$,
  SourceType,
  StartDBCluster$,
  StartDBClusterCommand,
  StartDBClusterMessage$,
  StartDBClusterResult$,
  StopDBCluster$,
  StopDBClusterCommand,
  StopDBClusterMessage$,
  StopDBClusterResult$,
  StorageQuotaExceededFault,
  StorageQuotaExceededFault$,
  StorageTypeNotSupportedFault,
  StorageTypeNotSupportedFault$,
  Subnet$,
  SubnetAlreadyInUse,
  SubnetAlreadyInUse$,
  SubscriptionAlreadyExistFault,
  SubscriptionAlreadyExistFault$,
  SubscriptionCategoryNotFoundFault,
  SubscriptionCategoryNotFoundFault$,
  SubscriptionNotFoundFault,
  SubscriptionNotFoundFault$,
  SwitchoverGlobalCluster$,
  SwitchoverGlobalClusterCommand,
  SwitchoverGlobalClusterMessage$,
  SwitchoverGlobalClusterResult$,
  Tag$,
  TagListMessage$,
  Timezone$,
  UpgradeTarget$,
  ValidDBInstanceModificationsMessage$,
  ValidStorageOptions$,
  VpcSecurityGroupMembership$,
  waitForDBInstanceAvailable,
  waitForDBInstanceDeleted,
  waitUntilDBInstanceAvailable,
  waitUntilDBInstanceDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof NeptuneClient === "function");
assert(typeof Neptune === "function");
// commands
assert(typeof AddRoleToDBClusterCommand === "function");
assert(typeof AddRoleToDBCluster$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionCommand === "function");
assert(typeof AddSourceIdentifierToSubscription$ === "object");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof ApplyPendingMaintenanceActionCommand === "function");
assert(typeof ApplyPendingMaintenanceAction$ === "object");
assert(typeof CopyDBClusterParameterGroupCommand === "function");
assert(typeof CopyDBClusterParameterGroup$ === "object");
assert(typeof CopyDBClusterSnapshotCommand === "function");
assert(typeof CopyDBClusterSnapshot$ === "object");
assert(typeof CopyDBParameterGroupCommand === "function");
assert(typeof CopyDBParameterGroup$ === "object");
assert(typeof CreateDBClusterCommand === "function");
assert(typeof CreateDBCluster$ === "object");
assert(typeof CreateDBClusterEndpointCommand === "function");
assert(typeof CreateDBClusterEndpoint$ === "object");
assert(typeof CreateDBClusterParameterGroupCommand === "function");
assert(typeof CreateDBClusterParameterGroup$ === "object");
assert(typeof CreateDBClusterSnapshotCommand === "function");
assert(typeof CreateDBClusterSnapshot$ === "object");
assert(typeof CreateDBInstanceCommand === "function");
assert(typeof CreateDBInstance$ === "object");
assert(typeof CreateDBParameterGroupCommand === "function");
assert(typeof CreateDBParameterGroup$ === "object");
assert(typeof CreateDBSubnetGroupCommand === "function");
assert(typeof CreateDBSubnetGroup$ === "object");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateEventSubscription$ === "object");
assert(typeof CreateGlobalClusterCommand === "function");
assert(typeof CreateGlobalCluster$ === "object");
assert(typeof DeleteDBClusterCommand === "function");
assert(typeof DeleteDBCluster$ === "object");
assert(typeof DeleteDBClusterEndpointCommand === "function");
assert(typeof DeleteDBClusterEndpoint$ === "object");
assert(typeof DeleteDBClusterParameterGroupCommand === "function");
assert(typeof DeleteDBClusterParameterGroup$ === "object");
assert(typeof DeleteDBClusterSnapshotCommand === "function");
assert(typeof DeleteDBClusterSnapshot$ === "object");
assert(typeof DeleteDBInstanceCommand === "function");
assert(typeof DeleteDBInstance$ === "object");
assert(typeof DeleteDBParameterGroupCommand === "function");
assert(typeof DeleteDBParameterGroup$ === "object");
assert(typeof DeleteDBSubnetGroupCommand === "function");
assert(typeof DeleteDBSubnetGroup$ === "object");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteEventSubscription$ === "object");
assert(typeof DeleteGlobalClusterCommand === "function");
assert(typeof DeleteGlobalCluster$ === "object");
assert(typeof DescribeDBClusterEndpointsCommand === "function");
assert(typeof DescribeDBClusterEndpoints$ === "object");
assert(typeof DescribeDBClusterParameterGroupsCommand === "function");
assert(typeof DescribeDBClusterParameterGroups$ === "object");
assert(typeof DescribeDBClusterParametersCommand === "function");
assert(typeof DescribeDBClusterParameters$ === "object");
assert(typeof DescribeDBClustersCommand === "function");
assert(typeof DescribeDBClusters$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesCommand === "function");
assert(typeof DescribeDBClusterSnapshotAttributes$ === "object");
assert(typeof DescribeDBClusterSnapshotsCommand === "function");
assert(typeof DescribeDBClusterSnapshots$ === "object");
assert(typeof DescribeDBEngineVersionsCommand === "function");
assert(typeof DescribeDBEngineVersions$ === "object");
assert(typeof DescribeDBInstancesCommand === "function");
assert(typeof DescribeDBInstances$ === "object");
assert(typeof DescribeDBParameterGroupsCommand === "function");
assert(typeof DescribeDBParameterGroups$ === "object");
assert(typeof DescribeDBParametersCommand === "function");
assert(typeof DescribeDBParameters$ === "object");
assert(typeof DescribeDBSubnetGroupsCommand === "function");
assert(typeof DescribeDBSubnetGroups$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function");
assert(typeof DescribeEngineDefaultClusterParameters$ === "object");
assert(typeof DescribeEngineDefaultParametersCommand === "function");
assert(typeof DescribeEngineDefaultParameters$ === "object");
assert(typeof DescribeEventCategoriesCommand === "function");
assert(typeof DescribeEventCategories$ === "object");
assert(typeof DescribeEventsCommand === "function");
assert(typeof DescribeEvents$ === "object");
assert(typeof DescribeEventSubscriptionsCommand === "function");
assert(typeof DescribeEventSubscriptions$ === "object");
assert(typeof DescribeGlobalClustersCommand === "function");
assert(typeof DescribeGlobalClusters$ === "object");
assert(typeof DescribeOrderableDBInstanceOptionsCommand === "function");
assert(typeof DescribeOrderableDBInstanceOptions$ === "object");
assert(typeof DescribePendingMaintenanceActionsCommand === "function");
assert(typeof DescribePendingMaintenanceActions$ === "object");
assert(typeof DescribeValidDBInstanceModificationsCommand === "function");
assert(typeof DescribeValidDBInstanceModifications$ === "object");
assert(typeof FailoverDBClusterCommand === "function");
assert(typeof FailoverDBCluster$ === "object");
assert(typeof FailoverGlobalClusterCommand === "function");
assert(typeof FailoverGlobalCluster$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyDBClusterCommand === "function");
assert(typeof ModifyDBCluster$ === "object");
assert(typeof ModifyDBClusterEndpointCommand === "function");
assert(typeof ModifyDBClusterEndpoint$ === "object");
assert(typeof ModifyDBClusterParameterGroupCommand === "function");
assert(typeof ModifyDBClusterParameterGroup$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function");
assert(typeof ModifyDBClusterSnapshotAttribute$ === "object");
assert(typeof ModifyDBInstanceCommand === "function");
assert(typeof ModifyDBInstance$ === "object");
assert(typeof ModifyDBParameterGroupCommand === "function");
assert(typeof ModifyDBParameterGroup$ === "object");
assert(typeof ModifyDBSubnetGroupCommand === "function");
assert(typeof ModifyDBSubnetGroup$ === "object");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyEventSubscription$ === "object");
assert(typeof ModifyGlobalClusterCommand === "function");
assert(typeof ModifyGlobalCluster$ === "object");
assert(typeof PromoteReadReplicaDBClusterCommand === "function");
assert(typeof PromoteReadReplicaDBCluster$ === "object");
assert(typeof RebootDBInstanceCommand === "function");
assert(typeof RebootDBInstance$ === "object");
assert(typeof RemoveFromGlobalClusterCommand === "function");
assert(typeof RemoveFromGlobalCluster$ === "object");
assert(typeof RemoveRoleFromDBClusterCommand === "function");
assert(typeof RemoveRoleFromDBCluster$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function");
assert(typeof RemoveSourceIdentifierFromSubscription$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetDBClusterParameterGroupCommand === "function");
assert(typeof ResetDBClusterParameterGroup$ === "object");
assert(typeof ResetDBParameterGroupCommand === "function");
assert(typeof ResetDBParameterGroup$ === "object");
assert(typeof RestoreDBClusterFromSnapshotCommand === "function");
assert(typeof RestoreDBClusterFromSnapshot$ === "object");
assert(typeof RestoreDBClusterToPointInTimeCommand === "function");
assert(typeof RestoreDBClusterToPointInTime$ === "object");
assert(typeof StartDBClusterCommand === "function");
assert(typeof StartDBCluster$ === "object");
assert(typeof StopDBClusterCommand === "function");
assert(typeof StopDBCluster$ === "object");
assert(typeof SwitchoverGlobalClusterCommand === "function");
assert(typeof SwitchoverGlobalCluster$ === "object");
// structural schemas
assert(typeof AddRoleToDBClusterMessage$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionMessage$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionResult$ === "object");
assert(typeof AddTagsToResourceMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionResult$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof CharacterSet$ === "object");
assert(typeof CloudwatchLogsExportConfiguration$ === "object");
assert(typeof ClusterPendingModifiedValues$ === "object");
assert(typeof CopyDBClusterParameterGroupMessage$ === "object");
assert(typeof CopyDBClusterParameterGroupResult$ === "object");
assert(typeof CopyDBClusterSnapshotMessage$ === "object");
assert(typeof CopyDBClusterSnapshotResult$ === "object");
assert(typeof CopyDBParameterGroupMessage$ === "object");
assert(typeof CopyDBParameterGroupResult$ === "object");
assert(typeof CreateDBClusterEndpointMessage$ === "object");
assert(typeof CreateDBClusterEndpointOutput$ === "object");
assert(typeof CreateDBClusterMessage$ === "object");
assert(typeof CreateDBClusterParameterGroupMessage$ === "object");
assert(typeof CreateDBClusterParameterGroupResult$ === "object");
assert(typeof CreateDBClusterResult$ === "object");
assert(typeof CreateDBClusterSnapshotMessage$ === "object");
assert(typeof CreateDBClusterSnapshotResult$ === "object");
assert(typeof CreateDBInstanceMessage$ === "object");
assert(typeof CreateDBInstanceResult$ === "object");
assert(typeof CreateDBParameterGroupMessage$ === "object");
assert(typeof CreateDBParameterGroupResult$ === "object");
assert(typeof CreateDBSubnetGroupMessage$ === "object");
assert(typeof CreateDBSubnetGroupResult$ === "object");
assert(typeof CreateEventSubscriptionMessage$ === "object");
assert(typeof CreateEventSubscriptionResult$ === "object");
assert(typeof CreateGlobalClusterMessage$ === "object");
assert(typeof CreateGlobalClusterResult$ === "object");
assert(typeof DBCluster$ === "object");
assert(typeof DBClusterEndpoint$ === "object");
assert(typeof DBClusterEndpointMessage$ === "object");
assert(typeof DBClusterMember$ === "object");
assert(typeof DBClusterMessage$ === "object");
assert(typeof DBClusterOptionGroupStatus$ === "object");
assert(typeof DBClusterParameterGroup$ === "object");
assert(typeof DBClusterParameterGroupDetails$ === "object");
assert(typeof DBClusterParameterGroupNameMessage$ === "object");
assert(typeof DBClusterParameterGroupsMessage$ === "object");
assert(typeof DBClusterRole$ === "object");
assert(typeof DBClusterSnapshot$ === "object");
assert(typeof DBClusterSnapshotAttribute$ === "object");
assert(typeof DBClusterSnapshotAttributesResult$ === "object");
assert(typeof DBClusterSnapshotMessage$ === "object");
assert(typeof DBEngineVersion$ === "object");
assert(typeof DBEngineVersionMessage$ === "object");
assert(typeof DBInstance$ === "object");
assert(typeof DBInstanceMessage$ === "object");
assert(typeof DBInstanceStatusInfo$ === "object");
assert(typeof DBParameterGroup$ === "object");
assert(typeof DBParameterGroupDetails$ === "object");
assert(typeof DBParameterGroupNameMessage$ === "object");
assert(typeof DBParameterGroupsMessage$ === "object");
assert(typeof DBParameterGroupStatus$ === "object");
assert(typeof DBSecurityGroupMembership$ === "object");
assert(typeof DBSubnetGroup$ === "object");
assert(typeof DBSubnetGroupMessage$ === "object");
assert(typeof DeleteDBClusterEndpointMessage$ === "object");
assert(typeof DeleteDBClusterEndpointOutput$ === "object");
assert(typeof DeleteDBClusterMessage$ === "object");
assert(typeof DeleteDBClusterParameterGroupMessage$ === "object");
assert(typeof DeleteDBClusterResult$ === "object");
assert(typeof DeleteDBClusterSnapshotMessage$ === "object");
assert(typeof DeleteDBClusterSnapshotResult$ === "object");
assert(typeof DeleteDBInstanceMessage$ === "object");
assert(typeof DeleteDBInstanceResult$ === "object");
assert(typeof DeleteDBParameterGroupMessage$ === "object");
assert(typeof DeleteDBSubnetGroupMessage$ === "object");
assert(typeof DeleteEventSubscriptionMessage$ === "object");
assert(typeof DeleteEventSubscriptionResult$ === "object");
assert(typeof DeleteGlobalClusterMessage$ === "object");
assert(typeof DeleteGlobalClusterResult$ === "object");
assert(typeof DescribeDBClusterEndpointsMessage$ === "object");
assert(typeof DescribeDBClusterParameterGroupsMessage$ === "object");
assert(typeof DescribeDBClusterParametersMessage$ === "object");
assert(typeof DescribeDBClustersMessage$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesMessage$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesResult$ === "object");
assert(typeof DescribeDBClusterSnapshotsMessage$ === "object");
assert(typeof DescribeDBEngineVersionsMessage$ === "object");
assert(typeof DescribeDBInstancesMessage$ === "object");
assert(typeof DescribeDBParameterGroupsMessage$ === "object");
assert(typeof DescribeDBParametersMessage$ === "object");
assert(typeof DescribeDBSubnetGroupsMessage$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersMessage$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersResult$ === "object");
assert(typeof DescribeEngineDefaultParametersMessage$ === "object");
assert(typeof DescribeEngineDefaultParametersResult$ === "object");
assert(typeof DescribeEventCategoriesMessage$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeEventSubscriptionsMessage$ === "object");
assert(typeof DescribeGlobalClustersMessage$ === "object");
assert(typeof DescribeOrderableDBInstanceOptionsMessage$ === "object");
assert(typeof DescribePendingMaintenanceActionsMessage$ === "object");
assert(typeof DescribeValidDBInstanceModificationsMessage$ === "object");
assert(typeof DescribeValidDBInstanceModificationsResult$ === "object");
assert(typeof DomainMembership$ === "object");
assert(typeof DoubleRange$ === "object");
assert(typeof Endpoint$ === "object");
assert(typeof EngineDefaults$ === "object");
assert(typeof Event$ === "object");
assert(typeof EventCategoriesMap$ === "object");
assert(typeof EventCategoriesMessage$ === "object");
assert(typeof EventsMessage$ === "object");
assert(typeof EventSubscription$ === "object");
assert(typeof EventSubscriptionsMessage$ === "object");
assert(typeof FailoverDBClusterMessage$ === "object");
assert(typeof FailoverDBClusterResult$ === "object");
assert(typeof FailoverGlobalClusterMessage$ === "object");
assert(typeof FailoverGlobalClusterResult$ === "object");
assert(typeof FailoverState$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GlobalCluster$ === "object");
assert(typeof GlobalClusterMember$ === "object");
assert(typeof GlobalClustersMessage$ === "object");
assert(typeof ListTagsForResourceMessage$ === "object");
assert(typeof ModifyDBClusterEndpointMessage$ === "object");
assert(typeof ModifyDBClusterEndpointOutput$ === "object");
assert(typeof ModifyDBClusterMessage$ === "object");
assert(typeof ModifyDBClusterParameterGroupMessage$ === "object");
assert(typeof ModifyDBClusterResult$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeMessage$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeResult$ === "object");
assert(typeof ModifyDBInstanceMessage$ === "object");
assert(typeof ModifyDBInstanceResult$ === "object");
assert(typeof ModifyDBParameterGroupMessage$ === "object");
assert(typeof ModifyDBSubnetGroupMessage$ === "object");
assert(typeof ModifyDBSubnetGroupResult$ === "object");
assert(typeof ModifyEventSubscriptionMessage$ === "object");
assert(typeof ModifyEventSubscriptionResult$ === "object");
assert(typeof ModifyGlobalClusterMessage$ === "object");
assert(typeof ModifyGlobalClusterResult$ === "object");
assert(typeof OptionGroupMembership$ === "object");
assert(typeof OrderableDBInstanceOption$ === "object");
assert(typeof OrderableDBInstanceOptionsMessage$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof PendingCloudwatchLogsExports$ === "object");
assert(typeof PendingMaintenanceAction$ === "object");
assert(typeof PendingMaintenanceActionsMessage$ === "object");
assert(typeof PendingModifiedValues$ === "object");
assert(typeof PromoteReadReplicaDBClusterMessage$ === "object");
assert(typeof PromoteReadReplicaDBClusterResult$ === "object");
assert(typeof Range$ === "object");
assert(typeof RebootDBInstanceMessage$ === "object");
assert(typeof RebootDBInstanceResult$ === "object");
assert(typeof RemoveFromGlobalClusterMessage$ === "object");
assert(typeof RemoveFromGlobalClusterResult$ === "object");
assert(typeof RemoveRoleFromDBClusterMessage$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionMessage$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionResult$ === "object");
assert(typeof RemoveTagsFromResourceMessage$ === "object");
assert(typeof ResetDBClusterParameterGroupMessage$ === "object");
assert(typeof ResetDBParameterGroupMessage$ === "object");
assert(typeof ResourcePendingMaintenanceActions$ === "object");
assert(typeof RestoreDBClusterFromSnapshotMessage$ === "object");
assert(typeof RestoreDBClusterFromSnapshotResult$ === "object");
assert(typeof RestoreDBClusterToPointInTimeMessage$ === "object");
assert(typeof RestoreDBClusterToPointInTimeResult$ === "object");
assert(typeof ServerlessV2ScalingConfiguration$ === "object");
assert(typeof ServerlessV2ScalingConfigurationInfo$ === "object");
assert(typeof StartDBClusterMessage$ === "object");
assert(typeof StartDBClusterResult$ === "object");
assert(typeof StopDBClusterMessage$ === "object");
assert(typeof StopDBClusterResult$ === "object");
assert(typeof Subnet$ === "object");
assert(typeof SwitchoverGlobalClusterMessage$ === "object");
assert(typeof SwitchoverGlobalClusterResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagListMessage$ === "object");
assert(typeof Timezone$ === "object");
assert(typeof UpgradeTarget$ === "object");
assert(typeof ValidDBInstanceModificationsMessage$ === "object");
assert(typeof ValidStorageOptions$ === "object");
assert(typeof VpcSecurityGroupMembership$ === "object");
// enums
assert(typeof ApplyMethod === "object");
assert(typeof FailoverStatus === "object");
assert(typeof SourceType === "object");
// errors
assert(AuthorizationNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof AuthorizationNotFoundFault$ === "object");
assert(CertificateNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof CertificateNotFoundFault$ === "object");
assert(DBClusterAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterAlreadyExistsFault$ === "object");
assert(DBClusterEndpointAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterEndpointAlreadyExistsFault$ === "object");
assert(DBClusterEndpointNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterEndpointNotFoundFault$ === "object");
assert(DBClusterEndpointQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterEndpointQuotaExceededFault$ === "object");
assert(DBClusterNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterNotFoundFault$ === "object");
assert(DBClusterParameterGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterParameterGroupNotFoundFault$ === "object");
assert(DBClusterQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterQuotaExceededFault$ === "object");
assert(DBClusterRoleAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterRoleAlreadyExistsFault$ === "object");
assert(DBClusterRoleNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterRoleNotFoundFault$ === "object");
assert(DBClusterRoleQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterRoleQuotaExceededFault$ === "object");
assert(DBClusterSnapshotAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterSnapshotAlreadyExistsFault$ === "object");
assert(DBClusterSnapshotNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBClusterSnapshotNotFoundFault$ === "object");
assert(DBInstanceAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBInstanceAlreadyExistsFault$ === "object");
assert(DBInstanceNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBInstanceNotFoundFault$ === "object");
assert(DBParameterGroupAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBParameterGroupAlreadyExistsFault$ === "object");
assert(DBParameterGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBParameterGroupNotFoundFault$ === "object");
assert(DBParameterGroupQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof DBParameterGroupQuotaExceededFault$ === "object");
assert(DBSecurityGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSecurityGroupNotFoundFault$ === "object");
assert(DBSnapshotAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSnapshotAlreadyExistsFault$ === "object");
assert(DBSnapshotNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSnapshotNotFoundFault$ === "object");
assert(DBSubnetGroupAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSubnetGroupAlreadyExistsFault$ === "object");
assert(DBSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof NeptuneServiceException);
assert(typeof DBSubnetGroupDoesNotCoverEnoughAZs$ === "object");
assert(DBSubnetGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSubnetGroupNotFoundFault$ === "object");
assert(DBSubnetGroupQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSubnetGroupQuotaExceededFault$ === "object");
assert(DBSubnetQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof DBSubnetQuotaExceededFault$ === "object");
assert(DBUpgradeDependencyFailureFault.prototype instanceof NeptuneServiceException);
assert(typeof DBUpgradeDependencyFailureFault$ === "object");
assert(DomainNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof DomainNotFoundFault$ === "object");
assert(EventSubscriptionQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof EventSubscriptionQuotaExceededFault$ === "object");
assert(GlobalClusterAlreadyExistsFault.prototype instanceof NeptuneServiceException);
assert(typeof GlobalClusterAlreadyExistsFault$ === "object");
assert(GlobalClusterNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof GlobalClusterNotFoundFault$ === "object");
assert(GlobalClusterQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof GlobalClusterQuotaExceededFault$ === "object");
assert(InstanceQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof InstanceQuotaExceededFault$ === "object");
assert(InsufficientDBClusterCapacityFault.prototype instanceof NeptuneServiceException);
assert(typeof InsufficientDBClusterCapacityFault$ === "object");
assert(InsufficientDBInstanceCapacityFault.prototype instanceof NeptuneServiceException);
assert(typeof InsufficientDBInstanceCapacityFault$ === "object");
assert(InsufficientStorageClusterCapacityFault.prototype instanceof NeptuneServiceException);
assert(typeof InsufficientStorageClusterCapacityFault$ === "object");
assert(InvalidDBClusterEndpointStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBClusterEndpointStateFault$ === "object");
assert(InvalidDBClusterSnapshotStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBClusterSnapshotStateFault$ === "object");
assert(InvalidDBClusterStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBClusterStateFault$ === "object");
assert(InvalidDBInstanceStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBInstanceStateFault$ === "object");
assert(InvalidDBParameterGroupStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBParameterGroupStateFault$ === "object");
assert(InvalidDBSecurityGroupStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBSecurityGroupStateFault$ === "object");
assert(InvalidDBSnapshotStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBSnapshotStateFault$ === "object");
assert(InvalidDBSubnetGroupStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBSubnetGroupStateFault$ === "object");
assert(InvalidDBSubnetStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidDBSubnetStateFault$ === "object");
assert(InvalidEventSubscriptionStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidEventSubscriptionStateFault$ === "object");
assert(InvalidGlobalClusterStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidGlobalClusterStateFault$ === "object");
assert(InvalidRestoreFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidRestoreFault$ === "object");
assert(InvalidSubnet.prototype instanceof NeptuneServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof NeptuneServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(KMSKeyNotAccessibleFault.prototype instanceof NeptuneServiceException);
assert(typeof KMSKeyNotAccessibleFault$ === "object");
assert(OptionGroupNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof OptionGroupNotFoundFault$ === "object");
assert(ProvisionedIopsNotAvailableInAZFault.prototype instanceof NeptuneServiceException);
assert(typeof ProvisionedIopsNotAvailableInAZFault$ === "object");
assert(ResourceNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof ResourceNotFoundFault$ === "object");
assert(SharedSnapshotQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof SharedSnapshotQuotaExceededFault$ === "object");
assert(SnapshotQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof SnapshotQuotaExceededFault$ === "object");
assert(SNSInvalidTopicFault.prototype instanceof NeptuneServiceException);
assert(typeof SNSInvalidTopicFault$ === "object");
assert(SNSNoAuthorizationFault.prototype instanceof NeptuneServiceException);
assert(typeof SNSNoAuthorizationFault$ === "object");
assert(SNSTopicArnNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof SNSTopicArnNotFoundFault$ === "object");
assert(SourceNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof SourceNotFoundFault$ === "object");
assert(StorageQuotaExceededFault.prototype instanceof NeptuneServiceException);
assert(typeof StorageQuotaExceededFault$ === "object");
assert(StorageTypeNotSupportedFault.prototype instanceof NeptuneServiceException);
assert(typeof StorageTypeNotSupportedFault$ === "object");
assert(SubnetAlreadyInUse.prototype instanceof NeptuneServiceException);
assert(typeof SubnetAlreadyInUse$ === "object");
assert(SubscriptionAlreadyExistFault.prototype instanceof NeptuneServiceException);
assert(typeof SubscriptionAlreadyExistFault$ === "object");
assert(SubscriptionCategoryNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof SubscriptionCategoryNotFoundFault$ === "object");
assert(SubscriptionNotFoundFault.prototype instanceof NeptuneServiceException);
assert(typeof SubscriptionNotFoundFault$ === "object");
assert(NeptuneServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDBInstanceAvailable === "function");
assert(typeof waitForDBInstanceDeleted === "function");
assert(typeof waitUntilDBInstanceAvailable === "function");
assert(typeof waitUntilDBInstanceDeleted === "function");
// paginators
assert(typeof paginateDescribeDBClusterEndpoints === "function");
assert(typeof paginateDescribeDBClusterParameterGroups === "function");
assert(typeof paginateDescribeDBClusterParameters === "function");
assert(typeof paginateDescribeDBClusterSnapshots === "function");
assert(typeof paginateDescribeDBClusters === "function");
assert(typeof paginateDescribeDBEngineVersions === "function");
assert(typeof paginateDescribeDBInstances === "function");
assert(typeof paginateDescribeDBParameterGroups === "function");
assert(typeof paginateDescribeDBParameters === "function");
assert(typeof paginateDescribeDBSubnetGroups === "function");
assert(typeof paginateDescribeEngineDefaultParameters === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeGlobalClusters === "function");
assert(typeof paginateDescribeOrderableDBInstanceOptions === "function");
assert(typeof paginateDescribePendingMaintenanceActions === "function");
console.log(`Neptune index test passed.`);
