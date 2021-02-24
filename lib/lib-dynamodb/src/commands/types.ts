import {
  DeleteRequest,
  ItemCollectionMetrics,
  KeysAndAttributes,
  PutRequest,
  WriteRequest,
} from "@aws-sdk/client-dynamodb";
import { NativeAttributeValue } from "@aws-sdk/util-dynamodb";

export type DocClientKeysAndAttributes = Omit<KeysAndAttributes, "Keys"> & {
  Keys: { [key: string]: NativeAttributeValue }[] | undefined;
};

export type DocClientWriteRequest = Omit<WriteRequest, "PutRequest" | "DeleteRequest"> & {
  PutRequest?: DocClientPutRequest;
  DeleteRequest?: DocClientDeleteRequest;
};

export type DocClientPutRequest = Omit<PutRequest, "Item"> & {
  Item: { [key: string]: NativeAttributeValue } | undefined;
};

export type DocClientDeleteRequest = Omit<DeleteRequest, "Key"> & {
  Key: { [key: string]: NativeAttributeValue } | undefined;
};

export type DocClientItemCollectionMetrics = Omit<ItemCollectionMetrics, "ItemCollectionKey"> & {
  ItemCollectionKey?: { [key: string]: NativeAttributeValue };
};
