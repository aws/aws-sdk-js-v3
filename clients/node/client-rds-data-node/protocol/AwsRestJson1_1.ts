import {
  ColumnMetadata,
  ExecuteStatementRequest,
  ExecuteStatementResponse,
  Field,
  SqlParameter,
  BadRequestException,
  StatementTimeoutException,
  ForbiddenException,
  InternalServerErrorException,
  ServiceUnavailableError
} from "../models";
import { HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext, ResponseMetadata } from "@aws-sdk/types";

export function executeStatementAwsRestJson1_1Serialize(
  input: ExecuteStatementRequest,
  context: SerdeContext
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
    body.parameters = sqlParameterListAwsRestJson1_1Serialize(
      input.parameters,
      context
    );
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
    ...context.endpoint,
    body: JSON.stringify(body),
    path: "/Execute",
    method: "POST",
    protocol: "https:",
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export async function executeStatementAwsRestJson1_1Deserialize(
  output: HttpResponse,
  context: SerdeContext
): Promise<ExecuteStatementResponse> {
  if (output.statusCode !== 200) {
    return executeStatementAwsRestJson1_1DeserializeError(output, context);
  }
  let data: any = await parseBody(output.body, context);
  return Promise.resolve({
    $metadata: deserializeMetadata(output),
    __type: "com.amazon.rdsdataservice#ExecuteStatementResponse",
    records: recordsAwsRestJson1_1Deserialize(data.records, context),
    columnMetadata: columnMetadataListAwsRestJson1_1Deserialize(
      data.columnMetadata,
      context
    ),
    numberOfRecordsUpdated: data.numberOfRecordsUpdated,
    generatedFields: generatedFieldsAwsRestJson1_1Deserialize(
      data.generatedFields,
      context
    )
  });
}

async function executeStatementAwsRestJson1_1DeserializeError(
  output: HttpResponse,
  context: SerdeContext
): Promise<ExecuteStatementResponse> {
  let data = await parseBody(output.body, context);
  let response: any;
  switch (output.headers["x-amzn-ErrorType"]) {
    case "BadRequestException":
    case "com.amazon.rdsdataservice#BadRequestException":
      response = badRequestExceptionDeserialize(data, context);
      break;
    case "StatementTimeoutException":
    case "com.amazon.rdsdataservice#StatementTimeoutException":
      response = statementTimeoutExceptionDeserialize(data, context);
      break;
    case "ForbiddenException":
    case "com.amazon.rdsdataservice#ForbiddenException":
      response = forbiddenExceptionDeserialize(data, context);
      break;
    case "InternalServerErrorException":
    case "com.amazon.rdsdataservice#InternalServerErrorException":
      response = internalServerErrorExceptionDeserialize(data, context);
      break;
    case "ServiceUnavailableError":
    case "com.amazon.rdsdataservice#ServiceUnavailableError":
      response = serviceUnavailableErrorDeserialize(data, context);
      break;
    default:
      response = {
        __type: "com.amazon.rdsdataservice#UnknownException",
        $name: "UnknownException",
        $fault: "server"
      };
  }

  return Promise.reject(response);
}

const sqlParameterListAwsRestJson1_1Serialize = (
  input: Array<SqlParameter>,
  context: SerdeContext
): Array<SqlParameter> =>
  input &&
  input.map(sqlParameter =>
    sqlParameterAwsRestJson1_1Serialize(sqlParameter, context)
  );

const sqlParameterAwsRestJson1_1Serialize = (
  input: SqlParameter,
  context: SerdeContext
): any =>
  input.name &&
  input.value && {
    name: input.name,
    value: fieldAwsRestJson1_1Serialize(input.value, context)
  };

const fieldAwsRestJson1_1Serialize = (
  input: Field,
  context: SerdeContext
): any =>
  Field.visit(input, {
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

export function columnMetadataAwsRestJson1_1Deserialize(
  input: any,
  context: SerdeContext
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

const columnMetadataListAwsRestJson1_1Deserialize = (
  input: any,
  context: SerdeContext
): Array<ColumnMetadata> =>
  input &&
  input.map((columnMetadata: any) =>
    columnMetadataAwsRestJson1_1Deserialize(columnMetadata, context)
  );

const fieldAwsRestJson1_1Deserialize = (
  input: any,
  context: SerdeContext
): any =>
  Field.visit(input, {
    blobValue: value => {
      value;
    },
    booleanValue: value => {
      return value;
    },
    arrayValue: value => {
      return value;
    },
    structValue: value => {
      return value;
    },
    longValue: value => {
      return value;
    },
    isNull: value => {
      return value;
    },
    doubleValue: value => {
      return value;
    },
    stringValue: value => {
      return value;
    },
    _: value => {
      return value;
    }
  });

const generatedFieldsAwsRestJson1_1Deserialize = (
  input: any,
  context: SerdeContext
): Array<Field> =>
  input &&
  input.map((field: any) => fieldAwsRestJson1_1Deserialize(field, context));

const recordsAwsRestJson1_1Deserialize = (
  input: any,
  context: SerdeContext
): Array<Array<Field>> =>
  input &&
  input.map((recordsList: any) =>
    recordsListAwsRestJson1_1Deserialize(recordsList, context)
  );

const recordsListAwsRestJson1_1Deserialize = (
  input: any,
  context: SerdeContext
): Array<Field> =>
  input &&
  input.map((field: any) => fieldAwsRestJson1_1Deserialize(field, context));

const badRequestExceptionDeserialize = (
  input: any,
  context: SerdeContext
): BadRequestException => ({
  __type: "com.amazon.rdsdataservice#BadRequestException",
  $name: "BadRequestException",
  $fault: "client",
  message: input.message
});

const statementTimeoutExceptionDeserialize = (
  input: any,
  context: SerdeContext
): StatementTimeoutException => ({
  __type: "com.amazon.rdsdataservice#StatementTimeoutException",
  $name: "StatementTimeoutException",
  $fault: "client",
  message: input.message,
  dbConnectionId: input.dbConnectionId
});

const forbiddenExceptionDeserialize = (
  input: any,
  context: SerdeContext
): ForbiddenException => ({
  __type: "com.amazon.rdsdataservice#ForbiddenException",
  $name: "ForbiddenException",
  $fault: "client",
  message: input.message
});

const internalServerErrorExceptionDeserialize = (
  input: any,
  context: SerdeContext
): InternalServerErrorException => ({
  __type: "com.amazon.rdsdataservice#InternalServerErrorException",
  $name: "InternalServerErrorException",
  $fault: "server"
});

const serviceUnavailableErrorDeserialize = (
  input: any,
  context: SerdeContext
): ServiceUnavailableError => ({
  __type: "com.amazon.rdsdataservice#ServiceUnavailableError",
  $name: "ServiceUnavailableError",
  $fault: "server"
});

const deserializeMetadata = (output: HttpResponse): ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

const parseBody = (streamBody: any, context: SerdeContext): any => {
  return context.streamCollector(streamBody).then(body => {
    return JSON.parse(context.utf8Encoder(body));
  });
};
