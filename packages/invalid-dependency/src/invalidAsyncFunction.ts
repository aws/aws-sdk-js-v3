export const invalidAsyncFunction = (message: string) => () => Promise.reject(new Error(message));
