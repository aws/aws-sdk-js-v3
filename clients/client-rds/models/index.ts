import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group is already authorized for
 *             the specified DB security group.</p>
 */
export interface AuthorizationAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationAlreadyExistsFault {
  export function isa(o: any): o is AuthorizationAlreadyExistsFault {
    return __isa(o, "AuthorizationAlreadyExistsFault");
  }
}

/**
 * <p>The specified CIDR IP range or Amazon EC2 security group might not be authorized
 *             for the specified DB security group.</p>
 *         <p>Or, RDS might not be authorized to perform necessary actions using IAM on your
 *             behalf.</p>
 */
export interface AuthorizationNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationNotFoundFault {
  export function isa(o: any): o is AuthorizationNotFoundFault {
    return __isa(o, "AuthorizationNotFoundFault");
  }
}

/**
 * <p>The DB security group authorization quota has been reached.</p>
 */
export interface AuthorizationQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "AuthorizationQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace AuthorizationQuotaExceededFault {
  export function isa(o: any): o is AuthorizationQuotaExceededFault {
    return __isa(o, "AuthorizationQuotaExceededFault");
  }
}

export interface BackupPolicyNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "BackupPolicyNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace BackupPolicyNotFoundFault {
  export function isa(o: any): o is BackupPolicyNotFoundFault {
    return __isa(o, "BackupPolicyNotFoundFault");
  }
}

/**
 * <p>
 *             <code>CertificateIdentifier</code> doesn't refer to an
 *         existing certificate.
 *         </p>
 */
export interface CertificateNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CertificateNotFoundFault {
  export function isa(o: any): o is CertificateNotFoundFault {
    return __isa(o, "CertificateNotFoundFault");
  }
}

/**
 * <p>
 *             <code>CustomAvailabilityZoneName</code> is already used by an existing custom
 *             Availability Zone.</p>
 */
export interface CustomAvailabilityZoneAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomAvailabilityZoneAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace CustomAvailabilityZoneAlreadyExistsFault {
  export function isa(o: any): o is CustomAvailabilityZoneAlreadyExistsFault {
    return __isa(o, "CustomAvailabilityZoneAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>CustomAvailabilityZoneId</code> doesn't refer to an existing custom
 *             Availability Zone identifier.</p>
 */
export interface CustomAvailabilityZoneNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomAvailabilityZoneNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace CustomAvailabilityZoneNotFoundFault {
  export function isa(o: any): o is CustomAvailabilityZoneNotFoundFault {
    return __isa(o, "CustomAvailabilityZoneNotFoundFault");
  }
}

/**
 * <p>You have exceeded the maximum number of custom Availability Zones.</p>
 */
export interface CustomAvailabilityZoneQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "CustomAvailabilityZoneQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace CustomAvailabilityZoneQuotaExceededFault {
  export function isa(o: any): o is CustomAvailabilityZoneQuotaExceededFault {
    return __isa(o, "CustomAvailabilityZoneQuotaExceededFault");
  }
}

/**
 * <p>The user already has a DB cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterAlreadyExistsFault {
  export function isa(o: any): o is DBClusterAlreadyExistsFault {
    return __isa(o, "DBClusterAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>BacktrackIdentifier</code> doesn't refer to an existing backtrack. </p>
 */
export interface DBClusterBacktrackNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterBacktrackNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterBacktrackNotFoundFault {
  export function isa(o: any): o is DBClusterBacktrackNotFoundFault {
    return __isa(o, "DBClusterBacktrackNotFoundFault");
  }
}

/**
 * <p>The specified custom endpoint can't be created because it already exists.</p>
 */
export interface DBClusterEndpointAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterEndpointAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterEndpointAlreadyExistsFault {
  export function isa(o: any): o is DBClusterEndpointAlreadyExistsFault {
    return __isa(o, "DBClusterEndpointAlreadyExistsFault");
  }
}

/**
 * <p>The specified custom endpoint doesn't exist.</p>
 */
export interface DBClusterEndpointNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterEndpointNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterEndpointNotFoundFault {
  export function isa(o: any): o is DBClusterEndpointNotFoundFault {
    return __isa(o, "DBClusterEndpointNotFoundFault");
  }
}

/**
 * <p>The cluster already has the maximum number of custom endpoints.</p>
 */
export interface DBClusterEndpointQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterEndpointQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterEndpointQuotaExceededFault {
  export function isa(o: any): o is DBClusterEndpointQuotaExceededFault {
    return __isa(o, "DBClusterEndpointQuotaExceededFault");
  }
}

/**
 * <p>
 *             <code>DBClusterIdentifier</code> doesn't refer to an existing DB cluster.
 *         </p>
 */
export interface DBClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterNotFoundFault {
  export function isa(o: any): o is DBClusterNotFoundFault {
    return __isa(o, "DBClusterNotFoundFault");
  }
}

/**
 * <p>
 *             <code>DBClusterParameterGroupName</code> doesn't refer to an existing DB
 *             cluster parameter group. </p>
 */
export interface DBClusterParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterParameterGroupNotFoundFault {
  export function isa(o: any): o is DBClusterParameterGroupNotFoundFault {
    return __isa(o, "DBClusterParameterGroupNotFoundFault");
  }
}

/**
 * <p>The user attempted to create a new DB cluster and the user has already reached the
 *             maximum allowed DB cluster quota.</p>
 */
export interface DBClusterQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterQuotaExceededFault {
  export function isa(o: any): o is DBClusterQuotaExceededFault {
    return __isa(o, "DBClusterQuotaExceededFault");
  }
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) is already associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterRoleAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleAlreadyExistsFault {
  export function isa(o: any): o is DBClusterRoleAlreadyExistsFault {
    return __isa(o, "DBClusterRoleAlreadyExistsFault");
  }
}

/**
 * <p>The specified IAM role Amazon Resource Name (ARN) isn't associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleNotFoundFault {
  export function isa(o: any): o is DBClusterRoleNotFoundFault {
    return __isa(o, "DBClusterRoleNotFoundFault");
  }
}

/**
 * <p>You have exceeded the maximum number of IAM roles that can be associated with the specified DB cluster.</p>
 */
export interface DBClusterRoleQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterRoleQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterRoleQuotaExceededFault {
  export function isa(o: any): o is DBClusterRoleQuotaExceededFault {
    return __isa(o, "DBClusterRoleQuotaExceededFault");
  }
}

/**
 * <p>The user already has a DB cluster snapshot with the given identifier.</p>
 */
export interface DBClusterSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotAlreadyExistsFault {
  export function isa(o: any): o is DBClusterSnapshotAlreadyExistsFault {
    return __isa(o, "DBClusterSnapshotAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.
 *         </p>
 */
export interface DBClusterSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBClusterSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBClusterSnapshotNotFoundFault {
  export function isa(o: any): o is DBClusterSnapshotNotFoundFault {
    return __isa(o, "DBClusterSnapshotNotFoundFault");
  }
}

/**
 * <p>The user already has a DB instance with the given identifier.</p>
 */
export interface DBInstanceAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAlreadyExistsFault {
  export function isa(o: any): o is DBInstanceAlreadyExistsFault {
    return __isa(o, "DBInstanceAlreadyExistsFault");
  }
}

/**
 * <p>No automated backup for this DB instance was found.</p>
 */
export interface DBInstanceAutomatedBackupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceAutomatedBackupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAutomatedBackupNotFoundFault {
  export function isa(o: any): o is DBInstanceAutomatedBackupNotFoundFault {
    return __isa(o, "DBInstanceAutomatedBackupNotFoundFault");
  }
}

/**
 * <p>The quota for retained automated backups was exceeded. This prevents you
 *             from retaining any additional automated backups. The retained automated backups
 *             quota is the same as your DB Instance quota.</p>
 */
export interface DBInstanceAutomatedBackupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceAutomatedBackupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceAutomatedBackupQuotaExceededFault {
  export function isa(
    o: any
  ): o is DBInstanceAutomatedBackupQuotaExceededFault {
    return __isa(o, "DBInstanceAutomatedBackupQuotaExceededFault");
  }
}

/**
 * <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.
 *         </p>
 */
export interface DBInstanceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceNotFoundFault {
  export function isa(o: any): o is DBInstanceNotFoundFault {
    return __isa(o, "DBInstanceNotFoundFault");
  }
}

/**
 * <p>The specified <code>RoleArn</code> or <code>FeatureName</code> value is already associated with the DB instance.</p>
 */
export interface DBInstanceRoleAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceRoleAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleAlreadyExistsFault {
  export function isa(o: any): o is DBInstanceRoleAlreadyExistsFault {
    return __isa(o, "DBInstanceRoleAlreadyExistsFault");
  }
}

/**
 * <p>The specified <code>RoleArn</code> value doesn't match the specified feature for
 *             the DB instance.</p>
 */
export interface DBInstanceRoleNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceRoleNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleNotFoundFault {
  export function isa(o: any): o is DBInstanceRoleNotFoundFault {
    return __isa(o, "DBInstanceRoleNotFoundFault");
  }
}

/**
 * <p>You can't associate any more AWS Identity and Access Management (IAM) roles with the DB instance because the quota has been reached.</p>
 */
export interface DBInstanceRoleQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBInstanceRoleQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBInstanceRoleQuotaExceededFault {
  export function isa(o: any): o is DBInstanceRoleQuotaExceededFault {
    return __isa(o, "DBInstanceRoleQuotaExceededFault");
  }
}

/**
 * <p>
 *             <code>LogFileName</code> doesn't refer to an existing DB log file.</p>
 */
export interface DBLogFileNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBLogFileNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBLogFileNotFoundFault {
  export function isa(o: any): o is DBLogFileNotFoundFault {
    return __isa(o, "DBLogFileNotFoundFault");
  }
}

/**
 * <p>A DB parameter group with the same name exists.</p>
 */
export interface DBParameterGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupAlreadyExistsFault {
  export function isa(o: any): o is DBParameterGroupAlreadyExistsFault {
    return __isa(o, "DBParameterGroupAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.
 *         </p>
 */
export interface DBParameterGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupNotFoundFault {
  export function isa(o: any): o is DBParameterGroupNotFoundFault {
    return __isa(o, "DBParameterGroupNotFoundFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB parameter
 *             groups.</p>
 */
export interface DBParameterGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBParameterGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBParameterGroupQuotaExceededFault {
  export function isa(o: any): o is DBParameterGroupQuotaExceededFault {
    return __isa(o, "DBParameterGroupQuotaExceededFault");
  }
}

/**
 * <p>The specified proxy name must be unique for all proxies owned by your AWS account in the specified AWS Region.</p>
 */
export interface DBProxyAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyAlreadyExistsFault {
  export function isa(o: any): o is DBProxyAlreadyExistsFault {
    return __isa(o, "DBProxyAlreadyExistsFault");
  }
}

/**
 * <p>The specified proxy name doesn't correspond to a proxy owned by your AWS accoutn in the specified AWS Region.</p>
 */
export interface DBProxyNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyNotFoundFault {
  export function isa(o: any): o is DBProxyNotFoundFault {
    return __isa(o, "DBProxyNotFoundFault");
  }
}

/**
 * <p>Your AWS account already has the maximum number of proxies in the specified AWS Region.</p>
 */
export interface DBProxyQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyQuotaExceededFault {
  export function isa(o: any): o is DBProxyQuotaExceededFault {
    return __isa(o, "DBProxyQuotaExceededFault");
  }
}

/**
 * <p>The proxy is already associated with the specified RDS DB instance or Aurora DB cluster.</p>
 */
export interface DBProxyTargetAlreadyRegisteredFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyTargetAlreadyRegisteredFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetAlreadyRegisteredFault {
  export function isa(o: any): o is DBProxyTargetAlreadyRegisteredFault {
    return __isa(o, "DBProxyTargetAlreadyRegisteredFault");
  }
}

/**
 * <p>The specified target group isn't available for a proxy owned by your AWS account in the specified AWS Region.</p>
 */
export interface DBProxyTargetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyTargetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetGroupNotFoundFault {
  export function isa(o: any): o is DBProxyTargetGroupNotFoundFault {
    return __isa(o, "DBProxyTargetGroupNotFoundFault");
  }
}

/**
 * <p>The specified RDS DB instance or Aurora DB cluster isn't available for a proxy owned by your AWS account in the specified AWS Region.</p>
 */
export interface DBProxyTargetNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBProxyTargetNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBProxyTargetNotFoundFault {
  export function isa(o: any): o is DBProxyTargetNotFoundFault {
    return __isa(o, "DBProxyTargetNotFoundFault");
  }
}

/**
 * <p>
 *         A DB security group with the name specified in
 *         <code>DBSecurityGroupName</code> already exists.
 *         </p>
 */
export interface DBSecurityGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupAlreadyExistsFault {
  export function isa(o: any): o is DBSecurityGroupAlreadyExistsFault {
    return __isa(o, "DBSecurityGroupAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.
 *         </p>
 */
export interface DBSecurityGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupNotFoundFault {
  export function isa(o: any): o is DBSecurityGroupNotFoundFault {
    return __isa(o, "DBSecurityGroupNotFoundFault");
  }
}

/**
 * <p>A DB security group isn't allowed for this action.</p>
 */
export interface DBSecurityGroupNotSupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupNotSupportedFault {
  export function isa(o: any): o is DBSecurityGroupNotSupportedFault {
    return __isa(o, "DBSecurityGroupNotSupportedFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB security
 *             groups.</p>
 */
export interface DBSecurityGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSecurityGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSecurityGroupQuotaExceededFault {
  export function isa(o: any): o is DBSecurityGroupQuotaExceededFault {
    return __isa(o, "DBSecurityGroupQuotaExceededFault");
  }
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> is already used by an existing snapshot.
 *         </p>
 */
export interface DBSnapshotAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSnapshotAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotAlreadyExistsFault {
  export function isa(o: any): o is DBSnapshotAlreadyExistsFault {
    return __isa(o, "DBSnapshotAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.
 *         </p>
 */
export interface DBSnapshotNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSnapshotNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSnapshotNotFoundFault {
  export function isa(o: any): o is DBSnapshotNotFoundFault {
    return __isa(o, "DBSnapshotNotFoundFault");
  }
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> is already used by an existing DB subnet group.
 *         </p>
 */
export interface DBSubnetGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupAlreadyExistsFault {
  export function isa(o: any): o is DBSubnetGroupAlreadyExistsFault {
    return __isa(o, "DBSubnetGroupAlreadyExistsFault");
  }
}

/**
 * <p>Subnets in the DB subnet group should cover at least two Availability Zones unless there is only one Availability Zone.</p>
 */
export interface DBSubnetGroupDoesNotCoverEnoughAZs
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupDoesNotCoverEnoughAZs {
  export function isa(o: any): o is DBSubnetGroupDoesNotCoverEnoughAZs {
    return __isa(o, "DBSubnetGroupDoesNotCoverEnoughAZs");
  }
}

/**
 * <p>The DBSubnetGroup shouldn't be specified while creating read replicas that lie
 *             in the same region as the source instance.</p>
 */
export interface DBSubnetGroupNotAllowedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupNotAllowedFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupNotAllowedFault {
  export function isa(o: any): o is DBSubnetGroupNotAllowedFault {
    return __isa(o, "DBSubnetGroupNotAllowedFault");
  }
}

/**
 * <p>
 *             <code>DBSubnetGroupName</code> doesn't refer to an existing DB subnet group.
 *         </p>
 */
export interface DBSubnetGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupNotFoundFault {
  export function isa(o: any): o is DBSubnetGroupNotFoundFault {
    return __isa(o, "DBSubnetGroupNotFoundFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB subnet
 *             groups.</p>
 */
export interface DBSubnetGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetGroupQuotaExceededFault {
  export function isa(o: any): o is DBSubnetGroupQuotaExceededFault {
    return __isa(o, "DBSubnetGroupQuotaExceededFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of subnets in a
 *             DB subnet groups.</p>
 */
export interface DBSubnetQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBSubnetQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace DBSubnetQuotaExceededFault {
  export function isa(o: any): o is DBSubnetQuotaExceededFault {
    return __isa(o, "DBSubnetQuotaExceededFault");
  }
}

/**
 * <p>The DB upgrade failed because a resource the DB depends on can't be
 *             modified.</p>
 */
export interface DBUpgradeDependencyFailureFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DBUpgradeDependencyFailureFault";
  $fault: "client";
  message?: string;
}

export namespace DBUpgradeDependencyFailureFault {
  export function isa(o: any): o is DBUpgradeDependencyFailureFault {
    return __isa(o, "DBUpgradeDependencyFailureFault");
  }
}

/**
 * <p>
 *             <code>Domain</code> doesn't refer to an existing Active Directory domain.
 *         </p>
 */
export interface DomainNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "DomainNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace DomainNotFoundFault {
  export function isa(o: any): o is DomainNotFoundFault {
    return __isa(o, "DomainNotFoundFault");
  }
}

/**
 * <p>You have reached the maximum number of event subscriptions.</p>
 */
export interface EventSubscriptionQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "EventSubscriptionQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace EventSubscriptionQuotaExceededFault {
  export function isa(o: any): o is EventSubscriptionQuotaExceededFault {
    return __isa(o, "EventSubscriptionQuotaExceededFault");
  }
}

/**
 * <p></p>
 */
export interface GlobalClusterAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalClusterAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace GlobalClusterAlreadyExistsFault {
  export function isa(o: any): o is GlobalClusterAlreadyExistsFault {
    return __isa(o, "GlobalClusterAlreadyExistsFault");
  }
}

/**
 * <p></p>
 */
export interface GlobalClusterNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalClusterNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace GlobalClusterNotFoundFault {
  export function isa(o: any): o is GlobalClusterNotFoundFault {
    return __isa(o, "GlobalClusterNotFoundFault");
  }
}

/**
 * <p></p>
 */
export interface GlobalClusterQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "GlobalClusterQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace GlobalClusterQuotaExceededFault {
  export function isa(o: any): o is GlobalClusterQuotaExceededFault {
    return __isa(o, "GlobalClusterQuotaExceededFault");
  }
}

/**
 * <p>The specified installation medium has already been imported.</p>
 */
export interface InstallationMediaAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstallationMediaAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace InstallationMediaAlreadyExistsFault {
  export function isa(o: any): o is InstallationMediaAlreadyExistsFault {
    return __isa(o, "InstallationMediaAlreadyExistsFault");
  }
}

/**
 * <p>
 *             <code>InstallationMediaID</code> doesn't refer to an existing installation medium.</p>
 */
export interface InstallationMediaNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstallationMediaNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace InstallationMediaNotFoundFault {
  export function isa(o: any): o is InstallationMediaNotFoundFault {
    return __isa(o, "InstallationMediaNotFoundFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB
 *             instances.</p>
 */
export interface InstanceQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace InstanceQuotaExceededFault {
  export function isa(o: any): o is InstanceQuotaExceededFault {
    return __isa(o, "InstanceQuotaExceededFault");
  }
}

/**
 * <p>The DB cluster doesn't have enough capacity for the current operation.</p>
 */
export interface InsufficientDBClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBClusterCapacityFault {
  export function isa(o: any): o is InsufficientDBClusterCapacityFault {
    return __isa(o, "InsufficientDBClusterCapacityFault");
  }
}

/**
 * <p>The specified DB instance class isn't available in the specified Availability
 *             Zone.</p>
 */
export interface InsufficientDBInstanceCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientDBInstanceCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientDBInstanceCapacityFault {
  export function isa(o: any): o is InsufficientDBInstanceCapacityFault {
    return __isa(o, "InsufficientDBInstanceCapacityFault");
  }
}

/**
 * <p>There is insufficient storage available for the current action. You might be able to
 *             resolve this error by updating your subnet group to use different Availability Zones
 *             that have more storage available.</p>
 */
export interface InsufficientStorageClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientStorageClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InsufficientStorageClusterCapacityFault {
  export function isa(o: any): o is InsufficientStorageClusterCapacityFault {
    return __isa(o, "InsufficientStorageClusterCapacityFault");
  }
}

/**
 * <p>
 *             <code>Capacity</code> isn't a valid Aurora Serverless DB cluster
 *             capacity. Valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>,
 *             <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
 */
export interface InvalidDBClusterCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterCapacityFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterCapacityFault {
  export function isa(o: any): o is InvalidDBClusterCapacityFault {
    return __isa(o, "InvalidDBClusterCapacityFault");
  }
}

/**
 * <p>The requested operation can't be performed on the endpoint while the endpoint is in this state.</p>
 */
export interface InvalidDBClusterEndpointStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterEndpointStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterEndpointStateFault {
  export function isa(o: any): o is InvalidDBClusterEndpointStateFault {
    return __isa(o, "InvalidDBClusterEndpointStateFault");
  }
}

/**
 * <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 */
export interface InvalidDBClusterSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterSnapshotStateFault {
  export function isa(o: any): o is InvalidDBClusterSnapshotStateFault {
    return __isa(o, "InvalidDBClusterSnapshotStateFault");
  }
}

/**
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
 */
export interface InvalidDBClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBClusterStateFault {
  export function isa(o: any): o is InvalidDBClusterStateFault {
    return __isa(o, "InvalidDBClusterStateFault");
  }
}

/**
 * <p>The automated backup is in an invalid state.
 *     	    For example, this automated backup is associated with an active instance. </p>
 */
export interface InvalidDBInstanceAutomatedBackupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBInstanceAutomatedBackupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBInstanceAutomatedBackupStateFault {
  export function isa(o: any): o is InvalidDBInstanceAutomatedBackupStateFault {
    return __isa(o, "InvalidDBInstanceAutomatedBackupStateFault");
  }
}

/**
 * <p>The DB instance isn't in a valid state.</p>
 */
export interface InvalidDBInstanceStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBInstanceStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBInstanceStateFault {
  export function isa(o: any): o is InvalidDBInstanceStateFault {
    return __isa(o, "InvalidDBInstanceStateFault");
  }
}

/**
 * <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 */
export interface InvalidDBParameterGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBParameterGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBParameterGroupStateFault {
  export function isa(o: any): o is InvalidDBParameterGroupStateFault {
    return __isa(o, "InvalidDBParameterGroupStateFault");
  }
}

/**
 * <p>The requested operation can't be performed while the proxy is in this state.</p>
 */
export interface InvalidDBProxyStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBProxyStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBProxyStateFault {
  export function isa(o: any): o is InvalidDBProxyStateFault {
    return __isa(o, "InvalidDBProxyStateFault");
  }
}

/**
 * <p>The state of the DB security group doesn't allow deletion.</p>
 */
export interface InvalidDBSecurityGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSecurityGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSecurityGroupStateFault {
  export function isa(o: any): o is InvalidDBSecurityGroupStateFault {
    return __isa(o, "InvalidDBSecurityGroupStateFault");
  }
}

/**
 * <p>The state of the DB snapshot doesn't allow deletion.</p>
 */
export interface InvalidDBSnapshotStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSnapshotStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSnapshotStateFault {
  export function isa(o: any): o is InvalidDBSnapshotStateFault {
    return __isa(o, "InvalidDBSnapshotStateFault");
  }
}

/**
 * <p>The DBSubnetGroup doesn't belong to the same VPC as that of an existing
 *             cross-region read replica of the same source instance.</p>
 */
export interface InvalidDBSubnetGroupFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetGroupFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetGroupFault {
  export function isa(o: any): o is InvalidDBSubnetGroupFault {
    return __isa(o, "InvalidDBSubnetGroupFault");
  }
}

/**
 * <p>The DB subnet group cannot be deleted because it's in use.</p>
 */
export interface InvalidDBSubnetGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetGroupStateFault {
  export function isa(o: any): o is InvalidDBSubnetGroupStateFault {
    return __isa(o, "InvalidDBSubnetGroupStateFault");
  }
}

/**
 * <p>
 *             The DB subnet isn't in the <i>available</i> state.
 *         </p>
 */
export interface InvalidDBSubnetStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidDBSubnetStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidDBSubnetStateFault {
  export function isa(o: any): o is InvalidDBSubnetStateFault {
    return __isa(o, "InvalidDBSubnetStateFault");
  }
}

/**
 * <p>This error can occur if someone else is modifying a subscription. You should retry the action.</p>
 */
export interface InvalidEventSubscriptionStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidEventSubscriptionStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidEventSubscriptionStateFault {
  export function isa(o: any): o is InvalidEventSubscriptionStateFault {
    return __isa(o, "InvalidEventSubscriptionStateFault");
  }
}

/**
 * <p></p>
 */
export interface InvalidGlobalClusterStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidGlobalClusterStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidGlobalClusterStateFault {
  export function isa(o: any): o is InvalidGlobalClusterStateFault {
    return __isa(o, "InvalidGlobalClusterStateFault");
  }
}

/**
 * <p>
 *             The option group isn't in the <i>available</i> state.
 *         </p>
 */
export interface InvalidOptionGroupStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidOptionGroupStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidOptionGroupStateFault {
  export function isa(o: any): o is InvalidOptionGroupStateFault {
    return __isa(o, "InvalidOptionGroupStateFault");
  }
}

/**
 * <p>Cannot restore from VPC backup to non-VPC DB instance.</p>
 */
export interface InvalidRestoreFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRestoreFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidRestoreFault {
  export function isa(o: any): o is InvalidRestoreFault {
    return __isa(o, "InvalidRestoreFault");
  }
}

/**
 * <p>The specified Amazon S3 bucket name can't be found or Amazon RDS isn't
 *             authorized to access the specified Amazon S3 bucket. Verify the <b>SourceS3BucketName</b> and <b>S3IngestionRoleArn</b> values and try again.</p>
 */
export interface InvalidS3BucketFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidS3BucketFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidS3BucketFault {
  export function isa(o: any): o is InvalidS3BucketFault {
    return __isa(o, "InvalidS3BucketFault");
  }
}

/**
 * <p>The requested subnet is invalid, or multiple subnets were requested that are not all in a common VPC.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  message?: string;
}

export namespace InvalidSubnet {
  export function isa(o: any): o is InvalidSubnet {
    return __isa(o, "InvalidSubnet");
  }
}

/**
 * <p>The DB subnet group doesn't cover all Availability Zones after it's
 *             created because of users' change.</p>
 */
export interface InvalidVPCNetworkStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidVPCNetworkStateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidVPCNetworkStateFault {
  export function isa(o: any): o is InvalidVPCNetworkStateFault {
    return __isa(o, "InvalidVPCNetworkStateFault");
  }
}

/**
 * <p>An error occurred accessing an AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export function isa(o: any): o is KMSKeyNotAccessibleFault {
    return __isa(o, "KMSKeyNotAccessibleFault");
  }
}

/**
 * <p>The option group you are trying to create already exists.</p>
 */
export interface OptionGroupAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OptionGroupAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace OptionGroupAlreadyExistsFault {
  export function isa(o: any): o is OptionGroupAlreadyExistsFault {
    return __isa(o, "OptionGroupAlreadyExistsFault");
  }
}

/**
 * <p>The specified option group could not be found.</p>
 */
export interface OptionGroupNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OptionGroupNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace OptionGroupNotFoundFault {
  export function isa(o: any): o is OptionGroupNotFoundFault {
    return __isa(o, "OptionGroupNotFoundFault");
  }
}

/**
 * <p>The quota of 20 option groups was exceeded for this AWS account.</p>
 */
export interface OptionGroupQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "OptionGroupQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace OptionGroupQuotaExceededFault {
  export function isa(o: any): o is OptionGroupQuotaExceededFault {
    return __isa(o, "OptionGroupQuotaExceededFault");
  }
}

/**
 * <p>
 *             <code>SourceDBInstanceIdentifier</code>
 *         refers to a DB instance with
 *         <code>BackupRetentionPeriod</code> equal to 0.
 *         </p>
 */
export interface PointInTimeRestoreNotEnabledFault
  extends __SmithyException,
    $MetadataBearer {
  name: "PointInTimeRestoreNotEnabledFault";
  $fault: "client";
  message?: string;
}

export namespace PointInTimeRestoreNotEnabledFault {
  export function isa(o: any): o is PointInTimeRestoreNotEnabledFault {
    return __isa(o, "PointInTimeRestoreNotEnabledFault");
  }
}

/**
 * <p>Provisioned IOPS not available in the specified Availability Zone.</p>
 */
export interface ProvisionedIopsNotAvailableInAZFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ProvisionedIopsNotAvailableInAZFault";
  $fault: "client";
  message?: string;
}

export namespace ProvisionedIopsNotAvailableInAZFault {
  export function isa(o: any): o is ProvisionedIopsNotAvailableInAZFault {
    return __isa(o, "ProvisionedIopsNotAvailableInAZFault");
  }
}

/**
 * <p>User already has a reservation with the given identifier.</p>
 */
export interface ReservedDBInstanceAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstanceAlreadyExistsFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceAlreadyExistsFault {
  export function isa(o: any): o is ReservedDBInstanceAlreadyExistsFault {
    return __isa(o, "ReservedDBInstanceAlreadyExistsFault");
  }
}

/**
 * <p>The specified reserved DB Instance not found.</p>
 */
export interface ReservedDBInstanceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstanceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceNotFoundFault {
  export function isa(o: any): o is ReservedDBInstanceNotFoundFault {
    return __isa(o, "ReservedDBInstanceNotFoundFault");
  }
}

/**
 * <p>Request would exceed the user's DB Instance quota.</p>
 */
export interface ReservedDBInstanceQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstanceQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstanceQuotaExceededFault {
  export function isa(o: any): o is ReservedDBInstanceQuotaExceededFault {
    return __isa(o, "ReservedDBInstanceQuotaExceededFault");
  }
}

/**
 * <p>Specified offering does not exist.</p>
 */
export interface ReservedDBInstancesOfferingNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ReservedDBInstancesOfferingNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ReservedDBInstancesOfferingNotFoundFault {
  export function isa(o: any): o is ReservedDBInstancesOfferingNotFoundFault {
    return __isa(o, "ReservedDBInstancesOfferingNotFoundFault");
  }
}

/**
 * <p>The specified resource ID was not found.</p>
 */
export interface ResourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundFault {
  export function isa(o: any): o is ResourceNotFoundFault {
    return __isa(o, "ResourceNotFoundFault");
  }
}

/**
 * <p>SNS has responded that there is a problem with the SND topic specified.</p>
 */
export interface SNSInvalidTopicFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
  message?: string;
}

export namespace SNSInvalidTopicFault {
  export function isa(o: any): o is SNSInvalidTopicFault {
    return __isa(o, "SNSInvalidTopicFault");
  }
}

/**
 * <p>You do not have permission to publish to the SNS topic ARN.</p>
 */
export interface SNSNoAuthorizationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  export function isa(o: any): o is SNSNoAuthorizationFault {
    return __isa(o, "SNSNoAuthorizationFault");
  }
}

/**
 * <p>The SNS topic ARN does not exist.</p>
 */
export interface SNSTopicArnNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSTopicArnNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SNSTopicArnNotFoundFault {
  export function isa(o: any): o is SNSTopicArnNotFoundFault {
    return __isa(o, "SNSTopicArnNotFoundFault");
  }
}

/**
 * <p>You have exceeded the maximum number of accounts that you can share a manual DB snapshot with.</p>
 */
export interface SharedSnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SharedSnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SharedSnapshotQuotaExceededFault {
  export function isa(o: any): o is SharedSnapshotQuotaExceededFault {
    return __isa(o, "SharedSnapshotQuotaExceededFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 */
export interface SnapshotQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SnapshotQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace SnapshotQuotaExceededFault {
  export function isa(o: any): o is SnapshotQuotaExceededFault {
    return __isa(o, "SnapshotQuotaExceededFault");
  }
}

/**
 * <p>The requested source could not be found.</p>
 */
export interface SourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SourceNotFoundFault {
  export function isa(o: any): o is SourceNotFoundFault {
    return __isa(o, "SourceNotFoundFault");
  }
}

/**
 * <p>The request would result in the user exceeding the allowed amount of storage
 *             available across all DB instances.</p>
 */
export interface StorageQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
  message?: string;
}

export namespace StorageQuotaExceededFault {
  export function isa(o: any): o is StorageQuotaExceededFault {
    return __isa(o, "StorageQuotaExceededFault");
  }
}

/**
 * <p>Storage of the <code>StorageType</code> specified can't be associated
 *             with the DB instance. </p>
 */
export interface StorageTypeNotSupportedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageTypeNotSupportedFault";
  $fault: "client";
  message?: string;
}

export namespace StorageTypeNotSupportedFault {
  export function isa(o: any): o is StorageTypeNotSupportedFault {
    return __isa(o, "StorageTypeNotSupportedFault");
  }
}

/**
 * <p>The DB subnet is already in use in the Availability Zone.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export function isa(o: any): o is SubnetAlreadyInUse {
    return __isa(o, "SubnetAlreadyInUse");
  }
}

/**
 * <p>The supplied subscription name already exists.</p>
 */
export interface SubscriptionAlreadyExistFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionAlreadyExistFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionAlreadyExistFault {
  export function isa(o: any): o is SubscriptionAlreadyExistFault {
    return __isa(o, "SubscriptionAlreadyExistFault");
  }
}

/**
 * <p>The supplied category does not exist.</p>
 */
export interface SubscriptionCategoryNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionCategoryNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionCategoryNotFoundFault {
  export function isa(o: any): o is SubscriptionCategoryNotFoundFault {
    return __isa(o, "SubscriptionCategoryNotFoundFault");
  }
}

/**
 * <p>The subscription name does not exist.</p>
 */
export interface SubscriptionNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SubscriptionNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace SubscriptionNotFoundFault {
  export function isa(o: any): o is SubscriptionNotFoundFault {
    return __isa(o, "SubscriptionNotFoundFault");
  }
}

/**
 * <p>Data returned by the <b>DescribeAccountAttributes</b> action.</p>
 */
export interface AccountAttributesMessage {
  __type?: "AccountAttributesMessage";
  /**
   * <p>A list of <code>AccountQuota</code> objects. Within this list, each quota has a name,
   *             a count of usage toward the quota maximum, and a maximum value for the quota.</p>
   */
  AccountQuotas?: Array<AccountQuota>;
}

export namespace AccountAttributesMessage {
  export function isa(o: any): o is AccountAttributesMessage {
    return __isa(o, "AccountAttributesMessage");
  }
}

/**
 * <p>Describes a quota for an AWS account.</p>
 *          <p>The following are account quotas:</p>
 *          <ul>
 *             <li>
 *               <p>
 *                   <code>AllocatedStorage</code> - The total allocated storage per account, in GiB.
 *                     The used value is the total allocated storage in the account, in GiB.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>AuthorizationsPerDBSecurityGroup</code> - The number of ingress rules per DB security group.
 *                   The used value is the highest number of ingress rules in a DB security group in the account. Other
 *                   DB security groups in the account might have a lower number of ingress rules.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>CustomEndpointsPerDBCluster</code> - The number of custom endpoints per DB cluster.
 *                   The used value is the highest number of custom endpoints in a DB clusters in the account. Other
 *                   DB clusters in the account might have a lower number of custom endpoints.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBClusterParameterGroups</code> - The number of DB cluster parameter groups
 *                     per account, excluding default parameter groups. The used value is the count of
 *                     nondefault DB cluster parameter groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBClusterRoles</code> - The number of associated AWS Identity and Access Management (IAM) roles per DB cluster.
 *                   The used value is the highest number of associated IAM roles for a DB cluster in the account. Other
 *                   DB clusters in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBClusters</code> - The number of DB clusters per account.
 *                   The used value is the count of DB clusters in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBInstanceRoles</code> - The number of associated IAM roles per DB instance.
 *                   The used value is the highest number of associated IAM roles for a DB instance in the account. Other
 *                   DB instances in the account might have a lower number of associated IAM roles.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBInstances</code> - The number of DB instances per account.
 *                   The used value is the count of the DB instances in the account.</p>
 *                   <p>Amazon RDS DB instances, Amazon Aurora DB instances, Amazon Neptune instances, and Amazon DocumentDB
 *                       instances apply to this quota.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBParameterGroups</code> - The number of DB parameter groups per account,
 *                     excluding default parameter groups. The used value is the count of nondefault DB
 *                     parameter groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBSecurityGroups</code> - The number of DB security groups (not VPC
 *                     security groups) per account, excluding the default security group. The used
 *                     value is the count of nondefault DB security groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>DBSubnetGroups</code> - The number of DB subnet groups per account.
 *                   The used value is the count of the DB subnet groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>EventSubscriptions</code> - The number of event subscriptions per account.
 *                   The used value is the count of the event subscriptions in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>ManualSnapshots</code> - The number of manual DB snapshots per account.
 *                   The used value is the count of the manual DB snapshots in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>OptionGroups</code> - The number of DB option groups per account, excluding
 *                     default option groups. The used value is the count of nondefault DB option
 *                     groups in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>ReadReplicasPerMaster</code> - The number of Read Replicas per DB instance.
 *                   The used value is the highest number of Read Replicas for a DB instance in the account. Other
 *                   DB instances in the account might have a lower number of Read Replicas.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>ReservedDBInstances</code> - The number of reserved DB instances per account.
 *                   The used value is the count of the active reserved DB instances in the account.</p>
 *             </li>
 *             <li>
 *               <p>
 *                   <code>SubnetsPerDBSubnetGroup</code> - The number of subnets per DB subnet group.
 *                   The used value is highest number of subnets for a DB subnet group in the account. Other
 *                   DB subnet groups in the account might have a lower number of subnets.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html">Quotas for Amazon RDS</a> in the
 *                 <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_Limits.html">Quotas for Amazon Aurora</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 */
export interface AccountQuota {
  __type?: "AccountQuota";
  /**
   * <p>The name of the Amazon RDS quota for this AWS account.</p>
   */
  AccountQuotaName?: string;

  /**
   * <p>The maximum allowed value for the quota.</p>
   */
  Max?: number;

  /**
   * <p>The amount currently used toward the quota maximum.</p>
   */
  Used?: number;
}

export namespace AccountQuota {
  export function isa(o: any): o is AccountQuota {
    return __isa(o, "AccountQuota");
  }
}

export type ActivityStreamMode = "async" | "sync";

export type ActivityStreamStatus =
  | "started"
  | "starting"
  | "stopped"
  | "stopping";

export interface AddRoleToDBClusterMessage {
  __type?: "AddRoleToDBClusterMessage";
  /**
   * <p>The name of the DB cluster to associate the IAM role with.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be associated with.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the Aurora DB
   *             cluster, for example <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace AddRoleToDBClusterMessage {
  export function isa(o: any): o is AddRoleToDBClusterMessage {
    return __isa(o, "AddRoleToDBClusterMessage");
  }
}

export interface AddRoleToDBInstanceMessage {
  __type?: "AddRoleToDBInstanceMessage";
  /**
   * <p>The name of the DB instance to associate the IAM role with.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be associated with.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.
   *         </p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to associate with the DB instance, for
   *             example <code>arn:aws:iam::123456789012:role/AccessRole</code>. </p>
   */
  RoleArn: string | undefined;
}

export namespace AddRoleToDBInstanceMessage {
  export function isa(o: any): o is AddRoleToDBInstanceMessage {
    return __isa(o, "AddRoleToDBInstanceMessage");
  }
}

/**
 * <p></p>
 */
export interface AddSourceIdentifierToSubscriptionMessage {
  __type?: "AddSourceIdentifierToSubscriptionMessage";
  /**
   * <p>The identifier of the event source to be added.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier: string | undefined;

  /**
   * <p>The name of the RDS event notification subscription you want to add a source identifier to.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace AddSourceIdentifierToSubscriptionMessage {
  export function isa(o: any): o is AddSourceIdentifierToSubscriptionMessage {
    return __isa(o, "AddSourceIdentifierToSubscriptionMessage");
  }
}

export interface AddSourceIdentifierToSubscriptionResult {
  __type?: "AddSourceIdentifierToSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace AddSourceIdentifierToSubscriptionResult {
  export function isa(o: any): o is AddSourceIdentifierToSubscriptionResult {
    return __isa(o, "AddSourceIdentifierToSubscriptionResult");
  }
}

/**
 * <p></p>
 */
export interface AddTagsToResourceMessage {
  __type?: "AddTagsToResourceMessage";
  /**
   * <p>The Amazon RDS resource that the tags are added to. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   */
  Tags: Array<Tag> | undefined;
}

export namespace AddTagsToResourceMessage {
  export function isa(o: any): o is AddTagsToResourceMessage {
    return __isa(o, "AddTagsToResourceMessage");
  }
}

export type ApplyMethod = "immediate" | "pending-reboot";

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  __type?: "ApplyPendingMaintenanceActionMessage";
  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   *          <p>Valid values: <code>system-update</code>, <code>db-upgrade</code>,
   *           <code>hardware-maintenance</code>, <code>ca-certificate-rotation</code>
   *          </p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. An opt-in
   *            request of type <code>immediate</code> can't be undone.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during
   *             the next maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code>
   *             opt-in requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;

  /**
   * <p>The RDS Amazon Resource Name (ARN) of the resource that the
   *       pending maintenance action applies to. For information about
   *       creating an ARN,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *         Constructing an RDS Amazon Resource Name (ARN)</a>.</p>
   */
  ResourceIdentifier: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
  export function isa(o: any): o is ApplyPendingMaintenanceActionMessage {
    return __isa(o, "ApplyPendingMaintenanceActionMessage");
  }
}

export interface ApplyPendingMaintenanceActionResult {
  __type?: "ApplyPendingMaintenanceActionResult";
  /**
   * <p>Describes the pending maintenance actions for a resource.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResult {
  export function isa(o: any): o is ApplyPendingMaintenanceActionResult {
    return __isa(o, "ApplyPendingMaintenanceActionResult");
  }
}

export enum AuthScheme {
  SECRETS = "SECRETS"
}

/**
 * <p></p>
 */
export interface AuthorizeDBSecurityGroupIngressMessage {
  __type?: "AuthorizeDBSecurityGroupIngressMessage";
  /**
   * <p>The IP range to authorize.</p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the DB security group to add authorization to.</p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>
   *         Id of the EC2 security group to authorize.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>
   *         Name of the EC2 security group to authorize.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code>
   *       or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>
   *         AWS account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The AWS access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace AuthorizeDBSecurityGroupIngressMessage {
  export function isa(o: any): o is AuthorizeDBSecurityGroupIngressMessage {
    return __isa(o, "AuthorizeDBSecurityGroupIngressMessage");
  }
}

export interface AuthorizeDBSecurityGroupIngressResult {
  __type?: "AuthorizeDBSecurityGroupIngressResult";
  /**
   * <p>Contains the details for an Amazon RDS DB security group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.
   *       </p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace AuthorizeDBSecurityGroupIngressResult {
  export function isa(o: any): o is AuthorizeDBSecurityGroupIngressResult {
    return __isa(o, "AuthorizeDBSecurityGroupIngressResult");
  }
}

/**
 * <p>Contains Availability Zone information.</p>
 *         <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code>
 *             data type.</p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export function isa(o: any): o is AvailabilityZone {
    return __isa(o, "AvailabilityZone");
  }
}

/**
 * <p>Contains the available processor feature information for the DB instance class of a DB instance.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface AvailableProcessorFeature {
  __type?: "AvailableProcessorFeature";
  /**
   * <p>The allowed values for the processor feature of the DB instance class.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The default value for the processor feature of the DB instance class.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code>
   *             and <code>threadsPerCore</code>.</p>
   */
  Name?: string;
}

export namespace AvailableProcessorFeature {
  export function isa(o: any): o is AvailableProcessorFeature {
    return __isa(o, "AvailableProcessorFeature");
  }
}

/**
 * <p></p>
 */
export interface BacktrackDBClusterMessage {
  __type?: "BacktrackDBClusterMessage";
  /**
   * <p>The timestamp of the time to backtrack the DB cluster to, specified in ISO
   *             8601 format. For more information about ISO 8601, see the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia
   *             page.</a>
   *          </p>
   *         <note>
   *             <p>If the specified time isn't a consistent time for the DB cluster,
   *                 Aurora automatically chooses the nearest possible consistent time for the DB cluster.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain a valid ISO 8601 timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>Can't contain a timestamp set in the future.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>2017-07-08T18:00Z</code>
   *          </p>
   */
  BacktrackTo: Date | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster to be backtracked. This parameter is
   *             stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether to force the DB cluster to backtrack when binary logging is
   *             enabled. Otherwise, an error occurs when binary logging is enabled.</p>
   */
  Force?: boolean;

  /**
   * <p>A value that indicates whether to backtrack the DB cluster to the earliest possible
   *             backtrack time when <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time. When this parameter is disabled and <i>BacktrackTo</i> is set to a timestamp earlier than the earliest
   *             backtrack time, an error occurs.</p>
   */
  UseEarliestTimeOnPointInTimeUnavailable?: boolean;
}

export namespace BacktrackDBClusterMessage {
  export function isa(o: any): o is BacktrackDBClusterMessage {
    return __isa(o, "BacktrackDBClusterMessage");
  }
}

/**
 * <p>A CA certificate for an AWS account.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The unique key that identifies a certificate.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>The type of the certificate.</p>
   */
  CertificateType?: string;

  /**
   * <p>Whether there is an override for the default certificate identifier.</p>
   */
  CustomerOverride?: boolean;

  /**
   * <p>If there is an override for the default certificate identifier, when the override
   *             expires.</p>
   */
  CustomerOverrideValidTill?: Date;

  /**
   * <p>The thumbprint of the certificate.</p>
   */
  Thumbprint?: string;

  /**
   * <p>The starting date from which the certificate is valid.</p>
   */
  ValidFrom?: Date;

  /**
   * <p>The final date that the certificate continues to be valid.</p>
   */
  ValidTill?: Date;
}

export namespace Certificate {
  export function isa(o: any): o is Certificate {
    return __isa(o, "Certificate");
  }
}

/**
 * <p>Data returned by the <b>DescribeCertificates</b> action.</p>
 */
export interface CertificateMessage {
  __type?: "CertificateMessage";
  /**
   * <p>The list of <code>Certificate</code> objects for the AWS account.</p>
   */
  Certificates?: Array<Certificate>;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribeCertificates</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace CertificateMessage {
  export function isa(o: any): o is CertificateMessage {
    return __isa(o, "CertificateMessage");
  }
}

/**
 * <p>
 *             This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
 *         </p>
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
    return __isa(o, "CharacterSet");
  }
}

/**
 * <p>The configuration setting for the log types to be enabled for export to CloudWatch
 *             Logs for a specific DB instance or DB cluster.</p>
 *         <p>The <code>EnableLogTypes</code> and <code>DisableLogTypes</code> arrays determine which logs will be exported
 *             (or not exported) to CloudWatch Logs. The values within these arrays depend on the DB
 *             engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon
 *                 RDS User Guide</i>.</p>
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
    return __isa(o, "CloudwatchLogsExportConfiguration");
  }
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.</p>
 */
export interface ConnectionPoolConfiguration {
  __type?: "ConnectionPoolConfiguration";
  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   *          <p>Default: 120</p>
   *          <p>Constraints: between 1 and 3600, or 0 representing unlimited</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>
   *         One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.
   *       </p>
   *          <p>Default: no initialization query</p>
   */
  InitQuery?: string;

  /**
   * <p>The maximum size of the connection pool for each target in a target group. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   *          <p>Default: 100</p>
   *          <p>Constraints: between 1 and 100</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>
   *         Controls how actively the proxy closes idle database connections in the connection pool.
   *         A high value enables the proxy to leave a high percentage of idle connections open.
   *         A low value causes the proxy to close idle client connections and return the underlying
   *         database connections to the connection pool. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *       </p>
   *          <p>Default: 50</p>
   *          <p>Constraints: between 0 and <code>MaxConnectionsPercent</code>
   *          </p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior.</p>
   *          <p>Default: no session pinning filters</p>
   */
  SessionPinningFilters?: Array<string>;
}

export namespace ConnectionPoolConfiguration {
  export function isa(o: any): o is ConnectionPoolConfiguration {
    return __isa(o, "ConnectionPoolConfiguration");
  }
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Displays the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTarget</code>.</p>
 */
export interface ConnectionPoolConfigurationInfo {
  __type?: "ConnectionPoolConfigurationInfo";
  /**
   * <p>The number of seconds for a proxy to wait for a connection to become available in the connection pool. Only applies when the
   *         proxy has opened its maximum number of connections and all connections are busy with client sessions.</p>
   */
  ConnectionBorrowTimeout?: number;

  /**
   * <p>
   *         One or more SQL statements for the proxy to run when opening each new database connection.
   *         Typically used with <code>SET</code> statements to make sure that each connection has identical
   *         settings such as time zone and character set. This setting is empty by default.
   *         For multiple statements, use semicolons as the separator.
   *         You can also include multiple variables in a single <code>SET</code> statement, such as
   *         <code>SET x=1, y=2</code>.
   *       </p>
   */
  InitQuery?: string;

  /**
   * <p>The maximum size of the connection pool for each target in a target group. For Aurora MySQL, it is expressed as a percentage of the
   *         <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.</p>
   */
  MaxConnectionsPercent?: number;

  /**
   * <p>
   *         Controls how actively the proxy closes idle database connections in the connection pool.
   *         A high value enables the proxy to leave a high percentage of idle connections open.
   *         A low value causes the proxy to close idle client connections and return the underlying database connections to the connection pool.
   *         For Aurora MySQL, it is expressed as a percentage of the <code>max_connections</code> setting for the RDS DB instance or Aurora DB cluster used by the target group.
   *       </p>
   */
  MaxIdleConnectionsPercent?: number;

  /**
   * <p>Each item in the list represents a class of SQL operations that normally cause all later statements
   *         in a session using a proxy to be pinned to the same underlying database connection. Including an item
   *         in the list exempts that class of SQL operations from the pinning behavior. Currently, the only
   *         allowed value is <code>EXCLUDE_VARIABLE_SETS</code>.</p>
   */
  SessionPinningFilters?: Array<string>;
}

export namespace ConnectionPoolConfigurationInfo {
  export function isa(o: any): o is ConnectionPoolConfigurationInfo {
    return __isa(o, "ConnectionPoolConfigurationInfo");
  }
}

export interface CopyDBClusterParameterGroupMessage {
  __type?: "CopyDBClusterParameterGroupMessage";
  /**
   * <p>The identifier or Amazon Resource Name (ARN) for the source DB cluster parameter group.
   *             For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon Aurora User Guide</i>.
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must specify a valid DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB cluster parameter group is in the same AWS Region as the copy,
   *                 specify a valid DB parameter group identifier, for example
   *                 <code>my-db-cluster-param-group</code>, or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB parameter group is in a different AWS Region than the copy,
   *                 specify a valid DB cluster parameter group ARN, for example
   *                 <code>arn:aws:rds:us-east-1:123456789012:cluster-pg:custom-cluster-group1</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBClusterParameterGroupIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A description for the copied DB cluster parameter group.</p>
   */
  TargetDBClusterParameterGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied DB cluster parameter group.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster-param-group1</code>
   *         </p>
   */
  TargetDBClusterParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBClusterParameterGroupMessage {
  export function isa(o: any): o is CopyDBClusterParameterGroupMessage {
    return __isa(o, "CopyDBClusterParameterGroupMessage");
  }
}

export interface CopyDBClusterParameterGroupResult {
  __type?: "CopyDBClusterParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.
   *         </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.
   *         </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CopyDBClusterParameterGroupResult {
  export function isa(o: any): o is CopyDBClusterParameterGroupResult {
    return __isa(o, "CopyDBClusterParameterGroupResult");
  }
}

/**
 * <p></p>
 */
export interface CopyDBClusterSnapshotMessage {
  __type?: "CopyDBClusterSnapshotMessage";
  /**
   * <p>A value that indicates whether to copy all tags from the source DB cluster snapshot to the target DB cluster snapshot.
   *             By default, tags are not copied.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The AWS AWS KMS key ID for an encrypted DB cluster snapshot.
   *             The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p>
   *
   *         <p>If you copy an encrypted DB cluster snapshot from your AWS account, you can specify a value for <code>KmsKeyId</code> to encrypt the copy with a new KMS encryption key.
   *             If you don't specify a value for <code>KmsKeyId</code>, then the copy of the DB cluster snapshot is encrypted with the same KMS key as the source DB cluster snapshot.
   *         </p>
   *
   *         <p>If you copy an encrypted DB cluster snapshot that is shared from another AWS account, then you must specify a value for <code>KmsKeyId</code>. </p>
   *
   *         <p>To copy an encrypted DB cluster snapshot to another AWS Region, you must set <code>KmsKeyId</code> to the KMS key ID you want to use to encrypt the copy of the DB cluster snapshot
   *             in the destination AWS Region. KMS encryption keys are specific to the AWS Region that they are created in, and you can't use encryption keys from one AWS Region
   *             in another AWS Region.</p>
   *
   *         <p>If you copy an unencrypted DB cluster snapshot and specify a value for the <code>KmsKeyId</code> parameter,
   *             an error is returned.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the <code>CopyDBClusterSnapshot</code> API action in the AWS Region that contains the
   *             source DB cluster snapshot to copy. The <code>PreSignedUrl</code> parameter must be used when copying an encrypted DB cluster snapshot from another AWS Region.
   *             Don't specify <code>PreSignedUrl</code> when you are copying an encrypted DB cluster snapshot in the same AWS Region.</p>
   *         <p>The pre-signed URL must be a valid request for the <code>CopyDBSClusterSnapshot</code> API action that can be
   *             executed in the source AWS Region that contains the encrypted DB cluster snapshot to be copied.
   *             The pre-signed URL request must contain the following parameter values:</p>
   *
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB
   *                 cluster snapshot in the destination AWS Region. This is the same identifier for both the <code>CopyDBClusterSnapshot</code>
   *                 action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The name of the AWS Region that the DB cluster snapshot will be created in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot identifier for the encrypted DB cluster
   *                 snapshot to be copied. This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example,
   *                 if you are copying an encrypted DB cluster snapshot from the us-west-2 AWS Region, then your <code>SourceDBClusterSnapshotIdentifier</code>
   *                 looks like the following example: <code>arn:aws:rds:us-west-2:123456789012:cluster-snapshot:aurora-cluster1-snapshot-20161115</code>.</p>
   *             </li>
   *          </ul>
   *
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *
   *         <note>
   *             <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source AWS Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The identifier of the DB cluster snapshot to copy. This parameter isn't case-sensitive.</p>
   *          <p>You can't copy an encrypted, shared DB cluster snapshot from one AWS Region to another.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB snapshot identifier.</p>
   *             </li>
   *             <li>
   *                <p>If the source snapshot is in a different AWS Region than the copy,
   *               specify a valid DB cluster snapshot ARN. For more information, go to
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html#USER_CopySnapshot.AcrossRegions">
   *                   Copying Snapshots Across AWS Regions</a> in the <i>Amazon Aurora User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot1</code>
   *          </p>
   */
  SourceDBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The identifier of the new DB cluster snapshot to create from the source DB cluster snapshot. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-snapshot2</code>
   *          </p>
   */
  TargetDBClusterSnapshotIdentifier: string | undefined;
}

export namespace CopyDBClusterSnapshotMessage {
  export function isa(o: any): o is CopyDBClusterSnapshotMessage {
    return __isa(o, "CopyDBClusterSnapshotMessage");
  }
}

export interface CopyDBClusterSnapshotResult {
  __type?: "CopyDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.
   *       </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CopyDBClusterSnapshotResult {
  export function isa(o: any): o is CopyDBClusterSnapshotResult {
    return __isa(o, "CopyDBClusterSnapshotResult");
  }
}

/**
 * <p></p>
 */
export interface CopyDBParameterGroupMessage {
  __type?: "CopyDBParameterGroupMessage";
  /**
   * <p>
   *         The identifier or ARN for the source DB parameter group.
   *         For information about
   *         creating an ARN,
   *         see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *             Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid DB parameter group.</p>
   *             </li>
   *             <li>
   *                <p>Must specify a valid DB parameter group identifier, for example
   *                 <code>my-db-param-group</code>, or a valid ARN.</p>
   *             </li>
   *          </ul>
   */
  SourceDBParameterGroupIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
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
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-db-parameter-group</code>
   *          </p>
   */
  TargetDBParameterGroupIdentifier: string | undefined;
}

export namespace CopyDBParameterGroupMessage {
  export function isa(o: any): o is CopyDBParameterGroupMessage {
    return __isa(o, "CopyDBParameterGroupMessage");
  }
}

export interface CopyDBParameterGroupResult {
  __type?: "CopyDBParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group.
   *         </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.
   *         </p>
   */
  DBParameterGroup?: DBParameterGroup;
}

export namespace CopyDBParameterGroupResult {
  export function isa(o: any): o is CopyDBParameterGroupResult {
    return __isa(o, "CopyDBParameterGroupResult");
  }
}

/**
 * <p></p>
 */
export interface CopyDBSnapshotMessage {
  __type?: "CopyDBSnapshotMessage";
  /**
   * <p>A value that indicates whether to copy all tags from the source DB snapshot to the target DB snapshot. By default, tags are not copied.</p>
   */
  CopyTags?: boolean;

  /**
   * <p>The AWS KMS key ID for an encrypted DB snapshot.
   *             The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.
   *         </p>
   *
   *         <p>If you copy an encrypted DB snapshot from your AWS account,
   *             you can specify a value for this parameter to encrypt the copy with a new KMS encryption key.
   *             If you don't specify a value for this parameter,
   *             then the copy of the DB snapshot is encrypted with the same KMS key as the source DB snapshot.
   *         </p>
   *
   *         <p>If you copy an encrypted DB snapshot that is shared from another AWS account,
   *             then you must specify a value for this parameter.
   *         </p>
   *
   *         <p>If you specify this parameter
   *             when you copy an unencrypted snapshot,
   *             the copy is encrypted.
   *         </p>
   *
   *         <p>If you copy an encrypted snapshot to a different AWS Region, then you must specify
   *             a KMS key for the destination AWS Region. KMS encryption keys are specific to the AWS Region
   *             that they are created in, and you can't use encryption keys from one AWS Region in another
   *             AWS Region.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of an option group to associate with the copy of the snapshot.</p>
   *
   *         <p>Specify this option if you are copying a snapshot from one AWS Region to another,
   *             and your DB instance uses a nondefault option group.
   *             If your source DB instance uses Transparent Data Encryption for Oracle or Microsoft SQL Server,
   *             you must specify this option when copying across AWS Regions.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopySnapshot.Options">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the
   *                 <code>CopyDBSnapshot</code> API action in the source AWS Region that contains the
   *             source DB snapshot to copy. </p>
   *
   *         <p>You must specify this parameter when you copy an encrypted DB snapshot from another
   *             AWS Region by using the Amazon RDS API. Don't specify <code>PreSignedUrl</code> when you are
   *             copying an encrypted DB snapshot in the same AWS Region.</p>
   *
   *         <p>The presigned URL must be a valid request for the <code>CopyDBSnapshot</code> API action
   *             that can be executed in the source AWS Region that contains the encrypted DB snapshot to be copied.
   *             The presigned URL request must contain the following parameter values:
   *         </p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The AWS Region that the encrypted DB snapshot is copied to.
   *                     This AWS Region is the same one where the <code>CopyDBSnapshot</code> action is called that contains this presigned URL.
   *                 </p>
   *
   *                 <p>For example, if you copy an encrypted DB snapshot from the us-west-2 AWS Region
   *                     to the us-east-1 AWS Region, then you call the <code>CopyDBSnapshot</code> action in
   *                     the us-east-1 AWS Region and provide a presigned URL that contains a call to the
   *                         <code>CopyDBSnapshot</code> action in the us-west-2 AWS Region. For this
   *                     example, the <code>DestinationRegion</code> in the presigned URL must be set to
   *                     the us-east-1 AWS Region. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of the DB snapshot in the destination AWS Region.
   *                     This is the same identifier for both the <code>CopyDBSnapshot</code> action that is called in the destination AWS Region,
   *                     and the action contained in the presigned URL.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBSnapshotIdentifier</code> - The DB snapshot identifier for the encrypted snapshot to be copied.
   *                     This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region.
   *                     For example, if you are copying an encrypted DB snapshot from the us-west-2 AWS Region, then your <code>SourceDBSnapshotIdentifier</code> looks like
   *                     the following example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20161115</code>.
   *                 </p>
   *             </li>
   *          </ul>
   *
   * 	        <p>To learn how to generate a Signature Version 4 signed request, see
   * 		<a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
   * 		<a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.
   * 	   </p>
   *
   *          <note>
   *            <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
   *                instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                request for the operation that can be executed in the source AWS Region.</p>
   *          </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The identifier for the source DB snapshot.</p>
   *
   *          <p>If the source snapshot is in the same AWS Region as the copy, specify a valid DB
   *             snapshot identifier. For example, you might specify
   *                 <code>rds:mysql-instance1-snapshot-20130805</code>. </p>
   *
   *          <p>If the source snapshot is in a different AWS Region than the copy, specify a valid DB
   *             snapshot ARN. For example, you might specify
   *                 <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>. </p>
   *
   *          <p>If you are copying from a shared manual DB snapshot,
   *           this parameter must be the Amazon Resource Name (ARN) of the shared DB snapshot.
   *       </p>
   *
   *          <p>If you are copying an encrypted snapshot
   *             this parameter must be in the ARN format for the source AWS Region,
   *             and must match the <code>SourceDBSnapshotIdentifier</code> in the <code>PreSignedUrl</code> parameter.
   *       </p>
   *
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid system snapshot in the "available" state.</p>
   *             </li>
   *          </ul>
   *
   *          <p>Example: <code>rds:mydb-2012-04-02-00-01</code>
   *          </p>
   *
   *          <p>Example: <code>arn:aws:rds:us-west-2:123456789012:snapshot:mysql-instance1-snapshot-20130805</code>
   *          </p>
   */
  SourceDBSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The identifier for the copy of the snapshot.
   *         </p>
   *
   *         <p>Constraints:</p>
   *
   *         <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *
   *         <p>Example: <code>my-db-snapshot</code>
   *          </p>
   */
  TargetDBSnapshotIdentifier: string | undefined;
}

export namespace CopyDBSnapshotMessage {
  export function isa(o: any): o is CopyDBSnapshotMessage {
    return __isa(o, "CopyDBSnapshotMessage");
  }
}

export interface CopyDBSnapshotResult {
  __type?: "CopyDBSnapshotResult";
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.
   *       </p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace CopyDBSnapshotResult {
  export function isa(o: any): o is CopyDBSnapshotResult {
    return __isa(o, "CopyDBSnapshotResult");
  }
}

/**
 * <p></p>
 */
export interface CopyOptionGroupMessage {
  __type?: "CopyOptionGroupMessage";
  /**
   * <p>The identifier or ARN for the source option group. For information about
   *       creating an ARN,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *           Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must specify a valid option group.</p>
   *             </li>
   *             <li>
   *                <p>If the source option group is in the same AWS Region as the copy,
   *                 specify a valid option group identifier, for example <code>my-option-group</code>,
   *                 or a valid ARN.</p>
   *             </li>
   *             <li>
   *                <p>If the source option group is in a different AWS Region than the copy,
   *                 specify a valid option group ARN, for example
   *                 <code>arn:aws:rds:us-west-2:123456789012:og:special-options</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceOptionGroupIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The description for the copied option group.</p>
   */
  TargetOptionGroupDescription: string | undefined;

  /**
   * <p>The identifier for the copied option group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-option-group</code>
   *          </p>
   */
  TargetOptionGroupIdentifier: string | undefined;
}

export namespace CopyOptionGroupMessage {
  export function isa(o: any): o is CopyOptionGroupMessage {
    return __isa(o, "CopyOptionGroupMessage");
  }
}

export interface CopyOptionGroupResult {
  __type?: "CopyOptionGroupResult";
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace CopyOptionGroupResult {
  export function isa(o: any): o is CopyOptionGroupResult {
    return __isa(o, "CopyOptionGroupResult");
  }
}

/**
 * <p></p>
 */
export interface CreateCustomAvailabilityZoneMessage {
  __type?: "CreateCustomAvailabilityZoneMessage";
  /**
   * <p>The name of the custom Availability Zone (AZ).</p>
   */
  CustomAvailabilityZoneName: string | undefined;

  /**
   * <p>The ID of an existing virtual private network (VPN) between the Amazon RDS website and
   *             the VMware vSphere cluster.</p>
   */
  ExistingVpnId?: string;

  /**
   * <p>The name of a new VPN tunnel between the Amazon RDS website and the VMware vSphere cluster.</p>
   *         <p>Specify this parameter only if <code>ExistingVpnId</code> isn't specified.</p>
   */
  NewVpnTunnelName?: string;

  /**
   * <p>The IP address of network traffic from your on-premises data center. A custom AZ receives the network traffic.</p>
   *         <p>Specify this parameter only if <code>ExistingVpnId</code> isn't specified.</p>
   */
  VpnTunnelOriginatorIP?: string;
}

export namespace CreateCustomAvailabilityZoneMessage {
  export function isa(o: any): o is CreateCustomAvailabilityZoneMessage {
    return __isa(o, "CreateCustomAvailabilityZoneMessage");
  }
}

export interface CreateCustomAvailabilityZoneResult {
  __type?: "CreateCustomAvailabilityZoneResult";
  /**
   * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
   *         <p>For more information about RDS on VMware, see the
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
   *                 <i>RDS on VMware User Guide.</i>
   *             </a>
   *          </p>
   */
  CustomAvailabilityZone?: CustomAvailabilityZone;
}

export namespace CreateCustomAvailabilityZoneResult {
  export function isa(o: any): o is CreateCustomAvailabilityZoneResult {
    return __isa(o, "CreateCustomAvailabilityZoneResult");
  }
}

export interface CreateDBClusterEndpointMessage {
  __type?: "CreateDBClusterEndpointMessage";
  /**
   * <p>The identifier to use for the new endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType: string | undefined;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: Array<string>;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: Array<string>;

  /**
   * <p>The tags to be assigned to the Amazon RDS resource.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBClusterEndpointMessage {
  export function isa(o: any): o is CreateDBClusterEndpointMessage {
    return __isa(o, "CreateDBClusterEndpointMessage");
  }
}

/**
 * <p></p>
 */
export interface CreateDBClusterMessage {
  __type?: "CreateDBClusterMessage";
  /**
   * <p>A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on
   *             AWS Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.RegionsAndAvailabilityZones.html">Choosing the Regions and
   *                 Availability Zones</a> in the <i>Amazon Aurora User Guide</i>.
   *         </p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0. </p>
   *          <p>Default: 0</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of days for which automated backups are retained.</p>
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
   * <p>A value that indicates that the DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>
   *             The name of the DB cluster parameter group to associate
   *             with this DB cluster. If you do not specify a value, then
   *           the default DB cluster parameter group for the specified DB engine and version is used.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
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
   * <p>The name for your database of up to 64 alpha-numeric characters. If you do not
   *             provide a name, Amazon RDS will not create a database in the DB cluster you are
   *             creating.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.</p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the database engine to be used for this DB cluster.</p>
   *          <p>Valid Values: <code>aurora</code> (for MySQL 5.6-compatible Aurora), <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), and <code>aurora-postgresql</code>
   *          </p>
   */
  Engine: string | undefined;

  /**
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   *         <p>Limitations and requirements apply to some DB engine modes. For more information, see the
   *             following sections in the <i>Amazon Aurora User Guide</i>:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.limitations">
   *                     Limitations of Aurora Serverless</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-mysql-parallel-query.html#aurora-mysql-parallel-query-limitations">
   *                     Limitations of Parallel Query</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html#aurora-global-database.limitations">
   *                     Requirements for Aurora Global Databases</a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-multi-master.html#aurora-multi-master-limitations">
   *                     Limitations of Multi-Master Clusters</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  EngineMode?: string;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>
   *         The global cluster ID of an Aurora cluster that becomes the primary cluster
   *         in the new global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
   *             key. If you are creating a DB cluster with the same AWS account that owns the KMS
   *             encryption key used to encrypt the new DB cluster, then you can use the KMS key alias
   *             instead of the ARN for the KMS encryption key.</p>
   *         <p>If an encryption key isn't specified in <code>KmsKeyId</code>:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>ReplicationSourceIdentifier</code> identifies an encrypted
   *                     source, then Amazon RDS will use the encryption key used to encrypt the
   *                     source. Otherwise, Amazon RDS will use your default encryption key. </p>
   *             </li>
   *             <li>
   *                 <p>If the <code>StorageEncrypted</code> parameter is enabled and
   *                         <code>ReplicationSourceIdentifier</code> isn't specified, then Amazon RDS
   *                     will use your default encryption key.</p>
   *             </li>
   *          </ul>
   *         <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account
   *             has a different default encryption key for each AWS Region.</p>
   *         <p>If you create a Read Replica of an encrypted DB cluster in another AWS Region, you must
   *             set <code>KmsKeyId</code> to a KMS key ID that is valid in the destination AWS Region. This
   *             key is used to encrypt the Read Replica in that AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
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
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.</p>
   *          <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the instances in the DB cluster accept connections.</p>
   *          <p>
   *             Default: <code>3306</code> if engine is set as aurora or <code>5432</code> if set to aurora-postgresql.
   *       </p>
   */
  Port?: number;

  /**
   * <p>A URL that contains a Signature Version 4 signed request for
   *             the <code>CreateDBCluster</code> action to be called in the source AWS Region where the DB cluster is replicated from.
   *             You only need to specify <code>PreSignedUrl</code> when you are performing cross-region replication from an encrypted DB cluster.</p>
   *
   *         <p>The pre-signed URL must be a valid request for the <code>CreateDBCluster</code> API action
   *             that can be executed in the source AWS Region that contains the encrypted DB cluster to be copied.</p>
   *         <p>The pre-signed URL request must contain the following parameter values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the copy of
   *                 the DB cluster in the destination AWS Region. This should refer to the same KMS key for both the <code>CreateDBCluster</code>
   *                 action that is called in the destination AWS Region, and the action contained in the pre-signed URL.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DestinationRegion</code> - The name of the AWS Region that Aurora Read Replica will be created in.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplicationSourceIdentifier</code> - The DB cluster identifier for the encrypted DB cluster to be copied.
   *                 This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region. For example, if you are copying an
   *                 encrypted DB cluster from the us-west-2 AWS Region, then your <code>ReplicationSourceIdentifier</code> would look like
   *                 Example: <code>arn:aws:rds:us-west-2:123456789012:cluster:aurora-cluster1</code>.</p>
   *             </li>
   *          </ul>
   *
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">
   *                 Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">
   *                 Signature Version 4 Signing Process</a>.</p>
   *         <note>
   *             <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source AWS Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The daily time range during which automated backups are created
   *         if automated backups are enabled
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>The default is a 30-minute window selected at random from an
   *         8-hour block of time for each AWS Region.
   *         To see the time blocks available, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *             Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Tags to assign to the DB cluster.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A list of EC2 VPC security groups to associate with this DB cluster.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace CreateDBClusterMessage {
  export function isa(o: any): o is CreateDBClusterMessage {
    return __isa(o, "CreateDBClusterMessage");
  }
}

/**
 * <p></p>
 */
export interface CreateDBClusterParameterGroupMessage {
  __type?: "CreateDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>This value is stored as a lowercase string.</p>
   *          </note>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster
   *           parameter group family, and can be applied only to a DB cluster running a database engine and engine version compatible with that DB cluster parameter group family.</p>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>aurora5.6</code>, <code>aurora-mysql5.7</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>aurora-postgresql9.6</code>
   *          </p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>The description for the DB cluster parameter group.</p>
   */
  Description: string | undefined;

  /**
   * <p>Tags to assign to the DB cluster parameter group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBClusterParameterGroupMessage {
  export function isa(o: any): o is CreateDBClusterParameterGroupMessage {
    return __isa(o, "CreateDBClusterParameterGroupMessage");
  }
}

export interface CreateDBClusterParameterGroupResult {
  __type?: "CreateDBClusterParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB cluster parameter group.
   *         </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.
   *         </p>
   */
  DBClusterParameterGroup?: DBClusterParameterGroup;
}

export namespace CreateDBClusterParameterGroupResult {
  export function isa(o: any): o is CreateDBClusterParameterGroupResult {
    return __isa(o, "CreateDBClusterParameterGroupResult");
  }
}

export interface CreateDBClusterResult {
  __type?: "CreateDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace CreateDBClusterResult {
  export function isa(o: any): o is CreateDBClusterResult {
    return __isa(o, "CreateDBClusterResult");
  }
}

/**
 * <p></p>
 */
export interface CreateDBClusterSnapshotMessage {
  __type?: "CreateDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster to create a snapshot for. This parameter isn't case-sensitive.</p>
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
   * <p>The identifier of the DB cluster snapshot. This parameter is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
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
    return __isa(o, "CreateDBClusterSnapshotMessage");
  }
}

export interface CreateDBClusterSnapshotResult {
  __type?: "CreateDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.
   *       </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace CreateDBClusterSnapshotResult {
  export function isa(o: any): o is CreateDBClusterSnapshotResult {
    return __isa(o, "CreateDBClusterSnapshotResult");
  }
}

/**
 * <p></p>
 */
export interface CreateDBInstanceMessage {
  __type?: "CreateDBInstanceMessage";
  /**
   * <p>The amount of storage (in gibibytes) to allocate for the DB instance.</p>
   *          <p>Type: Integer</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Aurora cluster volumes automatically grow as the amount of data in your
   *           database increases, though you are only charged for the space that you use in an Aurora cluster volume.</p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints to the amount of storage for each storage type are the following:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Constraints to the amount of storage for each storage type are the following:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints to the amount of storage for each storage type are the following:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Constraints to the amount of storage for each storage type are the following:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p>
   *             </li>
   *             <li>
   *                <p>Magnetic storage (standard): Must be an integer from 10 to 3072.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>Constraints to the amount of storage for each storage type are the following:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>General Purpose (SSD) storage (gp2):</p>
   *                <ul>
   *                   <li>
   *                      <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p>
   *                   </li>
   *                   <li>
   *                      <p>Web and Express editions: Must be an integer from 20 to 16384.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Provisioned IOPS storage (io1):</p>
   *               <ul>
   *                   <li>
   *                      <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p>
   *                   </li>
   *                   <li>
   *                      <p>Web and Express editions: Must be an integer from 100 to 16384.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>Magnetic storage (standard):</p>
   *               <ul>
   *                   <li>
   *                      <p>Enterprise and Standard editions: Must be an integer from 200 to 1024.</p>
   *                   </li>
   *                   <li>
   *                      <p>Web and Express editions: Must be an integer from 20 to 1024.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  AllocatedStorage?: number;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window.
   *           By default, minor engine upgrades are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>
   *         The Availability Zone (AZ) where the database will be created. For information on
   *         AWS Regions and Availability Zones, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *         and Availability Zones</a>.
   *         </p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p>
   *          <p>
   *             Example: <code>us-east-1d</code>
   *          </p>
   *          <p>
   *           Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same AWS Region as the current endpoint.
   *         </p>
   *          <note>
   *             <p>If you're creating a DB instance in an RDS on VMware environment,
   *                 specify the identifier of the custom Availability Zone to create the DB instance
   *                 in.</p>
   *             <p>For more information about RDS on VMware, see the
   *               <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
   *                   <i>RDS on VMware User Guide.</i>
   *                </a>
   *             </p>
   *          </note>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The retention period for automated backups is managed by the DB
   *           cluster.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to Read Replicas</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>For supported engines, indicates that the DB instance should be associated with the specified CharacterSet.</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The character set is managed by
   *           the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>The name of the database to create when the DB instance is created. If this parameter isn't specified, the default "postgres" database is created in the DB instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 63 letters, numbers, or underscores.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with a letter or an underscore. Subsequent characters can be letters, underscores, or digits (0-9).</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>The Oracle System ID (SID) of the created DB instance.
   *           If you specify <code>null</code>, the default value <code>ORCL</code> is used.
   *           You can't specify the string NULL, or any other reserved word, for <code>DBName</code>.
   *       </p>
   *          <p>Default: <code>ORCL</code>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be longer than 8 characters</p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>Not applicable. Must be null.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>The name of the database to create when the primary instance of the DB cluster is created.
   *         If this parameter isn't specified, no database is created in the DB instance.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1 to 64 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a word reserved by the specified database engine</p>
   *             </li>
   *          </ul>
   */
  DBName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If you do not specify a value, then
   *           the default DB parameter group for the specified DB engine and version is used.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
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
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   *         <p>
   *             <b>Amazon Aurora</b>
   *         </p>
   *         <p>Not applicable. You can enable or disable deletion protection for the DB cluster.
   *             For more information, see <code>CreateDBCluster</code>. DB instances in a DB
   *             cluster can be deleted even when deletion protection is enabled for the DB cluster.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Active Directory directory ID to create the DB instance in. Currently, only Microsoft SQL Server and Oracle
   *             DB instances can be created in an Active Directory Domain.</p>
   *          <p>For Microsoft SQL Server DB instances, Amazon RDS can use
   *            Windows Authentication to authenticate users that connect to the DB instance. For more
   *            information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html">
   *            Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the
   *            <i>Amazon RDS User Guide</i>.</p>
   *          <p>For Oracle DB instance, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance. For more information,
   *              see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html">
   *                Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p></p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon Relational Database
   *                     Service User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *          <p>You can enable IAM database authentication for the following database engines:</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB
   *         cluster.</p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 8.0, minor version 8.0.16 or higher</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For PostgreSQL 9.5, minor version 9.5.15 or higher</p>
   *             </li>
   *             <li>
   *                <p>For PostgreSQL 9.6, minor version 9.6.11 or higher</p>
   *             </li>
   *             <li>
   *                <p>PostgreSQL 10.6, 10.7, and 10.9</p>
   *             </li>
   *          </ul>
   *
   *          <p>For more information, see
   *        <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *            IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.
   *         </p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service
   *                     User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The name of the database engine to be used for this instance.
   *       </p>
   *
   *          <p>Not every database engine is available for every AWS Region.
   *       </p>
   *
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>aurora-postgresql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>For a list of valid engine versions, use the  <code>DescribeDBEngineVersions</code> action.</p>
   *          <p>The following are the database engines and links to information about the major and minor versions that are available with
   *           Amazon RDS. Not every database engine is available for every AWS Region.</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The version number of the database engine to be used by the DB
   *             instance is managed by the DB cluster.</p>
   *
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt">MariaDB on Amazon RDS Versions</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport">Version and Feature Support on Amazon RDS</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS Versions</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html">Oracle Database Engine Release Notes</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions">Supported PostgreSQL Database Versions</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.
   *           For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>.
   *       </p>
   *          <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL DB instances, must be a multiple between .5 and 50 of the storage amount for the DB instance.
   *           For SQL Server DB instances, must be a multiple between 1 and 50 of the storage amount for the DB instance.
   *     </p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The KMS key identifier is managed by
   *           the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   *
   *          <p>If <code>StorageEncrypted</code> is enabled, and you do
   *         not specify a value for the <code>KmsKeyId</code> parameter, then
   *         Amazon RDS will use your default encryption key. AWS KMS creates the
   *         default encryption key for your AWS account. Your AWS account has a different
   *         default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>License model information for this DB instance.</p>
   *          <p>
   *             Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The password for the master user is managed by the DB
   *             cluster.</p>
   *
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 30 characters.</p>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name for the master user.</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The name for the master user is managed by the DB cluster.
   *         </p>
   *
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Required for MariaDB.</p>
   *             </li>
   *             <li>
   *               <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *               <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Required for SQL Server.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 128 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Required for MySQL.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Required for Oracle.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 30 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Required for PostgreSQL.</p>
   *             </li>
   *             <li>
   *                <p>Must be 1 to 63 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code>
   *       to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *           in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set
   *           the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates that the DB instance should be associated with the specified option group.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID
   *             is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS
   *             encryption key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default encryption key. AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>
   *             Default: <code>3306</code>
   *          </p>
   *          <p>
   *             Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Type: Integer</p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Type: Integer</p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>
   *             Default: <code>5432</code>
   *          </p>
   *          <p>
   *             Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Type: Integer</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>
   *             Default: <code>1521</code>
   *          </p>
   *          <p>
   *             Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>
   *             Default: <code>1433</code>
   *          </p>
   *          <p>
   *             Valid Values: <code>1150-65535</code> except for <code>1434</code>, <code>3389</code>, <code>47001</code>,
   *             <code>49152</code>, and <code>49152</code> through <code>49156</code>.
   *         </p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * <p>
   *         The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide</i>.
   *       </p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The daily time range for creating automated backups is managed by
   *           the DB cluster.</p>
   *
   *          <p>
   *             The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow">
   *                 Adjusting the Preferred DB Instance Maintenance Window</a> in the <i>Amazon RDS User Guide</i>.
   *      </p>
   *
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
   * <p>The time range each week during which system maintenance can occur,
   *           in Universal Coordinated Time (UTC).
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a>.
   *       </p>
   *          <p>
   *             Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week.
   *         </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name,
   *           which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.</p>
   *          <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p>
   *          <p>If <code>DBSubnetGroupName</code> isn't specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *               <p>If the default VPC in the target region doesn’t have an Internet gateway attached to it, the DB instance is private.</p>
   *             </li>
   *             <li>
   *               <p>If the default VPC in the target region has an Internet gateway attached to it, the DB instance is public.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> isn't specified, the following applies:</p>
   *          <ul>
   *             <li>
   *               <p>If the subnets are part of a VPC that doesn’t have an Internet gateway attached to it, the DB instance is private.</p>
   *             </li>
   *             <li>
   *               <p>If the subnets are part of a VPC that has an Internet gateway attached to it, the DB instance is public.</p>
   *             </li>
   *          </ul>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The encryption for DB instances is managed by
   *           the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>
   *             Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>
   *             If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.
   *         </p>
   *          <p>
   *             Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>Tags to assign to the DB instance.</p>
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
   * <p>The time zone of the DB instance.
   *             The time zone parameter is currently supported only by
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone">Microsoft SQL Server</a>.
   *         </p>
   */
  Timezone?: string;

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with this DB instance.</p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by
   *           the DB cluster.</p>
   *
   *          <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace CreateDBInstanceMessage {
  export function isa(o: any): o is CreateDBInstanceMessage {
    return __isa(o, "CreateDBInstanceMessage");
  }
}

export interface CreateDBInstanceReadReplicaMessage {
  __type?: "CreateDBInstanceReadReplicaMessage";
  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the Read Replica during the maintenance window.</p>
   *          <p>Default: Inherits from the source DB instance</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Availability Zone (AZ) where the Read Replica will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p>
   *          <p>
   *            Example: <code>us-east-1d</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the Read Replica to snapshots of the Read Replica. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The compute and memory capacity of the Read Replica, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: Inherits from the source DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The DB instance identifier of the Read Replica. This identifier is the unique key that identifies a DB instance. This parameter is stored as a lowercase string.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then Amazon RDS uses the <code>DBParameterGroup</code> of
   *             source DB instance for a same region Read Replica, or the default <code>DBParameterGroup</code> for the specified DB engine for a cross
   *             region Read Replica.</p>
   *         <note>
   *             <p>Currently, specifying a parameter group for this operation is only supported for Oracle DB instances.</p>
   *         </note>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>Specifies a DB subnet group for the DB instance. The new DB instance is created in the VPC associated with the DB subnet group. If no DB subnet group is specified, then the new DB instance isn't created in a VPC.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can only be specified if the source DB instance identifier specifies a DB instance in another AWS Region.</p>
   *             </li>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBSubnetGroup.</p>
   *             </li>
   *             <li>
   *                <p>The specified DB subnet group must be in the same AWS Region in which the operation is running.</p>
   *             </li>
   *             <li>
   *               <p>All Read Replicas in one AWS Region that are created from the same source DB instance must either:></p>
   *               <ul>
   *                   <li>
   *                      <p>Specify DB subnet groups from the same VPC. All these Read Replicas are created in the same VPC.</p>
   *                   </li>
   *                   <li>
   *                      <p>Not specify a DB subnet group. All these Read Replicas are created outside of any VPC.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Active Directory directory ID to create the DB instance in.</p>
   *         <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html">
   *                 Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The list of logs that the new DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *           For information about the supported DB engines, see <a>CreateDBInstance</a>.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the Read Replica.
   *         </p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon RDS User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key ID for an encrypted Read Replica.
   *             The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier,
   *             or the KMS key alias for the KMS encryption key.
   *         </p>
   *
   *         <p>If you create an encrypted Read Replica in the same AWS Region
   *             as the source DB instance,
   *             then you do not have to specify a value for this parameter.
   *             The Read Replica is encrypted with the same KMS key as the source DB instance.
   *         </p>
   *
   *         <p>If you create an encrypted Read Replica in a different AWS Region,
   *             then you must specify a KMS key for the destination AWS Region.
   *             KMS encryption keys are specific to the AWS Region
   *             that they are created in,
   *             and you can't use encryption keys from one AWS Region
   *             in another AWS Region.
   *         </p>
   *
   *         <p>You can't create an encrypted Read Replica from an unencrypted DB instance.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the Read Replica. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code>
   *       to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether the Read Replica is in a Multi-AZ deployment.
   *         </p>
   *
   *         <p>You can create a Read Replica as a Multi-AZ DB instance.
   *             RDS creates a standby of your replica in another Availability Zone for failover support for the replica.
   *             Creating your Read Replica as a Multi-AZ DB instance
   *             is independent of whether the source database is a Multi-AZ DB instance.
   *         </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The option group the DB instance is associated with. If omitted, the option group associated with the source instance is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID
   *             is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS
   *             encryption key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default encryption key. AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The port number that the DB instance uses for connections.</p>
   *          <p>Default: Inherits from the source DB instance</p>
   *          <p>Valid Values: <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The URL that contains a Signature Version 4 signed request for the
   *             <code>CreateDBInstanceReadReplica</code> API action
   *             in the source AWS Region that contains the
   *             source DB instance.
   *         </p>
   *
   *         <p>You must specify this parameter when you create an encrypted Read Replica
   *             from another AWS Region by using the Amazon RDS API.
   *             Don't specify <code>PreSignedUrl</code> when you are creating an encrypted Read Replica in the same AWS Region.
   *         </p>
   *
   *         <p>The presigned URL must be a valid request for the <code>CreateDBInstanceReadReplica</code> API action
   *             that can be executed in the source AWS Region that contains the encrypted source DB instance.
   *             The presigned URL request must contain the following parameter values:
   *         </p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DestinationRegion</code> - The AWS Region that the encrypted Read Replica is created in.
   *                     This AWS Region is the same one where the <code>CreateDBInstanceReadReplica</code> action is called that contains this presigned URL.
   *                 </p>
   *
   *                 <p>For example, if you create an encrypted DB instance in the us-west-1 AWS Region,
   *                     from a source DB instance in the us-east-2 AWS Region,
   *                     then you call the <code>CreateDBInstanceReadReplica</code> action in
   *                     the us-east-1 AWS Region and provide a presigned URL that contains a call to the
   *                     <code>CreateDBInstanceReadReplica</code> action in the us-west-2 AWS Region. For this
   *                     example, the <code>DestinationRegion</code> in the presigned URL must be set to
   *                     the us-east-1 AWS Region.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>KmsKeyId</code> - The AWS KMS key identifier for the key to use to encrypt the Read Replica in the destination AWS Region.
   *                     This is the same identifier for both the <code>CreateDBInstanceReadReplica</code> action that is called in the destination AWS Region,
   *                     and the action contained in the presigned URL.
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SourceDBInstanceIdentifier</code> - The DB instance identifier for the encrypted DB instance to be replicated.
   *                     This identifier must be in the Amazon Resource Name (ARN) format for the source AWS Region.
   *                     For example, if you are creating an encrypted Read Replica from a DB instance in the us-west-2 AWS Region,
   *                     then your <code>SourceDBInstanceIdentifier</code> looks like
   *                     the following example: <code>arn:aws:rds:us-west-2:123456789012:instance:mysql-instance1-20161115</code>.
   *                 </p>
   *             </li>
   *          </ul>
   *
   *         <p>To learn how to generate a Signature Version 4 signed request, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-query-string-auth.html">Authenticating Requests: Using Query Parameters (AWS Signature Version 4)</a> and
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4 Signing Process</a>.
   *         </p>
   *
   *         <note>
   *             <p>If you are using an AWS SDK tool or the AWS CLI, you can specify <code>SourceRegion</code> (or <code>--source-region</code> for the AWS CLI)
   *                 instead of specifying <code>PreSignedUrl</code> manually. Specifying <code>SourceRegion</code> autogenerates a pre-signed URL that is a valid
   *                 request for the operation that can be executed in the source AWS Region.</p>
   *         </note>
   */
  PreSignedUrl?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name,
   *           which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.
   *           For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The identifier of the DB instance that will act as the source for the Read Replica. Each DB instance can have up to five Read Replicas.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be the identifier of an existing MySQL, MariaDB, Oracle, or PostgreSQL DB instance.</p>
   *             </li>
   *             <li>
   *                <p>Can specify a DB instance that is a MySQL Read Replica only if the source is running MySQL 5.6 or later.</p>
   *             </li>
   *             <li>
   *                <p>For the limitations of Oracle Read Replicas, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html">Read Replica Limitations with Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>Can specify a DB instance that is a PostgreSQL DB instance only if the source is running PostgreSQL 9.3.5 or later (9.4.7 and higher for cross-region replication).</p>
   *             </li>
   *             <li>
   *                <p>The specified DB instance must have automatic backups enabled, its backup retention period must be greater than 0.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB instance is in the same AWS Region as the Read Replica, specify a valid DB instance identifier.</p>
   *             </li>
   *             <li>
   *                <p>If the source DB instance is in a different AWS Region than the Read Replica,
   *                specify a valid DB instance ARN. For more information, go to
   *                <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                    Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  SourceDBInstanceIdentifier: string | undefined;

  /**
   * <p>Specifies the storage type to be associated with the Read Replica.</p>
   *          <p>
   *             Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>
   *             If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.
   *         </p>
   *          <p>
   *             Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>
   *             A list of EC2 VPC security groups to associate with the Read Replica.
   *         </p>
   *         <p>
   *             Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *         </p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace CreateDBInstanceReadReplicaMessage {
  export function isa(o: any): o is CreateDBInstanceReadReplicaMessage {
    return __isa(o, "CreateDBInstanceReadReplicaMessage");
  }
}

export interface CreateDBInstanceReadReplicaResult {
  __type?: "CreateDBInstanceReadReplicaResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceReadReplicaResult {
  export function isa(o: any): o is CreateDBInstanceReadReplicaResult {
    return __isa(o, "CreateDBInstanceReadReplicaResult");
  }
}

export interface CreateDBInstanceResult {
  __type?: "CreateDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace CreateDBInstanceResult {
  export function isa(o: any): o is CreateDBInstanceResult {
    return __isa(o, "CreateDBInstanceResult");
  }
}

/**
 * <p></p>
 */
export interface CreateDBParameterGroupMessage {
  __type?: "CreateDBParameterGroupMessage";
  /**
   * <p>The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a database engine and engine version compatible with that DB parameter group family.</p>
   *          <p>To list all of the available parameter group families, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"</code>
   *          </p>
   *          <note>
   *             <p>The output contains duplicates.</p>
   *          </note>
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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
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
   * <p>Tags to assign to the DB parameter group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBParameterGroupMessage {
  export function isa(o: any): o is CreateDBParameterGroupMessage {
    return __isa(o, "CreateDBParameterGroupMessage");
  }
}

export interface CreateDBParameterGroupResult {
  __type?: "CreateDBParameterGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB parameter group.
   *         </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.
   *         </p>
   */
  DBParameterGroup?: DBParameterGroup;
}

export namespace CreateDBParameterGroupResult {
  export function isa(o: any): o is CreateDBParameterGroupResult {
    return __isa(o, "CreateDBParameterGroupResult");
  }
}

export interface CreateDBProxyRequest {
  __type?: "CreateDBProxyRequest";
  /**
   * <p>The authorization mechanism that the proxy uses.</p>
   */
  Auth: Array<UserAuthConfig> | undefined;

  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The kinds of databases that the proxy can connect to. This value determines which database network protocol the proxy recognizes when it interprets
   *         network traffic to and from the database. Currently, this value is always <code>MYSQL</code>. The engine family applies to
   *         both RDS MySQL and Aurora MySQL.</p>
   */
  EngineFamily: EngineFamily | string | undefined;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.</p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>One or more VPC security group IDs to associate with the new proxy.</p>
   */
  VpcSecurityGroupIds?: Array<string>;

  /**
   * <p>One or more VPC subnet IDs to associate with the new proxy.</p>
   */
  VpcSubnetIds: Array<string> | undefined;
}

export namespace CreateDBProxyRequest {
  export function isa(o: any): o is CreateDBProxyRequest {
    return __isa(o, "CreateDBProxyRequest");
  }
}

export interface CreateDBProxyResponse {
  __type?: "CreateDBProxyResponse";
  /**
   * <p>The <code>DBProxy</code> structure corresponding to the new proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace CreateDBProxyResponse {
  export function isa(o: any): o is CreateDBProxyResponse {
    return __isa(o, "CreateDBProxyResponse");
  }
}

/**
 * <p></p>
 */
export interface CreateDBSecurityGroupMessage {
  __type?: "CreateDBSecurityGroupMessage";
  /**
   * <p>The description for the DB security group.</p>
   */
  DBSecurityGroupDescription: string | undefined;

  /**
   * <p>The name for the DB security group. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mysecuritygroup</code>
   *          </p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>Tags to assign to the DB security group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBSecurityGroupMessage {
  export function isa(o: any): o is CreateDBSecurityGroupMessage {
    return __isa(o, "CreateDBSecurityGroupMessage");
  }
}

export interface CreateDBSecurityGroupResult {
  __type?: "CreateDBSecurityGroupResult";
  /**
   * <p>Contains the details for an Amazon RDS DB security group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.
   *       </p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace CreateDBSecurityGroupResult {
  export function isa(o: any): o is CreateDBSecurityGroupResult {
    return __isa(o, "CreateDBSecurityGroupResult");
  }
}

/**
 * <p></p>
 */
export interface CreateDBSnapshotMessage {
  __type?: "CreateDBSnapshotMessage";
  /**
   * <p>The identifier of the DB instance that you want to create the snapshot of.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The identifier for the DB snapshot.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Can't be null, empty, or blank</p>
   *             </li>
   *             <li>
   *                <p>Must contain from 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBSnapshotMessage {
  export function isa(o: any): o is CreateDBSnapshotMessage {
    return __isa(o, "CreateDBSnapshotMessage");
  }
}

export interface CreateDBSnapshotResult {
  __type?: "CreateDBSnapshotResult";
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.
   *       </p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace CreateDBSnapshotResult {
  export function isa(o: any): o is CreateDBSnapshotResult {
    return __isa(o, "CreateDBSnapshotResult");
  }
}

/**
 * <p></p>
 */
export interface CreateDBSubnetGroupMessage {
  __type?: "CreateDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription: string | undefined;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.</p>
   *          <p>Constraints: Must contain no more than 255 letters, numbers, periods, underscores, spaces, or hyphens. Must not be default.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName: string | undefined;

  /**
   * <p>The EC2 Subnet IDs for the DB subnet group.</p>
   */
  SubnetIds: Array<string> | undefined;

  /**
   * <p>Tags to assign to the DB subnet group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateDBSubnetGroupMessage {
  export function isa(o: any): o is CreateDBSubnetGroupMessage {
    return __isa(o, "CreateDBSubnetGroupMessage");
  }
}

export interface CreateDBSubnetGroupResult {
  __type?: "CreateDBSubnetGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.
   *       </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace CreateDBSubnetGroupResult {
  export function isa(o: any): o is CreateDBSubnetGroupResult {
    return __isa(o, "CreateDBSubnetGroupResult");
  }
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  __type?: "CreateEventSubscriptionMessage";
  /**
   * <p>
   *           A value that indicates whether to activate the subscription. If the event notification subscription isn't activated, the subscription is created but not active.
   *       </p>
   */
  Enabled?: boolean;

  /**
   * <p>
   *             A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories
   *             for a given SourceType
   *             in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic
   *             in the <i>Amazon RDS User Guide</i>
   *             or by using the <b>DescribeEventCategories</b> action.
   *         </p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>The list of identifiers of the event sources for which events are returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIds are supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB instance, then a <code>DBInstanceIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> must be supplied.</p>
   *             </li>
   *          </ul>
   */
  SourceIds?: Array<string>;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of
   *           events generated by a DB instance, you would set this parameter to db-instance. if this value isn't specified, all events are returned.</p>
   *          <p>Valid values: <code>db-instance</code> | <code>db-cluster</code> | <code>db-parameter-group</code> | <code>db-security-group</code> | <code>db-snapshot</code> | <code>db-cluster-snapshot</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>The name of the subscription.</p>
   *          <p>Constraints: The name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateEventSubscriptionMessage {
  export function isa(o: any): o is CreateEventSubscriptionMessage {
    return __isa(o, "CreateEventSubscriptionMessage");
  }
}

export interface CreateEventSubscriptionResult {
  __type?: "CreateEventSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResult {
  export function isa(o: any): o is CreateEventSubscriptionResult {
    return __isa(o, "CreateEventSubscriptionResult");
  }
}

export interface CreateGlobalClusterMessage {
  __type?: "CreateGlobalClusterMessage";
  /**
   * <p>
   *         The name for your database of up to 64 alpha-numeric characters. If you do not provide a name, Amazon
   *         Aurora will not create a database in the global database cluster you are creating.
   *       </p>
   */
  DatabaseName?: string;

  /**
   * <p>
   *         The deletion protection setting for the new global database.
   *         The global database can't be deleted when deletion protection is enabled.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Provides the name of the database engine to be used for this DB cluster.</p>
   */
  Engine?: string;

  /**
   * <p>The engine version of the Aurora global database.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The cluster identifier of the new global database cluster.</p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The Amazon Resource Name (ARN) to use as the primary cluster of the global database.
   *         This parameter is optional.
   *       </p>
   */
  SourceDBClusterIdentifier?: string;

  /**
   * <p>
   *         The storage encryption setting for the new global database cluster.
   *       </p>
   */
  StorageEncrypted?: boolean;
}

export namespace CreateGlobalClusterMessage {
  export function isa(o: any): o is CreateGlobalClusterMessage {
    return __isa(o, "CreateGlobalClusterMessage");
  }
}

export interface CreateGlobalClusterResult {
  __type?: "CreateGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace CreateGlobalClusterResult {
  export function isa(o: any): o is CreateGlobalClusterResult {
    return __isa(o, "CreateGlobalClusterResult");
  }
}

/**
 * <p></p>
 */
export interface CreateOptionGroupMessage {
  __type?: "CreateOptionGroupMessage";
  /**
   * <p>Specifies the name of the engine that this option group should be associated with.</p>
   */
  EngineName: string | undefined;

  /**
   * <p>Specifies the major version of the engine that this option group should be associated with.</p>
   */
  MajorEngineVersion: string | undefined;

  /**
   * <p>The description of the option group.</p>
   */
  OptionGroupDescription: string | undefined;

  /**
   * <p>Specifies the name of the option group to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>myoptiongroup</code>
   *          </p>
   */
  OptionGroupName: string | undefined;

  /**
   * <p>Tags to assign to the option group.</p>
   */
  Tags?: Array<Tag>;
}

export namespace CreateOptionGroupMessage {
  export function isa(o: any): o is CreateOptionGroupMessage {
    return __isa(o, "CreateOptionGroupMessage");
  }
}

export interface CreateOptionGroupResult {
  __type?: "CreateOptionGroupResult";
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace CreateOptionGroupResult {
  export function isa(o: any): o is CreateOptionGroupResult {
    return __isa(o, "CreateOptionGroupResult");
  }
}

/**
 * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 <i>RDS on VMware User Guide.</i>
 *             </a>
 *          </p>
 */
export interface CustomAvailabilityZone {
  __type?: "CustomAvailabilityZone";
  /**
   * <p>The identifier of the custom AZ.</p>
   *         <p>Amazon RDS generates a unique identifier when a custom AZ is created.</p>
   */
  CustomAvailabilityZoneId?: string;

  /**
   * <p>The name of the custom AZ.</p>
   */
  CustomAvailabilityZoneName?: string;

  /**
   * <p>The status of the custom AZ.</p>
   */
  CustomAvailabilityZoneStatus?: string;

  /**
   * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster
   *             and the AWS website.</p>
   */
  VpnDetails?: VpnDetails;
}

export namespace CustomAvailabilityZone {
  export function isa(o: any): o is CustomAvailabilityZone {
    return __isa(o, "CustomAvailabilityZone");
  }
}

export interface CustomAvailabilityZoneMessage {
  __type?: "CustomAvailabilityZoneMessage";
  /**
   * <p>The list of <a>CustomAvailabilityZone</a> objects for the AWS account.</p>
   */
  CustomAvailabilityZones?: Array<CustomAvailabilityZone>;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeCustomAvailabilityZones</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace CustomAvailabilityZoneMessage {
  export function isa(o: any): o is CustomAvailabilityZoneMessage {
    return __isa(o, "CustomAvailabilityZoneMessage");
  }
}

/**
 * <p>Contains the details of an Amazon Aurora DB cluster.
 *       </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
 *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
 *       </p>
 */
export interface DBCluster {
  __type?: "DBCluster";
  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  ActivityStreamKinesisStreamName?: string;

  /**
   * <p>The AWS KMS key identifier used for encrypting messages in the database activity stream.</p>
   */
  ActivityStreamKmsKeyId?: string;

  /**
   * <p>The mode of the database activity stream.
   *            Database events such as a change or access generate an activity stream event.
   *            The database session can handle these events either synchronously or asynchronously.
   *        </p>
   */
  ActivityStreamMode?: ActivityStreamMode | string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  ActivityStreamStatus?: ActivityStreamStatus | string;

  /**
   * <p>For all database engines except Amazon Aurora, <code>AllocatedStorage</code> specifies the allocated storage size in gibibytes (GiB).
   *           For Aurora, <code>AllocatedStorage</code> always returns 1, because Aurora DB cluster storage size isn't fixed, but instead automatically
   *       adjusts as needed.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster.
   *           IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services
   *           on your behalf.</p>
   */
  AssociatedRoles?: Array<DBClusterRole>;

  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster can be created.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The number of change records stored for Backtrack.</p>
   */
  BacktrackConsumedChangeRecords?: number;

  /**
   * <p>The target backtrack window, in seconds. If this value is set to 0, backtracking is
   *             disabled for the DB cluster. Otherwise, backtracking is enabled.</p>
   */
  BacktrackWindow?: number;

  /**
   * <p>Specifies the number of days for which automatic DB snapshots are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The current capacity of an Aurora Serverless DB cluster. The capacity is 0 (zero)
   *           when the cluster is paused.</p>
   *          <p>For more information about Aurora Serverless, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   */
  Capacity?: number;

  /**
   * <p>If present, specifies the name of the character set that this cluster is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Identifies the clone group to which the DB cluster is associated.</p>
   */
  CloneGroupId?: string;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Specifies whether tags are copied from the DB cluster to snapshots of the DB cluster.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>Specifies whether the DB cluster is a clone of a DB cluster owned by a different AWS account.</p>
   */
  CrossAccountClone?: boolean;

  /**
   * <p>Identifies all custom endpoints associated with the cluster.</p>
   */
  CustomEndpoints?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB cluster.</p>
   */
  DBClusterArn?: string;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Provides the list of instances that make up the DB cluster.</p>
   */
  DBClusterMembers?: Array<DBClusterMember>;

  /**
   * <p>Provides the list of option group memberships for this DB cluster.</p>
   */
  DBClusterOptionGroupMemberships?: Array<DBClusterOptionGroupStatus>;

  /**
   * <p>Specifies the name of the DB cluster parameter group for the DB cluster.</p>
   */
  DBClusterParameterGroup?: string;

  /**
   * <p>Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: string;

  /**
   * <p>Contains the name of the initial database of this DB cluster that was provided at create time, if one was specified when the DB cluster was created. This same name is returned for the life of the DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.</p>
   */
  DbClusterResourceId?: string;

  /**
   * <p>Indicates if the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The earliest time to which a DB cluster can be backtracked.</p>
   */
  EarliestBacktrackTime?: Date;

  /**
   * <p>The earliest time to which a database can be restored with point-in-time
   *             restore.</p>
   */
  EarliestRestorableTime?: Date;

  /**
   * <p>A list of log types that this DB cluster is configured to export to CloudWatch Logs.</p>
   *         <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
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
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   */
  EngineMode?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.</p>
   */
  HostedZoneId?: string;

  /**
   * <p>A value that indicates whether the HTTP endpoint for an Aurora Serverless DB cluster is enabled.</p>
   *          <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *           SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *           from inside the RDS console with the query editor.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *           <i>Amazon Aurora User Guide</i>.</p>
   */
  HttpEndpointEnabled?: boolean;

  /**
   * <p>A value that indicates whether the mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is enabled, the AWS KMS key identifier for the encrypted DB cluster.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
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
   * <p>Specifies the daily time range during which automated backups are
   *             created if automated backups are enabled, as determined
   *             by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB cluster.</p>
   */
  ReadReplicaIdentifiers?: Array<string>;

  /**
   * <p>The reader endpoint for the DB cluster. The reader endpoint for a DB cluster load-balances
   *             connections across the Aurora Replicas that are available in a DB cluster. As clients request new connections
   *             to the reader endpoint, Aurora distributes the connection requests among the Aurora Replicas in the DB cluster.
   *             This functionality can help balance your read workload across multiple Aurora Replicas in your DB cluster. </p>
   *         <p>If a failover occurs, and the Aurora Replica that you are connected to is promoted
   *             to be the primary instance, your connection is dropped. To
   *             continue sending your read workload to other Aurora Replicas in the cluster,
   *             you can then reconnect to the reader endpoint.</p>
   */
  ReaderEndpoint?: string;

  /**
   * <p>Contains the identifier of the source DB cluster if this DB cluster is a Read Replica.</p>
   */
  ReplicationSourceIdentifier?: string;

  /**
   * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  ScalingConfigurationInfo?: ScalingConfigurationInfo;

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
    return __isa(o, "DBCluster");
  }
}

/**
 * <p>This data type is used as a response element in the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DBClusterBacktrack {
  __type?: "DBClusterBacktrack";
  /**
   * <p>Contains the backtrack identifier.</p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>The timestamp of the time at which the backtrack was requested.</p>
   */
  BacktrackRequestCreationTime?: Date;

  /**
   * <p>The timestamp of the time to which the DB cluster was backtracked.</p>
   */
  BacktrackTo?: Date;

  /**
   * <p>The timestamp of the time from which the DB cluster was backtracked.</p>
   */
  BacktrackedFrom?: Date;

  /**
   * <p>Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The status of the backtrack. This property returns one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>applying</code> - The backtrack is currently being applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>completed</code> - The backtrack has successfully been applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code> - An error occurred while the backtrack was applied to or rolled back from the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code> - The backtrack is currently pending application to or rollback from the DB cluster.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterBacktrack {
  export function isa(o: any): o is DBClusterBacktrack {
    return __isa(o, "DBClusterBacktrack");
  }
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusterBacktracks</code> action.</p>
 */
export interface DBClusterBacktrackMessage {
  __type?: "DBClusterBacktrackMessage";
  /**
   * <p>Contains a list of backtracks for the user.</p>
   */
  DBClusterBacktracks?: Array<DBClusterBacktrack>;

  /**
   * <p>A pagination token that can be used in a subsequent <code>DescribeDBClusterBacktracks</code> request.</p>
   */
  Marker?: string;
}

export namespace DBClusterBacktrackMessage {
  export function isa(o: any): o is DBClusterBacktrackMessage {
    return __isa(o, "DBClusterBacktrackMessage");
  }
}

export interface DBClusterCapacityInfo {
  __type?: "DBClusterCapacityInfo";
  /**
   * <p>The current capacity of the DB cluster.</p>
   */
  CurrentCapacity?: number;

  /**
   * <p>A user-supplied DB cluster identifier. This identifier is the unique key that
   *             identifies a DB cluster. </p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A value that specifies the capacity that the DB cluster scales to next.</p>
   */
  PendingCapacity?: number;

  /**
   * <p>The number of seconds before a call to <code>ModifyCurrentDBClusterCapacity</code> times out.</p>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *             <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export namespace DBClusterCapacityInfo {
  export function isa(o: any): o is DBClusterCapacityInfo {
    return __isa(o, "DBClusterCapacityInfo");
  }
}

/**
 * <p>This data type represents the information you need to connect to an Amazon Aurora DB cluster.
 *       This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBClusterEndpoints</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBClusterEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For the data structure that represents Amazon RDS DB instance endpoints,
 *         see <code>Endpoint</code>.</p>
 */
export interface DBClusterEndpoint {
  __type?: "DBClusterEndpoint";
  /**
   * <p>The type associated with a custom endpoint. One of: <code>READER</code>,
   *        <code>WRITER</code>, <code>ANY</code>.</p>
   */
  CustomEndpointType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the endpoint.</p>
   */
  DBClusterEndpointArn?: string;

  /**
   * <p>The identifier associated with the endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>A unique system-generated identifier for an endpoint. It remains the same for the whole life of the endpoint.</p>
   */
  DBClusterEndpointResourceIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>The DNS address of the endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>CUSTOM</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: Array<string>;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: Array<string>;

  /**
   * <p>The current status of the endpoint. One of: <code>creating</code>, <code>available</code>, <code>deleting</code>, <code>modifying</code>.</p>
   */
  Status?: string;
}

export namespace DBClusterEndpoint {
  export function isa(o: any): o is DBClusterEndpoint {
    return __isa(o, "DBClusterEndpoint");
  }
}

export interface DBClusterEndpointMessage {
  __type?: "DBClusterEndpointMessage";
  /**
   * <p>Contains the details of the endpoints associated with the cluster
   *        and matching any filter conditions.</p>
   */
  DBClusterEndpoints?: Array<DBClusterEndpoint>;

  /**
   * <p> An optional pagination token provided by a previous
   *             <code>DescribeDBClusterEndpoints</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBClusterEndpointMessage {
  export function isa(o: any): o is DBClusterEndpointMessage {
    return __isa(o, "DBClusterEndpointMessage");
  }
}

/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface DBClusterMember {
  __type?: "DBClusterMember";
  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   */
  PromotionTier?: number;
}

export namespace DBClusterMember {
  export function isa(o: any): o is DBClusterMember {
    return __isa(o, "DBClusterMember");
  }
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeDBClusters</code> action.</p>
 */
export interface DBClusterMessage {
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
    return __isa(o, "DBClusterMessage");
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
    return __isa(o, "DBClusterOptionGroupStatus");
  }
}

/**
 * <p>Contains the details of an Amazon RDS DB cluster parameter group.
 *         </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBClusterParameterGroups</code> action.
 *         </p>
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
   * <p>Provides the name of the DB parameter group family that this DB cluster parameter group is compatible with.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>Provides the customer-specified description for this DB cluster parameter group.</p>
   */
  Description?: string;
}

export namespace DBClusterParameterGroup {
  export function isa(o: any): o is DBClusterParameterGroup {
    return __isa(o, "DBClusterParameterGroup");
  }
}

/**
 * <p>Provides details about a DB cluster parameter group including the parameters in the DB cluster parameter group.</p>
 */
export interface DBClusterParameterGroupDetails {
  __type?: "DBClusterParameterGroupDetails";
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeDBClusterParameters request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Provides a list of parameters for the DB cluster parameter group.</p>
   */
  Parameters?: Array<Parameter>;
}

export namespace DBClusterParameterGroupDetails {
  export function isa(o: any): o is DBClusterParameterGroupDetails {
    return __isa(o, "DBClusterParameterGroupDetails");
  }
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupNameMessage {
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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
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
    return __isa(o, "DBClusterParameterGroupNameMessage");
  }
}

/**
 * <p></p>
 */
export interface DBClusterParameterGroupsMessage {
  __type?: "DBClusterParameterGroupsMessage";
  /**
   * <p>A list of DB cluster parameter groups.</p>
   */
  DBClusterParameterGroups?: Array<DBClusterParameterGroup>;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribeDBClusterParameterGroups</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBClusterParameterGroupsMessage {
  export function isa(o: any): o is DBClusterParameterGroupsMessage {
    return __isa(o, "DBClusterParameterGroupsMessage");
  }
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB cluster.</p>
 */
export interface DBClusterRole {
  __type?: "DBClusterRole";
  /**
   * <p>The name of the feature associated with the AWS Identity and Access Management (IAM) role.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.
   *         </p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB cluster. The Status property returns one of the following
   *         values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB cluster and can be used to
   *             access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB cluster, but the DB cluster is unable
   *                 to assume the IAM role in order to access other AWS services on your behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBClusterRole {
  export function isa(o: any): o is DBClusterRole {
    return __isa(o, "DBClusterRole");
  }
}

/**
 * <p>Contains the details for an Amazon RDS DB cluster snapshot
 *       </p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBClusterSnapshots</code> action.
 *       </p>
 */
export interface DBClusterSnapshot {
  __type?: "DBClusterSnapshot";
  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the DB cluster snapshot can be restored.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>Specifies the time when the DB cluster was created, in Universal Coordinated Time (UTC).</p>
   */
  ClusterCreateTime?: Date;

  /**
   * <p>Specifies the DB cluster identifier of the DB cluster that this DB cluster snapshot was created from.</p>
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
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>If <code>StorageEncrypted</code> is true, the AWS KMS key identifier for the encrypted DB cluster snapshot.</p>
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
   * <p>Specifies the port that the DB cluster was listening on at the time of the snapshot.</p>
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
   *             Resource Name (ARN) for the source DB cluster snapshot, otherwise, a null value.</p>
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
    return __isa(o, "DBClusterSnapshot");
  }
}

/**
 * <p>Contains the name and values of a manual DB cluster snapshot attribute.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
 *             to restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
 *             API action.</p>
 */
export interface DBClusterSnapshotAttribute {
  __type?: "DBClusterSnapshotAttribute";
  /**
   * <p>The name of the manual DB cluster snapshot attribute.</p>
   *         <p>The attribute named <code>restore</code> refers to the list of AWS accounts that
   *             have permission to copy or restore the manual DB cluster snapshot. For more information,
   *             see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value(s) for the manual DB cluster snapshot attribute.</p>
   *         <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *             returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual
   *             DB cluster snapshot. If a value of <code>all</code> is in the list, then the manual DB cluster snapshot
   *             is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: Array<string>;
}

export namespace DBClusterSnapshotAttribute {
  export function isa(o: any): o is DBClusterSnapshotAttribute {
    return __isa(o, "DBClusterSnapshotAttribute");
  }
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
 *             API action.</p>
 *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
 *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
 *             API action.</p>
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
    return __isa(o, "DBClusterSnapshotAttributesResult");
  }
}

/**
 * <p>
 *           Provides a list of DB cluster snapshots for the user as the result of a call to the <code>DescribeDBClusterSnapshots</code> action.
 *     </p>
 */
export interface DBClusterSnapshotMessage {
  __type?: "DBClusterSnapshotMessage";
  /**
   * <p>Provides a list of DB cluster snapshots for the user.</p>
   */
  DBClusterSnapshots?: Array<DBClusterSnapshot>;

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *           <code>DescribeDBClusterSnapshots</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;
}

export namespace DBClusterSnapshotMessage {
  export function isa(o: any): o is DBClusterSnapshotMessage {
    return __isa(o, "DBClusterSnapshotMessage");
  }
}

/**
 * <p>
 *             This data type is used as a response element in the action <code>DescribeDBEngineVersions</code>.
 *         </p>
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
   *             The default character set for new instances of this engine version,
   *             if the <code>CharacterSetName</code> parameter of the CreateDBInstance API
   *             isn't specified.
   *         </p>
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
   * <p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>
   */
  ExportableLogTypes?: Array<string>;

  /**
   * <p>The status of the DB engine version, either <code>available</code> or <code>deprecated</code>.</p>
   */
  Status?: string;

  /**
   * <p>
   *             A list of the character sets supported by this engine for the
   *             <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> action.
   *         </p>
   */
  SupportedCharacterSets?: Array<CharacterSet>;

  /**
   * <p>A list of the supported DB engine modes.</p>
   */
  SupportedEngineModes?: Array<string>;

  /**
   * <p>
   *         A list of features supported by the DB engine. Supported feature names include the following.
   *     </p>
   *          <ul>
   *             <li>
   *                <p>s3Import</p>
   *             </li>
   *          </ul>
   */
  SupportedFeatureNames?: Array<string>;

  /**
   * <p>A list of the time zones supported by this engine for the
   *             <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.
   *         </p>
   */
  SupportedTimezones?: Array<Timezone>;

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * <p>Indicates whether the database engine version supports Read Replicas.</p>
   */
  SupportsReadReplica?: boolean;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: Array<UpgradeTarget>;
}

export namespace DBEngineVersion {
  export function isa(o: any): o is DBEngineVersion {
    return __isa(o, "DBEngineVersion");
  }
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeDBEngineVersions</code> action.
 *         </p>
 */
export interface DBEngineVersionMessage {
  __type?: "DBEngineVersionMessage";
  /**
   * <p>
   *             A list of <code>DBEngineVersion</code> elements.
   *         </p>
   */
  DBEngineVersions?: Array<DBEngineVersion>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBEngineVersionMessage {
  export function isa(o: any): o is DBEngineVersionMessage {
    return __isa(o, "DBEngineVersionMessage");
  }
}

/**
 * <p>Contains the details of an Amazon RDS DB instance.
 *       </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
 *       </p>
 */
export interface DBInstance {
  __type?: "DBInstance";
  /**
   * <p>Specifies the allocated storage size specified in gibibytes.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>
   *             The AWS Identity and Access Management (IAM) roles associated with the DB instance.
   *         </p>
   */
  AssociatedRoles?: Array<DBInstanceRole>;

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
   * <p>If present, specifies the name of the character set that this instance is associated with.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>Specifies whether tags are copied from the DB instance to snapshots of the DB instance.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *             value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *             information, see <code>DBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.</p>
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
   * <p>Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the current state of this database.</p>
   */
  DBInstanceStatus?: string;

  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p>
   *          <p>
   *             <b>MySQL, MariaDB, SQL Server, PostgreSQL</b>
   *          </p>
   *          <p>Contains the name of the initial database of this instance that was provided at create time, if one was specified when the DB instance was created. This same name is returned for the life of the DB instance.</p>
   *          <p>Type: String</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Contains the Oracle System ID (SID) of the created DB instance. Not shown when the returned parameters do not apply to an Oracle DB instance.</p>
   */
  DBName?: string;

  /**
   * <p>Provides the list of DB parameter groups applied to this DB instance.</p>
   */
  DBParameterGroups?: Array<DBParameterGroupStatus>;

  /**
   * <p>
   *         A list of DB security group elements containing
   *         <code>DBSecurityGroup.Name</code> and <code>DBSecurityGroup.Status</code> subelements.
   *         </p>
   */
  DBSecurityGroups?: Array<DBSecurityGroupMembership>;

  /**
   * <p>Specifies information on the subnet group associated with the DB instance, including the name, description, and subnets in the subnet group.</p>
   */
  DBSubnetGroup?: DBSubnetGroup;

  /**
   * <p>Specifies the port that the DB instance listens on. If the DB instance is part of a DB cluster, this can be a different port than the DB cluster port.</p>
   */
  DbInstancePort?: number;

  /**
   * <p>The AWS Region-unique, immutable identifier for the DB instance. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB instance is accessed.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>Indicates if the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled.
   *             For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Active Directory Domain membership records associated with the DB instance.</p>
   */
  DomainMemberships?: Array<DomainMembership>;

  /**
   * <p>A list of log types that this DB instance is configured to export to CloudWatch Logs.</p>
   *         <p>Log types vary by DB engine. For information about the log types for each DB engine, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html">Amazon RDS Database Log Files</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
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
   * <p>The Amazon Resource Name (ARN) of the Amazon CloudWatch Logs log stream that receives the Enhanced Monitoring metrics data for the DB instance.</p>
   */
  EnhancedMonitoringResourceArn?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   *
   *          <p>IAM database authentication can be enabled for the following database engines</p>
   *          <ul>
   *             <li>
   *                <p>For MySQL 5.6, minor version 5.6.34 or higher</p>
   *             </li>
   *             <li>
   *                <p>For MySQL 5.7, minor version 5.7.16 or higher</p>
   *             </li>
   *             <li>
   *                <p>Aurora 5.6 or higher. To enable IAM database authentication for Aurora, see DBCluster Type.</p>
   *             </li>
   *          </ul>
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
   * <p>
   *             If <code>StorageEncrypted</code> is true, the AWS KMS key identifier
   *             for the encrypted DB instance.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>Specifies the latest time to which a database can be restored with point-in-time restore.</p>
   */
  LatestRestorableTime?: Date;

  /**
   * <p>License model information for this DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the listener connection endpoint for SQL Server Always On.</p>
   */
  ListenerEndpoint?: Endpoint;

  /**
   * <p>Contains the master username for the DB instance.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance.</p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specifies if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Provides the list of option group memberships for this DB instance.</p>
   */
  OptionGroupMemberships?: Array<OptionGroupMembership>;

  /**
   * <p>Specifies that changes to the DB instance are pending. This element is only included when changes are pending. Specific changes are identified by subelements.</p>
   */
  PendingModifiedValues?: PendingModifiedValues;

  /**
   * <p>True if Performance Insights is enabled for the DB instance, and otherwise false.</p>
   */
  PerformanceInsightsEnabled?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID
   *             is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS
   *             encryption key.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>
   *         Specifies the daily time range during which automated backups are
   *         created if automated backups are enabled, as determined
   *         by the <code>BackupRetentionPeriod</code>.
   *         </p>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   */
  PromotionTier?: number;

  /**
   * <p>Specifies the accessibility options for the DB instance. A value of true specifies an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. A value of false specifies an internal instance with a DNS name that resolves to a private IP address.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Contains one or more identifiers of Aurora DB clusters to which the RDS DB instance is replicated as a Read Replica.
   *             For example, when you create an Aurora Read Replica of an RDS MySQL DB instance, the Aurora MySQL DB cluster for the
   *             Aurora Read Replica is shown. This output does not contain information about cross region Aurora Read Replicas.</p>
   *         <note>
   *             <p>Currently, each RDS DB instance can have only one Aurora Read Replica.</p>
   *         </note>
   */
  ReadReplicaDBClusterIdentifiers?: Array<string>;

  /**
   * <p>Contains one or more identifiers of the Read Replicas associated with this DB instance.</p>
   */
  ReadReplicaDBInstanceIdentifiers?: Array<string>;

  /**
   * <p>Contains the identifier of the source DB instance if this DB instance is a Read Replica.</p>
   */
  ReadReplicaSourceDBInstanceIdentifier?: string;

  /**
   * <p>If present, specifies the name of the secondary Availability Zone for a DB instance with multi-AZ support.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The status of a Read Replica. If the instance isn't a Read Replica, this is blank.</p>
   */
  StatusInfos?: Array<DBInstanceStatusInfo>;

  /**
   * <p>Specifies whether the DB instance is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type associated with DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the instance is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The time zone of the DB instance.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             Microsoft SQL Server DB instances
   *             that were created with a time zone specified.
   *         </p>
   */
  Timezone?: string;

  /**
   * <p>Provides a list of VPC security group elements that the DB instance belongs to.</p>
   */
  VpcSecurityGroups?: Array<VpcSecurityGroupMembership>;
}

export namespace DBInstance {
  export function isa(o: any): o is DBInstance {
    return __isa(o, "DBInstance");
  }
}

/**
 * <p>An automated backup of a DB instance. It it consists of
 *             system backups, transaction logs, and the database instance properties that
 *             existed at the time you deleted the source instance. </p>
 */
export interface DBInstanceAutomatedBackup {
  __type?: "DBInstanceAutomatedBackup";
  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The Availability Zone that the automated backup was created in. For information on
   *             AWS Regions and Availability Zones, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions
   *                 and Availability Zones</a>.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the automated backup.</p>
   */
  DBInstanceArn?: string;

  /**
   * <p>The customer id of the instance that is/was associated with the automated backup.
   *         </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>Specifies whether the automated backup is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The name of the database engine for this automated backup.</p>
   */
  Engine?: string;

  /**
   * <p>The version of the database engine for the automated backup.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled,
   *             and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Provides the date and time that the DB instance was created.
   *         </p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>The IOPS (I/O operations per second) value for the automated backup. </p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key ID for an automated backup.
   *             The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key. </p>
   */
  KmsKeyId?: string;

  /**
   * <p>License model information for the automated backup.</p>
   */
  LicenseModel?: string;

  /**
   * <p>The license model of an automated backup.</p>
   */
  MasterUsername?: string;

  /**
   * <p>The option group the automated backup is associated with.
   *             If omitted, the default option group for the engine specified is used.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number that the automated backup used for connections.</p>
   *         <p>Default: Inherits from the source DB instance</p>
   *         <p>Valid Values: <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The AWS Region associated with the automated backup.</p>
   */
  Region?: string;

  /**
   * <p>Earliest and latest time an instance can be restored to.</p>
   */
  RestoreWindow?: RestoreWindow;

  /**
   * <p>Provides a list of status information for an automated backup:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>active</code> - automated backups for current instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>retained</code> - automated backups for deleted instances</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>creating</code> - automated backups that are waiting
   *                 for the first automated snapshot to be available.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>Specifies the storage type associated with the automated backup.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which the automated backup is associated for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The time zone of the automated backup. In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for Microsoft SQL Server DB instances
   *             that were created with a time zone specified.</p>
   */
  Timezone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB instance</p>
   */
  VpcId?: string;
}

export namespace DBInstanceAutomatedBackup {
  export function isa(o: any): o is DBInstanceAutomatedBackup {
    return __isa(o, "DBInstanceAutomatedBackup");
  }
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeDBInstanceAutomatedBackups</code> action.
 *         </p>
 */
export interface DBInstanceAutomatedBackupMessage {
  __type?: "DBInstanceAutomatedBackupMessage";
  /**
   * <p>
   *             A list of <code>DBInstanceAutomatedBackup</code> instances.
   *         </p>
   */
  DBInstanceAutomatedBackups?: Array<DBInstanceAutomatedBackup>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace DBInstanceAutomatedBackupMessage {
  export function isa(o: any): o is DBInstanceAutomatedBackupMessage {
    return __isa(o, "DBInstanceAutomatedBackupMessage");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBInstances</code> action.
 *         </p>
 */
export interface DBInstanceMessage {
  __type?: "DBInstanceMessage";
  /**
   * <p>
   *         A list of <code>DBInstance</code> instances.
   *         </p>
   */
  DBInstances?: Array<DBInstance>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace DBInstanceMessage {
  export function isa(o: any): o is DBInstanceMessage {
    return __isa(o, "DBInstanceMessage");
  }
}

/**
 * <p>Describes an AWS Identity and Access Management (IAM) role that is associated with a DB instance.</p>
 */
export interface DBInstanceRole {
  __type?: "DBInstanceRole";
  /**
   * <p>The name of the feature associated with the AWS Identity and Access Management (IAM) role.
   *             For the list of supported feature names, see <code>DBEngineVersion</code>.
   *         </p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that is associated with the DB
   *             instance.</p>
   */
  RoleArn?: string;

  /**
   * <p>Describes the state of association between the IAM role and the DB instance. The Status property returns one of the following
   *             values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> - the IAM role ARN is associated with the DB instance and can be used to
   *                 access other AWS services on your behalf.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - the IAM role ARN is being associated with the DB instance.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INVALID</code> - the IAM role ARN is associated with the DB instance, but the DB instance is unable
   *                 to assume the IAM role in order to access other AWS services on your behalf.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DBInstanceRole {
  export function isa(o: any): o is DBInstanceRole {
    return __isa(o, "DBInstanceRole");
  }
}

/**
 * <p>Provides a list of status information for a DB instance.</p>
 */
export interface DBInstanceStatusInfo {
  __type?: "DBInstanceStatusInfo";
  /**
   * <p>Details of the error if there is an error for the instance. If the instance isn't in an error state, this value is blank.</p>
   */
  Message?: string;

  /**
   * <p>Boolean value that is true if the instance is operating normally, or false if the instance is in an error state.</p>
   */
  Normal?: boolean;

  /**
   * <p>Status of the DB instance. For a StatusType of Read Replica, the values can be replicating, replication stop point set,
   *           replication stop point reached, error, stopped, or terminated.</p>
   */
  Status?: string;

  /**
   * <p>This value is currently "read replication."</p>
   */
  StatusType?: string;
}

export namespace DBInstanceStatusInfo {
  export function isa(o: any): o is DBInstanceStatusInfo {
    return __isa(o, "DBInstanceStatusInfo");
  }
}

/**
 * <p>Contains the details of an Amazon RDS DB parameter group.
 *         </p>
 *          <p>This data type is used as a response element in the <code>DescribeDBParameterGroups</code> action.
 *         </p>
 */
export interface DBParameterGroup {
  __type?: "DBParameterGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB parameter group.</p>
   */
  DBParameterGroupArn?: string;

  /**
   * <p>Provides the name of the DB parameter group family that this DB parameter group is compatible with.</p>
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
    return __isa(o, "DBParameterGroup");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBParameters</code> action.
 *         </p>
 */
export interface DBParameterGroupDetails {
  __type?: "DBParameterGroupDetails";
  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         A list of <code>Parameter</code> values.
   *         </p>
   */
  Parameters?: Array<Parameter>;
}

export namespace DBParameterGroupDetails {
  export function isa(o: any): o is DBParameterGroupDetails {
    return __isa(o, "DBParameterGroupDetails");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the
 *         <code>ModifyDBParameterGroup</code> or <code>ResetDBParameterGroup</code> action.
 *         </p>
 */
export interface DBParameterGroupNameMessage {
  __type?: "DBParameterGroupNameMessage";
  /**
   * <p>Provides the name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;
}

export namespace DBParameterGroupNameMessage {
  export function isa(o: any): o is DBParameterGroupNameMessage {
    return __isa(o, "DBParameterGroupNameMessage");
  }
}

/**
 * <p>The status of the DB parameter group.</p>
 *          <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstanceReadReplica</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface DBParameterGroupStatus {
  __type?: "DBParameterGroupStatus";
  /**
   * <p>The name of the DB parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export namespace DBParameterGroupStatus {
  export function isa(o: any): o is DBParameterGroupStatus {
    return __isa(o, "DBParameterGroupStatus");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBParameterGroups</code> action.
 *         </p>
 */
export interface DBParameterGroupsMessage {
  __type?: "DBParameterGroupsMessage";
  /**
   * <p>
   *         A list of <code>DBParameterGroup</code> instances.
   *         </p>
   */
  DBParameterGroups?: Array<DBParameterGroup>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBParameterGroupsMessage {
  export function isa(o: any): o is DBParameterGroupsMessage {
    return __isa(o, "DBParameterGroupsMessage");
  }
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>The data structure representing a proxy managed by the RDS Proxy.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxies</code> action.</p>
 */
export interface DBProxy {
  __type?: "DBProxy";
  /**
   * <p>One or more data structures specifying the authorization mechanism to connect to the associated RDS DB instance
   *         or Aurora DB cluster.</p>
   */
  Auth?: Array<UserAuthConfigInfo>;

  /**
   * <p>The date and time when the proxy was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the proxy.</p>
   */
  DBProxyArn?: string;

  /**
   * <p>The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.</p>
   */
  DBProxyName?: string;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The endpoint that you can use to connect to the proxy. You include the endpoint value in the
   *         connection string for a database client application.</p>
   */
  Endpoint?: string;

  /**
   * <p>Currently, this value is always <code>MYSQL</code>. The engine family applies to
   *         both RDS MySQL and Aurora MySQL.</p>
   */
  EngineFamily?: string;

  /**
   * <p>The number of seconds a connection to the proxy can have no activity before the proxy drops the client connection.
   *         The proxy keeps the underlying database connection open and puts it back into the connection pool for reuse by
   *         later connection requests.</p>
   *          <p>Default: 1800 (30 minutes)</p>
   *          <p>Constraints: 1 to 28,800</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>Indicates whether Transport Layer Security (TLS) encryption is required for connections to the proxy.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that the proxy uses to access Amazon Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The current status of this proxy. A status of <code>available</code> means the
   *         proxy is ready to handle requests. Other values indicate that you must wait for
   *         the proxy to be ready, or take some action to resolve an issue.</p>
   */
  Status?: DBProxyStatus | string;

  /**
   * <p>The date and time when the proxy was last updated.</p>
   */
  UpdatedDate?: Date;

  /**
   * <p>Provides a list of VPC security groups that the proxy belongs to.</p>
   */
  VpcSecurityGroupIds?: Array<string>;

  /**
   * <p>The EC2 subnet IDs for the proxy.</p>
   */
  VpcSubnetIds?: Array<string>;
}

export namespace DBProxy {
  export function isa(o: any): o is DBProxy {
    return __isa(o, "DBProxy");
  }
}

export enum DBProxyStatus {
  AVAILABLE = "available",
  CREATING = "creating",
  DELETING = "deleting",
  INCOMPATIBLE_NETWORK = "incompatible-network",
  INSUFFICIENT_RESOURCE_LIMITS = "insufficient-resource-limits",
  MODIFYING = "modifying"
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Contains the details for an RDS Proxy target. It represents an RDS DB instance or Aurora DB cluster
 *         that the proxy can connect to. One or more targets are associated with an RDS Proxy target group.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxyTargets</code> action.</p>
 */
export interface DBProxyTarget {
  __type?: "DBProxyTarget";
  /**
   * <p>The writer endpoint for the RDS DB instance or Aurora DB cluster.</p>
   */
  Endpoint?: string;

  /**
   * <p>The port that the RDS Proxy uses to connect to the target RDS DB instance or Aurora DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The identifier representing the target. It can be the instance identifier for an RDS DB instance,
   *         or the cluster identifier for an Aurora DB cluster.</p>
   */
  RdsResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the RDS DB instance or Aurora DB cluster.</p>
   */
  TargetArn?: string;

  /**
   * <p>The DB cluster identifier when the target represents an Aurora DB cluster. This field is blank when the target represents an RDS DB instance.</p>
   */
  TrackedClusterId?: string;

  /**
   * <p>Specifies the kind of database, such as an RDS DB instance or an Aurora DB cluster, that the target represents.</p>
   */
  Type?: TargetType | string;
}

export namespace DBProxyTarget {
  export function isa(o: any): o is DBProxyTarget {
    return __isa(o, "DBProxyTarget");
  }
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Represents a set of RDS DB instances, Aurora DB clusters, or both that a proxy can connect to. Currently, each target group
 *         is associated with exactly one RDS DB instance or Aurora DB cluster.</p>
 *          <p>This data type is used as a response element in the <code>DescribeDBProxyTargetGroups</code> action.</p>
 */
export interface DBProxyTargetGroup {
  __type?: "DBProxyTargetGroup";
  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfigurationInfo;

  /**
   * <p>The date and time when the target group was first created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>The identifier for the RDS proxy associated with this target group.</p>
   */
  DBProxyName?: string;

  /**
   * <p>Whether this target group is the first one used for connection requests by the associated proxy.
   *         Because each proxy is currently associated with a single target group, currently this setting
   *         is always <code>true</code>.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The current status of this target group. A status of <code>available</code> means the
   *         target group is correctly associated with a database. Other values indicate that you must wait for
   *         the target group to be ready, or take some action to resolve an issue.</p>
   */
  Status?: string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the target group.</p>
   */
  TargetGroupArn?: string;

  /**
   * <p>The identifier for the target group. This name must be unique for all target groups owned by your AWS account in the specified AWS Region.</p>
   */
  TargetGroupName?: string;

  /**
   * <p>The date and time when the target group was last updated.</p>
   */
  UpdatedDate?: Date;
}

export namespace DBProxyTargetGroup {
  export function isa(o: any): o is DBProxyTargetGroup {
    return __isa(o, "DBProxyTargetGroup");
  }
}

/**
 * <p>Contains the details for an Amazon RDS DB security group.
 *       </p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBSecurityGroups</code> action.
 *       </p>
 */
export interface DBSecurityGroup {
  __type?: "DBSecurityGroup";
  /**
   * <p>The Amazon Resource Name (ARN) for the DB security group.</p>
   */
  DBSecurityGroupArn?: string;

  /**
   * <p>Provides the description of the DB security group.</p>
   */
  DBSecurityGroupDescription?: string;

  /**
   * <p>Specifies the name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>
   *         Contains a list of <code>EC2SecurityGroup</code> elements.
   *         </p>
   */
  EC2SecurityGroups?: Array<EC2SecurityGroup>;

  /**
   * <p>
   *         Contains a list of <code>IPRange</code> elements.
   *         </p>
   */
  IPRanges?: Array<IPRange>;

  /**
   * <p>Provides the AWS ID of the owner of a specific DB security group.</p>
   */
  OwnerId?: string;

  /**
   * <p>Provides the VpcId of the DB security group.</p>
   */
  VpcId?: string;
}

export namespace DBSecurityGroup {
  export function isa(o: any): o is DBSecurityGroup {
    return __isa(o, "DBSecurityGroup");
  }
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RebootDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
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
    return __isa(o, "DBSecurityGroupMembership");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBSecurityGroups</code> action.
 *         </p>
 */
export interface DBSecurityGroupMessage {
  __type?: "DBSecurityGroupMessage";
  /**
   * <p>
   *         A list of <code>DBSecurityGroup</code> instances.
   *         </p>
   */
  DBSecurityGroups?: Array<DBSecurityGroup>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBSecurityGroupMessage {
  export function isa(o: any): o is DBSecurityGroupMessage {
    return __isa(o, "DBSecurityGroupMessage");
  }
}

/**
 * <p>Contains the details of an Amazon RDS DB snapshot.
 *       </p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBSnapshots</code> action.
 *       </p>
 */
export interface DBSnapshot {
  __type?: "DBSnapshot";
  /**
   * <p>Specifies the allocated storage size in gibibytes (GiB).</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Specifies the name of the Availability Zone the DB instance was located in at the time of the DB snapshot.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Specifies the DB instance identifier of the DB instance this DB snapshot was created from.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the DB snapshot.</p>
   */
  DBSnapshotArn?: string;

  /**
   * <p>Specifies the identifier for the DB snapshot.</p>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>Specifies whether the DB snapshot is encrypted.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>Specifies the name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>Specifies the version of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>True if mapping of AWS Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.</p>
   */
  IAMDatabaseAuthenticationEnabled?: boolean;

  /**
   * <p>Specifies the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>Specifies the Provisioned IOPS (I/O operations per second) value of the DB instance at the time of the snapshot.</p>
   */
  Iops?: number;

  /**
   * <p>
   *             If <code>Encrypted</code> is true, the AWS KMS key identifier
   *             for the encrypted DB snapshot.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>License model information for the restored DB instance.</p>
   */
  LicenseModel?: string;

  /**
   * <p>Provides the master username for the DB snapshot.</p>
   */
  MasterUsername?: string;

  /**
   * <p>Provides the option group name for the DB snapshot.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The percentage of the estimated data that has been transferred.</p>
   */
  PercentProgress?: number;

  /**
   * <p>Specifies the port that the database engine was listening on at the time of the snapshot.</p>
   */
  Port?: number;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance when the DB snapshot was created.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>Provides the time when the snapshot was taken, in Universal Coordinated Time (UTC).</p>
   */
  SnapshotCreateTime?: Date;

  /**
   * <p>Provides the type of the DB snapshot.</p>
   */
  SnapshotType?: string;

  /**
   * <p>The DB snapshot Amazon Resource Name (ARN) that the DB snapshot was copied from. It only has value in case of cross-customer or cross-region copy.</p>
   */
  SourceDBSnapshotIdentifier?: string;

  /**
   * <p>The AWS Region that the DB snapshot was created in or copied from.</p>
   */
  SourceRegion?: string;

  /**
   * <p>Specifies the status of this DB snapshot.</p>
   */
  Status?: string;

  /**
   * <p>Specifies the storage type associated with DB snapshot.</p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The time zone of the DB snapshot.
   *             In most cases, the <code>Timezone</code> element is empty.
   *             <code>Timezone</code> content appears only for
   *             snapshots taken from
   *             Microsoft SQL Server DB instances
   *             that were created with a time zone specified.
   *         </p>
   */
  Timezone?: string;

  /**
   * <p>Provides the VPC ID associated with the DB snapshot.</p>
   */
  VpcId?: string;
}

export namespace DBSnapshot {
  export function isa(o: any): o is DBSnapshot {
    return __isa(o, "DBSnapshot");
  }
}

/**
 * <p>Contains the name and values of a manual DB snapshot attribute</p>
 *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
 *     to restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *     API.</p>
 */
export interface DBSnapshotAttribute {
  __type?: "DBSnapshotAttribute";
  /**
   * <p>The name of the manual DB snapshot attribute.</p>
   *          <p>The attribute named <code>restore</code> refers to the list of AWS accounts that
   *           have permission to copy or restore the manual DB cluster snapshot. For more information,
   *           see the <code>ModifyDBSnapshotAttribute</code>
   *           API action.</p>
   */
  AttributeName?: string;

  /**
   * <p>The value or values for the manual DB snapshot attribute.</p>
   *          <p>If the <code>AttributeName</code> field is set to <code>restore</code>, then this element
   *       returns a list of IDs of the AWS accounts that are authorized to copy or restore the manual
   *       DB snapshot. If a value of <code>all</code> is in the list, then the manual DB snapshot
   *       is public and available for any AWS account to copy or restore.</p>
   */
  AttributeValues?: Array<string>;
}

export namespace DBSnapshotAttribute {
  export function isa(o: any): o is DBSnapshotAttribute {
    return __isa(o, "DBSnapshotAttribute");
  }
}

/**
 * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
 *     API action.</p>
 *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
 *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
 *       API action.</p>
 */
export interface DBSnapshotAttributesResult {
  __type?: "DBSnapshotAttributesResult";
  /**
   * <p>The list of attributes and values for the manual DB snapshot.</p>
   */
  DBSnapshotAttributes?: Array<DBSnapshotAttribute>;

  /**
   * <p>The identifier of the manual DB snapshot that the attributes apply to.</p>
   */
  DBSnapshotIdentifier?: string;
}

export namespace DBSnapshotAttributesResult {
  export function isa(o: any): o is DBSnapshotAttributesResult {
    return __isa(o, "DBSnapshotAttributesResult");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
 *         </p>
 */
export interface DBSnapshotMessage {
  __type?: "DBSnapshotMessage";
  /**
   * <p>
   *         A list of <code>DBSnapshot</code> instances.
   *         </p>
   */
  DBSnapshots?: Array<DBSnapshot>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBSnapshotMessage {
  export function isa(o: any): o is DBSnapshotMessage {
    return __isa(o, "DBSnapshotMessage");
  }
}

/**
 * <p>Contains the details of an Amazon RDS DB subnet group.
 *       </p>
 *          <p>This data type is used as a response element
 *           in the <code>DescribeDBSubnetGroups</code> action.
 *       </p>
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
   * <p>
   *         Contains a list of <code>Subnet</code> elements.
   *         </p>
   */
  Subnets?: Array<Subnet>;

  /**
   * <p>Provides the VpcId of the DB subnet group.</p>
   */
  VpcId?: string;
}

export namespace DBSubnetGroup {
  export function isa(o: any): o is DBSubnetGroup {
    return __isa(o, "DBSubnetGroup");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeDBSubnetGroups</code> action.
 *         </p>
 */
export interface DBSubnetGroupMessage {
  __type?: "DBSubnetGroupMessage";
  /**
   * <p>
   *         A list of <code>DBSubnetGroup</code> instances.
   *         </p>
   */
  DBSubnetGroups?: Array<DBSubnetGroup>;

  /**
   * <p>
   *             An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace DBSubnetGroupMessage {
  export function isa(o: any): o is DBSubnetGroupMessage {
    return __isa(o, "DBSubnetGroupMessage");
  }
}

export interface DeleteCustomAvailabilityZoneMessage {
  __type?: "DeleteCustomAvailabilityZoneMessage";
  /**
   * <p>The custom AZ identifier.</p>
   */
  CustomAvailabilityZoneId: string | undefined;
}

export namespace DeleteCustomAvailabilityZoneMessage {
  export function isa(o: any): o is DeleteCustomAvailabilityZoneMessage {
    return __isa(o, "DeleteCustomAvailabilityZoneMessage");
  }
}

export interface DeleteCustomAvailabilityZoneResult {
  __type?: "DeleteCustomAvailabilityZoneResult";
  /**
   * <p>A custom Availability Zone (AZ) is an on-premises AZ that is integrated with a VMware vSphere cluster.</p>
   *         <p>For more information about RDS on VMware, see the
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
   *                 <i>RDS on VMware User Guide.</i>
   *             </a>
   *          </p>
   */
  CustomAvailabilityZone?: CustomAvailabilityZone;
}

export namespace DeleteCustomAvailabilityZoneResult {
  export function isa(o: any): o is DeleteCustomAvailabilityZoneResult {
    return __isa(o, "DeleteCustomAvailabilityZoneResult");
  }
}

export interface DeleteDBClusterEndpointMessage {
  __type?: "DeleteDBClusterEndpointMessage";
  /**
   * <p>The identifier associated with the custom endpoint. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;
}

export namespace DeleteDBClusterEndpointMessage {
  export function isa(o: any): o is DeleteDBClusterEndpointMessage {
    return __isa(o, "DeleteDBClusterEndpointMessage");
  }
}

/**
 * <p></p>
 */
export interface DeleteDBClusterMessage {
  __type?: "DeleteDBClusterMessage";
  /**
   * <p>The DB cluster identifier for the DB cluster to be deleted. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>
   *       The DB cluster snapshot identifier of the new DB cluster snapshot created when <code>SkipFinalSnapshot</code>
   *       is disabled.
   *     </p>
   *          <note>
   *             <p>
   *           Specifying this parameter and also skipping the creation of a final DB cluster snapshot
   *           with the <code>SkipFinalShapshot</code> parameter results in an error.</p>
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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p>A value that indicates whether to skip the creation of a final DB cluster snapshot before the DB cluster is deleted.
   *           If skip is specified, no DB cluster snapshot is created. If skip isn't specified, a DB cluster snapshot
   *           is created before the DB cluster is deleted. By default, skip isn't specified, and the DB cluster snapshot is created.
   *           By default, this parameter is disabled.</p>
   *          <note>
   *             <p>You must specify a <code>FinalDBSnapshotIdentifier</code> parameter if <code>SkipFinalSnapshot</code> is disabled.</p>
   *          </note>
   */
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBClusterMessage {
  export function isa(o: any): o is DeleteDBClusterMessage {
    return __isa(o, "DeleteDBClusterMessage");
  }
}

/**
 * <p></p>
 */
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
   *                <p>Can't be associated with any DB clusters.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName: string | undefined;
}

export namespace DeleteDBClusterParameterGroupMessage {
  export function isa(o: any): o is DeleteDBClusterParameterGroupMessage {
    return __isa(o, "DeleteDBClusterParameterGroupMessage");
  }
}

export interface DeleteDBClusterResult {
  __type?: "DeleteDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace DeleteDBClusterResult {
  export function isa(o: any): o is DeleteDBClusterResult {
    return __isa(o, "DeleteDBClusterResult");
  }
}

/**
 * <p></p>
 */
export interface DeleteDBClusterSnapshotMessage {
  __type?: "DeleteDBClusterSnapshotMessage";
  /**
   * <p>The identifier of the DB cluster snapshot to delete.</p>
   *          <p>Constraints: Must be the name of an existing DB cluster snapshot in the <code>available</code> state.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBClusterSnapshotMessage {
  export function isa(o: any): o is DeleteDBClusterSnapshotMessage {
    return __isa(o, "DeleteDBClusterSnapshotMessage");
  }
}

export interface DeleteDBClusterSnapshotResult {
  __type?: "DeleteDBClusterSnapshotResult";
  /**
   * <p>Contains the details for an Amazon RDS DB cluster snapshot
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBClusterSnapshots</code> action.
   *       </p>
   */
  DBClusterSnapshot?: DBClusterSnapshot;
}

export namespace DeleteDBClusterSnapshotResult {
  export function isa(o: any): o is DeleteDBClusterSnapshotResult {
    return __isa(o, "DeleteDBClusterSnapshotResult");
  }
}

/**
 * <p>Parameter input for the <code>DeleteDBInstanceAutomatedBackup</code> operation. </p>
 */
export interface DeleteDBInstanceAutomatedBackupMessage {
  __type?: "DeleteDBInstanceAutomatedBackupMessage";
  /**
   * <p>The identifier for the source DB instance, which can't be changed and which is unique to an AWS Region.</p>
   */
  DbiResourceId: string | undefined;
}

export namespace DeleteDBInstanceAutomatedBackupMessage {
  export function isa(o: any): o is DeleteDBInstanceAutomatedBackupMessage {
    return __isa(o, "DeleteDBInstanceAutomatedBackupMessage");
  }
}

export interface DeleteDBInstanceAutomatedBackupResult {
  __type?: "DeleteDBInstanceAutomatedBackupResult";
  /**
   * <p>An automated backup of a DB instance. It it consists of
   *             system backups, transaction logs, and the database instance properties that
   *             existed at the time you deleted the source instance. </p>
   */
  DBInstanceAutomatedBackup?: DBInstanceAutomatedBackup;
}

export namespace DeleteDBInstanceAutomatedBackupResult {
  export function isa(o: any): o is DeleteDBInstanceAutomatedBackupResult {
    return __isa(o, "DeleteDBInstanceAutomatedBackupResult");
  }
}

/**
 * <p></p>
 */
export interface DeleteDBInstanceMessage {
  __type?: "DeleteDBInstanceMessage";
  /**
   * <p>The DB instance identifier for the DB instance to be deleted. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>A value that indicates whether to remove automated backups immediately after the DB
   *             instance is deleted. This parameter isn't case-sensitive. The default is to remove
   *             automated backups immediately after the DB instance is deleted.</p>
   */
  DeleteAutomatedBackups?: boolean;

  /**
   * <p>
   *         The <code>DBSnapshotIdentifier</code> of the new <code>DBSnapshot</code> created when the <code>SkipFinalSnapshot</code>
   *         parameter is disabled.
   *         </p>
   *          <note>
   *             <p>Specifying this parameter and also specifying to skip final DB snapshot creation in SkipFinalShapshot results in an error.</p>
   *          </note>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be 1 to 255 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified when deleting a Read Replica.</p>
   *             </li>
   *          </ul>
   */
  FinalDBSnapshotIdentifier?: string;

  /**
   * <p>A value that indicates whether to skip the creation of a final DB snapshot before the DB instance is deleted.
   *           If skip is specified, no DB snapshot is created. If skip isn't specified, a DB snapshot
   *           is created before the DB instance is deleted. By default, skip isn't specified, and the DB snapshot is created.</p>
   *          <p>Note that when a DB instance is in a failure state and has a status of 'failed', 'incompatible-restore', or 'incompatible-network', it can only be deleted when skip is specified.</p>
   *          <p>Specify skip when deleting a Read Replica.</p>
   *          <note>
   *             <p>The FinalDBSnapshotIdentifier parameter must be specified if skip isn't specified.</p>
   *          </note>
   */
  SkipFinalSnapshot?: boolean;
}

export namespace DeleteDBInstanceMessage {
  export function isa(o: any): o is DeleteDBInstanceMessage {
    return __isa(o, "DeleteDBInstanceMessage");
  }
}

export interface DeleteDBInstanceResult {
  __type?: "DeleteDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace DeleteDBInstanceResult {
  export function isa(o: any): o is DeleteDBInstanceResult {
    return __isa(o, "DeleteDBInstanceResult");
  }
}

/**
 * <p></p>
 */
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
   *                <p>Can't be associated with any DB instances</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;
}

export namespace DeleteDBParameterGroupMessage {
  export function isa(o: any): o is DeleteDBParameterGroupMessage {
    return __isa(o, "DeleteDBParameterGroupMessage");
  }
}

export interface DeleteDBProxyRequest {
  __type?: "DeleteDBProxyRequest";
  /**
   * <p>The name of the DB proxy to delete.</p>
   */
  DBProxyName: string | undefined;
}

export namespace DeleteDBProxyRequest {
  export function isa(o: any): o is DeleteDBProxyRequest {
    return __isa(o, "DeleteDBProxyRequest");
  }
}

export interface DeleteDBProxyResponse {
  __type?: "DeleteDBProxyResponse";
  /**
   * <p>The data structure representing the details of the DB proxy that you delete.</p>
   */
  DBProxy?: DBProxy;
}

export namespace DeleteDBProxyResponse {
  export function isa(o: any): o is DeleteDBProxyResponse {
    return __isa(o, "DeleteDBProxyResponse");
  }
}

/**
 * <p></p>
 */
export interface DeleteDBSecurityGroupMessage {
  __type?: "DeleteDBSecurityGroupMessage";
  /**
   * <p>The name of the DB security group to delete.</p>
   *          <note>
   *             <p>You can't delete the default DB security group.</p>
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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *             <li>
   *                <p>Must not be "Default"</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroupName: string | undefined;
}

export namespace DeleteDBSecurityGroupMessage {
  export function isa(o: any): o is DeleteDBSecurityGroupMessage {
    return __isa(o, "DeleteDBSecurityGroupMessage");
  }
}

/**
 * <p></p>
 */
export interface DeleteDBSnapshotMessage {
  __type?: "DeleteDBSnapshotMessage";
  /**
   * <p>The DB snapshot identifier.</p>
   *          <p>Constraints: Must be the name of an existing DB snapshot in the <code>available</code> state.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DeleteDBSnapshotMessage {
  export function isa(o: any): o is DeleteDBSnapshotMessage {
    return __isa(o, "DeleteDBSnapshotMessage");
  }
}

export interface DeleteDBSnapshotResult {
  __type?: "DeleteDBSnapshotResult";
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.
   *       </p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace DeleteDBSnapshotResult {
  export function isa(o: any): o is DeleteDBSnapshotResult {
    return __isa(o, "DeleteDBSnapshotResult");
  }
}

/**
 * <p></p>
 */
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
    return __isa(o, "DeleteDBSubnetGroupMessage");
  }
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  __type?: "DeleteEventSubscriptionMessage";
  /**
   * <p>The name of the RDS event notification subscription you want to delete.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  export function isa(o: any): o is DeleteEventSubscriptionMessage {
    return __isa(o, "DeleteEventSubscriptionMessage");
  }
}

export interface DeleteEventSubscriptionResult {
  __type?: "DeleteEventSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace DeleteEventSubscriptionResult {
  export function isa(o: any): o is DeleteEventSubscriptionResult {
    return __isa(o, "DeleteEventSubscriptionResult");
  }
}

export interface DeleteGlobalClusterMessage {
  __type?: "DeleteGlobalClusterMessage";
  /**
   * <p>
   *         The cluster identifier of the global database cluster being deleted.
   *       </p>
   */
  GlobalClusterIdentifier: string | undefined;
}

export namespace DeleteGlobalClusterMessage {
  export function isa(o: any): o is DeleteGlobalClusterMessage {
    return __isa(o, "DeleteGlobalClusterMessage");
  }
}

export interface DeleteGlobalClusterResult {
  __type?: "DeleteGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace DeleteGlobalClusterResult {
  export function isa(o: any): o is DeleteGlobalClusterResult {
    return __isa(o, "DeleteGlobalClusterResult");
  }
}

export interface DeleteInstallationMediaMessage {
  __type?: "DeleteInstallationMediaMessage";
  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId: string | undefined;
}

export namespace DeleteInstallationMediaMessage {
  export function isa(o: any): o is DeleteInstallationMediaMessage {
    return __isa(o, "DeleteInstallationMediaMessage");
  }
}

/**
 * <p></p>
 */
export interface DeleteOptionGroupMessage {
  __type?: "DeleteOptionGroupMessage";
  /**
   * <p>The name of the option group to be deleted.</p>
   *          <note>
   *             <p>You can't delete default option groups.</p>
   *          </note>
   */
  OptionGroupName: string | undefined;
}

export namespace DeleteOptionGroupMessage {
  export function isa(o: any): o is DeleteOptionGroupMessage {
    return __isa(o, "DeleteOptionGroupMessage");
  }
}

export interface DeregisterDBProxyTargetsRequest {
  __type?: "DeregisterDBProxyTargetsRequest";
  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: Array<string>;

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: Array<string>;

  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;
}

export namespace DeregisterDBProxyTargetsRequest {
  export function isa(o: any): o is DeregisterDBProxyTargetsRequest {
    return __isa(o, "DeregisterDBProxyTargetsRequest");
  }
}

export interface DeregisterDBProxyTargetsResponse {
  __type?: "DeregisterDBProxyTargetsResponse";
}

export namespace DeregisterDBProxyTargetsResponse {
  export function isa(o: any): o is DeregisterDBProxyTargetsResponse {
    return __isa(o, "DeregisterDBProxyTargetsResponse");
  }
}

/**
 * <p></p>
 */
export interface DescribeAccountAttributesMessage {
  __type?: "DescribeAccountAttributesMessage";
}

export namespace DescribeAccountAttributesMessage {
  export function isa(o: any): o is DescribeAccountAttributesMessage {
    return __isa(o, "DescribeAccountAttributesMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeCertificatesMessage {
  __type?: "DescribeCertificatesMessage";
  /**
   * <p>The user-supplied certificate identifier. If this parameter is specified, information for only the identified certificate is returned. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match an existing CertificateIdentifier.</p>
   *             </li>
   *          </ul>
   */
  CertificateIdentifier?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeCertificates</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCertificatesMessage {
  export function isa(o: any): o is DescribeCertificatesMessage {
    return __isa(o, "DescribeCertificatesMessage");
  }
}

export interface DescribeCustomAvailabilityZonesMessage {
  __type?: "DescribeCustomAvailabilityZonesMessage";
  /**
   * <p>The custom AZ identifier. If this parameter is specified, information from only the specific custom AZ is returned.</p>
   */
  CustomAvailabilityZoneId?: string;

  /**
   * <p>A filter that specifies one or more custom AZs to describe.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeCustomAvailabilityZones</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeCustomAvailabilityZonesMessage {
  export function isa(o: any): o is DescribeCustomAvailabilityZonesMessage {
    return __isa(o, "DescribeCustomAvailabilityZonesMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBClusterBacktracksMessage {
  __type?: "DescribeDBClusterBacktracksMessage";
  /**
   * <p>If specified, this value is the backtrack identifier of the backtrack to be
   *             described.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must contain a valid universally unique identifier (UUID). For more
   *                     information about UUIDs, see <a href="http://www.ietf.org/rfc/rfc4122.txt">A Universally Unique Identifier
   *                         (UUID) URN Namespace</a>.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>123e4567-e89b-12d3-a456-426655440000</code>
   *         </p>
   */
  BacktrackIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster to be described. This parameter is
   *             stored as a lowercase string.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>A filter that specifies one or more DB clusters to describe. Supported filters
   *             include the following:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                     <code>db-cluster-backtrack-id</code> - Accepts backtrack identifiers. The
   *                     results list includes information about only the backtracks identified by these
   *                     identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-cluster-backtrack-status</code> - Accepts any of the following backtrack status values:</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>applying</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>completed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>failed</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>pending</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *                 <p>The results list includes information about only the backtracks identified
   *                     by these values.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *             <code>DescribeDBClusterBacktracks</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterBacktracksMessage {
  export function isa(o: any): o is DescribeDBClusterBacktracksMessage {
    return __isa(o, "DescribeDBClusterBacktracksMessage");
  }
}

export interface DescribeDBClusterEndpointsMessage {
  __type?: "DescribeDBClusterEndpointsMessage";
  /**
   * <p>The identifier of the endpoint to describe. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier?: string;

  /**
   * <p>The DB cluster identifier of the DB cluster associated with the endpoint. This parameter is
   *             stored as a lowercase string.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A set of name-value pairs that define which endpoints to include in the output.
   *        The filters are specified as name-value pairs, in the format
   *        <code>Name=<i>endpoint_type</i>,Values=<i>endpoint_type1</i>,<i>endpoint_type2</i>,...</code>.
   *        <code>Name</code> can be one of: <code>db-cluster-endpoint-type</code>, <code>db-cluster-endpoint-custom-type</code>, <code>db-cluster-endpoint-id</code>, <code>db-cluster-endpoint-status</code>.
   *          <code>Values</code> for the <code> db-cluster-endpoint-type</code> filter can be one or more of: <code>reader</code>, <code>writer</code>, <code>custom</code>.
   *        <code>Values</code> for the <code>db-cluster-endpoint-custom-type</code> filter can be one or more of: <code>reader</code>, <code>any</code>.
   *        <code>Values</code> for the <code>db-cluster-endpoint-status</code> filter can be one or more of: <code>available</code>, <code>creating</code>, <code>deleting</code>, <code>modifying</code>.
   *      </p>
   */
  Filters?: Array<Filter>;

  /**
   * <p> An optional pagination token provided by a previous
   *             <code>DescribeDBClusterEndpoints</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterEndpointsMessage {
  export function isa(o: any): o is DescribeDBClusterEndpointsMessage {
    return __isa(o, "DescribeDBClusterEndpointsMessage");
  }
}

/**
 * <p></p>
 */
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
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBClusterParameterGroups</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *       </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClusterParameterGroupsMessage {
  export function isa(o: any): o is DescribeDBClusterParameterGroupsMessage {
    return __isa(o, "DescribeDBClusterParameterGroupsMessage");
  }
}

/**
 * <p></p>
 */
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
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *       <code>DescribeDBClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *       The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>
   *       A value that indicates to return only parameters for a specific source.
   *       Parameter sources can be <code>engine</code>, <code>service</code>,
   *       or <code>customer</code>.
   *     </p>
   */
  Source?: string;
}

export namespace DescribeDBClusterParametersMessage {
  export function isa(o: any): o is DescribeDBClusterParametersMessage {
    return __isa(o, "DescribeDBClusterParametersMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBClusterSnapshotAttributesMessage {
  __type?: "DescribeDBClusterSnapshotAttributesMessage";
  /**
   * <p>The identifier for the DB cluster snapshot to describe the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBClusterSnapshotAttributesMessage {
  export function isa(o: any): o is DescribeDBClusterSnapshotAttributesMessage {
    return __isa(o, "DescribeDBClusterSnapshotAttributesMessage");
  }
}

export interface DescribeDBClusterSnapshotAttributesResult {
  __type?: "DescribeDBClusterSnapshotAttributesResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace DescribeDBClusterSnapshotAttributesResult {
  export function isa(o: any): o is DescribeDBClusterSnapshotAttributesResult {
    return __isa(o, "DescribeDBClusterSnapshotAttributesResult");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBClusterSnapshotsMessage {
  __type?: "DescribeDBClusterSnapshotsMessage";
  /**
   * <p>The ID of the DB cluster to retrieve the list of DB cluster snapshots for.
   *             This parameter can't be used in conjunction with the
   *             <code>DBClusterSnapshotIdentifier</code> parameter.
   *             This parameter isn't case-sensitive.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>A specific DB cluster snapshot identifier to describe.
   *             This parameter can't be used in conjunction with the
   *             <code>DBClusterIdentifier</code> parameter.
   *             This value is stored as a lowercase string.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBClusterSnapshot.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBClusterSnapshotIdentifier?: string;

  /**
   * <p>A filter that specifies one or more DB cluster snapshots to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-cluster-snapshot-id</code> - Accepts DB cluster snapshot identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-type</code> - Accepts types of DB cluster snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts names of database engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied
   *             or restored by any AWS account. By default, the public snapshots are not included.</p>
   *         <p>You can share a manual DB cluster snapshot  as public by using the <a>ModifyDBClusterSnapshotAttribute</a> API action.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>A value that indicates whether to include shared manual DB cluster snapshots
   *             from other AWS accounts that this AWS account has been given
   *             permission to copy or restore. By default, these snapshots are not included.</p>
   *         <p>You can give an AWS account permission to restore a manual DB cluster snapshot from
   *             another AWS account by the <code>ModifyDBClusterSnapshotAttribute</code> API action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusterSnapshots</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The type of DB cluster snapshots to be returned. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all DB cluster snapshots that have been automatically taken by
   *               Amazon RDS for my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all DB cluster snapshots that have been taken by my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual DB cluster snapshots that have been shared to my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all DB cluster snapshots that have been marked as public.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual DB cluster snapshots are
   *           returned. You can include shared DB cluster snapshots with these results by enabling the <code>IncludeShared</code>
   *           parameter. You can include public DB cluster snapshots with these results by enabling the
   *           <code>IncludePublic</code> parameter.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values
   *           of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *           set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *           <code>public</code>.</p>
   */
  SnapshotType?: string;
}

export namespace DescribeDBClusterSnapshotsMessage {
  export function isa(o: any): o is DescribeDBClusterSnapshotsMessage {
    return __isa(o, "DescribeDBClusterSnapshotsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBClustersMessage {
  __type?: "DescribeDBClustersMessage";
  /**
   * <p>The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.</p>
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
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>Optional Boolean parameter that specifies whether the output includes information about clusters
   *           shared from other AWS accounts.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>An optional pagination token provided by a previous
   *             <code>DescribeDBClusters</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBClustersMessage {
  export function isa(o: any): o is DescribeDBClustersMessage {
    return __isa(o, "DescribeDBClustersMessage");
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
   * <p>A value that indicates whether only the default version of the specified engine or engine and major version combination is returned.</p>
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
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>A value that indicates whether to include engine versions that aren't available in the list. The default is to list only available engine versions.</p>
   */
  IncludeAll?: boolean;

  /**
   * <p>A value that indicates whether to list the supported character sets for each engine version.</p>
   *          <p>If this parameter is enabled and the requested engine supports the <code>CharacterSetName</code> parameter for <code>CreateDBInstance</code>,
   *           the response includes a list of supported character sets for each engine version.
   *       </p>
   */
  ListSupportedCharacterSets?: boolean;

  /**
   * <p>A value that indicates whether to list the supported time zones for each engine version.</p>
   *         <p>If this parameter is enabled and the requested engine supports the <code>TimeZone</code> parameter for <code>CreateDBInstance</code>,
   *             the response includes a list of supported time zones for each engine version.
   *         </p>
   */
  ListSupportedTimezones?: boolean;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *     The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *     included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBEngineVersionsMessage {
  export function isa(o: any): o is DescribeDBEngineVersionsMessage {
    return __isa(o, "DescribeDBEngineVersionsMessage");
  }
}

/**
 * <p>Parameter input for DescribeDBInstanceAutomatedBackups. </p>
 */
export interface DescribeDBInstanceAutomatedBackupsMessage {
  __type?: "DescribeDBInstanceAutomatedBackupsMessage";
  /**
   * <p>(Optional) The user-supplied instance identifier. If this parameter is specified, it must
   *             match the identifier of an existing DB instance. It returns information from the
   *             specific DB instance' automated backup. This parameter isn't case-sensitive. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The resource ID of the DB instance that is the source of
   * 		    the automated backup. This parameter isn't case-sensitive. </p>
   */
  DbiResourceId?: string;

  /**
   * <p>A filter that specifies which resources to return based on status.</p>
   * 		       <p>Supported filters are the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 					             <code>status</code>
   * 				           </p>
   * 			            <ul>
   *                   <li>
   *                      <p>
   *                         <code>active</code> - automated backups for current instances</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>retained</code> - automated backups for deleted instances</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>creating</code> - automated backups that are waiting
   * 			        for the first automated snapshot to be available</p>
   *                   </li>
   *                </ul>
   * 			         </li>
   *             <li>
   *                <p>
   * 		                <code>db-instance-id</code> - Accepts DB instance identifiers and
   * 		        Amazon Resource Names (ARNs) for DB instances. The results list includes only information about
   * 		        the DB instance automated backupss identified by these ARNs.</p>
   * 		          </li>
   *             <li>
   *                <p>
   * 		                <code>dbi-resource-id</code> - Accepts DB instance resource identifiers and DB
   * 		        Amazon Resource Names (ARNs) for DB instances. The results list includes only information about
   * 		        the DB instance resources identified by these ARNs.</p>
   * 		          </li>
   *          </ul>
   * 		       <p>Returns all resources by default. The status for each resource is specified in the response.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The pagination token provided in the previous request. If this parameter is specified the response
   * 			includes only records beyond the marker, up to <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified
   * 			<code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   * 			you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBInstanceAutomatedBackupsMessage {
  export function isa(o: any): o is DescribeDBInstanceAutomatedBackupsMessage {
    return __isa(o, "DescribeDBInstanceAutomatedBackupsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBInstancesMessage {
  __type?: "DescribeDBInstancesMessage";
  /**
   * <p>The user-supplied instance identifier. If this parameter is specified, information from only the specific DB instance is returned. This parameter isn't case-sensitive.</p>
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
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB instances associated with the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *               instance Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB instances identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dbi-resource-id</code> - Accepts DB instance resource identifiers. The results list will
   *               only include information about the DB instances identified by these DB instance resource identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>domain</code> - Accepts Active Directory directory IDs. The results list will only
   *               include information about the DB instances associated with these domains.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts engine names. The results list will only include information
   *               about the DB instances for these engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBInstances</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBInstancesMessage {
  export function isa(o: any): o is DescribeDBInstancesMessage {
    return __isa(o, "DescribeDBInstancesMessage");
  }
}

/**
 * <p>This data type is used as a response element to <code>DescribeDBLogFiles</code>.</p>
 */
export interface DescribeDBLogFilesDetails {
  __type?: "DescribeDBLogFilesDetails";
  /**
   * <p>A POSIX timestamp when the last log entry was written.</p>
   */
  LastWritten?: number;

  /**
   * <p>The name of the log file for the specified DB instance.</p>
   */
  LogFileName?: string;

  /**
   * <p>The size, in bytes, of the log file for the specified DB instance.</p>
   */
  Size?: number;
}

export namespace DescribeDBLogFilesDetails {
  export function isa(o: any): o is DescribeDBLogFilesDetails {
    return __isa(o, "DescribeDBLogFilesDetails");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBLogFilesMessage {
  __type?: "DescribeDBLogFilesMessage";
  /**
   * <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>Filters the available log files for files written since the specified date, in POSIX timestamp format with milliseconds.</p>
   */
  FileLastWritten?: number;

  /**
   * <p>Filters the available log files for files larger than the specified size.</p>
   */
  FileSize?: number;

  /**
   * <p>Filters the available log files for log file names that contain the specified string.</p>
   */
  FilenameContains?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The pagination token provided in the previous request. If this parameter is specified the response includes only records beyond the marker, up to MaxRecords.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the specified MaxRecords value, a pagination token called a marker is included in the response so you can retrieve the remaining results.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBLogFilesMessage {
  export function isa(o: any): o is DescribeDBLogFilesMessage {
    return __isa(o, "DescribeDBLogFilesMessage");
  }
}

/**
 * <p>
 *             The response from a call to <code>DescribeDBLogFiles</code>.
 *         </p>
 */
export interface DescribeDBLogFilesResponse {
  __type?: "DescribeDBLogFilesResponse";
  /**
   * <p>The DB log files returned.</p>
   */
  DescribeDBLogFiles?: Array<DescribeDBLogFilesDetails>;

  /**
   * <p>A pagination token that can be used in a subsequent DescribeDBLogFiles request.</p>
   */
  Marker?: string;
}

export namespace DescribeDBLogFilesResponse {
  export function isa(o: any): o is DescribeDBLogFilesResponse {
    return __isa(o, "DescribeDBLogFilesResponse");
  }
}

/**
 * <p></p>
 */
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
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBParameterGroups</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBParameterGroupsMessage {
  export function isa(o: any): o is DescribeDBParameterGroupsMessage {
    return __isa(o, "DescribeDBParameterGroupsMessage");
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
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBParameters</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
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
    return __isa(o, "DescribeDBParametersMessage");
  }
}

export interface DescribeDBProxiesRequest {
  __type?: "DescribeDBProxiesRequest";
  /**
   * <p>The name of the DB proxy.</p>
   */
  DBProxyName?: string;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *           than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *           included in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBProxiesRequest {
  export function isa(o: any): o is DescribeDBProxiesRequest {
    return __isa(o, "DescribeDBProxiesRequest");
  }
}

export interface DescribeDBProxiesResponse {
  __type?: "DescribeDBProxiesResponse";
  /**
   * <p>A return value representing an arbitrary number of <code>DBProxy</code> data structures.</p>
   */
  DBProxies?: Array<DBProxy>;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;
}

export namespace DescribeDBProxiesResponse {
  export function isa(o: any): o is DescribeDBProxiesResponse {
    return __isa(o, "DescribeDBProxiesResponse");
  }
}

export interface DescribeDBProxyTargetGroupsRequest {
  __type?: "DescribeDBProxyTargetGroupsRequest";
  /**
   * <p>The identifier of the <code>DBProxy</code> associated with the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that the remaining
   *         results can be retrieved.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code> to describe.</p>
   */
  TargetGroupName?: string;
}

export namespace DescribeDBProxyTargetGroupsRequest {
  export function isa(o: any): o is DescribeDBProxyTargetGroupsRequest {
    return __isa(o, "DescribeDBProxyTargetGroupsRequest");
  }
}

export interface DescribeDBProxyTargetGroupsResponse {
  __type?: "DescribeDBProxyTargetGroupsResponse";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>An arbitrary number of <code>DBProxyTargetGroup</code> objects, containing details of the corresponding target groups.</p>
   */
  TargetGroups?: Array<DBProxyTargetGroup>;
}

export namespace DescribeDBProxyTargetGroupsResponse {
  export function isa(o: any): o is DescribeDBProxyTargetGroupsResponse {
    return __isa(o, "DescribeDBProxyTargetGroupsResponse");
  }
}

export interface DescribeDBProxyTargetsRequest {
  __type?: "DescribeDBProxyTargetsRequest";
  /**
   * <p>The identifier of the <code>DBProxyTarget</code> to describe.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>This parameter is not currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that the remaining
   *         results can be retrieved.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code> to describe.</p>
   */
  TargetGroupName?: string;
}

export namespace DescribeDBProxyTargetsRequest {
  export function isa(o: any): o is DescribeDBProxyTargetsRequest {
    return __isa(o, "DescribeDBProxyTargetsRequest");
  }
}

export interface DescribeDBProxyTargetsResponse {
  __type?: "DescribeDBProxyTargetsResponse";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>An arbitrary number of <code>DBProxyTarget</code> objects, containing details of the corresponding targets.</p>
   */
  Targets?: Array<DBProxyTarget>;
}

export namespace DescribeDBProxyTargetsResponse {
  export function isa(o: any): o is DescribeDBProxyTargetsResponse {
    return __isa(o, "DescribeDBProxyTargetsResponse");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBSecurityGroupsMessage {
  __type?: "DescribeDBSecurityGroupsMessage";
  /**
   * <p>The name of the DB security group to return details for.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBSecurityGroups</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBSecurityGroupsMessage {
  export function isa(o: any): o is DescribeDBSecurityGroupsMessage {
    return __isa(o, "DescribeDBSecurityGroupsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotAttributesMessage {
  __type?: "DescribeDBSnapshotAttributesMessage";
  /**
   * <p>The identifier for the DB snapshot to describe the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;
}

export namespace DescribeDBSnapshotAttributesMessage {
  export function isa(o: any): o is DescribeDBSnapshotAttributesMessage {
    return __isa(o, "DescribeDBSnapshotAttributesMessage");
  }
}

export interface DescribeDBSnapshotAttributesResult {
  __type?: "DescribeDBSnapshotAttributesResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace DescribeDBSnapshotAttributesResult {
  export function isa(o: any): o is DescribeDBSnapshotAttributesResult {
    return __isa(o, "DescribeDBSnapshotAttributesResult");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBSnapshotsMessage {
  __type?: "DescribeDBSnapshotsMessage";
  /**
   * <p>The ID of the DB instance to retrieve the list of DB snapshots for.
   *         This parameter can't be used in conjunction with <code>DBSnapshotIdentifier</code>.
   *         This parameter isn't case-sensitive.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>
   *         A specific DB snapshot identifier to describe. This parameter can't be used in conjunction with <code>DBInstanceIdentifier</code>.
   *             This value is stored as a lowercase string.
   *         </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the identifier of an existing DBSnapshot.</p>
   *             </li>
   *             <li>
   *                <p>If this identifier is for an automated snapshot, the <code>SnapshotType</code> parameter must also be specified.</p>
   *             </li>
   *          </ul>
   */
  DBSnapshotIdentifier?: string;

  /**
   * <p>A specific DB resource ID to describe.</p>
   */
  DbiResourceId?: string;

  /**
   * <p>A filter that specifies one or more DB snapshots to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *               instance Amazon Resource Names (ARNs).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-snapshot-id</code> - Accepts DB snapshot identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dbi-resource-id</code> - Accepts identifiers of source DB instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>snapshot-type</code> - Accepts types of DB snapshots.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts names of database engines.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>A value that indicates whether to include manual DB cluster snapshots that are public and can be copied
   *           or restored by any AWS account. By default, the public snapshots are not included.</p>
   *          <p>You can share a manual DB snapshot as public by using the <a>ModifyDBSnapshotAttribute</a> API.</p>
   */
  IncludePublic?: boolean;

  /**
   * <p>A value that indicates whether to include shared manual DB cluster snapshots
   *           from other AWS accounts that this AWS account has been given
   *           permission to copy or restore. By default, these snapshots are not included.</p>
   *          <p>You can give an AWS account permission to restore a manual DB snapshot from
   *     another AWS account by using the <code>ModifyDBSnapshotAttribute</code> API action.</p>
   */
  IncludeShared?: boolean;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeDBSnapshots</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The type of snapshots to be returned. You can specify one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>automated</code> - Return all DB snapshots that have been automatically taken by
   *       Amazon RDS for my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>manual</code> - Return all DB snapshots that have been taken by my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>shared</code> - Return all manual DB snapshots that have been shared to my AWS account.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>public</code> - Return all DB snapshots that have been marked as public.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>awsbackup</code> - Return the DB snapshots managed by the AWS Backup service.</p>
   *               <p>For information about AWS Backup, see the
   *                   <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html">
   *                       <i>AWS Backup Developer Guide.</i>
   *                   </a>
   *                </p>
   *               <p>The <code>awsbackup</code> type does not apply to Aurora.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify a <code>SnapshotType</code> value, then both automated and manual snapshots are
   *       returned. Shared and public DB snapshots are not included in the returned results by default.
   *       You can include shared snapshots with these results by enabling the <code>IncludeShared</code>
   *       parameter. You can include public snapshots with these results by enabling the
   *       <code>IncludePublic</code> parameter.</p>
   *          <p>The <code>IncludeShared</code> and <code>IncludePublic</code> parameters don't apply for <code>SnapshotType</code> values
   *       of <code>manual</code> or <code>automated</code>. The <code>IncludePublic</code> parameter doesn't apply when <code>SnapshotType</code> is
   *       set to <code>shared</code>. The <code>IncludeShared</code> parameter doesn't apply when <code>SnapshotType</code> is set to
   *       <code>public</code>.</p>
   */
  SnapshotType?: string;
}

export namespace DescribeDBSnapshotsMessage {
  export function isa(o: any): o is DescribeDBSnapshotsMessage {
    return __isa(o, "DescribeDBSnapshotsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeDBSubnetGroupsMessage {
  __type?: "DescribeDBSubnetGroupsMessage";
  /**
   * <p>The name of the DB subnet group to return details for.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *             An optional pagination token provided by a previous DescribeDBSubnetGroups request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *         a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeDBSubnetGroupsMessage {
  export function isa(o: any): o is DescribeDBSubnetGroupsMessage {
    return __isa(o, "DescribeDBSubnetGroupsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultClusterParametersMessage {
  __type?: "DescribeEngineDefaultClusterParametersMessage";
  /**
   * <p>The name of the DB cluster parameter group family to return engine parameter information for.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *       An optional pagination token provided by a previous
   *       <code>DescribeEngineDefaultClusterParameters</code> request.
   *       If this parameter is specified, the response includes
   *       only records beyond the marker,
   *       up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *       The maximum number of records to include in the response.
   *       If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultClusterParametersMessage {
  export function isa(
    o: any
  ): o is DescribeEngineDefaultClusterParametersMessage {
    return __isa(o, "DescribeEngineDefaultClusterParametersMessage");
  }
}

export interface DescribeEngineDefaultClusterParametersResult {
  __type?: "DescribeEngineDefaultClusterParametersResult";
  /**
   * <p>
   *             Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
   *         </p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultClusterParametersResult {
  export function isa(
    o: any
  ): o is DescribeEngineDefaultClusterParametersResult {
    return __isa(o, "DescribeEngineDefaultClusterParametersResult");
  }
}

/**
 * <p></p>
 */
export interface DescribeEngineDefaultParametersMessage {
  __type?: "DescribeEngineDefaultParametersMessage";
  /**
   * <p>The name of the DB parameter group family.</p>
   */
  DBParameterGroupFamily: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         <code>DescribeEngineDefaultParameters</code> request.
   *             If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *           a pagination token called a marker is included in the response so you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEngineDefaultParametersMessage {
  export function isa(o: any): o is DescribeEngineDefaultParametersMessage {
    return __isa(o, "DescribeEngineDefaultParametersMessage");
  }
}

export interface DescribeEngineDefaultParametersResult {
  __type?: "DescribeEngineDefaultParametersResult";
  /**
   * <p>
   *             Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
   *         </p>
   */
  EngineDefaults?: EngineDefaults;
}

export namespace DescribeEngineDefaultParametersResult {
  export function isa(o: any): o is DescribeEngineDefaultParametersResult {
    return __isa(o, "DescribeEngineDefaultParametersResult");
  }
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  __type?: "DescribeEventCategoriesMessage";
  /**
   * <p>This parameter isn't currently supported.</p>
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
    return __isa(o, "DescribeEventCategoriesMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  __type?: "DescribeEventSubscriptionsMessage";
  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the RDS event notification subscription you want to describe.</p>
   */
  SubscriptionName?: string;
}

export namespace DescribeEventSubscriptionsMessage {
  export function isa(o: any): o is DescribeEventSubscriptionsMessage {
    return __isa(o, "DescribeEventSubscriptionsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>The number of minutes to retrieve events for.</p>
   *          <p>Default: 60</p>
   */
  Duration?: number;

  /**
   * <p>
   *         The end of the time interval for which to retrieve events,
   *         specified in ISO 8601 format. For more information about ISO 8601,
   *         go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  EndTime?: Date;

  /**
   * <p>A list of event categories that trigger notifications for a event notification subscription.</p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous
   *         DescribeEvents request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response.
   *         If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *         you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The identifier of the event source for which events are returned. If not specified, then all sources are included in the response.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If SourceIdentifier is supplied, SourceType must also be provided.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBInstance</code>, then a <code>DBInstanceIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSecurityGroup</code>, a <code>DBSecurityGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBParameterGroup</code>, a <code>DBParameterGroupName</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>If the source type is <code>DBSnapshot</code>, a <code>DBSnapshotIdentifier</code> must be supplied.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event source to retrieve events for. If no value is specified, all events are returned.</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>
   *         The beginning of the time interval to retrieve events for,
   *         specified in ISO 8601 format. For more information about ISO 8601,
   *         go to the <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO8601 Wikipedia page.</a>
   *          </p>
   *          <p>Example: 2009-07-08T18:00Z</p>
   */
  StartTime?: Date;
}

export namespace DescribeEventsMessage {
  export function isa(o: any): o is DescribeEventsMessage {
    return __isa(o, "DescribeEventsMessage");
  }
}

export interface DescribeGlobalClustersMessage {
  __type?: "DescribeGlobalClustersMessage";
  /**
   * <p>A filter that specifies one or more global DB clusters to describe.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include information about
   *               the DB clusters identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         The user-supplied DB cluster identifier. If this parameter is specified, information from only the specific DB cluster is returned. This parameter isn't case-sensitive.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match an existing DBClusterIdentifier.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request. If
   *         this parameter is specified, the response includes only records beyond the marker, up to the value
   *         specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>
   *         The maximum number of records to include in the response. If more records exist than the specified
   *         <code>MaxRecords</code> value, a pagination token called a marker is included in the response so that
   *        you can retrieve the remaining results.
   *       </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeGlobalClustersMessage {
  export function isa(o: any): o is DescribeGlobalClustersMessage {
    return __isa(o, "DescribeGlobalClustersMessage");
  }
}

export interface DescribeInstallationMediaMessage {
  __type?: "DescribeInstallationMediaMessage";
  /**
   * <p>A filter that specifies one or more installation media to describe. Supported filters
   *           include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                     <code>custom-availability-zone-id</code> - Accepts custom Availability Zone (AZ)
   *                     identifiers. The results list includes information about only the custom AZs
   *                     identified by these identifiers.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>engine</code> - Accepts database engines. The results list includes information about
   *               only the database engines identified by these identifiers.</p>
   *               <p>For more information about the valid engines for installation media, see <a>ImportInstallationMedia</a>.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId?: string;

  /**
   * <p>An optional pagination token provided by a previous request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker,
   *           up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>An optional pagination token provided by a previous DescribeInstallationMedia request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker, up to the value specified by <code>MaxRecords</code>.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeInstallationMediaMessage {
  export function isa(o: any): o is DescribeInstallationMediaMessage {
    return __isa(o, "DescribeInstallationMediaMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeOptionGroupOptionsMessage {
  __type?: "DescribeOptionGroupOptionsMessage";
  /**
   * <p>A required parameter. Options available for the given engine name are described.</p>
   */
  EngineName: string | undefined;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>If specified, filters the results to include only options for the specified major engine version.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeOptionGroupOptionsMessage {
  export function isa(o: any): o is DescribeOptionGroupOptionsMessage {
    return __isa(o, "DescribeOptionGroupOptionsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeOptionGroupsMessage {
  __type?: "DescribeOptionGroupsMessage";
  /**
   * <p>Filters the list of option groups to only include groups associated with a specific database engine.</p>
   */
  EngineName?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>Filters the list of option groups to only include groups associated with a specific database engine version. If specified, then EngineName must also be specified.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>
   *             An optional pagination token provided by a previous DescribeOptionGroups request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The name of the option group to describe. Can't be supplied together with EngineName or MajorEngineVersion.</p>
   */
  OptionGroupName?: string;
}

export namespace DescribeOptionGroupsMessage {
  export function isa(o: any): o is DescribeOptionGroupsMessage {
    return __isa(o, "DescribeOptionGroupsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeOrderableDBInstanceOptionsMessage {
  __type?: "DescribeOrderableDBInstanceOptionsMessage";
  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The name of the engine to retrieve DB instance options for.</p>
   */
  Engine: string | undefined;

  /**
   * <p>The engine version filter value. Specify this parameter to show only the available offerings matching the specified engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The license model filter value. Specify this parameter to show only the available offerings matching the specified license model.</p>
   */
  LicenseModel?: string;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates whether to show only VPC or non-VPC offerings.</p>
   */
  Vpc?: boolean;
}

export namespace DescribeOrderableDBInstanceOptionsMessage {
  export function isa(o: any): o is DescribeOrderableDBInstanceOptionsMessage {
    return __isa(o, "DescribeOrderableDBInstanceOptionsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  __type?: "DescribePendingMaintenanceActionsMessage";
  /**
   * <p>A filter that specifies one or more resources to return pending maintenance actions for.</p>
   *          <p>Supported filters:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>db-cluster-id</code> - Accepts DB cluster identifiers and DB
   *               cluster Amazon Resource Names (ARNs). The results list will only include pending maintenance
   *               actions for the DB clusters identified by these ARNs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>db-instance-id</code> - Accepts DB instance identifiers and DB
   *             instance ARNs. The results list will only include pending maintenance
   *             actions for the DB instances identified by these ARNs.</p>
   *             </li>
   *          </ul>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>
   *             The maximum number of records to include in the response.
   *             If more records exist than the specified <code>MaxRecords</code> value,
   *             a pagination token called a marker is included in the response so that
   *             you can retrieve the remaining results.
   *         </p>
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
    return __isa(o, "DescribePendingMaintenanceActionsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeReservedDBInstancesMessage {
  __type?: "DescribeReservedDBInstancesMessage";
  /**
   * <p>The DB instance class filter value. Specify this parameter to show only those reservations matching the specified DB instances class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p>
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The lease identifier filter value. Specify this parameter to show only the reservation that matches the specified lease ID.</p>
   *          <note>
   *             <p>AWS Support might request the lease ID for an issue related to a reserved DB instance.</p>
   *          </note>
   */
  LeaseId?: string;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *     The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *           included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates whether to show only those reservations that support Multi-AZ.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p>
   *          <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>The product description filter value. Specify this parameter to show only those reservations matching the specified product description.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The reserved DB instance identifier filter value. Specify this parameter to show only the reservation that matches the specified reservation ID.</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The offering identifier filter value. Specify this parameter to show only purchased reservations matching the specified offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;
}

export namespace DescribeReservedDBInstancesMessage {
  export function isa(o: any): o is DescribeReservedDBInstancesMessage {
    return __isa(o, "DescribeReservedDBInstancesMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeReservedDBInstancesOfferingsMessage {
  __type?: "DescribeReservedDBInstancesOfferingsMessage";
  /**
   * <p>The DB instance class filter value. Specify this parameter to show only the available offerings matching the specified DB instance class.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Duration filter value, specified in years or seconds. Specify this parameter to show only reservations for this duration.</p>
   *          <p>Valid Values: <code>1 | 3 | 31536000 | 94608000</code>
   *          </p>
   */
  Duration?: string;

  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>
   *     The maximum number of records to include in the response.
   *     If more than the <code>MaxRecords</code> value is available, a pagination token called a marker is
   *     included in the response so you can retrieve the remaining results.
   *     </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>A value that indicates whether to show only those reservations that support Multi-AZ.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The offering type filter value. Specify this parameter to show only the available offerings matching the specified offering type.</p>
   *          <p>Valid Values: <code>"Partial Upfront" | "All Upfront" | "No Upfront" </code>
   *          </p>
   */
  OfferingType?: string;

  /**
   * <p>Product description filter value. Specify this parameter to show only the available offerings that contain the specified product description.</p>
   *          <note>
   *             <p>The results show offerings that partially match the filter value.</p>
   *          </note>
   */
  ProductDescription?: string;

  /**
   * <p>The offering identifier filter value. Specify this parameter to show only the available offering that matches the specified reservation identifier.</p>
   *          <p>Example: <code>438012d3-4052-4cc7-b2e3-8d3372e0e706</code>
   *          </p>
   */
  ReservedDBInstancesOfferingId?: string;
}

export namespace DescribeReservedDBInstancesOfferingsMessage {
  export function isa(
    o: any
  ): o is DescribeReservedDBInstancesOfferingsMessage {
    return __isa(o, "DescribeReservedDBInstancesOfferingsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeSourceRegionsMessage {
  __type?: "DescribeSourceRegionsMessage";
  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>An optional pagination token provided by a previous <code>DescribeSourceRegions</code> request. If this parameter is specified, the response
   *             includes only records beyond the marker, up to the value specified by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of records to include in the response. If more records exist
   *             than the specified <code>MaxRecords</code> value, a pagination token called a marker is
   *             included in the response so you can retrieve the remaining results. </p>
   *         <p>Default: 100</p>
   *         <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The source AWS Region name. For example, <code>us-east-1</code>.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must specify a valid AWS Region name.</p>
   *             </li>
   *          </ul>
   */
  RegionName?: string;
}

export namespace DescribeSourceRegionsMessage {
  export function isa(o: any): o is DescribeSourceRegionsMessage {
    return __isa(o, "DescribeSourceRegionsMessage");
  }
}

/**
 * <p></p>
 */
export interface DescribeValidDBInstanceModificationsMessage {
  __type?: "DescribeValidDBInstanceModificationsMessage";
  /**
   * <p>The customer identifier or the ARN of your DB instance.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace DescribeValidDBInstanceModificationsMessage {
  export function isa(
    o: any
  ): o is DescribeValidDBInstanceModificationsMessage {
    return __isa(o, "DescribeValidDBInstanceModificationsMessage");
  }
}

export interface DescribeValidDBInstanceModificationsResult {
  __type?: "DescribeValidDBInstanceModificationsResult";
  /**
   * <p>Information about valid modifications that you can make to your DB instance.
   *             Contains the result of a successful call to the
   *             <code>DescribeValidDBInstanceModifications</code> action.
   *             You can use this information when you call
   *             <code>ModifyDBInstance</code>.
   *         </p>
   */
  ValidDBInstanceModificationsMessage?: ValidDBInstanceModificationsMessage;
}

export namespace DescribeValidDBInstanceModificationsResult {
  export function isa(o: any): o is DescribeValidDBInstanceModificationsResult {
    return __isa(o, "DescribeValidDBInstanceModificationsResult");
  }
}

/**
 * <p>An Active Directory Domain membership record associated with the DB instance.</p>
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
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined, pending-join, failed etc).</p>
   */
  Status?: string;
}

export namespace DomainMembership {
  export function isa(o: any): o is DomainMembership {
    return __isa(o, "DomainMembership");
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
    return __isa(o, "DoubleRange");
  }
}

/**
 * <p>This data type is used as a response element to <code>DownloadDBLogFilePortion</code>.</p>
 */
export interface DownloadDBLogFilePortionDetails {
  __type?: "DownloadDBLogFilePortionDetails";
  /**
   * <p>Boolean value that if true, indicates there is more data to be downloaded.</p>
   */
  AdditionalDataPending?: boolean;

  /**
   * <p>Entries from the specified log file.</p>
   */
  LogFileData?: string;

  /**
   * <p>A pagination token that can be used in a subsequent DownloadDBLogFilePortion request.</p>
   */
  Marker?: string;
}

export namespace DownloadDBLogFilePortionDetails {
  export function isa(o: any): o is DownloadDBLogFilePortionDetails {
    return __isa(o, "DownloadDBLogFilePortionDetails");
  }
}

/**
 * <p></p>
 */
export interface DownloadDBLogFilePortionMessage {
  __type?: "DownloadDBLogFilePortionMessage";
  /**
   * <p>The customer-assigned name of the DB instance that contains the log files you want to list.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBInstance.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the log file to be downloaded.</p>
   */
  LogFileName: string | undefined;

  /**
   * <p>The pagination token provided in the previous request or "0". If the Marker parameter is specified the response includes only records beyond the marker until the end of the file or up to NumberOfLines.</p>
   */
  Marker?: string;

  /**
   * <p>The number of lines to download. If the number of lines specified results in a file over 1 MB in size, the file is truncated at 1 MB in size.</p>
   *          <p>If the NumberOfLines parameter is specified, then the block of lines returned can be from the beginning
   *             or the end of the log file, depending on the value of the Marker parameter.</p>
   *             <ul>
   *             <li>
   *                <p>If neither Marker or NumberOfLines are specified, the entire log file is returned up to a
   *               maximum of 10000 lines, starting with the most recent log entries first.</p>
   *             </li>
   *             <li>
   *                <p>If
   *               NumberOfLines is specified and Marker isn't specified, then the most recent lines from the end
   *                     of the log file are returned.</p>
   *             </li>
   *             <li>
   *                <p>If Marker is specified as "0", then the specified
   *                       number of lines from the beginning of the log file are returned.</p>
   *             </li>
   *             <li>
   *                <p>You can
   *                         download the log file in blocks of lines by specifying the size of the block using
   *                     the NumberOfLines parameter, and by specifying a value of "0" for the Marker parameter in your
   *                     first request. Include the Marker value returned in the response as the Marker value for the next
   *                     request, continuing until the AdditionalDataPending response element returns false.</p>
   *             </li>
   *          </ul>
   */
  NumberOfLines?: number;
}

export namespace DownloadDBLogFilePortionMessage {
  export function isa(o: any): o is DownloadDBLogFilePortionMessage {
    return __isa(o, "DownloadDBLogFilePortionMessage");
  }
}

/**
 * <p>This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AuthorizeDBSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBSecurityGroups</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RevokeDBSecurityGroupIngress</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface EC2SecurityGroup {
  __type?: "EC2SecurityGroup";
  /**
   * <p>Specifies the id of the EC2 security group.</p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>Specifies the name of the EC2 security group.</p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>
   *         Specifies the AWS ID of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> field.
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;

  /**
   * <p>Provides the status of the EC2 security group. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   */
  Status?: string;
}

export namespace EC2SecurityGroup {
  export function isa(o: any): o is EC2SecurityGroup {
    return __isa(o, "EC2SecurityGroup");
  }
}

/**
 * <p>This data type represents the information you need to connect to an Amazon RDS DB instance.
 *       This data type is used as a response element in the following actions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteDBInstance</code>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>For the data structure that represents Amazon Aurora DB cluster endpoints,
 *         see <code>DBClusterEndpoint</code>.</p>
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
    return __isa(o, "Endpoint");
  }
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeEngineDefaultParameters</code> action.
 *         </p>
 */
export interface EngineDefaults {
  __type?: "EngineDefaults";
  /**
   * <p>Specifies the name of the DB parameter group family that the engine default parameters apply to.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             EngineDefaults request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>Contains a list of engine default parameters.</p>
   */
  Parameters?: Array<Parameter>;
}

export namespace EngineDefaults {
  export function isa(o: any): o is EngineDefaults {
    return __isa(o, "EngineDefaults");
  }
}

export enum EngineFamily {
  MYSQL = "MYSQL"
}

/**
 * <p>
 *         This data type is used as a response element in the <code>DescribeEvents</code> action.
 *         </p>
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
    return __isa(o, "Event");
  }
}

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventCategories</code> action.</p>
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
    return __isa(o, "EventCategoriesMap");
  }
}

/**
 * <p>Data returned from the <b>DescribeEventCategories</b> action.</p>
 */
export interface EventCategoriesMessage {
  __type?: "EventCategoriesMessage";
  /**
   * <p>A list of EventCategoriesMap data types.</p>
   */
  EventCategoriesMapList?: Array<EventCategoriesMap>;
}

export namespace EventCategoriesMessage {
  export function isa(o: any): o is EventCategoriesMessage {
    return __isa(o, "EventCategoriesMessage");
  }
}

/**
 * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
 */
export interface EventSubscription {
  __type?: "EventSubscription";
  /**
   * <p>The RDS event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The AWS customer account associated with the RDS event notification subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>A Boolean value indicating if the subscription is enabled. True indicates the subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of event categories for the RDS event notification subscription.</p>
   */
  EventCategoriesList?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) for the event subscription.</p>
   */
  EventSubscriptionArn?: string;

  /**
   * <p>The topic ARN of the RDS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of source IDs for the RDS event notification subscription.</p>
   */
  SourceIdsList?: Array<string>;

  /**
   * <p>The source type for the RDS event notification subscription.</p>
   */
  SourceType?: string;

  /**
   * <p>The status of the RDS event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission | topic-not-exist</p>
   *          <p>The status "no-permission" indicates that RDS no longer has permission to post to the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the subscription was created.</p>
   */
  Status?: string;

  /**
   * <p>The time the RDS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;
}

export namespace EventSubscription {
  export function isa(o: any): o is EventSubscription {
    return __isa(o, "EventSubscription");
  }
}

/**
 * <p>Data returned by the <b>DescribeEventSubscriptions</b> action.</p>
 */
export interface EventSubscriptionsMessage {
  __type?: "EventSubscriptionsMessage";
  /**
   * <p>A list of EventSubscriptions data types.</p>
   */
  EventSubscriptionsList?: Array<EventSubscription>;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             DescribeOrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;
}

export namespace EventSubscriptionsMessage {
  export function isa(o: any): o is EventSubscriptionsMessage {
    return __isa(o, "EventSubscriptionsMessage");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeEvents</code> action.
 *         </p>
 */
export interface EventsMessage {
  __type?: "EventsMessage";
  /**
   * <p>
   *         A list of <code>Event</code> instances.
   *         </p>
   */
  Events?: Array<Event>;

  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             Events request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;
}

export namespace EventsMessage {
  export function isa(o: any): o is EventsMessage {
    return __isa(o, "EventsMessage");
  }
}

/**
 * <p></p>
 */
export interface FailoverDBClusterMessage {
  __type?: "FailoverDBClusterMessage";
  /**
   * <p>A DB cluster identifier to force a failover for. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the instance to promote to the primary instance.</p>
   *         <p>You must specify the instance identifier for an Aurora Replica in the DB cluster.
   *         For example, <code>mydbcluster-replica1</code>.</p>
   */
  TargetDBInstanceIdentifier?: string;
}

export namespace FailoverDBClusterMessage {
  export function isa(o: any): o is FailoverDBClusterMessage {
    return __isa(o, "FailoverDBClusterMessage");
  }
}

export interface FailoverDBClusterResult {
  __type?: "FailoverDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace FailoverDBClusterResult {
  export function isa(o: any): o is FailoverDBClusterResult {
    return __isa(o, "FailoverDBClusterResult");
  }
}

/**
 * <p>A filter name and value pair that is used to return a more specific list of results
 *             from a describe operation. Filters can be used to match a set of resources by specific
 *             criteria, such as IDs. The filters supported by a describe operation are documented
 *             with the describe operation.</p>
 *         <note>
 *             <p>Currently, wildcards are not supported in filters.</p>
 *         </note>
 *         <p>The following actions can be filtered:</p>
 *         <ul>
 *             <li>
 *                <p>
 *                   <code>DescribeDBClusterBacktracks</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBClusterEndpoints</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBClusters</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribePendingMaintenanceActions</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter. Filter names are case-sensitive.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more filter values. Filter values are case-sensitive.</p>
   */
  Values: Array<string> | undefined;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return __isa(o, "Filter");
  }
}

/**
 * <p>A data type representing an Aurora global database.</p>
 */
export interface GlobalCluster {
  __type?: "GlobalCluster";
  /**
   * <p>
   *         The default database name within the new global database cluster.
   *       </p>
   */
  DatabaseName?: string;

  /**
   * <p>
   *         The deletion protection setting for the new global database cluster.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>
   *         The Aurora database engine used by the global database cluster.
   *       </p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the global database cluster.</p>
   */
  GlobalClusterArn?: string;

  /**
   * <p>
   *         Contains a user-supplied global database cluster identifier. This identifier is the unique key that
   *         identifies a global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The list of cluster IDs for secondary clusters within the global database cluster. Currently limited to
   *         1 item.
   *       </p>
   */
  GlobalClusterMembers?: Array<GlobalClusterMember>;

  /**
   * <p>
   *         The AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in
   *         AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.
   *       </p>
   */
  GlobalClusterResourceId?: string;

  /**
   * <p>Specifies the current state of this global database cluster.</p>
   */
  Status?: string;

  /**
   * <p>
   *         The storage encryption setting for the global database cluster.
   *       </p>
   */
  StorageEncrypted?: boolean;
}

export namespace GlobalCluster {
  export function isa(o: any): o is GlobalCluster {
    return __isa(o, "GlobalCluster");
  }
}

/**
 * <p>
 *         A data structure with information about any primary and
 *         secondary clusters associated with an Aurora global database.
 *       </p>
 */
export interface GlobalClusterMember {
  __type?: "GlobalClusterMember";
  /**
   * <p>
   *        The Amazon Resource Name (ARN) for each Aurora cluster.
   *       </p>
   */
  DBClusterArn?: string;

  /**
   * <p>
   *         Specifies whether the Aurora cluster is the primary cluster
   *         (that is, has read-write capability) for the Aurora global
   *         database with which it is associated.
   *       </p>
   */
  IsWriter?: boolean;

  /**
   * <p>
   *         The Amazon Resource Name (ARN) for each read-only secondary cluster
   *         associated with the Aurora global database.
   *       </p>
   */
  Readers?: Array<string>;
}

export namespace GlobalClusterMember {
  export function isa(o: any): o is GlobalClusterMember {
    return __isa(o, "GlobalClusterMember");
  }
}

export interface GlobalClustersMessage {
  __type?: "GlobalClustersMessage";
  /**
   * <p>
   *         The list of global clusters returned by this request.
   *       </p>
   */
  GlobalClusters?: Array<GlobalCluster>;

  /**
   * <p>
   *         An optional pagination token provided by a previous <code>DescribeGlobalClusters</code> request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker, up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;
}

export namespace GlobalClustersMessage {
  export function isa(o: any): o is GlobalClustersMessage {
    return __isa(o, "GlobalClustersMessage");
  }
}

export enum IAMAuthMode {
  DISABLED = "DISABLED",
  REQUIRED = "REQUIRED"
}

/**
 * <p>
 *         This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action.
 *         </p>
 */
export interface IPRange {
  __type?: "IPRange";
  /**
   * <p>Specifies the IP range.</p>
   */
  CIDRIP?: string;

  /**
   * <p>Specifies the status of the IP range. Status can be "authorizing", "authorized", "revoking", and "revoked".</p>
   */
  Status?: string;
}

export namespace IPRange {
  export function isa(o: any): o is IPRange {
    return __isa(o, "IPRange");
  }
}

export interface ImportInstallationMediaMessage {
  __type?: "ImportInstallationMediaMessage";
  /**
   * <p>The identifier of the custom Availability Zone (AZ) to import the installation media to.</p>
   */
  CustomAvailabilityZoneId: string | undefined;

  /**
   * <p>The name of the database engine to be used for this instance.
   *       </p>
   *
   *          <p>The list only includes supported DB engines that require an on-premises
   *           customer provided license.
   *       </p>
   *
   *          <p>Valid Values:
   *       </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine: string | undefined;

  /**
   * <p>The path to the installation medium for the specified DB engine.</p>
   *          <p>Example: <code>SQLServerISO/en_sql_server_2016_enterprise_x64_dvd_8701793.iso</code>
   *          </p>
   */
  EngineInstallationMediaPath: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *          <p>For a list of valid engine versions, call <a>DescribeDBEngineVersions</a>.</p>
   *          <p>The following are the database engines and links to information about the major and minor
   *           versions. The list only includes DB engines that require an on-premises
   *           customer provided license.</p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *
   *          <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport">Version and Feature Support on Amazon RDS</a> in the
   *           <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>The path to the installation medium for the operating system associated with the specified DB engine.</p>
   *         <p>Example: <code>WindowsISO/en_windows_server_2016_x64_dvd_9327751.iso</code>
   *          </p>
   */
  OSInstallationMediaPath: string | undefined;
}

export namespace ImportInstallationMediaMessage {
  export function isa(o: any): o is ImportInstallationMediaMessage {
    return __isa(o, "ImportInstallationMediaMessage");
  }
}

/**
 * <p>Contains the installation media for a DB engine that requires an on-premises
 *           customer provided license, such as Microsoft SQL Server.</p>
 */
export interface InstallationMedia {
  __type?: "InstallationMedia";
  /**
   * <p>The custom Availability Zone (AZ) that contains the installation media.</p>
   */
  CustomAvailabilityZoneId?: string;

  /**
   * <p>The DB engine.</p>
   */
  Engine?: string;

  /**
   * <p>The path to the installation medium for the DB engine.</p>
   */
  EngineInstallationMediaPath?: string;

  /**
   * <p>The engine version of the DB engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>If an installation media failure occurred, the cause of the failure.</p>
   */
  FailureCause?: InstallationMediaFailureCause;

  /**
   * <p>The installation medium ID.</p>
   */
  InstallationMediaId?: string;

  /**
   * <p>The path to the installation medium for the operating system associated with the DB engine.</p>
   */
  OSInstallationMediaPath?: string;

  /**
   * <p>The status of the installation medium.</p>
   */
  Status?: string;
}

export namespace InstallationMedia {
  export function isa(o: any): o is InstallationMedia {
    return __isa(o, "InstallationMedia");
  }
}

/**
 * <p>Contains the cause of an installation media failure. Installation media is used
 *           for a DB engine that requires an on-premises
 *           customer provided license, such as Microsoft SQL Server.</p>
 */
export interface InstallationMediaFailureCause {
  __type?: "InstallationMediaFailureCause";
  /**
   * <p>The reason that an installation media import failed.</p>
   */
  Message?: string;
}

export namespace InstallationMediaFailureCause {
  export function isa(o: any): o is InstallationMediaFailureCause {
    return __isa(o, "InstallationMediaFailureCause");
  }
}

export interface InstallationMediaMessage {
  __type?: "InstallationMediaMessage";
  /**
   * <p>The list of <a>InstallationMedia</a> objects for the AWS account.</p>
   */
  InstallationMedia?: Array<InstallationMedia>;

  /**
   * <p>An optional pagination token provided by a previous
   *           <a>DescribeInstallationMedia</a> request.
   *           If this parameter is specified, the response includes
   *           only records beyond the marker,
   *           up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace InstallationMediaMessage {
  export function isa(o: any): o is InstallationMediaMessage {
    return __isa(o, "InstallationMediaMessage");
  }
}

/**
 * <p></p>
 */
export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  /**
   * <p>This parameter isn't currently supported.</p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The Amazon RDS resource with tags to be listed. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  ResourceName: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export function isa(o: any): o is ListTagsForResourceMessage {
    return __isa(o, "ListTagsForResourceMessage");
  }
}

/**
 * <p>The minimum DB engine version required for each corresponding allowed value for an option setting.</p>
 */
export interface MinimumEngineVersionPerAllowedValue {
  __type?: "MinimumEngineVersionPerAllowedValue";
  /**
   * <p>The allowed value for an option setting.</p>
   */
  AllowedValue?: string;

  /**
   * <p>The minimum DB engine version required for the allowed value.</p>
   */
  MinimumEngineVersion?: string;
}

export namespace MinimumEngineVersionPerAllowedValue {
  export function isa(o: any): o is MinimumEngineVersionPerAllowedValue {
    return __isa(o, "MinimumEngineVersionPerAllowedValue");
  }
}

export interface ModifyCertificatesMessage {
  __type?: "ModifyCertificatesMessage";
  /**
   * <p>The new default certificate identifier to override the current one with.</p>
   *          <p>To determine the valid values, use the <code>describe-certificates</code> AWS CLI
   *             command or the <code>DescribeCertificates</code> API operation.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>A value that indicates whether to remove the override for the default certificate.
   *             If the override is removed, the default certificate is the system
   *             default.</p>
   */
  RemoveCustomerOverride?: boolean;
}

export namespace ModifyCertificatesMessage {
  export function isa(o: any): o is ModifyCertificatesMessage {
    return __isa(o, "ModifyCertificatesMessage");
  }
}

export interface ModifyCertificatesResult {
  __type?: "ModifyCertificatesResult";
  /**
   * <p>A CA certificate for an AWS account.</p>
   */
  Certificate?: Certificate;
}

export namespace ModifyCertificatesResult {
  export function isa(o: any): o is ModifyCertificatesResult {
    return __isa(o, "ModifyCertificatesResult");
  }
}

export interface ModifyCurrentDBClusterCapacityMessage {
  __type?: "ModifyCurrentDBClusterCapacityMessage";
  /**
   * <p>The DB cluster capacity.</p>
   *         <p>When you change the capacity of a paused Aurora Serverless DB cluster, it automatically resumes.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *             </li>
   *          </ul>
   */
  Capacity?: number;

  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>Must match the identifier of an existing DB cluster.</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The amount of time, in seconds, that Aurora Serverless tries to find a scaling point
   *             to perform seamless scaling before enforcing the timeout action. The default is
   *             300.</p>
   *         <ul>
   *             <li>
   *                 <p>Value must be from 10 through 600.</p>
   *             </li>
   *          </ul>
   */
  SecondsBeforeTimeout?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code>, the default, sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code> ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   */
  TimeoutAction?: string;
}

export namespace ModifyCurrentDBClusterCapacityMessage {
  export function isa(o: any): o is ModifyCurrentDBClusterCapacityMessage {
    return __isa(o, "ModifyCurrentDBClusterCapacityMessage");
  }
}

export interface ModifyDBClusterEndpointMessage {
  __type?: "ModifyDBClusterEndpointMessage";
  /**
   * <p>The identifier of the endpoint to modify. This parameter is stored as a lowercase string.</p>
   */
  DBClusterEndpointIdentifier: string | undefined;

  /**
   * <p>The type of the endpoint. One of: <code>READER</code>, <code>WRITER</code>, <code>ANY</code>.</p>
   */
  EndpointType?: string;

  /**
   * <p>List of DB instance identifiers that aren't part of the custom endpoint group.
   *        All other eligible instances are reachable through the custom endpoint.
   *        Only relevant if the list of static members is empty.</p>
   */
  ExcludedMembers?: Array<string>;

  /**
   * <p>List of DB instance identifiers that are part of the custom endpoint group.</p>
   */
  StaticMembers?: Array<string>;
}

export namespace ModifyDBClusterEndpointMessage {
  export function isa(o: any): o is ModifyDBClusterEndpointMessage {
    return __isa(o, "ModifyDBClusterEndpointMessage");
  }
}

/**
 * <p></p>
 */
export interface ModifyDBClusterMessage {
  __type?: "ModifyDBClusterMessage";
  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p>
   *          <p>Constraints: You must allow major version upgrades when specifying a value for the
   *                 <code>EngineVersion</code> parameter that is a different major version than the DB
   *             cluster's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>A value that indicates whether the modifications in this request and
   *       any pending modifications are asynchronously applied
   *       as soon as possible, regardless of the
   *       <code>PreferredMaintenanceWindow</code> setting for the DB cluster.
   *       If this parameter is disabled, changes to the
   *       DB cluster are applied during the next maintenance window.</p>
   *          <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>,
   *       <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If the <code>ApplyImmediately</code>
   *       parameter is disabled, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>,
   *       and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are
   *       applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p>
   *          <p>By default, this parameter is disabled.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p>
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
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster.
   *             The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter isn't case-sensitive.</p>
   *          <p>Constraints: This identifier must match the identifier of an existing DB
   *             cluster.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p>
   *          <note>
   *             <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB
   *                 cluster isn't rebooted automatically. Also, parameter changes aren't
   *                 applied during the next maintenance window but instead are applied immediately.</p>
   *          </note>
   *          <p>Default: The existing name setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with
   *               the <code>AllowMajorVersionUpgrade</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  DBInstanceParameterGroupName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint
   *             is disabled.</p>
   *         <p>When enabled, the HTTP endpoint provides a connectionless web service API for running
   *             SQL queries on the Aurora Serverless DB cluster. You can also query your database
   *             from inside the RDS console with the query editor.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the
   *             <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The version number of the database engine to which you want to upgrade.
   *             Changing this parameter results in an outage. The change is applied during
   *             the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group.
   *             Changing this parameter doesn't result in an outage except in the following case, and the change
   *             is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> is enabled for this request. If the parameter change results in an option group that
   *             enables OEM, this change can cause a brief (sub-second) period during which new connections
   *             are rejected but existing connections are not interrupted.
   *         </p>
   *          <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
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
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled,
   *             using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *          <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace ModifyDBClusterMessage {
  export function isa(o: any): o is ModifyDBClusterMessage {
    return __isa(o, "ModifyDBClusterMessage");
  }
}

/**
 * <p></p>
 */
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
    return __isa(o, "ModifyDBClusterParameterGroupMessage");
  }
}

export interface ModifyDBClusterResult {
  __type?: "ModifyDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace ModifyDBClusterResult {
  export function isa(o: any): o is ModifyDBClusterResult {
    return __isa(o, "ModifyDBClusterResult");
  }
}

/**
 * <p></p>
 */
export interface ModifyDBClusterSnapshotAttributeMessage {
  __type?: "ModifyDBClusterSnapshotAttributeMessage";
  /**
   * <p>The name of the DB cluster snapshot attribute to modify.</p>
   *         <p>To manage authorization for other AWS accounts to copy or restore a manual DB cluster snapshot,
   *             set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier for the DB cluster snapshot to modify the attributes for.</p>
   */
  DBClusterSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To authorize other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more AWS account
   *             IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by
   *             any AWS account. Do not add the <code>all</code> value for any
   *             manual DB cluster snapshots that contain private information that you don't want available
   *             to all AWS accounts.</p>
   */
  ValuesToAdd?: Array<string>;

  /**
   * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *         <p>To remove authorization for other AWS accounts to copy or restore a manual DB cluster snapshot, set this list to include
   *             one or more AWS account
   *             identifiers, or <code>all</code> to remove authorization for any AWS account to copy or
   *             restore the DB cluster snapshot. If you specify <code>all</code>, an AWS account whose account ID is
   *             explicitly added to the <code>restore</code> attribute
   *             can still copy or restore a manual DB cluster snapshot.</p>
   */
  ValuesToRemove?: Array<string>;
}

export namespace ModifyDBClusterSnapshotAttributeMessage {
  export function isa(o: any): o is ModifyDBClusterSnapshotAttributeMessage {
    return __isa(o, "ModifyDBClusterSnapshotAttributeMessage");
  }
}

export interface ModifyDBClusterSnapshotAttributeResult {
  __type?: "ModifyDBClusterSnapshotAttributeResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBClusterSnapshotAttributes</code>
   *             API action.</p>
   *         <p>Manual DB cluster snapshot attributes are used to authorize other AWS accounts
   *             to copy or restore a manual DB cluster snapshot. For more information, see the <code>ModifyDBClusterSnapshotAttribute</code>
   *             API action.</p>
   */
  DBClusterSnapshotAttributesResult?: DBClusterSnapshotAttributesResult;
}

export namespace ModifyDBClusterSnapshotAttributeResult {
  export function isa(o: any): o is ModifyDBClusterSnapshotAttributeResult {
    return __isa(o, "ModifyDBClusterSnapshotAttributeResult");
  }
}

/**
 * <p></p>
 */
export interface ModifyDBInstanceMessage {
  __type?: "ModifyDBInstanceMessage";
  /**
   * <p>The new amount of storage (in gibibytes) to allocate for the DB instance.
   *       </p>
   *
   *          <p>For MariaDB, MySQL, Oracle, and PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up
   *           so that they are 10% greater than the current value.
   *       </p>
   *
   *          <p>For the valid values for allocated storage for each engine,
   *           see <code>CreateDBInstance</code>.
   *       </p>
   */
  AllocatedStorage?: number;

  /**
   * <p>A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.</p>
   *          <p>Constraints: Major version upgrades must be allowed when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>A value that indicates whether the modifications in this request and
   *         any pending modifications are asynchronously applied
   *         as soon as possible, regardless of the
   *         <code>PreferredMaintenanceWindow</code> setting for the DB instance. By default, this parameter is
   *           disabled.
   *         </p>
   *          <p>
   *         If this parameter is disabled, changes to the
   *         DB instance are applied during the next maintenance window. Some parameter changes can cause an outage
   *         and are applied on the next call to <a>RebootDBInstance</a>, or the next failure reboot.
   *         Review the table of parameters in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html">Modifying a DB Instance</a>
   *           in the <i>Amazon RDS User Guide.</i> to see the impact of enabling
   *           or disabling <code>ApplyImmediately</code> for each modified parameter and to determine when the changes are applied.
   *         </p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>
   *     A value that indicates whether minor version upgrades are applied automatically
   *     to the DB instance during the maintenance window.
   *     Changing this parameter doesn't result in an outage except in the following case
   *     and the change is asynchronously applied as soon as possible.
   *     An outage results if this parameter is enabled during the maintenance window,
   *     and a newer minor version is available, and RDS has enabled auto patching for that engine version.
   *     </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The number of days to retain automated backups. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *          <p>Changing this parameter can result in an outage if you change from 0 to a non-zero value or from a non-zero value to 0.
   *             These changes are applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled for this request. If you change the parameter from one non-zero value to another
   *             non-zero value, the change is asynchronously applied as soon as possible.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The retention period for automated backups is managed by the DB
   *             cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35</p>
   *             </li>
   *             <li>
   *                <p>Can be specified for a MySQL Read Replica only if the source is running MySQL 5.6 or later</p>
   *             </li>
   *             <li>
   *                <p>Can be specified for a PostgreSQL Read Replica only if the source is running PostgreSQL 9.3.5</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to Read Replicas</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates the certificate that needs to be associated with the instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>A value that indicates whether the DB instance is restarted when you rotate your
   *             SSL/TLS certificate.</p>
   *         <p>By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate
   *             is not updated until the DB instance is restarted.</p>
   *         <important>
   *             <p>Set this parameter only if you are <i>not</i> using SSL/TLS to connect to the DB instance.</p>
   *         </important>
   *         <p>If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your
   *             DB engine to rotate your SSL/TLS certificate:</p>
   *         <ul>
   *             <li>
   *                 <p>For more information about rotating your SSL/TLS certificate for RDS DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate.</a> in the <i>Amazon RDS User Guide.</i>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>For more information about rotating your SSL/TLS certificate for Aurora DB engines, see
   *                     <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html">
   *                         Rotating Your SSL/TLS Certificate</a> in the <i>Amazon Aurora User Guide.</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  CertificateRotationRestart?: boolean;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB instance.</p>
   *         <p>A change to the <code>CloudwatchLogsExportConfiguration</code> parameter is always applied to the DB instance
   *             immediately. Therefore, the <code>ApplyImmediately</code> parameter has no effect.</p>
   */
  CloudwatchLogsExportConfiguration?: CloudwatchLogsExportConfiguration;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this
   *           value for an Aurora DB instance has no effect on the DB cluster setting. For more
   *           information, see <code>ModifyDBCluster</code>.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The new compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If you modify the DB instance class, an outage occurs during the change.
   *         The change is applied during the next maintenance window,
   *         unless <code>ApplyImmediately</code> is enabled for this request.
   *         </p>
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
   * <p>The name of the DB parameter group to apply to the DB instance. Changing this
   *             setting doesn't result in an outage. The parameter group name itself is changed
   *             immediately, but the actual parameter changes are not applied until you reboot the
   *             instance without failover. In this case, the DB instance isn't rebooted automatically and the
   *             parameter changes isn't applied during the next maintenance window.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Constraints: The DB parameter group must be in the same DB parameter group family as this DB instance.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>The value of the <code>DBPortNumber</code> parameter must not match any of the port values specified for options in the option
   *       group for the DB instance.</p>
   *          <p>Your database will restart when you change the <code>DBPortNumber</code> value regardless of the value of the <code>ApplyImmediately</code>
   *       parameter.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>
   *       Default: <code>5432</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>Type: Integer</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>
   *       Default: <code>1521</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>
   *       Default: <code>1433</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code> except for <code>1434</code>, <code>3389</code>, <code>47001</code>,
   *       <code>49152</code>, and <code>49152</code> through <code>49156</code>.
   *     </p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>
   *       Default: <code>3306</code>
   *          </p>
   *          <p>
   *       Valid Values: <code>1150-65535</code>
   *          </p>
   */
  DBPortNumber?: number;

  /**
   * <p>A list of DB security groups to authorize on this DB instance. Changing this setting doesn't result in an outage and the change is asynchronously applied as soon as possible.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match existing DBSecurityGroups.</p>
   *             </li>
   *          </ul>
   */
  DBSecurityGroups?: Array<string>;

  /**
   * <p>The new DB subnet group for the DB instance.
   *           You can use this parameter to move your DB instance to a different VPC.
   *
   *           If your DB instance isn't in a VPC, you can also use this parameter to move your DB instance into a VPC.
   *           For more information, see
   *           <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html#USER_VPC.Non-VPC2VPC">Updating the VPC for a DB Instance</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Changing the subnet group causes an outage during the change.
   *         The change is applied during the next maintenance window,
   *         unless you enable <code>ApplyImmediately</code>.
   *     </p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetGroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The Active Directory directory ID to move the DB instance to.
   *           Specify <code>none</code> to remove the instance from its current domain.
   *           The domain must be created prior to this operation. Currently, only Microsoft SQL Server and
   *           Oracle DB instances can be created in an Active Directory Domain.
   *       </p>
   *          <p>For Microsoft SQL Server DB instances, Amazon RDS can use
   *           Windows Authentication to authenticate users that connect to the DB instance. For more
   *           information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html">
   *               Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *          <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html">
   *               Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>The name of the IAM role to use when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *           For information about the supported DB engines, see <a>CreateDBInstance</a>.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.</p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service
   *                     User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>
   *     The version number of the database engine to upgrade to.
   *     Changing this parameter results in an outage and the change
   *     is applied during the next maintenance window
   *     unless the <code>ApplyImmediately</code> parameter is eanbled for this request.
   *     </p>
   *          <p>For major version upgrades, if a nondefault DB parameter group is currently in use, a
   *             new DB parameter group in the DB parameter group family for the new engine version must
   *             be specified. The new DB parameter group can be the default for that DB parameter group
   *             family.</p>
   *          <p>For information about valid engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The new Provisioned IOPS (I/O operations per second) value for the RDS instance.
   *       </p>
   *          <p>Changing this setting doesn't result in an outage and
   *             the change is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled for this request.
   *           If you are migrating from Provisioned IOPS to standard storage, set this value to 0.
   *           The DB instance will require a reboot for the change in storage type to take effect.
   *       </p>
   *          <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time.
   *           The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations. Typical migration times are under 24 hours, but the process can take up to several days in some cases.
   *           During the migration, the DB instance is available for use, but might experience performance degradation.
   *           While the migration takes place, nightly backups for the instance are suspended. No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a Read Replica for the instance, and creating a DB snapshot of the instance.
   *       </p>
   *          <p>Constraints: For MariaDB, MySQL, Oracle, and PostgreSQL,
   *           the value supplied must be at least 10% greater than the current value.
   *           Values that are not at least 10% greater than the existing value are rounded up so that they are 10% greater than the current value.
   *       </p>
   *          <p>Default: Uses existing setting</p>
   */
  Iops?: number;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>The new password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p>
   *          <p>
   *         Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *         Between the time of the request and the completion of the request,
   *         the <code>MasterUserPassword</code> element exists in the
   *         <code>PendingModifiedValues</code> element of the operation response.
   *         </p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The password for the master user is managed by the DB cluster. For
   *             more information, see <code>ModifyDBCluster</code>.
   *         </p>
   *
   *          <p>Default: Uses existing setting</p>
   *
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *
   *          <p>
   *             <b>Microsoft SQL Server</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 41 characters.</p>
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 30 characters.</p>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>Constraints: Must contain from 8 to 128 characters.</p>
   *
   *          <note>
   *             <p>Amazon RDS API actions never return the password,
   *               so this action provides a way to regain access to a primary instance user if the password is lost.
   *               This includes restoring privileges that might have been accidentally revoked.
   *           </p>
   *          </note>
   */
  MasterUserPassword?: string;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p>
   *          <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code>
   *       to a value other than 0.</p>
   *          <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code>
   *          </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For
   *       example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role,
   *       go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.html#USER_Monitoring.OS.IAMRole">To
   *           create an IAM role for Amazon RDS Enhanced Monitoring</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.
   *     Changing this parameter doesn't result in an outage and the change
   *     is applied during the next maintenance window
   *     unless the <code>ApplyImmediately</code> parameter is
   *         enabled for this request.
   *     </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>
   *             The new DB instance identifier for the DB instance when renaming a DB
   *             instance. When you change the DB instance identifier, an instance
   *             reboot occurs immediately if you enable <code>ApplyImmediately</code>, or will occur
   *             during the next maintenance window if you disable Apply Immediately. This value is stored
   *             as a lowercase string.
   *         </p>
   *
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  NewDBInstanceIdentifier?: string;

  /**
   * <p>
   *             Indicates that the DB instance should be associated with the specified option group.
   *             Changing this parameter doesn't result in an outage except in the following case and the change
   *             is applied during the next maintenance window
   *             unless the <code>ApplyImmediately</code> parameter is enabled
   *             for this request. If the parameter change results in an option group that
   *             enables OEM, this change can cause a brief (sub-second) period during which new connections
   *             are rejected but existing connections are not interrupted.
   *         </p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID
   *             is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS
   *             encryption key.</p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default encryption key. AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>
   *         The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         as determined by the <code>BackupRetentionPeriod</code> parameter.
   *             Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
   *       </p>
   *
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *         <p>Not applicable. The daily time range for creating automated backups is managed by
   *             the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
   *
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
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which
   *             might result in an outage. Changing this parameter doesn't result in an outage, except
   *             in the following situation, and the change is asynchronously applied as soon as
   *             possible. If there are pending actions that cause a reboot, and the maintenance window
   *             is changed to include the current time, then changing this parameter will cause a reboot
   *             of the DB instance. If moving this window to the current time, there must be at least 30
   *             minutes between the current time and end of the window to ensure pending changes are
   *             applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance
   *       after a failure of the existing primary instance. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance">
   *           Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>.
   *     </p>
   *          <p>Default: 1</p>
   *          <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name,
   *           which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.
   *     </p>
   *          <p>
   *             <code>PubliclyAccessible</code> only applies to DB instances in a VPC.
   *       The DB instance must be part of a public subnet and
   *       <code>PubliclyAccessible</code> must be enabled for it to be publicly accessible.
   *     </p>
   *          <p>Changes to the <code>PubliclyAccessible</code> parameter are applied immediately regardless
   *       of the value of the <code>ApplyImmediately</code> parameter.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.
   *       </p>
   *          <p>If you specify Provisioned IOPS (<code>io1</code>),
   *           you must also include a value for the <code>Iops</code> parameter.
   *       </p>
   *          <p>If you choose to migrate your DB instance from using standard storage to using Provisioned IOPS, or from using Provisioned IOPS to using standard storage, the process can take time.
   *           The duration of the migration depends on several factors such as database load, storage size, storage type (standard or Provisioned IOPS), amount of IOPS provisioned (if any), and the number of prior scale storage operations.
   *           Typical migration times are under 24 hours, but the process can take up to several days in some cases.
   *           During the migration, the DB instance is available for use, but might experience performance degradation.
   *           While the migration takes place, nightly backups for the instance are suspended.
   *           No other Amazon RDS operations can take place for the instance, including modifying the instance, rebooting the instance, deleting the instance, creating a Read Replica for the instance, and creating a DB snapshot of the instance.
   *       </p>
   *          <p>
   *           Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>Default: <code>io1</code> if the <code>Iops</code> parameter
   *           is specified, otherwise <code>gp2</code>
   *          </p>
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
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A list of EC2 VPC security groups to authorize on this DB instance. This change is asynchronously applied as soon as possible.</p>
   *          <p>
   *             <b>Amazon Aurora</b>
   *          </p>
   *          <p>Not applicable. The associated list of EC2 VPC security groups is managed by
   *           the DB cluster. For more information, see <code>ModifyDBCluster</code>.</p>
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
    return __isa(o, "ModifyDBInstanceMessage");
  }
}

export interface ModifyDBInstanceResult {
  __type?: "ModifyDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace ModifyDBInstanceResult {
  export function isa(o: any): o is ModifyDBInstanceResult {
    return __isa(o, "ModifyDBInstanceResult");
  }
}

/**
 * <p></p>
 */
export interface ModifyDBParameterGroupMessage {
  __type?: "ModifyDBParameterGroupMessage";
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>An array of parameter names, values, and the apply method for the parameter update. At least one parameter name, value, and apply method must be supplied; subsequent arguments are optional. A maximum of 20 parameters can be modified in a single request.</p>
   *          <p>Valid Values (for the application method): <code>immediate | pending-reboot</code>
   *          </p>
   *          <note>
   *             <p>You can use the immediate value with dynamic parameters only. You can use the pending-reboot value for both dynamic and static parameters, and changes are applied when you reboot the DB instance without failover.</p>
   *          </note>
   */
  Parameters: Array<Parameter> | undefined;
}

export namespace ModifyDBParameterGroupMessage {
  export function isa(o: any): o is ModifyDBParameterGroupMessage {
    return __isa(o, "ModifyDBParameterGroupMessage");
  }
}

export interface ModifyDBProxyRequest {
  __type?: "ModifyDBProxyRequest";
  /**
   * <p>The new authentication settings for the <code>DBProxy</code>.</p>
   */
  Auth?: Array<UserAuthConfig>;

  /**
   * <p>The identifier for the <code>DBProxy</code> to modify.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>Whether the proxy includes detailed information about SQL statements in its logs.
   *         This information helps you to debug issues involving SQL behavior or the performance
   *         and scalability of the proxy connections. The debug information includes the text of
   *         SQL statements that you submit through the proxy. Thus, only enable this setting
   *         when needed for debugging, and only when you have security measures in place to
   *         safeguard any sensitive information that appears in the logs.</p>
   */
  DebugLogging?: boolean;

  /**
   * <p>The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it. You can set this
   *         value higher or lower than the connection timeout limit for the associated database.</p>
   */
  IdleClientTimeout?: number;

  /**
   * <p>The new identifier for the <code>DBProxy</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewDBProxyName?: string;

  /**
   * <p>Whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
   *         By enabling this setting, you can enforce encrypted TLS connections to the proxy, even if the associated database doesn't
   *         use TLS.</p>
   */
  RequireTLS?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.</p>
   */
  RoleArn?: string;

  /**
   * <p>The new list of security groups for the <code>DBProxy</code>.</p>
   */
  SecurityGroups?: Array<string>;
}

export namespace ModifyDBProxyRequest {
  export function isa(o: any): o is ModifyDBProxyRequest {
    return __isa(o, "ModifyDBProxyRequest");
  }
}

export interface ModifyDBProxyResponse {
  __type?: "ModifyDBProxyResponse";
  /**
   * <p>The <code>DBProxy</code> object representing the new settings for the proxy.</p>
   */
  DBProxy?: DBProxy;
}

export namespace ModifyDBProxyResponse {
  export function isa(o: any): o is ModifyDBProxyResponse {
    return __isa(o, "ModifyDBProxyResponse");
  }
}

export interface ModifyDBProxyTargetGroupRequest {
  __type?: "ModifyDBProxyTargetGroupRequest";
  /**
   * <p>The settings that determine the size and behavior of the connection pool for the target group.</p>
   */
  ConnectionPoolConfig?: ConnectionPoolConfiguration;

  /**
   * <p>The name of the new proxy to which to assign the target group.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The new name for the modified <code>DBProxyTarget</code>. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it can't end with a hyphen or contain two consecutive hyphens.</p>
   */
  NewName?: string;

  /**
   * <p>The name of the new target group to assign to the proxy.</p>
   */
  TargetGroupName: string | undefined;
}

export namespace ModifyDBProxyTargetGroupRequest {
  export function isa(o: any): o is ModifyDBProxyTargetGroupRequest {
    return __isa(o, "ModifyDBProxyTargetGroupRequest");
  }
}

export interface ModifyDBProxyTargetGroupResponse {
  __type?: "ModifyDBProxyTargetGroupResponse";
  /**
   * <p>The settings of the modified <code>DBProxyTarget</code>.</p>
   */
  DBProxyTargetGroup?: DBProxyTargetGroup;
}

export namespace ModifyDBProxyTargetGroupResponse {
  export function isa(o: any): o is ModifyDBProxyTargetGroupResponse {
    return __isa(o, "ModifyDBProxyTargetGroupResponse");
  }
}

/**
 * <p></p>
 */
export interface ModifyDBSnapshotAttributeMessage {
  __type?: "ModifyDBSnapshotAttributeMessage";
  /**
   * <p>The name of the DB snapshot attribute to modify.</p>
   *          <p>To manage authorization for other AWS accounts to copy or restore a manual DB snapshot,
   *       set this value to <code>restore</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>The identifier for the DB snapshot to modify the attributes for.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>A list of DB snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To authorize other AWS accounts to copy or restore a manual snapshot, set this list to include one or more AWS account
   *       IDs, or <code>all</code> to make the manual DB snapshot restorable by
   *       any AWS account. Do not add the <code>all</code> value for any
   *       manual DB snapshots that contain private information that you don't want available
   *       to all AWS accounts.</p>
   */
  ValuesToAdd?: Array<string>;

  /**
   * <p>A list of DB snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p>
   *          <p>To remove authorization for other AWS accounts to copy or restore a manual snapshot, set this list to include
   *       one or more AWS account
   *       identifiers, or <code>all</code> to remove authorization for any AWS account to copy or
   *       restore the DB snapshot. If you specify <code>all</code>, an AWS account whose
   *       account ID is explicitly added to the <code>restore</code> attribute
   *       can still copy or restore the manual DB snapshot.</p>
   */
  ValuesToRemove?: Array<string>;
}

export namespace ModifyDBSnapshotAttributeMessage {
  export function isa(o: any): o is ModifyDBSnapshotAttributeMessage {
    return __isa(o, "ModifyDBSnapshotAttributeMessage");
  }
}

export interface ModifyDBSnapshotAttributeResult {
  __type?: "ModifyDBSnapshotAttributeResult";
  /**
   * <p>Contains the results of a successful call to the <code>DescribeDBSnapshotAttributes</code>
   *     API action.</p>
   *          <p>Manual DB snapshot attributes are used to authorize other AWS accounts
   *       to copy or restore a manual DB snapshot. For more information, see the <code>ModifyDBSnapshotAttribute</code>
   *       API action.</p>
   */
  DBSnapshotAttributesResult?: DBSnapshotAttributesResult;
}

export namespace ModifyDBSnapshotAttributeResult {
  export function isa(o: any): o is ModifyDBSnapshotAttributeResult {
    return __isa(o, "ModifyDBSnapshotAttributeResult");
  }
}

export interface ModifyDBSnapshotMessage {
  __type?: "ModifyDBSnapshotMessage";
  /**
   * <p>The identifier of the DB snapshot to modify.</p>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The engine version to upgrade the DB snapshot to.
   *       </p>
   *
   *          <p>The following are the database engines and engine versions that are available when you upgrade a DB snapshot.
   *       </p>
   *
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>5.5.46</code> (supported for 5.1 DB snapshots)</p>
   *             </li>
   *          </ul>
   *
   *
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>12.1.0.2.v8</code>  (supported for 12.1.0.1 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v12</code> (supported for 11.2.0.2 DB snapshots)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>11.2.0.4.v11</code> (supported for 11.2.0.3 DB snapshots)</p>
   *             </li>
   *          </ul>
   *
   *          <p>
   *             <b>PostgreSQL</b>
   *          </p>
   *          <p>For the list of engine versions that are available for upgrading a DB snapshot, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.PostgreSQL.html#USER_UpgradeDBInstance.PostgreSQL.MajorVersion">
   *               Upgrading the PostgreSQL DB Engine for Amazon RDS</a>.
   *       </p>
   */
  EngineVersion?: string;

  /**
   * <p>The option group to identify with the upgraded DB snapshot.
   *         </p>
   *
   *         <p>You can specify this parameter when you upgrade an Oracle DB snapshot.
   *             The same option group considerations apply when upgrading a DB snapshot as when upgrading a DB instance.
   *             For more information, see
   *             <a href="http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Oracle.html#USER_UpgradeDBInstance.Oracle.OGPG.OG">Option Group Considerations</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  OptionGroupName?: string;
}

export namespace ModifyDBSnapshotMessage {
  export function isa(o: any): o is ModifyDBSnapshotMessage {
    return __isa(o, "ModifyDBSnapshotMessage");
  }
}

export interface ModifyDBSnapshotResult {
  __type?: "ModifyDBSnapshotResult";
  /**
   * <p>Contains the details of an Amazon RDS DB snapshot.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSnapshots</code> action.
   *       </p>
   */
  DBSnapshot?: DBSnapshot;
}

export namespace ModifyDBSnapshotResult {
  export function isa(o: any): o is ModifyDBSnapshotResult {
    return __isa(o, "ModifyDBSnapshotResult");
  }
}

/**
 * <p></p>
 */
export interface ModifyDBSubnetGroupMessage {
  __type?: "ModifyDBSubnetGroupMessage";
  /**
   * <p>The description for the DB subnet group.</p>
   */
  DBSubnetGroupDescription?: string;

  /**
   * <p>The name for the DB subnet group. This value is stored as a lowercase string.
   *           You can't modify the default subnet group.
   *       </p>
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
    return __isa(o, "ModifyDBSubnetGroupMessage");
  }
}

export interface ModifyDBSubnetGroupResult {
  __type?: "ModifyDBSubnetGroupResult";
  /**
   * <p>Contains the details of an Amazon RDS DB subnet group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSubnetGroups</code> action.
   *       </p>
   */
  DBSubnetGroup?: DBSubnetGroup;
}

export namespace ModifyDBSubnetGroupResult {
  export function isa(o: any): o is ModifyDBSubnetGroupResult {
    return __isa(o, "ModifyDBSubnetGroupResult");
  }
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  __type?: "ModifyEventSubscriptionMessage";
  /**
   * <p>
   *             A value that indicates whether to activate the subscription.
   *       </p>
   */
  Enabled?: boolean;

  /**
   * <p>
   *             A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType
   *             in the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> topic  in the <i>Amazon RDS User Guide</i>
   *             or by using the <b>DescribeEventCategories</b> action.
   *         </p>
   */
  EventCategories?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The type of source that is generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. If this value isn't specified, all events are returned.</p>
   *          <p>Valid values: db-instance | db-parameter-group | db-security-group | db-snapshot</p>
   */
  SourceType?: string;

  /**
   * <p>The name of the RDS event notification subscription.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace ModifyEventSubscriptionMessage {
  export function isa(o: any): o is ModifyEventSubscriptionMessage {
    return __isa(o, "ModifyEventSubscriptionMessage");
  }
}

export interface ModifyEventSubscriptionResult {
  __type?: "ModifyEventSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResult {
  export function isa(o: any): o is ModifyEventSubscriptionResult {
    return __isa(o, "ModifyEventSubscriptionResult");
  }
}

export interface ModifyGlobalClusterMessage {
  __type?: "ModifyGlobalClusterMessage";
  /**
   * <p>
   *         Indicates if the global database cluster has deletion protection enabled. The global database cluster
   *         can't be deleted when deletion protection is enabled.
   *       </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>
   *         The DB cluster identifier for the global cluster being modified. This parameter isn't case-sensitive.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing global database cluster.</p>
   *             </li>
   *          </ul>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p>
   *         The new cluster identifier for the global database cluster when modifying a global database cluster.
   *         This value is stored as a lowercase string.
   *       </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>The first character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster2</code>
   *          </p>
   */
  NewGlobalClusterIdentifier?: string;
}

export namespace ModifyGlobalClusterMessage {
  export function isa(o: any): o is ModifyGlobalClusterMessage {
    return __isa(o, "ModifyGlobalClusterMessage");
  }
}

export interface ModifyGlobalClusterResult {
  __type?: "ModifyGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace ModifyGlobalClusterResult {
  export function isa(o: any): o is ModifyGlobalClusterResult {
    return __isa(o, "ModifyGlobalClusterResult");
  }
}

/**
 * <p></p>
 */
export interface ModifyOptionGroupMessage {
  __type?: "ModifyOptionGroupMessage";
  /**
   * <p>A value that indicates whether to apply the change immediately or during the next maintenance window for each instance associated with the option group.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The name of the option group to be modified.</p>
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName: string | undefined;

  /**
   * <p>Options in this list are added to the option group or, if already present, the specified configuration is used to update the existing configuration.</p>
   */
  OptionsToInclude?: Array<OptionConfiguration>;

  /**
   * <p>Options in this list are removed from the option group.</p>
   */
  OptionsToRemove?: Array<string>;
}

export namespace ModifyOptionGroupMessage {
  export function isa(o: any): o is ModifyOptionGroupMessage {
    return __isa(o, "ModifyOptionGroupMessage");
  }
}

export interface ModifyOptionGroupResult {
  __type?: "ModifyOptionGroupResult";
  /**
   * <p></p>
   */
  OptionGroup?: OptionGroup;
}

export namespace ModifyOptionGroupResult {
  export function isa(o: any): o is ModifyOptionGroupResult {
    return __isa(o, "ModifyOptionGroupResult");
  }
}

/**
 * <p>Option details.</p>
 */
export interface Option {
  __type?: "Option";
  /**
   * <p>If the option requires access to a port, then this DB security group allows access to the port.</p>
   */
  DBSecurityGroupMemberships?: Array<DBSecurityGroupMembership>;

  /**
   * <p>The description of the option.</p>
   */
  OptionDescription?: string;

  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;

  /**
   * <p>The option settings for this option.</p>
   */
  OptionSettings?: Array<OptionSetting>;

  /**
   * <p>The version of the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>Indicate if this option is permanent.</p>
   */
  Permanent?: boolean;

  /**
   * <p>Indicate if this option is persistent.</p>
   */
  Persistent?: boolean;

  /**
   * <p>If required, the port configured for this option to use.</p>
   */
  Port?: number;

  /**
   * <p>If the option requires access to a port, then this VPC security group allows access to the port.</p>
   */
  VpcSecurityGroupMemberships?: Array<VpcSecurityGroupMembership>;
}

export namespace Option {
  export function isa(o: any): o is Option {
    return __isa(o, "Option");
  }
}

/**
 * <p>A list of all available options</p>
 */
export interface OptionConfiguration {
  __type?: "OptionConfiguration";
  /**
   * <p>A list of DBSecurityGroupMembership name strings used for this option.</p>
   */
  DBSecurityGroupMemberships?: Array<string>;

  /**
   * <p>The configuration of options to include in a group.</p>
   */
  OptionName: string | undefined;

  /**
   * <p>The option settings to include in an option group.</p>
   */
  OptionSettings?: Array<OptionSetting>;

  /**
   * <p>The version for the option.</p>
   */
  OptionVersion?: string;

  /**
   * <p>The optional port for the option.</p>
   */
  Port?: number;

  /**
   * <p>A list of VpcSecurityGroupMembership name strings used for this option.</p>
   */
  VpcSecurityGroupMemberships?: Array<string>;
}

export namespace OptionConfiguration {
  export function isa(o: any): o is OptionConfiguration {
    return __isa(o, "OptionConfiguration");
  }
}

/**
 * <p></p>
 */
export interface OptionGroup {
  __type?: "OptionGroup";
  /**
   * <p>Indicates whether this option group can be applied to both VPC
   *            and non-VPC instances. The value <code>true</code> indicates the option group
   *            can be applied to both VPC and non-VPC instances.
   *         </p>
   */
  AllowsVpcAndNonVpcInstanceMemberships?: boolean;

  /**
   * <p>Indicates the name of the engine that this option group can be applied to.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates the major engine version associated with this option group.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the option group.</p>
   */
  OptionGroupArn?: string;

  /**
   * <p>Provides a description of the option group.</p>
   */
  OptionGroupDescription?: string;

  /**
   * <p>Specifies the name of the option group.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>Indicates what options are available in the option group.</p>
   */
  Options?: Array<Option>;

  /**
   * <p>If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>false</code>, this field is blank.
   *            If <b>AllowsVpcAndNonVpcInstanceMemberships</b> is <code>true</code> and this field is blank,
   *            then this option group can be applied to both VPC and non-VPC instances.
   *            If this field contains a value, then this option group can only be
   *            applied to instances that are in the VPC indicated by this field.
   *         </p>
   */
  VpcId?: string;
}

export namespace OptionGroup {
  export function isa(o: any): o is OptionGroup {
    return __isa(o, "OptionGroup");
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
   *       <code>in-sync</code>,
   *       <code>pending-apply</code>,
   *       <code>pending-removal</code>,
   *       <code>pending-maintenance-apply</code>,
   *       <code>pending-maintenance-removal</code>,
   *       <code>applying</code>,
   *       <code>removing</code>,
   *       and <code>failed</code>.
   *         </p>
   */
  Status?: string;
}

export namespace OptionGroupMembership {
  export function isa(o: any): o is OptionGroupMembership {
    return __isa(o, "OptionGroupMembership");
  }
}

/**
 * <p>Available option.</p>
 */
export interface OptionGroupOption {
  __type?: "OptionGroupOption";
  /**
   * <p>If the option requires a port, specifies the default port for the option.</p>
   */
  DefaultPort?: number;

  /**
   * <p>The description of the option.</p>
   */
  Description?: string;

  /**
   * <p>The name of the engine that this option can be applied to.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates the major engine version that the option is available for.</p>
   */
  MajorEngineVersion?: string;

  /**
   * <p>The minimum required engine version for the option to be applied.</p>
   */
  MinimumRequiredMinorEngineVersion?: string;

  /**
   * <p>The name of the option.</p>
   */
  Name?: string;

  /**
   * <p>The option settings that are available (and the default value) for each option in an option group.</p>
   */
  OptionGroupOptionSettings?: Array<OptionGroupOptionSetting>;

  /**
   * <p>The versions that are available for the option.</p>
   */
  OptionGroupOptionVersions?: Array<OptionVersion>;

  /**
   * <p>The options that conflict with this option.</p>
   */
  OptionsConflictsWith?: Array<string>;

  /**
   * <p>The options that are prerequisites for this option.</p>
   */
  OptionsDependedOn?: Array<string>;

  /**
   * <p>Permanent options can never be removed from an option group. An option group containing a permanent option can't be removed from a DB instance.</p>
   */
  Permanent?: boolean;

  /**
   * <p>Persistent options can't be removed from an option group while DB instances are associated with the option group. If you disassociate all DB instances from the option group, your can remove the persistent option from the option group.</p>
   */
  Persistent?: boolean;

  /**
   * <p>Specifies whether the option requires a port.</p>
   */
  PortRequired?: boolean;

  /**
   * <p>If true, you must enable the Auto Minor Version Upgrade setting for your DB instance
   *             before you can use this option.
   *             You can enable Auto Minor Version Upgrade when you first create your DB instance,
   *             or by modifying your DB instance later.
   *         </p>
   */
  RequiresAutoMinorEngineVersionUpgrade?: boolean;

  /**
   * <p>If true, you can change the option to an earlier version of the option.
   *             This only applies to options that have different versions available.
   *         </p>
   */
  SupportsOptionVersionDowngrade?: boolean;

  /**
   * <p>If true, you can only use this option with a DB instance that is in a VPC.
   *         </p>
   */
  VpcOnly?: boolean;
}

export namespace OptionGroupOption {
  export function isa(o: any): o is OptionGroupOption {
    return __isa(o, "OptionGroupOption");
  }
}

/**
 * <p>Option group option settings are used to display settings available for each option with their default values and other information. These values are used with the DescribeOptionGroupOptions action.</p>
 */
export interface OptionGroupOptionSetting {
  __type?: "OptionGroupOptionSetting";
  /**
   * <p>Indicates the acceptable values for the option group option.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The DB engine specific parameter type for the option group option.</p>
   */
  ApplyType?: string;

  /**
   * <p>The default value for the option group option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>Boolean value where true indicates that this option group option can be changed from the default value.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>Boolean value where true indicates that a value must be specified for this option setting of the option group option.</p>
   */
  IsRequired?: boolean;

  /**
   * <p>The minimum DB engine version required for the corresponding allowed value for this option setting.</p>
   */
  MinimumEngineVersionPerAllowedValue?: Array<
    MinimumEngineVersionPerAllowedValue
  >;

  /**
   * <p>The description of the option group option.</p>
   */
  SettingDescription?: string;

  /**
   * <p>The name of the option group option.</p>
   */
  SettingName?: string;
}

export namespace OptionGroupOptionSetting {
  export function isa(o: any): o is OptionGroupOptionSetting {
    return __isa(o, "OptionGroupOptionSetting");
  }
}

/**
 * <p></p>
 */
export interface OptionGroupOptionsMessage {
  __type?: "OptionGroupOptionsMessage";
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>List of available option group options.</p>
   */
  OptionGroupOptions?: Array<OptionGroupOption>;
}

export namespace OptionGroupOptionsMessage {
  export function isa(o: any): o is OptionGroupOptionsMessage {
    return __isa(o, "OptionGroupOptionsMessage");
  }
}

/**
 * <p>List of option groups.</p>
 */
export interface OptionGroups {
  __type?: "OptionGroups";
  /**
   * <p>An optional pagination token provided by a previous request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to the value specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>List of option groups.</p>
   */
  OptionGroupsList?: Array<OptionGroup>;
}

export namespace OptionGroups {
  export function isa(o: any): o is OptionGroups {
    return __isa(o, "OptionGroups");
  }
}

/**
 * <p>Option settings are the actual settings being applied or configured for that option. It is used when you modify an option group or describe option groups. For example, the NATIVE_NETWORK_ENCRYPTION option has a setting called SQLNET.ENCRYPTION_SERVER that can have several different values.</p>
 */
export interface OptionSetting {
  __type?: "OptionSetting";
  /**
   * <p>The allowed values of the option setting.</p>
   */
  AllowedValues?: string;

  /**
   * <p>The DB engine specific parameter type.</p>
   */
  ApplyType?: string;

  /**
   * <p>The data type of the option setting.</p>
   */
  DataType?: string;

  /**
   * <p>The default value of the option setting.</p>
   */
  DefaultValue?: string;

  /**
   * <p>The description of the option setting.</p>
   */
  Description?: string;

  /**
   * <p>Indicates if the option setting is part of a collection.</p>
   */
  IsCollection?: boolean;

  /**
   * <p>A Boolean value that, when true, indicates the option setting can be modified from the default.</p>
   */
  IsModifiable?: boolean;

  /**
   * <p>The name of the option that has settings that you can set.</p>
   */
  Name?: string;

  /**
   * <p>The current value of the option setting.</p>
   */
  Value?: string;
}

export namespace OptionSetting {
  export function isa(o: any): o is OptionSetting {
    return __isa(o, "OptionSetting");
  }
}

/**
 * <p>The version for an option. Option group option versions are returned by
 *             the <code>DescribeOptionGroupOptions</code> action.</p>
 */
export interface OptionVersion {
  __type?: "OptionVersion";
  /**
   * <p>True if the version is the default version of the option, and otherwise false.</p>
   */
  IsDefault?: boolean;

  /**
   * <p>The version of the option.</p>
   */
  Version?: string;
}

export namespace OptionVersion {
  export function isa(o: any): o is OptionVersion {
    return __isa(o, "OptionVersion");
  }
}

/**
 * <p>Contains a list of available options for a DB instance.</p>
 *          <p>
 *           This data type is used as a response element in the <code>DescribeOrderableDBInstanceOptions</code> action.
 *         </p>
 */
export interface OrderableDBInstanceOption {
  __type?: "OrderableDBInstanceOption";
  /**
   * <p>A list of Availability Zones for a DB instance.</p>
   */
  AvailabilityZones?: Array<AvailabilityZone>;

  /**
   * <p>A list of the available processor features for the DB instance class of a DB instance.</p>
   */
  AvailableProcessorFeatures?: Array<AvailableProcessorFeature>;

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
   * <p>A list of the supported DB engine modes.</p>
   */
  SupportedEngineModes?: Array<string>;

  /**
   * <p>Indicates whether a DB instance supports Enhanced Monitoring at intervals from 1 to 60 seconds.</p>
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
   * <p>Whether a DB instance supports Kerberos Authentication.</p>
   */
  SupportsKerberosAuthentication?: boolean;

  /**
   * <p>True if a DB instance supports Performance Insights, otherwise false.</p>
   */
  SupportsPerformanceInsights?: boolean;

  /**
   * <p>Whether or not Amazon RDS can automatically scale storage for DB instances that use the specified instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;

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
    return __isa(o, "OrderableDBInstanceOption");
  }
}

/**
 * <p>
 *             Contains the result of a successful invocation of the <code>DescribeOrderableDBInstanceOptions</code> action.
 *         </p>
 */
export interface OrderableDBInstanceOptionsMessage {
  __type?: "OrderableDBInstanceOptionsMessage";
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             OrderableDBInstanceOptions request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *
   *             up to the value specified by <code>MaxRecords</code> .
   *         </p>
   */
  Marker?: string;

  /**
   * <p>An <code>OrderableDBInstanceOption</code> structure containing information about orderable options for the DB instance.</p>
   */
  OrderableDBInstanceOptions?: Array<OrderableDBInstanceOption>;
}

export namespace OrderableDBInstanceOptionsMessage {
  export function isa(o: any): o is OrderableDBInstanceOptionsMessage {
    return __isa(o, "OrderableDBInstanceOptionsMessage");
  }
}

/**
 * <p>
 *         This data type is used as a request parameter in the
 *         <code>ModifyDBParameterGroup</code> and <code>ResetDBParameterGroup</code> actions.
 *         </p>
 *          <p>This data type is used as a response element in the
 *         <code>DescribeEngineDefaultParameters</code> and <code>DescribeDBParameters</code> actions.</p>
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
   * <p>
   *         Indicates whether (<code>true</code>) or not (<code>false</code>) the parameter can be modified.
   *         Some parameters have security or operational implications
   *         that prevent them from being changed.
   *         </p>
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

  /**
   * <p>The valid DB engine modes.</p>
   */
  SupportedEngineModes?: Array<string>;
}

export namespace Parameter {
  export function isa(o: any): o is Parameter {
    return __isa(o, "Parameter");
  }
}

/**
 * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
 */
export interface PendingCloudwatchLogsExports {
  __type?: "PendingCloudwatchLogsExports";
  /**
   * <p>Log types that are in the process of being enabled. After they are enabled, these log types are exported to CloudWatch Logs.</p>
   */
  LogTypesToDisable?: Array<string>;

  /**
   * <p>Log types that are in the process of being deactivated. After they are deactivated, these log types aren't exported to CloudWatch Logs.</p>
   */
  LogTypesToEnable?: Array<string>;
}

export namespace PendingCloudwatchLogsExports {
  export function isa(o: any): o is PendingCloudwatchLogsExports {
    return __isa(o, "PendingCloudwatchLogsExports");
  }
}

/**
 * <p>Provides information about a pending maintenance action for a resource.</p>
 */
export interface PendingMaintenanceAction {
  __type?: "PendingMaintenanceAction";
  /**
   * <p>The type of pending maintenance action that is available for the resource.
   *           Valid actions are <code>system-update</code>, <code>db-upgrade</code>, <code>hardware-maintenance</code>,
   *           and <code>ca-certificate-rotation</code>.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action is applied.
   *            The maintenance action is applied to the resource during
   *            its first maintenance window after this date.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The effective date when the pending maintenance action is applied
   *            to the resource. This date takes into account opt-in requests received from
   *            the <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>,
   *            and the <code>ForcedApplyDate</code>. This value is blank if an
   *            opt-in request has not been received and nothing has been specified as
   *            <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;

  /**
   * <p>The date when the maintenance action is automatically applied.
   *             The maintenance action is applied to the resource on this date
   *             regardless of the maintenance window for the resource.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;
}

export namespace PendingMaintenanceAction {
  export function isa(o: any): o is PendingMaintenanceAction {
    return __isa(o, "PendingMaintenanceAction");
  }
}

/**
 * <p>Data returned from the <b>DescribePendingMaintenanceActions</b> action.</p>
 */
export interface PendingMaintenanceActionsMessage {
  __type?: "PendingMaintenanceActionsMessage";
  /**
   * <p>
   *             An optional pagination token provided by a previous
   *             <code>DescribePendingMaintenanceActions</code> request.
   *             If this parameter is specified, the response includes
   *             only records beyond the marker,
   *             up to a number of records specified by <code>MaxRecords</code>.
   *         </p>
   */
  Marker?: string;

  /**
   * <p>A list of the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActions?: Array<ResourcePendingMaintenanceActions>;
}

export namespace PendingMaintenanceActionsMessage {
  export function isa(o: any): o is PendingMaintenanceActionsMessage {
    return __isa(o, "PendingMaintenanceActionsMessage");
  }
}

/**
 * <p>
 *         This data type is used as a response element in the <code>ModifyDBInstance</code> action.
 *         </p>
 */
export interface PendingModifiedValues {
  __type?: "PendingModifiedValues";
  /**
   * <p>
   *         Contains the new <code>AllocatedStorage</code> size for the DB instance
   *           that will be applied or is currently being applied.
   *         </p>
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
   * <p>
   *         Contains the new <code>DBInstanceClass</code> for the DB instance
   *           that will be applied or is currently being applied.
   *         </p>
   */
  DBInstanceClass?: string;

  /**
   * <p>
   *             Contains the new <code>DBInstanceIdentifier</code> for the DB instance
   *             that will be applied or is currently being applied.
   *         </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>The new DB subnet group for the DB instance.
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p>The license model for the DB instance.</p>
   *         <p>Valid values: <code>license-included</code> | <code>bring-your-own-license</code> |
   *             <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>Contains the pending or currently-in-progress change of the master credentials for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>A list of the log types whose configuration is still pending. In other words, these log types are in the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: PendingCloudwatchLogsExports;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class
   *             of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;
}

export namespace PendingModifiedValues {
  export function isa(o: any): o is PendingModifiedValues {
    return __isa(o, "PendingModifiedValues");
  }
}

/**
 * <p>Contains the processor features of a DB instance class.</p>
 *         <p>To specify the number of CPU cores, use the <code>coreCount</code> feature name
 *             for the <code>Name</code> parameter. To specify the number of threads per core, use the
 *             <code>threadsPerCore</code> feature name for the <code>Name</code> parameter.</p>
 *         <p>You can set the processor features of the DB instance class for a DB instance when you
 *             call one of the following actions:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>CreateDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>ModifyDBInstance</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromDBSnapshot</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceFromS3</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>RestoreDBInstanceToPointInTime</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>You can view the valid processor values for a particular instance class by calling the
 *                 <code>DescribeOrderableDBInstanceOptions</code> action and specifying the
 *             instance class for the <code>DBInstanceClass</code> parameter.</p>
 *         <p>In addition, you can use the following actions for DB instance class processor information:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBInstances</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeDBSnapshots</code>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <code>DescribeValidDBInstanceModifications</code>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#USER_ConfigureProcessor">Configuring the
 *                 Processor of the DB Instance Class</a> in the <i>Amazon RDS User Guide.
 *             </i>
 *          </p>
 */
export interface ProcessorFeature {
  __type?: "ProcessorFeature";
  /**
   * <p>The name of the processor feature. Valid names are <code>coreCount</code> and <code>threadsPerCore</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of a processor feature name.</p>
   */
  Value?: string;
}

export namespace ProcessorFeature {
  export function isa(o: any): o is ProcessorFeature {
    return __isa(o, "ProcessorFeature");
  }
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaDBClusterMessage {
  __type?: "PromoteReadReplicaDBClusterMessage";
  /**
   * <p>The identifier of the DB cluster Read Replica to promote.
   *       This parameter isn't case-sensitive.
   *     </p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DBCluster Read Replica.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-cluster-replica1</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace PromoteReadReplicaDBClusterMessage {
  export function isa(o: any): o is PromoteReadReplicaDBClusterMessage {
    return __isa(o, "PromoteReadReplicaDBClusterMessage");
  }
}

export interface PromoteReadReplicaDBClusterResult {
  __type?: "PromoteReadReplicaDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace PromoteReadReplicaDBClusterResult {
  export function isa(o: any): o is PromoteReadReplicaDBClusterResult {
    return __isa(o, "PromoteReadReplicaDBClusterResult");
  }
}

/**
 * <p></p>
 */
export interface PromoteReadReplicaMessage {
  __type?: "PromoteReadReplicaMessage";
  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p>
   *          <p>Default: 1</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be a value from 0 to 35.</p>
   *             </li>
   *             <li>
   *                <p>Can't be set to 0 if the DB instance is a source to Read Replicas.</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The DB instance identifier. This value is stored as a lowercase string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing Read Replica DB instance.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>mydbinstance</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>
   *         The daily time range during which automated backups are created
   *         if automated backups are enabled,
   *         using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *          <p>
   *             The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/AdjustingTheMaintenanceWindow.html">
   *             Adjusting the Preferred Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
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
}

export namespace PromoteReadReplicaMessage {
  export function isa(o: any): o is PromoteReadReplicaMessage {
    return __isa(o, "PromoteReadReplicaMessage");
  }
}

export interface PromoteReadReplicaResult {
  __type?: "PromoteReadReplicaResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace PromoteReadReplicaResult {
  export function isa(o: any): o is PromoteReadReplicaResult {
    return __isa(o, "PromoteReadReplicaResult");
  }
}

/**
 * <p></p>
 */
export interface PurchaseReservedDBInstancesOfferingMessage {
  __type?: "PurchaseReservedDBInstancesOfferingMessage";
  /**
   * <p>The number of instances to reserve.</p>
   *          <p>Default: <code>1</code>
   *          </p>
   */
  DBInstanceCount?: number;

  /**
   * <p>Customer-specified identifier to track this reservation.</p>
   *          <p>Example: myreservationID</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The ID of the Reserved DB instance offering to purchase.</p>
   *          <p>Example: 438012d3-4052-4cc7-b2e3-8d3372e0e706</p>
   */
  ReservedDBInstancesOfferingId: string | undefined;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;
}

export namespace PurchaseReservedDBInstancesOfferingMessage {
  export function isa(o: any): o is PurchaseReservedDBInstancesOfferingMessage {
    return __isa(o, "PurchaseReservedDBInstancesOfferingMessage");
  }
}

export interface PurchaseReservedDBInstancesOfferingResult {
  __type?: "PurchaseReservedDBInstancesOfferingResult";
  /**
   * <p>
   *             This data type is used as a response element in the
   *             <code>DescribeReservedDBInstances</code> and
   *             <code>PurchaseReservedDBInstancesOffering</code> actions.
   *         </p>
   */
  ReservedDBInstance?: ReservedDBInstance;
}

export namespace PurchaseReservedDBInstancesOfferingResult {
  export function isa(o: any): o is PurchaseReservedDBInstancesOfferingResult {
    return __isa(o, "PurchaseReservedDBInstancesOfferingResult");
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
   * <p>The step value for the range.
   *             For example, if you have a range of 5,000 to 10,000,
   *             with a step value of 1,000,
   *             the valid values start at 5,000 and step up by 1,000.
   *             Even though 7,500 is within the range,
   *             it isn't a valid value for the range.
   *             The valid values are 5,000, 6,000, 7,000, 8,000...
   *         </p>
   */
  Step?: number;

  /**
   * <p>The maximum value in the range.</p>
   */
  To?: number;
}

export namespace Range {
  export function isa(o: any): o is Range {
    return __isa(o, "Range");
  }
}

/**
 * <p></p>
 */
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
   * <p>
   *           A value that indicates whether the reboot is conducted through a Multi-AZ failover.
   *       </p>
   *          <p>Constraint: You can't enable force failover if the instance isn't configured for Multi-AZ.</p>
   */
  ForceFailover?: boolean;
}

export namespace RebootDBInstanceMessage {
  export function isa(o: any): o is RebootDBInstanceMessage {
    return __isa(o, "RebootDBInstanceMessage");
  }
}

export interface RebootDBInstanceResult {
  __type?: "RebootDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RebootDBInstanceResult {
  export function isa(o: any): o is RebootDBInstanceResult {
    return __isa(o, "RebootDBInstanceResult");
  }
}

/**
 * <p>
 *             This data type is used as a response element in the
 *             <code>DescribeReservedDBInstances</code> and <code>DescribeReservedDBInstancesOfferings</code> actions.
 *         </p>
 */
export interface RecurringCharge {
  __type?: "RecurringCharge";
  /**
   * <p>The amount of the recurring charge.</p>
   */
  RecurringChargeAmount?: number;

  /**
   * <p>The frequency of the recurring charge.</p>
   */
  RecurringChargeFrequency?: string;
}

export namespace RecurringCharge {
  export function isa(o: any): o is RecurringCharge {
    return __isa(o, "RecurringCharge");
  }
}

export interface RegisterDBProxyTargetsRequest {
  __type?: "RegisterDBProxyTargetsRequest";
  /**
   * <p>One or more DB cluster identifiers.</p>
   */
  DBClusterIdentifiers?: Array<string>;

  /**
   * <p>One or more DB instance identifiers.</p>
   */
  DBInstanceIdentifiers?: Array<string>;

  /**
   * <p>The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.</p>
   */
  DBProxyName: string | undefined;

  /**
   * <p>The identifier of the <code>DBProxyTargetGroup</code>.</p>
   */
  TargetGroupName?: string;
}

export namespace RegisterDBProxyTargetsRequest {
  export function isa(o: any): o is RegisterDBProxyTargetsRequest {
    return __isa(o, "RegisterDBProxyTargetsRequest");
  }
}

export interface RegisterDBProxyTargetsResponse {
  __type?: "RegisterDBProxyTargetsResponse";
  /**
   * <p>One or more <code>DBProxyTarget</code> objects that are created when you register targets with a target group.</p>
   */
  DBProxyTargets?: Array<DBProxyTarget>;
}

export namespace RegisterDBProxyTargetsResponse {
  export function isa(o: any): o is RegisterDBProxyTargetsResponse {
    return __isa(o, "RegisterDBProxyTargetsResponse");
  }
}

export interface RemoveFromGlobalClusterMessage {
  __type?: "RemoveFromGlobalClusterMessage";
  /**
   * <p>
   *         The Amazon Resource Name (ARN) identifying the cluster that was detached from the Aurora global database cluster.
   *       </p>
   */
  DbClusterIdentifier?: string;

  /**
   * <p>
   *         The cluster identifier to detach from the Aurora global database cluster.
   *       </p>
   */
  GlobalClusterIdentifier?: string;
}

export namespace RemoveFromGlobalClusterMessage {
  export function isa(o: any): o is RemoveFromGlobalClusterMessage {
    return __isa(o, "RemoveFromGlobalClusterMessage");
  }
}

export interface RemoveFromGlobalClusterResult {
  __type?: "RemoveFromGlobalClusterResult";
  /**
   * <p>A data type representing an Aurora global database.</p>
   */
  GlobalCluster?: GlobalCluster;
}

export namespace RemoveFromGlobalClusterResult {
  export function isa(o: any): o is RemoveFromGlobalClusterResult {
    return __isa(o, "RemoveFromGlobalClusterResult");
  }
}

export interface RemoveRoleFromDBClusterMessage {
  __type?: "RemoveRoleFromDBClusterMessage";
  /**
   * <p>The name of the DB cluster to disassociate the IAM role from.</p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB cluster that the IAM role is to be disassociated from.
   *             For the list of supported feature names, see <a>DBEngineVersion</a>.</p>
   */
  FeatureName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the Aurora DB cluster, for example
   *         <code>arn:aws:iam::123456789012:role/AuroraAccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace RemoveRoleFromDBClusterMessage {
  export function isa(o: any): o is RemoveRoleFromDBClusterMessage {
    return __isa(o, "RemoveRoleFromDBClusterMessage");
  }
}

export interface RemoveRoleFromDBInstanceMessage {
  __type?: "RemoveRoleFromDBInstanceMessage";
  /**
   * <p>The name of the DB instance to disassociate the IAM role from.</p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the feature for the DB instance that the IAM role is to be disassociated from.
   *             For the list of supported feature names, see <code>DBEngineVersion</code>.
   *         </p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to disassociate from the DB instance,
   *             for example <code>arn:aws:iam::123456789012:role/AccessRole</code>.</p>
   */
  RoleArn: string | undefined;
}

export namespace RemoveRoleFromDBInstanceMessage {
  export function isa(o: any): o is RemoveRoleFromDBInstanceMessage {
    return __isa(o, "RemoveRoleFromDBInstanceMessage");
  }
}

/**
 * <p></p>
 */
export interface RemoveSourceIdentifierFromSubscriptionMessage {
  __type?: "RemoveSourceIdentifierFromSubscriptionMessage";
  /**
   * <p>
   *             The source identifier to be removed from the subscription, such as the <b>DB instance identifier</b>
   *             for a DB instance or the name of a security group.
   *         </p>
   */
  SourceIdentifier: string | undefined;

  /**
   * <p>The name of the RDS event notification subscription you want to remove a source identifier from.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace RemoveSourceIdentifierFromSubscriptionMessage {
  export function isa(
    o: any
  ): o is RemoveSourceIdentifierFromSubscriptionMessage {
    return __isa(o, "RemoveSourceIdentifierFromSubscriptionMessage");
  }
}

export interface RemoveSourceIdentifierFromSubscriptionResult {
  __type?: "RemoveSourceIdentifierFromSubscriptionResult";
  /**
   * <p>Contains the results of a successful invocation of the <code>DescribeEventSubscriptions</code> action.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace RemoveSourceIdentifierFromSubscriptionResult {
  export function isa(
    o: any
  ): o is RemoveSourceIdentifierFromSubscriptionResult {
    return __isa(o, "RemoveSourceIdentifierFromSubscriptionResult");
  }
}

/**
 * <p></p>
 */
export interface RemoveTagsFromResourceMessage {
  __type?: "RemoveTagsFromResourceMessage";
  /**
   * <p>The Amazon RDS resource that the tags are removed from. This value is an Amazon Resource Name (ARN). For information about
   *             creating an ARN,
   *             see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.ARN.html#USER_Tagging.ARN.Constructing">
   *                 Constructing an ARN for Amazon RDS</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  ResourceName: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: Array<string> | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  export function isa(o: any): o is RemoveTagsFromResourceMessage {
    return __isa(o, "RemoveTagsFromResourceMessage");
  }
}

/**
 * <p>
 *             This data type is used as a response element in the
 *             <code>DescribeReservedDBInstances</code> and
 *             <code>PurchaseReservedDBInstancesOffering</code> actions.
 *         </p>
 */
export interface ReservedDBInstance {
  __type?: "ReservedDBInstance";
  /**
   * <p>The currency code for the reserved DB instance.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The number of reserved DB instances.</p>
   */
  DBInstanceCount?: number;

  /**
   * <p>The duration of the reservation in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this reserved DB instance.</p>
   */
  FixedPrice?: number;

  /**
   * <p>The unique identifier for the lease associated with the reserved DB instance.</p>
   *          <note>
   *             <p>AWS Support might request the lease ID for an issue related to a reserved DB instance.</p>
   *          </note>
   */
  LeaseId?: string;

  /**
   * <p>Indicates if the reservation applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The offering type of this reserved DB instance.</p>
   */
  OfferingType?: string;

  /**
   * <p>The description of the reserved DB instance.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: Array<RecurringCharge>;

  /**
   * <p>The Amazon Resource Name (ARN) for the reserved DB instance.</p>
   */
  ReservedDBInstanceArn?: string;

  /**
   * <p>The unique identifier for the reservation.</p>
   */
  ReservedDBInstanceId?: string;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The time the reservation started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The state of the reserved DB instance.</p>
   */
  State?: string;

  /**
   * <p>The hourly price charged for this reserved DB instance.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedDBInstance {
  export function isa(o: any): o is ReservedDBInstance {
    return __isa(o, "ReservedDBInstance");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeReservedDBInstances</code> action.
 *         </p>
 */
export interface ReservedDBInstanceMessage {
  __type?: "ReservedDBInstanceMessage";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instances.</p>
   */
  ReservedDBInstances?: Array<ReservedDBInstance>;
}

export namespace ReservedDBInstanceMessage {
  export function isa(o: any): o is ReservedDBInstanceMessage {
    return __isa(o, "ReservedDBInstanceMessage");
  }
}

/**
 * <p>
 *             This data type is used as a response element in the <code>DescribeReservedDBInstancesOfferings</code> action.
 *         </p>
 */
export interface ReservedDBInstancesOffering {
  __type?: "ReservedDBInstancesOffering";
  /**
   * <p>The currency code for the reserved DB instance offering.</p>
   */
  CurrencyCode?: string;

  /**
   * <p>The DB instance class for the reserved DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The duration of the offering in seconds.</p>
   */
  Duration?: number;

  /**
   * <p>The fixed price charged for this offering.</p>
   */
  FixedPrice?: number;

  /**
   * <p>Indicates if the offering applies to Multi-AZ deployments.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The offering type.</p>
   */
  OfferingType?: string;

  /**
   * <p>The database engine used by the offering.</p>
   */
  ProductDescription?: string;

  /**
   * <p>The recurring price charged to run this reserved DB instance.</p>
   */
  RecurringCharges?: Array<RecurringCharge>;

  /**
   * <p>The offering identifier.</p>
   */
  ReservedDBInstancesOfferingId?: string;

  /**
   * <p>The hourly price charged for this offering.</p>
   */
  UsagePrice?: number;
}

export namespace ReservedDBInstancesOffering {
  export function isa(o: any): o is ReservedDBInstancesOffering {
    return __isa(o, "ReservedDBInstancesOffering");
  }
}

/**
 * <p>
 *         Contains the result of a successful invocation of the <code>DescribeReservedDBInstancesOfferings</code> action.
 *         </p>
 */
export interface ReservedDBInstancesOfferingMessage {
  __type?: "ReservedDBInstancesOfferingMessage";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *     </p>
   */
  Marker?: string;

  /**
   * <p>A list of reserved DB instance offerings.</p>
   */
  ReservedDBInstancesOfferings?: Array<ReservedDBInstancesOffering>;
}

export namespace ReservedDBInstancesOfferingMessage {
  export function isa(o: any): o is ReservedDBInstancesOfferingMessage {
    return __isa(o, "ReservedDBInstancesOfferingMessage");
  }
}

/**
 * <p></p>
 */
export interface ResetDBClusterParameterGroupMessage {
  __type?: "ResetDBClusterParameterGroupMessage";
  /**
   * <p>The name of the DB cluster parameter group to reset.</p>
   */
  DBClusterParameterGroupName: string | undefined;

  /**
   * <p>A list of parameter names in the DB cluster parameter group to reset to the default values. You can't use this
   *         parameter if the <code>ResetAllParameters</code> parameter is enabled.</p>
   */
  Parameters?: Array<Parameter>;

  /**
   * <p>A value that indicates whether to reset all parameters in the DB cluster parameter group
   *         to their default values. You can't use this parameter if there
   *         is a list of parameter names specified for the <code>Parameters</code> parameter.</p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetDBClusterParameterGroupMessage {
  export function isa(o: any): o is ResetDBClusterParameterGroupMessage {
    return __isa(o, "ResetDBClusterParameterGroupMessage");
  }
}

/**
 * <p></p>
 */
export interface ResetDBParameterGroupMessage {
  __type?: "ResetDBParameterGroupMessage";
  /**
   * <p>The name of the DB parameter group.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the name of an existing <code>DBParameterGroup</code>.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName: string | undefined;

  /**
   * <p>To reset the entire DB parameter group, specify the <code>DBParameterGroup</code>
   *             name and <code>ResetAllParameters</code> parameters. To reset specific parameters,
   *             provide a list of the following: <code>ParameterName</code> and
   *             <code>ApplyMethod</code>. A maximum of 20 parameters can be modified in a single
   *             request.</p>
   *          <p>
   *             <b>MySQL</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *          <p>You can use the immediate value with dynamic parameters only. You can use
   *             the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *             are applied when DB instance reboots.</p>
   *          <p>
   *             <b>MariaDB</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>immediate</code> | <code>pending-reboot</code>
   *          </p>
   *          <p>You can use the immediate value with dynamic parameters only. You can use
   *       the <code>pending-reboot</code> value for both dynamic and static parameters, and changes
   *       are applied when DB instance reboots.</p>
   *          <p>
   *             <b>Oracle</b>
   *          </p>
   *          <p>Valid Values (for Apply method): <code>pending-reboot</code>
   *          </p>
   */
  Parameters?: Array<Parameter>;

  /**
   * <p>
   *           A value that indicates whether to reset all parameters in the DB parameter group to default values.
   *           By default, all parameters in the DB parameter group are reset to default values.
   *         </p>
   */
  ResetAllParameters?: boolean;
}

export namespace ResetDBParameterGroupMessage {
  export function isa(o: any): o is ResetDBParameterGroupMessage {
    return __isa(o, "ResetDBParameterGroupMessage");
  }
}

/**
 * <p>Describes the pending maintenance actions for a resource.</p>
 */
export interface ResourcePendingMaintenanceActions {
  __type?: "ResourcePendingMaintenanceActions";
  /**
   * <p>A list that provides details about the pending maintenance actions for the resource.</p>
   */
  PendingMaintenanceActionDetails?: Array<PendingMaintenanceAction>;

  /**
   * <p>The ARN of the resource that has pending maintenance actions.</p>
   */
  ResourceIdentifier?: string;
}

export namespace ResourcePendingMaintenanceActions {
  export function isa(o: any): o is ResourcePendingMaintenanceActions {
    return __isa(o, "ResourcePendingMaintenanceActions");
  }
}

export interface RestoreDBClusterFromS3Message {
  __type?: "RestoreDBClusterFromS3Message";
  /**
   * <p>A list of Availability Zones (AZs) where instances in the restored DB cluster can be created.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The number of days for which automated backups of the restored DB cluster are retained. You must specify a minimum value of 1.</p>
   *         <p>Default: 1</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be a value from 1 to 35</p>
   *             </li>
   *          </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified CharacterSet.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The name of the DB cluster to create from the source data in the Amazon S3 bucket. This parameter is isn't case-sensitive.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *         <p>Example: <code>my-cluster1</code>
   *         </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate
   *             with the restored DB cluster. If this argument is omitted, <code>default.aurora5.6</code> is used.
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If supplied, must match the name of an existing DBClusterParameterGroup.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A DB subnet group to associate with the restored DB cluster.</p>
   *         <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.
   *         </p>
   *         <p>Example: <code>mySubnetgroup</code>
   *         </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The name of the database engine to be used for the restored DB cluster.</p>
   *         <p>Valid Values: <code>aurora</code>, <code>aurora-postgresql</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.</p>
   *         <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *         <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *         <p>
   *             <b>Aurora MySQL</b>
   *         </p>
   *         <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *         </p>
   *         <p>
   *             <b>Aurora PostgreSQL</b>
   *         </p>
   *         <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB cluster.</p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p>
   *         <p>If the StorageEncrypted parameter is enabled, and you do
   *             not specify a value for the <code>KmsKeyId</code> parameter, then
   *             Amazon RDS will use your default encryption key. AWS KMS creates the
   *             default encryption key for your AWS account. Your AWS account has a different
   *             default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p>
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword: string | undefined;

  /**
   * <p>The name of the master user for the restored DB cluster.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername: string | undefined;

  /**
   * <p>A value that indicates that the restored DB cluster should be associated with the specified option group.</p>
   *         <p>Permanent options can't be removed from an option group. An option group can't be removed from a
   *             DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the instances in the restored DB cluster accept connections.</p>
   *         <p>
   *             Default: <code>3306</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The daily time range during which automated backups are created
   *             if automated backups are enabled
   *             using the <code>BackupRetentionPeriod</code> parameter.
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region.
   *             To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *         <p>Constraints:</p>
   *         <ul>
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
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p>
   *         <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *         </p>
   *         <p>The default is a 30-minute window selected at random from an
   *             8-hour block of time for each AWS Region, occurring on a random day of the
   *             week. To see the time blocks available, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora">
   *                 Adjusting the Preferred Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i>
   *         </p>
   *         <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *         <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the Amazon S3 bucket that contains the data used to create the Amazon Aurora DB cluster.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that authorizes
   *         Amazon RDS to access the Amazon S3 bucket on your behalf.</p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The prefix for all of the file names that contain the data used to create the Amazon Aurora DB cluster.
   *         If you do not specify a <b>SourceS3Prefix</b> value, then the Amazon Aurora DB cluster is
   *         created by using all of the files in the Amazon S3 bucket.</p>
   */
  S3Prefix?: string;

  /**
   * <p>The identifier for the database engine that was backed up to create the files stored in the
   *             Amazon S3 bucket.
   *         </p>
   *         <p>Valid values: <code>mysql</code>
   *          </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The version of the database that the backup files were created from.</p>
   *         <p>MySQL version 5.5 and 5.6 are supported.
   *         </p>
   *         <p>Example: <code>5.6.22</code>
   *          </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>A value that indicates whether the restored DB cluster is encrypted.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A list of EC2 VPC security groups to associate with the restored DB cluster.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBClusterFromS3Message {
  export function isa(o: any): o is RestoreDBClusterFromS3Message {
    return __isa(o, "RestoreDBClusterFromS3Message");
  }
}

export interface RestoreDBClusterFromS3Result {
  __type?: "RestoreDBClusterFromS3Result";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromS3Result {
  export function isa(o: any): o is RestoreDBClusterFromS3Result {
    return __isa(o, "RestoreDBClusterFromS3Result");
  }
}

/**
 * <p></p>
 */
export interface RestoreDBClusterFromSnapshotMessage {
  __type?: "RestoreDBClusterFromSnapshotMessage";
  /**
   * <p>Provides the list of Availability Zones (AZs) where instances in the restored DB
   *             cluster can be created.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The name of the DB cluster to create from the DB snapshot or DB cluster snapshot.
   *             This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster. If this
   *             argument is omitted, the default DB cluster parameter group for the specified engine is
   *             used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing default DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>The name of the DB subnet group to use for the new DB cluster.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DB subnet group.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The database name for the restored DB cluster.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to Amazon CloudWatch Logs.
   *             The values in the list depend on the DB engine being used. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon
   *                 Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
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
   * <p>The DB engine mode of the DB cluster, either <code>provisioned</code>, <code>serverless</code>,
   *             <code>parallelquery</code>, <code>global</code>, or <code>multimaster</code>.</p>
   */
  EngineMode?: string;

  /**
   * <p>The version of the database engine to use for the new DB cluster.</p>
   *          <p>To list all of the available engine versions for <code>aurora</code> (for MySQL 5.6-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora), use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-mysql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <p>To list all of the available engine versions for <code>aurora-postgresql</code>, use the following command:</p>
   *          <p>
   *             <code>aws rds describe-db-engine-versions --engine aurora-postgresql --query "DBEngineVersions[].EngineVersion"</code>
   *          </p>
   *          <note>
   *             <p>If you aren't using the default engine version, then you must specify the engine version.</p>
   *          </note>
   *          <p>
   *             <b>Aurora MySQL</b>
   *          </p>
   *          <p>Example: <code>5.6.10a</code>, <code>5.6.mysql_aurora.1.19.2</code>, <code>5.7.12</code>, <code>5.7.mysql_aurora.2.04.5</code>
   *          </p>
   *          <p>
   *             <b>Aurora PostgreSQL</b>
   *          </p>
   *          <p>Example: <code>9.6.3</code>, <code>10.7</code>
   *          </p>
   */
  EngineVersion?: string;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from a DB
   *             snapshot or DB cluster snapshot.</p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption
   *             key. If you are restoring a DB cluster with the same AWS account that owns the KMS
   *             encryption key used to encrypt the new DB cluster, then you can use the KMS key alias
   *             instead of the ARN for the KMS encryption key.</p>
   *         <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the
   *             following occurs:</p>
   *         <ul>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                         <code>SnapshotIdentifier</code> is encrypted, then the restored DB cluster
   *                     is encrypted using the KMS key that was used to encrypt the DB snapshot or DB
   *                     cluster snapshot.</p>
   *             </li>
   *             <li>
   *                 <p>If the DB snapshot or DB cluster snapshot in
   *                     <code>SnapshotIdentifier</code> isn't encrypted, then the restored DB cluster
   *                     isn't encrypted.</p>
   *             </li>
   *          </ul>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the option group to use for the restored DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: This value must be <code>1150-65535</code>
   *         </p>
   *          <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>For DB clusters in <code>serverless</code> DB engine mode, the scaling properties of the DB cluster.</p>
   */
  ScalingConfiguration?: ScalingConfiguration;

  /**
   * <p>The identifier for the DB snapshot or DB cluster snapshot to restore from.</p>
   *         <p>You can use either the name or the Amazon Resource Name (ARN) to specify a DB
   *             cluster snapshot. However, you can use only the ARN to specify a DB snapshot.</p>
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
    return __isa(o, "RestoreDBClusterFromSnapshotMessage");
  }
}

export interface RestoreDBClusterFromSnapshotResult {
  __type?: "RestoreDBClusterFromSnapshotResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterFromSnapshotResult {
  export function isa(o: any): o is RestoreDBClusterFromSnapshotResult {
    return __isa(o, "RestoreDBClusterFromSnapshotResult");
  }
}

/**
 * <p></p>
 */
export interface RestoreDBClusterToPointInTimeMessage {
  __type?: "RestoreDBClusterToPointInTimeMessage";
  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to
   *             0.</p>
   *         <p>Default: 0</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p>
   *             </li>
   *          </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB cluster to snapshots of the restored DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

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
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  DBClusterIdentifier: string | undefined;

  /**
   * <p>The name of the DB cluster parameter group to associate with this DB cluster.
   *             If this argument is omitted, the default DB cluster parameter group for the specified engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DB cluster parameter group.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
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
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB cluster is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   *
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.IAMDBAuth.html">
   *                 IAM Database Authentication</a> in the <i>Amazon Aurora User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The AWS KMS key identifier to use when restoring an encrypted DB cluster from an encrypted DB cluster.</p>
   *          <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are restoring a DB cluster with the same AWS account that owns the KMS encryption key used to encrypt the new DB cluster, then you can use the KMS key alias instead of the ARN for the KMS encryption key.</p>
   *          <p>You can restore to a new DB cluster and encrypt the new DB cluster with a KMS key that is different than the
   *       KMS key used to encrypt the source DB cluster. The new DB cluster is encrypted with the KMS key
   *       identified by the <code>KmsKeyId</code> parameter.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then the following occurs:</p>
   *          <ul>
   *             <li>
   *                <p>If the DB cluster is encrypted, then the restored DB cluster is encrypted using the KMS key that was used to encrypt the source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>If the DB cluster isn't encrypted, then the restored DB cluster isn't encrypted.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If <code>DBClusterIdentifier</code> refers to a DB cluster that isn't encrypted, then the restore request
   *       is rejected.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the option group for the new DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the new DB cluster accepts connections.</p>
   *          <p>Constraints: A value from <code>1150-65535</code>.
   *       </p>
   *          <p>Default: The default port for the engine.</p>
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
   *                <p>Must be specified if <code>UseLatestRestorableTime</code> parameter isn't provided</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>RestoreType</code> parameter is <code>copy-on-write</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2015-03-07T23:45:00Z</code>
   *          </p>
   */
  RestoreToTime?: Date;

  /**
   * <p>The type of restore to be performed. You can specify one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>full-copy</code> - The new DB cluster is restored as a full copy of the
   *                 source DB cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>copy-on-write</code> - The new DB cluster is restored as a clone of the
   *                 source DB cluster.</p>
   *             </li>
   *          </ul>
   *         <p>Constraints: You can't specify <code>copy-on-write</code> if the engine version of the source DB cluster is earlier than 1.11.</p>
   *         <p>If you don't specify a <code>RestoreType</code> value, then the new DB cluster is
   *             restored as a full copy of the source DB cluster.</p>
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
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A value that indicates whether to restore the DB cluster to the latest
   *             restorable backup time. By default, the DB cluster isn't restored to the latest
   *             restorable backup time.
   *       </p>
   *          <p>Constraints: Can't be specified if <code>RestoreToTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>A list of VPC security groups that the new DB cluster belongs to.</p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBClusterToPointInTimeMessage {
  export function isa(o: any): o is RestoreDBClusterToPointInTimeMessage {
    return __isa(o, "RestoreDBClusterToPointInTimeMessage");
  }
}

export interface RestoreDBClusterToPointInTimeResult {
  __type?: "RestoreDBClusterToPointInTimeResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace RestoreDBClusterToPointInTimeResult {
  export function isa(o: any): o is RestoreDBClusterToPointInTimeResult {
    return __isa(o, "RestoreDBClusterToPointInTimeResult");
  }
}

/**
 * <p></p>
 */
export interface RestoreDBInstanceFromDBSnapshotMessage {
  __type?: "RestoreDBInstanceFromDBSnapshotMessage";
  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *          <p>Example: <code>us-east-1a</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>Name of the DB instance to create from the DB snapshot. This parameter isn't case-sensitive.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 numbers, letters, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>my-snapshot-id</code>
   *          </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The database name for the restored DB instance.</p>
   *          <note>
   *             <p>This parameter doesn't apply to the MySQL, PostgreSQL, or MariaDB engines.</p>
   *          </note>
   */
  DBName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The identifier for the DB snapshot to restore from.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *               <p>Must match the identifier of an existing DBSnapshot.</p>
   *             </li>
   *             <li>
   *               <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
   *               must be the ARN of the shared DB snapshot.</p>
   *             </li>
   *          </ul>
   */
  DBSnapshotIdentifier: string | undefined;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB instance in.
   *            The domain must be created prior to this operation. Currently, only Microsoft SQL Server and
   *            Oracle DB instances can be created in an Active Directory Domain.
   *        </p>
   *          <p>For Microsoft SQL Server DB instances, Amazon RDS can use
   *            Windows Authentication to authenticate users that connect to the DB instance. For more
   *            information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html">
   *                Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the
   *            <i>Amazon RDS User Guide</i>.</p>
   *          <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance.
   *            For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html">
   *                Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *           For information about the supported DB engines, see <a>CreateDBInstance</a>.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *               IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The database engine to use for the new instance.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source. For example, you can restore a MariaDB 10.1 DB instance from a MySQL 5.6 snapshot.</p>
   *
   *          <p>Valid Values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>Specifies the amount of provisioned IOPS for the DB instance, expressed in I/O operations per second.
   *           If this parameter isn't specified, the IOPS value is taken from the backup.
   *           If this parameter is set to 0, the new instance is converted to a non-PIOPS instance.
   *           The conversion takes additional time, though your DB instance is available for connections before the conversion starts.
   *       </p>
   *          <p>The provisioned IOPS value must follow the requirements for your database engine.
   *           For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *           in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Constraints: Must be an integer greater than 1000.</p>
   */
  Iops?: number;

  /**
   * <p>License model information for the restored DB instance.</p>
   *          <p>Default: Same as source.</p>
   *          <p>
   *             Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Default: The same port as the original DB instance</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   */
  Port?: number;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name,
   *           which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.
   *           For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>
   *             Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>
   *             If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.
   *         </p>
   *          <p>
   *             Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
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
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>
   *             A list of EC2 VPC security groups to associate with this DB instance.
   *         </p>
   *         <p>
   *             Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *         </p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBInstanceFromDBSnapshotMessage {
  export function isa(o: any): o is RestoreDBInstanceFromDBSnapshotMessage {
    return __isa(o, "RestoreDBInstanceFromDBSnapshotMessage");
  }
}

export interface RestoreDBInstanceFromDBSnapshotResult {
  __type?: "RestoreDBInstanceFromDBSnapshotResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromDBSnapshotResult {
  export function isa(o: any): o is RestoreDBInstanceFromDBSnapshotResult {
    return __isa(o, "RestoreDBInstanceFromDBSnapshotResult");
  }
}

export interface RestoreDBInstanceFromS3Message {
  __type?: "RestoreDBInstanceFromS3Message";
  /**
   * <p>The amount of storage (in gigabytes) to allocate initially for the DB instance.
   *             Follow the allocation rules specified in <code>CreateDBInstance</code>.
   *         </p>
   *
   *         <note>
   *             <p>Be sure to allocate enough memory for your new DB instance
   *                 so that the restore operation can succeed.
   *                 You can also allocate additional memory for future growth.
   *             </p>
   *         </note>
   */
  AllocatedStorage?: number;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically
   *             to the DB instance during the maintenance window. By default, minor engine upgrades
   *             are not applied automatically.
   *         </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Availability Zone that the DB instance is created in.
   *             For information about AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.
   *         </p>
   *         <p>
   *             Example: <code>us-east-1d</code>
   *         </p>
   *         <p>Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment.
   *             The specified Availability Zone must be in the same AWS Region as the current endpoint.
   *         </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The number of days for which automated backups are retained.
   *             Setting this parameter to a positive number enables backups.
   *             For more information, see <code>CreateDBInstance</code>.
   *         </p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>A value that indicates whether to copy all tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
   *         </p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The compute and memory capacity of the DB instance,
   *             for example, <code>db.m4.large</code>.
   *             Not all DB instance classes are available in all AWS Regions,
   *             or for all database engines.
   *             For the full list of DB instance classes,
   *             and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>Importing from Amazon S3 isn't supported on the db.t2.micro DB instance class.
   *         </p>
   */
  DBInstanceClass: string | undefined;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.
   *         </p>
   *
   *         <p>Constraints:</p>
   *
   *         <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *
   *         <p>Example: <code>mydbinstance</code>
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>The name of the database to create when the DB instance is created.
   *             Follow the naming rules specified in <code>CreateDBInstance</code>.
   *         </p>
   */
  DBName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *             for the specified DB engine is used.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p>
   *         <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: Array<string>;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *             Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *             For information about the supported DB engines, see <a>CreateDBInstance</a>.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *          <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *              IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance.
   *         </p>
   *         <p>For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service
   *                     User Guide</i>.
   *         </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The name of the database engine to be used for this instance.
   *         </p>
   *
   *         <p>Valid Values:  <code>mysql</code>
   *         </p>
   */
  Engine: string | undefined;

  /**
   * <p>The version number of the database engine to use.
   *             Choose the latest minor version of your database engine.
   *             For information about engine versions, see <code>CreateDBInstance</code>, or call <code>DescribeDBEngineVersions</code>.
   *         </p>
   */
  EngineVersion?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second)
   *             to allocate initially for the DB instance.
   *             For information about valid Iops values, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  Iops?: number;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance.
   *         </p>
   *         <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key.
   *             If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance,
   *             then you can use the KMS key alias instead of the ARN for the KM encryption key.
   *         </p>
   *         <p>If the <code>StorageEncrypted</code> parameter is enabled,
   *             and you do not specify a value for the <code>KmsKeyId</code> parameter,
   *             then Amazon RDS will use your default encryption key.
   *             AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.
   *         </p>
   */
  KmsKeyId?: string;

  /**
   * <p>The license model for this DB instance.
   *             Use <code>general-public-license</code>.
   *         </p>
   */
  LicenseModel?: string;

  /**
   * <p>The password for the master user.
   *             The password can include any printable ASCII character except "/", """, or "@".
   *         </p>
   *
   *         <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>The name for the master user.
   *         </p>
   *
   *         <p>Constraints:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>Must be 1 to 16 letters or numbers.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't be a reserved word for the chosen database engine.</p>
   *             </li>
   *          </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The interval, in seconds,
   *             between points when Enhanced Monitoring metrics are collected for the DB instance.
   *             To disable collecting Enhanced Monitoring metrics, specify 0.
   *         </p>
   *
   *         <p>If <code>MonitoringRoleArn</code> is specified,
   *             then you must also set <code>MonitoringInterval</code> to a value other than 0.
   *         </p>
   *
   *         <p>Valid Values: 0, 1, 5, 10, 15, 30, 60
   *         </p>
   *         <p>Default: <code>0</code>
   *         </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS
   *             to send enhanced monitoring metrics to Amazon CloudWatch Logs.
   *             For example, <code>arn:aws:iam:123456789012:role/emaccess</code>.
   *             For information on creating a monitoring role, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a>
   *             in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *         <p>If <code>MonitoringInterval</code> is set to a value other than 0,
   *             then you must supply a <code>MonitoringRoleArn</code> value.
   *         </p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.
   *             If the DB instance is a Multi-AZ deployment, you can't set the <code>AvailabilityZone</code> parameter.
   *         </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The name of the option group to associate with this DB instance.
   *             If this argument is omitted, the default option group for the specified engine is used.
   *         </p>
   */
  OptionGroupName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data.
   *             The KMS key ID is the Amazon Resource Name (ARN), the KMS key identifier,
   *             or the KMS key alias for the KMS encryption key.
   *         </p>
   *         <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS
   *             uses your default encryption key. AWS KMS creates the default encryption key for your AWS account.
   *             Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The port number on which the database accepts connections.
   *         </p>
   *         <p>Type: Integer
   *         </p>
   *         <p>Valid Values: <code>1150</code>-<code>65535</code>
   *         </p>
   *         <p>Default: <code>3306</code>
   *         </p>
   */
  Port?: number;

  /**
   * <p>The time range each day
   *             during which automated backups are created
   *             if automated backups are enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *
   *         <p>Constraints:</p>
   *         <ul>
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
   * <p>The time range each week during which system maintenance can occur,
   *             in Universal Coordinated Time (UTC).
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   *
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                <p>Must be in the format <code>ddd:hh24:mi-ddd:hh24:mi</code>.</p>
   *             </li>
   *             <li>
   *                <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p>
   *             </li>
   *             <li>
   *                <p>Must be in Universal Coordinated Time (UTC).</p>
   *             </li>
   *             <li>
   *                <p>Must not conflict with the preferred backup window.</p>
   *             </li>
   *             <li>
   *                <p>Must be at least 30 minutes.</p>
   *             </li>
   *          </ul>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name,
   *             which resolves to a public IP address. When the DB instance isn't publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.
   *             For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The name of your Amazon S3 bucket
   *             that contains your database backup file.
   *         </p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>An AWS Identity and Access Management (IAM) role to allow Amazon RDS to access your Amazon S3 bucket.
   *         </p>
   */
  S3IngestionRoleArn: string | undefined;

  /**
   * <p>The prefix of your Amazon S3 bucket.
   *         </p>
   */
  S3Prefix?: string;

  /**
   * <p>The name of the engine of your source database.
   *         </p>
   *
   *         <p>Valid Values:  <code>mysql</code>
   *         </p>
   */
  SourceEngine: string | undefined;

  /**
   * <p>The engine version of your source database.
   *         </p>
   *
   *         <p>Valid Values: <code>5.6</code>
   *         </p>
   */
  SourceEngineVersion: string | undefined;

  /**
   * <p>A value that indicates whether the new DB instance is encrypted or not.
   *         </p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.
   *         </p>
   *         <p>Valid values: <code>standard</code> | <code>gp2</code> | <code>io1</code>
   *         </p>
   *         <p>If you specify <code>io1</code>,
   *             you must also include a value for the <code>Iops</code> parameter.
   *         </p>
   *         <p>Default: <code>io1</code>
   *             if the <code>Iops</code> parameter is specified;
   *             otherwise <code>gp2</code>
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>A list of tags to associate with this DB instance.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *         </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default
   *             processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>A list of VPC security groups to associate with this DB instance.
   *         </p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBInstanceFromS3Message {
  export function isa(o: any): o is RestoreDBInstanceFromS3Message {
    return __isa(o, "RestoreDBInstanceFromS3Message");
  }
}

export interface RestoreDBInstanceFromS3Result {
  __type?: "RestoreDBInstanceFromS3Result";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceFromS3Result {
  export function isa(o: any): o is RestoreDBInstanceFromS3Result {
    return __isa(o, "RestoreDBInstanceFromS3Result");
  }
}

/**
 * <p></p>
 */
export interface RestoreDBInstanceToPointInTimeMessage {
  __type?: "RestoreDBInstanceToPointInTimeMessage";
  /**
   * <p>A value that indicates whether minor version upgrades are applied automatically to the DB instance during the maintenance window.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Availability Zone (AZ) where the DB instance will be created.</p>
   *          <p>Default: A random, system-chosen Availability Zone.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   *          <p>Example: <code>us-east-1a</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A value that indicates whether to copy all tags from the restored DB instance to snapshots of the DB instance. By default, tags are not copied.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The compute and memory capacity of the Amazon RDS DB instance, for example, <code>db.m4.large</code>.
   *           Not all DB instance classes are available in all AWS Regions, or for all database engines.
   *           For the full list of DB instance classes,
   *           and availability for your engine, see
   *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   *          <p>Default: The same DBInstanceClass as the original DB instance.</p>
   */
  DBInstanceClass?: string;

  /**
   * <p>The database name for the restored DB instance.</p>
   *          <note>
   *             <p>This parameter isn't used for the MySQL or MariaDB engines.</p>
   *          </note>
   */
  DBName?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance.</p>
   *         <p>If you do not specify a value for <code>DBParameterGroupName</code>, then the default <code>DBParameterGroup</code>
   *                 for the specified DB engine is used.</p>
   *         <p>Constraints:</p>
   *         <ul>
   *             <li>
   *                 <p>If supplied, must match the name of an existing DBParameterGroup.</p>
   *             </li>
   *             <li>
   *                 <p>Must be 1 to 255 letters, numbers, or hyphens.</p>
   *             </li>
   *             <li>
   *                 <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                 <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The DB subnet group name to use for the new instance.</p>
   *          <p>Constraints: If supplied, must match the name of an existing DBSubnetGroup.</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled.
   *             The database can't be deleted when deletion protection is enabled. By default,
   *             deletion protection is disabled. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html">
   *                 Deleting a DB Instance</a>.
   *         </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>Specify the Active Directory directory ID to restore the DB instance in.
   *           The domain must be created prior to this operation. Currently, only Microsoft SQL Server and
   *           Oracle DB instances can be created in an Active Directory Domain.
   *       </p>
   *          <p>For Microsoft SQL Server DB instances, Amazon RDS can use
   *           Windows Authentication to authenticate users that connect to the DB instance. For more
   *           information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_SQLServerWinAuth.html">
   *               Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the
   *           <i>Amazon RDS User Guide</i>.</p>
   *          <p>For Oracle DB instances, Amazon RDS can use Kerberos Authentication to authenticate users that connect to the DB instance.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-kerberos.html">
   *               Using Kerberos Authentication with Amazon RDS for Oracle</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  Domain?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>The list of logs that the restored DB instance is to export to CloudWatch Logs. The values
   *             in the list depend on the DB engine being used. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs</a> in the <i>Amazon RDS User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string>;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access
   *           Management (IAM) accounts to database accounts. By default, mapping is disabled.
   *           For information about the supported DB engines, see <a>CreateDBInstance</a>.</p>
   *
   *          <p>For more information about IAM database authentication, see
   *         <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html">
   *             IAM Database Authentication for MySQL and PostgreSQL</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The database engine to use for the new instance.</p>
   *          <p>Default: The same as source</p>
   *          <p>Constraint: Must be compatible with the engine of the source</p>
   *
   *          <p>Valid Values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>mariadb</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>mysql</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se2</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se1</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>oracle-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>postgres</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ee</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-se</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-ex</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sqlserver-web</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Engine?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance.</p>
   *          <p>Constraints: Must be an integer greater than 1000.</p>
   *          <p>
   *             <b>SQL Server</b>
   *          </p>
   *          <p>Setting the IOPS value for the SQL Server database engine isn't supported.</p>
   */
  Iops?: number;

  /**
   * <p>License model information for the restored DB instance.</p>
   *          <p>Default: Same as source.</p>
   *          <p>
   *             Valid values:  <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code>
   *          </p>
   */
  LicenseModel?: string;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment.</p>
   *          <p>Constraint: You can't specify the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The name of the option group to be used for the restored DB instance.</p>
   *
   *          <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The port number on which the database accepts connections.</p>
   *          <p>Constraints: Value must be <code>1150-65535</code>
   *          </p>
   *          <p>Default: The same port as the original DB instance.</p>
   */
  Port?: number;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<ProcessorFeature>;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an
   *           Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance isn't
   *           publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.
   *           For more information, see <a>CreateDBInstance</a>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The date and time to restore from.</p>
   *          <p>Valid Values: Value must be a time in Universal Coordinated Time (UTC) format</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must be before the latest restorable time for the DB instance</p>
   *             </li>
   *             <li>
   *                <p>Can't be specified if the <code>UseLatestRestorableTime</code> parameter is enabled</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>2009-09-07T23:45:00Z</code>
   *          </p>
   */
  RestoreTime?: Date;

  /**
   * <p>The identifier of the source DB instance from which to restore.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must match the identifier of an existing DB instance.</p>
   *             </li>
   *          </ul>
   */
  SourceDBInstanceIdentifier?: string;

  /**
   * <p>The resource ID of the source DB instance from which to restore.</p>
   */
  SourceDbiResourceId?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   *          <p>
   *             Valid values: <code>standard | gp2 | io1</code>
   *          </p>
   *          <p>
   *             If you specify <code>io1</code>, you must also include a value for the
   *             <code>Iops</code> parameter.
   *         </p>
   *          <p>
   *             Default: <code>io1</code> if the <code>Iops</code> parameter
   *             is specified, otherwise <code>gp2</code>
   *          </p>
   */
  StorageType?: string;

  /**
   * <p>A list of tags.
   *           For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html">Tagging Amazon RDS Resources</a> in the <i>Amazon RDS User Guide.</i>
   *          </p>
   */
  Tags?: Array<Tag>;

  /**
   * <p>The name of the new DB instance to be created.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 letters, numbers, or hyphens</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens</p>
   *             </li>
   *          </ul>
   */
  TargetDBInstanceIdentifier: string | undefined;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>A value that indicates whether the DB instance class of the DB instance uses its default processor features.</p>
   */
  UseDefaultProcessorFeatures?: boolean;

  /**
   * <p>
   *           A value that indicates whether the DB instance is restored from the latest backup time. By default, the DB instance
   *           isn't restored from the latest backup time.
   *         </p>
   *          <p>Constraints: Can't be specified if the <code>RestoreTime</code> parameter is provided.</p>
   */
  UseLatestRestorableTime?: boolean;

  /**
   * <p>
   *             A list of EC2 VPC security groups to associate with this DB instance.
   *         </p>
   *         <p>
   *             Default: The default EC2 VPC security group for the DB subnet group's VPC.
   *         </p>
   */
  VpcSecurityGroupIds?: Array<string>;
}

export namespace RestoreDBInstanceToPointInTimeMessage {
  export function isa(o: any): o is RestoreDBInstanceToPointInTimeMessage {
    return __isa(o, "RestoreDBInstanceToPointInTimeMessage");
  }
}

export interface RestoreDBInstanceToPointInTimeResult {
  __type?: "RestoreDBInstanceToPointInTimeResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace RestoreDBInstanceToPointInTimeResult {
  export function isa(o: any): o is RestoreDBInstanceToPointInTimeResult {
    return __isa(o, "RestoreDBInstanceToPointInTimeResult");
  }
}

/**
 * <p>Earliest and latest time an instance can be restored to:</p>
 */
export interface RestoreWindow {
  __type?: "RestoreWindow";
  /**
   * <p>The earliest time you can restore an instance to.</p>
   */
  EarliestTime?: Date;

  /**
   * <p>The latest time you can restore an instance to.</p>
   */
  LatestTime?: Date;
}

export namespace RestoreWindow {
  export function isa(o: any): o is RestoreWindow {
    return __isa(o, "RestoreWindow");
  }
}

/**
 * <p></p>
 */
export interface RevokeDBSecurityGroupIngressMessage {
  __type?: "RevokeDBSecurityGroupIngressMessage";
  /**
   * <p>
   *         The IP range to revoke access from.
   *         Must be a valid CIDR range. If <code>CIDRIP</code> is specified,
   *         <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code>
   *         can't be provided.
   *         </p>
   */
  CIDRIP?: string;

  /**
   * <p>The name of the DB security group to revoke ingress from.</p>
   */
  DBSecurityGroupName: string | undefined;

  /**
   * <p>
   *         The id of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupId?: string;

  /**
   * <p>
   *         The name of the EC2 security group to revoke access from.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupName?: string;

  /**
   * <p>
   *         The AWS account number of the owner of the EC2 security group
   *         specified in the <code>EC2SecurityGroupName</code> parameter.
   *         The AWS access key ID isn't an acceptable value.
   *         For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided.
   *         Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
   *         </p>
   */
  EC2SecurityGroupOwnerId?: string;
}

export namespace RevokeDBSecurityGroupIngressMessage {
  export function isa(o: any): o is RevokeDBSecurityGroupIngressMessage {
    return __isa(o, "RevokeDBSecurityGroupIngressMessage");
  }
}

export interface RevokeDBSecurityGroupIngressResult {
  __type?: "RevokeDBSecurityGroupIngressResult";
  /**
   * <p>Contains the details for an Amazon RDS DB security group.
   *       </p>
   *          <p>This data type is used as a response element
   *           in the <code>DescribeDBSecurityGroups</code> action.
   *       </p>
   */
  DBSecurityGroup?: DBSecurityGroup;
}

export namespace RevokeDBSecurityGroupIngressResult {
  export function isa(o: any): o is RevokeDBSecurityGroupIngressResult {
    return __isa(o, "RevokeDBSecurityGroupIngressResult");
  }
}

/**
 * <p>Contains the scaling configuration of an Aurora Serverless DB cluster.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ScalingConfiguration {
  __type?: "ScalingConfiguration";
  /**
   * <p>A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in <code>serverless</code> DB engine mode.
   *             A DB cluster can be paused only when it's idle (it has no connections).</p>
   *         <note>
   *             <p>If a DB cluster is paused for more than seven days, the DB cluster might be backed up with a snapshot.
   *                 In this case, the DB cluster is restored when there is a request to connect to it. </p>
   *         </note>
   */
  AutoPause?: boolean;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *         <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *         <p>The maximum capacity must be greater than or equal to the minimum capacity.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The minimum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   *         <p>For Aurora MySQL, valid capacity values are <code>1</code>, <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>128</code>, and <code>256</code>.</p>
   *         <p>For Aurora PostgreSQL, valid capacity values are <code>2</code>, <code>4</code>, <code>8</code>, <code>16</code>, <code>32</code>, <code>64</code>, <code>192</code>, and <code>384</code>.</p>
   *         <p>The minimum capacity must be less than or equal to the maximum capacity.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The time, in seconds, before an Aurora DB cluster in <code>serverless</code> mode is paused.</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The action to take when the timeout is reached, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   *         <p>
   *             <code>ForceApplyCapacityChange</code> sets the capacity to the specified value as soon as possible.</p>
   *         <p>
   *             <code>RollbackCapacityChange</code>, the default, ignores the capacity change if a scaling point isn't found in the timeout period.</p>
   *         <important>
   *             <p>If you specify <code>ForceApplyCapacityChange</code>, connections that
   *                 prevent Aurora Serverless from finding a scaling point might be dropped.</p>
   *         </important>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.how-it-works.html#aurora-serverless.how-it-works.auto-scaling">
   *                     Autoscaling for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  TimeoutAction?: string;
}

export namespace ScalingConfiguration {
  export function isa(o: any): o is ScalingConfiguration {
    return __isa(o, "ScalingConfiguration");
  }
}

/**
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the
 *             <i>Amazon Aurora User Guide</i>.</p>
 */
export interface ScalingConfigurationInfo {
  __type?: "ScalingConfigurationInfo";
  /**
   * <p>A value that indicates whether automatic pause is allowed for the Aurora DB cluster
   *             in <code>serverless</code> DB engine mode.</p>
   *         <p>When the value is set to false for an Aurora Serverless DB cluster, the DB cluster automatically resumes.</p>
   */
  AutoPause?: boolean;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum capacity for the Aurora DB cluster in <code>serverless</code> DB engine
   *             mode.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The remaining amount of time, in seconds, before the Aurora DB cluster in
   *                 <code>serverless</code> mode is paused. A DB cluster can be paused only when
   *             it's idle (it has no connections).</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either
   *                 <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export namespace ScalingConfigurationInfo {
  export function isa(o: any): o is ScalingConfigurationInfo {
    return __isa(o, "ScalingConfigurationInfo");
  }
}

/**
 * <p>Contains an AWS Region name as the result of a successful call to the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegion {
  __type?: "SourceRegion";
  /**
   * <p>The endpoint for the source AWS Region endpoint.</p>
   */
  Endpoint?: string;

  /**
   * <p>The name of the source AWS Region.</p>
   */
  RegionName?: string;

  /**
   * <p>The status of the source AWS Region.</p>
   */
  Status?: string;
}

export namespace SourceRegion {
  export function isa(o: any): o is SourceRegion {
    return __isa(o, "SourceRegion");
  }
}

/**
 * <p>Contains the result of a successful invocation of the <code>DescribeSourceRegions</code> action.</p>
 */
export interface SourceRegionMessage {
  __type?: "SourceRegionMessage";
  /**
   * <p>
   *         An optional pagination token provided by a previous request.
   *         If this parameter is specified, the response includes
   *         only records beyond the marker,
   *         up to the value specified by <code>MaxRecords</code>.
   *       </p>
   */
  Marker?: string;

  /**
   * <p>A list of SourceRegion instances that contains each source AWS Region that the current AWS Region can get a Read Replica or a DB snapshot from.</p>
   */
  SourceRegions?: Array<SourceRegion>;
}

export namespace SourceRegionMessage {
  export function isa(o: any): o is SourceRegionMessage {
    return __isa(o, "SourceRegionMessage");
  }
}

export type SourceType =
  | "db-cluster"
  | "db-cluster-snapshot"
  | "db-instance"
  | "db-parameter-group"
  | "db-security-group"
  | "db-snapshot";

export interface StartActivityStreamRequest {
  __type?: "StartActivityStreamRequest";
  /**
   * <p>Specifies whether or not the database activity stream is to start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The AWS KMS key identifier for encrypting messages in the database activity stream.
   *             The key identifier can be either a key ID, a key ARN, or a key alias.</p>
   */
  KmsKeyId: string | undefined;

  /**
   * <p>Specifies the mode of the database activity stream.
   *             Database events such as a change or access generate an activity stream event.
   *             The database session can handle these events either synchronously or asynchronously.
   *         </p>
   */
  Mode: ActivityStreamMode | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster,
   *             for example <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.</p>
   */
  ResourceArn: string | undefined;
}

export namespace StartActivityStreamRequest {
  export function isa(o: any): o is StartActivityStreamRequest {
    return __isa(o, "StartActivityStreamRequest");
  }
}

export interface StartActivityStreamResponse {
  __type?: "StartActivityStreamResponse";
  /**
   * <p>Indicates whether or not the database activity stream will start as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The name of the Amazon Kinesis data stream to be used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The AWS KMS key identifier for encryption of messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The mode of the database activity stream.</p>
   */
  Mode?: ActivityStreamMode | string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;
}

export namespace StartActivityStreamResponse {
  export function isa(o: any): o is StartActivityStreamResponse {
    return __isa(o, "StartActivityStreamResponse");
  }
}

export interface StartDBClusterMessage {
  __type?: "StartDBClusterMessage";
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be started. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StartDBClusterMessage {
  export function isa(o: any): o is StartDBClusterMessage {
    return __isa(o, "StartDBClusterMessage");
  }
}

export interface StartDBClusterResult {
  __type?: "StartDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace StartDBClusterResult {
  export function isa(o: any): o is StartDBClusterResult {
    return __isa(o, "StartDBClusterResult");
  }
}

export interface StartDBInstanceMessage {
  __type?: "StartDBInstanceMessage";
  /**
   * <p>
   *             The user-supplied instance identifier.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;
}

export namespace StartDBInstanceMessage {
  export function isa(o: any): o is StartDBInstanceMessage {
    return __isa(o, "StartDBInstanceMessage");
  }
}

export interface StartDBInstanceResult {
  __type?: "StartDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace StartDBInstanceResult {
  export function isa(o: any): o is StartDBInstanceResult {
    return __isa(o, "StartDBInstanceResult");
  }
}

export interface StopActivityStreamRequest {
  __type?: "StopActivityStreamRequest";
  /**
   * <p>Specifies whether or not the database activity stream is to stop as soon as possible,
   *             regardless of the maintenance window for the database.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the DB cluster for the database activity stream.
   *             For example, <code>arn:aws:rds:us-east-1:12345667890:cluster:das-cluster</code>.
   *         </p>
   */
  ResourceArn: string | undefined;
}

export namespace StopActivityStreamRequest {
  export function isa(o: any): o is StopActivityStreamRequest {
    return __isa(o, "StopActivityStreamRequest");
  }
}

export interface StopActivityStreamResponse {
  __type?: "StopActivityStreamResponse";
  /**
   * <p>The name of the Amazon Kinesis data stream used for the database activity stream.</p>
   */
  KinesisStreamName?: string;

  /**
   * <p>The AWS KMS key identifier used for encrypting messages in the database activity stream.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The status of the database activity stream.</p>
   */
  Status?: ActivityStreamStatus | string;
}

export namespace StopActivityStreamResponse {
  export function isa(o: any): o is StopActivityStreamResponse {
    return __isa(o, "StopActivityStreamResponse");
  }
}

export interface StopDBClusterMessage {
  __type?: "StopDBClusterMessage";
  /**
   * <p>The DB cluster identifier of the Amazon Aurora DB cluster to be stopped. This parameter is stored as
   *         a lowercase string.</p>
   */
  DBClusterIdentifier: string | undefined;
}

export namespace StopDBClusterMessage {
  export function isa(o: any): o is StopDBClusterMessage {
    return __isa(o, "StopDBClusterMessage");
  }
}

export interface StopDBClusterResult {
  __type?: "StopDBClusterResult";
  /**
   * <p>Contains the details of an Amazon Aurora DB cluster.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBClusters</code>,
   *         <code>StopDBCluster</code>, and <code>StartDBCluster</code> actions.
   *       </p>
   */
  DBCluster?: DBCluster;
}

export namespace StopDBClusterResult {
  export function isa(o: any): o is StopDBClusterResult {
    return __isa(o, "StopDBClusterResult");
  }
}

export interface StopDBInstanceMessage {
  __type?: "StopDBInstanceMessage";
  /**
   * <p>
   *             The user-supplied instance identifier.
   *         </p>
   */
  DBInstanceIdentifier: string | undefined;

  /**
   * <p>
   *             The user-supplied instance identifier of the DB Snapshot created immediately before the DB instance is stopped.
   *         </p>
   */
  DBSnapshotIdentifier?: string;
}

export namespace StopDBInstanceMessage {
  export function isa(o: any): o is StopDBInstanceMessage {
    return __isa(o, "StopDBInstanceMessage");
  }
}

export interface StopDBInstanceResult {
  __type?: "StopDBInstanceResult";
  /**
   * <p>Contains the details of an Amazon RDS DB instance.
   *       </p>
   *          <p>This data type is used as a response element in the <code>DescribeDBInstances</code> action.
   *       </p>
   */
  DBInstance?: DBInstance;
}

export namespace StopDBInstanceResult {
  export function isa(o: any): o is StopDBInstanceResult {
    return __isa(o, "StopDBInstanceResult");
  }
}

/**
 * <p>
 *         This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action.
 *         </p>
 */
export interface Subnet {
  __type?: "Subnet";
  /**
   * <p>Contains Availability Zone information.</p>
   *         <p> This data type is used as an element in the <code>OrderableDBInstanceOption</code>
   *             data type.</p>
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
    return __isa(o, "Subnet");
  }
}

/**
 * <p>Metadata assigned to an Amazon RDS resource consisting of a key-value pair.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with "aws:" or "rds:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with "aws:" or "rds:". The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return __isa(o, "Tag");
  }
}

/**
 * <p></p>
 */
export interface TagListMessage {
  __type?: "TagListMessage";
  /**
   * <p>List of tags returned by the ListTagsForResource operation.</p>
   */
  TagList?: Array<Tag>;
}

export namespace TagListMessage {
  export function isa(o: any): o is TagListMessage {
    return __isa(o, "TagListMessage");
  }
}

export enum TargetType {
  RDS_INSTANCE = "RDS_INSTANCE",
  RDS_SERVERLESS_ENDPOINT = "RDS_SERVERLESS_ENDPOINT",
  TRACKED_CLUSTER = "TRACKED_CLUSTER"
}

/**
 * <p>A time zone associated with a
 *             <code>DBInstance</code>
 *             or a <code>DBSnapshot</code>.
 *             This data type is an element in the response to
 *             the <code>DescribeDBInstances</code>,
 *             the <code>DescribeDBSnapshots</code>,
 *             and the <code>DescribeDBEngineVersions</code>
 *             actions.
 *         </p>
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
    return __isa(o, "Timezone");
  }
}

/**
 * <p>The version of the database engine that a DB instance can be upgraded to.</p>
 */
export interface UpgradeTarget {
  __type?: "UpgradeTarget";
  /**
   * <p>A value that indicates whether the target version is applied to any source DB instances that have <code>AutoMinorVersionUpgrade</code> set to true.</p>
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
    return __isa(o, "UpgradeTarget");
  }
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Specifies the details of authentication used by a proxy to log in as a specific database user.</p>
 */
export interface UserAuthConfig {
  __type?: "UserAuthConfig";
  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   */
  AuthScheme?: AuthScheme | string;

  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   */
  Description?: string;

  /**
   * <p>Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.</p>
   */
  IAMAuth?: IAMAuthMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   */
  SecretArn?: string;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   */
  UserName?: string;
}

export namespace UserAuthConfig {
  export function isa(o: any): o is UserAuthConfig {
    return __isa(o, "UserAuthConfig");
  }
}

/**
 * <note>
 *             <p>This is prerelease documentation for the RDS Database Proxy feature in preview release. It is subject to change.</p>
 *          </note>
 *
 *          <p>Returns the details of authentication used by a proxy to log in as a specific database user.</p>
 */
export interface UserAuthConfigInfo {
  __type?: "UserAuthConfigInfo";
  /**
   * <p>The type of authentication that the proxy uses for connections from the proxy to the underlying database.</p>
   */
  AuthScheme?: AuthScheme | string;

  /**
   * <p>A user-specified description about the authentication used by a proxy to log in as a specific database user.</p>
   */
  Description?: string;

  /**
   * <p>Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy.</p>
   */
  IAMAuth?: IAMAuthMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate
   *         to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager.</p>
   */
  SecretArn?: string;

  /**
   * <p>The name of the database user to which the proxy connects.</p>
   */
  UserName?: string;
}

export namespace UserAuthConfigInfo {
  export function isa(o: any): o is UserAuthConfigInfo {
    return __isa(o, "UserAuthConfigInfo");
  }
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *             You can use this information when you call
 *             <code>ModifyDBInstance</code>.
 *         </p>
 */
export interface ValidDBInstanceModificationsMessage {
  __type?: "ValidDBInstanceModificationsMessage";
  /**
   * <p>Valid storage options for your DB instance.
   *         </p>
   */
  Storage?: Array<ValidStorageOptions>;

  /**
   * <p>Valid processor features for your DB instance.
   *         </p>
   */
  ValidProcessorFeatures?: Array<AvailableProcessorFeature>;
}

export namespace ValidDBInstanceModificationsMessage {
  export function isa(o: any): o is ValidDBInstanceModificationsMessage {
    return __isa(o, "ValidDBInstanceModificationsMessage");
  }
}

/**
 * <p>Information about valid modifications that you can make to your DB instance.
 *             Contains the result of a successful call to the
 *             <code>DescribeValidDBInstanceModifications</code> action.
 *         </p>
 */
export interface ValidStorageOptions {
  __type?: "ValidStorageOptions";
  /**
   * <p>The valid range of Provisioned IOPS to gibibytes of storage multiplier.
   *             For example, 3-10,
   *             which means that provisioned IOPS can be between 3 and 10 times storage.
   *         </p>
   */
  IopsToStorageRatio?: Array<DoubleRange>;

  /**
   * <p>The valid range of provisioned IOPS.
   *             For example, 1000-20000.
   *         </p>
   */
  ProvisionedIops?: Array<Range>;

  /**
   * <p>The valid range of storage in gibibytes.
   *             For example, 100 to 16384.
   *         </p>
   */
  StorageSize?: Array<Range>;

  /**
   * <p>The valid storage types for your DB instance.
   *             For example, gp2, io1.
   *         </p>
   */
  StorageType?: string;

  /**
   * <p>Whether or not Amazon RDS can automatically scale storage for DB instances that use the new instance class.</p>
   */
  SupportsStorageAutoscaling?: boolean;
}

export namespace ValidStorageOptions {
  export function isa(o: any): o is ValidStorageOptions {
    return __isa(o, "ValidStorageOptions");
  }
}

/**
 * <p>This data type is used as a response element for queries on VPC security group membership.</p>
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
    return __isa(o, "VpcSecurityGroupMembership");
  }
}

/**
 * <p>Information about the virtual private network (VPN) between the VMware vSphere cluster and the AWS website.</p>
 *         <p>For more information about RDS on VMware, see the
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/RDSonVMwareUserGuide/rds-on-vmware.html">
 *                 <i>RDS on VMware User Guide.</i>
 *             </a>
 *          </p>
 */
export interface VpnDetails {
  __type?: "VpnDetails";
  /**
   * <p>The IP address of network traffic from AWS to your on-premises data center.</p>
   */
  VpnGatewayIp?: string;

  /**
   * <p>The ID of the VPN.</p>
   */
  VpnId?: string;

  /**
   * <p>The name of the VPN.</p>
   */
  VpnName?: string;

  /**
   * <p>The preshared key (PSK) for the VPN.</p>
   */
  VpnPSK?: string;

  /**
   * <p>The state of the VPN.</p>
   */
  VpnState?: string;

  /**
   * <p>The IP address of network traffic from your on-premises data center. A custom AZ receives the network traffic.</p>
   */
  VpnTunnelOriginatorIP?: string;
}

export namespace VpnDetails {
  export function isa(o: any): o is VpnDetails {
    return __isa(o, "VpnDetails");
  }
}
