import { HttpResponse } from "@aws-sdk/protocol-http";

export const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
