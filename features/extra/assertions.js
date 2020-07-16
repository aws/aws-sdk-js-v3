const assert = require("assert");

assert.match = function assertMatches(string, matcher, message) {
  assert.ok(string.match(matcher), message || "Expected " + string + " to match " + matcher);
};

assert.contains = function assertContains(list, matcher, message) {
  let found = false;
  for (const itemIndex in list) {
    if (!list.hasOwnProperty(itemIndex)) continue;
    if (typeof matcher === "function") {
      found = matcher(list[itemIndex]);
    } else {
      found = list[itemIndex] === matcher;
    }
    if (found) return;
  }
  assert.fail(list, matcher, message, "does not contain");
};

assert.compare = function assertComparison(actual, operator, expected, message) {
  const compare = actual + " " + operator + " " + expected;
  assert.ok(eval(compare), message || compare);
};

module.exports = {
  assert: assert,
};
