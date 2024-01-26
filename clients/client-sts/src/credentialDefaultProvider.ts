// smithy-typescript generated code
/**
 * @internal
 */
export const defaultProvider = ((input: any) => {
  // @ts-ignore
  return () => import("@aws-sdk/credential-provider-node").then(({ defaultProvider }) => defaultProvider(input)());
}) as any;
