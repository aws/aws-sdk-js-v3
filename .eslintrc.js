module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  extends: [
    // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["@typescript-eslint", "simple-import-sort"],
  rules: {
    /** Turn off strict enforcement */
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "prefer-rest-params": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    /** Warnings */
    "@typescript-eslint/no-namespace": "warn",

    /** Errors */
    "simple-import-sort/imports": "error",
  },
};
