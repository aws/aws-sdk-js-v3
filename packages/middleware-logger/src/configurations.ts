import { Logger } from "@aws-sdk/types";

export interface LoggerInputConfig {
  logger?: Logger;
}

interface PreviouslyResolved {}

export interface LoggerResolvedConfig {
  logger?: Logger;
}

export const resolveLoggerConfig = <T>(input: T & PreviouslyResolved & LoggerInputConfig): T & LoggerResolvedConfig =>
  input;
