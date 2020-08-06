import { resolveEventStreamSerdeConfig } from "./EventStreamSerdeConfig";

describe("resolveEventStreamSerdeConfig", () => {
  const eventStreamSerdeProvider = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("sets value returned by eventStreamSerdeProvider", () => {
    const mockReturn = "mockReturn";
    eventStreamSerdeProvider.mockReturnValueOnce(mockReturn);

    const input = { eventStreamSerdeProvider };
    expect(resolveEventStreamSerdeConfig(input).eventStreamMarshaller).toStrictEqual(mockReturn);
    expect(eventStreamSerdeProvider).toHaveBeenCalledTimes(1);
    expect(eventStreamSerdeProvider).toHaveBeenCalledWith(input);
  });
});
