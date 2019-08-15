import { _BatchListObjectAttributes } from "./_BatchListObjectAttributes";
import { _BatchListObjectChildren } from "./_BatchListObjectChildren";
import { _BatchListAttachedIndices } from "./_BatchListAttachedIndices";
import { _BatchListObjectParentPaths } from "./_BatchListObjectParentPaths";
import { _BatchGetObjectInformation } from "./_BatchGetObjectInformation";
import { _BatchGetObjectAttributes } from "./_BatchGetObjectAttributes";
import { _BatchListObjectParents } from "./_BatchListObjectParents";
import { _BatchListObjectPolicies } from "./_BatchListObjectPolicies";
import { _BatchListPolicyAttachments } from "./_BatchListPolicyAttachments";
import { _BatchLookupPolicy } from "./_BatchLookupPolicy";
import { _BatchListIndex } from "./_BatchListIndex";
import { _BatchListOutgoingTypedLinks } from "./_BatchListOutgoingTypedLinks";
import { _BatchListIncomingTypedLinks } from "./_BatchListIncomingTypedLinks";
import { _BatchGetLinkAttributes } from "./_BatchGetLinkAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchReadOperation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ListObjectAttributes: {
      shape: _BatchListObjectAttributes
    },
    ListObjectChildren: {
      shape: _BatchListObjectChildren
    },
    ListAttachedIndices: {
      shape: _BatchListAttachedIndices
    },
    ListObjectParentPaths: {
      shape: _BatchListObjectParentPaths
    },
    GetObjectInformation: {
      shape: _BatchGetObjectInformation
    },
    GetObjectAttributes: {
      shape: _BatchGetObjectAttributes
    },
    ListObjectParents: {
      shape: _BatchListObjectParents
    },
    ListObjectPolicies: {
      shape: _BatchListObjectPolicies
    },
    ListPolicyAttachments: {
      shape: _BatchListPolicyAttachments
    },
    LookupPolicy: {
      shape: _BatchLookupPolicy
    },
    ListIndex: {
      shape: _BatchListIndex
    },
    ListOutgoingTypedLinks: {
      shape: _BatchListOutgoingTypedLinks
    },
    ListIncomingTypedLinks: {
      shape: _BatchListIncomingTypedLinks
    },
    GetLinkAttributes: {
      shape: _BatchGetLinkAttributes
    }
  }
};
