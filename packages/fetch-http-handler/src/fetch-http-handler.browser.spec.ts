import { FetchHttpHandler } from "./fetch-http-handler";

describe(FetchHttpHandler.name, () => {
  it("calls request without mode included in requestOptions", (done) => {
    const fetchHttpHandler = new FetchHttpHandler();
    let spy = spyOn(window, "Request");
    fetchHttpHandler.handle({} as any, {});
    expect(spy.calls.argsFor(0)[1].mode).toEqual(undefined);
    done();
  });
});
