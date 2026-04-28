import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.e2e.spec.ts", "test/snapshots/**/*.spec.ts", "index-objects.spec.ts"],
    include: ["**/*.spec.ts"],
    globals: true,
  },
});
