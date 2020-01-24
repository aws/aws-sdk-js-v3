import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Specified CIDRIP or EC2 security group is not authorized for the specified DB security group.</p>
 *          <p>Neptune may not also be authorized via IAM to perform necessary actions on your behalf.</p>
 */
export interface AuthorizationNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "AuthorizationNotFoundFault";
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  export function isa(o: any): o is AuthorizationNotFoundFault {
    return _smithy.isa(o, "AuthorizationNotFoundFault");
  }
}

/**
 * <p>
 *             <i>CertificateIdentifier</i> does not refer to an existing certificate.</p>
 */
export interface CertificateNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "CertificateNotFoundFault";
  name: "CertificateNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace CertificateNotFoundFault {
  export function isa(o: any): o is CertificateNotFoundFault {
    return _smithy.isa(o, "CertificateNotFoundFault");
  }
}

/**
 * <p>User already has a DB cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterAlreadyExistsFault";
  name: "DBClusterAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterAlreadyExistsFault {
  export function isa(o: any): o is DBClusterAlreadyExistsFault {
    return _smithy.isa(o, "DBClusterAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <i>DBClusterIdentifier</i> does not refer to an existing DB cluster.</p>
 */
export interface DBClusterNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterNotFoundFault";
  name: "DBClusterNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterNotFoundFault {
  export function isa(o: any): o is DBClusterNotFoundFault {
    return _smithy.isa(o, "DBClusterNotFoundFault");
  }
}

/**
 * <p>
 *             <i>DBClusterParameterGroupName</i> does not refer to an
 *       existing DB Cluster parameter group.</p>
 */
export interface DBClusterParameterGroupNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterParameterGroupNotFoundFault";
  name: "DBClusterParameterGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterParameterGroupNotFoundFault {
  export function isa(o: any): o is DBClusterParameterGroupNotFoundFault {
    return _smithy.isa(o, "DBClusterParameterGroupNotFoundFault");
  }
}

/**
 * <p>User attempted to create a new DB cluster and the user has already reached the maximum allowed DB cluster quota.</p>
 */
export interface DBClusterQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterQuotaExceededFault";
  name: "DBClusterQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterQuotaExceededFault {
  export function isa(o: any): o is DBClusterQuotaExceededFault {
    return _smithy.isa(o, "DBClusterQuotaExceededFault");
  }
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterRoleAlreadyExistsFault";
  name: "DBClusterRoleAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterRoleAlreadyExistsFault {
  export function isa(o: any): o is DBClusterRoleAlreadyExistsFault {
    return _smithy.isa(o, "DBClusterRoleAlreadyExistsFault");
  }
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is not associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterRoleNotFoundFault";
  name: "DBClusterRoleNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterRoleNotFoundFault {
  export function isa(o: any): o is DBClusterRoleNotFoundFault {
    return _smithy.isa(o, "DBClusterRoleNotFoundFault");
  }
}

/**
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterRoleQuotaExceededFault";
  name: "DBClusterRoleQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterRoleQuotaExceededFault {
  export function isa(o: any): o is DBClusterRoleQuotaExceededFault {
    return _smithy.isa(o, "DBClusterRoleQuotaExceededFault");
  }
}

/**
 * <p>User already has a DB cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterSnapshotAlreadyExistsFault";
  name: "DBClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterSnapshotAlreadyExistsFault {
  export function isa(o: any): o is DBClusterSnapshotAlreadyExistsFault {
    return _smithy.isa(o, "DBClusterSnapshotAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <i>DBClusterSnapshotIdentifier</i> does not refer to an existing
 *       DB cluster snapshot.</p>
 */
export interface DBClusterSnapshotNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBClusterSnapshotNotFoundFault";
  name: "DBClusterSnapshotNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBClusterSnapshotNotFoundFault {
  export function isa(o: any): o is DBClusterSnapshotNotFoundFault {
    return _smithy.isa(o, "DBClusterSnapshotNotFoundFault");
  }
}

/**
 * <p>User already has a DB instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBInstanceAlreadyExistsFault";
  name: "DBInstanceAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBInstanceAlreadyExistsFault {
  export function isa(o: any): o is DBInstanceAlreadyExistsFault {
    return _smithy.isa(o, "DBInstanceAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 */
export interface DBInstanceNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBInstanceNotFoundFault";
  name: "DBInstanceNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBInstanceNotFoundFault {
  export function isa(o: any): o is DBInstanceNotFoundFault {
    return _smithy.isa(o, "DBInstanceNotFoundFault");
  }
}

/**
 * <p>A DB parameter group with the same name exists.</p>
 */
export interface DBParameterGroupAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBParameterGroupAlreadyExistsFault";
  name: "DBParameterGroupAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBParameterGroupAlreadyExistsFault {
  export function isa(o: any): o is DBParameterGroupAlreadyExistsFault {
    return _smithy.isa(o, "DBParameterGroupAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 */
export interface DBParameterGroupNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBParameterGroupNotFoundFault";
  name: "DBParameterGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBParameterGroupNotFoundFault {
  export function isa(o: any): o is DBParameterGroupNotFoundFault {
    return _smithy.isa(o, "DBParameterGroupNotFoundFault");
  }
}

/**
 * <p>Request would result in user exceeding the allowed number of DB parameter groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBParameterGroupQuotaExceededFault";
  name: "DBParameterGroupQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBParameterGroupQuotaExceededFault {
  export function isa(o: any): o is DBParameterGroupQuotaExceededFault {
    return _smithy.isa(o, "DBParameterGroupQuotaExceededFault");
  }
}

/**
 * <p>
 *             <i>DBSecurityGroupName</i> does not refer
 *       to an existing DB security group.</p>
 */
export interface DBSecurityGroupNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSecurityGroupNotFoundFault";
  name: "DBSecurityGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSecurityGroupNotFoundFault {
  export function isa(o: any): o is DBSecurityGroupNotFoundFault {
    return _smithy.isa(o, "DBSecurityGroupNotFoundFault");
  }
}

/**
 * <p>
 *             <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
 */
export interface DBSnapshotAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSnapshotAlreadyExistsFault";
  name: "DBSnapshotAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSnapshotAlreadyExistsFault {
  export function isa(o: any): o is DBSnapshotAlreadyExistsFault {
    return _smithy.isa(o, "DBSnapshotAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <i>DBSnapshotIdentifier</i> does not refer to an existing DB snapshot.</p>
 */
export interface DBSnapshotNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSnapshotNotFoundFault";
  name: "DBSnapshotNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSnapshotNotFoundFault {
  export function isa(o: any): o is DBSnapshotNotFoundFault {
    return _smithy.isa(o, "DBSnapshotNotFoundFault");
  }
}

/**
 * <p>
 *             <i>DBSubnetGroupName</i> is already used by an existing DB subnet group.</p>
 */
export interface DBSubnetGroupAlreadyExistsFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSubnetGroupAlreadyExistsFault";
  name: "DBSubnetGroupAlreadyExistsFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupAlreadyExistsFault {
  export function isa(o: any): o is DBSubnetGroupAlreadyExistsFault {
    return _smithy.isa(o, "DBSubnetGroupAlreadyExistsFault");
  }
}

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability
 *       Zones unless there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSubnetGroupDoesNotCoverEnoughAZs";
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupDoesNotCoverEnoughAZs {
  export function isa(o: any): o is DBSubnetGroupDoesNotCoverEnoughAZs {
    return _smithy.isa(o, "DBSubnetGroupDoesNotCoverEnoughAZs");
  }
}

/**
 * <p>
 *             <i>DBSubnetGroupName</i> does not refer to an
 *       existing DB subnet group.</p>
 */
export interface DBSubnetGroupNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSubnetGroupNotFoundFault";
  name: "DBSubnetGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupNotFoundFault {
  export function isa(o: any): o is DBSubnetGroupNotFoundFault {
    return _smithy.isa(o, "DBSubnetGroupNotFoundFault");
  }
}

/**
 * <p>Request would result in user exceeding the allowed number of DB subnet groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSubnetGroupQuotaExceededFault";
  name: "DBSubnetGroupQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetGroupQuotaExceededFault {
  export function isa(o: any): o is DBSubnetGroupQuotaExceededFault {
    return _smithy.isa(o, "DBSubnetGroupQuotaExceededFault");
  }
}

/**
 * <p>Request would result in user exceeding the allowed number of subnets in a DB subnet groups.</p>
 */
export interface DBSubnetQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBSubnetQuotaExceededFault";
  name: "DBSubnetQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBSubnetQuotaExceededFault {
  export function isa(o: any): o is DBSubnetQuotaExceededFault {
    return _smithy.isa(o, "DBSubnetQuotaExceededFault");
  }
}

/**
 * <p>The DB upgrade failed because a resource the DB depends on could not be modified.</p>
 */
export interface DBUpgradeDependencyFailureFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DBUpgradeDependencyFailureFault";
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  export function isa(o: any): o is DBUpgradeDependencyFailureFault {
    return _smithy.isa(o, "DBUpgradeDependencyFailureFault");
  }
}

/**
 * <p>
 *             <i>Domain</i> does not refer to an existing Active Directory Domain.</p>
 */
export interface DomainNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "DomainNotFoundFault";
  name: "DomainNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace DomainNotFoundFault {
  export function isa(o: any): o is DomainNotFoundFault {
    return _smithy.isa(o, "DomainNotFoundFault");
  }
}

/**
 * <p>You have exceeded the number of events you can subscribe to.</p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "EventSubscriptionQuotaExceededFault";
  name: "EventSubscriptionQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace EventSubscriptionQuotaExceededFault {
  export function isa(o: any): o is EventSubscriptionQuotaExceededFault {
    return _smithy.isa(o, "EventSubscriptionQuotaExceededFault");
  }
}

/**
 * <p>Request would result in user exceeding the allowed number of DB instances.</p>
 */
export interface InstanceQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InstanceQuotaExceededFault";
  name: "InstanceQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InstanceQuotaExceededFault {
  export function isa(o: any): o is InstanceQuotaExceededFault {
    return _smithy.isa(o, "InstanceQuotaExceededFault");
  }
}

/**
 * <p>The DB cluster does not have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InsufficientDBClusterCapacityFault";
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  export function isa(o: any): o is InsufficientDBClusterCapacityFault {
    return _smithy.isa(o, "InsufficientDBClusterCapacityFault");
  }
}

/**
 * <p>Specified DB instance class is not available in the specified Availability Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InsufficientDBInstanceCapacityFault";
  name: "InsufficientDBInstanceCapacityFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InsufficientDBInstanceCapacityFault {
  export function isa(o: any): o is InsufficientDBInstanceCapacityFault {
    return _smithy.isa(o, "InsufficientDBInstanceCapacityFault");
  }
}

/**
 * <p>There is insufficient storage available for the current action. You may
 *        be able to resolve this error by updating your subnet group to use different
 *        Availability Zones that have more storage available.</p>
 */
export interface InsufficientStorageClusterCapacityFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InsufficientStorageClusterCapacityFault";
  name: "InsufficientStorageClusterCapacityFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InsufficientStorageClusterCapacityFault {
  export function isa(o: any): o is InsufficientStorageClusterCapacityFault {
    return _smithy.isa(o, "InsufficientStorageClusterCapacityFault");
  }
}

/**
 * <p>The supplied value is not a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBClusterSnapshotStateFault";
  name: "InvalidDBClusterSnapshotStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBClusterSnapshotStateFault {
  export function isa(o: any): o is InvalidDBClusterSnapshotStateFault {
    return _smithy.isa(o, "InvalidDBClusterSnapshotStateFault");
  }
}

/**
 * <p>The DB cluster is not in a valid state.</p>
 */
export interface InvalidDBClusterStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBClusterStateFault";
  name: "InvalidDBClusterStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBClusterStateFault {
  export function isa(o: any): o is InvalidDBClusterStateFault {
    return _smithy.isa(o, "InvalidDBClusterStateFault");
  }
}

/**
 * <p>The specified DB instance is not in the <i>available</i> state.</p>
 */
export interface InvalidDBInstanceStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBInstanceStateFault";
  name: "InvalidDBInstanceStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBInstanceStateFault {
  export function isa(o: any): o is InvalidDBInstanceStateFault {
    return _smithy.isa(o, "InvalidDBInstanceStateFault");
  }
}

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
 */
export interface InvalidDBParameterGroupStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBParameterGroupStateFault";
  name: "InvalidDBParameterGroupStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBParameterGroupStateFault {
  export function isa(o: any): o is InvalidDBParameterGroupStateFault {
    return _smithy.isa(o, "InvalidDBParameterGroupStateFault");
  }
}

/**
 * <p>The state of the DB security group does not allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBSecurityGroupStateFault";
  name: "InvalidDBSecurityGroupStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSecurityGroupStateFault {
  export function isa(o: any): o is InvalidDBSecurityGroupStateFault {
    return _smithy.isa(o, "InvalidDBSecurityGroupStateFault");
  }
}

/**
 * <p>The state of the DB snapshot does not allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBSnapshotStateFault";
  name: "InvalidDBSnapshotStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSnapshotStateFault {
  export function isa(o: any): o is InvalidDBSnapshotStateFault {
    return _smithy.isa(o, "InvalidDBSnapshotStateFault");
  }
}

/**
 * <p>The DB subnet group cannot be deleted because it is in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBSubnetGroupStateFault";
  name: "InvalidDBSubnetGroupStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSubnetGroupStateFault {
  export function isa(o: any): o is InvalidDBSubnetGroupStateFault {
    return _smithy.isa(o, "InvalidDBSubnetGroupStateFault");
  }
}

/**
 * <p>The DB subnet is not in the <i>available</i> state.</p>
 */
export interface InvalidDBSubnetStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidDBSubnetStateFault";
  name: "InvalidDBSubnetStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidDBSubnetStateFault {
  export function isa(o: any): o is InvalidDBSubnetStateFault {
    return _smithy.isa(o, "InvalidDBSubnetStateFault");
  }
}

/**
 * <p>The event subscription is in an invalid state.</p>
 */
export interface InvalidEventSubscriptionStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidEventSubscriptionStateFault";
  name: "InvalidEventSubscriptionStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidEventSubscriptionStateFault {
  export function isa(o: any): o is InvalidEventSubscriptionStateFault {
    return _smithy.isa(o, "InvalidEventSubscriptionStateFault");
  }
}

