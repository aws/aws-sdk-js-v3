import { Member } from "@aws-sdk/types";

export const ERR_RESP_SHAPE_LEGACY: Member = {
  shape: {
    type: "structure",
    required: [],
    members: {
      Errors: {
        shape: {
          type: "structure",
          required: [],
          members: {
            Error: {
              shape: {
                type: "structure",
                required: [],
                members: {
                  Code: { shape: { type: "string" } },
                  Message: { shape: { type: "string" } }
                }
              }
            }
          }
        }
      }
    }
  }
};

export type ParsedLegacyErrorResponse = {
  Errors?: {
    Error: {
      Message: string;
      Code: string;
    };
  };
  $metadata: { requestId: string };
};
