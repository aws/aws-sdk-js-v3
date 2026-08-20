import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{e2e,browser}.spec.ts"],
    include: ["**/*.integ.spec.ts"],
    environment: "node",
    hideSkippedTests: true,
  },
});
