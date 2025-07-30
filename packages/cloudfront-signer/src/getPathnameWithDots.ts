/**
 * Returns pathname with `/./` and `/../` allowed by S3 Objects
 *
 * @param urlString string provided for generating the URL.
 */
export const getPathnameWithDots = (urlString: string) => {
  const url = new URL(urlString);

  if (url.pathname === "/") return url.pathname;

  if (!urlString.includes("/./") && !urlString.includes("/../")) return url.pathname;

  const startIndex = url.origin.length;
  const endIndex = urlString.includes("?")
    ? urlString.indexOf("?")
    : urlString.includes("#")
    ? urlString.indexOf("#")
    : urlString.length;
  return urlString.substring(startIndex, endIndex);
};
