import { CreateLicenseConfigurationOutput } from "./CreateLicenseConfigurationOutput";
import { DeleteLicenseConfigurationOutput } from "./DeleteLicenseConfigurationOutput";
import { GetLicenseConfigurationOutput } from "./GetLicenseConfigurationOutput";
import { GetServiceSettingsOutput } from "./GetServiceSettingsOutput";
import { ListAssociationsForLicenseConfigurationOutput } from "./ListAssociationsForLicenseConfigurationOutput";
import { ListLicenseConfigurationsOutput } from "./ListLicenseConfigurationsOutput";
import { ListLicenseSpecificationsForResourceOutput } from "./ListLicenseSpecificationsForResourceOutput";
import { ListResourceInventoryOutput } from "./ListResourceInventoryOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListUsageForLicenseConfigurationOutput } from "./ListUsageForLicenseConfigurationOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdateLicenseConfigurationOutput } from "./UpdateLicenseConfigurationOutput";
import { UpdateLicenseSpecificationsForResourceOutput } from "./UpdateLicenseSpecificationsForResourceOutput";
import { UpdateServiceSettingsOutput } from "./UpdateServiceSettingsOutput";
export type OutputTypesUnion =
  | CreateLicenseConfigurationOutput
  | DeleteLicenseConfigurationOutput
  | GetLicenseConfigurationOutput
  | GetServiceSettingsOutput
  | ListAssociationsForLicenseConfigurationOutput
  | ListLicenseConfigurationsOutput
  | ListLicenseSpecificationsForResourceOutput
  | ListResourceInventoryOutput
  | ListTagsForResourceOutput
  | ListUsageForLicenseConfigurationOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdateLicenseConfigurationOutput
  | UpdateLicenseSpecificationsForResourceOutput
  | UpdateServiceSettingsOutput;
