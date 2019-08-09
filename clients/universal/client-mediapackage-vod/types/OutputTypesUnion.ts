import { CreateAssetOutput } from "./CreateAssetOutput";
import { CreatePackagingConfigurationOutput } from "./CreatePackagingConfigurationOutput";
import { CreatePackagingGroupOutput } from "./CreatePackagingGroupOutput";
import { DeleteAssetOutput } from "./DeleteAssetOutput";
import { DeletePackagingConfigurationOutput } from "./DeletePackagingConfigurationOutput";
import { DeletePackagingGroupOutput } from "./DeletePackagingGroupOutput";
import { DescribeAssetOutput } from "./DescribeAssetOutput";
import { DescribePackagingConfigurationOutput } from "./DescribePackagingConfigurationOutput";
import { DescribePackagingGroupOutput } from "./DescribePackagingGroupOutput";
import { ListAssetsOutput } from "./ListAssetsOutput";
import { ListPackagingConfigurationsOutput } from "./ListPackagingConfigurationsOutput";
import { ListPackagingGroupsOutput } from "./ListPackagingGroupsOutput";
export type OutputTypesUnion =
  | CreateAssetOutput
  | CreatePackagingConfigurationOutput
  | CreatePackagingGroupOutput
  | DeleteAssetOutput
  | DeletePackagingConfigurationOutput
  | DeletePackagingGroupOutput
  | DescribeAssetOutput
  | DescribePackagingConfigurationOutput
  | DescribePackagingGroupOutput
  | ListAssetsOutput
  | ListPackagingConfigurationsOutput
  | ListPackagingGroupsOutput;
