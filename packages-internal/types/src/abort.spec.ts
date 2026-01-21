import { test as it } from "vitest";

import { AbortSignal } from "./abort";

// asserts that the global abortController signal is compatible with
// our signal type.
const signal: AbortSignal = new AbortController().signal;
