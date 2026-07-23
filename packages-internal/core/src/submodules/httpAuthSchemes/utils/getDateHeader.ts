import { HttpResponse } from "@smithy/core/protocols";

/**
 * @internal
 */
export const getDateHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? (response.headers?.date ?? response.headers?.Date) : undefined;

/**
 * @internal
 */
export const getAgeHeader = (response: unknown): string | undefined =>
  HttpResponse.isInstance(response) ? (response.headers?.age ?? response.headers?.Age) : undefined;
