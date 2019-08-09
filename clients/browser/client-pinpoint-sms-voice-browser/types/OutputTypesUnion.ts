import { CreateConfigurationSetOutput } from "./CreateConfigurationSetOutput";
import { CreateConfigurationSetEventDestinationOutput } from "./CreateConfigurationSetEventDestinationOutput";
import { DeleteConfigurationSetOutput } from "./DeleteConfigurationSetOutput";
import { DeleteConfigurationSetEventDestinationOutput } from "./DeleteConfigurationSetEventDestinationOutput";
import { GetConfigurationSetEventDestinationsOutput } from "./GetConfigurationSetEventDestinationsOutput";
import { ListConfigurationSetsOutput } from "./ListConfigurationSetsOutput";
import { SendVoiceMessageOutput } from "./SendVoiceMessageOutput";
import { UpdateConfigurationSetEventDestinationOutput } from "./UpdateConfigurationSetEventDestinationOutput";
export type OutputTypesUnion =
  | CreateConfigurationSetOutput
  | CreateConfigurationSetEventDestinationOutput
  | DeleteConfigurationSetOutput
  | DeleteConfigurationSetEventDestinationOutput
  | GetConfigurationSetEventDestinationsOutput
  | ListConfigurationSetsOutput
  | SendVoiceMessageOutput
  | UpdateConfigurationSetEventDestinationOutput;