/**
 * <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
 */
export interface InvalidRestoreFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRestoreFault";
  name: "InvalidRestoreFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidRestoreFault {
  export function isa(o: any): o is InvalidRestoreFault {
    return _smithy.isa(o, "InvalidRestoreFault");
  }
}

/**
 * <p>The requested subnet is invalid, or multiple subnets were requested that are
 *       not all in a common VPC.</p>
 */
export interface InvalidSubnet
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidSubnet";
  name: "InvalidSubnet";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidSubnet {
  export function isa(o: any): o is InvalidSubnet {
    return _smithy.isa(o, "InvalidSubnet");
  }
}

/**
 * <p>DB subnet group does not cover all Availability Zones after it is created
 *       because users' change.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidVPCNetworkStateFault";
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export function isa(o: any): o is InvalidVPCNetworkStateFault {
    return _smithy.isa(o, "InvalidVPCNetworkStateFault");
  }
}

/**
 * <p>Error accessing KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "KMSKeyNotAccessibleFault";
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export function isa(o: any): o is KMSKeyNotAccessibleFault {
    return _smithy.isa(o, "KMSKeyNotAccessibleFault");
  }
}

/**
 * <p>The designated option group could not be found.</p>
 */
export interface OptionGroupNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "OptionGroupNotFoundFault";
  name: "OptionGroupNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace OptionGroupNotFoundFault {
  export function isa(o: any): o is OptionGroupNotFoundFault {
    return _smithy.isa(o, "OptionGroupNotFoundFault");
  }
}

/**
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 */
export interface ProvisionedIopsNotAvailableInAZFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ProvisionedIopsNotAvailableInAZFault";
  name: "ProvisionedIopsNotAvailableInAZFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace ProvisionedIopsNotAvailableInAZFault {
  export function isa(o: any): o is ProvisionedIopsNotAvailableInAZFault {
    return _smithy.isa(o, "ProvisionedIopsNotAvailableInAZFault");
  }
}

/**
 * <p>The specified resource ID was not found.</p>
 */
export interface ResourceNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundFault";
  name: "ResourceNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundFault {
  export function isa(o: any): o is ResourceNotFoundFault {
    return _smithy.isa(o, "ResourceNotFoundFault");
  }
}

/**
 * <p>The SNS topic is invalid.</p>
 */
export interface SNSInvalidTopicFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SNSInvalidTopicFault";
  name: "SNSInvalidTopicFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SNSInvalidTopicFault {
  export function isa(o: any): o is SNSInvalidTopicFault {
    return _smithy.isa(o, "SNSInvalidTopicFault");
  }
}

/**
 * <p>There is no SNS authorization.</p>
 */
export interface SNSNoAuthorizationFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SNSNoAuthorizationFault";
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  export function isa(o: any): o is SNSNoAuthorizationFault {
    return _smithy.isa(o, "SNSNoAuthorizationFault");
  }
}

/**
 * <p>The ARN of the SNS topic could not be found.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SNSTopicArnNotFoundFault";
  name: "SNSTopicArnNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SNSTopicArnNotFoundFault {
  export function isa(o: any): o is SNSTopicArnNotFoundFault {
    return _smithy.isa(o, "SNSTopicArnNotFoundFault");
  }
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 */
export interface SharedSnapshotQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SharedSnapshotQuotaExceededFault";
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  export function isa(o: any): o is SharedSnapshotQuotaExceededFault {
    return _smithy.isa(o, "SharedSnapshotQuotaExceededFault");
  }
}

/**
 * <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SnapshotQuotaExceededFault";
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  export function isa(o: any): o is SnapshotQuotaExceededFault {
    return _smithy.isa(o, "SnapshotQuotaExceededFault");
  }
}

/**
 * <p>The source could not be found.</p>
 */
export interface SourceNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SourceNotFoundFault";
  name: "SourceNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SourceNotFoundFault {
  export function isa(o: any): o is SourceNotFoundFault {
    return _smithy.isa(o, "SourceNotFoundFault");
  }
}

/**
 * <p>Request would result in user exceeding the allowed amount of storage available across all DB instances.</p>
 */
export interface StorageQuotaExceededFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "StorageQuotaExceededFault";
  name: "StorageQuotaExceededFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace StorageQuotaExceededFault {
  export function isa(o: any): o is StorageQuotaExceededFault {
    return _smithy.isa(o, "StorageQuotaExceededFault");
  }
}

/**
 * <p>
 *             <i>StorageType</i> specified cannot be associated with the DB Instance.</p>
 */
export interface StorageTypeNotSupportedFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "StorageTypeNotSupportedFault";
  name: "StorageTypeNotSupportedFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace StorageTypeNotSupportedFault {
  export function isa(o: any): o is StorageTypeNotSupportedFault {
    return _smithy.isa(o, "StorageTypeNotSupportedFault");
  }
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SubnetAlreadyInUse";
  name: "SubnetAlreadyInUse";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export function isa(o: any): o is SubnetAlreadyInUse {
    return _smithy.isa(o, "SubnetAlreadyInUse");
  }
}

/**
 * <p>This subscription already exists.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SubscriptionAlreadyExistFault";
  name: "SubscriptionAlreadyExistFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubscriptionAlreadyExistFault {
  export function isa(o: any): o is SubscriptionAlreadyExistFault {
    return _smithy.isa(o, "SubscriptionAlreadyExistFault");
  }
}

/**
 * <p>The designated subscription category could not be found.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SubscriptionCategoryNotFoundFault";
  name: "SubscriptionCategoryNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubscriptionCategoryNotFoundFault {
  export function isa(o: any): o is SubscriptionCategoryNotFoundFault {
    return _smithy.isa(o, "SubscriptionCategoryNotFoundFault");
  }
}

/**
 * <p>The designated subscription could not be found.</p>
 */
export interface SubscriptionNotFoundFault
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "SubscriptionNotFoundFault";
  name: "SubscriptionNotFoundFault";
  $fault: "client";
  /**
   * <p>A message describing the details of the problem.</p>
   */
  message?: string;
}

export namespace SubscriptionNotFoundFault {
  export function isa(o: any): o is SubscriptionNotFoundFault {
    return _smithy.isa(o, "SubscriptionNotFoundFault");
  }
}

export interface AddRoleToDBClusterMessage {
  __type?: "AddRoleToDBClusterMessage";
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Neptune DB cluster,
   *       for example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace AddRoleToDBClusterMessage {
  export function isa(o: any): o is AddRoleToDBClusterMessage {
    return _smithy.isa(o, "AddRoleToDBClusterMessage");
  }
}

export interface AddSourceIdentifierToSubscriptionMessage {
  __type?: "AddSourceIdentifierToSubscriptionMessage";
  /**
   * <p>The identifier of the event source to be added.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must
   *           be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier: string | undefined;

  /**
   * <p>The name of the event notification subscription you want to add a source identifier
   *       to.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace AddSourceIdentifierToSubscriptionMessage {
  export function isa(o: any): o is AddSourceIdentifierToSubscriptionMessage {
    return _smithy.isa(o, "AddSourceIdentifierToSubscriptionMessage");
  }
}

export interface AddSourceIdentifierToSubscriptionResult
  extends $MetadataBearer {
  __type?: "AddSourceIdentifierToSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace AddSourceIdentifierToSubscriptionResult {
  export function isa(o: any): o is AddSourceIdentifierToSubscriptionResult {
    return _smithy.isa(o, "AddSourceIdentifierToSubscriptionResult");
  }
}

export interface AddTagsToResourceMessage {
  __type?: "AddTagsToResourceMessage";
  /**
   * <p>The Amazon Neptune resource that the tags are added to. This value is an Amazon Resource
   *       Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon Neptune resource.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace AddTagsToResourceMessage {
  export function isa(o: any): o is AddTagsToResourceMessage {
    return _smithy.isa(o, "AddTagsToResourceMessage");
  }
}

export type ApplyMethod = "immediate" | "pending-reboot";

export interface ApplyPendingMaintenanceActionMessage {
  __type?: "ApplyPendingMaintenanceActionMessage";
  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>
   *          </p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in
   *       request of type <code>immediate</code> can't be undone.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during the next
   *           maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in
   *           requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the resource that the pending maintenance action applies
   *       to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceIdentifier: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
  export function isa(o: any): o is ApplyPendingMaintenanceActionMessage {
    return _smithy.isa(o, "ApplyPendingMaintenanceActionMessage");
  }
}

export interface ApplyPendingMaintenanceActionResult extends $MetadataBearer {
  __type?: "ApplyPendingMaintenanceActionResult";
  /**
   * <p>Describes the pending maintenance actions for a resource.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResult {
  export function isa(o: any): o is ApplyPendingMaintenanceActionResult {
    return _smithy.isa(o, "ApplyPendingMaintenanceActionResult");
  }
}

/**
 * <p>Specifies an Availability Zone.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The name of the availability zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export function isa(o: any): o is AvailabilityZone {
    return _smithy.isa(o, "AvailabilityZone");
  }
}

/**
 * <p>Specifies a character set.</p>
 */
export interface CharacterSet {
  __type?: "CharacterSet";
  /**
   * <p>The description of the character set.</p>
   */
  CharacterSetDescription?: string;

  /**
   * <p>The name of the character set.</p>
   */
  CharacterSetName?: string;
}

export namespace CharacterSet {
  export function isa(o: any): o is CharacterSet {
    return _smithy.isa(o, "CharacterSet");
  }
}

/**
 * <p>The configuration setting for the log types to be enabled for export
 *       to CloudWatch Logs for a specific DB instance or DB cluster.</p>
 *
 *          <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays
 *       determine which logs will be exported (or not exported) to CloudWatch Logs.</p>
 */
export interface CloudwatchLogsExportConfiguration {
  __type?: "CloudwatchLogsExportConfiguration";
  /**
   * <p>The list of log types to disable.</p>
   */
  DisableLogTypes?: Array<string>;

