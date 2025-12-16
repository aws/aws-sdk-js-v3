import {
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
  Certificate$,
  CertificateDetails$,
  CertificateMessage$,
  CertificateNotFoundFault,
  CertificateNotFoundFault$,
  CloudwatchLogsExportConfiguration$,
  ClusterMasterUserSecret$,
  CopyDBClusterParameterGroup$,
  CopyDBClusterParameterGroupCommand,
  CopyDBClusterParameterGroupMessage$,
  CopyDBClusterParameterGroupResult$,
  CopyDBClusterSnapshot$,
  CopyDBClusterSnapshotCommand,
  CopyDBClusterSnapshotMessage$,
  CopyDBClusterSnapshotResult$,
  CreateDBCluster$,
  CreateDBClusterCommand,
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
  DBClusterMember$,
  DBClusterMessage$,
  DBClusterNotFoundFault,
  DBClusterNotFoundFault$,
  DBClusterParameterGroup$,
  DBClusterParameterGroupDetails$,
  DBClusterParameterGroupNameMessage$,
  DBClusterParameterGroupNotFoundFault,
  DBClusterParameterGroupNotFoundFault$,
  DBClusterParameterGroupsMessage$,
  DBClusterQuotaExceededFault,
  DBClusterQuotaExceededFault$,
  DBClusterRole$,
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
  DBParameterGroupAlreadyExistsFault,
  DBParameterGroupAlreadyExistsFault$,
  DBParameterGroupNotFoundFault,
  DBParameterGroupNotFoundFault$,
  DBParameterGroupQuotaExceededFault,
  DBParameterGroupQuotaExceededFault$,
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
  DescribeCertificates$,
  DescribeCertificatesCommand,
  DescribeCertificatesMessage$,
  DescribeDBClusterParameterGroups$,
  DescribeDBClusterParameterGroupsCommand,
  DescribeDBClusterParameterGroupsMessage$,
  DescribeDBClusterParameters$,
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersMessage$,
  DescribeDBClusterSnapshotAttributes$,
  DescribeDBClusterSnapshotAttributesCommand,
  DescribeDBClusterSnapshotAttributesMessage$,
  DescribeDBClusterSnapshotAttributesResult$,
  DescribeDBClusterSnapshots$,
  DescribeDBClusterSnapshotsCommand,
  DescribeDBClusterSnapshotsMessage$,
  DescribeDBClusters$,
  DescribeDBClustersCommand,
  DescribeDBClustersMessage$,
  DescribeDBEngineVersions$,
  DescribeDBEngineVersionsCommand,
  DescribeDBEngineVersionsMessage$,
  DescribeDBInstances$,
  DescribeDBInstancesCommand,
  DescribeDBInstancesMessage$,
  DescribeDBSubnetGroups$,
  DescribeDBSubnetGroupsCommand,
  DescribeDBSubnetGroupsMessage$,
  DescribeEngineDefaultClusterParameters$,
  DescribeEngineDefaultClusterParametersCommand,
  DescribeEngineDefaultClusterParametersMessage$,
  DescribeEngineDefaultClusterParametersResult$,
  DescribeEventCategories$,
  DescribeEventCategoriesCommand,
  DescribeEventCategoriesMessage$,
  DescribeEventSubscriptions$,
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsMessage$,
  DescribeEvents$,
  DescribeEventsCommand,
  DescribeEventsMessage$,
  DescribeGlobalClusters$,
  DescribeGlobalClustersCommand,
  DescribeGlobalClustersMessage$,
  DescribeOrderableDBInstanceOptions$,
  DescribeOrderableDBInstanceOptionsCommand,
  DescribeOrderableDBInstanceOptionsMessage$,
  DescribePendingMaintenanceActions$,
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsMessage$,
  DocDB,
  DocDBClient,
  DocDBServiceException,
  Endpoint$,
  EngineDefaults$,
  Event$,
  EventCategoriesMap$,
  EventCategoriesMessage$,
  EventSubscription$,
  EventSubscriptionQuotaExceededFault,
  EventSubscriptionQuotaExceededFault$,
  EventSubscriptionsMessage$,
  EventsMessage$,
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
  GlobalClusterMemberSynchronizationStatus,
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
  NetworkTypeNotSupported,
  NetworkTypeNotSupported$,
  OrderableDBInstanceOption$,
  OrderableDBInstanceOptionsMessage$,
  Parameter$,
  PendingCloudwatchLogsExports$,
  PendingMaintenanceAction$,
  PendingMaintenanceActionsMessage$,
  PendingModifiedValues$,
  RebootDBInstance$,
  RebootDBInstanceCommand,
  RebootDBInstanceMessage$,
  RebootDBInstanceResult$,
  RemoveFromGlobalCluster$,
  RemoveFromGlobalClusterCommand,
  RemoveFromGlobalClusterMessage$,
  RemoveFromGlobalClusterResult$,
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
  SNSInvalidTopicFault,
  SNSInvalidTopicFault$,
  SNSNoAuthorizationFault,
  SNSNoAuthorizationFault$,
  SNSTopicArnNotFoundFault,
  SNSTopicArnNotFoundFault$,
  ServerlessV2FeaturesSupport$,
  ServerlessV2ScalingConfiguration$,
  ServerlessV2ScalingConfigurationInfo$,
  SharedSnapshotQuotaExceededFault,
  SharedSnapshotQuotaExceededFault$,
  SnapshotQuotaExceededFault,
  SnapshotQuotaExceededFault$,
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
  UpgradeTarget$,
  VpcSecurityGroupMembership$,
  paginateDescribeCertificates,
  paginateDescribeDBClusterParameterGroups,
  paginateDescribeDBClusterParameters,
  paginateDescribeDBClusterSnapshots,
  paginateDescribeDBClusters,
  paginateDescribeDBEngineVersions,
  paginateDescribeDBInstances,
  paginateDescribeDBSubnetGroups,
  paginateDescribeEventSubscriptions,
  paginateDescribeEvents,
  paginateDescribeGlobalClusters,
  paginateDescribeOrderableDBInstanceOptions,
  paginateDescribePendingMaintenanceActions,
  waitForDBInstanceAvailable,
  waitForDBInstanceDeleted,
  waitUntilDBInstanceAvailable,
  waitUntilDBInstanceDeleted,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DocDBClient === "function");
