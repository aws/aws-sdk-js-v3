import { _BatchListObjectAttributesResponse } from "./_BatchListObjectAttributesResponse";
import { _BatchListObjectChildrenResponse } from "./_BatchListObjectChildrenResponse";
import { _BatchGetObjectInformationResponse } from "./_BatchGetObjectInformationResponse";
import { _BatchGetObjectAttributesResponse } from "./_BatchGetObjectAttributesResponse";
import { _BatchListAttachedIndicesResponse } from "./_BatchListAttachedIndicesResponse";
import { _BatchListObjectParentPathsResponse } from "./_BatchListObjectParentPathsResponse";
import { _BatchListObjectPoliciesResponse } from "./_BatchListObjectPoliciesResponse";
import { _BatchListPolicyAttachmentsResponse } from "./_BatchListPolicyAttachmentsResponse";
import { _BatchLookupPolicyResponse } from "./_BatchLookupPolicyResponse";
import { _BatchListIndexResponse } from "./_BatchListIndexResponse";
import { _BatchListOutgoingTypedLinksResponse } from "./_BatchListOutgoingTypedLinksResponse";
import { _BatchListIncomingTypedLinksResponse } from "./_BatchListIncomingTypedLinksResponse";
import { _BatchGetLinkAttributesResponse } from "./_BatchGetLinkAttributesResponse";
import { _BatchListObjectParentsResponse } from "./_BatchListObjectParentsResponse";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BatchReadSuccessfulResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ListObjectAttributes: {
      shape: _BatchListObjectAttributesResponse
    },
    ListObjectChildren: {
      shape: _BatchListObjectChildrenResponse
    },
    GetObjectInformation: {
      shape: _BatchGetObjectInformationResponse
    },
    GetObjectAttributes: {
      shape: _BatchGetObjectAttributesResponse
    },
    ListAttachedIndices: {
      shape: _BatchListAttachedIndicesResponse
    },
    ListObjectParentPaths: {
      shape: _BatchListObjectParentPathsResponse
    },
    ListObjectPolicies: {
      shape: _BatchListObjectPoliciesResponse
    },
    ListPolicyAttachments: {
      shape: _BatchListPolicyAttachmentsResponse
    },
    LookupPolicy: {
      shape: _BatchLookupPolicyResponse
    },
    ListIndex: {
      shape: _BatchListIndexResponse
    },
    ListOutgoingTypedLinks: {
      shape: _BatchListOutgoingTypedLinksResponse
    },
    ListIncomingTypedLinks: {
      shape: _BatchListIncomingTypedLinksResponse
    },
    GetLinkAttributes: {
      shape: _BatchGetLinkAttributesResponse
    },
    ListObjectParents: {
      shape: _BatchListObjectParentsResponse
    }
  }
};
