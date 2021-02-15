import { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";

export type TranslateConfiguration = {
  marshallOptions?: marshallOptions;
  unmarshallOptions?: unmarshallOptions;
};
