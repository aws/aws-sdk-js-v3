import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e,browser}.spec.{ts,js}"],
    include: ["**/*.spec.{ts,js}"],
    environment: "node",
  },
});
