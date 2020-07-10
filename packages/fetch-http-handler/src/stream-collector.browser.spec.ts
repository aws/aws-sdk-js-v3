import { streamCollector } from "./stream-collector";

describe("streamCollector", () => {
  it("returns a Uint8Array from a blob", done => {
    const expected = Uint8Array.from([102, 111, 111]);
    const dataPromise = new Response(expected.buffer)
      .blob()
      .then(blob => streamCollector(blob));
    dataPromise.then((data: any) => {
      expect(data).toEqual(expected);
      done();
    });
  });

  it("returns a Uint8Array from a ReadableStream", done => {
    const expected = Uint8Array.from([102, 111, 111]);
    const dataPromise = streamCollector(new Response(expected.buffer).body);
    dataPromise.then((data: any) => {
      expect(data).toEqual(expected);
      done();
    });
  });

  it("returns a Uint8Array when stream is empty", done => {
    const expected = new Uint8Array(0);
    const dataPromise = streamCollector(new Response(expected.buffer).body);
    dataPromise.then((data: any) => {
      expect(data).toEqual(expected);
      done();
    });
  });

  it("returns a Uint8Array when blob is empty", done => {
    const expected = new Uint8Array(0);

    const dataPromise = new Response(expected.buffer)
      .blob()
      .then(blob => streamCollector(blob));
    dataPromise.then((data: any) => {
      expect(data).toEqual(expected);
      done();
    });
  });
});
