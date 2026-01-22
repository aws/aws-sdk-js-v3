/**
 * Formats XML, for testing only.
 * @internal
 * @deprecated don't use in runtime code.
 */
export function simpleFormatXml(xml: string): string {
  let b = "";
  let indentation = 0;
  for (let i = 0; i < xml.length; ++i) {
    const c = xml[i];

    if (c === "<") {
      if (xml[i + 1] === "/") {
        b += "\n" + " ".repeat(indentation - 2) + c;
        indentation -= 4;
      } else {
        b += c;
      }
    } else if (c === ">") {
      indentation += 2;
      b += c + "\n" + " ".repeat(indentation);
    } else {
      b += c;
    }
  }
  return b
    .split("\n")
    .filter((s) => !!s.trim())
    .join("\n");
}
