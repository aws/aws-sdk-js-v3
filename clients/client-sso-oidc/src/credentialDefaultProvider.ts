// smithy-typescript generated code
/**
 * @internal
 */
export const defaultProvider = (async (input: any) => {
  // @ts-ignore
  const nodeCredentials: any = await import("@aws-sdk/credential-provider-node");
  return nodeCredentials.defaultProvider(input);
}) as any;
