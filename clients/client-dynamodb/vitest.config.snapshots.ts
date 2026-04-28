import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/snapshots.integ.spec.ts"],
    environment: "node",
    setupFiles: ["../../vitest.snapshots.setup.mts"],
  },
});
