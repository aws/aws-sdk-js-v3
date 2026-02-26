import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ}.spec.ts"],
    include: ["**/*.spec.ts"],
    globals: true,
  },
});
