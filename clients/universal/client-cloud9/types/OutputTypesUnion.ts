import { CreateEnvironmentEC2Output } from "./CreateEnvironmentEC2Output";
import { CreateEnvironmentMembershipOutput } from "./CreateEnvironmentMembershipOutput";
import { DeleteEnvironmentOutput } from "./DeleteEnvironmentOutput";
import { DeleteEnvironmentMembershipOutput } from "./DeleteEnvironmentMembershipOutput";
import { DescribeEnvironmentMembershipsOutput } from "./DescribeEnvironmentMembershipsOutput";
import { DescribeEnvironmentStatusOutput } from "./DescribeEnvironmentStatusOutput";
import { DescribeEnvironmentsOutput } from "./DescribeEnvironmentsOutput";
import { ListEnvironmentsOutput } from "./ListEnvironmentsOutput";
import { UpdateEnvironmentOutput } from "./UpdateEnvironmentOutput";
import { UpdateEnvironmentMembershipOutput } from "./UpdateEnvironmentMembershipOutput";
export type OutputTypesUnion =
  | CreateEnvironmentEC2Output
  | CreateEnvironmentMembershipOutput
  | DeleteEnvironmentOutput
  | DeleteEnvironmentMembershipOutput
  | DescribeEnvironmentMembershipsOutput
  | DescribeEnvironmentStatusOutput
  | DescribeEnvironmentsOutput
  | ListEnvironmentsOutput
  | UpdateEnvironmentOutput
  | UpdateEnvironmentMembershipOutput;
