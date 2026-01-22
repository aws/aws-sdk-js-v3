/**
 * Prints bytes as binary string with numbers.
 * @param bytes - to print.
 * @deprecated for testing only, do not use in runtime.
 */
export function printBytes(bytes: Uint8Array) {
  return [...bytes].map((n) => {
    const pad = (num: number) => ("0".repeat(8) + num.toString(2)).slice(-8);
    const b = pad(n);
    const [maj, min] = [b.slice(0, 3), b.slice(3)];

    let dmaj: string;

    switch (maj) {
      case "000":
        dmaj = "0 - Uint64";
        break;
      case "001":
        dmaj = "1 - Neg Uint64";
        break;
      case "010":
        dmaj = "2 - unstructured bytestring";
        break;
      case "011":
        dmaj = "3 - utf8 string";
        break;
      case "100":
        dmaj = "4 - list";
        break;
      case "101":
        dmaj = "5 - map";
        break;
      case "110":
        dmaj = "6 - tag";
        break;
      case "111":
        dmaj = "7 - special";
        break;
      default:
        dmaj = String(parseInt(maj, 2));
    }

    return `${maj}_${min} (${dmaj}, ${parseInt(min, 2)})`;
  });
}
