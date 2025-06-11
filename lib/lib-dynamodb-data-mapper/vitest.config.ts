import { defineConfig } from "vitest/config";
import tsconfig from "./tsconfig.json";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e,browser}.spec.ts"],
    include: ["**/*.spec.ts"],
    environment: "node",
  },
  resolve: {
    conditions: ["types"],
  },
  esbuild: {
    tsconfigRaw: tsconfig as any,
  },
});
