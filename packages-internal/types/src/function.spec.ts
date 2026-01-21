import { Exact } from "@smithy/types";

import type { MergeFunctions } from "./function";

{
  const function1 = ({ a }: { a: boolean }) => ({ a: a });
  const function2 = ({ b }: { b: boolean }) => ({ b: b });

  const function3: MergeFunctions<typeof function1, typeof function2> = null as any;

  // it should merge the first arg and return value objects of function1 and function2
  // into function3.

  type assert0 = Exact<typeof function3, ({ a, b }?: { a: boolean; b: boolean }) => { a: boolean; b: boolean }>;
  const assert0: assert0 = true as const;
}

{
  const function1 = ({ a }: { a: boolean }) => Promise.resolve({ a: a });
  const function2 = ({ b }: { b: boolean }) => Promise.resolve({ b: b });

  const function3: MergeFunctions<typeof function1, typeof function2> = null as any;

  // it should merge the first arg and return value objects of function1 and function2
  // into function3 while ignoring the async Promise wrapper.

  type assert1 = Exact<
    typeof function3,
    ({ a, b }?: { a: boolean; b: boolean }) => Promise<{ a: boolean; b: boolean }>
  >;
  const assert1: assert1 = true as const;
}
