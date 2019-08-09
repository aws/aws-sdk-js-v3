import { CreateClusterInput } from "./CreateClusterInput";
import { CreateParameterGroupInput } from "./CreateParameterGroupInput";
import { CreateSubnetGroupInput } from "./CreateSubnetGroupInput";
import { DecreaseReplicationFactorInput } from "./DecreaseReplicationFactorInput";
import { DeleteClusterInput } from "./DeleteClusterInput";
import { DeleteParameterGroupInput } from "./DeleteParameterGroupInput";
import { DeleteSubnetGroupInput } from "./DeleteSubnetGroupInput";
import { DescribeClustersInput } from "./DescribeClustersInput";
import { DescribeDefaultParametersInput } from "./DescribeDefaultParametersInput";
import { DescribeEventsInput } from "./DescribeEventsInput";
import { DescribeParameterGroupsInput } from "./DescribeParameterGroupsInput";
import { DescribeParametersInput } from "./DescribeParametersInput";
import { DescribeSubnetGroupsInput } from "./DescribeSubnetGroupsInput";
import { IncreaseReplicationFactorInput } from "./IncreaseReplicationFactorInput";
import { ListTagsInput } from "./ListTagsInput";
import { RebootNodeInput } from "./RebootNodeInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateClusterInput } from "./UpdateClusterInput";
import { UpdateParameterGroupInput } from "./UpdateParameterGroupInput";
import { UpdateSubnetGroupInput } from "./UpdateSubnetGroupInput";
export type InputTypesUnion =
  | CreateClusterInput
  | CreateParameterGroupInput
  | CreateSubnetGroupInput
  | DecreaseReplicationFactorInput
  | DeleteClusterInput
  | DeleteParameterGroupInput
  | DeleteSubnetGroupInput
  | DescribeClustersInput
  | DescribeDefaultParametersInput
  | DescribeEventsInput
  | DescribeParameterGroupsInput
  | DescribeParametersInput
  | DescribeSubnetGroupsInput
  | IncreaseReplicationFactorInput
  | ListTagsInput
  | RebootNodeInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateClusterInput
  | UpdateParameterGroupInput
  | UpdateSubnetGroupInput;
