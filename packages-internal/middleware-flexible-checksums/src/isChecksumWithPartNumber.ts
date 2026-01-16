// Check if the checkusm string ends with "-#" where # is a number between 1 and 10000 (inclusive)
export const isChecksumWithPartNumber = (checksum: string): boolean => {
  const lastHyphenIndex = checksum.lastIndexOf("-");

  if (lastHyphenIndex !== -1) {
    const numberPart = checksum.slice(lastHyphenIndex + 1);
    if (!numberPart.startsWith("0")) {
      const number = parseInt(numberPart, 10);
      if (!isNaN(number) && number >= 1 && number <= 10000) {
        return true;
      }
    }
  }

  return false;
};
