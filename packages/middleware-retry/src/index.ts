//reference: https://github.com/uuidjs/uuid#getrandomvalues-not-supported
try {
  //@ts-ignore
  require("react-native-get-random-values");
} catch {
  // do nothing
}

export * from "./retryMiddleware";
export * from "./omitRetryHeadersMiddleware";
export * from "./defaultStrategy";
export * from "./configurations";
export * from "./delayDecider";
export * from "./retryDecider";
