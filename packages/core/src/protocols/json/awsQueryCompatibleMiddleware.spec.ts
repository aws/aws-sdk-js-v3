import { checkNumericStrings } from "./awsQueryCompatibleMiddleware";

describe(checkNumericStrings.name, () => {
  const mockWarn = jest.fn();

  it("should mutate strings matching given fields to number and emit a warning", () => {
    const input = {
      number: 5,
      string: "5",
      incorrectNumericString: "125",
      nested: {
        number: 5,
        string: "5",
        incorrectNumericString: "125",
      },
    };
    checkNumericStrings(input, new Set(["incorrectNumericString"]), "Unit::Test", mockWarn);

    expect(input).toEqual({
      number: 5,
      string: "5",
      incorrectNumericString: 125,
      nested: {
        number: 5,
        string: "5",
        incorrectNumericString: 125,
      },
    });

    expect(mockWarn).toHaveBeenCalledWith(
      'AWS SDK Warning: incorrectNumericString="125" has been converted to a number automatically in Unit::Test. Please correct the input type to number.'
    );
  });
});
