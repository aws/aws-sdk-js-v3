import { BulkPublishInput } from "./BulkPublishInput";
import { DeleteDatasetInput } from "./DeleteDatasetInput";
import { DescribeDatasetInput } from "./DescribeDatasetInput";
import { DescribeIdentityPoolUsageInput } from "./DescribeIdentityPoolUsageInput";
import { DescribeIdentityUsageInput } from "./DescribeIdentityUsageInput";
import { GetBulkPublishDetailsInput } from "./GetBulkPublishDetailsInput";
import { GetCognitoEventsInput } from "./GetCognitoEventsInput";
import { GetIdentityPoolConfigurationInput } from "./GetIdentityPoolConfigurationInput";
import { ListDatasetsInput } from "./ListDatasetsInput";
import { ListIdentityPoolUsageInput } from "./ListIdentityPoolUsageInput";
import { ListRecordsInput } from "./ListRecordsInput";
import { RegisterDeviceInput } from "./RegisterDeviceInput";
import { SetCognitoEventsInput } from "./SetCognitoEventsInput";
import { SetIdentityPoolConfigurationInput } from "./SetIdentityPoolConfigurationInput";
import { SubscribeToDatasetInput } from "./SubscribeToDatasetInput";
import { UnsubscribeFromDatasetInput } from "./UnsubscribeFromDatasetInput";
import { UpdateRecordsInput } from "./UpdateRecordsInput";
export type InputTypesUnion =
  | BulkPublishInput
  | DeleteDatasetInput
  | DescribeDatasetInput
  | DescribeIdentityPoolUsageInput
  | DescribeIdentityUsageInput
  | GetBulkPublishDetailsInput
  | GetCognitoEventsInput
  | GetIdentityPoolConfigurationInput
  | ListDatasetsInput
  | ListIdentityPoolUsageInput
  | ListRecordsInput
  | RegisterDeviceInput
  | SetCognitoEventsInput
  | SetIdentityPoolConfigurationInput
  | SubscribeToDatasetInput
  | UnsubscribeFromDatasetInput
  | UpdateRecordsInput;
