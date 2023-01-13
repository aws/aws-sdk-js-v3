import { RelativeMiddlewareOptions } from "@aws-sdk/types";

import { authMiddleware } from "./utils/authMiddleware";

export const SigV4AuthMiddlewareOptions: RelativeMiddlewareOptions = {
  name: "sigV4AuthMiddleware",
  tags: ["SIGNATURE", "SIGV4"],
  relation: "after",
  toMiddleware: "retryMiddleware",
  override: true,
};

export const sigV4AuthMiddleware = authMiddleware;
