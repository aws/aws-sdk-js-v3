export class IterationCeasedError extends Error {}

Object.defineProperty(
    IterationCeasedError.prototype,
    'iterationCeasedError',
    { value: true }
);
