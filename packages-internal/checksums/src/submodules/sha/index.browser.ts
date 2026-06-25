const no = Symbol.for("node-only");

export { Sha1Js, Sha1Js as Sha1 } from "./sha1/Sha1Js";
export const Sha1Node = no;

export { Sha256, Sha256Js, Sha256Node, Sha256WebCrypto } from "@smithy/core/checksum";
