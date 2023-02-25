import { RelativeMiddlewareOptions } from "@aws-sdk/types";

import { awsAuthMiddleware } from "./awsAuthMiddleware";

export const sigV4AuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "sigV4AuthMiddleware",
  tags: ["SIGNATURE", "SIGV4AUTH"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const sigV4AuthMiddleware = awsAuthMiddleware;
