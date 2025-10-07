/**
 * @internal
 */
export const runtimeConfigShared = {
  lstatSync: () => {},
  isFileReadStream(f: unknown) {
    return false;
  },
};
