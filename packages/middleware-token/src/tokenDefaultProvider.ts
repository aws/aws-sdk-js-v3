import { nodeProvider } from "@aws-sdk/token-providers";

export const tokenDefaultProvider = (input: unknown) => nodeProvider(input as any);
