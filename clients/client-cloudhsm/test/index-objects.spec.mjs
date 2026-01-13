import {
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceRequest$,
  AddTagsToResourceResponse$,
  ClientVersion,
  CloudHSM,
  CloudHSMClient,
  CloudHsmInternalException,
  CloudHsmInternalException$,
  CloudHsmObjectState,
  CloudHSMServiceException,
  CloudHsmServiceException,
  CloudHsmServiceException$,
  CreateHapg$,
  CreateHapgCommand,
  CreateHapgRequest$,
  CreateHapgResponse$,
  CreateHsm$,
  CreateHsmCommand,
  CreateHsmRequest$,
  CreateHsmResponse$,
  CreateLunaClient$,
  CreateLunaClientCommand,
  CreateLunaClientRequest$,
  CreateLunaClientResponse$,
  DeleteHapg$,
  DeleteHapgCommand,
  DeleteHapgRequest$,
  DeleteHapgResponse$,
  DeleteHsm$,
  DeleteHsmCommand,
  DeleteHsmRequest$,
  DeleteHsmResponse$,
  DeleteLunaClient$,
  DeleteLunaClientCommand,
  DeleteLunaClientRequest$,
  DeleteLunaClientResponse$,
  DescribeHapg$,
  DescribeHapgCommand,
  DescribeHapgRequest$,
  DescribeHapgResponse$,
  DescribeHsm$,
  DescribeHsmCommand,
  DescribeHsmRequest$,
  DescribeHsmResponse$,
  DescribeLunaClient$,
  DescribeLunaClientCommand,
  DescribeLunaClientRequest$,
  DescribeLunaClientResponse$,
  GetConfig$,
  GetConfigCommand,
  GetConfigRequest$,
  GetConfigResponse$,
  HsmStatus,
  InvalidRequestException,
  InvalidRequestException$,
  ListAvailableZones$,
  ListAvailableZonesCommand,
  ListAvailableZonesRequest$,
  ListAvailableZonesResponse$,
  ListHapgs$,
  ListHapgsCommand,
  ListHapgsRequest$,
  ListHapgsResponse$,
  ListHsms$,
  ListHsmsCommand,
  ListHsmsRequest$,
  ListHsmsResponse$,
  ListLunaClients$,
  ListLunaClientsCommand,
  ListLunaClientsRequest$,
  ListLunaClientsResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ModifyHapg$,
  ModifyHapgCommand,
  ModifyHapgRequest$,
  ModifyHapgResponse$,
  ModifyHsm$,
  ModifyHsmCommand,
  ModifyHsmRequest$,
  ModifyHsmResponse$,
  ModifyLunaClient$,
  ModifyLunaClientCommand,
  ModifyLunaClientRequest$,
  ModifyLunaClientResponse$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceRequest$,
  RemoveTagsFromResourceResponse$,
  SubscriptionType,
  Tag$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudHSMClient === "function");
assert(typeof CloudHSM === "function");
// commands
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof CreateHapgCommand === "function");
assert(typeof CreateHapg$ === "object");
assert(typeof CreateHsmCommand === "function");
assert(typeof CreateHsm$ === "object");
assert(typeof CreateLunaClientCommand === "function");
assert(typeof CreateLunaClient$ === "object");
assert(typeof DeleteHapgCommand === "function");
assert(typeof DeleteHapg$ === "object");
assert(typeof DeleteHsmCommand === "function");
assert(typeof DeleteHsm$ === "object");
assert(typeof DeleteLunaClientCommand === "function");
assert(typeof DeleteLunaClient$ === "object");
assert(typeof DescribeHapgCommand === "function");
assert(typeof DescribeHapg$ === "object");
assert(typeof DescribeHsmCommand === "function");
assert(typeof DescribeHsm$ === "object");
assert(typeof DescribeLunaClientCommand === "function");
assert(typeof DescribeLunaClient$ === "object");
assert(typeof GetConfigCommand === "function");
assert(typeof GetConfig$ === "object");
assert(typeof ListAvailableZonesCommand === "function");
assert(typeof ListAvailableZones$ === "object");
assert(typeof ListHapgsCommand === "function");
assert(typeof ListHapgs$ === "object");
assert(typeof ListHsmsCommand === "function");
assert(typeof ListHsms$ === "object");
assert(typeof ListLunaClientsCommand === "function");
assert(typeof ListLunaClients$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ModifyHapgCommand === "function");
assert(typeof ModifyHapg$ === "object");
assert(typeof ModifyHsmCommand === "function");
assert(typeof ModifyHsm$ === "object");
assert(typeof ModifyLunaClientCommand === "function");
assert(typeof ModifyLunaClient$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
// structural schemas
assert(typeof AddTagsToResourceRequest$ === "object");
assert(typeof AddTagsToResourceResponse$ === "object");
assert(typeof CreateHapgRequest$ === "object");
assert(typeof CreateHapgResponse$ === "object");
assert(typeof CreateHsmRequest$ === "object");
assert(typeof CreateHsmResponse$ === "object");
assert(typeof CreateLunaClientRequest$ === "object");
assert(typeof CreateLunaClientResponse$ === "object");
assert(typeof DeleteHapgRequest$ === "object");
assert(typeof DeleteHapgResponse$ === "object");
assert(typeof DeleteHsmRequest$ === "object");
assert(typeof DeleteHsmResponse$ === "object");
assert(typeof DeleteLunaClientRequest$ === "object");
assert(typeof DeleteLunaClientResponse$ === "object");
assert(typeof DescribeHapgRequest$ === "object");
assert(typeof DescribeHapgResponse$ === "object");
assert(typeof DescribeHsmRequest$ === "object");
assert(typeof DescribeHsmResponse$ === "object");
assert(typeof DescribeLunaClientRequest$ === "object");
assert(typeof DescribeLunaClientResponse$ === "object");
assert(typeof GetConfigRequest$ === "object");
assert(typeof GetConfigResponse$ === "object");
assert(typeof ListAvailableZonesRequest$ === "object");
assert(typeof ListAvailableZonesResponse$ === "object");
assert(typeof ListHapgsRequest$ === "object");
assert(typeof ListHapgsResponse$ === "object");
assert(typeof ListHsmsRequest$ === "object");
assert(typeof ListHsmsResponse$ === "object");
assert(typeof ListLunaClientsRequest$ === "object");
assert(typeof ListLunaClientsResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ModifyHapgRequest$ === "object");
assert(typeof ModifyHapgResponse$ === "object");
assert(typeof ModifyHsmRequest$ === "object");
assert(typeof ModifyHsmResponse$ === "object");
assert(typeof ModifyLunaClientRequest$ === "object");
assert(typeof ModifyLunaClientResponse$ === "object");
assert(typeof RemoveTagsFromResourceRequest$ === "object");
assert(typeof RemoveTagsFromResourceResponse$ === "object");
assert(typeof Tag$ === "object");
// enums
assert(typeof ClientVersion === "object");
assert(typeof CloudHsmObjectState === "object");
assert(typeof HsmStatus === "object");
assert(typeof SubscriptionType === "object");
// errors
assert(CloudHsmInternalException.prototype instanceof CloudHSMServiceException);
assert(typeof CloudHsmInternalException$ === "object");
assert(CloudHsmServiceException.prototype instanceof CloudHSMServiceException);
assert(typeof CloudHsmServiceException$ === "object");
assert(InvalidRequestException.prototype instanceof CloudHSMServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(CloudHSMServiceException.prototype instanceof Error);
console.log(`CloudHSM index test passed.`);
