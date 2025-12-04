import {
  AddTagsToResourceCommand,
  ClientVersion,
  CloudHSM,
  CloudHSMClient,
  CloudHSMServiceException,
  CloudHsmObjectState,
  CreateHapgCommand,
  CreateHsmCommand,
  CreateLunaClientCommand,
  DeleteHapgCommand,
  DeleteHsmCommand,
  DeleteLunaClientCommand,
  DescribeHapgCommand,
  DescribeHsmCommand,
  DescribeLunaClientCommand,
  GetConfigCommand,
  HsmStatus,
  ListAvailableZonesCommand,
  ListHapgsCommand,
  ListHsmsCommand,
  ListLunaClientsCommand,
  ListTagsForResourceCommand,
  ModifyHapgCommand,
  ModifyHsmCommand,
  ModifyLunaClientCommand,
  RemoveTagsFromResourceCommand,
  SubscriptionType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof CloudHSMClient === "function")
assert(typeof CloudHSM === "function")
// commands
assert(typeof AddTagsToResourceCommand === "function")
assert(typeof CreateHapgCommand === "function")
assert(typeof CreateHsmCommand === "function")
assert(typeof CreateLunaClientCommand === "function")
assert(typeof DeleteHapgCommand === "function")
assert(typeof DeleteHsmCommand === "function")
assert(typeof DeleteLunaClientCommand === "function")
assert(typeof DescribeHapgCommand === "function")
assert(typeof DescribeHsmCommand === "function")
assert(typeof DescribeLunaClientCommand === "function")
assert(typeof GetConfigCommand === "function")
assert(typeof ListAvailableZonesCommand === "function")
assert(typeof ListHapgsCommand === "function")
assert(typeof ListHsmsCommand === "function")
assert(typeof ListLunaClientsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ModifyHapgCommand === "function")
assert(typeof ModifyHsmCommand === "function")
assert(typeof ModifyLunaClientCommand === "function")
assert(typeof RemoveTagsFromResourceCommand === "function")
// enums
assert(typeof ClientVersion === "object");
assert(typeof CloudHsmObjectState === "object");
assert(typeof HsmStatus === "object");
assert(typeof SubscriptionType === "object");
// errors
assert(CloudHSMServiceException.prototype instanceof Error)
console.log(`CloudHSM index test passed.`);
