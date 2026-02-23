import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.browser.integ.spec.ts", "**/*.browser.spec.ts"],
    include: ["**/*.e2e.spec.ts"],
    environment: "node",
  },
  mode: "development",
});
