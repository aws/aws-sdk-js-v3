import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.e2e.spec.{ts,js}"],
    environment: "node",
  },
});