  /**
   * <p>The list of log types to enable.</p>
   */
  EnableLogTypes?: Array<string>;
}

export namespace CloudwatchLogsExportConfiguration {
  export function isa(o: any): o is CloudwatchLogsExportConfiguration {
    return _smithy.isa(o, "CloudwatchLogsExportConfiguration");
  }
}

export interface CopyDBClusterParameterGroupMessage {
  __type?: "CopyDBClusterParameterGroupMessage";
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group.
   *       For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB cluster parameter group is in the same AWS Region as the copy,
   *           specify a valid DB parameter group identifier, for example
   *           <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB parameter group is in a different AWS Region than the copy, specify a
   *           valid DB cluster parameter group ARN, for example
   *           <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the copied DB cluster parameter group.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Cannot be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-param-group1</code>
   *          </p>
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBClusterParameterGroupMessage {
  export function isa(o: any): o is CopyDBClusterParameterGroupMessage {
    return _smithy.isa(o, "CopyDBClusterParameterGroupMessage");
  }
}

export interface CopyDBClusterParameterGroupResult extends $MetadataBearer {
  __type?: "CopyDBClusterParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CopyDBClusterParameterGroupResult {
  export function isa(o: any): o is CopyDBClusterParameterGroupResult {
    return _smithy.isa(o, "CopyDBClusterParameterGroupResult");
  }
}

export interface CopyDBClusterSnapshotMessage {
  __type?: "CopyDBClusterSnapshotMessage";
  /**
   * <p>True to copy all tags from the source DB cluster snapshot to the target DB cluster
   *       snapshot, and otherwise false. The default is false.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot. The KMS key ID is the Amazon
   *       Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p>
   *
   *          <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a
   *       value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key. If you
   *       don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is
   *       encrypted with the same KMS key as the source DB cluster snapshot.</p>
   *
   *          <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then
   *       you must specify a value for <code>KmsKeyId</code>.</p>
   *          <p> KMS encryption keys are specific to the AWS Region that they are created in, and you
   *       can't use encryption keys from one AWS Region in another AWS Region.</p>
   *
   *          <p>You cannot encrypt an unencrypted DB cluster snapshot when you copy it. If you try to
   *       copy an unencrypted DB cluster snapshot and specify a value for the KmsKeyId parameter, an
   *       error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter is not
   *       case-sensitive.</p>
   *          <p>You can't copy from one AWS Region to another.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                <p>Specify a valid DB snapshot identifier.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to assign to the new DB cluster snapshot copy.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster
   *       snapshot. This parameter is not case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;
}

export namespace CopyDBClusterSnapshotMessage {
  export function isa(o: any): o is CopyDBClusterSnapshotMessage {
    return _smithy.isa(o, "CopyDBClusterSnapshotMessage");
  }
}

export interface CopyDBClusterSnapshotResult extends $MetadataBearer {
  __type?: "CopyDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CopyDBClusterSnapshotResult {
  export function isa(o: any): o is CopyDBClusterSnapshotResult {
    return _smithy.isa(o, "CopyDBClusterSnapshotResult");
  }
}

export interface CopyDBParameterGroupMessage {
  __type?: "CopyDBParameterGroupMessage";
  /**
   * <p>The identifier or ARN for the source DB parameter group. For information about creating
   *       an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   *
   *          <p>Constraints:</p>
   *
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must specify a valid DB parameter group identifier, for example
   *         <code>my-db-param-group</code>, or a valid ARN.</p>
   *             </li>
   *          </ul>
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the copied DB parameter group.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A description for the copied DB parameter group.</p>
   */
  TargetDBParameterGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Cannot be null, empty, or blank.</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Example: <code>my-db-parameter-group</code>
   *          </p>
   */
  TargetDBParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBParameterGroupMessage {
  export function isa(o: any): o is CopyDBParameterGroupMessage {
    return _smithy.isa(o, "CopyDBParameterGroupMessage");
  }
}

export interface CopyDBParameterGroupResult extends $MetadataBearer {
  __type?: "CopyDBParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
   */
  DBParameterGroup?: DBParameterGroup;
}

export namespace CopyDBParameterGroupResult {
  export function isa(o: any): o is CopyDBParameterGroupResult {
    return _smithy.isa(o, "CopyDBParameterGroupResult");
  }
}

export interface CreateDBClusterMessage {
  __type?: "CreateDBClusterMessage";
  /**
   * <p>A list of EC2 Availability Zones that instances in the DB cluster can be created
   *       in.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum
   *       value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * <p>The DB cluster identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p> The name of the DB cluster parameter group to associate with this DB cluster. If this
   *       argument is omitted, the default is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A DB subnet group to associate with this DB cluster.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not provide a
   *       name, Amazon Neptune will not create a database in the DB cluster you are creating.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use. Currently, setting this
   *       parameter has no effect.</p>
   *          <p>Example: <code>1.0.1</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are creating a DB cluster with the same AWS account that owns the KMS encryption key used
   *       to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the
   *       KMS encryption key.</p>
   *          <p>If an encryption key is not specified in <code>KmsKeyId</code>:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted source, then
   *           Amazon Neptune will use the encryption key used to encrypt the source. Otherwise, Amazon
   *           Neptune will use your default encryption key.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>StorageEncrypted</code> parameter is true and
   *           <code>ReplicationSourceIdentifier</code> is not specified, then Amazon Neptune will use
   *           your default encryption key.</p>
   *             </li>
   *          </ul>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *       different default encryption key for each AWS Region.</p>
   *          <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must
   *       set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This
   *       key is used to encrypt the Read Replica in that AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII
   *       character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name of the master user for the DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  PreSignedUrl?: string;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are
   *       enabled using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred
   *       Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated
   *       Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region, occurring on a random day of the week. To see the time blocks available, see
   *       <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html"> Adjusting the Preferred
   *       Maintenance Window</a> in the <i>Amazon Neptune User Guide.</i>
   *          </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster
   *       is created as a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The tags to assign to the new DB cluster.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace CreateDBClusterMessage {
  export function isa(o: any): o is CreateDBClusterMessage {
    return _smithy.isa(o, "CreateDBClusterMessage");
  }
}

export interface CreateDBClusterParameterGroupMessage {
  __type?: "CreateDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated
   *       with one and only one DB cluster parameter group family, and can be applied only to a DB
   *       cluster running a database engine and engine version compatible with that DB cluster parameter
   *       group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the new DB cluster parameter group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBClusterParameterGroupMessage {
  export function isa(o: any): o is CreateDBClusterParameterGroupMessage {
    return _smithy.isa(o, "CreateDBClusterParameterGroupMessage");
  }
}

export interface CreateDBClusterParameterGroupResult extends $MetadataBearer {
  __type?: "CreateDBClusterParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CreateDBClusterParameterGroupResult {
  export function isa(o: any): o is CreateDBClusterParameterGroupResult {
    return _smithy.isa(o, "CreateDBClusterParameterGroupResult");
  }
}

export interface CreateDBClusterResult extends $MetadataBearer {
  __type?: "CreateDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace CreateDBClusterResult {
  export function isa(o: any): o is CreateDBClusterResult {
    return _smithy.isa(o, "CreateDBClusterResult");
  }
}

export interface CreateDBClusterSnapshotMessage {
  __type?: "CreateDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase
   *       string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1-snapshot1</code>
   *          </p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the DB cluster snapshot.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBClusterSnapshotMessage {
  export function isa(o: any): o is CreateDBClusterSnapshotMessage {
    return _smithy.isa(o, "CreateDBClusterSnapshotMessage");
  }
}

export interface CreateDBClusterSnapshotResult extends $MetadataBearer {
  __type?: "CreateDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CreateDBClusterSnapshotResult {
  export function isa(o: any): o is CreateDBClusterSnapshotResult {
    return _smithy.isa(o, "CreateDBClusterSnapshotResult");
  }
}

export interface CreateDBInstanceMessage {
  __type?: "CreateDBInstanceMessage";
  /**
   * <p>The amount of storage (in gibibytes) to allocate for the DB instance.</p>
   *          <p>Type: Integer</p>
   *          <p>Not applicable. Neptune cluster volumes automatically grow as the amount of data in your
   *       database increases, though you are only charged for the space that you use in a Neptune
   *       cluster volume.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Indicates that minor engine upgrades are applied automatically to the DB instance during
   *       the maintenance window.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p> The EC2 Availability Zone that the DB instance is created in</p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p>
   *          <p> Example: <code>us-east-1d</code>
   *          </p>
   *          <p> Constraint: The AvailabilityZone parameter can't be specified if the MultiAZ parameter is
   *       set to <code>true</code>. The specified Availability Zone must be in the same AWS Region as
   *       the current endpoint.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of days for which automated backups are
   *       retained.</p>
   *          <p>Not applicable. The retention period for automated backups is managed by the DB cluster.
   *       For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35</p>
   *             </li>
   *             <li>
   *                <p>Cannot be set to 0 if the DB instance is a source to Read Replicas</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   *          <p>For information on creating a DB cluster, see <a>CreateDBCluster</a>.</p>
   *          <p>Type: String</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *       Not all DB instance classes are available in all AWS Regions.</p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Not supported.</p>
   */
  DBName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If this argument is
   *       omitted, the default DBParameterGroup for the specified engine is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *          <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: Array<string>;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   *          <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *
   *     </p>
   *          <p>You can enable or disable deletion protection for the DB cluster.
   *       For more information, see <a>CreateDBCluster</a>. DB instances in a DB
   *       cluster can be deleted even when deletion protection is enabled for the DB cluster.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specify the Active Directory Domain to create the instance in.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory
   *       Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>True to enable AWS Identity and Access Management (IAM) authentication for Neptune.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The name of the database engine to be used for this instance.</p>
   *          <p>Valid Values: <code>neptune</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use. Currently, setting this
   *       parameter has no effect.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially
   *       allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are creating a DB instance with the same AWS account that owns the KMS encryption key used
   *       to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the
   *       KM encryption key.</p>
   *          <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information,
   *       see <a>CreateDBCluster</a>.</p>
   *          <p>If the <code>StorageEncrypted</code> parameter is true, and you do not specify a value for
   *       the <code>KmsKeyId</code> parameter, then Amazon Neptune will use your default encryption key.
   *       AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *       different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>License model information for this DB instance.</p>
   *          <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *       <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character
   *       except "/", """, or "@".</p>
   *          <p> Not used.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name for the master user. Not used.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default
   *       is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set
   *       <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example,
   *       <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. You can't set the AvailabilityZone
   *       parameter if the MultiAZ parameter is set to true.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Not applicable. The port is managed by the DB cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   *          <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * <p> The daily time range during which automated backups are created.</p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region, occurring on a random day of the week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that specifies the order in which an Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *       </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   *          <p>Not applicable. The encryption for DB instances is managed by the DB cluster. For more
   *       information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: false</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>Not applicable. Storage is managed by the DB Cluster.</p>
   */
  StorageType?: string;

  /**
   * <p>The tags to assign to the new instance.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>The time zone of the DB instance.</p>
   */
  Timezone?: string;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB instance.</p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB
   *       cluster. For more information, see <a>CreateDBCluster</a>.</p>
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace CreateDBInstanceMessage {
  export function isa(o: any): o is CreateDBInstanceMessage {
    return _smithy.isa(o, "CreateDBInstanceMessage");
  }
}

export interface CreateDBInstanceResult extends $MetadataBearer {
  __type?: "CreateDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceResult {
  export function isa(o: any): o is CreateDBInstanceResult {
    return _smithy.isa(o, "CreateDBInstanceResult");
  }
}

export interface CreateDBParameterGroupMessage {
  __type?: "CreateDBParameterGroupMessage";
  /**
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and
   *       only one DB parameter group family, and can be applied only to a DB instance running a
   *       database engine and engine version compatible with that DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>The description for the DB parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>The tags to be assigned to the new DB parameter group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBParameterGroupMessage {
  export function isa(o: any): o is CreateDBParameterGroupMessage {
    return _smithy.isa(o, "CreateDBParameterGroupMessage");
  }
}

export interface CreateDBParameterGroupResult extends $MetadataBearer {
  __type?: "CreateDBParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
   */
  DBParameterGroup?: DBParameterGroup;
}

export namespace CreateDBParameterGroupResult {
  export function isa(o: any): o is CreateDBParameterGroupResult {
    return _smithy.isa(o, "CreateDBParameterGroupResult");
  }
}

export interface CreateDBSubnetGroupMessage {
  __type?: "CreateDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces,
   *       or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The EC2 Subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: Array<string> | undefined;

  /**
   * <p>The tags to be assigned to the new DB subnet group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBSubnetGroupMessage {
  export function isa(o: any): o is CreateDBSubnetGroupMessage {
    return _smithy.isa(o, "CreateDBSubnetGroupMessage");
  }
}

export interface CreateDBSubnetGroupResult extends $MetadataBearer {
  __type?: "CreateDBSubnetGroupResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace CreateDBSubnetGroupResult {
  export function isa(o: any): o is CreateDBSubnetGroupResult {
    return _smithy.isa(o, "CreateDBSubnetGroupResult");
  }
}

export interface CreateEventSubscriptionMessage {
  __type?: "CreateEventSubscriptionMessage";
  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription, set to <b>false</b> to create the subscription but not
   *       active it.</p>
   */
  Enabled?: boolean;

  /**
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType by using the
   *       <b>DescribeEventCategories</b> action.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not
   *       specified, then all sources are included in the response. An identifier must begin with a
   *       letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or
   *       contain two consecutive hyphens.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIds are supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be
   *           supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must
   *           be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be
   *           supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIds?: Array<string>;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> |
   *       <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> |
   *       <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>The tags to be applied to the new event subscription.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateEventSubscriptionMessage {
  export function isa(o: any): o is CreateEventSubscriptionMessage {
    return _smithy.isa(o, "CreateEventSubscriptionMessage");
  }
}

export interface CreateEventSubscriptionResult extends $MetadataBearer {
  __type?: "CreateEventSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResult {
  export function isa(o: any): o is CreateEventSubscriptionResult {
    return _smithy.isa(o, "CreateEventSubscriptionResult");
  }
}

/**
 * <p>Contains the details of an Amazon Neptune DB cluster.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
 */
export interface DBCluster {
  __type?: "DBCluster";
  /**
   * <p>
   *             <code>AllocatedStorage</code> always returns 1, because Neptune DB cluster storage size is
   *       not fixed, but instead automatically adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated
   *       with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the
   *       DB cluster to access other AWS services on your behalf.</p>
   */
  AssociatedRoles?: Array<DBClusterRole>;

  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster can be
   *       created in.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that
   *       identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: Array<DBClusterMember>;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  DBClusterOptionGroupMemberships?: Array<DBClusterOptionGroupStatus>;

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the
   *       name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create
   *       time, if one was specified when the DB cluster was created. This same name is returned for the
   *       life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB cluster. This identifier is found
   *       in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>Indicates if the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specifies the earliest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p>
   */
  EnabledCloudwatchLogsExports?: Array<string>;

  /**
   * <p>Specifies the connection endpoint for the primary instance of the DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the
   *       encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>Contains the master username for the DB cluster.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies whether the DB cluster has instances in multiple Availability Zones.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Specifies the progress of the operation as a percentage.</p>
   */
  PercentProgress?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       cluster.</p>
   */
  ReadReplicaIdentifiers?: Array<string>;

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *       connections across the Read Replicas that are available in a DB cluster. As clients request
   *       new connections to the reader endpoint, Neptune distributes the connection requests among the
   *       Read Replicas in the DB cluster. This functionality can help balance your read workload across
   *       multiple Read Replicas in your DB cluster.</p>
   *          <p>If a failover occurs, and the Read Replica that you are connected to is promoted to be the
   *       primary instance, your connection is dropped. To continue sending your read workload to other
   *       Read Replicas in the cluster, you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Not supported by Neptune.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Specifies the current state of this DB cluster.</p>
   */
  Status?: string;

  /**
   * <p>Specifies whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides a list of VPC security groups that the DB cluster belongs to.</p>
   */
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
}

export namespace DBCluster {
  export function isa(o: any): o is DBCluster {
    return _smithy.isa(o, "DBCluster");
  }
}

/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface DBClusterMember {
  __type?: "DBClusterMember";
  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB
   *       cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB
   *       cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;
}

export namespace DBClusterMember {
  export function isa(o: any): o is DBClusterMember {
    return _smithy.isa(o, "DBClusterMember");
  }
}

export interface DBClusterMessage extends $MetadataBearer {
  __type?: "DBClusterMessage";
  /**
   * <p>Contains a list of DB clusters for the user.</p>
   */
  DBClusters?: Array<DBCluster>;

  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBClusters request.</p>
   */
  Marker?: string;
}

export namespace DBClusterMessage {
  export function isa(o: any): o is DBClusterMessage {
    return _smithy.isa(o, "DBClusterMessage");
  }
}

/**
 * <p>Contains status information for a DB cluster option group.</p>
 */
export interface DBClusterOptionGroupStatus {
  __type?: "DBClusterOptionGroupStatus";
  /**
   * <p>Specifies the name of the DB cluster option group.</p>
   */
  DBClusterOptionGroupName?: string;

  /**
   * <p>Specifies the status of the DB cluster option group.</p>
   */
  Status?: string;
}

export namespace DBClusterOptionGroupStatus {
  export function isa(o: any): o is DBClusterOptionGroupStatus {
    return _smithy.isa(o, "DBClusterOptionGroupStatus");
  }
}

/**
 * <p>Contains the details of an Amazon Neptune DB cluster parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterParameterGroups</a> action.</p>
 */
export interface DBClusterParameterGroup {
  __type?: "DBClusterParameterGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupArn?: string;

  /**
   * <p>Provides the name of the DB cluster parameter group.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is
   *       compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   */
  Description?: string;
}

export namespace DBClusterParameterGroup {
  export function isa(o: any): o is DBClusterParameterGroup {
    return _smithy.isa(o, "DBClusterParameterGroup");
  }
}

export interface DBClusterParameterGroupDetails extends $MetadataBearer {
  __type?: "DBClusterParameterGroupDetails";
  /**
   * <p> An optional pagination token provided by a previous DescribeDBClusterParameters request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Array<Parameter>;
}

export namespace DBClusterParameterGroupDetails {
  export function isa(o: any): o is DBClusterParameterGroupDetails {
    return _smithy.isa(o, "DBClusterParameterGroupDetails");
  }
}

export interface DBClusterParameterGroupNameMessage extends $MetadataBearer {
  __type?: "DBClusterParameterGroupNameMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBClusterParameterGroupName?: string;
}

export namespace DBClusterParameterGroupNameMessage {
  export function isa(o: any): o is DBClusterParameterGroupNameMessage {
    return _smithy.isa(o, "DBClusterParameterGroupNameMessage");
  }
}

export interface DBClusterParameterGroupsMessage extends $MetadataBearer {
  __type?: "DBClusterParameterGroupsMessage";
  /**
   * <p>A list of DB cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: Array<DBClusterParameterGroup>;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBClusterParameterGroupsMessage {
  export function isa(o: any): o is DBClusterParameterGroupsMessage {
    return _smithy.isa(o, "DBClusterParameterGroupsMessage");
  }
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB
 *       cluster.</p>
 */
export interface DBClusterRole {
  __type?: "DBClusterRole";
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *       cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status
   *       property returns one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be
   *           used to access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB
   *           cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB
   *           cluster is unable to assume the IAM role in order to access other AWS services on your
   *           behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterRole {
  export function isa(o: any): o is DBClusterRole {
    return _smithy.isa(o, "DBClusterRole");
  }
}

/**
 * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
 */
export interface DBClusterSnapshot {
  __type?: "DBClusterSnapshot";
  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the DB cluster snapshot can
   *       be restored in.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time
   *       (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was
   *       created from.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotArn?: string;

  /**
   * <p>Specifies the identifier for the DB cluster snapshot.</p>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Provides the version of the database engine for this DB cluster snapshot.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts
   *       is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB
   *       cluster snapshot.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Provides the license model information for this DB cluster snapshot.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the master username for the DB cluster snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Specifies the percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies the port that the DB cluster was listening on at the time of the
   *       snapshot.</p>
   */
  Port?: number;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Provides the type of the DB cluster snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>If the DB cluster snapshot was copied from a source DB cluster snapshot, the Amazon
   *       Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
   */
  SourceDBClusterSnapshotArn?: string;

  /**
   * <p>Specifies the status of this DB cluster snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies whether the DB cluster snapshot is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Provides the VPC ID associated with the DB cluster snapshot.</p>
   */
  VpcId?: string;
}

export namespace DBClusterSnapshot {
  export function isa(o: any): o is DBClusterSnapshot {
    return _smithy.isa(o, "DBClusterSnapshot");
  }
}

/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to restore
 *       a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export interface DBClusterSnapshotAttribute {
  __type?: "DBClusterSnapshotAttribute";
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of AWS accounts that have
   *       permission to copy or restore the manual DB cluster snapshot. For more information, see the
   *       <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual DB
   *       cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster
   *       snapshot is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: Array<string>;
}

export namespace DBClusterSnapshotAttribute {
  export function isa(o: any): o is DBClusterSnapshotAttribute {
    return _smithy.isa(o, "DBClusterSnapshotAttribute");
  }
}

/**
 * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
 *          <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or
 *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
 */
export interface DBClusterSnapshotAttributesResult {
  __type?: "DBClusterSnapshotAttributesResult";
  /**
   * <p>The list of attributes and values for the manual DB cluster snapshot.</p>
   */
  DBClusterSnapshotAttributes?: Array<DBClusterSnapshotAttribute>;

  /**
   * <p>The identifier of the manual DB cluster snapshot that the attributes apply to.</p>
   */
  DBClusterSnapshotIdentifier?: string;
}

export namespace DBClusterSnapshotAttributesResult {
  export function isa(o: any): o is DBClusterSnapshotAttributesResult {
    return _smithy.isa(o, "DBClusterSnapshotAttributesResult");
  }
}

export interface DBClusterSnapshotMessage extends $MetadataBearer {
  __type?: "DBClusterSnapshotMessage";
  /**
   * <p>Provides a list of DB cluster snapshots for the user.</p>
   */
  DBClusterSnapshots?: Array<DBClusterSnapshot>;

  /**
   * <p> An optional pagination token provided by a previous <a>DescribeDBClusterSnapshots</a> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;
}

export namespace DBClusterSnapshotMessage {
  export function isa(o: any): o is DBClusterSnapshotMessage {
    return _smithy.isa(o, "DBClusterSnapshotMessage");
  }
}

/**
 * <p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.</p>
 */
export interface DBEngineVersion {
  __type?: "DBEngineVersion";
  /**
   * <p>The description of the database engine.</p>
   */
  DBEngineDescription?: string;

  /**
   * <p>The description of the database engine version.</p>
   */
  DBEngineVersionDescription?: string;

  /**
   * <p>The name of the DB parameter group family for the database engine.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  DefaultCharacterSet?: CharacterSet;

  /**
   * <p>The name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch
   *       Logs.</p>
   */
  ExportableLogTypes?: Array<string>;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  SupportedCharacterSets?: Array<CharacterSet>;

  /**
   * <p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter
   *       of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedTimezones?: Array<Timezone>;

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types
   *       specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * <p>Indicates whether the database engine version supports read replicas.</p>
   */
  SupportsReadReplica?: boolean;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: Array<UpgradeTarget>;
}

export namespace DBEngineVersion {
  export function isa(o: any): o is DBEngineVersion {
    return _smithy.isa(o, "DBEngineVersion");
  }
}

export interface DBEngineVersionMessage extends $MetadataBearer {
  __type?: "DBEngineVersionMessage";
  /**
   * <p> A list of <code>DBEngineVersion</code> elements.</p>
   */
  DBEngineVersions?: Array<DBEngineVersion>;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBEngineVersionMessage {
  export function isa(o: any): o is DBEngineVersionMessage {
    return _smithy.isa(o, "DBEngineVersionMessage");
  }
}

/**
 * <p>Contains the details of an Amazon Neptune DB instance.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
 */
export interface DBInstance {
  __type?: "DBInstance";
  /**
   * <p>Specifies the allocated storage size specified in gibibytes.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Indicates that minor version patches are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance is located in.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The identifier of the CA certificate for this DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  CharacterSetName?: string;

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB
   *       instance.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that
   *       the DB instance is a member of.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB instance.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>Contains the name of the compute and memory capacity class of the DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that
   *       identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>The database name.</p>
   */
  DBName?: string;

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?: Array<DBParameterGroupStatus>;

  /**
   * <p> Provides List of DB security group elements containing only
   *       <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.</p>
   */
  DBSecurityGroups?: Array<DBSecurityGroupMembership>;

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the
   *       name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB
   *       cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is found
   *       in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>Indicates if the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled.
   *
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Not supported</p>
   */
  DomainMemberships?: Array<DomainMembership>;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch
   *       Logs.</p>
   */
  EnabledCloudwatchLogsExports?: Array<string>;

  /**
   * <p>Specifies the connection endpoint.</p>
   */
  Endpoint?: Endpoint;

  /**
   * <p>Provides the name of the database engine to be used for this DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the
   *       Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>True if AWS Identity and Access Management (IAM) authentication is enabled, and otherwise
   *       false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Provides the date and time the DB instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value.</p>
   */
  Iops?: number;

  /**
   * <p> Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time
   *       restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Contains the master username for the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send Enhanced Monitoring metrics to
   *       Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupMemberships?: Array<OptionGroupMembership>;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when
   *       changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p> Specifies the daily time range during which automated backups are created if automated
   *       backups are enabled, as determined by the <code>BackupRetentionPeriod</code>.</p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal
   *       Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.
   *    </p>
   */
  PromotionTier?: number;

  /**
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Contains one or more identifiers of DB clusters that are Read Replicas of this DB
   *       instance.</p>
   */
  ReadReplicaDBClusterIdentifiers?: Array<string>;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB
   *       instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: Array<string>;

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read
   *       Replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with
   *       multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a Read Replica. If the instance is not a Read Replica, this is blank.</p>
   */
  StatusInfos?: Array<DBInstanceStatusInfo>;

  /**
   * <p>Not supported: The encryption for DB instances is managed by the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE
   *       encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>Not supported.</p>
   */
  Timezone?: string;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
}

export namespace DBInstance {
  export function isa(o: any): o is DBInstance {
    return _smithy.isa(o, "DBInstance");
  }
}

export interface DBInstanceMessage extends $MetadataBearer {
  __type?: "DBInstanceMessage";
  /**
   * <p> A list of <a>DBInstance</a> instances.</p>
   */
  DBInstances?: Array<DBInstance>;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

export namespace DBInstanceMessage {
  export function isa(o: any): o is DBInstanceMessage {
    return _smithy.isa(o, "DBInstanceMessage");
  }
}

/**
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface DBInstanceStatusInfo {
  __type?: "DBInstanceStatusInfo";
  /**
   * <p>Details of the error if there is an error for the instance. If the instance is not in an
   *       error state, this value is blank.</p>
   */
  Message?: string;

  /**
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance
   *       is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a StatusType of read replica, the values can be
   *       replicating, error, stopped, or terminated.</p>
   */
  Status?: string;

  /**
   * <p>This value is currently "read replication."</p>
   */
  StatusType?: string;
}

export namespace DBInstanceStatusInfo {
  export function isa(o: any): o is DBInstanceStatusInfo {
    return _smithy.isa(o, "DBInstanceStatusInfo");
  }
}

/**
 * <p>Contains the details of an Amazon Neptune DB parameter group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBParameterGroups</a> action.</p>
 */
export interface DBParameterGroup {
  __type?: "DBParameterGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB parameter group.</p>
   */
  DBParameterGroupArn?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB parameter group is
   *       compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>Provides the customer-specified description for this DB parameter group.</p>
   */
  Description?: string;
}

export namespace DBParameterGroup {
  export function isa(o: any): o is DBParameterGroup {
    return _smithy.isa(o, "DBParameterGroup");
  }
}

export interface DBParameterGroupDetails extends $MetadataBearer {
  __type?: "DBParameterGroupDetails";
  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of <a>Parameter</a> values.</p>
   */
  Parameters?: Array<Parameter>;
}

export namespace DBParameterGroupDetails {
  export function isa(o: any): o is DBParameterGroupDetails {
    return _smithy.isa(o, "DBParameterGroupDetails");
  }
}

export interface DBParameterGroupNameMessage extends $MetadataBearer {
  __type?: "DBParameterGroupNameMessage";
  /**
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;
}

export namespace DBParameterGroupNameMessage {
  export function isa(o: any): o is DBParameterGroupNameMessage {
    return _smithy.isa(o, "DBParameterGroupNameMessage");
  }
}

/**
 * <p>The status of the DB parameter group.</p>
 *          <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateDBInstance</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteDBInstance</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ModifyDBInstance</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RebootDBInstance</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface DBParameterGroupStatus {
  __type?: "DBParameterGroupStatus";
  /**
   * <p>The name of the DP parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export namespace DBParameterGroupStatus {
  export function isa(o: any): o is DBParameterGroupStatus {
    return _smithy.isa(o, "DBParameterGroupStatus");
  }
}

export interface DBParameterGroupsMessage extends $MetadataBearer {
  __type?: "DBParameterGroupsMessage";
  /**
   * <p>A list of <a>DBParameterGroup</a> instances.</p>
   */
  DBParameterGroups?: Array<DBParameterGroup>;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBParameterGroupsMessage {
  export function isa(o: any): o is DBParameterGroupsMessage {
    return _smithy.isa(o, "DBParameterGroupsMessage");
  }
}

/**
 * <p>Specifies membership in a designated DB security group.</p>
 */
export interface DBSecurityGroupMembership {
  __type?: "DBSecurityGroupMembership";
  /**
   * <p>The name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>The status of the DB security group.</p>
   */
  Status?: string;
}

export namespace DBSecurityGroupMembership {
  export function isa(o: any): o is DBSecurityGroupMembership {
    return _smithy.isa(o, "DBSecurityGroupMembership");
  }
}

/**
 * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
 *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 */
export interface DBSubnetGroup {
  __type?: "DBSubnetGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB subnet group.</p>
   */
  DBSubnetGroupArn?: string;

  /**
   * <p>Provides the description of the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The name of the DB subnet group.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Provides the status of the DB subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p> Contains a list of <a>Subnet</a> elements.</p>
   */
  Subnets?: Array<Subnet>;

  /**
   * <p>Provides the VpcId of the DB subnet group.</p>
   */
  VpcId?: string;
}

export namespace DBSubnetGroup {
  export function isa(o: any): o is DBSubnetGroup {
    return _smithy.isa(o, "DBSubnetGroup");
  }
}

export interface DBSubnetGroupMessage extends $MetadataBearer {
  __type?: "DBSubnetGroupMessage";
  /**
   * <p> A list of <a>DBSubnetGroup</a> instances.</p>
   */
  DBSubnetGroups?: Array<DBSubnetGroup>;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DBSubnetGroupMessage {
  export function isa(o: any): o is DBSubnetGroupMessage {
    return _smithy.isa(o, "DBSubnetGroupMessage");
  }
}

export interface DeleteDBClusterMessage {
  __type?: "DeleteDBClusterMessage";
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p> The DB cluster snapshot identifier of the new DB cluster snapshot created when
   *       <code>SkipFinalSnapshot</code> is set to <code>false</code>.</p>
   *          <note>
   *             <p> Specifying this parameter and also setting the <code>SkipFinalShapshot</code> parameter
   *         to true results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p> Determines whether a final DB cluster snapshot is created before the DB cluster is
   *       deleted. If <code>true</code> is specified, no DB cluster snapshot is created. If
   *       <code>false</code> is specified, a DB cluster snapshot is created before the DB cluster is
   *       deleted.</p>
   *          <note>
   *             <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if
   *         <code>SkipFinalSnapshot</code> is <code>false</code>.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBClusterMessage {
  export function isa(o: any): o is DeleteDBClusterMessage {
    return _smithy.isa(o, "DeleteDBClusterMessage");
  }
}

export interface DeleteDBClusterParameterGroupMessage {
  __type?: "DeleteDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Cannot be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;
}

export namespace DeleteDBClusterParameterGroupMessage {
  export function isa(o: any): o is DeleteDBClusterParameterGroupMessage {
    return _smithy.isa(o, "DeleteDBClusterParameterGroupMessage");
  }
}

export interface DeleteDBClusterResult extends $MetadataBearer {
  __type?: "DeleteDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace DeleteDBClusterResult {
  export function isa(o: any): o is DeleteDBClusterResult {
    return _smithy.isa(o, "DeleteDBClusterResult");
  }
}

export interface DeleteDBClusterSnapshotMessage {
  __type?: "DeleteDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the
   *       <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBClusterSnapshotMessage {
  export function isa(o: any): o is DeleteDBClusterSnapshotMessage {
    return _smithy.isa(o, "DeleteDBClusterSnapshotMessage");
  }
}

export interface DeleteDBClusterSnapshotResult extends $MetadataBearer {
  __type?: "DeleteDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon Neptune DB cluster snapshot</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusterSnapshots</a> action.</p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace DeleteDBClusterSnapshotResult {
  export function isa(o: any): o is DeleteDBClusterSnapshotResult {
    return _smithy.isa(o, "DeleteDBClusterSnapshotResult");
  }
}

export interface DeleteDBInstanceMessage {
  __type?: "DeleteDBInstanceMessage";
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p> The DBSnapshotIdentifier of the new DBSnapshot created when SkipFinalSnapshot is set to
   *       <code>false</code>.</p>
   *          <note>
   *             <p>Specifying this parameter and also setting the SkipFinalShapshot parameter to true
   *         results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified when deleting a Read Replica.</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p> Determines whether a final DB snapshot is created before the DB instance is deleted. If
   *       <code>true</code> is specified, no DBSnapshot is created. If <code>false</code> is specified,
   *       a DB snapshot is created before the DB instance is deleted.</p>
   *          <p>Note that when a DB instance is in a failure state and has a status of 'failed',
   *       'incompatible-restore', or 'incompatible-network', it can only be deleted when the
   *       SkipFinalSnapshot parameter is set to "true".</p>
   *          <p>Specify <code>true</code> when deleting a Read Replica.</p>
   *          <note>
   *             <p>The FinalDBSnapshotIdentifier parameter must be specified if SkipFinalSnapshot is
   *         <code>false</code>.</p>
   *          </note>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBInstanceMessage {
  export function isa(o: any): o is DeleteDBInstanceMessage {
    return _smithy.isa(o, "DeleteDBInstanceMessage");
  }
}

export interface DeleteDBInstanceResult extends $MetadataBearer {
  __type?: "DeleteDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

export namespace DeleteDBInstanceResult {
  export function isa(o: any): o is DeleteDBInstanceResult {
    return _smithy.isa(o, "DeleteDBInstanceResult");
  }
}

export interface DeleteDBParameterGroupMessage {
  __type?: "DeleteDBParameterGroupMessage";
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the name of an existing DB parameter group</p>
   *             </li>
   *             <li>
   *                <p>You can't delete a default DB parameter group</p>
   *             </li>
   *             <li>
   *                <p>Cannot be associated with any DB instances</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;
}

export namespace DeleteDBParameterGroupMessage {
  export function isa(o: any): o is DeleteDBParameterGroupMessage {
    return _smithy.isa(o, "DeleteDBParameterGroupMessage");
  }
}

export interface DeleteDBSubnetGroupMessage {
  __type?: "DeleteDBSubnetGroupMessage";
  /**
   * <p>The name of the database subnet group to delete.</p>
   *          <note>
   *             <p>You can't delete the default subnet group.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;
}

export namespace DeleteDBSubnetGroupMessage {
  export function isa(o: any): o is DeleteDBSubnetGroupMessage {
    return _smithy.isa(o, "DeleteDBSubnetGroupMessage");
  }
}

export interface DeleteEventSubscriptionMessage {
  __type?: "DeleteEventSubscriptionMessage";
  /**
   * <p>The name of the event notification subscription you want to delete.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  export function isa(o: any): o is DeleteEventSubscriptionMessage {
    return _smithy.isa(o, "DeleteEventSubscriptionMessage");
  }
}

export interface DeleteEventSubscriptionResult extends $MetadataBearer {
  __type?: "DeleteEventSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace DeleteEventSubscriptionResult {
  export function isa(o: any): o is DeleteEventSubscriptionResult {
    return _smithy.isa(o, "DeleteEventSubscriptionResult");
  }
}

export interface DescribeDBClusterParameterGroupsMessage {
  __type?: "DescribeDBClusterParameterGroupsMessage";
  /**
   * <p>The name of a specific DB cluster parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameterGroups</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterParameterGroupsMessage {
  export function isa(o: any): o is DescribeDBClusterParameterGroupsMessage {
    return _smithy.isa(o, "DescribeDBClusterParameterGroupsMessage");
  }
}

export interface DescribeDBClusterParametersMessage {
  __type?: "DescribeDBClusterParametersMessage";
  /**
   * <p>The name of a specific DB cluster parameter group to return parameter details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> A value that indicates to return only parameters for a specific source. Parameter sources
   *       can be <code>engine</code>, <code>service</code>, or <code>customer</code>.</p>
   */
  Source?: string;
}

export namespace DescribeDBClusterParametersMessage {
  export function isa(o: any): o is DescribeDBClusterParametersMessage {
    return _smithy.isa(o, "DescribeDBClusterParametersMessage");
  }
}

export interface DescribeDBClusterSnapshotAttributesMessage {
  __type?: "DescribeDBClusterSnapshotAttributesMessage";
  /**
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBClusterSnapshotAttributesMessage {
  export function isa(o: any): o is DescribeDBClusterSnapshotAttributesMessage {
    return _smithy.isa(o, "DescribeDBClusterSnapshotAttributesMessage");
  }
}

export interface DescribeDBClusterSnapshotAttributesResult
  extends $MetadataBearer {
  __type?: "DescribeDBClusterSnapshotAttributesResult";
  /**
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace DescribeDBClusterSnapshotAttributesResult {
  export function isa(o: any): o is DescribeDBClusterSnapshotAttributesResult {
    return _smithy.isa(o, "DescribeDBClusterSnapshotAttributesResult");
  }
}

export interface DescribeDBClusterSnapshotsMessage {
  __type?: "DescribeDBClusterSnapshotsMessage";
  /**
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for. This parameter
   *       can't be used in conjunction with the <code>DBClusterSnapshotIdentifier</code> parameter. This
   *       parameter is not case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A specific DB cluster snapshot identifier to describe. This parameter can't be used in
   *       conjunction with the <code>DBClusterIdentifier</code> parameter. This value is stored as a
   *       lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code>
   *           parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>True to include manual DB cluster snapshots that are public and can be copied or restored
   *       by any AWS account, and otherwise false. The default is <code>false</code>. The default is
   *       false.</p>
   *          <p>You can share a manual DB cluster snapshot as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>True to include shared manual DB cluster snapshots from other AWS accounts that this AWS
   *       account has been given permission to copy or restore, and otherwise false. The default is
   *       <code>false</code>.</p>
   *          <p>You can give an AWS account permission to restore a manual DB cluster snapshot from
   *       another AWS account by the <a>ModifyDBClusterSnapshotAttribute</a> API
   *       action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBClusterSnapshots</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *    </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The type of DB cluster snapshots to be returned. You can specify one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all DB cluster snapshots that have been automatically
   *           taken by Amazon Neptune for my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS
   *           account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual DB cluster snapshots that have been shared to
   *           my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all DB cluster snapshots that have been marked as
   *           public.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB
   *       cluster snapshots are returned. You can include shared DB cluster snapshots with these results
   *       by setting the <code>IncludeShared</code> parameter to <code>true</code>. You can include
   *       public DB cluster snapshots with these results by setting the <code>IncludePublic</code>
   *       parameter to <code>true</code>.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for
   *       <code>SnapshotType</code> values of <code>manual</code> or <code>automated</code>. The
   *       <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *       <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when
   *       <code>SnapshotType</code> is set to <code>public</code>.</p>
   */
  SnapshotType?: string;
}

export namespace DescribeDBClusterSnapshotsMessage {
  export function isa(o: any): o is DescribeDBClusterSnapshotsMessage {
    return _smithy.isa(o, "DescribeDBClusterSnapshotsMessage");
  }
}

export interface DescribeDBClustersMessage {
  __type?: "DescribeDBClustersMessage";
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from
   *       only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon
   *           Resource Names (ARNs). The results list will only include information about the DB
   *           clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>An optional pagination token provided by a previous <a>DescribeDBClusters</a>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClustersMessage {
  export function isa(o: any): o is DescribeDBClustersMessage {
    return _smithy.isa(o, "DescribeDBClustersMessage");
  }
}

export interface DescribeDBEngineVersionsMessage {
  __type?: "DescribeDBEngineVersionsMessage";
  /**
   * <p>The name of a specific DB parameter group family to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBParameterGroupFamily.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Indicates that only the default version of the specified engine or engine and major
   *       version combination is returned.</p>
   */
  DefaultOnly?: boolean;

  /**
   * <p>The database engine to return.</p>
   */
  Engine?: string;

  /**
   * <p>The database engine version to return.</p>
   *          <p>Example: <code>5.1.49</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>Not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>If this parameter is specified and the requested engine supports the
   *       <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>, the response
   *       includes a list of supported character sets for each engine version.</p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * <p>If this parameter is specified and the requested engine supports the <code>TimeZone</code>
   *       parameter for <code>CreateDBInstance</code>, the response includes a list of supported time
   *       zones for each engine version.</p>
   */
  ListSupportedTimezones?: boolean;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more than the
   *       <code>MaxRecords</code> value is available, a pagination token called a marker is included in
   *       the response so that the following results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBEngineVersionsMessage {
  export function isa(o: any): o is DescribeDBEngineVersionsMessage {
    return _smithy.isa(o, "DescribeDBEngineVersionsMessage");
  }
}

export interface DescribeDBInstancesMessage {
  __type?: "DescribeDBInstancesMessage";
  /**
   * <p>The user-supplied instance identifier. If this parameter is specified, information from
   *       only the specific DB instance is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB instances to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon
   *           Resource Names (ARNs). The results list will only include information about the DB
   *           instances associated with the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance Amazon
   *           Resource Names (ARNs). The results list will only include information about the DB
   *           instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous <code>DescribeDBInstances</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBInstancesMessage {
  export function isa(o: any): o is DescribeDBInstancesMessage {
    return _smithy.isa(o, "DescribeDBInstancesMessage");
  }
}

export interface DescribeDBParameterGroupsMessage {
  __type?: "DescribeDBParameterGroupsMessage";
  /**
   * <p>The name of a specific DB parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>An optional pagination token provided by a previous
   *       <code>DescribeDBParameterGroups</code> request. If this parameter is specified, the response
   *       includes only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBParameterGroupsMessage {
  export function isa(o: any): o is DescribeDBParameterGroupsMessage {
    return _smithy.isa(o, "DescribeDBParameterGroupsMessage");
  }
}

export interface DescribeDBParametersMessage {
  __type?: "DescribeDBParametersMessage";
  /**
   * <p>The name of a specific DB parameter group to return details for.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeDBParameters</code>
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The parameter types to return.</p>
   *          <p>Default: All parameter types returned</p>
   *          <p>Valid Values: <code>user | system | engine-default</code>
   *          </p>
   */
  Source?: string;
}

export namespace DescribeDBParametersMessage {
  export function isa(o: any): o is DescribeDBParametersMessage {
    return _smithy.isa(o, "DescribeDBParametersMessage");
  }
}

export interface DescribeDBSubnetGroupsMessage {
  __type?: "DescribeDBSubnetGroupsMessage";
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous DescribeDBSubnetGroups request. If
   *       this parameter is specified, the response includes only records beyond the marker, up to the
   *       value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBSubnetGroupsMessage {
  export function isa(o: any): o is DescribeDBSubnetGroupsMessage {
    return _smithy.isa(o, "DescribeDBSubnetGroupsMessage");
  }
}

export interface DescribeEngineDefaultClusterParametersMessage {
  __type?: "DescribeEngineDefaultClusterParametersMessage";
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information
   *       for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request. If this parameter is specified,
   *       the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultClusterParametersMessage {
  export function isa(
    o: any
  ): o is DescribeEngineDefaultClusterParametersMessage {
    return _smithy.isa(o, "DescribeEngineDefaultClusterParametersMessage");
  }
}

export interface DescribeEngineDefaultClusterParametersResult
  extends $MetadataBearer {
  __type?: "DescribeEngineDefaultClusterParametersResult";
  /**
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  export function isa(
    o: any
  ): o is DescribeEngineDefaultClusterParametersResult {
    return _smithy.isa(o, "DescribeEngineDefaultClusterParametersResult");
  }
}

export interface DescribeEngineDefaultParametersMessage {
  __type?: "DescribeEngineDefaultParametersMessage";
  /**
   * <p>The name of the DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>Not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultParameters</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultParametersMessage {
  export function isa(o: any): o is DescribeEngineDefaultParametersMessage {
    return _smithy.isa(o, "DescribeEngineDefaultParametersMessage");
  }
}

export interface DescribeEngineDefaultParametersResult extends $MetadataBearer {
  __type?: "DescribeEngineDefaultParametersResult";
  /**
   * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultParametersResult {
  export function isa(o: any): o is DescribeEngineDefaultParametersResult {
    return _smithy.isa(o, "DescribeEngineDefaultParametersResult");
  }
}

export interface DescribeEventCategoriesMessage {
  __type?: "DescribeEventCategoriesMessage";
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The type of source that is generating the events.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;
}

export namespace DescribeEventCategoriesMessage {
  export function isa(o: any): o is DescribeEventCategoriesMessage {
    return _smithy.isa(o, "DescribeEventCategoriesMessage");
  }
}

export interface DescribeEventSubscriptionsMessage {
  __type?: "DescribeEventSubscriptionsMessage";
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the event notification subscription you want to describe.</p>
   */
  SubscriptionName?: string;
}

export namespace DescribeEventSubscriptionsMessage {
  export function isa(o: any): o is DescribeEventSubscriptionsMessage {
    return _smithy.isa(o, "DescribeEventSubscriptionsMessage");
  }
}

export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>The number of minutes to retrieve events for.</p>
   *          <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p> The end of the time interval for which to retrieve events, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * <p>A list of event categories that trigger notifications for a event notification
   *       subscription.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous DescribeEvents request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the event source for which events are returned. If not specified, then
   *       all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIdentifier is supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBInstance</code>, then a
   *           <code>DBInstanceIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code>
   *           must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBParameterGroup</code>, a
   *           <code>DBParameterGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code>
   *           must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are
   *       returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p> The beginning of the time interval to retrieve events for, specified in ISO 8601 format.
   *       For more information about ISO 8601, go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;
}

export namespace DescribeEventsMessage {
  export function isa(o: any): o is DescribeEventsMessage {
    return _smithy.isa(o, "DescribeEventsMessage");
  }
}

export interface DescribeOrderableDBInstanceOptionsMessage {
  __type?: "DescribeOrderableDBInstanceOptionsMessage";
  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available
   *       offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available
   *       offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available
   *       offerings matching the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The VPC filter value. Specify this parameter to show only the available VPC or non-VPC
   *       offerings.</p>
   */
  Vpc?: boolean;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  export function isa(o: any): o is DescribeOrderableDBInstanceOptionsMessage {
    return _smithy.isa(o, "DescribeOrderableDBInstanceOptionsMessage");
  }
}

export interface DescribePendingMaintenanceActionsMessage {
  __type?: "DescribePendingMaintenanceActionsMessage";
  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions
   *       for.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB cluster Amazon
   *           Resource Names (ARNs). The results list will only include pending maintenance actions for
   *           the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB instance ARNs.
   *           The results list will only include pending maintenance actions for the DB instances
   *           identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than the
   *       specified <code>MaxRecords</code> value, a pagination token called a marker is included in the
   *       response so that the remaining results can be retrieved.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The ARN of a resource to return pending maintenance actions for.</p>
   */
  ResourceIdentifier?: string;
}

export namespace DescribePendingMaintenanceActionsMessage {
  export function isa(o: any): o is DescribePendingMaintenanceActionsMessage {
    return _smithy.isa(o, "DescribePendingMaintenanceActionsMessage");
  }
}

export interface DescribeValidDBInstanceModificationsMessage {
  __type?: "DescribeValidDBInstanceModificationsMessage";
  /**
   * <p>The customer identifier or the ARN of your DB instance.</p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DescribeValidDBInstanceModificationsMessage {
  export function isa(
    o: any
  ): o is DescribeValidDBInstanceModificationsMessage {
    return _smithy.isa(o, "DescribeValidDBInstanceModificationsMessage");
  }
}

export interface DescribeValidDBInstanceModificationsResult
  extends $MetadataBearer {
  __type?: "DescribeValidDBInstanceModificationsResult";
  /**
   * <p>Information about valid modifications that you can make to your DB instance. Contains the
   *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
   *       action. You can use this information when you call <a>ModifyDBInstance</a>.
   *    </p>
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}

export namespace DescribeValidDBInstanceModificationsResult {
  export function isa(o: any): o is DescribeValidDBInstanceModificationsResult {
    return _smithy.isa(o, "DescribeValidDBInstanceModificationsResult");
  }
}

/**
 * <p>An Active Directory Domain membership record associated with a DB instance.</p>
 */
export interface DomainMembership {
  __type?: "DomainMembership";
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   */
  Domain?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory Domain.</p>
   */
  FQDN?: string;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  IAMRoleName?: string;

  /**
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined,
   *       pending-join, failed etc).</p>
   */
  Status?: string;
}

export namespace DomainMembership {
  export function isa(o: any): o is DomainMembership {
    return _smithy.isa(o, "DomainMembership");
  }
}

/**
 * <p>A range of double values.</p>
 */
export interface DoubleRange {
  __type?: "DoubleRange";
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace DoubleRange {
  export function isa(o: any): o is DoubleRange {
    return _smithy.isa(o, "DoubleRange");
  }
}

/**
 * <p>Specifies a connection endpoint.</p>
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * <p>Specifies the DNS address of the DB instance.</p>
   */
  Address?: string;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>Specifies the port that the database engine is listening on.</p>
   */
  Port?: number;
}

export namespace Endpoint {
  export function isa(o: any): o is Endpoint {
    return _smithy.isa(o, "Endpoint");
  }
}

/**
 * <p> Contains the result of a successful invocation of the <a>DescribeEngineDefaultParameters</a> action.</p>
 */
export interface EngineDefaults {
  __type?: "EngineDefaults";
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters
   *       apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p> An optional pagination token provided by a previous EngineDefaults request. If this
   *       parameter is specified, the response includes only records beyond the marker, up to the value
   *       specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Array<Parameter>;
}

export namespace EngineDefaults {
  export function isa(o: any): o is EngineDefaults {
    return _smithy.isa(o, "EngineDefaults");
  }
}

/**
 * <p> This data type is used as a response element in the <a>DescribeEvents</a>
 *       action.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>Specifies the date and time of the event.</p>
   */
  Date?: Date;

  /**
   * <p>Specifies the category for the event.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>Provides the text of this event.</p>
   */
  Message?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the event.</p>
   */
  SourceArn?: string;

  /**
   * <p>Provides the identifier for the source of the event.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>Specifies the source type for this event.</p>
   */
  SourceType?: SourceType | string;
}

export namespace Event {
  export function isa(o: any): o is Event {
    return _smithy.isa(o, "Event");
  }
}

/**
 * <p>Contains the results of a successful invocation of the <a>DescribeEventCategories</a> action.</p>
 */
export interface EventCategoriesMap {
  __type?: "EventCategoriesMap";
  /**
   * <p>The event categories for the specified source type</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The source type that the returned categories belong to</p>
   */
  SourceType?: string;
}

export namespace EventCategoriesMap {
  export function isa(o: any): o is EventCategoriesMap {
    return _smithy.isa(o, "EventCategoriesMap");
  }
}

export interface EventCategoriesMessage extends $MetadataBearer {
  __type?: "EventCategoriesMessage";
  /**
   * <p>A list of EventCategoriesMap data types.</p>
   */
  EventCategoriesMapList?: Array<EventCategoriesMap>;
}

export namespace EventCategoriesMessage {
  export function isa(o: any): o is EventCategoriesMessage {
    return _smithy.isa(o, "EventCategoriesMessage");
  }
}

/**
 * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
 */
export interface EventSubscription {
  __type?: "EventSubscription";
  /**
   * <p>The event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The AWS customer account associated with the event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription
   *       is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of event categories for the event notification subscription.</p>
   */
  EventCategoriesList?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) for the event subscription.</p>
   */
  EventSubscriptionArn?: string;

  /**
   * <p>The topic ARN of the event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of source IDs for the event notification subscription.</p>
   */
  SourceIdsList?: Array<string>;

  /**
   * <p>The source type for the event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>The status of the event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission |
   *       topic-not-exist</p>
   *          <p>The status "no-permission" indicates that Neptune no longer has permission to post to the
   *       SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the
   *       subscription was created.</p>
   */
  Status?: string;

  /**
   * <p>The time the event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;
}

export namespace EventSubscription {
  export function isa(o: any): o is EventSubscription {
    return _smithy.isa(o, "EventSubscription");
  }
}

export interface EventSubscriptionsMessage extends $MetadataBearer {
  __type?: "EventSubscriptionsMessage";
  /**
   * <p>A list of EventSubscriptions data types.</p>
   */
  EventSubscriptionsList?: Array<EventSubscription>;

  /**
   * <p> An optional pagination token provided by a previous DescribeOrderableDBInstanceOptions
   *       request. If this parameter is specified, the response includes only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace EventSubscriptionsMessage {
  export function isa(o: any): o is EventSubscriptionsMessage {
    return _smithy.isa(o, "EventSubscriptionsMessage");
  }
}

export interface EventsMessage extends $MetadataBearer {
  __type?: "EventsMessage";
  /**
   * <p> A list of <a>Event</a> instances.</p>
   */
  Events?: Array<Event>;

  /**
   * <p> An optional pagination token provided by a previous Events request. If this parameter is
   *       specified, the response includes only records beyond the marker, up to the value specified by
   *       <code>MaxRecords</code> .</p>
   */
  Marker?: string;
}

export namespace EventsMessage {
  export function isa(o: any): o is EventsMessage {
    return _smithy.isa(o, "EventsMessage");
  }
}

export interface FailoverDBClusterMessage {
  __type?: "FailoverDBClusterMessage";
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *          <p>You must specify the instance identifier for an Read Replica in the DB cluster. For
   *       example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  export function isa(o: any): o is FailoverDBClusterMessage {
    return _smithy.isa(o, "FailoverDBClusterMessage");
  }
}

export interface FailoverDBClusterResult extends $MetadataBearer {
  __type?: "FailoverDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  export function isa(o: any): o is FailoverDBClusterResult {
    return _smithy.isa(o, "FailoverDBClusterResult");
  }
}

/**
 * <p>This type is not currently supported.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Name: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Values: Array<string> | undefined;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return _smithy.isa(o, "Filter");
  }
}

export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The Amazon Neptune resource with tags to be listed. This value is an Amazon Resource Name
   *       (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export function isa(o: any): o is ListTagsForResourceMessage {
    return _smithy.isa(o, "ListTagsForResourceMessage");
  }
}

export interface ModifyDBClusterMessage {
  __type?: "ModifyDBClusterMessage";
  /**
   * <p>A value that specifies whether the modifications in this request and any pending
   *       modifications are asynchronously applied as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is set
   *       to <code>false</code>, changes to the DB cluster are applied during the next maintenance
   *       window.</p>
   *          <p>The <code>ApplyImmediately</code> parameter only affects the
   *       <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values. If you set the
   *       <code>ApplyImmediately</code> parameter value to false, then changes to the
   *       <code>NewDBClusterIdentifier</code> and <code>MasterUserPassword</code> values are applied
   *       during the next maintenance window. All other changes are applied immediately, regardless of
   *       the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum
   *       value of 1.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter is not
   *       case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The version number of the database engine. Currently, setting this
   *       parameter has no effect. To upgrade your database engine to the most recent release,
   *       use the <a>ApplyPendingMaintenanceAction</a> API.</p>
   *
   *          <p>For a list of valid engine versions, see <a>CreateDBInstance</a>,
   *       or call <a>DescribeDBEngineVersions</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new password for the master database user. This password can contain any printable
   *       ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is
   *       stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are
   *       enabled, using the <code>BackupRetentionPeriod</code> parameter.</p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated
   *       Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an 8-hour block of time for each
   *       AWS Region, occurring on a random day of the
   *       week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace ModifyDBClusterMessage {
  export function isa(o: any): o is ModifyDBClusterMessage {
    return _smithy.isa(o, "ModifyDBClusterMessage");
  }
}

export interface ModifyDBClusterParameterGroupMessage {
  __type?: "ModifyDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group to modify.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameters in the DB cluster parameter group to modify.</p>
   */
  Parameters: Array<Parameter> | undefined;
}

export namespace ModifyDBClusterParameterGroupMessage {
  export function isa(o: any): o is ModifyDBClusterParameterGroupMessage {
    return _smithy.isa(o, "ModifyDBClusterParameterGroupMessage");
  }
}

export interface ModifyDBClusterResult extends $MetadataBearer {
  __type?: "ModifyDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  export function isa(o: any): o is ModifyDBClusterResult {
    return _smithy.isa(o, "ModifyDBClusterResult");
  }
}

export interface ModifyDBClusterSnapshotAttributeMessage {
  __type?: "ModifyDBClusterSnapshotAttributeMessage";
  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *          <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster
   *       snapshot, set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this
   *       list to include one or more AWS account IDs, or <code>all</code> to make the manual DB cluster
   *       snapshot restorable by any AWS account. Do not add the <code>all</code> value for any manual
   *       DB cluster snapshots that contain private information that you don't want available to all AWS
   *       accounts.</p>
   */
  ValuesToAdd?: Array<string>;

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by
   *       <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster
   *       snapshot, set this list to include one or more AWS account identifiers, or <code>all</code> to
   *       remove authorization for any AWS account to copy or restore the DB cluster snapshot. If you
   *       specify <code>all</code>, an AWS account whose account ID is explicitly added to the
   *       <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: Array<string>;
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  export function isa(o: any): o is ModifyDBClusterSnapshotAttributeMessage {
    return _smithy.isa(o, "ModifyDBClusterSnapshotAttributeMessage");
  }
}

export interface ModifyDBClusterSnapshotAttributeResult
  extends $MetadataBearer {
  __type?: "ModifyDBClusterSnapshotAttributeResult";
  /**
   * <p>Contains the results of a successful call to the <a>DescribeDBClusterSnapshotAttributes</a> API action.</p>
   *          <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts to copy or
   *       restore a manual DB cluster snapshot. For more information, see the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  export function isa(o: any): o is ModifyDBClusterSnapshotAttributeResult {
    return _smithy.isa(o, "ModifyDBClusterSnapshotAttributeResult");
  }
}

export interface ModifyDBInstanceMessage {
  __type?: "ModifyDBInstanceMessage";
  /**
   * <p>The new amount of storage (in gibibytes) to allocate for the DB instance.</p>
   *          <p>Not applicable. Storage is managed by the DB Cluster.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter doesn't result
   *       in an outage and the change is asynchronously applied as soon as possible.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>Specifies whether the modifications in this request and any pending modifications are
   *       asynchronously applied as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB instance.</p>
   *          <p> If this parameter is set to <code>false</code>, changes to the DB instance are applied
   *       during the next maintenance window. Some parameter changes can cause an outage and are applied
   *       on the next call to <a>RebootDBInstance</a>, or the next
   *       failure reboot.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p> Indicates that minor version upgrades are applied automatically to the DB instance during
   *       the maintenance window. Changing this parameter doesn't result in an outage except in the
   *       following case and the change is asynchronously applied as soon as possible. An outage will
   *       result if this parameter is set to <code>true</code> during the maintenance window, and a
   *       newer minor version is available, and Neptune has enabled auto patching for that engine
   *       version.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Not applicable. The retention period for automated backups is managed by the DB cluster.
   *       For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: Uses existing setting</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs
   *       for a specific DB instance or DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>True to copy all tags from the DB instance to snapshots of the DB instance, and otherwise
   *       false. The default is false.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example,
   *       <code>db.m4.large</code>. Not all DB instance classes are available in all AWS
   *       Regions.</p>
   *          <p>If you modify the DB instance class, an outage occurs during the change. The change is
   *       applied during the next maintenance window, unless <code>ApplyImmediately</code> is specified
   *       as <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the DB parameter group to apply to the DB instance. Changing this setting
   *       doesn't result in an outage. The parameter group name itself is changed immediately, but the
   *       actual parameter changes are not applied until you reboot the instance without failover. The
   *       db instance will NOT be rebooted automatically and the parameter changes will NOT be applied
   *       during the next maintenance window.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints: The DB parameter group must be in the same DB parameter group family as this
   *       DB instance.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values
   *       specified for options in the option group for the DB instance.</p>
   *          <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p> Default: <code>8182</code>
   *          </p>
   */
  DBPortNumber?: number;

  /**
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting
   *       doesn't result in an outage and the change is asynchronously applied as soon as
   *       possible.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DBSecurityGroups.</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroups?: Array<string>;

  /**
   * <p>The new DB subnet group for the DB instance. You can use this parameter to move your DB
   *       instance to a different VPC.</p>
   *          <p>Changing the subnet group causes an outage during the change. The change is applied during
   *       the next maintenance window, unless you specify <code>true</code> for the
   *       <code>ApplyImmediately</code> parameter.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetGroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Not supported.</p>
   */
  Domain?: string;

  /**
   * <p>Not supported</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>You can enable IAM database authentication for the following database engines</p>
   *          <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The version number of the database engine to upgrade to. Currently, setting this
   *       parameter has no effect. To upgrade your database engine to the most recent release,
   *       use the <a>ApplyPendingMaintenanceAction</a> API.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the instance.</p>
   *          <p>Changing this setting doesn't result in an outage and the change is applied during the
   *       next maintenance window unless the <code>ApplyImmediately</code> parameter is set to
   *       <code>true</code> for this request.</p>
   *          <p>Default: Uses existing setting</p>
   */
  Iops?: number;

  /**
   * <p>Not supported.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Not applicable.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected
   *       for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default
   *       is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set
   *       <code>MonitoringInterval</code> to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits Neptune to send enhanced monitoring metrics to
   *       Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a
   *       <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment. Changing this parameter doesn't
   *       result in an outage and the change is applied during the next maintenance window unless the
   *       <code>ApplyImmediately</code> parameter is set to <code>true</code> for this request.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p> The new DB instance identifier for the DB instance when renaming a DB instance. When you
   *       change the DB instance identifier, an instance reboot will occur immediately if you set
   *       <code>Apply Immediately</code> to true, or will occur during the next maintenance window if
   *       <code>Apply Immediately</code> to false. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  NewDBInstanceIdentifier?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p> The daily time range during which automated backups are created if automated backups are
   *       enabled.</p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be in the format hh24:mi-hh24:mi</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Time Coordinated (UTC)</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred maintenance window</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes</p>
   *             </li>
   *          </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *       result in an outage. Changing this parameter doesn't result in an outage, except in the
   *       following situation, and the change is asynchronously applied as soon as possible. If there
   *       are pending actions that cause a reboot, and the maintenance window is changed to include the
   *       current time, then changing this parameter will cause a reboot of the DB instance. If moving
   *       this window to the current time, there must be at least 30 minutes between the current time
   *       and end of the window to ensure pending changes are applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary
   *       instance after a failure of the existing primary instance.</p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>This flag should no longer be used.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Not supported.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is
   *       asynchronously applied as soon as possible.</p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB
   *       cluster. For more information, see <a>ModifyDBCluster</a>.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing VpcSecurityGroupIds.</p>
   *             </li>
   *          </ul>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace ModifyDBInstanceMessage {
  export function isa(o: any): o is ModifyDBInstanceMessage {
    return _smithy.isa(o, "ModifyDBInstanceMessage");
  }
}

export interface ModifyDBInstanceResult extends $MetadataBearer {
  __type?: "ModifyDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  export function isa(o: any): o is ModifyDBInstanceResult {
    return _smithy.isa(o, "ModifyDBInstanceResult");
  }
}

export interface ModifyDBParameterGroupMessage {
  __type?: "ModifyDBParameterGroupMessage";
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names, values, and the apply method for the parameter update. At
   *       least one parameter name, value, and apply method must be supplied; subsequent arguments are
   *       optional. A maximum of 20 parameters can be modified in a single request.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <note>
   *             <p>You can use the immediate value with dynamic parameters only. You can use the
   *         pending-reboot value for both dynamic and static parameters, and changes are applied when
   *         you reboot the DB instance without failover.</p>
   *          </note>
   */
  Parameters: Array<Parameter> | undefined;
}

export namespace ModifyDBParameterGroupMessage {
  export function isa(o: any): o is ModifyDBParameterGroupMessage {
    return _smithy.isa(o, "ModifyDBParameterGroupMessage");
  }
}

export interface ModifyDBSubnetGroupMessage {
  __type?: "ModifyDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string. You can't
   *       modify the default subnet group.</p>
   *          <p>Constraints: Must match the name of an existing DBSubnetGroup. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The EC2 subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: Array<string> | undefined;
}

export namespace ModifyDBSubnetGroupMessage {
  export function isa(o: any): o is ModifyDBSubnetGroupMessage {
    return _smithy.isa(o, "ModifyDBSubnetGroupMessage");
  }
}

export interface ModifyDBSubnetGroupResult extends $MetadataBearer {
  __type?: "ModifyDBSubnetGroupResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB subnet group.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  export function isa(o: any): o is ModifyDBSubnetGroupResult {
    return _smithy.isa(o, "ModifyDBSubnetGroupResult");
  }
}

export interface ModifyEventSubscriptionMessage {
  __type?: "ModifyEventSubscriptionMessage";
  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *       subscription.</p>
   */
  Enabled?: boolean;

  /**
   * <p> A list of event categories for a SourceType that you want to subscribe to. You can see a
   *       list of the categories for a given SourceType
   *
   *       by using the <b>DescribeEventCategories</b> action.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is
   *       created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified
   *       of events generated by a DB instance, you would set this parameter to db-instance. if this
   *       value is not specified, all events are returned.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;

  /**
   * <p>The name of the event notification subscription.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace ModifyEventSubscriptionMessage {
  export function isa(o: any): o is ModifyEventSubscriptionMessage {
    return _smithy.isa(o, "ModifyEventSubscriptionMessage");
  }
}

export interface ModifyEventSubscriptionResult extends $MetadataBearer {
  __type?: "ModifyEventSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  export function isa(o: any): o is ModifyEventSubscriptionResult {
    return _smithy.isa(o, "ModifyEventSubscriptionResult");
  }
}

/**
 * <p>Provides information on the option groups the DB instance is a member of.</p>
 */
export interface OptionGroupMembership {
  __type?: "OptionGroupMembership";
  /**
   * <p>The name of the option group that the instance belongs to.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The status of the DB instance's option group membership. Valid values are:
   *       <code>in-sync</code>, <code>pending-apply</code>, <code>pending-removal</code>,
   *       <code>pending-maintenance-apply</code>, <code>pending-maintenance-removal</code>,
   *       <code>applying</code>, <code>removing</code>, and <code>failed</code>.</p>
   */
  Status?: string;
}

export namespace OptionGroupMembership {
  export function isa(o: any): o is OptionGroupMembership {
    return _smithy.isa(o, "OptionGroupMembership");
  }
}

/**
 * <p>Contains a list of available options for a DB instance.</p>
 *          <p> This data type is used as a response element in the <a>DescribeOrderableDBInstanceOptions</a> action.</p>
 */
export interface OrderableDBInstanceOption {
  __type?: "OrderableDBInstanceOption";
  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: Array<AvailabilityZone>;

  /**
   * <p>The DB instance class for a DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The engine type of a DB instance.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of a DB instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model for a DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Maximum total provisioned IOPS for a DB instance.</p>
   */
  MaxIopsPerDbInstance?: number;

  /**
   * <p>Maximum provisioned IOPS per GiB for a DB instance.</p>
   */
  MaxIopsPerGib?: number;

  /**
   * <p>Maximum storage size for a DB instance.</p>
   */
  MaxStorageSize?: number;

  /**
   * <p>Minimum total provisioned IOPS for a DB instance.</p>
   */
  MinIopsPerDbInstance?: number;

  /**
   * <p>Minimum provisioned IOPS per GiB for a DB instance.</p>
   */
  MinIopsPerGib?: number;

  /**
   * <p>Minimum storage size for a DB instance.</p>
   */
  MinStorageSize?: number;

  /**
   * <p>Indicates whether a DB instance is Multi-AZ capable.</p>
   */
  MultiAZCapable?: boolean;

  /**
   * <p>Indicates whether a DB instance can have a Read Replica.</p>
   */
  ReadReplicaCapable?: boolean;

  /**
   * <p>Indicates the storage type for a DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60
   *       seconds.</p>
   */
  SupportsEnhancedMonitoring?: boolean;

  /**
   * <p>Indicates whether a DB instance supports IAM database authentication.</p>
   */
  SupportsIAMDatabaseAuthentication?: boolean;

  /**
   * <p>Indicates whether a DB instance supports provisioned IOPS.</p>
   */
  SupportsIops?: boolean;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  SupportsPerformanceInsights?: boolean;

  /**
   * <p>Indicates whether a DB instance supports encrypted storage.</p>
   */
  SupportsStorageEncryption?: boolean;

  /**
   * <p>Indicates whether a DB instance is in a VPC.</p>
   */
  Vpc?: boolean;
}

export namespace OrderableDBInstanceOption {
  export function isa(o: any): o is OrderableDBInstanceOption {
    return _smithy.isa(o, "OrderableDBInstanceOption");
  }
}

export interface OrderableDBInstanceOptionsMessage extends $MetadataBearer {
  __type?: "OrderableDBInstanceOptionsMessage";
  /**
   * <p> An optional pagination token provided by a previous OrderableDBInstanceOptions request.
   *       If this parameter is specified, the response includes only records beyond the marker, up to
   *       the value specified by <code>MaxRecords</code> .</p>
   */
  Marker?: string;

  /**
   * <p>An <a>OrderableDBInstanceOption</a> structure
   *       containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: Array<OrderableDBInstanceOption>;
}

export namespace OrderableDBInstanceOptionsMessage {
  export function isa(o: any): o is OrderableDBInstanceOptionsMessage {
    return _smithy.isa(o, "OrderableDBInstanceOptionsMessage");
  }
}

/**
 * <p>Specifies a parameter.</p>
 */
export interface Parameter {
  __type?: "Parameter";
  /**
   * <p>Specifies the valid range of values for the parameter.</p>
   */
  AllowedValues?: string;

  /**
   * <p>Indicates when to apply parameter updates.</p>
   */
  ApplyMethod?: ApplyMethod | string;

  /**
   * <p>Specifies the engine specific parameters type.</p>
   */
  ApplyType?: string;

  /**
   * <p>Specifies the valid data type for the parameter.</p>
   */
  DataType?: string;

  /**
   * <p>Provides a description of the parameter.</p>
   */
  Description?: string;

  /**
   * <p> Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be
   *       modified. Some parameters have security or operational implications that prevent them from
   *       being changed.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The earliest engine version to which the parameter can apply.</p>
   */
  MinimumEngineVersion?: string;

  /**
   * <p>Specifies the name of the parameter.</p>
   */
  ParameterName?: string;

  /**
   * <p>Specifies the value of the parameter.</p>
   */
  ParameterValue?: string;

  /**
   * <p>Indicates the source of the parameter value.</p>
   */
  Source?: string;
}

export namespace Parameter {
  export function isa(o: any): o is Parameter {
    return _smithy.isa(o, "Parameter");
  }
}

/**
 * <p>A list of the log types whose configuration is still pending. In other
 *       words, these log types are in the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  __type?: "PendingCloudwatchLogsExports";
  /**
   * <p>Log types that are in the process of being enabled. After they are
   *       enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: Array<string>;

  /**
   * <p>Log types that are in the process of being deactivated. After they are
   *       deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: Array<string>;
}

export namespace PendingCloudwatchLogsExports {
  export function isa(o: any): o is PendingCloudwatchLogsExports {
    return _smithy.isa(o, "PendingCloudwatchLogsExports");
  }
}

/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface PendingMaintenanceAction {
  __type?: "PendingMaintenanceAction";
  /**
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action is applied. The maintenance action is
   *       applied to the resource during its first maintenance window after this date. If this date is
   *       specified, any <code>next-maintenance</code> opt-in requests are ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The effective date when the pending maintenance action is applied to the resource. This
   *       date takes into account opt-in requests received from the <a>ApplyPendingMaintenanceAction</a> API, the <code>AutoAppliedAfterDate</code>, and the
   *       <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been received
   *       and nothing has been specified as <code>AutoAppliedAfterDate</code> or
   *       <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;

  /**
   * <p>The date when the maintenance action is automatically applied. The maintenance action is
   *       applied to the resource on this date regardless of the maintenance window for the resource. If
   *       this date is specified, any <code>immediate</code> opt-in requests are ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;
}

export namespace PendingMaintenanceAction {
  export function isa(o: any): o is PendingMaintenanceAction {
    return _smithy.isa(o, "PendingMaintenanceAction");
  }
}

export interface PendingMaintenanceActionsMessage extends $MetadataBearer {
  __type?: "PendingMaintenanceActionsMessage";
  /**
   * <p> An optional pagination token provided by a previous
   *       <code>DescribePendingMaintenanceActions</code> request. If this parameter is specified, the
   *       response includes only records beyond the marker, up to a number of records specified by
   *       <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
}

export namespace PendingMaintenanceActionsMessage {
  export function isa(o: any): o is PendingMaintenanceActionsMessage {
    return _smithy.isa(o, "PendingMaintenanceActionsMessage");
  }
}

/**
 * <p> This data type is used as a response element in the <a>ModifyDBInstance</a>
 *       action.</p>
 */
export interface PendingModifiedValues {
  __type?: "PendingModifiedValues";
  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be
   *       applied or is currently being applied.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Specifies the identifier of the CA certificate for the DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or
   *       is currently being applied.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be
   *       applied or is currently being applied.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The new DB subnet group for the DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is
   *       currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p>The license model for the DB instance.</p>
   *          <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *       <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>Contains the pending or currently-in-progress change of the master credentials for the DB
   *       instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>This <code>PendingCloudwatchLogsExports</code> structure specifies
   *       pending changes to which CloudWatch logs are enabled and which are disabled.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;
}

export namespace PendingModifiedValues {
  export function isa(o: any): o is PendingModifiedValues {
    return _smithy.isa(o, "PendingModifiedValues");
  }
}

export interface PromoteReadReplicaDBClusterMessage {
  __type?: "PromoteReadReplicaDBClusterMessage";
  /**
   * <p>Not supported.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace PromoteReadReplicaDBClusterMessage {
  export function isa(o: any): o is PromoteReadReplicaDBClusterMessage {
    return _smithy.isa(o, "PromoteReadReplicaDBClusterMessage");
  }
}

export interface PromoteReadReplicaDBClusterResult extends $MetadataBearer {
  __type?: "PromoteReadReplicaDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace PromoteReadReplicaDBClusterResult {
  export function isa(o: any): o is PromoteReadReplicaDBClusterResult {
    return _smithy.isa(o, "PromoteReadReplicaDBClusterResult");
  }
}

/**
 * <p>A range of integer values.</p>
 */
export interface Range {
  __type?: "Range";
  /**
   * <p>The minimum value in the range.</p>
   */
  From?: number;

  /**
   * <p>The step value for the range. For example, if you have a range of 5,000 to 10,000, with a
   *       step value of 1,000, the valid values start at 5,000 and step up by 1,000. Even though 7,500
   *       is within the range, it isn't a valid value for the range. The valid values are 5,000, 6,000,
   *       7,000, 8,000...</p>
   */
  Step?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace Range {
  export function isa(o: any): o is Range {
    return _smithy.isa(o, "Range");
  }
}

export interface RebootDBInstanceMessage {
  __type?: "RebootDBInstanceMessage";
  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p> When <code>true</code>, the reboot is conducted through a MultiAZ failover.</p>
   *          <p>Constraint: You can't specify <code>true</code> if the instance is not configured for
   *       MultiAZ.</p>
   */
  ForceFailover?: boolean;
}

export namespace RebootDBInstanceMessage {
  export function isa(o: any): o is RebootDBInstanceMessage {
    return _smithy.isa(o, "RebootDBInstanceMessage");
  }
}

export interface RebootDBInstanceResult extends $MetadataBearer {
  __type?: "RebootDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB instance.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBInstances</a> action.</p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  export function isa(o: any): o is RebootDBInstanceResult {
    return _smithy.isa(o, "RebootDBInstanceResult");
  }
}

export interface RemoveRoleFromDBClusterMessage {
  __type?: "RemoveRoleFromDBClusterMessage";
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB cluster, for
   *       example <code>arn:aws:iam::123456789012:role/NeptuneAccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace RemoveRoleFromDBClusterMessage {
  export function isa(o: any): o is RemoveRoleFromDBClusterMessage {
    return _smithy.isa(o, "RemoveRoleFromDBClusterMessage");
  }
}

export interface RemoveSourceIdentifierFromSubscriptionMessage {
  __type?: "RemoveSourceIdentifierFromSubscriptionMessage";
  /**
   * <p> The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b> for a DB instance or the name of a security
   *       group.</p>
   */
  SourceIdentifier: string | undefined;

  /**
   * <p>The name of the event notification subscription you want to remove a source identifier
   *       from.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace RemoveSourceIdentifierFromSubscriptionMessage {
  export function isa(
    o: any
  ): o is RemoveSourceIdentifierFromSubscriptionMessage {
    return _smithy.isa(o, "RemoveSourceIdentifierFromSubscriptionMessage");
  }
}

export interface RemoveSourceIdentifierFromSubscriptionResult
  extends $MetadataBearer {
  __type?: "RemoveSourceIdentifierFromSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <a>DescribeEventSubscriptions</a> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace RemoveSourceIdentifierFromSubscriptionResult {
  export function isa(
    o: any
  ): o is RemoveSourceIdentifierFromSubscriptionResult {
    return _smithy.isa(o, "RemoveSourceIdentifierFromSubscriptionResult");
  }
}

export interface RemoveTagsFromResourceMessage {
  __type?: "RemoveTagsFromResourceMessage";
  /**
   * <p>The Amazon Neptune resource that the tags are removed from. This value is an Amazon
   *       Resource Name (ARN). For information about creating an ARN, see <a href="https://docs.aws.amazon.com/neptune/latest/UserGuide/tagging.ARN.html#tagging.ARN.Constructing"> Constructing an
   *       Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  export function isa(o: any): o is RemoveTagsFromResourceMessage {
    return _smithy.isa(o, "RemoveTagsFromResourceMessage");
  }
}

export interface ResetDBClusterParameterGroupMessage {
  __type?: "ResetDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default
   *       values. You can't use this parameter if the <code>ResetAllParameters</code> parameter is set
   *       to <code>true</code>.</p>
   */
  Parameters?: Array<Parameter>;

  /**
   * <p>A value that is set to <code>true</code> to reset all parameters in the DB cluster
   *       parameter group to their default values, and <code>false</code> otherwise. You can't use this
   *       parameter if there is a list of parameter names specified for the <code>Parameters</code>
   *       parameter.</p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetDBClusterParameterGroupMessage {
  export function isa(o: any): o is ResetDBClusterParameterGroupMessage {
    return _smithy.isa(o, "ResetDBClusterParameterGroupMessage");
  }
}

export interface ResetDBParameterGroupMessage {
  __type?: "ResetDBParameterGroupMessage";
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code> name and
   *       <code>ResetAllParameters</code> parameters. To reset specific parameters, provide a list of
   *       the following: <code>ParameterName</code> and <code>ApplyMethod</code>. A maximum of 20
   *       parameters can be modified in a single request.</p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   */
  Parameters?: Array<Parameter>;

  /**
   * <p>Specifies whether (<code>true</code>) or not (<code>false</code>) to reset all parameters
   *       in the DB parameter group to default values.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetDBParameterGroupMessage {
  export function isa(o: any): o is ResetDBParameterGroupMessage {
    return _smithy.isa(o, "ResetDBParameterGroupMessage");
  }
}

/**
 * <p>Describes the pending maintenance actions for a resource.</p>
 */
export interface ResourcePendingMaintenanceActions {
  __type?: "ResourcePendingMaintenanceActions";
  /**
   * <p>A list that provides details about the pending maintenance actions for the
   *       resource.</p>
   */
  PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;

  /**
   * <p>The ARN of the resource that has pending maintenance actions.</p>
   */
  ResourceIdentifier?: string;
}

export namespace ResourcePendingMaintenanceActions {
  export function isa(o: any): o is ResourcePendingMaintenanceActions {
    return _smithy.isa(o, "ResourcePendingMaintenanceActions");
  }
}

export interface RestoreDBClusterFromSnapshotMessage {
  __type?: "RestoreDBClusterFromSnapshotMessage";
  /**
   * <p>Provides the list of EC2 Availability Zones that instances in the restored DB cluster can
   *       be created in.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot. This
   *       parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Not supported.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The database engine to use for the new DB cluster.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   */
  Engine: string | undefined;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *       snapshot or DB cluster snapshot.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used
   *       to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the
   *       KMS encryption key.</p>
   *          <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following
   *       will occur:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is
   *           encrypted, then the restored DB cluster is encrypted using the KMS key that was used to
   *           encrypt the DB snapshot or DB cluster snapshot.</p>
   *             </li>
   *             <li>
   *                <p>If the DB snapshot or DB cluster snapshot in <code>SnapshotIdentifier</code> is not
   *           encrypted, then the restored DB cluster is not encrypted.</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *          <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster
   *       snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Snapshot.</p>
   *             </li>
   *          </ul>
   */
  SnapshotIdentifier: string | undefined;

  /**
   * <p>The tags to be assigned to the restored DB cluster.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A list of VPC security groups that the new DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBClusterFromSnapshotMessage {
  export function isa(o: any): o is RestoreDBClusterFromSnapshotMessage {
    return _smithy.isa(o, "RestoreDBClusterFromSnapshotMessage");
  }
}

export interface RestoreDBClusterFromSnapshotResult extends $MetadataBearer {
  __type?: "RestoreDBClusterFromSnapshotResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  export function isa(o: any): o is RestoreDBClusterFromSnapshotResult {
    return _smithy.isa(o, "RestoreDBClusterFromSnapshotResult");
  }
}

export interface RestoreDBClusterToPointInTimeMessage {
  __type?: "RestoreDBClusterToPointInTimeMessage";
  /**
   * <p>The name of the new DB cluster to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with the new DB cluster.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The DB subnet group name to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *       The database can't be deleted when deletion protection is enabled. By default,
   *       deletion protection is disabled.
   *     </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>True to enable mapping of AWS Identity and Access Management (IAM) accounts to database
   *       accounts, and otherwise false.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted
   *       DB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If
   *       you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used
   *       to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the
   *       KMS encryption key.</p>
   *          <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is
   *       different than the KMS key used to encrypt the source DB cluster. The new DB cluster is
   *       encrypted with the KMS key identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you do not specify a value for the <code>KmsKeyId</code> parameter, then the following
   *       will occur:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the
   *           KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the DB cluster is not encrypted, then the restored DB cluster is not
   *           encrypted.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that is not encrypted, then the
   *       restore request is rejected.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>
   *             <i>(Not supported by Neptune)</i>
   *          </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The date and time to restore the DB cluster to.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Must be specified if <code>UseLatestRestorableTime</code> parameter is not
   *           provided</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if <code>UseLatestRestorableTime</code> parameter is true</p>
   *             </li>
   *             <li>
   *                <p>Cannot be specified if <code>RestoreType</code> parameter is
   *           <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   */
  RestoreToTime?: Date;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the source
   *           DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the source
   *           DB cluster.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is restored
   *       as a full copy of the source DB cluster.</p>
   */
  RestoreType?: string;

  /**
   * <p>The identifier of the source DB cluster from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterIdentifier: string | undefined;

  /**
   * <p>The tags to be applied to the restored DB cluster.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A value that is set to <code>true</code> to restore the DB cluster to the latest
   *       restorable backup time, and <code>false</code> otherwise.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   *          <p>Constraints: Cannot be specified if <code>RestoreToTime</code> parameter is
   *       provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBClusterToPointInTimeMessage {
  export function isa(o: any): o is RestoreDBClusterToPointInTimeMessage {
    return _smithy.isa(o, "RestoreDBClusterToPointInTimeMessage");
  }
}

export interface RestoreDBClusterToPointInTimeResult extends $MetadataBearer {
  __type?: "RestoreDBClusterToPointInTimeResult";
  /**
   * <p>Contains the details of an Amazon Neptune DB cluster.</p>
   *          <p>This data type is used as a response element in the <a>DescribeDBClusters</a> action.</p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  export function isa(o: any): o is RestoreDBClusterToPointInTimeResult {
    return _smithy.isa(o, "RestoreDBClusterToPointInTimeResult");
  }
}

export type SourceType =
  | "db-cluster"
  | "db-cluster-snapshot"
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot";

/**
 * <p>Specifies a subnet.</p>
 *          <p> This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
 */
export interface Subnet {
  __type?: "Subnet";
  /**
   * <p>Specifies the EC2 Availability Zone that the subnet is in.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>Specifies the identifier of the subnet.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>Specifies the status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  export function isa(o: any): o is Subnet {
    return _smithy.isa(o, "Subnet");
  }
}

/**
 * <p>Metadata assigned to an Amazon Neptune resource consisting of a key-value pair.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode
   *       characters in length and can't be prefixed with "aws:" or "rds:". The string can only contain
   *       only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *       regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode
   *       characters in length and can't be prefixed with "aws:" or "rds:". The string can only contain
   *       only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *       regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

export interface TagListMessage extends $MetadataBearer {
  __type?: "TagListMessage";
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  TagList?: Array<Tag>;
}

export namespace TagListMessage {
  export function isa(o: any): o is TagListMessage {
    return _smithy.isa(o, "TagListMessage");
  }
}

/**
 * <p>A time zone associated with a <a>DBInstance</a>.</p>
 */
export interface Timezone {
  __type?: "Timezone";
  /**
   * <p>The name of the time zone.</p>
   */
  TimezoneName?: string;
}

export namespace Timezone {
  export function isa(o: any): o is Timezone {
    return _smithy.isa(o, "Timezone");
  }
}

/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface UpgradeTarget {
  __type?: "UpgradeTarget";
  /**
   * <p>A value that indicates whether the target version is applied to any source DB instances
   *       that have AutoMinorVersionUpgrade set to true.</p>
   */
  AutoUpgrade?: boolean;

  /**
   * <p>The version of the database engine that a DB instance can be upgraded to.</p>
   */
  Description?: string;

  /**
   * <p>The name of the upgrade target database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the upgrade target database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether a database engine is upgraded to a major version.</p>
   */
  IsMajorVersionUpgrade?: boolean;
}

export namespace UpgradeTarget {
  export function isa(o: any): o is UpgradeTarget {
    return _smithy.isa(o, "UpgradeTarget");
  }
}

/**
 * <p>Information about valid modifications that you can make to your DB instance. Contains the
 *       result of a successful call to the <a>DescribeValidDBInstanceModifications</a>
 *       action. You can use this information when you call <a>ModifyDBInstance</a>.
 *    </p>
 */
export interface ValidDBInstanceModificationsMessage {
  __type?: "ValidDBInstanceModificationsMessage";
  /**
   * <p>Valid storage options for your DB instance.</p>
   */
  Storage?: Array<ValidStorageOptions>;
}

export namespace ValidDBInstanceModificationsMessage {
  export function isa(o: any): o is ValidDBInstanceModificationsMessage {
    return _smithy.isa(o, "ValidDBInstanceModificationsMessage");
  }
}

/**
 * <p>Information about valid modifications that you can make to your DB
 *       instance.</p>
 *          <p>Contains the result of a successful call to the <a>DescribeValidDBInstanceModifications</a> action.</p>
 */
export interface ValidStorageOptions {
  __type?: "ValidStorageOptions";
  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier. For example, 3-10,
   *       which means that provisioned IOPS can be between 3 and 10 times storage.</p>
   */
  IopsToStorageRatio?: Array<DoubleRange>;

  /**
   * <p>The valid range of provisioned IOPS. For example, 1000-20000.</p>
   */
  ProvisionedIops?: Array<Range>;

  /**
   * <p>The valid range of storage in gibibytes. For example, 100 to 16384.</p>
   */
  StorageSize?: Array<Range>;

  /**
   * <p>The valid storage types for your DB instance. For example, gp2, io1.</p>
   */
  StorageType?: string;
}

export namespace ValidStorageOptions {
  export function isa(o: any): o is ValidStorageOptions {
    return _smithy.isa(o, "ValidStorageOptions");
  }
}

/**
 * <p>This data type is used as a response element for queries on VPC security group
 *       membership.</p>
 */
export interface VpcSecurityGroupMembership {
  __type?: "VpcSecurityGroupMembership";
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The name of the VPC security group.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace VpcSecurityGroupMembership {
  export function isa(o: any): o is VpcSecurityGroupMembership {
    return _smithy.isa(o, "VpcSecurityGroupMembership");
  }
}
