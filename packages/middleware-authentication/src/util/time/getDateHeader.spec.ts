import { HttpResponse } from "@aws-sdk/protocol-http";

import { getDateHeader } from "./getDateHeader";

/**
 * TODO(identityandauth)
 */
describe(getDateHeader.name, () => {
  const MOCK_DATE = "mockDate";

  it.each(["date", "Date"])("should getDateHeader from 'date'", (dateHeader) => {
    const mockResponse = new HttpResponse({
      statusCode: 200,
      headers: {
        [dateHeader]: MOCK_DATE,
      },
    });
    expect(getDateHeader(mockResponse)).toBe(MOCK_DATE);
  });

  it("should not getDateHeader from 'date' due to not being a response", () => {
    const mockResponse = {};
    expect(getDateHeader(mockResponse)).toBe(undefined);
  });

  it("should not getDateHeader from 'date' due to no date header", () => {
    const mockResponse = new HttpResponse({
      statusCode: 200,
      headers: {},
    });
    expect(getDateHeader(mockResponse)).toBe(undefined);
  });
});
