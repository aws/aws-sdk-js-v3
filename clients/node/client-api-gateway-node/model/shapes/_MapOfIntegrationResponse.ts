import { Map as _Map_ } from "@aws-sdk/types";
import { _IntegrationResponse } from "./_IntegrationResponse";

export const _MapOfIntegrationResponse: _Map_ = {
  type: "map",
  key: {
    shape: {
      type: "string"
    }
  },
  value: {
    shape: _IntegrationResponse
  }
};
