const populateBodyWithQueryCompatibility = (parsedOutput: any, headers: __HeaderBag) => {
  const queryErrorHeader = headers["x-amzn-query-error"];
  if (parsedOutput.body !== undefined && queryErrorHeader != null) {
    const codeAndType = queryErrorHeader.split(";");
    parsedOutput.body.Code = codeAndType[0];
    parsedOutput.body.Type = codeAndType[1];
  }
};
