import { _BatchCreateObjectResponse } from "./_BatchCreateObjectResponse";
import { _BatchAttachObjectResponse } from "./_BatchAttachObjectResponse";
import { _BatchDetachObjectResponse } from "./_BatchDetachObjectResponse";
import { _BatchUpdateObjectAttributesResponse } from "./_BatchUpdateObjectAttributesResponse";
import { _BatchDeleteObjectResponse } from "./_BatchDeleteObjectResponse";
import { _BatchAddFacetToObjectResponse } from "./_BatchAddFacetToObjectResponse";
import { _BatchRemoveFacetFromObjectResponse } from "./_BatchRemoveFacetFromObjectResponse";
import { _BatchAttachPolicyResponse } from "./_BatchAttachPolicyResponse";
import { _BatchDetachPolicyResponse } from "./_BatchDetachPolicyResponse";
import { _BatchCreateIndexResponse } from "./_BatchCreateIndexResponse";
import { _BatchAttachToIndexResponse } from "./_BatchAttachToIndexResponse";
import { _BatchDetachFromIndexResponse } from "./_BatchDetachFromIndexResponse";
import { _BatchAttachTypedLinkResponse } from "./_BatchAttachTypedLinkResponse";
import { _BatchDetachTypedLinkResponse } from "./_BatchDetachTypedLinkResponse";
import { _BatchUpdateLinkAttributesResponse } from "./_BatchUpdateLinkAttributesResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchWriteOperationResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateObject: {
      shape: _BatchCreateObjectResponse
    },
    AttachObject: {
      shape: _BatchAttachObjectResponse
    },
    DetachObject: {
      shape: _BatchDetachObjectResponse
    },
    UpdateObjectAttributes: {
      shape: _BatchUpdateObjectAttributesResponse
    },
    DeleteObject: {
      shape: _BatchDeleteObjectResponse
    },
    AddFacetToObject: {
      shape: _BatchAddFacetToObjectResponse
    },
    RemoveFacetFromObject: {
      shape: _BatchRemoveFacetFromObjectResponse
    },
    AttachPolicy: {
      shape: _BatchAttachPolicyResponse
    },
    DetachPolicy: {
      shape: _BatchDetachPolicyResponse
    },
    CreateIndex: {
      shape: _BatchCreateIndexResponse
    },
    AttachToIndex: {
      shape: _BatchAttachToIndexResponse
    },
    DetachFromIndex: {
      shape: _BatchDetachFromIndexResponse
    },
    AttachTypedLink: {
      shape: _BatchAttachTypedLinkResponse
    },
    DetachTypedLink: {
      shape: _BatchDetachTypedLinkResponse
    },
    UpdateLinkAttributes: {
      shape: _BatchUpdateLinkAttributesResponse
    }
  }
};
