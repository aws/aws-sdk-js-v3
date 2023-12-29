import { toUint8Array } from "@smithy/util-utf8";
import { gzip } from "fflate";

export const compressString = async (body: any): Promise<Uint8Array> =>
  new Promise((resolve, reject) => {
    gzip(toUint8Array(body || ""), (err, data) => {
      if (err) {
        reject(new Error("Failure during compression: " + err.message));
      } else {
        resolve(data);
      }
    });
  });
