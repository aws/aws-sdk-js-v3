export const invalidFunction = (message: string) => () => {
  throw new Error(message);
};

export const invalidAsyncFunction = (message: string) => () => Promise.reject(new Error(message));
