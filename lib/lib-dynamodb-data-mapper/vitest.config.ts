import { defineConfig } from "vitest/config";
import swc from "unplugin-swc";

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e,browser}.spec.ts"],
    include: ["**/*.spec.ts"],
    environment: "node",
    globals: true,
  },

  plugins: [
    swc.vite({
      module: { type: "es6" },
      jsc: {
        transform: {
          legacyDecorator: true,
          decoratorMetadata: true,
        },
      },
    }) as any,
  ],

  resolve: {
    conditions: ["types"],
  },
});
