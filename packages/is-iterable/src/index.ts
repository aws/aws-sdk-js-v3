export function isIterable(arg: any): arg is Iterable<any> {
  return (
    Boolean(arg) &&
    typeof Symbol !== "undefined" &&
    typeof arg[Symbol.iterator] === "function"
  );
}
