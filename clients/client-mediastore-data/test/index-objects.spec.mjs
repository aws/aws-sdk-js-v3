import {
  ContainerNotFoundException,
  DeleteObjectCommand,
  DescribeObjectCommand,
  GetObjectCommand,
  InternalServerError,
  ItemType,
  ListItemsCommand,
  MediaStoreData,
  MediaStoreDataClient,
  MediaStoreDataServiceException,
  ObjectNotFoundException,
  PutObjectCommand,
  RequestedRangeNotSatisfiableException,
  StorageClass,
  UploadAvailability,
  paginateListItems,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaStoreDataClient === "function");
assert(typeof MediaStoreData === "function");
// commands
assert(typeof DeleteObjectCommand === "function");
assert(typeof DescribeObjectCommand === "function");
assert(typeof GetObjectCommand === "function");
assert(typeof ListItemsCommand === "function");
assert(typeof PutObjectCommand === "function");
// enums
assert(typeof ItemType === "object");
assert(typeof StorageClass === "object");
assert(typeof UploadAvailability === "object");
// errors
assert(ContainerNotFoundException.prototype instanceof MediaStoreDataServiceException);
assert(InternalServerError.prototype instanceof MediaStoreDataServiceException);
assert(ObjectNotFoundException.prototype instanceof MediaStoreDataServiceException);
assert(RequestedRangeNotSatisfiableException.prototype instanceof MediaStoreDataServiceException);
assert(MediaStoreDataServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListItems === "function");
console.log(`MediaStoreData index test passed.`);
