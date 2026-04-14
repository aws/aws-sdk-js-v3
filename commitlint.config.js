module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "docs", "test", "chore"]],
    "subject-case": [0],
    "header-max-length": [0],
    "body-max-line-length": [0],
  },
};
