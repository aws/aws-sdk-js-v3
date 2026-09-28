import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.browser.e2e.spec.ts", "**/*.browser.spec.ts"],
    environment: "happy-dom",
  },
  mode: "development",
});
