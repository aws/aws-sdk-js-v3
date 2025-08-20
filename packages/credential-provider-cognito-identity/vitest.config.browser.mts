import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e}.spec.ts"],
    include: ["src/localStorage.spec.ts", "src/localStorage-inmemoryStorage.spec.ts"],
    environment: "happy-dom",
  },
});
