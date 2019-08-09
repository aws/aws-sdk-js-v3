import { CreateAssetInput } from "./CreateAssetInput";
import { CreatePackagingConfigurationInput } from "./CreatePackagingConfigurationInput";
import { CreatePackagingGroupInput } from "./CreatePackagingGroupInput";
import { DeleteAssetInput } from "./DeleteAssetInput";
import { DeletePackagingConfigurationInput } from "./DeletePackagingConfigurationInput";
import { DeletePackagingGroupInput } from "./DeletePackagingGroupInput";
import { DescribeAssetInput } from "./DescribeAssetInput";
import { DescribePackagingConfigurationInput } from "./DescribePackagingConfigurationInput";
import { DescribePackagingGroupInput } from "./DescribePackagingGroupInput";
import { ListAssetsInput } from "./ListAssetsInput";
import { ListPackagingConfigurationsInput } from "./ListPackagingConfigurationsInput";
import { ListPackagingGroupsInput } from "./ListPackagingGroupsInput";
export type InputTypesUnion =
  | CreateAssetInput
  | CreatePackagingConfigurationInput
  | CreatePackagingGroupInput
  | DeleteAssetInput
  | DeletePackagingConfigurationInput
  | DeletePackagingGroupInput
  | DescribeAssetInput
  | DescribePackagingConfigurationInput
  | DescribePackagingGroupInput
  | ListAssetsInput
  | ListPackagingConfigurationsInput
  | ListPackagingGroupsInput;
