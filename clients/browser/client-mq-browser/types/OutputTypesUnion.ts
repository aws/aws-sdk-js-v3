import { CreateBrokerOutput } from "./CreateBrokerOutput";
import { CreateConfigurationOutput } from "./CreateConfigurationOutput";
import { CreateTagsOutput } from "./CreateTagsOutput";
import { CreateUserOutput } from "./CreateUserOutput";
import { DeleteBrokerOutput } from "./DeleteBrokerOutput";
import { DeleteTagsOutput } from "./DeleteTagsOutput";
import { DeleteUserOutput } from "./DeleteUserOutput";
import { DescribeBrokerOutput } from "./DescribeBrokerOutput";
import { DescribeBrokerEngineTypesOutput } from "./DescribeBrokerEngineTypesOutput";
import { DescribeBrokerInstanceOptionsOutput } from "./DescribeBrokerInstanceOptionsOutput";
import { DescribeConfigurationOutput } from "./DescribeConfigurationOutput";
import { DescribeConfigurationRevisionOutput } from "./DescribeConfigurationRevisionOutput";
import { DescribeUserOutput } from "./DescribeUserOutput";
import { ListBrokersOutput } from "./ListBrokersOutput";
import { ListConfigurationRevisionsOutput } from "./ListConfigurationRevisionsOutput";
import { ListConfigurationsOutput } from "./ListConfigurationsOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { ListUsersOutput } from "./ListUsersOutput";
import { RebootBrokerOutput } from "./RebootBrokerOutput";
import { UpdateBrokerOutput } from "./UpdateBrokerOutput";
import { UpdateConfigurationOutput } from "./UpdateConfigurationOutput";
import { UpdateUserOutput } from "./UpdateUserOutput";
export type OutputTypesUnion =
  | CreateBrokerOutput
  | CreateConfigurationOutput
  | CreateTagsOutput
  | CreateUserOutput
  | DeleteBrokerOutput
  | DeleteTagsOutput
  | DeleteUserOutput
  | DescribeBrokerOutput
  | DescribeBrokerEngineTypesOutput
  | DescribeBrokerInstanceOptionsOutput
  | DescribeConfigurationOutput
  | DescribeConfigurationRevisionOutput
  | DescribeUserOutput
  | ListBrokersOutput
  | ListConfigurationRevisionsOutput
  | ListConfigurationsOutput
  | ListTagsOutput
  | ListUsersOutput
  | RebootBrokerOutput
  | UpdateBrokerOutput
  | UpdateConfigurationOutput
  | UpdateUserOutput;
