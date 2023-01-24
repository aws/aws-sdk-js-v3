import { HttpResponse } from "@aws-sdk/protocol-http";

/**
 * Returns a date from an HttpResponse header
 *
 * @param response potential HttpResponse
 * @returns date value at 'date' or 'Date' header, otherwise undefined
 */
export const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;
