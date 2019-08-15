import { _PublicKeysList } from "./_PublicKeysList";
import { _DevEndpointCustomLibraries } from "./_DevEndpointCustomLibraries";
import { _StringList } from "./_StringList";
import { _MapValue } from "./_MapValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDevEndpointInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName"],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    PublicKey: {
      shape: {
        type: "string"
      }
    },
    AddPublicKeys: {
      shape: _PublicKeysList
    },
    DeletePublicKeys: {
      shape: _PublicKeysList
    },
    CustomLibraries: {
      shape: _DevEndpointCustomLibraries
    },
    UpdateEtlLibraries: {
      shape: {
        type: "boolean"
      }
    },
    DeleteArguments: {
      shape: _StringList
    },
    AddArguments: {
      shape: _MapValue
    }
  }
};
