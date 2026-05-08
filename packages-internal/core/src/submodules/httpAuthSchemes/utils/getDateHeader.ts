import { HttpResponse } from "@smithy/core/protocols";

/**
 * @internal
 */
export const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
