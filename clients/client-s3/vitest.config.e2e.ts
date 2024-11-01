import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.browser.e2e.spec.ts"],
    include: ["**/*.e2e.spec.ts"],
    environment: "node",
  },
});
