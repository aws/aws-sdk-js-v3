import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.integ.spec.ts"],
    environment: "node",
  },
});