assert(typeof DocDB === "function");
// commands
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
assert(typeof CreateDBClusterCommand === "function");
assert(typeof CreateDBCluster$ === "object");
assert(typeof CreateDBClusterParameterGroupCommand === "function");
assert(typeof CreateDBClusterParameterGroup$ === "object");
assert(typeof CreateDBClusterSnapshotCommand === "function");
assert(typeof CreateDBClusterSnapshot$ === "object");
assert(typeof CreateDBInstanceCommand === "function");
assert(typeof CreateDBInstance$ === "object");
assert(typeof CreateDBSubnetGroupCommand === "function");
assert(typeof CreateDBSubnetGroup$ === "object");
assert(typeof CreateEventSubscriptionCommand === "function");
assert(typeof CreateEventSubscription$ === "object");
assert(typeof CreateGlobalClusterCommand === "function");
assert(typeof CreateGlobalCluster$ === "object");
assert(typeof DeleteDBClusterCommand === "function");
assert(typeof DeleteDBCluster$ === "object");
assert(typeof DeleteDBClusterParameterGroupCommand === "function");
assert(typeof DeleteDBClusterParameterGroup$ === "object");
assert(typeof DeleteDBClusterSnapshotCommand === "function");
assert(typeof DeleteDBClusterSnapshot$ === "object");
assert(typeof DeleteDBInstanceCommand === "function");
assert(typeof DeleteDBInstance$ === "object");
assert(typeof DeleteDBSubnetGroupCommand === "function");
assert(typeof DeleteDBSubnetGroup$ === "object");
assert(typeof DeleteEventSubscriptionCommand === "function");
assert(typeof DeleteEventSubscription$ === "object");
assert(typeof DeleteGlobalClusterCommand === "function");
assert(typeof DeleteGlobalCluster$ === "object");
assert(typeof DescribeCertificatesCommand === "function");
assert(typeof DescribeCertificates$ === "object");
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
assert(typeof DescribeDBSubnetGroupsCommand === "function");
assert(typeof DescribeDBSubnetGroups$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersCommand === "function");
assert(typeof DescribeEngineDefaultClusterParameters$ === "object");
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
assert(typeof FailoverDBClusterCommand === "function");
assert(typeof FailoverDBCluster$ === "object");
assert(typeof FailoverGlobalClusterCommand === "function");
assert(typeof FailoverGlobalCluster$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyDBClusterCommand === "function");
assert(typeof ModifyDBCluster$ === "object");
assert(typeof ModifyDBClusterParameterGroupCommand === "function");
assert(typeof ModifyDBClusterParameterGroup$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeCommand === "function");
assert(typeof ModifyDBClusterSnapshotAttribute$ === "object");
assert(typeof ModifyDBInstanceCommand === "function");
assert(typeof ModifyDBInstance$ === "object");
assert(typeof ModifyDBSubnetGroupCommand === "function");
assert(typeof ModifyDBSubnetGroup$ === "object");
assert(typeof ModifyEventSubscriptionCommand === "function");
assert(typeof ModifyEventSubscription$ === "object");
assert(typeof ModifyGlobalClusterCommand === "function");
assert(typeof ModifyGlobalCluster$ === "object");
assert(typeof RebootDBInstanceCommand === "function");
assert(typeof RebootDBInstance$ === "object");
assert(typeof RemoveFromGlobalClusterCommand === "function");
assert(typeof RemoveFromGlobalCluster$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionCommand === "function");
assert(typeof RemoveSourceIdentifierFromSubscription$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetDBClusterParameterGroupCommand === "function");
assert(typeof ResetDBClusterParameterGroup$ === "object");
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
assert(typeof AddSourceIdentifierToSubscriptionMessage$ === "object");
assert(typeof AddSourceIdentifierToSubscriptionResult$ === "object");
assert(typeof AddTagsToResourceMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionMessage$ === "object");
assert(typeof ApplyPendingMaintenanceActionResult$ === "object");
assert(typeof AvailabilityZone$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateDetails$ === "object");
assert(typeof CertificateMessage$ === "object");
assert(typeof CloudwatchLogsExportConfiguration$ === "object");
assert(typeof ClusterMasterUserSecret$ === "object");
assert(typeof CopyDBClusterParameterGroupMessage$ === "object");
assert(typeof CopyDBClusterParameterGroupResult$ === "object");
assert(typeof CopyDBClusterSnapshotMessage$ === "object");
assert(typeof CopyDBClusterSnapshotResult$ === "object");
assert(typeof CreateDBClusterMessage$ === "object");
assert(typeof CreateDBClusterParameterGroupMessage$ === "object");
assert(typeof CreateDBClusterParameterGroupResult$ === "object");
assert(typeof CreateDBClusterResult$ === "object");
assert(typeof CreateDBClusterSnapshotMessage$ === "object");
assert(typeof CreateDBClusterSnapshotResult$ === "object");
assert(typeof CreateDBInstanceMessage$ === "object");
assert(typeof CreateDBInstanceResult$ === "object");
assert(typeof CreateDBSubnetGroupMessage$ === "object");
assert(typeof CreateDBSubnetGroupResult$ === "object");
assert(typeof CreateEventSubscriptionMessage$ === "object");
assert(typeof CreateEventSubscriptionResult$ === "object");
assert(typeof CreateGlobalClusterMessage$ === "object");
assert(typeof CreateGlobalClusterResult$ === "object");
assert(typeof DBCluster$ === "object");
assert(typeof DBClusterMember$ === "object");
assert(typeof DBClusterMessage$ === "object");
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
assert(typeof DBSubnetGroup$ === "object");
assert(typeof DBSubnetGroupMessage$ === "object");
assert(typeof DeleteDBClusterMessage$ === "object");
assert(typeof DeleteDBClusterParameterGroupMessage$ === "object");
assert(typeof DeleteDBClusterResult$ === "object");
assert(typeof DeleteDBClusterSnapshotMessage$ === "object");
assert(typeof DeleteDBClusterSnapshotResult$ === "object");
assert(typeof DeleteDBInstanceMessage$ === "object");
assert(typeof DeleteDBInstanceResult$ === "object");
assert(typeof DeleteDBSubnetGroupMessage$ === "object");
assert(typeof DeleteEventSubscriptionMessage$ === "object");
assert(typeof DeleteEventSubscriptionResult$ === "object");
assert(typeof DeleteGlobalClusterMessage$ === "object");
assert(typeof DeleteGlobalClusterResult$ === "object");
assert(typeof DescribeCertificatesMessage$ === "object");
assert(typeof DescribeDBClusterParameterGroupsMessage$ === "object");
assert(typeof DescribeDBClusterParametersMessage$ === "object");
assert(typeof DescribeDBClustersMessage$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesMessage$ === "object");
assert(typeof DescribeDBClusterSnapshotAttributesResult$ === "object");
assert(typeof DescribeDBClusterSnapshotsMessage$ === "object");
assert(typeof DescribeDBEngineVersionsMessage$ === "object");
assert(typeof DescribeDBInstancesMessage$ === "object");
assert(typeof DescribeDBSubnetGroupsMessage$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersMessage$ === "object");
assert(typeof DescribeEngineDefaultClusterParametersResult$ === "object");
assert(typeof DescribeEventCategoriesMessage$ === "object");
assert(typeof DescribeEventsMessage$ === "object");
assert(typeof DescribeEventSubscriptionsMessage$ === "object");
assert(typeof DescribeGlobalClustersMessage$ === "object");
assert(typeof DescribeOrderableDBInstanceOptionsMessage$ === "object");
assert(typeof DescribePendingMaintenanceActionsMessage$ === "object");
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
assert(typeof ModifyDBClusterMessage$ === "object");
assert(typeof ModifyDBClusterParameterGroupMessage$ === "object");
assert(typeof ModifyDBClusterResult$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeMessage$ === "object");
assert(typeof ModifyDBClusterSnapshotAttributeResult$ === "object");
assert(typeof ModifyDBInstanceMessage$ === "object");
assert(typeof ModifyDBInstanceResult$ === "object");
assert(typeof ModifyDBSubnetGroupMessage$ === "object");
assert(typeof ModifyDBSubnetGroupResult$ === "object");
assert(typeof ModifyEventSubscriptionMessage$ === "object");
assert(typeof ModifyEventSubscriptionResult$ === "object");
assert(typeof ModifyGlobalClusterMessage$ === "object");
assert(typeof ModifyGlobalClusterResult$ === "object");
assert(typeof OrderableDBInstanceOption$ === "object");
assert(typeof OrderableDBInstanceOptionsMessage$ === "object");
assert(typeof Parameter$ === "object");
assert(typeof PendingCloudwatchLogsExports$ === "object");
assert(typeof PendingMaintenanceAction$ === "object");
assert(typeof PendingMaintenanceActionsMessage$ === "object");
assert(typeof PendingModifiedValues$ === "object");
assert(typeof RebootDBInstanceMessage$ === "object");
assert(typeof RebootDBInstanceResult$ === "object");
assert(typeof RemoveFromGlobalClusterMessage$ === "object");
assert(typeof RemoveFromGlobalClusterResult$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionMessage$ === "object");
assert(typeof RemoveSourceIdentifierFromSubscriptionResult$ === "object");
assert(typeof RemoveTagsFromResourceMessage$ === "object");
assert(typeof ResetDBClusterParameterGroupMessage$ === "object");
assert(typeof ResourcePendingMaintenanceActions$ === "object");
assert(typeof RestoreDBClusterFromSnapshotMessage$ === "object");
assert(typeof RestoreDBClusterFromSnapshotResult$ === "object");
assert(typeof RestoreDBClusterToPointInTimeMessage$ === "object");
assert(typeof RestoreDBClusterToPointInTimeResult$ === "object");
assert(typeof ServerlessV2FeaturesSupport$ === "object");
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
assert(typeof UpgradeTarget$ === "object");
assert(typeof VpcSecurityGroupMembership$ === "object");
// enums
assert(typeof ApplyMethod === "object");
assert(typeof FailoverStatus === "object");
assert(typeof GlobalClusterMemberSynchronizationStatus === "object");
assert(typeof SourceType === "object");
// errors
assert(AuthorizationNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof AuthorizationNotFoundFault$ === "object");
assert(CertificateNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof CertificateNotFoundFault$ === "object");
assert(DBClusterAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof DBClusterAlreadyExistsFault$ === "object");
assert(DBClusterNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBClusterNotFoundFault$ === "object");
assert(DBClusterParameterGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBClusterParameterGroupNotFoundFault$ === "object");
assert(DBClusterQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof DBClusterQuotaExceededFault$ === "object");
assert(DBClusterSnapshotAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof DBClusterSnapshotAlreadyExistsFault$ === "object");
assert(DBClusterSnapshotNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBClusterSnapshotNotFoundFault$ === "object");
assert(DBInstanceAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof DBInstanceAlreadyExistsFault$ === "object");
assert(DBInstanceNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBInstanceNotFoundFault$ === "object");
assert(DBParameterGroupAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof DBParameterGroupAlreadyExistsFault$ === "object");
assert(DBParameterGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBParameterGroupNotFoundFault$ === "object");
assert(DBParameterGroupQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof DBParameterGroupQuotaExceededFault$ === "object");
assert(DBSecurityGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBSecurityGroupNotFoundFault$ === "object");
assert(DBSnapshotAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof DBSnapshotAlreadyExistsFault$ === "object");
assert(DBSnapshotNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBSnapshotNotFoundFault$ === "object");
assert(DBSubnetGroupAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof DBSubnetGroupAlreadyExistsFault$ === "object");
assert(DBSubnetGroupDoesNotCoverEnoughAZs.prototype instanceof DocDBServiceException);
assert(typeof DBSubnetGroupDoesNotCoverEnoughAZs$ === "object");
assert(DBSubnetGroupNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof DBSubnetGroupNotFoundFault$ === "object");
assert(DBSubnetGroupQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof DBSubnetGroupQuotaExceededFault$ === "object");
assert(DBSubnetQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof DBSubnetQuotaExceededFault$ === "object");
assert(DBUpgradeDependencyFailureFault.prototype instanceof DocDBServiceException);
assert(typeof DBUpgradeDependencyFailureFault$ === "object");
assert(EventSubscriptionQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof EventSubscriptionQuotaExceededFault$ === "object");
assert(GlobalClusterAlreadyExistsFault.prototype instanceof DocDBServiceException);
assert(typeof GlobalClusterAlreadyExistsFault$ === "object");
assert(GlobalClusterNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof GlobalClusterNotFoundFault$ === "object");
assert(GlobalClusterQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof GlobalClusterQuotaExceededFault$ === "object");
assert(InstanceQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof InstanceQuotaExceededFault$ === "object");
assert(InsufficientDBClusterCapacityFault.prototype instanceof DocDBServiceException);
assert(typeof InsufficientDBClusterCapacityFault$ === "object");
assert(InsufficientDBInstanceCapacityFault.prototype instanceof DocDBServiceException);
assert(typeof InsufficientDBInstanceCapacityFault$ === "object");
assert(InsufficientStorageClusterCapacityFault.prototype instanceof DocDBServiceException);
assert(typeof InsufficientStorageClusterCapacityFault$ === "object");
assert(InvalidDBClusterSnapshotStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBClusterSnapshotStateFault$ === "object");
assert(InvalidDBClusterStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBClusterStateFault$ === "object");
assert(InvalidDBInstanceStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBInstanceStateFault$ === "object");
assert(InvalidDBParameterGroupStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBParameterGroupStateFault$ === "object");
assert(InvalidDBSecurityGroupStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBSecurityGroupStateFault$ === "object");
assert(InvalidDBSnapshotStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBSnapshotStateFault$ === "object");
assert(InvalidDBSubnetGroupStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBSubnetGroupStateFault$ === "object");
assert(InvalidDBSubnetStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidDBSubnetStateFault$ === "object");
assert(InvalidEventSubscriptionStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidEventSubscriptionStateFault$ === "object");
assert(InvalidGlobalClusterStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidGlobalClusterStateFault$ === "object");
assert(InvalidRestoreFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidRestoreFault$ === "object");
assert(InvalidSubnet.prototype instanceof DocDBServiceException);
assert(typeof InvalidSubnet$ === "object");
assert(InvalidVPCNetworkStateFault.prototype instanceof DocDBServiceException);
assert(typeof InvalidVPCNetworkStateFault$ === "object");
assert(KMSKeyNotAccessibleFault.prototype instanceof DocDBServiceException);
assert(typeof KMSKeyNotAccessibleFault$ === "object");
assert(NetworkTypeNotSupported.prototype instanceof DocDBServiceException);
assert(typeof NetworkTypeNotSupported$ === "object");
assert(ResourceNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof ResourceNotFoundFault$ === "object");
assert(SharedSnapshotQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof SharedSnapshotQuotaExceededFault$ === "object");
assert(SnapshotQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof SnapshotQuotaExceededFault$ === "object");
assert(SNSInvalidTopicFault.prototype instanceof DocDBServiceException);
assert(typeof SNSInvalidTopicFault$ === "object");
assert(SNSNoAuthorizationFault.prototype instanceof DocDBServiceException);
assert(typeof SNSNoAuthorizationFault$ === "object");
assert(SNSTopicArnNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof SNSTopicArnNotFoundFault$ === "object");
assert(SourceNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof SourceNotFoundFault$ === "object");
assert(StorageQuotaExceededFault.prototype instanceof DocDBServiceException);
assert(typeof StorageQuotaExceededFault$ === "object");
assert(StorageTypeNotSupportedFault.prototype instanceof DocDBServiceException);
assert(typeof StorageTypeNotSupportedFault$ === "object");
assert(SubnetAlreadyInUse.prototype instanceof DocDBServiceException);
assert(typeof SubnetAlreadyInUse$ === "object");
assert(SubscriptionAlreadyExistFault.prototype instanceof DocDBServiceException);
assert(typeof SubscriptionAlreadyExistFault$ === "object");
assert(SubscriptionCategoryNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof SubscriptionCategoryNotFoundFault$ === "object");
assert(SubscriptionNotFoundFault.prototype instanceof DocDBServiceException);
assert(typeof SubscriptionNotFoundFault$ === "object");
assert(DocDBServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForDBInstanceAvailable === "function");
assert(typeof waitForDBInstanceDeleted === "function");
assert(typeof waitUntilDBInstanceAvailable === "function");
assert(typeof waitUntilDBInstanceDeleted === "function");
// paginators
assert(typeof paginateDescribeCertificates === "function");
assert(typeof paginateDescribeDBClusterParameterGroups === "function");
assert(typeof paginateDescribeDBClusterParameters === "function");
assert(typeof paginateDescribeDBClusterSnapshots === "function");
assert(typeof paginateDescribeDBClusters === "function");
assert(typeof paginateDescribeDBEngineVersions === "function");
assert(typeof paginateDescribeDBInstances === "function");
assert(typeof paginateDescribeDBSubnetGroups === "function");
assert(typeof paginateDescribeEventSubscriptions === "function");
assert(typeof paginateDescribeEvents === "function");
assert(typeof paginateDescribeGlobalClusters === "function");
assert(typeof paginateDescribeOrderableDBInstanceOptions === "function");
assert(typeof paginateDescribePendingMaintenanceActions === "function");
console.log(`DocDB index test passed.`);
