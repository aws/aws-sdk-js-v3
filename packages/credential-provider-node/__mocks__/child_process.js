const child_process = require("node:child_process");

module.exports = {
  ...child_process,
  exec(bin, ...args) {
    const callback = args.find((arg) => typeof arg === "function");
    if (bin === "credential-process") {
      return callback(null, {
        stdout: JSON.stringify({
          Version: 1,
          AccessKeyId: "PROCESS_ACCESS_KEY_ID",
          SecretAccessKey: "PROCESS_SECRET_ACCESS_KEY",
          SessionToken: "PROCESS_SESSION_TOKEN",
        }),
      });
    }
    return child_process.exec(bin, ...args);
  },
};
