const textNodeName = "#text";

/**
 * todo(smithy-client): remove call to hasOwnProperty
 * @internal
 */
export function getValueFromTextNode(obj: any) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key][textNodeName] !== undefined) {
      obj[key] = obj[key][textNodeName];
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      obj[key] = getValueFromTextNode(obj[key]);
    }
  }
  return obj;
}
