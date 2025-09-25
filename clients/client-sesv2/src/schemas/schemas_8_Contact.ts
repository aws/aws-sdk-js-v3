// smithy-typescript generated code
import { list, op, struct } from "@smithy/core/schema";

import {
  _ADt,
  _CC,
  _CCL,
  _CCLR,
  _CCLRr,
  _CCR,
  _CCRr,
  _CLN,
  _Co,
  _Cont,
  _CTr,
  _De,
  _DNi,
  _DSSe,
  _EA,
  _F,
  _FS,
  _GC,
  _GCL,
  _GCLR,
  _GCLRe,
  _GCR,
  _GCRe,
  _h,
  _LC,
  _LCF,
  _LCR,
  _LCRi,
  _LOC,
  _LUT,
  _NT,
  _PS,
  _SSu,
  _Ta,
  _TDP,
  _TF,
  _TNo,
  _To,
  _Top,
  _TP,
  _TPL,
  _TPo,
  _UA,
  _UC,
  _UCL,
  _UCLR,
  _UCLRp,
  _UCR,
  _UCRp,
  _UDIPU,
  n0,
  TagList,
} from "./schemas_0";

/* eslint no-var: 0 */

export var Contact = struct(
  n0,
  _Co,
  0,
  [_EA, _TP, _TDP, _UA, _LUT],
  [0, () => TopicPreferenceList, () => TopicPreferenceList, 2, 4]
);
export var CreateContactListRequest = struct(n0, _CCLR, 0, [_CLN, _To, _De, _Ta], [0, () => Topics, 0, () => TagList]);
export var CreateContactListResponse = struct(n0, _CCLRr, 0, [], []);
export var CreateContactRequest = struct(
  n0,
  _CCR,
  0,
  [_CLN, _EA, _TP, _UA, _ADt],
  [[0, 1], 0, () => TopicPreferenceList, 2, 0]
);
export var CreateContactResponse = struct(n0, _CCRr, 0, [], []);
export var GetContactListRequest = struct(n0, _GCLR, 0, [_CLN], [[0, 1]]);
export var GetContactListResponse = struct(
  n0,
  _GCLRe,
  0,
  [_CLN, _To, _De, _CTr, _LUT, _Ta],
  [0, () => Topics, 0, 4, 4, () => TagList]
);
export var GetContactRequest = struct(
  n0,
  _GCR,
  0,
  [_CLN, _EA],
  [
    [0, 1],
    [0, 1],
  ]
);
export var GetContactResponse = struct(
  n0,
  _GCRe,
  0,
  [_CLN, _EA, _TP, _TDP, _UA, _ADt, _CTr, _LUT],
  [0, 0, () => TopicPreferenceList, () => TopicPreferenceList, 2, 0, 4, 4]
);
export var ListContactsFilter = struct(n0, _LCF, 0, [_FS, _TF], [0, () => TopicFilter]);
export var ListContactsRequest = struct(n0, _LCR, 0, [_CLN, _F, _PS, _NT], [[0, 1], () => ListContactsFilter, 1, 0]);
export var ListContactsResponse = struct(n0, _LCRi, 0, [_Cont, _NT], [() => ListOfContacts, 0]);
export var Topic = struct(n0, _Top, 0, [_TNo, _DNi, _De, _DSSe], [0, 0, 0, 0]);
export var TopicFilter = struct(n0, _TF, 0, [_TNo, _UDIPU], [0, 2]);
export var TopicPreference = struct(n0, _TPo, 0, [_TNo, _SSu], [0, 0]);
export var UpdateContactListRequest = struct(n0, _UCLR, 0, [_CLN, _To, _De], [[0, 1], () => Topics, 0]);
export var UpdateContactListResponse = struct(n0, _UCLRp, 0, [], []);
export var UpdateContactRequest = struct(
  n0,
  _UCR,
  0,
  [_CLN, _EA, _TP, _UA, _ADt],
  [[0, 1], [0, 1], () => TopicPreferenceList, 2, 0]
);
export var UpdateContactResponse = struct(n0, _UCRp, 0, [], []);
export var ListOfContacts = list(n0, _LOC, 0, () => Contact);
export var TopicPreferenceList = list(n0, _TPL, 0, () => TopicPreference);
export var Topics = list(n0, _To, 0, () => Topic);
export var CreateContact = op(
  n0,
  _CC,
  {
    [_h]: ["POST", "/v2/email/contact-lists/{ContactListName}/contacts", 200],
  },
  () => CreateContactRequest,
  () => CreateContactResponse
);
export var CreateContactList = op(
  n0,
  _CCL,
  {
    [_h]: ["POST", "/v2/email/contact-lists", 200],
  },
  () => CreateContactListRequest,
  () => CreateContactListResponse
);
export var GetContact = op(
  n0,
  _GC,
  {
    [_h]: ["GET", "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", 200],
  },
  () => GetContactRequest,
  () => GetContactResponse
);
export var GetContactList = op(
  n0,
  _GCL,
  {
    [_h]: ["GET", "/v2/email/contact-lists/{ContactListName}", 200],
  },
  () => GetContactListRequest,
  () => GetContactListResponse
);
export var ListContacts = op(
  n0,
  _LC,
  {
    [_h]: ["POST", "/v2/email/contact-lists/{ContactListName}/contacts/list", 200],
  },
  () => ListContactsRequest,
  () => ListContactsResponse
);
export var UpdateContact = op(
  n0,
  _UC,
  {
    [_h]: ["PUT", "/v2/email/contact-lists/{ContactListName}/contacts/{EmailAddress}", 200],
  },
  () => UpdateContactRequest,
  () => UpdateContactResponse
);
export var UpdateContactList = op(
  n0,
  _UCL,
  {
    [_h]: ["PUT", "/v2/email/contact-lists/{ContactListName}", 200],
  },
  () => UpdateContactListRequest,
  () => UpdateContactListResponse
);
