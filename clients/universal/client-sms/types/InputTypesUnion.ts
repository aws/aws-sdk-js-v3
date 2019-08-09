import { CreateAppInput } from "./CreateAppInput";
import { CreateReplicationJobInput } from "./CreateReplicationJobInput";
import { DeleteAppInput } from "./DeleteAppInput";
import { DeleteAppLaunchConfigurationInput } from "./DeleteAppLaunchConfigurationInput";
import { DeleteAppReplicationConfigurationInput } from "./DeleteAppReplicationConfigurationInput";
import { DeleteReplicationJobInput } from "./DeleteReplicationJobInput";
import { DeleteServerCatalogInput } from "./DeleteServerCatalogInput";
import { DisassociateConnectorInput } from "./DisassociateConnectorInput";
import { GenerateChangeSetInput } from "./GenerateChangeSetInput";
import { GenerateTemplateInput } from "./GenerateTemplateInput";
import { GetAppInput } from "./GetAppInput";
import { GetAppLaunchConfigurationInput } from "./GetAppLaunchConfigurationInput";
import { GetAppReplicationConfigurationInput } from "./GetAppReplicationConfigurationInput";
import { GetConnectorsInput } from "./GetConnectorsInput";
import { GetReplicationJobsInput } from "./GetReplicationJobsInput";
import { GetReplicationRunsInput } from "./GetReplicationRunsInput";
import { GetServersInput } from "./GetServersInput";
import { ImportServerCatalogInput } from "./ImportServerCatalogInput";
import { LaunchAppInput } from "./LaunchAppInput";
import { ListAppsInput } from "./ListAppsInput";
import { PutAppLaunchConfigurationInput } from "./PutAppLaunchConfigurationInput";
import { PutAppReplicationConfigurationInput } from "./PutAppReplicationConfigurationInput";
import { StartAppReplicationInput } from "./StartAppReplicationInput";
import { StartOnDemandReplicationRunInput } from "./StartOnDemandReplicationRunInput";
import { StopAppReplicationInput } from "./StopAppReplicationInput";
import { TerminateAppInput } from "./TerminateAppInput";
import { UpdateAppInput } from "./UpdateAppInput";
import { UpdateReplicationJobInput } from "./UpdateReplicationJobInput";
export type InputTypesUnion =
  | CreateAppInput
  | CreateReplicationJobInput
  | DeleteAppInput
  | DeleteAppLaunchConfigurationInput
  | DeleteAppReplicationConfigurationInput
  | DeleteReplicationJobInput
  | DeleteServerCatalogInput
  | DisassociateConnectorInput
  | GenerateChangeSetInput
  | GenerateTemplateInput
  | GetAppInput
  | GetAppLaunchConfigurationInput
  | GetAppReplicationConfigurationInput
  | GetConnectorsInput
  | GetReplicationJobsInput
  | GetReplicationRunsInput
  | GetServersInput
  | ImportServerCatalogInput
  | LaunchAppInput
  | ListAppsInput
  | PutAppLaunchConfigurationInput
  | PutAppReplicationConfigurationInput
  | StartAppReplicationInput
  | StartOnDemandReplicationRunInput
  | StopAppReplicationInput
  | TerminateAppInput
  | UpdateAppInput
  | UpdateReplicationJobInput;
