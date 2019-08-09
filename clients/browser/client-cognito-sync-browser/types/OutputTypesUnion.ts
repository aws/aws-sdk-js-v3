import { BulkPublishOutput } from "./BulkPublishOutput";
import { DeleteDatasetOutput } from "./DeleteDatasetOutput";
import { DescribeDatasetOutput } from "./DescribeDatasetOutput";
import { DescribeIdentityPoolUsageOutput } from "./DescribeIdentityPoolUsageOutput";
import { DescribeIdentityUsageOutput } from "./DescribeIdentityUsageOutput";
import { GetBulkPublishDetailsOutput } from "./GetBulkPublishDetailsOutput";
import { GetCognitoEventsOutput } from "./GetCognitoEventsOutput";
import { GetIdentityPoolConfigurationOutput } from "./GetIdentityPoolConfigurationOutput";
import { ListDatasetsOutput } from "./ListDatasetsOutput";
import { ListIdentityPoolUsageOutput } from "./ListIdentityPoolUsageOutput";
import { ListRecordsOutput } from "./ListRecordsOutput";
import { RegisterDeviceOutput } from "./RegisterDeviceOutput";
import { SetCognitoEventsOutput } from "./SetCognitoEventsOutput";
import { SetIdentityPoolConfigurationOutput } from "./SetIdentityPoolConfigurationOutput";
import { SubscribeToDatasetOutput } from "./SubscribeToDatasetOutput";
import { UnsubscribeFromDatasetOutput } from "./UnsubscribeFromDatasetOutput";
import { UpdateRecordsOutput } from "./UpdateRecordsOutput";
export type OutputTypesUnion =
  | BulkPublishOutput
  | DeleteDatasetOutput
  | DescribeDatasetOutput
  | DescribeIdentityPoolUsageOutput
  | DescribeIdentityUsageOutput
  | GetBulkPublishDetailsOutput
  | GetCognitoEventsOutput
  | GetIdentityPoolConfigurationOutput
  | ListDatasetsOutput
  | ListIdentityPoolUsageOutput
  | ListRecordsOutput
  | RegisterDeviceOutput
  | SetCognitoEventsOutput
  | SetIdentityPoolConfigurationOutput
  | SubscribeToDatasetOutput
  | UnsubscribeFromDatasetOutput
  | UpdateRecordsOutput;
