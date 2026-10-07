import { defineConfig } from "vitest/config";
// eslint-disable-next-line n/prefer-node-protocol
import path from "path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    exclude: ["**/*.{integ,e2e,browser}.spec.ts"],
    include: ["**/*.spec.ts"],
    environment: "node",
  },
  resolve: {
    alias: [
      {
        find: "@aws-sdk/client-sqs",
        replacement: path.resolve(__dirname, "../../clients/client-sqs/dist-cjs"),
      },
    ],
  },
});
