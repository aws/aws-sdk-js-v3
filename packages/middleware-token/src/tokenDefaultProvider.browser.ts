export const tokenDefaultProvider = (input: unknown) => () => {
  throw new Error("Token is missing");
};
