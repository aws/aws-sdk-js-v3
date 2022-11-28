export const tokenDefaultProvider = (input: unknown) => () => Promise.reject(new Error("Token is missing"));
