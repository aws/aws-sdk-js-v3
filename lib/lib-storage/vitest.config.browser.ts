import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.browser.spec.ts"],
    environment: "jsdom",
  },
});
