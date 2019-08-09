import { CreateEnvironmentEC2Input } from "./CreateEnvironmentEC2Input";
import { CreateEnvironmentMembershipInput } from "./CreateEnvironmentMembershipInput";
import { DeleteEnvironmentInput } from "./DeleteEnvironmentInput";
import { DeleteEnvironmentMembershipInput } from "./DeleteEnvironmentMembershipInput";
import { DescribeEnvironmentMembershipsInput } from "./DescribeEnvironmentMembershipsInput";
import { DescribeEnvironmentStatusInput } from "./DescribeEnvironmentStatusInput";
import { DescribeEnvironmentsInput } from "./DescribeEnvironmentsInput";
import { ListEnvironmentsInput } from "./ListEnvironmentsInput";
import { UpdateEnvironmentInput } from "./UpdateEnvironmentInput";
import { UpdateEnvironmentMembershipInput } from "./UpdateEnvironmentMembershipInput";
export type InputTypesUnion =
  | CreateEnvironmentEC2Input
  | CreateEnvironmentMembershipInput
  | DeleteEnvironmentInput
  | DeleteEnvironmentMembershipInput
  | DescribeEnvironmentMembershipsInput
  | DescribeEnvironmentStatusInput
  | DescribeEnvironmentsInput
  | ListEnvironmentsInput
  | UpdateEnvironmentInput
  | UpdateEnvironmentMembershipInput;
