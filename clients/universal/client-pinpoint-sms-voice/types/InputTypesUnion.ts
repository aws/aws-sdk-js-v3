import { CreateConfigurationSetInput } from "./CreateConfigurationSetInput";
import { CreateConfigurationSetEventDestinationInput } from "./CreateConfigurationSetEventDestinationInput";
import { DeleteConfigurationSetInput } from "./DeleteConfigurationSetInput";
import { DeleteConfigurationSetEventDestinationInput } from "./DeleteConfigurationSetEventDestinationInput";
import { GetConfigurationSetEventDestinationsInput } from "./GetConfigurationSetEventDestinationsInput";
import { ListConfigurationSetsInput } from "./ListConfigurationSetsInput";
import { SendVoiceMessageInput } from "./SendVoiceMessageInput";
import { UpdateConfigurationSetEventDestinationInput } from "./UpdateConfigurationSetEventDestinationInput";
export type InputTypesUnion =
  | CreateConfigurationSetInput
  | CreateConfigurationSetEventDestinationInput
  | DeleteConfigurationSetInput
  | DeleteConfigurationSetEventDestinationInput
  | GetConfigurationSetEventDestinationsInput
  | ListConfigurationSetsInput
  | SendVoiceMessageInput
  | UpdateConfigurationSetEventDestinationInput;
