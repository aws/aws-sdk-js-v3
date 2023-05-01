import { HttpRequest } from "@aws-sdk/types";

export const isWebSocketRequest = (request: HttpRequest) => request.protocol === "ws:" || request.protocol === "wss:";
