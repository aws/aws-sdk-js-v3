export const credentialDefaultProvider = (input: unknown) => async () => {
  throw new Error("Credential is missing");
};
