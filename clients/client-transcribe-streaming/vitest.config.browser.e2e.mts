import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    conditions: ["browser", "module", "import", "default"],
    mainFields: ["browser", "module", "main"],
  },
  test: {
    include: ["**/*.e2e.spec.ts"],
    environment: "happy-dom",
    setupFiles: ["../../vitest.browser.setup.mts"],
  },
});
