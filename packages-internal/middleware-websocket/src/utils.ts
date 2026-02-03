import { HttpRequest } from "@smithy/types";

export const isWebSocketRequest = (request: HttpRequest) => request.protocol === "ws:" || request.protocol === "wss:";
