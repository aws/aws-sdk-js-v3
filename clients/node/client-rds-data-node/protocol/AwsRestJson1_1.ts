import {
  ColumnMetadata,
  ExecuteStatementRequest,
  ExecuteStatementResponse,
  Field,
  SqlParameter
} from "../models/rdsdataservice";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { SerializerUtils, DeserializerUtils } from '@aws-sdk/types';
import * as __aws_sdk_stream_collector_node from "@aws-sdk/stream-collector-node";
import * as __aws_sdk_util_utf8_node from "@aws-sdk/util-utf8-node";

type Utils = { [key: string]: any };

export function executeStatementAwsRestJson1_1Serialize(
  input: ExecuteStatementRequest,
  utils?: Utils
): HttpRequest {
  let body: any = {};
  if (input.resourceArn !== undefined) {
    body.resourceArn = input.resourceArn;
  }

  if (input.secretArn !== undefined) {
    body.secretArn = input.secretArn;
  }

  if (input.sql !== undefined) {
    body.sql = input.sql;
  }

  if (input.database !== undefined) {
    body.database = input.database;
  }

  if (input.schema !== undefined) {
    body.schema = input.schema;
  }

  if (input.parameters !== undefined) {
    body.parameters = sqlParameterListAwsRestJson1_1Serialize(input.parameters);
  }

  if (input.transactionId !== undefined) {
    body.transactionId = input.transactionId;
  }

  if (input.includeResultMetadata !== undefined) {
    body.includeResultMetadata = input.includeResultMetadata;
  }

  if (input.continueAfterTimeout !== undefined) {
    body.continueAfterTimeout = input.continueAfterTimeout;
  }

  return new HttpRequest({
    body: JSON.stringify(body),
    path: "/Execute",
    method: "POST",
    protocol: "https:",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function executeStatementAwsRestJson1_1Deserialize(
  output: HttpResponse,
  utils?: Utils
): Promise<ExecuteStatementResponse> {
  if (output.statusCode !== 200) {
    return executeStatementAwsRestJson1_1DeserializeError(output);
  }
  let data: any = parseBody(output.body, utils);
  return Promise.resolve({
    __type: "com.amazon.rdsdataservice#ExecuteStatementResponse",
    records: recordsAwsRestJson1_1Deserialize(data.records),
    columnMetadata: columnMetadataListAwsRestJson1_1Deserialize(
      data.columnMetadata
    ),
    numberOfRecordsUpdated: data.numberOfRecordsUpdated,
    generatedFields: generatedFieldsAwsRestJson1_1Deserialize(
      data.generatedFields
    )
  });
}

function executeStatementAwsRestJson1_1DeserializeError(
  output: HttpResponse
): Promise<ExecuteStatementResponse> {
  let data = parseBody(output);
  if (output.statusCode === 400 && data.dbConnectionId !== undefined) {
    return Promise.reject({
      __type: "com.amazon.rdsdataservice#StatementTimeoutException",
      $name: "StatementTimeoutException",
      $fault: "client",
      message: data.message,
      dbConnectionId: data.dbConnectionId
    });
  }

  if (output.statusCode === 400) {
    return Promise.reject({
      __type: "com.amazon.rdsdataservice#BadRequestException",
      $name: "BadRequestException",
      $fault: "client",
      message: data.message
    });
  }

  if (output.statusCode === 403) {
    return Promise.reject({
      __type: "com.amazon.rdsdataservice#ForbiddenException",
      $name: "ForbiddenException",
      $fault: "client",
      message: data.message
    });
  }

  if (output.statusCode === 500) {
    return Promise.reject({
      __type: "com.amazon.rdsdataservice#InternalServerErrorException",
      $name: "InternalServerErrorException",
      $fault: "server"
    });
  }

  if (output.statusCode === 503) {
    return Promise.reject({
      __type: "com.amazon.rdsdataservice#ServiceUnavailableError",
      $name: "ServiceUnavailableError",
      $fault: "server"
    });
  }

  return Promise.reject({
    __type: "com.amazon.rdsdataservice#UnknownException",
    $name: "UnknownException",
    $fault: "server"
  });
}

function sqlParameterListAwsRestJson1_1Serialize(
  input: Array<SqlParameter>
): Array<SqlParameter> {
  let list: Array<SqlParameter> = [];
  for (let SqlParameter of input) {
    list.push(sqlParameterAwsRestJson1_1Serialize(SqlParameter));
  }
  return list;
}

function sqlParameterAwsRestJson1_1Serialize(input: SqlParameter): any {
  if (input.value !== undefined) {
    return {
      name: input.name,
      value: fieldAwsRestJson1_1Serialize(input.value)
    };
  }
}

function fieldAwsRestJson1_1Serialize(input: Field): any {
  return Field.visit(input, {
    blobValue: value => {
      value;
    },
    booleanValue: value => {
      value;
    },
    arrayValue: value => {
      value;
    },
    structValue: value => {
      value;
    },
    longValue: value => {
      value;
    },
    isNull: value => {
      value;
    },
    doubleValue: value => {
      value;
    },
    stringValue: value => {
      value;
    },
    _: value => {
      value;
    }
  });
}

export function columnMetadataAwsRestJson1_1Deserialize(
  input: any
): ColumnMetadata {
  let columnMetadata: any = {
    $namespace: "com.amazon.rdsdataservice",
    $name: "ColumnMetadata"
  };
  if (input.nullable !== undefined) {
    columnMetadata.nullable = input.nullable;
  }

  if (input.label !== undefined) {
    columnMetadata.label = input.label;
  }

  if (input.typeName !== undefined) {
    columnMetadata.typeName = input.typeName;
  }

  if (input.isCaseSensitive !== undefined) {
    columnMetadata.isCaseSensitive = input.isCaseSensitive;
  }

  if (input.isCurrency !== undefined) {
    columnMetadata.isCurrency = input.isCurrency;
  }

  if (input.arrayBaseColumnType !== undefined) {
    columnMetadata.arrayBaseColumnType = input.arrayBaseColumnType;
  }

  if (input.precision !== undefined) {
    columnMetadata.precision = input.precision;
  }

  if (input.type !== undefined) {
    columnMetadata.type = input.type;
  }

  if (input.isSigned !== undefined) {
    columnMetadata.isSigned = input.isSigned;
  }

  if (input.schemeName !== undefined) {
    columnMetadata.schemeName = input.schemeName;
  }

  if (input.isAutoIncrement !== undefined) {
    columnMetadata.isAutoIncrement = input.isAutoIncrement;
  }

  if (input.name !== undefined) {
    columnMetadata.name = input.name;
  }

  if (input.scale !== undefined) {
    columnMetadata.scale = input.scale;
  }

  if (input.tableName !== undefined) {
    columnMetadata.tableName = input.tableName;
  }

  return columnMetadata;
}

function columnMetadataListAwsRestJson1_1Deserialize(
  input: any
): Array<ColumnMetadata> {
  let list: Array<ColumnMetadata> = [];
  for (let ColumnMetadata of input) {
    list.push(columnMetadataAwsRestJson1_1Deserialize(ColumnMetadata));
  }
  return list;
}

function fieldAwsRestJson1_1Deserialize(input: any): Field {
  return input.visit(input, {});
}

function generatedFieldsAwsRestJson1_1Deserialize(input: any): Array<Field> {
  let list: Array<Field> = [];
  for (let Field of input) {
    list.push(fieldAwsRestJson1_1Deserialize(Field));
  }
  return list;
}

function recordsAwsRestJson1_1Deserialize(input: any): Array<Array<Field>> {
  let list: Array<Array<Field>> = [];
  for (let recordsList of input) {
    list.push(recordsListAwsRestJson1_1Deserialize(input));
  }
  return list;
}

function recordsListAwsRestJson1_1Deserialize(input: any): Array<Field> {
  let list: Array<Field> = [];
  for (let Field of input) {
    list.push(fieldAwsRestJson1_1Serialize(input));
  }
  return list;
}

function parseBody(streamBody: any, utils?: Utils): any {
  const streamCollector = utils && utils['streamCollector'] ?
    (<DeserializerUtils>utils)['streamCollector'] :
    __aws_sdk_stream_collector_node.streamCollector;
  const toUtf8 = utils && utils['streamCollector'] ?
    (<DeserializerUtils>utils)['utf8Encoder'] :
    __aws_sdk_util_utf8_node.toUtf8;
  streamCollector(streamBody).then(body => {
    return toUtf8(body);
  });
}
