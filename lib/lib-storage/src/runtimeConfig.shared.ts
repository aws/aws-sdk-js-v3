/**
 * @internal
 */
export const runtimeConfigShared = {
  statSync: () => {},
  isFileReadStream(f: unknown) {
    return false;
  },
};
