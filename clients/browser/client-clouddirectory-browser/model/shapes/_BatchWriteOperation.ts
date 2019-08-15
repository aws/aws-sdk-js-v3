import { _BatchCreateObject } from "./_BatchCreateObject";
import { _BatchAttachObject } from "./_BatchAttachObject";
import { _BatchDetachObject } from "./_BatchDetachObject";
import { _BatchUpdateObjectAttributes } from "./_BatchUpdateObjectAttributes";
import { _BatchDeleteObject } from "./_BatchDeleteObject";
import { _BatchAddFacetToObject } from "./_BatchAddFacetToObject";
import { _BatchRemoveFacetFromObject } from "./_BatchRemoveFacetFromObject";
import { _BatchAttachPolicy } from "./_BatchAttachPolicy";
import { _BatchDetachPolicy } from "./_BatchDetachPolicy";
import { _BatchCreateIndex } from "./_BatchCreateIndex";
import { _BatchAttachToIndex } from "./_BatchAttachToIndex";
import { _BatchDetachFromIndex } from "./_BatchDetachFromIndex";
import { _BatchAttachTypedLink } from "./_BatchAttachTypedLink";
import { _BatchDetachTypedLink } from "./_BatchDetachTypedLink";
import { _BatchUpdateLinkAttributes } from "./_BatchUpdateLinkAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchWriteOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CreateObject: {
      shape: _BatchCreateObject
    },
    AttachObject: {
      shape: _BatchAttachObject
    },
    DetachObject: {
      shape: _BatchDetachObject
    },
    UpdateObjectAttributes: {
      shape: _BatchUpdateObjectAttributes
    },
    DeleteObject: {
      shape: _BatchDeleteObject
    },
    AddFacetToObject: {
      shape: _BatchAddFacetToObject
    },
    RemoveFacetFromObject: {
      shape: _BatchRemoveFacetFromObject
    },
    AttachPolicy: {
      shape: _BatchAttachPolicy
    },
    DetachPolicy: {
      shape: _BatchDetachPolicy
    },
    CreateIndex: {
      shape: _BatchCreateIndex
    },
    AttachToIndex: {
      shape: _BatchAttachToIndex
    },
    DetachFromIndex: {
      shape: _BatchDetachFromIndex
    },
    AttachTypedLink: {
      shape: _BatchAttachTypedLink
    },
    DetachTypedLink: {
      shape: _BatchDetachTypedLink
    },
    UpdateLinkAttributes: {
      shape: _BatchUpdateLinkAttributes
    }
  }
};
