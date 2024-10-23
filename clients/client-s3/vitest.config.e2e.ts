import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,browser}.spec.ts"],
    include: ["**/*.e2e.spec.ts"],
    environment: "node",
  },
});
