import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.browser.e2e.spec.ts", "test/unit/**/*.spec.ts"],
    environment: "happy-dom",
  },
});
