import { Provider } from "@aws-sdk/types";
/**
 * @internal
 */
export const invalidProvider: (message: string) => Provider<any> = (message: string) => () => Promise.reject(message);
