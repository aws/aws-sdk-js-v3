import {
  ContainerNotFoundException,
  ContainerNotFoundException$,
  DeleteObject$,
  DeleteObjectCommand,
  DeleteObjectRequest$,
  DeleteObjectResponse$,
  DescribeObject$,
  DescribeObjectCommand,
  DescribeObjectRequest$,
  DescribeObjectResponse$,
  GetObject$,
  GetObjectCommand,
  GetObjectRequest$,
  GetObjectResponse$,
  InternalServerError,
  InternalServerError$,
  Item$,
  ItemType,
  ListItems$,
  ListItemsCommand,
  ListItemsRequest$,
  ListItemsResponse$,
  MediaStoreData,
  MediaStoreDataClient,
  MediaStoreDataServiceException,
  ObjectNotFoundException,
  ObjectNotFoundException$,
  paginateListItems,
  PutObject$,
  PutObjectCommand,
  PutObjectRequest$,
  PutObjectResponse$,
  RequestedRangeNotSatisfiableException,
  RequestedRangeNotSatisfiableException$,
  StorageClass,
  UploadAvailability,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MediaStoreDataClient === "function");
assert(typeof MediaStoreData === "function");
// commands
assert(typeof DeleteObjectCommand === "function");
assert(typeof DeleteObject$ === "object");
assert(typeof DescribeObjectCommand === "function");
assert(typeof DescribeObject$ === "object");
assert(typeof GetObjectCommand === "function");
assert(typeof GetObject$ === "object");
assert(typeof ListItemsCommand === "function");
assert(typeof ListItems$ === "object");
assert(typeof PutObjectCommand === "function");
assert(typeof PutObject$ === "object");
// structural schemas
assert(typeof DeleteObjectRequest$ === "object");
assert(typeof DeleteObjectResponse$ === "object");
assert(typeof DescribeObjectRequest$ === "object");
assert(typeof DescribeObjectResponse$ === "object");
assert(typeof GetObjectRequest$ === "object");
assert(typeof GetObjectResponse$ === "object");
assert(typeof Item$ === "object");
assert(typeof ListItemsRequest$ === "object");
assert(typeof ListItemsResponse$ === "object");
assert(typeof PutObjectRequest$ === "object");
assert(typeof PutObjectResponse$ === "object");
// enums
assert(typeof ItemType === "object");
assert(typeof StorageClass === "object");
assert(typeof UploadAvailability === "object");
// errors
assert(ContainerNotFoundException.prototype instanceof MediaStoreDataServiceException);
assert(typeof ContainerNotFoundException$ === "object");
assert(InternalServerError.prototype instanceof MediaStoreDataServiceException);
assert(typeof InternalServerError$ === "object");
assert(ObjectNotFoundException.prototype instanceof MediaStoreDataServiceException);
assert(typeof ObjectNotFoundException$ === "object");
assert(RequestedRangeNotSatisfiableException.prototype instanceof MediaStoreDataServiceException);
assert(typeof RequestedRangeNotSatisfiableException$ === "object");
assert(MediaStoreDataServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListItems === "function");
console.log(`MediaStoreData index test passed.`);
