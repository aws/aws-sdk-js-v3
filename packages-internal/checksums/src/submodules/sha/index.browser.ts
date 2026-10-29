const no = Symbol.for("node-only");

export { Sha1Js, Sha1Js as Sha1 } from "./sha1/Sha1Js";
export const Sha1Node = no;

export { Sha512WebCrypto, Sha512WebCrypto as Sha512 } from "./sha512/Sha512WebCrypto";
export { Sha512Js } from "./sha512/Sha512Js";

export { Sha256, Sha256Js, Sha256Node, Sha256WebCrypto } from "@smithy/core/checksum";
