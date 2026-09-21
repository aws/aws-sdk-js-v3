import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.e2e.spec.ts"],
    exclude: ["**/*.browser.e2e.spec.ts"],
    environment: "node",
  },
});
