import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LambdaConfigType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PreSignUp: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CustomMessage: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PostConfirmation: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PreAuthentication: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PostAuthentication: {
      shape: {
        type: "string",
        min: 20
      }
    },
    DefineAuthChallenge: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreateAuthChallenge: {
      shape: {
        type: "string",
        min: 20
      }
    },
    VerifyAuthChallengeResponse: {
      shape: {
        type: "string",
        min: 20
      }
    },
    PreTokenGeneration: {
      shape: {
        type: "string",
        min: 20
      }
    },
    UserMigration: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
