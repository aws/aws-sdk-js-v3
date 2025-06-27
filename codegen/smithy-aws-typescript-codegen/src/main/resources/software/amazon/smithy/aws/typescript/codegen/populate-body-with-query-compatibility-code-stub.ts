const populateBodyWithQueryCompatibility = (parsedOutput: any, headers: __HeaderBag) => {
  const queryErrorHeader = headers["x-amzn-query-error"];
  if (parsedOutput.body !== undefined && queryErrorHeader != null) {
    const [Code, Type] = queryErrorHeader.split(";");
    const entries = Object.entries(parsedOutput.body);
    const Error = {
      Type,
      Code,
    } as any;
    Object.assign(parsedOutput.body, Error);
    for (const [k, v] of entries) {
      Error[k] = v;
    }
    delete Error.__type;
    parsedOutput.body.Error = Error;
  }
};
