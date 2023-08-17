/**
 * @internal
 */
export const tokenDefaultProvider = (input: unknown) => async () => {
  throw new Error("Token is missing");
};
