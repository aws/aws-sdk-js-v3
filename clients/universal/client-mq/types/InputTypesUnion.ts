import { CreateBrokerInput } from "./CreateBrokerInput";
import { CreateConfigurationInput } from "./CreateConfigurationInput";
import { CreateTagsInput } from "./CreateTagsInput";
import { CreateUserInput } from "./CreateUserInput";
import { DeleteBrokerInput } from "./DeleteBrokerInput";
import { DeleteTagsInput } from "./DeleteTagsInput";
import { DeleteUserInput } from "./DeleteUserInput";
import { DescribeBrokerInput } from "./DescribeBrokerInput";
import { DescribeBrokerEngineTypesInput } from "./DescribeBrokerEngineTypesInput";
import { DescribeBrokerInstanceOptionsInput } from "./DescribeBrokerInstanceOptionsInput";
import { DescribeConfigurationInput } from "./DescribeConfigurationInput";
import { DescribeConfigurationRevisionInput } from "./DescribeConfigurationRevisionInput";
import { DescribeUserInput } from "./DescribeUserInput";
import { ListBrokersInput } from "./ListBrokersInput";
import { ListConfigurationRevisionsInput } from "./ListConfigurationRevisionsInput";
import { ListConfigurationsInput } from "./ListConfigurationsInput";
import { ListTagsInput } from "./ListTagsInput";
import { ListUsersInput } from "./ListUsersInput";
import { RebootBrokerInput } from "./RebootBrokerInput";
import { UpdateBrokerInput } from "./UpdateBrokerInput";
import { UpdateConfigurationInput } from "./UpdateConfigurationInput";
import { UpdateUserInput } from "./UpdateUserInput";
export type InputTypesUnion =
  | CreateBrokerInput
  | CreateConfigurationInput
  | CreateTagsInput
  | CreateUserInput
  | DeleteBrokerInput
  | DeleteTagsInput
  | DeleteUserInput
  | DescribeBrokerInput
  | DescribeBrokerEngineTypesInput
  | DescribeBrokerInstanceOptionsInput
  | DescribeConfigurationInput
  | DescribeConfigurationRevisionInput
  | DescribeUserInput
  | ListBrokersInput
  | ListConfigurationRevisionsInput
  | ListConfigurationsInput
  | ListTagsInput
  | ListUsersInput
  | RebootBrokerInput
  | UpdateBrokerInput
  | UpdateConfigurationInput
  | UpdateUserInput;
