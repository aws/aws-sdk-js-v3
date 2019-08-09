import { CreateClusterOutput } from "./CreateClusterOutput";
import { CreateParameterGroupOutput } from "./CreateParameterGroupOutput";
import { CreateSubnetGroupOutput } from "./CreateSubnetGroupOutput";
import { DecreaseReplicationFactorOutput } from "./DecreaseReplicationFactorOutput";
import { DeleteClusterOutput } from "./DeleteClusterOutput";
import { DeleteParameterGroupOutput } from "./DeleteParameterGroupOutput";
import { DeleteSubnetGroupOutput } from "./DeleteSubnetGroupOutput";
import { DescribeClustersOutput } from "./DescribeClustersOutput";
import { DescribeDefaultParametersOutput } from "./DescribeDefaultParametersOutput";
import { DescribeEventsOutput } from "./DescribeEventsOutput";
import { DescribeParameterGroupsOutput } from "./DescribeParameterGroupsOutput";
import { DescribeParametersOutput } from "./DescribeParametersOutput";
import { DescribeSubnetGroupsOutput } from "./DescribeSubnetGroupsOutput";
import { IncreaseReplicationFactorOutput } from "./IncreaseReplicationFactorOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { RebootNodeOutput } from "./RebootNodeOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateClusterOutput } from "./UpdateClusterOutput";
import { UpdateParameterGroupOutput } from "./UpdateParameterGroupOutput";
import { UpdateSubnetGroupOutput } from "./UpdateSubnetGroupOutput";
export type OutputTypesUnion =
  | CreateClusterOutput
  | CreateParameterGroupOutput
  | CreateSubnetGroupOutput
  | DecreaseReplicationFactorOutput
  | DeleteClusterOutput
  | DeleteParameterGroupOutput
  | DeleteSubnetGroupOutput
  | DescribeClustersOutput
  | DescribeDefaultParametersOutput
  | DescribeEventsOutput
  | DescribeParameterGroupsOutput
  | DescribeParametersOutput
  | DescribeSubnetGroupsOutput
  | IncreaseReplicationFactorOutput
  | ListTagsOutput
  | RebootNodeOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateClusterOutput
  | UpdateParameterGroupOutput
  | UpdateSubnetGroupOutput;
