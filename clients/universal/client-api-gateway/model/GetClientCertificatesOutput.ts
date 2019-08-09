import { _ListOfClientCertificate } from "./_ListOfClientCertificate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetClientCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    position: {
      shape: {
        type: "string"
      }
    },
    items: {
      shape: _ListOfClientCertificate,
      locationName: "item"
    }
  }
};
