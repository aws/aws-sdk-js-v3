import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    setupFiles: ["../../vitest.nodejs.setup.mts"],
    include: ["**/*.e2e.spec.ts"],
    environment: "node",
  },
  mode: "development",
});
