import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/snapshots/**/*.spec.ts"],
    environment: "node",
    setupFiles: ["../../vitest.snapshots.setup.mts"],
  },
});
