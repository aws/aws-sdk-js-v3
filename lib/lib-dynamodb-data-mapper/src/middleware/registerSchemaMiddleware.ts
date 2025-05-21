  import type { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

  import { marshallInputMiddleware } from './marshallInput';
  import { unmarshallOutputMiddleware } from './unmarshallOutput';

  export function registerSchemaMiddleware(client: DynamoDBDocumentClient): void {
    client.middlewareStack.addRelativeTo(marshallInputMiddleware, {
      relation: 'before',
      toMiddleware: 'awsAuthMiddleware',
      name: 'SchemaAwareMarshaller',
    });

    client.middlewareStack.add(unmarshallOutputMiddleware, {
      step: 'deserialize',
      name: 'SchemaAwareUnmarshaller',
      priority: 'low',
    });
  }