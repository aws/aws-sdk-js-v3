import { streamCollector } from "./stream-collector";

/**
 * Have to mock the FileReader behavior in IE, where
 * reader.result is null if reads an empty blob.
 */
describe("streamCollector", () => {
  let originalFileReader = (global as any).FileReader;
  let originalBlob = (global as any).Blob;
  beforeAll(() => {
    originalFileReader = (global as any).FileReader;
    originalBlob = (global as any).Blob;
  });
  afterAll(() => {
    (global as any).FileReader = originalFileReader;
    (global as any).Blob = originalBlob;
  });

  it("returns a Uint8Array when blob is empty and when FileReader data is null(in IE)", done => {
    (global as any).FileReader = function FileReader() {
      this.result = null; //In IE, FileReader.result is null after reading empty blob
      this.readAsDataURL = jest.fn().mockImplementation(() => {
        if (this.onloadend) {
          this.readyState = 2;
          this.onloadend();
        }
      });
    };
    (global as any).Blob = function Blob() {};
    const dataPromise = streamCollector(new Blob());
    dataPromise.then((data: any) => {
      expect(data).toEqual(Uint8Array.from([]));
      done();
    });
  });
});
