import { AssociateCreatedArtifactOutput } from "./AssociateCreatedArtifactOutput";
import { AssociateDiscoveredResourceOutput } from "./AssociateDiscoveredResourceOutput";
import { CreateProgressUpdateStreamOutput } from "./CreateProgressUpdateStreamOutput";
import { DeleteProgressUpdateStreamOutput } from "./DeleteProgressUpdateStreamOutput";
import { DescribeApplicationStateOutput } from "./DescribeApplicationStateOutput";
import { DescribeMigrationTaskOutput } from "./DescribeMigrationTaskOutput";
import { DisassociateCreatedArtifactOutput } from "./DisassociateCreatedArtifactOutput";
import { DisassociateDiscoveredResourceOutput } from "./DisassociateDiscoveredResourceOutput";
import { ImportMigrationTaskOutput } from "./ImportMigrationTaskOutput";
import { ListCreatedArtifactsOutput } from "./ListCreatedArtifactsOutput";
import { ListDiscoveredResourcesOutput } from "./ListDiscoveredResourcesOutput";
import { ListMigrationTasksOutput } from "./ListMigrationTasksOutput";
import { ListProgressUpdateStreamsOutput } from "./ListProgressUpdateStreamsOutput";
import { NotifyApplicationStateOutput } from "./NotifyApplicationStateOutput";
import { NotifyMigrationTaskStateOutput } from "./NotifyMigrationTaskStateOutput";
import { PutResourceAttributesOutput } from "./PutResourceAttributesOutput";
export type OutputTypesUnion =
  | AssociateCreatedArtifactOutput
  | AssociateDiscoveredResourceOutput
  | CreateProgressUpdateStreamOutput
  | DeleteProgressUpdateStreamOutput
  | DescribeApplicationStateOutput
  | DescribeMigrationTaskOutput
  | DisassociateCreatedArtifactOutput
  | DisassociateDiscoveredResourceOutput
  | ImportMigrationTaskOutput
  | ListCreatedArtifactsOutput
  | ListDiscoveredResourcesOutput
  | ListMigrationTasksOutput
  | ListProgressUpdateStreamsOutput
  | NotifyApplicationStateOutput
  | NotifyMigrationTaskStateOutput
  | PutResourceAttributesOutput;
