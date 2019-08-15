import { _GenericKeywords } from "./_GenericKeywords";
import { _BulletPoints } from "./_BulletPoints";
import { _NewInThisVersionBulletPoints } from "./_NewInThisVersionBulletPoints";
import { _SkillTypes } from "./_SkillTypes";
import { _Reviews } from "./_Reviews";
import { _DeveloperInfo } from "./_DeveloperInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SkillDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductDescription: {
      shape: {
        type: "string"
      }
    },
    InvocationPhrase: {
      shape: {
        type: "string"
      }
    },
    ReleaseDate: {
      shape: {
        type: "string"
      }
    },
    EndUserLicenseAgreement: {
      shape: {
        type: "string"
      }
    },
    GenericKeywords: {
      shape: _GenericKeywords
    },
    BulletPoints: {
      shape: _BulletPoints
    },
    NewInThisVersionBulletPoints: {
      shape: _NewInThisVersionBulletPoints
    },
    SkillTypes: {
      shape: _SkillTypes
    },
    Reviews: {
      shape: _Reviews
    },
    DeveloperInfo: {
      shape: _DeveloperInfo
    }
  }
};
