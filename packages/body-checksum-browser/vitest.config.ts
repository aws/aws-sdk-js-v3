import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e}.spec.{ts,js}"],
    include: ["**/*.spec.{ts,js}"],
    environment: "happy-dom",
  },
});
